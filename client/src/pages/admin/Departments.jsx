import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";

const initialDepartments = [
  ["Engineering", 48, "Sarah Chen", 74],
  ["Product", 22, "Daniel Park", 78],
  ["Design", 15, "Lea Martin", 82],
  ["Marketing", 18, "Tom Bradley", 66],
  ["Sales", 28, "Grace Yuen", 63],
  ["Customer Success", 14, "James Wu", 69],
  ["Finance", 8, "Nicole Singh", 71],
  ["HR", 6, "Anna Fox", 75],
];

export default function Departments() {
  const [departments, setDepartments] =
    useState(initialDepartments);

  const addDepartment = () => {
    const name = window.prompt(
      "Enter department name:"
    );

    if (!name) return;

    setDepartments((prev) => [
      ...prev,
      [name, 0, "Assign Manager", 0],
    ]);
  };

  return (
    <div className="page-container">
      <PageHeader
        title="Departments"
        subtitle="8 departments across the organization."
        action={
          <button
            className="primary-button"
            onClick={addDepartment}
          >
            Add Department
          </button>
        }
      />

      <div className="table-toolbar">
        <input placeholder="Search…" />
      </div>

      <div className="department-grid">
        {departments.map(
          ([name, employees, manager, readiness]) => (
            <div
              className="department-card"
              key={name}
            >
              <div className="department-card-top">
                <div>
                  <h2>{name}</h2>
                  <p>
                    {employees} employees ·{" "}
                    {manager}
                  </p>
                </div>

                <strong>
                  {readiness}%
                </strong>
              </div>

              <ProgressBar
                value={readiness}
                showValue={false}
              />

              <span>
                Avg career readiness
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}