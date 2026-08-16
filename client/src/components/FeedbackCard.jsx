import React from "react";

export default function FeedbackCard({
  name,
  role,
  date,
  type,
  strengths = [],
  improvements = [],
  feedback,
}) {
  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <div className="avatar">
          {name
            ? name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()
            : "US"}
        </div>

        <div>
          <h3>{name}</h3>

          <p>
            {role}
            {date && ` · ${date}`}
          </p>
        </div>

        {type && (
          <span className="feedback-type">
            {type}
          </span>
        )}
      </div>

      {strengths.length > 0 && (
        <div className="feedback-section">
          <h4>Strengths</h4>

          <ul>
            {strengths.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {improvements.length > 0 && (
        <div className="feedback-section">
          <h4>Areas for Improvement</h4>

          <ul>
            {improvements.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {feedback && (
        <div className="feedback-quote">
          <span>OVERALL FEEDBACK</span>
          <p>"{feedback}"</p>
        </div>
      )}
    </div>
  );
}