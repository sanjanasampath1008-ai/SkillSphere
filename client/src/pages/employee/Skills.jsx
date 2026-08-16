import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import SkillCard from "../../components/SkillCard";
import { useAuth } from "../../context/AuthContext";
import { getEmployeeSkills, getSkills, addEmployeeSkill, updateEmployeeSkill } from "../../services/api";

const demoSkills = [
  { _id: "1", name: "React", category: "Frontend", score: 85 },
  { _id: "2", name: "TypeScript", category: "Frontend", score: 78 },
  { _id: "3", name: "JavaScript", category: "Frontend", score: 90 },
  { _id: "4", name: "CSS / Tailwind", category: "Frontend", score: 82 },
  { _id: "5", name: "Node.js", category: "Backend", score: 62 },
  { _id: "6", name: "PostgreSQL", category: "Backend", score: 55 },
  { _id: "7", name: "GraphQL", category: "Backend", score: 45 },
  { _id: "8", name: "AWS", category: "Cloud", score: 30 },
  { _id: "9", name: "Docker", category: "DevOps", score: 20 },
  { _id: "10", name: "Git / CI/CD", category: "DevOps", score: 75 },
  { _id: "11", name: "Communication", category: "Soft Skills", score: 75 },
  { _id: "12", name: "Problem Solving", category: "Soft Skills", score: 80 },
  { _id: "13", name: "Leadership", category: "Soft Skills", score: 55 },
];

export default function Skills() {
  const { user } = useAuth();
  const [skills, setSkills] = useState(demoSkills);
  const [category, setCategory] = useState("All");
  const [showAdd, setShowAdd] = useState(false);
  const [newSkill, setNewSkill] = useState({
    name: "",
    category: "Frontend",
    score: 50,
  });

  useEffect(() => {
    async function load() {
      if (!user?._id && !user?.id) return;

      try {
        const response = await getEmployeeSkills(
          user._id || user.id
        );

        if (response.data?.length) {
          setSkills(response.data);
        }
      } catch {
        // Demo data remains available if backend isn't ready.
      }
    }

    load();
  }, [user]);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Cloud",
    "DevOps",
    "Soft Skills",
  ];

  const filtered =
    category === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === category
        );

  const updateScore = async (skill, score) => {
    const updated = skills.map((item) =>
      item._id === skill._id
        ? { ...item, score: Number(score) }
        : item
    );

    setSkills(updated);

    try {
      if (user?._id || user?.id) {
        await updateEmployeeSkill(
          user._id || user.id,
          skill._id,
          { score: Number(score) }
        );
      }
    } catch {
      // Keep local update.
    }
  };

  const addSkill = async (e) => {
    e.preventDefault();

    if (!newSkill.name.trim()) return;

    const localSkill = {
      _id: Date.now().toString(),
      ...newSkill,
      score: Number(newSkill.score),
    };

    setSkills((prev) => [...prev, localSkill]);
    setShowAdd(false);

    try {
      if (user?._id || user?.id) {
        const response = await addEmployeeSkill(
          user._id || user.id,
          newSkill
        );

        if (response.data) {
          setSkills((prev) =>
            prev.map((item) =>
              item._id === localSkill._id
                ? response.data
                : item
            )
          );
        }
      }
    } catch {
      // Local version remains.
    }

    setNewSkill({
      name: "",
      category: "Frontend",
      score: 50,
    });
  };

  return (
    <div className="page-container">
      <PageHeader
        title="My Skills"
        subtitle="Track and manage your skill proficiency across all areas."
        action={
          <button
            className="primary-button"
            onClick={() => setShowAdd(true)}
          >
            Add Skill
          </button>
        }
      />

      <div className="filter-tabs">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item ? "active" : ""
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filtered.map((skill) => (
          <SkillCard
            key={skill._id}
            name={skill.name}
            category={skill.category}
            score={skill.score}
            onUpdate={() => {
              const value = window.prompt(
                `Update ${skill.name} proficiency (0-100):`,
                skill.score
              );

              if (value !== null) {
                const number = Number(value);

                if (
                  !Number.isNaN(number) &&
                  number >= 0 &&
                  number <= 100
                ) {
                  updateScore(skill, number);
                }
              }
            }}
          />
        ))}
      </div>

      {showAdd && (
        <div
          className="modal-overlay"
          onClick={() => setShowAdd(false)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Add Skill</h2>

            <form onSubmit={addSkill}>
              <label>Skill Name</label>
              <input
                value={newSkill.name}
                onChange={(e) =>
                  setNewSkill({
                    ...newSkill,
                    name: e.target.value,
                  })
                }
                placeholder="e.g. MongoDB"
                required
              />

              <label>Category</label>
              <select
                value={newSkill.category}
                onChange={(e) =>
                  setNewSkill({
                    ...newSkill,
                    category: e.target.value,
                  })
                }
              >
                {categories
                  .filter((item) => item !== "All")
                  .map((item) => (
                    <option key={item}>{item}</option>
                  ))}
              </select>

              <label>Proficiency</label>
              <input
                type="number"
                min="0"
                max="100"
                value={newSkill.score}
                onChange={(e) =>
                  setNewSkill({
                    ...newSkill,
                    score: e.target.value,
                  })
                }
              />

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowAdd(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  Add Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}