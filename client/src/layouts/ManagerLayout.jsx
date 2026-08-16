import { NavLink, Outlet, useNavigate } from "react-router-dom";

function ManagerLayout() {
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", path: "/manager/dashboard" },
    { name: "Team Members", path: "/manager/team-members" },
    { name: "Employee Detail", path: "/manager/employee/1" },
    { name: "Analytics", path: "/manager/analytics" },
  ];

  return (
    <div className="app-layout">

      <aside className="sidebar">

        <div
          className="sidebar-logo"
          onClick={() => navigate("/manager/dashboard")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo-mark">S</div>
          SkillSphere
        </div>

        <div className="sidebar-section">

          <div className="sidebar-label">
            Manager View
          </div>

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.name}
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

export default ManagerLayout;