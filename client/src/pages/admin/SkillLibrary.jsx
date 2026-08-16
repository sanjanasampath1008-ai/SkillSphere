import React from "react";

function SkillLibrary() {
  const skills = [
    ["JavaScript", "Technical", "Advanced", "142 employees"],
    ["React", "Technical", "Intermediate", "118 employees"],
    ["Leadership", "Professional", "Intermediate", "96 employees"],
    ["Communication", "Professional", "Advanced", "173 employees"],
    ["Data Analysis", "Technical", "Intermediate", "84 employees"],
    ["Project Management", "Professional", "Intermediate", "73 employees"],
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">SKILLS</span>
          <h1>Skills Library</h1>
          <p>Manage the skills used across SkillSphere.</p>
        </div>

        <button className="dashboard-action">+ Add Skill</button>
      </div>

      <div className="skill-library-grid">
        {skills.map((skill, index) => (
          <div className="skill-library-card" key={index}>
            <div className="skill-icon">✦</div>

            <span className="skill-category">{skill[1]}</span>

            <h3>{skill[0]}</h3>

            <p>{skill[3]}</p>

            <div className="skill-card-footer">
              <span>{skill[2]}</span>
              <button>View →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillLibrary;