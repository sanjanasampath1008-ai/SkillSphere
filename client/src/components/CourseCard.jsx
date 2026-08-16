import React from "react";
import ProgressBar from "./ProgressBar";

export default function CourseCard({
  title,
  provider,
  category,
  duration,
  difficulty,
  rating,
  progress,
  onAction,
}) {
  const isInProgress =
    progress !== undefined && progress > 0;

  return (
    <div className="course-card">
      <div className="course-card-top">
        <span className="course-category">
          {category}
        </span>

        <span className="course-difficulty">
          {difficulty}
        </span>
      </div>

      <h3>{title}</h3>

      <p className="course-provider">
        {provider}
      </p>

      <div className="course-info">
        <span>{duration}</span>

        {rating && (
          <span>★ {rating}</span>
        )}
      </div>

      {isInProgress && (
        <div className="course-progress">
          <ProgressBar
            value={progress}
            height={6}
          />
        </div>
      )}

      <button
        type="button"
        className="primary-btn course-action"
        onClick={onAction}
      >
        {isInProgress
          ? "Continue Learning"
          : "Enroll Now"}
      </button>
    </div>
  );
}