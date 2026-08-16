import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, setUser } = useAuth();

  const firstName =
    user?.firstName ||
    user?.name?.split(" ")[0] ||
    "Alex";

  const lastName =
    user?.lastName ||
    user?.name?.split(" ").slice(1).join(" ") ||
    "Rivera";

  const [editing, setEditing] =
    useState(false);

  const [form, setForm] = useState({
    firstName,
    lastName,
    email:
      user?.email ||
      "alex.rivera@company.com",
    phone:
      user?.phone ||
      "+1 (415) 555-0192",
    location:
      user?.location ||
      "San Francisco, CA",
    linkedin:
      user?.linkedin ||
      "linkedin.com/in/alexrivera",
    department:
      user?.department ||
      "Engineering",
    currentRole:
      user?.currentRole ||
      "Frontend Developer",
    manager:
      user?.manager ||
      "Sarah Chen",
    experienceLevel:
      user?.experienceLevel ||
      "Mid-Level (3 years)",
    targetRole:
      user?.targetRole ||
      "Senior Full-Stack Developer",
    targetTimeline:
      user?.targetTimeline ||
      "12–18 months",
  });

  const saveProfile = () => {
    const updatedUser = {
      ...user,
      ...form,
      name: `${form.firstName} ${form.lastName}`,
    };

    setUser(updatedUser);

    localStorage.setItem(
      "skillsphere_user",
      JSON.stringify(updatedUser)
    );

    setEditing(false);
  };

  const skills = [
    ["React", 85],
    ["TypeScript", 78],
    ["JavaScript", 90],
    ["CSS / Tailwind", 82],
    ["Node.js", 62],
    ["PostgreSQL", 55],
    ["GraphQL", 45],
    ["AWS", 30],
  ];

  return (
    <div className="page-container">
      <PageHeader
        title="My Profile"
        subtitle="Manage your professional information and career settings."
      />

      <div className="profile-hero">
        <div className="profile-avatar">
          {firstName[0]}
          {lastName[0]}
        </div>

        <div>
          <h2>
            {form.firstName} {form.lastName}
          </h2>

          <p>{form.currentRole}</p>
          <span>{form.department}</span>
        </div>

        <div className="profile-readiness">
          <span>Career Readiness</span>
          <strong>67%</strong>

          <ProgressBar
            value={67}
            showValue={false}
          />

          <button className="text-button">
            View Full Analysis
          </button>
        </div>
      </div>

      <div className="profile-grid">
        <div className="dashboard-card">
          <div className="card-heading">
            <h2>Personal Information</h2>

            <button
              className="text-button"
              onClick={() =>
                editing
                  ? saveProfile()
                  : setEditing(true)
              }
            >
              {editing ? "Save" : "Edit"}
            </button>
          </div>

          <div className="profile-fields">
            <label>
              First Name
              <input
                disabled={!editing}
                value={form.firstName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    firstName:
                      e.target.value,
                  })
                }
              />
            </label>

            <label>
              Last Name
              <input
                disabled={!editing}
                value={form.lastName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    lastName:
                      e.target.value,
                  })
                }
              />
            </label>

            <label>
              Email
              <input
                disabled={!editing}
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
            </label>

            <label>
              Phone
              <input
                disabled={!editing}
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />
            </label>

            <label>
              Location
              <input
                disabled={!editing}
                value={form.location}
                onChange={(e) =>
                  setForm({
                    ...form,
                    location:
                      e.target.value,
                  })
                }
              />
            </label>

            <label>
              LinkedIn
              <input
                disabled={!editing}
                value={form.linkedin}
                onChange={(e) =>
                  setForm({
                    ...form,
                    linkedin:
                      e.target.value,
                  })
                }
              />
            </label>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-heading">
            <h2>Professional Information</h2>

            <button
              className="text-button"
              onClick={() =>
                editing
                  ? saveProfile()
                  : setEditing(true)
              }
            >
              {editing ? "Save" : "Edit"}
            </button>
          </div>

          <div className="profile-fields">
            <label>
              Department
              <input
                disabled={!editing}
                value={form.department}
                onChange={(e) =>
                  setForm({
                    ...form,
                    department:
                      e.target.value,
                  })
                }
              />
            </label>

            <label>
              Current Role
              <input
                disabled={!editing}
                value={form.currentRole}
                onChange={(e) =>
                  setForm({
                    ...form,
                    currentRole:
                      e.target.value,
                  })
                }
              />
            </label>

            <label>
              Manager
              <input
                disabled={!editing}
                value={form.manager}
                onChange={(e) =>
                  setForm({
                    ...form,
                    manager: e.target.value,
                  })
                }
              />
            </label>

            <label>
              Experience Level
              <input
                disabled={!editing}
                value={
                  form.experienceLevel
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    experienceLevel:
                      e.target.value,
                  })
                }
              />
            </label>

            <label>
              Target Role
              <input
                disabled={!editing}
                value={form.targetRole}
                onChange={(e) =>
                  setForm({
                    ...form,
                    targetRole:
                      e.target.value,
                  })
                }
              />
            </label>

            <label>
              Target Timeline
              <input
                disabled={!editing}
                value={
                  form.targetTimeline
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    targetTimeline:
                      e.target.value,
                  })
                }
              />
            </label>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-heading">
          <div>
            <h2>Top Skills</h2>
            <p>13 skills total</p>
          </div>
        </div>

        <div className="profile-skills">
          {skills.map(([skill, score]) => (
            <div
              className="profile-skill-row"
              key={skill}
            >
              <strong>{skill}</strong>

              <div>
                <ProgressBar
                  value={score}
                  showValue={false}
                />
              </div>

              <span>{score}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}