import React from "react";

function Employees() {
  const employees = [
    ["AS", "Aarav Sharma", "Engineering", "Senior Developer", "92%"],
    ["PM", "Priya Mehta", "Product", "Product Analyst", "87%"],
    ["RK", "Rohan Kapoor", "Engineering", "Software Engineer", "81%"],
    ["AR", "Ananya Rao", "Design", "UX Designer", "76%"],
    ["VK", "Vikram Kumar", "Marketing", "Marketing Specialist", "72%"],
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">PEOPLE</span>
          <h1>Employees</h1>
          <p>View and manage employee profiles and development progress.</p>
        </div>

        <button className="dashboard-action">+ Add Employee</button>
      </div>

      <div className="management-card">
        <div className="table-toolbar">
          <input placeholder="Search employees..." />
          <button className="filter-button">Department ▾</button>
        </div>

        <div className="admin-table">
          <div className="table-header">
            <span>Employee</span>
            <span>Department</span>
            <span>Role</span>
            <span>Readiness</span>
          </div>

          {employees.map((employee, index) => (
            <div className="table-row" key={index}>
              <div className="user-cell">
                <div className="table-avatar">{employee[0]}</div>
                <div>
                  <strong>{employee[1]}</strong>
                  <small>Employee</small>
                </div>
              </div>

              <span>{employee[2]}</span>
              <span>{employee[3]}</span>

              <div className="readiness-cell">
                <strong>{employee[4]}</strong>
                <div className="mini-progress">
                  <div style={{ width: employee[4] }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employees;