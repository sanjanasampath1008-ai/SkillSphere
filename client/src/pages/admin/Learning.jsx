import React from "react";

function Learning() {
  const courses = [
    ["Leadership Essentials", "Professional Development", "86%", "124 learners"],
    ["Advanced React", "Technical Skills", "72%", "96 learners"],
    ["Data Driven Decisions", "Analytics", "64%", "78 learners"],
    ["Effective Communication", "Soft Skills", "91%", "153 learners"],
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">LEARNING</span>
          <h1>Learning Hub</h1>
          <p>Manage learning content and monitor course engagement.</p>
        </div>

        <button className="dashboard-action">+ Add Course</button>
      </div>

      <div className="learning-grid">
        {courses.map((course, index) => (
          <div className="learning-card" key={index}>
            <div className="course-icon">▣</div>

            <span>{course[1]}</span>

            <h3>{course[0]}</h3>

            <div className="course-progress">
              <div>
                <small>Completion</small>
                <strong>{course[2]}</strong>
              </div>

              <div className="bar">
                <div style={{ width: course[2] }} />
              </div>
            </div>

            <p>{course[3]}</p>

            <button className="outline-button">Manage Course →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;