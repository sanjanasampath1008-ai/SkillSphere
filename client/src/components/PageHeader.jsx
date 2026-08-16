import React from "react";

export default function PageHeader({
  title,
  subtitle,
  action,
  children,
}) {
  return (
    <div className="page-header">
      <div className="page-header-left">
        <h1>{title}</h1>

        {subtitle && (
          <p className="page-header-subtitle">
            {subtitle}
          </p>
        )}
      </div>

      <div className="page-header-right">
        {children}

        {action && (
          <button
            type="button"
            className="primary-btn"
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}