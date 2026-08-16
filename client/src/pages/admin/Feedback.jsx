import React from "react";

function Feedback() {
  const feedback = [
    {
      name: "Aarav Sharma",
      type: "Manager Feedback",
      rating: "Excellent",
      date: "Today",
    },
    {
      name: "Priya Mehta",
      type: "Learning Feedback",
      rating: "Very Good",
      date: "Yesterday",
    },
    {
      name: "Rohan Kapoor",
      type: "Career Feedback",
      rating: "Good",
      date: "2 days ago",
    },
    {
      name: "Ananya Rao",
      type: "Course Feedback",
      rating: "Excellent",
      date: "3 days ago",
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">INSIGHTS</span>
          <h1>Feedback</h1>
          <p>Review employee feedback and identify development opportunities.</p>
        </div>

        <button className="dashboard-action">View Analytics</button>
      </div>

      <div className="feedback-summary">
        <div>
          <span>Total Feedback</span>
          <strong>426</strong>
        </div>

        <div>
          <span>Positive Feedback</span>
          <strong>89%</strong>
        </div>

        <div>
          <span>Response Rate</span>
          <strong>76%</strong>
        </div>

        <div>
          <span>Average Rating</span>
          <strong>4.6/5</strong>
        </div>
      </div>

      <div className="management-card">
        <div className="card-heading">
          <div>
            <span className="card-eyebrow">RECENT ACTIVITY</span>
            <h2>Recent Feedback</h2>
          </div>
        </div>

        <div className="feedback-list">
          {feedback.map((item, index) => (
            <div className="feedback-item" key={index}>
              <div className="table-avatar">{item.name.charAt(0)}</div>

              <div className="feedback-main">
                <strong>{item.name}</strong>
                <span>{item.type}</span>
              </div>

              <div className="feedback-rating">★ {item.rating}</div>

              <small>{item.date}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;