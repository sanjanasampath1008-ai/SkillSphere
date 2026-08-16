import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const employeeLinks = [
  {
    section: "Dashboard",
    items: [
      { label: "Dashboard", path: "/employee/dashboard" },
      { label: "My Career", path: "/employee/career-target" },
      { label: "My Profile", path: "/employee/profile" },
      { label: "My Skills", path: "/employee/skills" },
      { label: "Skill DNA", path: "/employee/skill-dna", badge: "New" },
      { label: "Career Target", path: "/employee/career-target" },
      { label: "Skill Gap Analysis", path: "/employee/skill-gap" },
      { label: "Career Roadmap", path: "/employee/career-roadmap" },
    ],
  },
  {
    section: "Development",
    items: [
      { label: "Goals", path: "/employee/goals" },
      { label: "Learning Center", path: "/employee/learning" },
      { label: "Feedback", path: "/employee/feedback" },
    ],
  },
];

const managerLinks = [
  {
    section: "Team",
    items: [
      { label: "Dashboard", path: "/manager/dashboard" },
      { label: "Team Members", path: "/manager/team-members" },
      { label: "Employee Detail", path: "/manager/employee-detail" },
    ],
  },
  {
    section: "Insights",
    items: [
      { label: "Analytics", path: "/manager/analytics" },
    ],
  },
];

const adminLinks = [
  {
    section: "Management",
    items: [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "Employees", path: "/admin/employees" },
      { label: "Skill Library", path: "/admin/skill-library" },
      { label: "Career Roles", path: "/admin/career-roles" },
      { label: "Courses", path: "/admin/courses" },
      { label: "Departments", path: "/admin/departments" },
    ],
  },
  {
    section: "Analytics",
    items: [
      { label: "Reports", path: "/admin/reports" },
    ],
  },
];

export default function Sidebar() {
  const { user } = useAuth();

  const role =
    String(user?.role || "employee").toLowerCase();

  let links = employeeLinks;
  let viewName = "Employee View";

  if (role === "admin") {
    links = adminLinks;
    viewName = "Admin View";
  } else if (role === "manager") {
    links = managerLinks;
    viewName = "Manager View";
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">S</div>
        <span>SkillSphere</span>
      </div>

      <div className="sidebar-view">
        {viewName}
      </div>

      <nav className="sidebar-navigation">
        {links.map((section) => (
          <div
            className="sidebar-section"
            key={section.section}
          >
            <div className="sidebar-section-title">
              {section.section}
            </div>

            {section.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <span>{item.label}</span>

                {item.badge && (
                  <span className="sidebar-badge">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">
            {(
              user?.firstName?.[0] ||
              user?.name?.[0] ||
              "A"
            ).toUpperCase()}
            {(
              user?.lastName?.[0] ||
              ""
            ).toUpperCase()}
          </div>

          <div>
            <strong>
              {user?.name ||
                `${user?.firstName || "Alex"} ${
                  user?.lastName || "Rivera"
                }`}
            </strong>

            <span>
              {user?.currentRole ||
                user?.role ||
                "Employee"}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}