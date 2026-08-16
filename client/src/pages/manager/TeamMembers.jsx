import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";

const members = [
  {
    initials: "AR",
    name: "Alex Rivera",
    role: "Frontend Developer",
    readiness: 67,
    growth: "+12%",
    goals: 65,
    status: "On Track",
  },
  {
    initials: "JK",
    name: "Jordan Kim",
    role: "Backend Developer",
    readiness: 81,
    growth: "+8%",
    goals: 90,
    status: "On Track",
  },
  {
    initials: "MP",
    name: "Maya Patel",
    role: "Full-Stack Developer",
    readiness: 54,
    growth: "+5%",
    goals: 30,
    status: "Needs Attention",
  },
  {
    initials: "CO",
    name: "Chris O'Brien",
    role: "DevOps Engineer",
    readiness: 88,
    growth: "+15%",
    goals: 85,
    status: "Excellent",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Frontend Developer",
    readiness: 62,
    growth: "+20%",
    goals: 55,
    status: "On Track",
  },
  {
    initials: "RW",
    name: "Ryan Walsh",
    role: "Backend Developer",
    readiness: 45,
    growth: "+3%",
    goals: 20,
    status: "Needs Attention",
  },
  {
    initials: "DT",
    name: "Diana Torres",
    role: "Full-Stack Developer",
    readiness: 79,
    growth: "+11%",
    goals: 75,
    status: "On Track",
  },
  {
    initials: "EB",
    name: "Ethan Brooks",
    role: "Junior Developer",
    readiness: 38,
    growth: "+4%",
    goals: 35,
    status: "Needs Attention",
  },
];

export default function TeamMembers() {
  const [search, setSearch] =
    useState("");

  const filtered = members.filter(
    (member) =>
      member.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      member.role
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <PageHeader
        title="Team Members"
        subtitle="8 members in your Engineering team."
      />

      <div className="table-toolbar">
        <input
          placeholder="Search team members…"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button className="secondary-button">
          Filter
        </button>
      </div>

      <div className="data-table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Role</th>
              <th>Career Readiness</th>
              <th>Skill Growth</th>
              <th>Goals</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((member) => (
              <tr key={member.name}>
                <td>
                  <div className="employee-cell">
                    <div className="avatar">
                      {member.initials}
                    </div>

                    <strong>
                      {member.name}
                    </strong>
                  </div>
                </td>

                <td>{member.role}</td>

                <td>
                  <strong>
                    {member.readiness}%
                  </strong>
                </td>

                <td>
                  <span className="growth-positive">
                    {member.growth}
                  </span>
                </td>

                <td>
                  <ProgressBar
                    value={member.goals}
                    showValue
                  />
                </td>

                <td>
                  <span
                    className={`status-pill ${member.status
                      .toLowerCase()
                      .replaceAll(
                        " ",
                        "-"
                      )}`}
                  >
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}