import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="workspace-page">

      <div className="page-header">
        <div>
          <span className="page-eyebrow">EMPLOYEE WORKSPACE</span>
          <h1>Good morning, Sanjana 👋</h1>
          <p>Here’s your career growth overview for today.</p>
        </div>

        <div className="header-action">
          <Link to="/career-roadmap" className="dashboard-button">
            View Career Roadmap
          </Link>
        </div>
      </div>

      {/* TOP STATS */}

      <div className="stats-grid">

        <div className="stat-card featured">
          <div className="stat-top">
            <span>Career Readiness</span>
            <span className="stat-icon">↗</span>
          </div>

          <strong>67%</strong>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: "67%" }}
            />
          </div>

          <small>+8% from last month</small>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Skills Tracked</span>
            <span className="stat-icon">◆</span>
          </div>

          <strong>24</strong>
          <small>6 skills improving</small>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Learning Progress</span>
            <span className="stat-icon">◈</span>
          </div>

          <strong>72%</strong>
          <small>4 courses in progress</small>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Goals Completed</span>
            <span className="stat-icon">✓</span>
          </div>

          <strong>8 / 12</strong>
          <small>67% completion rate</small>
        </div>

      </div>

      {/* MAIN GRID */}

      <div className="dashboard-main-grid">

        {/* SKILL OVERVIEW */}

        <section className="dashboard-card">

          <div className="card-heading">
            <div>
              <span className="card-eyebrow">YOUR SKILLS</span>
              <h2>Skill Overview</h2>
            </div>

            <Link to="/skills">View all</Link>
          </div>

          <div className="skill-list">

            <div className="skill-item">
              <div className="skill-info">
                <strong>React</strong>
                <span>Advanced</span>
              </div>

              <div className="skill-bar">
                <div style={{ width: "88%" }} />
              </div>

              <b>88%</b>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <strong>JavaScript</strong>
                <span>Advanced</span>
              </div>

              <div className="skill-bar">
                <div style={{ width: "82%" }} />
              </div>

              <b>82%</b>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <strong>UI / UX</strong>
                <span>Intermediate</span>
              </div>

              <div className="skill-bar">
                <div style={{ width: "70%" }} />
              </div>

              <b>70%</b>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <strong>Node.js</strong>
                <span>Intermediate</span>
              </div>

              <div className="skill-bar">
                <div style={{ width: "62%" }} />
              </div>

              <b>62%</b>
            </div>

          </div>

        </section>

        {/* CAREER TARGET */}

        <section className="dashboard-card career-card">

          <div className="card-heading">
            <div>
              <span className="card-eyebrow">CAREER TARGET</span>
              <h2>Frontend Developer</h2>
            </div>

            <span className="target-badge">Active</span>
          </div>

          <p>
            Your current skills are aligned with your target role.
          </p>

          <div className="target-score">
            <div className="score-circle">
              <strong>78%</strong>
              <span>Match</span>
            </div>

            <div>
              <strong>Strong alignment</strong>
              <span>4 skills remaining</span>
            </div>
          </div>

          <Link
            to="/skill-gap"
            className="outline-button"
          >
            View Skill Gap
          </Link>

        </section>

      </div>

      {/* LOWER GRID */}

      <div className="dashboard-lower-grid">

        {/* SKILL DNA */}

        <section className="dashboard-card">

          <div className="card-heading">
            <div>
              <span className="card-eyebrow">SKILL DNA</span>
              <h2>Your Skill DNA</h2>
            </div>

            <Link to="/skill-dna">Explore</Link>
          </div>

          <div className="dna-grid">

            <div className="dna-item">
              <span>Technical</span>
              <strong>84%</strong>
            </div>

            <div className="dna-item">
              <span>Problem Solving</span>
              <strong>76%</strong>
            </div>

            <div className="dna-item">
              <span>Communication</span>
              <strong>68%</strong>
            </div>

            <div className="dna-item">
              <span>Leadership</span>
              <strong>61%</strong>
            </div>

          </div>

        </section>

        {/* NEXT STEPS */}

        <section className="dashboard-card">

          <div className="card-heading">
            <div>
              <span className="card-eyebrow">NEXT STEPS</span>
              <h2>Recommended for you</h2>
            </div>
          </div>

          <div className="recommendation">

            <div className="recommendation-icon">
              01
            </div>

            <div>
              <strong>Improve TypeScript</strong>
              <p>
                Close one of your highest priority skill gaps.
              </p>
            </div>

            <Link to="/learning">→</Link>

          </div>

          <div className="recommendation">

            <div className="recommendation-icon">
              02
            </div>

            <div>
              <strong>Complete React Course</strong>
              <p>
                You are 82% through your current course.
              </p>
            </div>

            <Link to="/learning">→</Link>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;