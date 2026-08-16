import React from "react";

export default function StatCard({
  label,
  value,
  change,
  icon,
  description,
  className = "",
}) {
  return (
    <div className={`stat-card ${className}`}>
      <div className="stat-card-top">
        <span className="stat-label">{label}</span>

        {icon && (
          <div className="stat-icon">
            {icon}
          </div>
        )}
      </div>

      <div className="stat-value">
        {value}
      </div>

      {(change || description) && (
        <div className="stat-footer">
          {change && (
            <span className="stat-change">
              {change}
            </span>
          )}

          {description && (
            <span className="stat-description">
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
}