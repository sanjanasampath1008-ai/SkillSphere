import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";

const stages = [
  {
    number: 1,
    title: "Junior Developer",
    date: "Jan 2022",
    status: "Completed",
    skills: "JavaScript, React basics, Git +1",
  },
  {
    number: 2,
    title: "Frontend Developer",
    date: "Now",
    status: "You are here",
    progress: 72,
    skills: "React, TypeScript, CSS +2",
  },
  {
    number: 3,
    title: "Full-Stack Developer",
    date: "~Q3 2025",
    status: "38% ready",
    progress: 38,
    skills: "Node.js, PostgreSQL, GraphQL +2",
  },
  {
    number: 4,
    title: "Senior Full-Stack",
    date: "~Q2 2026",
    status: "15% ready",
    progress: 15,
    skills: "System Design, AWS, Microservices +1",
  },
  {
    number: 5,
    title: "Tech Lead",
    date: "~2027",
    status: "8% ready",
    progress: 8,
    skills: "Team Leadership, Architecture, Stakeholder Mgmt",
  },
];

export default function CareerRoadmap() {
  const [selected, setSelected] =
    useState(stages[1]);

  return (
    <div className="page-container">
      <PageHeader
        title="Career Roadmap"
        subtitle="Your step-by-step path from Frontend Developer to Tech Lead."
      />

      <div className="roadmap">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.number}>
            <button
              className={`roadmap-stage ${
                selected.number === stage.number
                  ? "selected"
                  : ""
              } ${
                stage.number < 2
                  ? "completed"
                  : ""
              }`}
              onClick={() => setSelected(stage)}
            >
              <div className="roadmap-number">
                {stage.number < 2
                  ? "✓"
                  : stage.number}
              </div>

              <strong>{stage.title}</strong>

              <span>{stage.date}</span>

              <small>{stage.status}</small>
            </button>

            {index < stages.length - 1 && (
              <div className="roadmap-connector" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="dashboard-card roadmap-detail">
        <div className="card-heading">
          <div>
            <span>STAGE {selected.number}</span>
            <h2>{selected.title}</h2>
            <p>{selected.date}</p>
          </div>

          {selected.progress !== undefined && (
            <div className="roadmap-progress-number">
              {selected.progress}%
            </div>
          )}
        </div>

        {selected.progress !== undefined && (
          <ProgressBar
            value={selected.progress}
            label="Stage Progress"
          />
        )}

        <h3>REQUIRED SKILLS</h3>

        <div className="role-skills">
          {selected.skills
            .split(", ")
            .map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-heading">
          <div>
            <h2>All Stages Overview</h2>
          </div>
        </div>

        {stages.map((stage) => (
          <div
            className="roadmap-overview-row"
            key={stage.number}
          >
            <div className="roadmap-overview-number">
              {stage.number < 2
                ? "✓"
                : stage.number}
            </div>

            <div>
              <strong>{stage.title}</strong>
              <span>{stage.skills}</span>
            </div>

            <small>{stage.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}