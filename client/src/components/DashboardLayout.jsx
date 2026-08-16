import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../dashboard.css";

const employeeMenu = [
  { label: "Dashboard", path: "/dashboard", icon: "⌂" },
  { label: "My Profile", path: "/profile", icon: "◎" },
  { label: "My Skills", path: "/skills", icon: "◆" },
  { label: "Skill DNA", path: "/skill-dna", icon: "◈" },
  { label: "Career Target", path: "/career-target", icon: "◉" },
  { label: "Skill Gap", path: "/skill-gap", icon: "△" },
  { label: "Career Roadmap", path: "/career-roadmap", icon: "↗" },
  { label: "Goals", path: "/goals", icon: "✓" },
  { label: "Learning", path: "/learning", icon: "▣" },
  { label: "Feedback", path: "/feedback", icon: "✦" },
];

const managerMenu = [
  { label: "Dashboard", path: "/manager/dashboard", icon: "⌂" },
  { label: "Team Members", path: "/manager/team", icon: "◎" },
  { label: "Employees", path: "/manager/employees", icon: "◆" },
  { label: "Analytics", path: "/manager/analytics", icon: "▥" },
];

const adminMenu = [
  { label: "Dashboard", path: "/admin/dashboard", icon: "⌂" },
  { label: "Employees", path: "/admin/employees", icon: "◎" },
  { label: "Skill Library", path: "/admin/skills", icon: "◆" },
  { label: "Career Roles", path: "/admin/career-roles", icon: "◉" },
  { label: "Courses", path: "/admin/courses", icon: "▣" },
  { label: "Departments", path: "/admin/departments", icon: "◇" },
  { label: "Reports", path: "/admin/reports", icon: "▥" },
];

function DashboardLayout({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  const role = user?.role?.toLowerCase() || "employee";

  let menu = employeeMenu;
  let roleTitle = "Employee";
  let roleDescription = "Your career workspace";

  if (role === "manager") {
    menu = managerMenu;
    roleTitle = "Manager";
    roleDescription = "Team management workspace";
  }

  if (role === "admin") {
    menu = adminMenu;
    roleTitle = "Administrator";
    roleDescription = "Platform management workspace";
  }

  const getInitials = () => {
    if (user?.name) {
      return user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
    }

    if (user?.email) {
      return user.email.slice(0, 2).toUpperCase();
    }

    return "SS";
  };

  const getPageTitle = () => {
    const current = menu.find((item) => location.pathname === item.path);

    if (current) {
      return current.label;
    }

    if (location.pathname.includes("/employee/")) {
      return "Employee Details";
    }

    return roleTitle;
  };

  return (
    <div className="dashboard-shell">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        <div className="sidebar-top">

          <NavLink to="/" className="sidebar-brand">
            <div className="sidebar-logo">
              S
            </div>

            <div className="sidebar-brand-text">
              <strong>SkillSphere</strong>
              <span>Career Intelligence</span>
            </div>
          </NavLink>

          <div className="sidebar-role">
            <span className="role-dot"></span>

            <div>
              <strong>{roleTitle}</strong>
              <small>{roleDescription}</small>
            </div>
          </div>

          <div className="sidebar-section-title">
            WORKSPACE
          </div>

          <nav className="sidebar-navigation">

            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${
                    isActive ||
                    (item.path !== "/dashboard" &&
                      location.pathname.startsWith(item.path))
                      ? "active"
                      : ""
                  }`
                }
              >
                <span className="sidebar-icon">
                  {item.icon}
                </span>

                <span className="sidebar-link-text">
                  {item.label}
                </span>
              </NavLink>
            ))}

          </nav>
        </div>

        {/* ================= SIDEBAR BOTTOM ================= */}

        <div className="sidebar-bottom">

          <div className="sidebar-help">
            <div className="help-icon">?</div>

            <div>
              <strong>Need help?</strong>
              <span>We're here for you.</span>
            </div>
          </div>

          <div className="sidebar-user">

            <div className="user-avatar">
              {getInitials()}
            </div>

            <div className="user-details">
              <strong>
                {user?.name || "SkillSphere User"}
              </strong>

              <span>
                {user?.email || "user@company.com"}
              </span>
            </div>

            <div className="user-more">
              •••
            </div>

          </div>

        </div>

      </aside>

      {/* ================= MAIN AREA ================= */}

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div className="header-left">

            <div className="mobile-logo">
              S
            </div>

            <div>
              <span className="header-eyebrow">
                {roleTitle.toUpperCase()} WORKSPACE
              </span>

              <h1>
                {getPageTitle()}
              </h1>
            </div>

          </div>

          <div className="header-right">

            <button
              type="button"
              className="header-icon-button"
              title="Notifications"
            >
              ♢
              <span className="notification-dot"></span>
            </button>

            <div className="header-divider"></div>

            <div className="header-user">

              <div className="header-avatar">
                {getInitials()}
              </div>

              <div className="header-user-info">
                <strong>
                  {user?.name || "User"}
                </strong>

                <span>
                  {roleTitle}
                </span>
              </div>

            </div>

          </div>

        </header>

        <div className="dashboard-content">
          {children}
        </div>

      </main>

    </div>
  );
}

export default DashboardLayout;