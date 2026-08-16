import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}
      <header className="landing-navbar">
        <div className="container navbar-inner">

          <Link to="/" className="logo">
            <span className="logo-mark">S</span>
            <span className="logo-text">SkillSphere</span>
          </Link>

          <nav className="main-nav">
            <a href="#how-it-works">How It Works</a>
            <a href="#skill-dna">Skill DNA</a>
            <a href="#career-paths">Career Paths</a>
            <a href="#managers">For Managers</a>
          </nav>

          <div className="navbar-actions">
            <Link to="/login" className="login-link">
              Log In
            </Link>

            <Link to="/register" className="nav-button">
              Get Started
            </Link>
          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main>

        <section className="hero-section">
          <div className="container hero-content">

            <div className="hero-eyebrow">
              CAREER INTELLIGENCE PLATFORM
            </div>

            <h1>
              Know Your Skills.
              <br />
              <span>Discover Your Path.</span>
              <br />
              Grow With Purpose.
            </h1>

            <p className="hero-description">
              SkillSphere helps you understand your strengths, identify the
              skills you need for your next career move, and turn your goals
              into a clear development roadmap.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="primary-button">
                Get Started Free <span>→</span>
              </Link>

              <a href="#how-it-works" className="secondary-button">
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">

              <div className="hero-stat">
                <strong>12K+</strong>
                <span>Skills Tracked</span>
              </div>

              <div className="hero-stat">
                <strong>8K+</strong>
                <span>Goals Completed</span>
              </div>

              <div className="hero-stat">
                <strong>240+</strong>
                <span>Career Paths</span>
              </div>

            </div>

          </div>
        </section>


        {/* ================= DASHBOARD PREVIEW ================= */}
        <section className="preview-section">
          <div className="container">

            <div className="dashboard-preview">

              <div className="preview-sidebar">

                <div className="preview-brand">
                  <span className="small-logo">S</span>
                  <span>SkillSphere</span>
                </div>

                <div className="preview-nav active">
                  Dashboard
                </div>

                <div className="preview-nav">
                  My Skills
                </div>

                <div className="preview-nav">
                  Skill DNA
                </div>

                <div className="preview-nav">
                  Career Path
                </div>

                <div className="preview-nav">
                  Goals
                </div>

                <div className="preview-nav">
                  Learning
                </div>

              </div>


              <div className="preview-main">

                <div className="preview-topbar">
                  <div>
                    <span className="preview-label">
                      EMPLOYEE DASHBOARD
                    </span>
                    <h3>Good morning, Alex 👋</h3>
                  </div>

                  <div className="preview-avatar">
                    AR
                  </div>
                </div>


                <div className="preview-grid">

                  <div className="readiness-card">

                    <div className="card-label">
                      CAREER READINESS
                    </div>

                    <div className="readiness-number">
                      78%
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: "78%" }}
                      />
                    </div>

                    <div className="readiness-meta">
                      <span>Frontend Dev</span>
                      <span>Sr. Full-Stack</span>
                    </div>

                  </div>


                  <div className="mini-stat-card">
                    <span>Skills</span>
                    <strong>12</strong>
                    <small>+3 this month</small>
                  </div>


                  <div className="mini-stat-card">
                    <span>Goals</span>
                    <strong>8</strong>
                    <small>3 active</small>
                  </div>


                  <div className="mini-stat-card">
                    <span>Courses</span>
                    <strong>5</strong>
                    <small>2 in progress</small>
                  </div>

                </div>


                <div className="preview-skills">

                  <div className="preview-section-heading">
                    <div>
                      <span className="card-label">
                        SKILL DEVELOPMENT
                      </span>
                      <h3>Your current skill profile</h3>
                    </div>

                    <span className="view-link">
                      View all →
                    </span>
                  </div>


                  <div className="skill-row">
                    <div className="skill-name">
                      <span>React</span>
                      <strong>85%</strong>
                    </div>

                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>


                  <div className="skill-row">
                    <div className="skill-name">
                      <span>JavaScript</span>
                      <strong>78%</strong>
                    </div>

                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        style={{ width: "78%" }}
                      />
                    </div>
                  </div>


                  <div className="skill-row">
                    <div className="skill-name">
                      <span>Node.js</span>
                      <strong>62%</strong>
                    </div>

                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        style={{ width: "62%" }}
                      />
                    </div>
                  </div>


                  <div className="skill-row">
                    <div className="skill-name">
                      <span>AWS</span>
                      <strong>35%</strong>
                    </div>

                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        style={{ width: "35%" }}
                      />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= HOW IT WORKS ================= */}
        <section
          className="content-section"
          id="how-it-works"
        >

          <div className="container">

            <div className="section-heading centered">

              <span className="section-eyebrow">
                HOW IT WORKS
              </span>

              <h2>
                Your career, mapped clearly.
              </h2>

              <p>
                Three steps that transform how you understand and develop
                your professional skills.
              </p>

            </div>


            <div className="steps-grid">

              <div className="step-card">
                <span className="step-number">01</span>

                <h3>Know Yourself</h3>

                <p>
                  Build your Skill DNA and understand your strongest
                  capabilities across technical and interpersonal dimensions.
                </p>

                <div className="step-icon">
                  ✓
                </div>
              </div>


              <div className="step-card">
                <span className="step-number">02</span>

                <h3>Discover Your Gaps</h3>

                <p>
                  Compare your current skills with the requirements of your
                  target career and see exactly what needs development.
                </p>

                <div className="step-icon">
                  →
                </div>
              </div>


              <div className="step-card">
                <span className="step-number">03</span>

                <h3>Build Your Path</h3>

                <p>
                  Follow a personalized roadmap with goals, curated learning,
                  and measurable progress milestones.
                </p>

                <div className="step-icon">
                  ★
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILL DNA ================= */}
        <section
          className="feature-section"
          id="skill-dna"
        >

          <div className="container feature-grid">

            <div className="feature-copy">

              <span className="section-eyebrow">
                SKILL DNA
              </span>

              <h2>
                See the skills
                <br />
                that define you.
              </h2>

              <p>
                Skill DNA gives every employee a visual snapshot of their
                technical, professional and interpersonal strengths — a unique
                fingerprint of capability.
              </p>

              <div className="feature-highlights">

                <div>
                  <strong>84 / 100</strong>
                  <span>Overall Skill Score</span>
                </div>

                <div>
                  <strong>Top Strength</strong>
                  <span>Technical Skills</span>
                </div>

                <div>
                  <strong>Development</strong>
                  <span>Leadership</span>
                </div>

              </div>

            </div>


            <div className="dna-card">

              <div className="dna-card-header">
                <div>
                  <span>MY SKILL DNA</span>
                  <strong>Updated today</strong>
                </div>

                <div className="dna-score">
                  84
                </div>
              </div>


              <div className="dna-bars">

                <div className="dna-item">
                  <div>
                    <span>Technical</span>
                    <strong>84</strong>
                  </div>

                  <div className="dna-track">
                    <div
                      style={{ width: "84%" }}
                    />
                  </div>
                </div>


                <div className="dna-item">
                  <div>
                    <span>Communication</span>
                    <strong>76</strong>
                  </div>

                  <div className="dna-track">
                    <div
                      style={{ width: "76%" }}
                    />
                  </div>
                </div>


                <div className="dna-item">
                  <div>
                    <span>Leadership</span>
                    <strong>62</strong>
                  </div>

                  <div className="dna-track">
                    <div
                      style={{ width: "62%" }}
                    />
                  </div>
                </div>


                <div className="dna-item">
                  <div>
                    <span>Problem Solving</span>
                    <strong>88</strong>
                  </div>

                  <div className="dna-track">
                    <div
                      style={{ width: "88%" }}
                    />
                  </div>
                </div>


                <div className="dna-item">
                  <div>
                    <span>Creativity</span>
                    <strong>72</strong>
                  </div>

                  <div className="dna-track">
                    <div
                      style={{ width: "72%" }}
                    />
                  </div>
                </div>


                <div className="dna-item">
                  <div>
                    <span>Management</span>
                    <strong>55</strong>
                  </div>

                  <div className="dna-track">
                    <div
                      style={{ width: "55%" }}
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CAREER GAP ================= */}
        <section className="content-section">

          <div className="container">

            <div className="section-heading centered">

              <span className="section-eyebrow">
                CAREER GAP ANALYSIS
              </span>

              <h2>
                Know exactly what stands between
                <br />
                you and your next role.
              </h2>

              <p>
                SkillSphere compares your current skill profile against the
                requirements of your target role — giving you a clear,
                actionable picture of where to focus your development effort.
              </p>

            </div>


            <div className="gap-card">

              <div className="gap-header">

                <div>
                  <span>CAREER READINESS</span>
                  <strong>72%</strong>
                </div>

                <div className="gap-role">
                  <span>Current</span>
                  <strong>Frontend Developer</strong>
                </div>

                <div className="gap-arrow">
                  →
                </div>

                <div className="gap-role">
                  <span>Target</span>
                  <strong>Senior Full-Stack</strong>
                </div>

              </div>


              <div className="gap-list">

                <div className="gap-row">
                  <span>React</span>
                  <div className="gap-progress">
                    <div
                      className="met"
                      style={{ width: "85%" }}
                    />
                  </div>
                  <strong>85%</strong>
                  <span className="gap-status met-text">
                    Met
                  </span>
                </div>


                <div className="gap-row">
                  <span>Node.js</span>
                  <div className="gap-progress">
                    <div
                      style={{ width: "62%" }}
                    />
                  </div>
                  <strong>62%</strong>
                  <span className="gap-status">
                    -18%
                  </span>
                </div>


                <div className="gap-row">
                  <span>TypeScript</span>
                  <div className="gap-progress">
                    <div
                      style={{ width: "45%" }}
                    />
                  </div>
                  <strong>45%</strong>
                  <span className="gap-status">
                    -30%
                  </span>
                </div>


                <div className="gap-row">
                  <span>AWS</span>
                  <div className="gap-progress">
                    <div
                      style={{ width: "30%" }}
                    />
                  </div>
                  <strong>30%</strong>
                  <span className="gap-status">
                    -40%
                  </span>
                </div>


                <div className="gap-row">
                  <span>Docker</span>
                  <div className="gap-progress">
                    <div
                      style={{ width: "20%" }}
                    />
                  </div>
                  <strong>20%</strong>
                  <span className="gap-status">
                    -40%
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CAREER ROADMAP ================= */}
        <section
          className="feature-section"
          id="career-paths"
        >

          <div className="container">

            <div className="section-heading centered">

              <span className="section-eyebrow">
                CAREER ROADMAP
              </span>

              <h2>
                Turn skill gaps into
                <br />
                a clear career path.
              </h2>

              <p>
                A personalized roadmap that evolves as you grow.
              </p>

            </div>


            <div className="roadmap">

              <div className="roadmap-line" />

              <div className="roadmap-item completed">
                <div className="roadmap-dot">✓</div>

                <div className="roadmap-content">
                  <span>01</span>
                  <h3>Junior Developer</h3>
                  <p>JavaScript · React · Git</p>
                  <small>Completed</small>
                </div>
              </div>


              <div className="roadmap-item current">
                <div className="roadmap-dot">2</div>

                <div className="roadmap-content">
                  <span>02</span>
                  <h3>Frontend Developer</h3>
                  <p>React · TypeScript · CSS</p>
                  <small>Current Stage</small>
                </div>
              </div>


              <div className="roadmap-item">
                <div className="roadmap-dot">3</div>

                <div className="roadmap-content">
                  <span>03</span>
                  <h3>Full-Stack Developer</h3>
                  <p>Node.js · PostgreSQL · Docker</p>
                  <small>Next Stage</small>
                </div>
              </div>


              <div className="roadmap-item">
                <div className="roadmap-dot">4</div>

                <div className="roadmap-content">
                  <span>04</span>
                  <h3>Senior Full-Stack</h3>
                  <p>AWS · System Design · Leadership</p>
                  <small>Future Stage</small>
                </div>
              </div>


              <div className="roadmap-item">
                <div className="roadmap-dot">5</div>

                <div className="roadmap-content">
                  <span>05</span>
                  <h3>Tech Lead</h3>
                  <p>Architecture · Team Management</p>
                  <small>Long-term Goal</small>
                </div>
              </div>

            </div>


            <div className="roadmap-button-wrap">
              <Link
                to="/register"
                className="secondary-button"
              >
                View Full Career Roadmap →
              </Link>
            </div>

          </div>

        </section>


        {/* ================= MANAGERS ================= */}
        <section
          className="manager-section"
          id="managers"
        >

          <div className="container manager-grid">

            <div className="manager-copy">

              <span className="section-eyebrow">
                FOR MANAGERS
              </span>

              <h2>
                Lead smarter with
                <br />
                team skill intelligence.
              </h2>

              <p>
                Get a real-time view of your team's career readiness, skill
                growth, and goal progress — so you can coach the right people
                at the right time.
              </p>

              <Link
                to="/register"
                className="primary-button"
              >
                Explore Manager View →
              </Link>

            </div>


            <div className="manager-dashboard">

              <div className="manager-stats">

                <div>
                  <strong>76%</strong>
                  <span>Team Readiness</span>
                </div>

                <div>
                  <strong>84%</strong>
                  <span>Goal Completion</span>
                </div>

                <div>
                  <strong>+14%</strong>
                  <span>Skill Growth</span>
                </div>

              </div>


              <div className="team-title">
                Team Overview
              </div>


              <div className="team-member">
                <div className="member-avatar">
                  JK
                </div>

                <div className="member-info">
                  <strong>Jordan Kim</strong>
                  <span>Backend Dev</span>
                </div>

                <strong>81%</strong>
              </div>


              <div className="team-member">
                <div className="member-avatar">
                  AR
                </div>

                <div className="member-info">
                  <strong>Alex Rivera</strong>
                  <span>Frontend Dev</span>
                </div>

                <strong>67%</strong>
              </div>


              <div className="team-member">
                <div className="member-avatar">
                  MP
                </div>

                <div className="member-info">
                  <strong>Maya Patel</strong>
                  <span>Full-Stack Dev</span>
                </div>

                <strong>54%</strong>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="cta-section">

          <div className="container cta-content">

            <span className="section-eyebrow">
              YOUR NEXT MOVE
            </span>

            <h2>
              Your next career move starts with
              <br />
              knowing where you are.
            </h2>

            <p>
              Build the skills. Track the progress. Own your growth.
            </p>

            <Link
              to="/register"
              className="primary-button large"
            >
              Start Your Journey →
            </Link>

            <small>
              Free to get started · No credit card required
            </small>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="landing-footer">

        <div className="container footer-grid">

          <div className="footer-brand">

            <Link to="/" className="logo">
              <span className="logo-mark">S</span>
              <span className="logo-text">SkillSphere</span>
            </Link>

            <p>
              The career intelligence platform for ambitious professionals
              and high-performing teams.
            </p>

          </div>


          <div className="footer-column">

            <h4>Product</h4>

            <a href="#skill-dna">Skill DNA</a>
            <a href="#career-paths">Career Paths</a>
            <a href="#how-it-works">Goals</a>
            <a href="#managers">For Managers</a>

          </div>


          <div className="footer-column">

            <h4>Company</h4>

            <a href="#top">About</a>
            <a href="#top">Contact</a>
            <a href="#top">Careers</a>

          </div>


          <div className="footer-column">

            <h4>Resources</h4>

            <a href="#top">Help Center</a>
            <a href="#top">Documentation</a>
            <a href="#top">Blog</a>

          </div>


          <div className="footer-column">

            <h4>Legal</h4>

            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>

          </div>

        </div>


        <div className="container footer-bottom">

          <span>
            © 2026 SkillSphere, Inc. All rights reserved.
          </span>

          <span>
            Made with care for ambitious careers.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Landing;