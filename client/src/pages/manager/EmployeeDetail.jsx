import React from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";

const skills = [
  ["React", 85],
  ["TypeScript", 78],
  ["Node.js", 62],
  ["PostgreSQL", 55],
  ["GraphQL", 45],
];

const goals = [
  ["Complete AWS Solutions Architect Cert", 45],
  ["Build Full-Stack Portfolio Project", 80],
  ["Lead Team Sprint Planning", 20],
];

export default function EmployeeDetail() {
  return (
    <div className="page-container">
      <PageHeader
        title="Employee Detail"
        subtitle="Alex Rivera · Frontend Developer"
      />

      <div className="employee-profile-card">
        <div className="profile-avatar">
          AR
        </div>

        <div>
          <h2>Alex Rivera</h2>
          <p>Frontend Developer</p>

          <span className="status-pill on-track">
            On Track
          </span>
        </div>

        <div className="employee-readiness">
          <strong>67%</strong>
          <span>Readiness</span>

          <ProgressBar
            value={67}
            showValue={false}
          />
        </div>
      </div>

      <div className="quick-stats">
        <div>
          <span>Skill Growth</span>
          <strong>+12%</strong>
        </div>

        <div>
          <span>Goal Progress</span>
          <strong>65%</strong>
        </div>

        <div>
          <span>Active Goals</span>
          <strong>3</strong>
        </div>

        <button className="primary-button">
          Give Feedback
        </button>

        <button className="secondary-button">
          Assign Goal
        </button>
      </div>

      <div className="dashboard-card">
        <h2>Skill DNA</h2>

        <div className="dna-mini-grid">
          {[
            ["Technical", 78],
            ["Communication", 75],
            ["Leadership", 55],
            ["Problem Solving", 80],
            ["Creativity", 70],
            ["Management", 40],
          ].map(([name, score]) => (
            <div key={name}>
              <span>{name}</span>
              <strong>{score}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Skill Gaps</h2>

        <div className="skill-gap-mini">
          {skills.map(([name, score]) => (
            <div key={name}>
              <div>
                <strong>{name}</strong>
                <span>{score}%</span>
              </div>

              <ProgressBar
                value={score}
                showValue={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Active Goals</h2>

        {goals.map(([title, progress]) => (
          <div
            className="goal-mini-row"
            key={title}
          >
            <strong>{title}</strong>

            <div>
              <ProgressBar
                value={progress}
                showValue
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}