import { useState } from "react";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("Learning");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const feedbackItems = [
    {
      title: "Learning experience",
      text: "The learning recommendations are helping me understand what skills I should focus on next.",
      date: "2 days ago",
      rating: 5,
      type: "Learning",
    },
    {
      title: "Career roadmap",
      text: "The career roadmap gives me a clearer direction for my professional growth.",
      date: "1 week ago",
      rating: 4,
      type: "Career",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim() || rating === 0) {
      alert("Please select a rating and enter your feedback.");
      return;
    }

    setSubmitted(true);
    setMessage("");
    setRating(0);
  };

  return (
    <div style={styles.page}>
      <style>{`
        .feedback-option:hover {
          border-color: #168363 !important;
          background: #f1faf6 !important;
        }

        .feedback-submit:hover {
          background: #0f7459 !important;
        }

        .feedback-history:hover {
          box-shadow: 0 14px 35px rgba(12,42,34,0.08);
          transform: translateY(-2px);
        }
      `}</style>

      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <div style={styles.eyebrow}>YOUR VOICE MATTERS</div>

          <h1 style={styles.title}>Feedback</h1>

          <p style={styles.subtitle}>
            Share your experience and help us make SkillSphere better.
          </p>
        </div>

        <div style={styles.feedbackScore}>
          <div style={styles.scoreIcon}>♡</div>

          <div>
            <strong style={styles.scoreNumber}>4.8</strong>
            <div style={styles.scoreLabel}>Your overall experience</div>
          </div>
        </div>
      </div>

      <div style={styles.layout}>
        {/* LEFT - FORM */}
        <div style={styles.formCard}>
          <div style={styles.cardHeader}>
            <div>
              <h2 style={styles.cardTitle}>Share your feedback</h2>

              <p style={styles.cardSubtitle}>
                Tell us what is working well and what we can improve.
              </p>
            </div>

            <div style={styles.cardIcon}>✦</div>
          </div>

          {submitted && (
            <div style={styles.successMessage}>
              <span>✓</span>

              <div>
                <strong>Thank you for your feedback!</strong>
                <p>Your response has been recorded successfully.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Feedback Category</label>

              <div style={styles.categoryGrid}>
                {["Learning", "Career", "Skills", "Platform"].map((item) => (
                  <button
                    type="button"
                    className="feedback-option"
                    key={item}
                    onClick={() => setCategory(item)}
                    style={{
                      ...styles.categoryButton,
                      ...(category === item
                        ? styles.selectedCategory
                        : {}),
                    }}
                  >
                    <span>
                      {item === "Learning"
                        ? "▣"
                        : item === "Career"
                        ? "↗"
                        : item === "Skills"
                        ? "◆"
                        : "◉"}
                    </span>

                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>How would you rate your experience?</label>

              <div style={styles.ratingRow}>
                {[1, 2, 3, 4, 5].map((number) => (
                  <button
                    type="button"
                    key={number}
                    onClick={() => setRating(number)}
                    style={{
                      ...styles.starButton,
                      color: number <= rating ? "#e6a82e" : "#cbd6d2",
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>

              <div style={styles.ratingText}>
                {rating === 0
                  ? "Select a rating"
                  : rating === 1
                  ? "Needs improvement"
                  : rating === 2
                  ? "Could be better"
                  : rating === 3
                  ? "Good"
                  : rating === 4
                  ? "Very good"
                  : "Excellent"}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Your feedback</label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your experience..."
                rows="6"
                style={styles.textarea}
              />

              <div style={styles.characterCount}>
                {message.length}/500
              </div>
            </div>

            <button
              className="feedback-submit"
              type="submit"
              style={styles.submitButton}
            >
              Submit Feedback
              <span>→</span>
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div style={styles.rightColumn}>
          {/* QUICK FEEDBACK */}
          <div style={styles.quickCard}>
            <div style={styles.quickIcon}>✓</div>

            <div>
              <h3 style={styles.quickTitle}>Help us improve</h3>

              <p style={styles.quickText}>
                Your feedback helps the SkillSphere team create better
                learning and career experiences.
              </p>
            </div>
          </div>

          {/* FEEDBACK HISTORY */}
          <div>
            <div style={styles.historyHeader}>
              <div>
                <div style={styles.sectionLabel}>YOUR ACTIVITY</div>
                <h2 style={styles.historyTitle}>Recent Feedback</h2>
              </div>

              <span style={styles.historyCount}>
                {feedbackItems.length} responses
              </span>
            </div>

            <div style={styles.historyList}>
              {feedbackItems.map((item) => (
                <div
                  className="feedback-history"
                  style={styles.historyCard}
                  key={item.title}
                >
                  <div style={styles.historyTop}>
                    <div>
                      <span style={styles.typeBadge}>{item.type}</span>
                      <h3 style={styles.historyItemTitle}>
                        {item.title}
                      </h3>
                    </div>

                    <div style={styles.smallRating}>
                      {"★".repeat(item.rating)}
                      <span>{"★".repeat(5 - item.rating)}</span>
                    </div>
                  </div>

                  <p style={styles.historyText}>{item.text}</p>

                  <div style={styles.historyDate}>{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    alignItems: "center",
    gap: "30px",
    marginBottom: "30px",
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

  feedbackScore: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    background: "#ffffff",
    border: "1px solid #e2ebe8",
    borderRadius: "16px",
    padding: "14px 20px",
    minWidth: "200px",
  },

  scoreIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "#e5f5ef",
    color: "#168363",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },

  scoreNumber: {
    fontSize: "22px",
  },

  scoreLabel: {
    color: "#758781",
    fontSize: "11px",
    marginTop: "2px",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.35fr) minmax(300px, 0.65fr)",
    gap: "24px",
    alignItems: "start",
  },

  formCard: {
    background: "#ffffff",
    border: "1px solid #e1ebe7",
    borderRadius: "20px",
    padding: "28px",
    boxShadow: "0 5px 20px rgba(12,42,34,0.045)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "25px",
  },

  cardTitle: {
    margin: 0,
    fontSize: "22px",
  },

  cardSubtitle: {
    margin: "7px 0 0",
    color: "#74867f",
    fontSize: "13px",
  },

  cardIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "#e5f5ef",
    color: "#168363",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },

  successMessage: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    padding: "14px",
    background: "#e7f6ef",
    border: "1px solid #c9e9da",
    borderRadius: "12px",
    color: "#176a4f",
    marginBottom: "20px",
    fontSize: "13px",
  },

  formGroup: {
    marginBottom: "23px",
  },

  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "750",
    marginBottom: "10px",
    color: "#253d35",
  },

  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "9px",
  },

  categoryButton: {
    border: "1px solid #dce7e3",
    background: "#ffffff",
    borderRadius: "10px",
    padding: "11px 8px",
    cursor: "pointer",
    color: "#647872",
    fontSize: "12px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    transition: "0.2s",
  },

  selectedCategory: {
    background: "#e7f6f0",
    borderColor: "#168363",
    color: "#168363",
  },

  ratingRow: {
    display: "flex",
    gap: "3px",
  },

  starButton: {
    border: "none",
    background: "transparent",
    fontSize: "32px",
    cursor: "pointer",
    padding: "0 3px",
    lineHeight: 1,
  },

  ratingText: {
    color: "#82918c",
    fontSize: "12px",
    marginTop: "5px",
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #d8e4df",
    borderRadius: "12px",
    padding: "14px",
    fontFamily: "inherit",
    fontSize: "14px",
    color: "#213830",
    outline: "none",
    resize: "vertical",
    minHeight: "130px",
  },

  characterCount: {
    textAlign: "right",
    fontSize: "11px",
    color: "#8b9a95",
    marginTop: "5px",
  },

  submitButton: {
    width: "100%",
    border: "none",
    borderRadius: "11px",
    background: "#168363",
    color: "#ffffff",
    padding: "14px",
    fontSize: "14px",
    fontWeight: "750",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  quickCard: {
    background: "#12382f",
    color: "#ffffff",
    borderRadius: "18px",
    padding: "23px",
    display: "flex",
    gap: "15px",
  },

  quickIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "11px",
    background: "#168363",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: "18px",
  },

  quickTitle: {
    margin: 0,
    fontSize: "17px",
  },

  quickText: {
    margin: "7px 0 0",
    color: "#b9d0c9",
    fontSize: "12px",
    lineHeight: "1.6",
  },

  historyHeader: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-between",
    marginBottom: "13px",
  },

  sectionLabel: {
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    color: "#168363",
  },

  historyTitle: {
    margin: "4px 0 0",
    fontSize: "21px",
  },

  historyCount: {
    color: "#788a84",
    fontSize: "11px",
  },

  historyList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  historyCard: {
    background: "#ffffff",
    border: "1px solid #e1ebe7",
    borderRadius: "15px",
    padding: "17px",
    transition: "0.2s",
  },

  historyTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
  },

  typeBadge: {
    display: "inline-block",
    background: "#edf7f3",
    color: "#168363",
    fontSize: "10px",
    fontWeight: "800",
    padding: "4px 7px",
    borderRadius: "5px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  historyItemTitle: {
    margin: "7px 0 0",
    fontSize: "15px",
  },

  smallRating: {
    color: "#e6a82e",
    fontSize: "12px",
    whiteSpace: "nowrap",
  },

  historyText: {
    margin: "10px 0",
    color: "#71837c",
    fontSize: "12px",
    lineHeight: "1.55",
  },

  historyDate: {
    color: "#9aa7a3",
    fontSize: "10px",
  },
};

export default Feedback;