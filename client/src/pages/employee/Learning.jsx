import { useState } from "react";

function Learning() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Cloud",
    "DevOps",
    "Architecture",
    "Frontend",
    "Backend",
  ];

  const courses = [
    {
      title: "Cloud Fundamentals",
      category: "Cloud",
      level: "Beginner",
      duration: "6 weeks",
      progress: 0,
      description:
        "Build a strong foundation in cloud platforms, services, infrastructure and deployment concepts.",
      skills: ["AWS", "Cloud", "Infrastructure"],
      color: "#dff5ec",
      icon: "☁",
    },
    {
      title: "DevOps Engineering",
      category: "DevOps",
      level: "Intermediate",
      duration: "8 weeks",
      progress: 35,
      description:
        "Learn CI/CD, automation, containers and modern DevOps practices used by engineering teams.",
      skills: ["Docker", "CI/CD", "Jenkins"],
      color: "#e8e7ff",
      icon: "⚙",
    },
    {
      title: "System Architecture",
      category: "Architecture",
      level: "Advanced",
      duration: "10 weeks",
      progress: 0,
      description:
        "Understand scalable systems, architecture patterns, databases and distributed applications.",
      skills: ["Architecture", "Systems", "Databases"],
      color: "#fff0d8",
      icon: "◇",
    },
    {
      title: "Modern Frontend Development",
      category: "Frontend",
      level: "Intermediate",
      duration: "7 weeks",
      progress: 60,
      description:
        "Master React, component architecture, state management and modern frontend development.",
      skills: ["React", "JavaScript", "UI"],
      color: "#e1f0ff",
      icon: "◆",
    },
    {
      title: "Backend Development",
      category: "Backend",
      level: "Intermediate",
      duration: "8 weeks",
      progress: 20,
      description:
        "Build reliable APIs and backend services with authentication, databases and REST architecture.",
      skills: ["Node.js", "API", "MongoDB"],
      color: "#f4e5ff",
      icon: "▣",
    },
    {
      title: "Advanced Cloud Architecture",
      category: "Cloud",
      level: "Advanced",
      duration: "12 weeks",
      progress: 0,
      description:
        "Design highly available and scalable cloud solutions for enterprise applications.",
      skills: ["AWS", "Architecture", "Security"],
      color: "#e0f5f1",
      icon: "✦",
    },
  ];

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  const handleEnroll = (courseTitle) => {
    alert(`You have enrolled in ${courseTitle}`);
  };

  return (
    <div style={styles.page}>
      <style>{`
        .learning-filter:hover {
          background: #117f61 !important;
          color: white !important;
          border-color: #117f61 !important;
        }

        .learning-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(12, 42, 34, 0.10);
        }

        .learning-enroll:hover {
          background: #0f7459 !important;
        }
      `}</style>

      {/* PAGE HEADER */}
      <div style={styles.header}>
        <div>
          <div style={styles.eyebrow}>LEARNING & DEVELOPMENT</div>

          <h1 style={styles.title}>Learning Center</h1>

          <p style={styles.subtitle}>
            Build the skills you need for your next career move.
          </p>
        </div>

        <div style={styles.headerStats}>
          <div style={styles.statBox}>
            <strong>6</strong>
            <span>Courses</span>
          </div>

          <div style={styles.statBox}>
            <strong>2</strong>
            <span>In Progress</span>
          </div>

          <div style={styles.statBox}>
            <strong>34%</strong>
            <span>Completed</span>
          </div>
        </div>
      </div>

      {/* RECOMMENDATION */}
      <div style={styles.recommendation}>
        <div style={styles.recommendationIcon}>✦</div>

        <div>
          <div style={styles.recommendationLabel}>RECOMMENDED FOR YOU</div>

          <h3 style={styles.recommendationTitle}>
            Strengthen your technical skills
          </h3>

          <p style={styles.recommendationText}>
            These courses are selected based on your current skills and career
            goals.
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div style={styles.filterSection}>
        <div style={styles.sectionLabel}>EXPLORE COURSES</div>

        <div style={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className="learning-filter"
              onClick={() => setActiveCategory(category)}
              style={{
                ...styles.filterButton,
                ...(activeCategory === category
                  ? styles.activeFilter
                  : {}),
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* COURSE GRID */}
      <div style={styles.courseGrid}>
        {filteredCourses.map((course) => (
          <div className="learning-card" style={styles.courseCard} key={course.title}>
            
            <div
              style={{
                ...styles.courseIcon,
                background: course.color,
              }}
            >
              {course.icon}
            </div>

            <div style={styles.courseTop}>
              <span style={styles.categoryBadge}>{course.category}</span>

              <span style={styles.level}>
                {course.level}
              </span>
            </div>

            <h3 style={styles.courseTitle}>{course.title}</h3>

            <p style={styles.courseDescription}>
              {course.description}
            </p>

            <div style={styles.skillTags}>
              {course.skills.map((skill) => (
                <span style={styles.skillTag} key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <div style={styles.courseMeta}>
              <span>◷ {course.duration}</span>
              <span>▣ Online</span>
            </div>

            {course.progress > 0 && (
              <div style={styles.progressSection}>
                <div style={styles.progressHeader}>
                  <span>Your progress</span>
                  <strong>{course.progress}%</strong>
                </div>

                <div style={styles.progressTrack}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${course.progress}%`,
                    }}
                  />
                </div>
              </div>
            )}

            <button
              className="learning-enroll"
              onClick={() => handleEnroll(course.title)}
              style={styles.enrollButton}
            >
              {course.progress > 0 ? "Continue Learning" : "Enroll Now"}
              <span>→</span>
            </button>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>⌕</div>
          <h3>No courses found</h3>
          <p>Try selecting another learning category.</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "42px 46px 60px",
    background: "#f5f8f7",
    minHeight: "calc(100vh - 105px)",
    color: "#10241e",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "30px",
    marginBottom: "28px",
  },

  eyebrow: {
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "2px",
    color: "#168363",
    marginBottom: "10px",
  },

  title: {
    margin: 0,
    fontSize: "42px",
    lineHeight: "1.1",
    fontWeight: "800",
    letterSpacing: "-1.5px",
  },

  subtitle: {
    margin: "10px 0 0",
    color: "#6c817a",
    fontSize: "16px",
  },

  headerStats: {
    display: "flex",
    gap: "12px",
  },

  statBox: {
    background: "#ffffff",
    border: "1px solid #e1ebe7",
    borderRadius: "14px",
    padding: "15px 20px",
    minWidth: "90px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(12,42,34,0.04)",
  },

  statBoxStrong: {
    fontSize: "22px",
  },

  recommendation: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "20px 24px",
    background: "#e7f6f0",
    border: "1px solid #ccebdd",
    borderRadius: "18px",
    marginBottom: "32px",
  },

  recommendationIcon: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    background: "#168363",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    flexShrink: 0,
  },

  recommendationLabel: {
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    color: "#168363",
  },

  recommendationTitle: {
    margin: "4px 0",
    fontSize: "18px",
  },

  recommendationText: {
    margin: 0,
    color: "#668078",
    fontSize: "14px",
  },

  filterSection: {
    marginBottom: "24px",
  },

  sectionLabel: {
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    color: "#70837d",
    marginBottom: "12px",
  },

  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "9px",
  },

  filterButton: {
    padding: "10px 17px",
    borderRadius: "10px",
    border: "1px solid #d8e4df",
    background: "#ffffff",
    color: "#536a63",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "0.2s",
  },

  activeFilter: {
    background: "#168363",
    color: "#ffffff",
    borderColor: "#168363",
  },

  courseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    gap: "20px",
  },

  courseCard: {
    background: "#ffffff",
    border: "1px solid #e2ebe8",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 5px 20px rgba(12,42,34,0.045)",
    transition: "0.25s",
    display: "flex",
    flexDirection: "column",
    minHeight: "365px",
    boxSizing: "border-box",
  },

  courseIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    marginBottom: "18px",
  },

  courseTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },

  categoryBadge: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#168363",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
  },

  level: {
    fontSize: "11px",
    color: "#7a8d87",
    background: "#f3f6f5",
    padding: "5px 8px",
    borderRadius: "6px",
  },

  courseTitle: {
    margin: "0 0 9px",
    fontSize: "20px",
    lineHeight: "1.25",
  },

  courseDescription: {
    margin: "0 0 15px",
    color: "#71837d",
    fontSize: "13px",
    lineHeight: "1.6",
  },

  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "17px",
  },

  skillTag: {
    background: "#f0f5f3",
    color: "#526962",
    borderRadius: "6px",
    padding: "5px 8px",
    fontSize: "11px",
    fontWeight: "600",
  },

  courseMeta: {
    display: "flex",
    gap: "15px",
    color: "#7a8c86",
    fontSize: "12px",
    marginBottom: "15px",
  },

  progressSection: {
    marginBottom: "16px",
  },

  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "11px",
    color: "#72847e",
    marginBottom: "6px",
  },

  progressTrack: {
    height: "6px",
    background: "#e5ece9",
    borderRadius: "10px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "#168363",
    borderRadius: "10px",
  },

  enrollButton: {
    marginTop: "auto",
    width: "100%",
    border: "none",
    background: "#168363",
    color: "#ffffff",
    padding: "12px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "13px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },

  emptyState: {
    textAlign: "center",
    padding: "70px 20px",
    background: "#ffffff",
    borderRadius: "18px",
    border: "1px solid #e2ebe8",
  },

  emptyIcon: {
    fontSize: "40px",
    marginBottom: "10px",
  },
};

export default Learning;