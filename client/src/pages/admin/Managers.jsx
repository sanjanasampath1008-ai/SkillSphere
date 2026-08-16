import React from "react";

function Managers() {
  const managers = [
    ["PM", "Priya Mehta", "Engineering", "12 Employees", "91%"],
    ["RK", "Rahul Khanna", "Product", "18 Employees", "86%"],
    ["SN", "Sneha Nair", "Design", "9 Employees", "82%"],
    ["AK", "Arjun Kapoor", "Marketing", "14 Employees", "78%"],
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">LEADERSHIP</span>
          <h1>Managers</h1>
          <p>Monitor managers and their team development activity.</p>
        </div>

        <button className="dashboard-action">+ Add Manager</button>
      </div>

      <div className="manager-card-grid">
        {managers.map((manager, index) => (
          <div className="manager-card" key={index}>
            <div className="manager-card-top">
              <div className="table-avatar">{manager[0]}</div>

              <div>
                <h3>{manager[1]}</h3>
                <p>{manager[2]}</p>
              </div>
            </div>

            <div className="manager-card-stats">
              <div>
                <span>Team</span>
                <strong>{manager[3]}</strong>
              </div>

              <div>
                <span>Team readiness</span>
                <strong>{manager[4]}</strong>
              </div>
            </div>

            <button className="outline-button">View Team →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Managers;