import React from "react";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Total Employees",
    value: "248",
    change: "+12%",
    icon: "◉",
  },
  {
    title: "Active Managers",
    value: "24",
    change: "+4%",
    icon: "♙",
  },
  {
    title: "Skills Tracked",
    value: "186",
    change: "+18%",
    icon: "✦",
  },
  {
    title: "Learning Courses",
    value: "72",
    change: "+8%",
    icon: "▣",
  },
];

const recentEmployees = [
  {
    name: "Aarav Sharma",
    role: "Software Engineer",
    department: "Engineering",
    status: "Active",
    initials: "AS",
  },
  {
    name: "Priya Nair",
    role: "Product Designer",
    department: "Design",
    status: "Active",
    initials: "PN",
  },
  {
    name: "Rahul Mehta",
    role: "Data Analyst",
    department: "Analytics",
    status: "Active",
    initials: "RM",
  },
  {
    name: "Ananya Kapoor",
    role: "HR Specialist",
    department: "Human Resources",
    status: "Pending",
    initials: "AK",
  },
];

function Dashboard() {
  return (
    <div className="admin-dashboard-page">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <span className="dashboard-eyebrow">
            ADMIN OVERVIEW
          </span>

          <h1>Good morning, Admin</h1>

          <p>
            Here's what's happening across your organization today.
          </p>
        </div>

        <div className="dashboard-header-actions">
          <button className="dashboard-icon-button">
            🔔
          </button>

          <div className="admin-profile">
            <div className="admin-avatar">
              AD
            </div>

            <div>
              <strong>Administrator</strong>
              <span>System Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="admin-stats-grid">

        {stats.map((stat) => (
          <div className="admin-stat-card" key={stat.title}>

            <div className="admin-stat-top">
              <div className="admin-stat-icon">
                {stat.icon}
              </div>

              <span className="stat-change">
                {stat.change}
              </span>
            </div>

            <div className="admin-stat-value">
              {stat.value}
            </div>

            <div className="admin-stat-title">
              {stat.title}
            </div>

          </div>
        ))}

      </div>

      {/* MAIN GRID */}
      <div className="admin-main-grid">

        {/* ORGANIZATION OVERVIEW */}
        <div className="admin-card organization-card">

          <div className="card-header">
            <div>
              <span className="card-eyebrow">
                ORGANIZATION
              </span>

              <h2>Workforce Overview</h2>
            </div>

            <Link
              to="/admin/reports"
              className="card-link"
            >
              View Reports →
            </Link>
          </div>

          <div className="overview-content">

            <div className="overview-circle">
              <div>
                <strong>82%</strong>
                <span>Overall Readiness</span>
              </div>
            </div>

            <div className="overview-details">

              <div className="overview-row">
                <span>Engineering</span>

                <div className="overview-bar">
                  <div style={{ width: "88%" }} />
                </div>

                <strong>88%</strong>
              </div>

              <div className="overview-row">
                <span>Design</span>

                <div className="overview-bar">
                  <div style={{ width: "79%" }} />
                </div>

                <strong>79%</strong>
              </div>

              <div className="overview-row">
                <span>Analytics</span>

                <div className="overview-bar">
                  <div style={{ width: "84%" }} />
                </div>

                <strong>84%</strong>
              </div>

              <div className="overview-row">
                <span>Human Resources</span>

                <div className="overview-bar">
                  <div style={{ width: "76%" }} />
                </div>

                <strong>76%</strong>
              </div>

            </div>

          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="admin-card">

          <div className="card-header">
            <div>
              <span className="card-eyebrow">
                QUICK ACTIONS
              </span>

              <h2>Manage Platform</h2>
            </div>
          </div>

          <div className="quick-actions">

            <Link
              to="/admin/employees"
              className="quick-action"
            >
              <div className="quick-action-icon">
                ◉
              </div>

              <div>
                <strong>Employees</strong>
                <span>Manage workforce</span>
              </div>

              <b>→</b>
            </Link>

            <Link
              to="/admin/skills"
              className="quick-action"
            >
              <div className="quick-action-icon">
                ✦
              </div>

              <div>
                <strong>Skills Library</strong>
                <span>Manage organization skills</span>
              </div>

              <b>→</b>
            </Link>

            <Link
              to="/admin/courses"
              className="quick-action"
            >
              <div className="quick-action-icon">
                ▣
              </div>

              <div>
                <strong>Learning Hub</strong>
                <span>Manage learning content</span>
              </div>

              <b>→</b>
            </Link>

            <Link
              to="/admin/reports"
              className="quick-action"
            >
              <div className="quick-action-icon">
                ▤
              </div>

              <div>
                <strong>Reports</strong>
                <span>View analytics</span>
              </div>

              <b>→</b>
            </Link>

          </div>

        </div>

      </div>

      {/* RECENT EMPLOYEES */}
      <div className="admin-card recent-card">

        <div className="card-header">

          <div>
            <span className="card-eyebrow">
              PEOPLE
            </span>

            <h2>Recent Employees</h2>
          </div>

          <Link
            to="/admin/employees"
            className="card-link"
          >
            View All →
          </Link>

        </div>

        <div className="employee-table">

          <div className="employee-table-header">
            <span>Employee</span>
            <span>Role</span>
            <span>Department</span>
            <span>Status</span>
          </div>

          {recentEmployees.map((employee) => (

            <div
              className="employee-table-row"
              key={employee.name}
            >

              <div className="employee-name">

                <div className="employee-avatar">
                  {employee.initials}
                </div>

                <strong>
                  {employee.name}
                </strong>

              </div>

              <span>
                {employee.role}
              </span>

              <span>
                {employee.department}
              </span>

              <span
                className={
                  employee.status === "Active"
                    ? "status active"
                    : "status pending"
                }
              >
                {employee.status}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* BOTTOM CARDS */}
      <div className="admin-bottom-grid">

        <div className="admin-mini-card">

          <div className="mini-card-icon">
            ✦
          </div>

          <div>
            <span>SKILL GROWTH</span>
            <strong>+18.4%</strong>
            <p>
              Employee skill development this quarter
            </p>
          </div>

        </div>

        <div className="admin-mini-card">

          <div className="mini-card-icon">
            ▣
          </div>

          <div>
            <span>LEARNING ACTIVITY</span>
            <strong>1,284</strong>
            <p>
              Course completions this month
            </p>
          </div>

        </div>

        <div className="admin-mini-card">

          <div className="mini-card-icon">
            ♡
          </div>

          <div>
            <span>FEEDBACK</span>
            <strong>94%</strong>
            <p>
              Positive employee feedback
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;