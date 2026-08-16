import React, { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./index.css";

/* =========================================================
   MENU DATA
========================================================= */

const employeeMenu = [
  { label: "Dashboard", path: "/dashboard", icon: "⌂" },
  { label: "My Profile", path: "/profile", icon: "◉" },
  { label: "My Skills", path: "/skills", icon: "◆" },
  { label: "Skill DNA", path: "/skill-dna", icon: "✦" },
  { label: "Career Target", path: "/career-target", icon: "◎" },
  { label: "Skill Gap", path: "/skill-gap", icon: "△" },
  { label: "Career Roadmap", path: "/career-roadmap", icon: "↗" },
  { label: "My Goals", path: "/goals", icon: "✓" },
  { label: "Learning", path: "/learning", icon: "▣" },
  { label: "Feedback", path: "/feedback", icon: "♡" },
];

const managerMenu = [
  { label: "Dashboard", path: "/manager/dashboard", icon: "⌂" },
  { label: "My Profile", path: "/manager/profile", icon: "◉" },
  { label: "My Team", path: "/manager/team", icon: "◆" },
  { label: "Team Skills", path: "/manager/skills", icon: "✦" },
  { label: "Skill Gaps", path: "/manager/skill-gaps", icon: "△" },
  { label: "Learning", path: "/manager/learning", icon: "▣" },
  { label: "Feedback", path: "/manager/feedback", icon: "♡" },
  { label: "Reports", path: "/manager/reports", icon: "▤" },
];

const adminMenu = [
  { label: "Dashboard", path: "/admin/dashboard", icon: "⌂" },
  { label: "User Management", path: "/admin/users", icon: "◉" },
  { label: "Employees", path: "/admin/employees", icon: "◆" },
  { label: "Managers", path: "/admin/managers", icon: "♙" },
  { label: "Skills Library", path: "/admin/skills", icon: "✦" },
  { label: "Learning Hub", path: "/admin/learning", icon: "▣" },
  { label: "Feedback", path: "/admin/feedback", icon: "♡" },
  { label: "Reports", path: "/admin/reports", icon: "▤" },
];

/* =========================================================
   COMMON DATA
========================================================= */

const skills = [
  { name: "React", level: 86, category: "Frontend" },
  { name: "JavaScript", level: 82, category: "Frontend" },
  { name: "Node.js", level: 68, category: "Backend" },
  { name: "UI/UX Design", level: 74, category: "Design" },
];

const courses = [
  {
    title: "Advanced React Development",
    category: "Frontend",
    progress: 72,
    duration: "6 hours",
  },
  {
    title: "Cloud Fundamentals",
    category: "Cloud",
    progress: 45,
    duration: "4 hours",
  },
  {
    title: "System Design Essentials",
    category: "Architecture",
    progress: 28,
    duration: "8 hours",
  },
];

const employees = [
  {
    name: "Sanjana Sampath Kumar",
    role: "Frontend Developer",
    department: "Engineering",
    readiness: 67,
  },
  {
    name: "Alex Rivera",
    role: "Backend Developer",
    department: "Engineering",
    readiness: 74,
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    department: "Design",
    readiness: 81,
  },
  {
    name: "Daniel Thomas",
    role: "Software Engineer",
    department: "Technology",
    readiness: 72,
  },
];

/* =========================================================
   HELPERS
========================================================= */

function getMenu(type) {
  if (type === "admin") return adminMenu;
  if (type === "manager") return managerMenu;
  return employeeMenu;
}

function getWorkspaceTitle(type) {
  if (type === "admin") return "Admin Workspace";
  if (type === "manager") return "Manager Workspace";
  return "Employee Workspace";
}

function getWorkspaceSubtitle(type) {
  if (type === "admin") return "Organization management";
  if (type === "manager") return "Team development";
  return "Career development";
}

/* =========================================================
   APP SHELL
========================================================= */

function AppShell({ type, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = getMenu(type);
  const workspace = getWorkspaceTitle(type);
  const subtitle = getWorkspaceSubtitle(type);

  const [collapsed, setCollapsed] = useState(false);

  const activeItem =
    menu.find((item) => location.pathname === item.path) || menu[0];

  const storedUser = (() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  })();

  const storedName =
    storedUser?.name || storedUser?.fullName || "User";

  const storedRole = String(
    storedUser?.role || type
  ).toLowerCase();

  const roleLabel =
    storedRole === "admin"
      ? "Administrator"
      : storedRole === "manager"
      ? "Manager"
      : "Employee";

  const initials = storedName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "U";

  const user = {
    initials,
    name: storedName,
    role: roleLabel,
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={`app-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Link to="/" className="brand">
            <div className="brand-icon">S</div>

            {!collapsed && (
              <div>
                <strong>SkillSphere</strong>
                <small>{workspace}</small>
              </div>
            )}
          </Link>

          <button
            className="sidebar-toggle"
            onClick={() => setCollapsed(!collapsed)}
            type="button"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>

        <div className="sidebar-section">
          {!collapsed && (
            <span className="sidebar-section-title">
              {type === "admin"
                ? "ADMINISTRATION"
                : type === "manager"
                ? "MANAGEMENT"
                : "MY WORKSPACE"}
            </span>
          )}

          <nav className="sidebar-nav">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${
                  activeItem.path === item.path ? "active" : ""
                }`}
                title={collapsed ? item.label : ""}
              >
                <span className="sidebar-icon">{item.icon}</span>

                {!collapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="sidebar-bottom">
          {!collapsed && (
            <div className="sidebar-user">
              <div className="sidebar-avatar">{user.initials}</div>

              <div>
                <strong>{user.name}</strong>
                <span>{user.role}</span>
              </div>
            </div>
          )}

          <button
            className="sidebar-logout"
            onClick={handleLogout}
            type="button"
            title="Logout"
          >
            <span>↪</span>
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="topbar-kicker">{subtitle}</span>

            <h1>{activeItem.label}</h1>
          </div>

          <div className="topbar-right">
            <button className="notification-button" type="button">
              ♧
            </button>

            <div className="topbar-user">
              <div className="topbar-avatar">{user.initials}</div>

              <div>
                <strong>{user.name}</strong>
                <span>{user.role}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}

/* =========================================================
   PAGE HEADER
========================================================= */

function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="page-header">
      <span className="page-eyebrow">{eyebrow}</span>

      <h1>{title}</h1>

      <p>{description}</p>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function DashboardPage({ type }) {
  return (
    <AppShell type={type}>
      <DashboardContent type={type} />
    </AppShell>
  );
}

function DashboardContent({ type }) {
  const navigate = useNavigate();

  const isAdmin = type === "admin";
  const isManager = type === "manager";

  let dashboardUserName = "there";

  try {
    const storedUser = JSON.parse(
      localStorage.getItem("user") || "null"
    );
    dashboardUserName =
      storedUser?.name ||
      storedUser?.fullName ||
      "there";
  } catch {
    dashboardUserName = "there";
  }

  const title = isAdmin
    ? "Organization overview"
    : isManager
    ? "Team development overview"
    : `Good morning, ${dashboardUserName}`;

  const description = isAdmin
    ? "Monitor skills, learning, feedback and workforce development."
    : isManager
    ? "Track your team's skills, readiness and development progress."
    : "Here's your current career development snapshot.";

  return (
    <>
      <PageHeader
        eyebrow={
          isAdmin
            ? "ADMIN DASHBOARD"
            : isManager
            ? "MANAGER DASHBOARD"
            : "MY DASHBOARD"
        }
        title={title}
        description={description}
      />

      <div className="dashboard-stats">
        <InfoCard
          title={isAdmin ? "Total Employees" : "Career Readiness"}
          value={isAdmin ? "248" : isManager ? "74%" : "67%"}
          subtitle={isAdmin ? "+12 this month" : "+6% this quarter"}
          icon="✦"
        />

        <InfoCard
          title={isAdmin ? "Active Learning" : "Skills Tracked"}
          value={isAdmin ? "186" : isManager ? "42" : "18"}
          subtitle={isAdmin ? "Current enrollments" : "Across your profile"}
          icon="▣"
        />

        <InfoCard
          title={isAdmin ? "Pending Feedback" : "Goals"}
          value={isAdmin ? "42" : isManager ? "16" : "8"}
          subtitle={isAdmin ? "Needs review" : "Active development goals"}
          icon="♡"
        />

        <InfoCard
          title={isAdmin ? "Reports" : "Learning Hours"}
          value={isAdmin ? "18" : "428"}
          subtitle={isAdmin ? "This month" : "This year"}
          icon="▤"
        />
      </div>

      <div className="dashboard-grid">
        <div className="card readiness-card-large">
          <div className="card-header">
            <div>
              <span className="card-kicker">DEVELOPMENT</span>
              <h2>
                {isAdmin
                  ? "Organization readiness"
                  : isManager
                  ? "Team readiness"
                  : "Career readiness"}
              </h2>
            </div>

            <span className="status-badge">On track</span>
          </div>

          <div className="big-readiness">
            {isAdmin ? "78%" : isManager ? "74%" : "67%"}
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: isAdmin
                  ? "78%"
                  : isManager
                  ? "74%"
                  : "67%",
              }}
            />
          </div>

          <div className="readiness-meta">
            <span>Current readiness</span>
            <strong>+6% this quarter</strong>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div>
              <span className="card-kicker">QUICK ACTIONS</span>
              <h2>Get started</h2>
            </div>
          </div>

          <div className="quick-actions">
            {!isAdmin && !isManager && (
              <>
                <button
                  className="quick-action"
                  onClick={() => navigate("/skills")}
                  type="button"
                >
                  <span>◆</span>
                  <div>
                    <strong>Add a skill</strong>
                    <small>Update your skill profile</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/goals")}
                  type="button"
                >
                  <span>✓</span>
                  <div>
                    <strong>Create a goal</strong>
                    <small>Set your next milestone</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/learning")}
                  type="button"
                >
                  <span>▣</span>
                  <div>
                    <strong>Continue learning</strong>
                    <small>View recommended courses</small>
                  </div>
                  <b>→</b>
                </button>
              </>
            )}

            {isManager && (
              <>
                <button
                  className="quick-action"
                  onClick={() => navigate("/manager/team")}
                  type="button"
                >
                  <span>◆</span>
                  <div>
                    <strong>View team</strong>
                    <small>Manage your employees</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/manager/skill-gaps")}
                  type="button"
                >
                  <span>△</span>
                  <div>
                    <strong>Review skill gaps</strong>
                    <small>Identify development areas</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/manager/reports")}
                  type="button"
                >
                  <span>▤</span>
                  <div>
                    <strong>View reports</strong>
                    <small>Analyze team data</small>
                  </div>
                  <b>→</b>
                </button>
              </>
            )}

            {isAdmin && (
              <>
                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/users")}
                  type="button"
                >
                  <span>◉</span>
                  <div>
                    <strong>Manage users</strong>
                    <small>View all platform users</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/learning")}
                  type="button"
                >
                  <span>▣</span>
                  <div>
                    <strong>Manage learning</strong>
                    <small>Manage learning resources</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/feedback")}
                  type="button"
                >
                  <span>♡</span>
                  <div>
                    <strong>Review feedback</strong>
                    <small>View employee feedback</small>
                  </div>
                  <b>→</b>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="section-title">
        <div>
          <span className="card-kicker">RECENT ACTIVITY</span>
          <h2>
            {isAdmin
              ? "Organization snapshot"
              : isManager
              ? "Team snapshot"
              : "Your development"}
          </h2>
        </div>
      </div>

      <div className="three-grid">
        <InfoCard
          title="Learning"
          value={isAdmin ? "186" : "3"}
          subtitle="Active courses"
          icon="▣"
        />

        <InfoCard
          title="Feedback"
          value={isAdmin ? "42" : "2"}
          subtitle="Recent conversations"
          icon="♡"
        />

        <InfoCard
          title="Skills"
          value={isAdmin ? "64" : "18"}
          subtitle="Skills tracked"
          icon="✦"
        />
      </div>
    </>
  );
}

/* =========================================================
   CONTENT PAGES
========================================================= */

function ContentPage({ type, section }) {
  return (
    <AppShell type={type}>
      <ContentRenderer type={type} section={section} />
    </AppShell>
  );
}

function ContentRenderer({ type, section }) {
  const config = getPageConfig(type, section);

  return (
    <>
      <PageHeader
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.description}
      />

      {section === "profile" && <ProfileContent />}
      {section === "skills" && <SkillsContent type={type} />}
      {section === "dna" && <DNAContent />}
      {section === "target" && <TargetContent />}
      {section === "gap" && <GapContent type={type} />}
      {section === "roadmap" && <RoadmapContent />}
      {section === "goals" && <GoalsContent />}
      {section === "learning" && <LearningContent type={type} />}
      {section === "feedback" && <FeedbackContent type={type} />}
      {section === "team" && <TeamContent />}
      {section === "reports" && <ReportsContent />}
      {section === "users" && <UsersContent />}
      {section === "employees" && <EmployeesContent />}
      {section === "managers" && <ManagersContent />}
    </>
  );
}

function getPageConfig(type, section) {
  const configs = {
    profile: {
      eyebrow: "YOUR PROFILE",
      title: "My Profile",
      description:
        "Manage your professional information and career settings.",
    },

    skills: {
      eyebrow: "SKILLS",
      title: type === "admin" ? "Skills Library" : "My Skills",
      description:
        type === "admin"
          ? "Manage the skills available across your organization."
          : "Track your strengths and current skill levels.",
    },

    dna: {
      eyebrow: "SKILL DNA",
      title: "Your Skill DNA",
      description:
        "Understand your strengths, capabilities and development areas.",
    },

    target: {
      eyebrow: "CAREER",
      title: "Career Target",
      description:
        "Define where you want your career to go next.",
    },

    gap: {
      eyebrow: "DEVELOPMENT",
      title:
        type === "manager" ? "Team Skill Gaps" : "Skill Gap Analysis",
      description:
        "Identify the skills you need to develop for your next step.",
    },

    roadmap: {
      eyebrow: "CAREER JOURNEY",
      title: "Career Roadmap",
      description:
        "A clear development path for your professional growth.",
    },

    goals: {
      eyebrow: "GOALS",
      title: "My Goals",
      description:
        "Set, track and complete your professional development goals.",
    },

    learning: {
      eyebrow: type === "admin" ? "LEARNING MANAGEMENT" : "LEARNING",
      title:
        type === "admin" ? "Learning Hub" : "Learning Center",
      description:
        type === "admin"
          ? "Manage learning resources and employee development."
          : "Courses recommended based on your skill gaps and career target.",
    },

    feedback: {
      eyebrow: "FEEDBACK",
      title:
        type === "admin" ? "Feedback Management" : "Feedback Center",
      description:
        type === "admin"
          ? "Review employee feedback and development conversations."
          : "Share feedback and stay connected with your development journey.",
    },

    team: {
      eyebrow: "TEAM",
      title: "My Team",
      description:
        "Manage team development and performance.",
    },

    reports: {
      eyebrow: "REPORTING",
      title: "Reports & Analytics",
      description:
        "Understand performance, skills and development trends.",
    },

    users: {
      eyebrow: "ADMINISTRATION",
      title: "User Management",
      description:
        "Manage all SkillSphere user accounts.",
    },

    employees: {
      eyebrow: "PEOPLE",
      title: "Employees",
      description:
        "View and manage employee profiles.",
    },

    managers: {
      eyebrow: "PEOPLE",
      title: "Managers",
      description:
        "View and manage managers across the organization.",
    },
  };

  return configs[section] || configs.profile;
}

/* =========================================================
   PROFILE
========================================================= */

function ProfileContent() {
  return (
    <div className="content-stack">
      <div className="profile-card card">
        <div className="profile-top">
          <div className="profile-avatar">SA</div>

          <div>
            <h2>Sanjana Sampath Kumar</h2>
            <p>Frontend Developer · Engineering</p>

            <span className="status-badge">
              Career readiness 67%
            </span>
          </div>

          <button className="primary-button" type="button">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="two-grid">
        <div className="card">
          <div className="card-header">
            <h2>Personal Information</h2>
          </div>

          <InfoRow label="First Name" value="Sanjana" />
          <InfoRow
            label="Last Name"
            value="Sampath Kumar"
          />
          <InfoRow
            label="Email"
            value="sanjana2@skillsphere.com"
          />
          <InfoRow
            label="Department"
            value="Engineering"
          />
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Career Information</h2>
          </div>

          <InfoRow
            label="Current Role"
            value="Frontend Developer"
          />
          <InfoRow
            label="Career Target"
            value="Senior Frontend Engineer"
          />
          <InfoRow
            label="Experience"
            value="3 years"
          />
          <InfoRow
            label="Readiness"
            value="67%"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SKILLS
========================================================= */

function SkillsContent({ type }) {
  const [skillList, setSkillList] = useState(skills);

  const addSkill = () => {
    const name = window.prompt(
      "Enter the new skill name:"
    );

    if (!name || !name.trim()) return;

    setSkillList((current) => [
      ...current,
      {
        name: name.trim(),
        level: 50,
        category: "New Skill",
      },
    ]);
  };

  return (
    <div className="content-stack">
      <div className="card">
        <div className="card-header">
          <div>
            <span className="card-kicker">
              {type === "admin"
                ? "SKILL LIBRARY"
                : "YOUR SKILLS"}
            </span>

            <h2>
              {type === "admin"
                ? "Available skills"
                : "My skill profile"}
            </h2>
          </div>

          <button
            className="primary-button"
            onClick={addSkill}
            type="button"
          >
            + Add Skill
          </button>
        </div>

        <div className="skill-list">
          {skillList.map((skill) => (
            <div className="skill-row-card" key={skill.name}>
              <div>
                <strong>{skill.name}</strong>
                <span>{skill.category}</span>
              </div>

              <div className="skill-level">
                <div className="skill-progress">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />
                </div>

                <strong>{skill.level}%</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SKILL DNA
========================================================= */

function DNAContent() {
  return (
    <div className="content-stack">
      <div className="dna-card card">
        <div className="dna-card-header">
          <div>
            <span>SKILL DNA PROFILE</span>
            <strong>Your current capability mix</strong>
          </div>

          <div className="dna-score">78</div>
        </div>

        <div className="dna-bars">
          {skills.map((skill) => (
            <div className="dna-item" key={skill.name}>
              <div>
                <span>{skill.name}</span>
                <strong>{skill.level}%</strong>
              </div>

              <div className="dna-track">
                <div
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CAREER TARGET
========================================================= */

function TargetContent() {
  return (
    <div className="two-grid">
      <div className="card">
        <div className="card-header">
          <div>
            <span className="card-kicker">
              CURRENT TARGET
            </span>
            <h2>Senior Frontend Engineer</h2>
          </div>

          <span className="status-badge">
            Active
          </span>
        </div>

        <p className="muted-text">
          Target role selected based on your interests,
          current skills and career direction.
        </p>

        <div className="target-details">
          <InfoRow
            label="Target level"
            value="Senior"
          />
          <InfoRow
            label="Target area"
            value="Frontend Engineering"
          />
          <InfoRow
            label="Estimated readiness"
            value="67%"
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Next focus</h2>
        </div>

        <ul className="simple-list">
          <li>Advanced React patterns</li>
          <li>System design</li>
          <li>Testing architecture</li>
          <li>Technical leadership</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================================================
   SKILL GAP
========================================================= */

function GapContent({ type }) {
  return (
    <div className="card gap-card">
      <div className="gap-header">
        <div>
          <span>READINESS</span>
          <strong>
            {type === "manager" ? "74%" : "67%"}
          </strong>
        </div>

        <div className="gap-role">
          <span>
            {type === "manager"
              ? "TEAM TARGET"
              : "CURRENT TARGET"}
          </span>

          <strong>
            {type === "manager"
              ? "Senior Engineering Team"
              : "Senior Frontend Engineer"}
          </strong>
        </div>

        <div className="gap-arrow">→</div>

        <div className="gap-role">
          <span>DEVELOPMENT</span>
          <strong>Skills to improve</strong>
        </div>
      </div>

      <div className="gap-list">
        {[
          ["System Design", 52],
          ["Testing", 64],
          ["Leadership", 46],
          ["Cloud", 61],
        ].map(([name, value]) => (
          <div className="gap-row" key={name}>
            <span>{name}</span>

            <div className="gap-progress">
              <div
                style={{
                  width: `${value}%`,
                }}
              />
            </div>

            <strong>{value}%</strong>

            <span className="gap-status">
              Focus
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ROADMAP
========================================================= */

function RoadmapContent() {
  const items = [
    {
      title: "Strengthen React",
      description:
        "Complete advanced React patterns and architecture.",
      status: "Completed",
      className: "completed",
    },
    {
      title: "Build System Design Skills",
      description:
        "Learn scalable application architecture.",
      status: "Current",
      className: "current",
    },
    {
      title: "Develop Technical Leadership",
      description:
        "Prepare for senior-level responsibilities.",
      status: "Upcoming",
      className: "",
    },
  ];

  return (
    <div className="roadmap">
      <div className="roadmap-line" />

      {items.map((item, index) => (
        <div
          className={`roadmap-item ${item.className}`}
          key={item.title}
        >
          <div className="roadmap-dot">
            {index + 1}
          </div>

          <div className="roadmap-content">
            <span>{item.status}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   GOALS
========================================================= */

function GoalsContent() {
  const [goals, setGoals] = useState([
    {
      title: "Complete Advanced React",
      progress: 72,
      status: "In progress",
    },
    {
      title: "Complete System Design course",
      progress: 35,
      status: "In progress",
    },
    {
      title: "Build portfolio project",
      progress: 100,
      status: "Completed",
    },
  ]);

  const addGoal = () => {
    const title = window.prompt(
      "Enter your new goal:"
    );

    if (!title || !title.trim()) return;

    setGoals((current) => [
      ...current,
      {
        title: title.trim(),
        progress: 0,
        status: "Not started",
      },
    ]);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <span className="card-kicker">
            DEVELOPMENT GOALS
          </span>
          <h2>My Goals</h2>
        </div>

        <button
          className="primary-button"
          onClick={addGoal}
          type="button"
        >
          + Add Goal
        </button>
      </div>

      <div className="goal-list">
        {goals.map((goal) => (
          <div className="goal-item" key={goal.title}>
            <div>
              <strong>{goal.title}</strong>
              <span>{goal.status}</span>
            </div>

            <div className="goal-progress">
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${goal.progress}%`,
                  }}
                />
              </div>

              <strong>{goal.progress}%</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   LEARNING
========================================================= */

function LearningContent({ type }) {
  const [selectedCourse, setSelectedCourse] =
    useState(null);

  return (
    <div className="content-stack">
      <div className="three-grid">
        <InfoCard
          title="Courses"
          value={type === "admin" ? "24" : "6"}
          subtitle="Available now"
          icon="▣"
        />

        <InfoCard
          title="In Progress"
          value={type === "admin" ? "186" : "3"}
          subtitle="Active enrollments"
          icon="↗"
        />

        <InfoCard
          title="Completed"
          value={type === "admin" ? "428" : "12"}
          subtitle="Learning completions"
          icon="✓"
        />
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <span className="card-kicker">
              {type === "admin"
                ? "LEARNING HUB"
                : "RECOMMENDED FOR YOU"}
            </span>

            <h2>
              {type === "admin"
                ? "Learning resources"
                : "Continue learning"}
            </h2>
          </div>

          {type === "admin" && (
            <button
              className="primary-button"
              type="button"
              onClick={() => {
                window.alert(
                  "Add Course feature is ready."
                );
              }}
            >
              + Add Course
            </button>
          )}
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.title}>
              <div className="course-icon">▣</div>

              <span className="course-category">
                {course.category}
              </span>

              <h3>{course.title}</h3>

              <p>{course.duration}</p>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${course.progress}%`,
                  }}
                />
              </div>

              <div className="course-footer">
                <span>
                  {course.progress}% complete
                </span>

                <button
                  type="button"
                  className="outline-button"
                  onClick={() =>
                    setSelectedCourse(course.title)
                  }
                >
                  {course.progress > 0
                    ? "Continue"
                    : "Start"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div className="card success-card">
          <strong>{selectedCourse}</strong>

          <p>
            Course selected. You can continue your
            learning journey from here.
          </p>

          <button
            className="outline-button"
            type="button"
            onClick={() => setSelectedCourse(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   FEEDBACK
========================================================= */

function FeedbackContent({ type }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="content-stack">
      <div className="two-grid">
        <div className="card">
          <div className="card-header">
            <div>
              <span className="card-kicker">
                {type === "admin"
                  ? "FEEDBACK MANAGEMENT"
                  : "SHARE FEEDBACK"}
              </span>

              <h2>
                {type === "admin"
                  ? "Feedback overview"
                  : "Tell us what you think"}
              </h2>
            </div>
          </div>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>

              <h3>Feedback submitted!</h3>

              <p>
                Thank you. Your feedback has been
                recorded successfully.
              </p>

              <button
                className="outline-button"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send another
              </button>
            </div>
          ) : (
            <div className="feedback-form">
              <label>Feedback type</label>

              <select defaultValue="Career Development">
                <option>
                  Career Development
                </option>
                <option>
                  Learning Experience
                </option>
                <option>
                  Manager Feedback
                </option>
                <option>
                  Platform Feedback
                </option>
              </select>

              <label>Subject</label>

              <input
                placeholder="Enter feedback subject"
              />

              <label>Your feedback</label>

              <textarea
                rows="6"
                placeholder="Tell us about your experience..."
              />

              <button
                className="primary-button"
                type="button"
                onClick={() => setSubmitted(true)}
              >
                Submit Feedback
              </button>
            </div>
          )}
        </div>

        <div className="card">
          <span className="card-kicker">
            RECENT FEEDBACK
          </span>

          <h2>
            {type === "admin"
              ? "Feedback Overview"
              : "Your feedback"}
          </h2>

          <div className="feedback-item">
            <div className="feedback-icon">
              ♡
            </div>

            <div>
              <strong>
                Learning experience
              </strong>

              <p>Submitted recently</p>
            </div>

            <span className="status-badge">
              Reviewed
            </span>
          </div>

          <div className="feedback-item">
            <div className="feedback-icon">
              ♡
            </div>

            <div>
              <strong>
                Career development
              </strong>

              <p>Submitted last month</p>
            </div>

            <span className="status-badge">
              Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TEAM
========================================================= */

function TeamContent() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <span className="card-kicker">
            TEAM MEMBERS
          </span>

          <h2>Your Team</h2>
        </div>

        <button
          className="primary-button"
          type="button"
          onClick={() =>
            window.alert(
              "Add Member feature is ready."
            )
          }
        >
          Add Member
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Role</th>
              <th>Department</th>
              <th>Readiness</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.name}>
                <td>
                  <div className="table-person">
                    <div className="mini-avatar">
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    {employee.name}
                  </div>
                </td>

                <td>{employee.role}</td>
                <td>{employee.department}</td>
                <td>{employee.readiness}%</td>

                <td>
                  <span className="status-badge">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-action">
        <button
          className="outline-button"
          type="button"
          onClick={() =>
            navigate("/manager/skill-gaps")
          }
        >
          Review Skill Gaps →
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   REPORTS
========================================================= */

function ReportsContent() {
  return (
    <div className="content-stack">
      <div className="three-grid">
        <InfoCard
          title="Team Readiness"
          value="74%"
          subtitle="+6% this quarter"
          icon="✦"
        />

        <InfoCard
          title="Skill Completion"
          value="82%"
          subtitle="+12% this quarter"
          icon="✓"
        />

        <InfoCard
          title="Learning Hours"
          value="428"
          subtitle="This quarter"
          icon="▣"
        />
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <span className="card-kicker">
              ANALYTICS
            </span>

            <h2>Development performance</h2>
          </div>

          <button
            className="outline-button"
            type="button"
            onClick={() =>
              window.alert(
                "Report export is ready."
              )
            }
          >
            Export Report
          </button>
        </div>

        <div className="activity-chart large">
          {[55, 68, 61, 74, 82, 77, 88, 80, 91, 86, 94, 90].map(
            (height, index) => (
              <div
                className="chart-column"
                key={index}
              >
                <div
                  className="chart-bar"
                  style={{
                    height: `${height}%`,
                  }}
                />

                <span>{index + 1}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ADMIN TABLES
========================================================= */

function UsersContent() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <span className="card-kicker">
            USERS
          </span>

          <h2>User Management</h2>
        </div>

        <button
          className="primary-button"
          type="button"
          onClick={() =>
            window.alert("Add User feature is ready.")
          }
        >
          + Add User
        </button>
      </div>

      <DataTable
        headers={[
          "Name",
          "Email",
          "Role",
          "Status",
        ]}
        rows={[
          [
            "Sanjana Sampath Kumar",
            "sanjana2@skillsphere.com",
            "Employee",
            "Active",
          ],
          [
            "Alex Rivera",
            "alex@skillsphere.com",
            "Employee",
            "Active",
          ],
          [
            "Manager User",
            "manager@skillsphere.com",
            "Manager",
            "Active",
          ],
          [
            "Admin User",
            "admin@skillsphere.com",
            "Admin",
            "Active",
          ],
        ]}
      />
    </div>
  );
}

function EmployeesContent() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <span className="card-kicker">
            PEOPLE
          </span>

          <h2>Employees</h2>
        </div>

        <button
          className="primary-button"
          type="button"
          onClick={() =>
            window.alert(
              "Add Employee feature is ready."
            )
          }
        >
          + Add Employee
        </button>
      </div>

      <DataTable
        headers={[
          "Employee",
          "Department",
          "Role",
          "Readiness",
        ]}
        rows={employees.map((e) => [
          e.name,
          e.department,
          e.role,
          `${e.readiness}%`,
        ])}
      />
    </div>
  );
}

function ManagersContent() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <span className="card-kicker">
            MANAGEMENT
          </span>

          <h2>Managers</h2>
        </div>

        <button
          className="primary-button"
          type="button"
          onClick={() =>
            window.alert(
              "Add Manager feature is ready."
            )
          }
        >
          + Add Manager
        </button>
      </div>

      <DataTable
        headers={[
          "Manager",
          "Department",
          "Team Size",
          "Status",
        ]}
        rows={[
          [
            "Manager User",
            "Engineering",
            "12",
            "Active",
          ],
          [
            "Priya Manager",
            "Design",
            "8",
            "Active",
          ],
          [
            "Daniel Manager",
            "Technology",
            "10",
            "Active",
          ],
        ]}
      />
    </div>
  );
}

/* =========================================================
   COMMON COMPONENTS
========================================================= */

function InfoCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <div className="stat-card card">
      <div className="stat-icon">{icon}</div>

      <span>{title}</span>

      <strong>{value}</strong>

      <small>{subtitle}</small>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {cellIndex === row.length - 1 ? (
                    <span className="status-badge">
                      {cell}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* =========================================================
   LANDING
========================================================= */

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <Link
          to="/"
          className="landing-brand"
        >
          <span className="logo-box">S</span>
          <strong>SkillSphere</strong>
        </Link>

        <div className="landing-links">
          <a href="#how">How It Works</a>
          <a href="#skills">Skill DNA</a>
          <a href="#career">Career Paths</a>
          <a href="#managers">For Managers</a>
        </div>

        <div className="landing-actions">
          <button
            className="outline-button"
            type="button"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>

          <button
            className="primary-button"
            type="button"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-hero-content">
          <span className="page-eyebrow">
            CAREER DEVELOPMENT PLATFORM
          </span>

          <h1>
            Turn your skills into your
            <span> next opportunity.</span>
          </h1>

          <p>
            SkillSphere helps employees understand
            their skills, close career gaps and build
            a clear path toward their next role.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              type="button"
              onClick={() => navigate("/register")}
            >
              Start Your Journey →
            </button>

            <button
              className="outline-button"
              type="button"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   SIMPLE LOGIN / REGISTER
   These are only fallbacks for the App router.
========================================================= */

function SimpleLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed."
        );
      }

      if (data.token) {
        localStorage.setItem(
          "token",
          data.token
        );
      }

      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }

      const role = String(
        data.user?.role || "employee"
      ).toLowerCase();

      if (role === "admin") {
        navigate("/admin/dashboard", {
          replace: true,
        });
      } else if (role === "manager") {
        navigate("/manager/dashboard", {
          replace: true,
        });
      } else {
        navigate("/dashboard", {
          replace: true,
        });
      }
    } catch (err) {
      setError(
        err.message || "Unable to login."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <Link to="/" className="brand">
          <div className="brand-icon">S</div>
          <span>SkillSphere</span>
        </Link>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-heading">
            <span className="eyebrow">
              WELCOME BACK
            </span>

            <h1>Welcome back</h1>

            <p>
              Sign in to continue your career journey.
            </p>
          </div>

          {error && (
            <div className="auth-message error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                Work Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              className="primary-button full"
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Signing in..."
                : "Sign In"}
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?{" "}
            <Link to="/register">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Read directly from the submitted form as well as React state.
    // This prevents browser autofill from making filled fields look empty.
    const submitted = new FormData(e.currentTarget);

    const name = String(
      submitted.get("name") || form.name || ""
    ).trim();

    const email = String(
      submitted.get("email") || form.email || ""
    ).trim();

    const password = String(
      submitted.get("password") || form.password || ""
    );

    const role = String(
      submitted.get("role") || form.role || "employee"
    ).toLowerCase();

    if (!name || !email || !password || !role) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!['employee', 'manager', 'admin'].includes(role)) {
      setError("Please select a valid role.");
      return;
    }

    setForm({
      name,
      email,
      password,
      role,
    });

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role,
          }),
        }
      );

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            "Unable to create account. Please try again."
        );
      }

      setSuccess(
        "Account created successfully! Redirecting to login..."
      );

      // If the API returns a user/token, keep them available for the app.
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setTimeout(() => {
        navigate("/login", {
          replace: true,
        });
      }, 800);
    } catch (err) {
      console.error("Registration error:", err);

      if (
        err instanceof TypeError &&
        err.message.toLowerCase().includes("fetch")
      ) {
        setError(
          "Cannot connect to the server. Please make sure your backend is running on port 5000."
        );
      } else {
        setError(
          err.message || "Unable to create account."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-brand">
        <Link to="/" className="brand">
          <div className="brand-icon">S</div>
          <span>SkillSphere</span>
        </Link>
      </div>

      <div className="auth-container">

        <div className="auth-card">

          <div className="auth-heading">

            <span className="eyebrow">
              GET STARTED
            </span>

            <h1>Create your account</h1>

            <p>
              Start building your career development
              journey.
            </p>

          </div>

          {error && (
            <div className="auth-message error">
              {error}
            </div>
          )}

          {success && (
            <div className="auth-message success">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label htmlFor="register-name">
                Name
              </label>

              <input
                id="register-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="register-email">
                Work Email
              </label>

              <input
                id="register-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="register-password">
                Password
              </label>

              <input
                id="register-password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={6}
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="register-role">
                Current Role
              </label>

              <select
                id="register-role"
                name="role"
                value={form.role}
                onChange={handleChange}
                required
              >
                <option value="employee">
                  Employee
                </option>

                <option value="manager">
                  Manager
                </option>

                <option value="admin">
                  Admin
                </option>
              </select>

            </div>

            <button
              className="primary-button full"
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Creating..."
                : "Create Account"}
            </button>

          </form>

          <div className="auth-footer">

            Already have an account?{" "}

            <Link to="/login">
              Sign in
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   ROUTES
========================================================= */

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<SimpleLogin />}
      />

      <Route
        path="/register"
        element={<SimpleRegister />}
      />

      {/* ================= EMPLOYEE ================= */}

      <Route
        path="/dashboard"
        element={
          <DashboardPage type="employee" />
        }
      />

      <Route
        path="/profile"
        element={
          <ContentPage
            type="employee"
            section="profile"
          />
        }
      />

      <Route
        path="/skills"
        element={
          <ContentPage
            type="employee"
            section="skills"
          />
        }
      />

      <Route
        path="/skill-dna"
        element={
          <ContentPage
            type="employee"
            section="dna"
          />
        }
      />

      <Route
        path="/career-target"
        element={
          <ContentPage
            type="employee"
            section="target"
          />
        }
      />

      <Route
        path="/skill-gap"
        element={
          <ContentPage
            type="employee"
            section="gap"
          />
        }
      />

      <Route
        path="/career-roadmap"
        element={
          <ContentPage
            type="employee"
            section="roadmap"
          />
        }
      />

      <Route
        path="/goals"
        element={
          <ContentPage
            type="employee"
            section="goals"
          />
        }
      />

      <Route
        path="/learning"
        element={
          <ContentPage
            type="employee"
            section="learning"
          />
        }
      />

      <Route
        path="/feedback"
        element={
          <ContentPage
            type="employee"
            section="feedback"
          />
        }
      />

      {/* ================= MANAGER ================= */}

      <Route
        path="/manager/dashboard"
        element={
          <DashboardPage type="manager" />
        }
      />

      <Route
        path="/manager/profile"
        element={
          <ContentPage
            type="manager"
            section="profile"
          />
        }
      />

      <Route
        path="/manager/team"
        element={
          <ContentPage
            type="manager"
            section="team"
          />
        }
      />

      <Route
        path="/manager/skills"
        element={
          <ContentPage
            type="manager"
            section="skills"
          />
        }
      />

      <Route
        path="/manager/skill-gaps"
        element={
          <ContentPage
            type="manager"
            section="gap"
          />
        }
      />

      <Route
        path="/manager/learning"
        element={
          <ContentPage
            type="manager"
            section="learning"
          />
        }
      />

      <Route
        path="/manager/feedback"
        element={
          <ContentPage
            type="manager"
            section="feedback"
          />
        }
      />

      <Route
        path="/manager/reports"
        element={
          <ContentPage
            type="manager"
            section="reports"
          />
        }
      />

      {/* ================= ADMIN ================= */}

      <Route
        path="/admin/dashboard"
        element={
          <DashboardPage type="admin" />
        }
      />

      <Route
        path="/admin/users"
        element={
          <ContentPage
            type="admin"
            section="users"
          />
        }
      />

      <Route
        path="/admin/employees"
        element={
          <ContentPage
            type="admin"
            section="employees"
          />
        }
      />

      <Route
        path="/admin/managers"
        element={
          <ContentPage
            type="admin"
            section="managers"
          />
        }
      />

      <Route
        path="/admin/skills"
        element={
          <ContentPage
            type="admin"
            section="skills"
          />
        }
      />

      <Route
        path="/admin/learning"
        element={
          <ContentPage
            type="admin"
            section="learning"
          />
        }
      />

      <Route
        path="/admin/feedback"
        element={
          <ContentPage
            type="admin"
            section="feedback"
          />
        }
      />

      <Route
        path="/admin/reports"
        element={
          <ContentPage
            type="admin"
            section="reports"
          />
        }
      />

      {/* Fallback */}
      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />
    </Routes>
  );
}