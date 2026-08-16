import React from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";

const currentSkills = [
  ["React", 85, 80],
  ["TypeScript", 78, 75],
  ["CSS", 82, 70],
  ["REST APIs", 76, 75],
  ["Testing", 65, 70],
];

const targetSkills = [
  ["React", 85, 80],
  ["TypeScript", 78, 75],
  ["Node.js", 62, 80],
  ["PostgreSQL", 55, 65],
  ["GraphQL", 45, 60],
  ["AWS", 30, 70],
  ["Docker", 20, 60],
  ["System Design", 15, 75],
];

export default function CareerTarget() {
  return (
    <div className="page-container">
      <PageHeader
        title="Career Target"
        subtitle="Your current position vs. your next career milestone."
      />

      <div className="career-target-grid">
        <div className="career-role-card current">
          <span className="role-label">CURRENT ROLE</span>

          <h2>Frontend Developer</h2>

          <p>Engineering · 3 years experience</p>

          <div className="role-skills">
            {currentSkills.map(([name]) => (
              <span key={name}>{name}</span>
            ))}
          </div>

          <div className="role-proficiency">
            <span>Role Proficiency</span>
            <strong>72% — Strong foundation</strong>
          </div>
        </div>

        <div className="career-role-card target">
          <span className="role-label">TARGET ROLE</span>

          <h2>Senior Full-Stack Developer</h2>

          <p>
            Engineering · Target in 12–18 months
          </p>

          <div className="role-skills">
            {["Node.js", "AWS", "Docker", "System Design", "PostgreSQL"].map(
              (skill) => (
                <span className="gap" key={skill}>
                  {skill} · Gap
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="readiness-card">
        <div>
          <span>Career Readiness</span>
          <strong>67%</strong>
        </div>

        <ProgressBar
          value={67}
          showValue={false}
          height={10}
        />

        <p>33% gap remaining</p>
      </div>

      <div className="dashboard-card">
        <div className="card-heading">
          <div>
            <h2>Skills Required for Target Role</h2>
          </div>
        </div>

        <div className="target-skills-list">
          {targetSkills.map(
            ([skill, current, required]) => {
              const gap = Math.max(
                0,
                required - current
              );

              return (
                <div
                  className="target-skill-row"
                  key={skill}
                >
                  <div className="target-skill-name">
                    <strong>{skill}</strong>
                  </div>

                  <div className="target-skill-bar">
                    <ProgressBar
                      value={current}
                      showValue={false}
                    />
                  </div>

                  <div className="target-skill-value">
                    {current}% / {required}%
                  </div>

                  {gap > 0 && (
                    <span className="gap-label">
                      Gap
                    </span>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}