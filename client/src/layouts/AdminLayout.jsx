import { NavLink, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Employees", path: "/admin/employees" },
    { name: "Skill Library", path: "/admin/skills" },
    { name: "Career Roles", path: "/admin/career-roles" },
    { name: "Courses", path: "/admin/courses" },
    { name: "Departments", path: "/admin/departments" },
    { name: "Reports", path: "/admin/reports" },
  ];

  return (
    <div className="app-layout">

      <aside className="sidebar">

        <div
          className="sidebar-logo"
          onClick={() => navigate("/admin/dashboard")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo-mark">S</div>
          SkillSphere
        </div>

        <div className="sidebar-section">

          <div className="sidebar-label">
            Admin View
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
                Administrator
              </div>
            </div>

          </div>

        </header>

        <Outlet />

      </main>

    </div>
  );
}

export default AdminLayout;