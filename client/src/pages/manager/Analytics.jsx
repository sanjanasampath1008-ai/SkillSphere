import React from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";

const members = [
  ["CO", "Chris", 88],
  ["JK", "Jordan", 81],
  ["DT", "Diana", 79],
  ["AR", "Alex", 67],
  ["PS", "Priya", 62],
  ["MP", "Maya", 54],
  ["RW", "Ryan", 45],
  ["EB", "Ethan", 38],
];

export default function Analytics() {
  return (
    <div className="page-container">
      <PageHeader
        title="Team Analytics"
        subtitle="Skill growth, goal completion, and career readiness insights for your team."
      />

      <div className="analytics-grid">
        <div className="dashboard-card">
          <h2>Career Readiness Trend</h2>

          <div className="fake-chart">
            <div className="chart-values">
              <span>80</span>
              <span>66</span>
              <span>58</span>
              <span>50</span>
            </div>

            <div className="chart-line">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="chart-labels">
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Goal Completion Rate</h2>

          <div className="fake-chart goal-chart">
            <div className="chart-values">
              <span>28</span>
              <span>21</span>
              <span>14</span>
              <span>7</span>
              <span>0</span>
            </div>

            <div className="bar-chart">
              {[9, 12, 14, 18, 21, 25].map(
                (height, index) => (
                  <div
                    key={index}
                    style={{
                      height: `${height * 4}px`,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-heading">
          <h2>Team Career Readiness</h2>
        </div>

        <div className="readiness-members">
          {members.map(
            ([initials, name, score]) => (
              <div
                className="readiness-member"
                key={name}
              >
                <div className="avatar">
                  {initials}
                </div>

                <span>{name}</span>

                <strong>{score}%</strong>

                <ProgressBar
                  value={score}
                  showValue={false}
                />
              </div>
            )
          )}
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Readiness Distribution</h2>

        <div className="distribution-grid">
          <div>
            <strong>2 people</strong>
            <span>31–50%</span>
          </div>

          <div>
            <strong>3 people</strong>
            <span>51–70%</span>
          </div>

          <div>
            <strong>2 people</strong>
            <span>71–85%</span>
          </div>

          <div>
            <strong>1 person</strong>
            <span>86–100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}