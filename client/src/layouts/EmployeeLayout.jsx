import { NavLink, Outlet, useNavigate } from "react-router-dom";

function EmployeeLayout() {
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", path: "/employee/dashboard" },
    { name: "My Profile", path: "/employee/profile" },
    { name: "My Skills", path: "/employee/skills" },
    { name: "Skill DNA", path: "/employee/skill-dna", badge: "New" },
    { name: "Career Target", path: "/employee/career-target" },
    { name: "Skill Gap Analysis", path: "/employee/skill-gap" },
    { name: "Career Roadmap", path: "/employee/career-roadmap" },
    { name: "Goals", path: "/employee/goals" },
    { name: "Learning Center", path: "/employee/learning" },
    { name: "Feedback", path: "/employee/feedback" },
  ];

  return (
    <div className="app-layout">
      <aside className="sidebar">

        <div
          className="sidebar-logo"
          onClick={() => navigate("/employee/dashboard")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo-mark">S</div>
          SkillSphere
        </div>

        <div className="sidebar-section">
          <div className="sidebar-label">Employee View</div>

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.name}

              {link.badge && (
                <span className="new-badge">{link.badge}</span>
              )}
            </NavLink>
          ))}
        </div>

      </aside>

      <main className="main-content">

        <header className="topbar">

          <input
            className="search-box"
            placeholder="Search..."
          />

          <div className="user-mini">
            <span>🔔</span>

            <div className="avatar">
              AR
            </div>

            <div>
              <strong style={{ fontSize: 12 }}>
                Alex Rivera
              </strong>

              <div
                style={{
                  fontSize: 10,
                  color: "#718078"
                }}
              >
                Frontend Developer
              </div>
            </div>
          </div>

        </header>

        <Outlet />

      </main>
    </div>
  );
}

export default EmployeeLayout;