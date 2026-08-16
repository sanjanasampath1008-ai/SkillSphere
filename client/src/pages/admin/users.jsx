import React, { useState } from "react";

function Users() {
  const [search, setSearch] = useState("");

  const users = [
    {
      name: "Aarav Sharma",
      email: "aarav@company.com",
      role: "Employee",
      status: "Active",
    },
    {
      name: "Priya Mehta",
      email: "priya@company.com",
      role: "Manager",
      status: "Active",
    },
    {
      name: "Rohan Kapoor",
      email: "rohan@company.com",
      role: "Employee",
      status: "Active",
    },
    {
      name: "Ananya Rao",
      email: "ananya@company.com",
      role: "Employee",
      status: "Inactive",
    },
  ];

  const filtered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">ADMINISTRATION</span>
          <h1>User Management</h1>
          <p>Manage platform users, roles and account access.</p>
        </div>

        <button className="dashboard-action">+ Add User</button>
      </div>

      <div className="management-card">
        <div className="table-toolbar">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="filter-button">All Users ▾</button>
        </div>

        <div className="admin-table">
          <div className="table-header">
            <span>User</span>
            <span>Role</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {filtered.map((user, index) => (
            <div className="table-row" key={index}>
              <div className="user-cell">
                <div className="table-avatar">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <strong>{user.name}</strong>
                  <small>{user.email}</small>
                </div>
              </div>

              <span>{user.role}</span>

              <span>
                <span
                  className={
                    user.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {user.status}
                </span>
              </span>

              <button className="table-action">Manage</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;