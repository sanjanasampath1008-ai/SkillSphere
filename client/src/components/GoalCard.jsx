import React from "react";
import ProgressBar from "./ProgressBar";

export default function GoalCard({
  title,
  description,
  priority = "Medium",
  category = "Development",
  deadline,
  progress = 0,
  linkedSkill,
  onClick,
}) {
  return (
    <div className="goal-card">
      <div className="goal-card-header">
        <div>
          <h3>{title}</h3>

          <div className="goal-meta">
            <span className={`priority priority-${priority.toLowerCase()}`}>
              {priority}
            </span>

            <span>{category}</span>
          </div>
        </div>

        <span className="goal-progress-value">
          {progress}%
        </span>
      </div>

      {description && (
        <p className="goal-description">
          {description}
        </p>
      )}

      <ProgressBar
        value={progress}
        showValue={false}
        height={7}
      />

      <div className="goal-card-footer">
        {deadline && (
          <span>Due {deadline}</span>
        )}

        {linkedSkill && (
          <span>Linked: {linkedSkill}</span>
        )}
      </div>

      {onClick && (
        <button
          type="button"
          className="secondary-btn"
          onClick={onClick}
        >
          View Goal
        </button>
      )}
    </div>
  );
}