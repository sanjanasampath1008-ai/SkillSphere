import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import GoalCard from "../../components/GoalCard";
import StatCard from "../../components/StatCard";
import { createGoal } from "../../services/api";

const initialGoals = [
  {
    id: 1,
    title: "Complete AWS Solutions Architect Cert",
    priority: "High",
    category: "Certification",
    description:
      "Earn AWS SAA-C03 certification",
    dueDate: "Mar 31, 2025",
    linkedSkill: "AWS",
    progress: 45,
    status: "Active",
  },
  {
    id: 2,
    title: "Build Full-Stack Portfolio Project",
    priority: "Medium",
    category: "Portfolio",
    description:
      "Production app using React + Node + PostgreSQL",
    dueDate: "Feb 15, 2025",
    linkedSkill: "Node.js",
    progress: 80,
    status: "Active",
  },
  {
    id: 3,
    title: "Lead Team Sprint Planning",
    priority: "High",
    category: "Leadership",
    description:
      "Own sprint planning for one full cycle",
    dueDate: "Apr 30, 2025",
    linkedSkill: "Leadership",
    progress: 20,
    status: "Active",
  },
];

export default function Goals() {
  const [goals, setGoals] =
    useState(initialGoals);
  const [tab, setTab] = useState("Active");
  const [showForm, setShowForm] =
    useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "Development",
    dueDate: "",
    linkedSkill: "",
  });

  const activeGoals = goals.filter(
    (goal) => goal.status === "Active"
  );

  const completedGoals = goals.filter(
    (goal) => goal.status === "Completed"
  );

  const visible =
    tab === "Active"
      ? activeGoals
      : completedGoals;

  const avgProgress = activeGoals.length
    ? Math.round(
        activeGoals.reduce(
          (sum, goal) => sum + goal.progress,
          0
        ) / activeGoals.length
      )
    : 0;

  const submitGoal = async (e) => {
    e.preventDefault();

    const newGoal = {
      id: Date.now(),
      ...form,
      progress: 0,
      status: "Active",
    };

    setGoals((prev) => [...prev, newGoal]);
    setShowForm(false);

    try {
      const response = await createGoal(form);

      if (response.data) {
        setGoals((prev) =>
          prev.map((goal) =>
            goal.id === newGoal.id
              ? {
                  ...goal,
                  ...response.data,
                }
              : goal
          )
        );
      }
    } catch {
      // Local goal remains available.
    }

    setForm({
      title: "",
      description: "",
      priority: "Medium",
      category: "Development",
      dueDate: "",
      linkedSkill: "",
    });
  };

  return (
    <div className="page-container">
      <PageHeader
        title="Goals"
        subtitle="Track your career development goals and milestones."
        action={
          <button
            className="primary-button"
            onClick={() => setShowForm(true)}
          >
            Create Goal
          </button>
        }
      />

      <div className="stats-grid">
        <StatCard
          title="Active Goals"
          value={activeGoals.length}
        />

        <StatCard
          title="Completed"
          value={completedGoals.length}
        />

        <StatCard
          title="Avg Progress"
          value={`${avgProgress}%`}
        />
      </div>

      <div className="filter-tabs">
        <button
          className={tab === "Active" ? "active" : ""}
          onClick={() => setTab("Active")}
        >
          Active ({activeGoals.length})
        </button>

        <button
          className={
            tab === "Completed" ? "active" : ""
          }
          onClick={() => setTab("Completed")}
        >
          Completed ({completedGoals.length})
        </button>
      </div>

      <div className="goals-grid">
        {visible.map((goal) => (
          <GoalCard
            key={goal.id}
            {...goal}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="empty-state">
          No goals in this category.
        </div>
      )}

      {showForm && (
        <div
          className="modal-overlay"
          onClick={() => setShowForm(false)}
        >
          <div
            className="modal-card"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <h2>Create Goal</h2>

            <form onSubmit={submitGoal}>
              <label>Goal Title</label>
              <input
                required
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                placeholder="Learn TypeScript"
              />

              <label>Description</label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                placeholder="Describe your goal..."
              />

              <label>Priority</label>
              <select
                value={form.priority}
                onChange={(e) =>
                  setForm({
                    ...form,
                    priority: e.target.value,
                  })
                }
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              <label>Category</label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
              >
                <option>Development</option>
                <option>Certification</option>
                <option>Portfolio</option>
                <option>Leadership</option>
              </select>

              <label>Deadline</label>
              <input
                type="date"
                value={form.dueDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    dueDate: e.target.value,
                  })
                }
              />

              <label>Linked Skill</label>
              <input
                value={form.linkedSkill}
                onChange={(e) =>
                  setForm({
                    ...form,
                    linkedSkill: e.target.value,
                  })
                }
                placeholder="AWS"
              />

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    setShowForm(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}