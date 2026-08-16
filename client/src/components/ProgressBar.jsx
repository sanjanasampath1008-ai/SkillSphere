import React from "react";

export default function ProgressBar({
  value = 0,
  label,
  showValue = true,
  height = 8,
}) {
  const percentage = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className="progress-wrapper">
      {(label || showValue) && (
        <div className="progress-header">
          {label && <span>{label}</span>}

          {showValue && (
            <span>{percentage}%</span>
          )}
        </div>
      )}

      <div
        className="progress-track"
        style={{ height: `${height}px` }}
      >
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}