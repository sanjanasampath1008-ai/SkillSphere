import React from "react";
import ProgressBar from "./ProgressBar";

export default function SkillCard({
  name,
  category = "Technical",
  score = 0,
  required,
  status,
  onUpdate,
}) {
  const getLevel = (value) => {
    if (value >= 80) return "Expert";
    if (value >= 60) return "Proficient";
    return "Beginner";
  };

  const level = getLevel(score);

  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <div>
          <h3>{name}</h3>
          <span className="skill-category">
            {category}
          </span>
        </div>

        <div className="skill-score">
          {score}%
        </div>
      </div>

      <ProgressBar
        value={score}
        showValue={false}
        height={7}
      />

      <div className="skill-card-footer">
        <span>{level}</span>

        {required !== undefined && (
          <span>
            Required: {required}%
          </span>
        )}

        {status && (
          <span className={`skill-status ${status.toLowerCase().replace(/\s+/g, "-")}`}>
            {status}
          </span>
        )}
      </div>

      {onUpdate && (
        <button
          type="button"
          className="secondary-btn"
          onClick={() => onUpdate(name)}
        >
          Update Skill
        </button>
      )}
    </div>
  );
}