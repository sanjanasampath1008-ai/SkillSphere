import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

const initialCourses = [
  ["AWS Solutions Architect – Associate", "A Cloud Guru", "Cloud", "18h 30m", "Intermediate", "Yes"],
  ["Docker & Kubernetes: Complete Guide", "Udemy", "DevOps", "11h 45m", "Intermediate", "No"],
  ["System Design Fundamentals", "ByteByteGo", "Architecture", "8h 20m", "Advanced", "No"],
  ["Advanced TypeScript Patterns", "Frontend Masters", "Frontend", "6h 10m", "Advanced", "Yes"],
  ["Node.js: The Complete Guide", "Academind", "Backend", "14h 30m", "Intermediate", "Yes"],
  ["PostgreSQL for Developers", "LinkedIn Learning", "Backend", "5h 45m", "Beginner", "No"],
];

export default function Courses() {
  const [courses, setCourses] =
    useState(initialCourses);

  const addCourse = () => {
    const title = window.prompt(
      "Enter course name:"
    );

    if (!title) return;

    setCourses((prev) => [
      ...prev,
      [
        title,
        "Custom",
        "Backend",
        "Self-paced",
        "Beginner",
        "No",
      ],
    ]);
  };

  return (
    <div className="page-container">
      <PageHeader
        title="Course Management"
        subtitle="6 courses in the learning library."
        action={
          <button
            className="primary-button"
            onClick={addCourse}
          >
            Add Course
          </button>
        }
      />

      <div className="table-toolbar">
        <input placeholder="Search…" />
      </div>

      <div className="data-table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Provider</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Difficulty</th>
              <th>Enrolled</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses.map(
              (course, index) => (
                <tr key={`${course[0]}-${index}`}>
                  <td>
                    <strong>{course[0]}</strong>
                  </td>
                  <td>{course[1]}</td>
                  <td>{course[2]}</td>
                  <td>{course[3]}</td>
                  <td>{course[4]}</td>
                  <td>{course[5]}</td>
                  <td>
                    <button className="icon-button">
                      ⋯
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}