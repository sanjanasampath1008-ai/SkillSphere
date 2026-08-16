import React from "react";

function Reports() {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">ANALYTICS</span>
          <h1>Reports</h1>
          <p>Generate insights about your organization's workforce.</p>
        </div>

        <button className="dashboard-action">Export Report</button>
      </div>

      <div className="report-grid">
        <div className="report-card">
          <span>Employee Growth</span>
          <strong>+18%</strong>
          <p>Employee growth compared with last quarter.</p>
          <button>View Report →</button>
        </div>

        <div className="report-card">
          <span>Skill Readiness</span>
          <strong>81%</strong>
          <p>Average workforce readiness score.</p>
          <button>View Report →</button>
        </div>

        <div className="report-card">
          <span>Learning Activity</span>
          <strong>78%</strong>
          <p>Employees actively participating in learning.</p>
          <button>View Report →</button>
        </div>

        <div className="report-card">
          <span>Goal Completion</span>
          <strong>69%</strong>
          <p>Percentage of employee goals completed.</p>
          <button>View Report →</button>
        </div>
      </div>

      <div className="management-card report-chart">
        <div className="card-heading">
          <div>
            <span className="card-eyebrow">PERFORMANCE</span>
            <h2>Organization Readiness</h2>
          </div>
        </div>

        <div className="big-chart">
          <div className="chart-column">
            <div style={{ height: "55%" }} />
            <span>Jan</span>
          </div>

          <div className="chart-column">
            <div style={{ height: "65%" }} />
            <span>Feb</span>
          </div>

          <div className="chart-column">
            <div style={{ height: "70%" }} />
            <span>Mar</span>
          </div>

          <div className="chart-column">
            <div style={{ height: "76%" }} />
            <span>Apr</span>
          </div>

          <div className="chart-column">
            <div style={{ height: "84%" }} />
            <span>May</span>
          </div>

          <div className="chart-column">
            <div style={{ height: "91%" }} />
            <span>Jun</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;