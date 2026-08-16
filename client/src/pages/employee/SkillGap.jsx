import React, { useMemo } from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import StatCard from "../../components/StatCard";

const skills = [
  {
    category: "Frontend",
    name: "React",
    current: 85,
    required: 80,
  },
  {
    category: "Frontend",
    name: "TypeScript",
    current: 78,
    required: 75,
  },
  {
    category: "Backend",
    name: "Node.js",
    current: 62,
    required: 80,
  },
  {
    category: "Backend",
    name: "PostgreSQL",
    current: 55,
    required: 65,
  },
  {
    category: "Backend",
    name: "GraphQL",
    current: 45,
    required: 60,
  },
  {
    category: "Cloud",
    name: "AWS",
    current: 30,
    required: 70,
  },
  {
    category: "DevOps",
    name: "Docker",
    current: 20,
    required: 60,
  },
  {
    category: "Architecture",
    name: "System Design",
    current: 15,
    required: 75,
  },
];

export default function SkillGap() {
  const gaps = useMemo(
    () =>
      skills
        .map((skill) => ({
          ...skill,
          gap: Math.max(
            0,
            skill.required - skill.current
          ),
        }))
        .sort((a, b) => b.gap - a.gap),
    []
  );

  return (
    <div className="page-container">
      <PageHeader
        title="Skill Gap Analysis"
        subtitle="Frontend Developer → Senior Full-Stack Developer"
      />

      <div className="stats-grid">
        <StatCard
          title="Readiness"
          value="67%"
        />

        <StatCard
          title="Skills Meeting Target"
          value="2"
        />

        <StatCard
          title="Skills with Gaps"
          value="6"
        />

        <StatCard
          title="Critical Gaps"
          value="1"
        />
      </div>

      <div className="dashboard-card">
        <div className="card-heading">
          <div>
            <h2>Current vs Required Skills</h2>
            <p>
              Compare your current level with your
              target role requirements.
            </p>
          </div>
        </div>

        <div className="gap-list">
          {skills.map((skill) => {
            const gap =
              skill.required - skill.current;

            const ahead = gap <= 0;

            return (
              <div
                className="gap-row"
                key={skill.name}
              >
                <div className="gap-info">
                  <span className="skill-category">
                    {skill.category}
                  </span>

                  <strong>{skill.name}</strong>
                </div>

                <div className="gap-progress">
                  <ProgressBar
                    value={skill.current}
                    showValue={false}
                  />
                </div>

                <div className="gap-numbers">
                  <span>
                    Yours: {skill.current}%
                  </span>
                  <span>
                    Required: {skill.required}%
                  </span>
                </div>

                <div
                  className={
                    ahead
                      ? "gap-ahead"
                      : "gap-required"
                  }
                >
                  {ahead
                    ? `+${Math.abs(gap)}% ahead`
                    : `${gap}% gap`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-heading">
          <div>
            <h2>
              Recommended Next Skills to Develop
            </h2>
          </div>
        </div>

        <div className="recommended-list">
          {gaps
            .filter((item) => item.gap > 0)
            .slice(0, 3)
            .map((item) => (
              <div
                className="recommended-row"
                key={item.name}
              >
                <div>
                  <strong>{item.name}</strong>
                  <span>
                    Gap: {item.gap}% · Priority{" "}
                    {item.gap >= 40
                      ? "High"
                      : "Medium"}
                  </span>
                </div>

                <button className="secondary-button">
                  Find Courses
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}