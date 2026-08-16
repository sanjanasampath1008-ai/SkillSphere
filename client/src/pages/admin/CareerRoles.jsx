import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

const initialRoles = [
  ["Junior Developer", 8, 18],
  ["Frontend Developer", 12, 24],
  ["Backend Developer", 14, 20],
  ["Full-Stack Developer", 18, 15],
  ["Senior Developer", 22, 12],
  ["Tech Lead", 26, 6],
];

export default function CareerRoles() {
  const [roles, setRoles] =
    useState(initialRoles);

  const addRole = () => {
    const name = window.prompt(
      "Enter career role:"
    );

    if (!name) return;

    setRoles((prev) => [
      ...prev,
      [name, 10, 0],
    ]);
  };

  return (
    <div className="page-container">
      <PageHeader
        title="Career Roles"
        subtitle="6 career roles defined across Engineering."
        action={
          <button
            className="primary-button"
            onClick={addRole}
          >
            Add Role
          </button>
        }
      />

      <div className="table-toolbar">
        <input placeholder="Search…" />
      </div>

      <div className="role-card-grid">
        {roles.map(
          ([name, required, employees]) => (
            <div
              className="career-admin-card"
              key={name}
            >
              <h2>{name}</h2>

              <span>Engineering</span>

              <div className="role-admin-stats">
                <strong>
                  {required} required skills
                </strong>

                <strong>
                  {employees} employees
                </strong>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}