import React from "react";

function ManagerDashboard() {
  const team = [
    {
      name: "Sanjana Sampath",
      role: "Frontend Developer",
      progress: 82,
      status: "On Track",
    },
    {
      name: "Rahul Sharma",
      role: "Backend Developer",
      progress: 68,
      status: "On Track",
    },
    {
      name: "Priya Reddy",
      role: "UI/UX Designer",
      progress: 54,
      status: "Needs Attention",
    },
    {
      name: "Arjun Kumar",
      role: "Full Stack Developer",
      progress: 91,
      status: "Excellent",
    },
  ];

  return (
    <div className="workspace-page">

      {/* HEADER */}
      <div className="workspace-header">
        <div>
          <span className="workspace-eyebrow">MANAGER WORKSPACE</span>
          <h1>Team Overview</h1>
          <p>Monitor team skills, growth and career readiness.</p>
        </div>

        <div className="workspace-user">
          <div className="workspace-avatar">MK</div>
          <div>
            <strong>Manager</strong>
            <span>Team Manager</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <main className="workspace-content">

        {/* PAGE TITLE */}
        <div className="page-title-row">
          <div>
            <span className="section-eyebrow">OVERVIEW</span>
            <h2>Manager Dashboard</h2>
            <p>
              Get a clear view of your team's skills, progress and development.
            </p>
          </div>

          <button className="dashboard-action">
            + Add Employee
          </button>
        </div>

        {/* STATS */}
        <div className="dashboard-stats">

          <div className="dashboard-stat-card">
            <div className="stat-icon">👥</div>
            <span>Total Employees</span>
            <strong>24</strong>
            <small>+3 this month</small>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">✓</div>
            <span>Avg. Readiness</span>
            <strong>76%</strong>
            <small>+8% from last month</small>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">◆</div>
            <span>Skills Tracked</span>
            <strong>142</strong>
            <small>Across your team</small>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">!</div>
            <span>Skill Gaps</span>
            <strong>18</strong>
            <small className="warning-text">Needs attention</small>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="manager-dashboard-grid">

          {/* TEAM PROGRESS */}
          <section className="dashboard-card team-card">

            <div className="card-header">
              <div>
                <span className="card-eyebrow">TEAM DEVELOPMENT</span>
                <h3>Team Skill Progress</h3>
              </div>

              <button className="text-button">
                View All
              </button>
            </div>

            <div className="team-list">

              {team.map((member, index) => (
                <div className="team-progress-row" key={index}>

                  <div className="team-person">
                    <div className="person-avatar">
                      {member.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <strong>{member.name}</strong>
                      <span>{member.role}</span>
                    </div>
                  </div>

                  <div className="team-progress-area">
                    <div className="progress-label">
                      <span>Skill readiness</span>
                      <strong>{member.progress}%</strong>
                    </div>

                    <div className="dashboard-progress">
                      <div
                        style={{ width: `${member.progress}%` }}
                      />
                    </div>
                  </div>

                  <span
                    className={
                      member.status === "Needs Attention"
                        ? "status-pill warning"
                        : "status-pill"
                    }
                  >
                    {member.status}
                  </span>

                </div>
              ))}

            </div>

          </section>

          {/* READINESS */}
          <section className="dashboard-card readiness-dashboard-card">

            <div className="card-header">
              <div>
                <span className="card-eyebrow">TEAM READINESS</span>
                <h3>Overall Score</h3>
              </div>
            </div>

            <div className="readiness-circle">
              <div>
                <strong>76%</strong>
                <span>Ready</span>
              </div>
            </div>

            <div className="readiness-breakdown">

              <div>
                <span>Technical Skills</span>
                <strong>81%</strong>
              </div>

              <div>
                <span>Soft Skills</span>
                <strong>74%</strong>
              </div>

              <div>
                <span>Leadership</span>
                <strong>69%</strong>
              </div>

            </div>

          </section>

        </div>

        {/* LOWER GRID */}
        <div className="manager-lower-grid">

          {/* SKILL GAPS */}
          <section className="dashboard-card">

            <div className="card-header">
              <div>
                <span className="card-eyebrow">SKILL ANALYSIS</span>
                <h3>Top Skill Gaps</h3>
              </div>

              <button className="text-button">
                View Analysis
              </button>
            </div>

            <div className="skill-gap-list">

              <div className="skill-gap-item">
                <div>
                  <strong>Cloud Computing</strong>
                  <span>8 employees</span>
                </div>

                <div className="gap-bar">
                  <div style={{ width: "78%" }} />
                </div>

                <strong>78%</strong>
              </div>

              <div className="skill-gap-item">
                <div>
                  <strong>Data Analytics</strong>
                  <span>6 employees</span>
                </div>

                <div className="gap-bar">
                  <div style={{ width: "61%" }} />
                </div>

                <strong>61%</strong>
              </div>

              <div className="skill-gap-item">
                <div>
                  <strong>Leadership</strong>
                  <span>5 employees</span>
                </div>

                <div className="gap-bar">
                  <div style={{ width: "48%" }} />
                </div>

                <strong>48%</strong>
              </div>

            </div>

          </section>

          {/* QUICK ACTIONS */}
          <section className="dashboard-card">

            <div className="card-header">
              <div>
                <span className="card-eyebrow">QUICK ACTIONS</span>
                <h3>Manage Your Team</h3>
              </div>
            </div>

            <div className="quick-actions">

              <button>
                <span>👥</span>
                <div>
                  <strong>Team Members</strong>
                  <small>View and manage employees</small>
                </div>
              </button>

              <button>
                <span>📊</span>
                <div>
                  <strong>Analytics</strong>
                  <small>Review team performance</small>
                </div>
              </button>

              <button>
                <span>🎯</span>
                <div>
                  <strong>Career Goals</strong>
                  <small>Track employee goals</small>
                </div>
              </button>

            </div>

          </section>

        </div>

      </main>
    </div>
  );
}

export default ManagerDashboard;