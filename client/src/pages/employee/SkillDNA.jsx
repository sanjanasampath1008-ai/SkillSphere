import React, { useMemo, useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import { useAuth } from "../../context/AuthContext";

const initialDimensions = [
  { name: "Technical", score: 78 },
  { name: "Communication", score: 75 },
  { name: "Leadership", score: 55 },
  { name: "Problem Solving", score: 80 },
  { name: "Creativity", score: 70 },
  { name: "Management", score: 40 },
];

export default function SkillDNA() {
  const { user } = useAuth();
  const [dimensions, setDimensions] =
    useState(initialDimensions);

  const average = useMemo(() => {
    return Math.round(
      dimensions.reduce(
        (sum, item) => sum + item.score,
        0
      ) / dimensions.length
    );
  }, [dimensions]);

  const getStatus = (score) => {
    if (score >= 70) return "Strength";
    if (score >= 50) return "Developing";
    return "Growth Area";
  };

  const updateSkills = () => {
    const updated = dimensions.map((item) => ({
      ...item,
      score: Math.min(
        100,
        Math.max(
          0,
          item.score +
            (Math.random() > 0.5 ? 3 : -2)
        )
      ),
    }));

    setDimensions(updated);
  };

  const strengths = [...dimensions]
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const opportunities = [...dimensions]
    .sort((a, b) => a.score - b.score)
    .slice(0, 2);

  return (
    <div className="page-container">
      <PageHeader
        title="Skill DNA"
        subtitle="A visual fingerprint of your professional capabilities and development areas."
        action={
          <button
            className="primary-button"
            onClick={updateSkills}
          >
            Update Skills
          </button>
        }
      />

      <div className="dna-score-card">
        <div>
          <span>Overall Score</span>

          <strong>{average}</strong>

          <small>/100</small>
        </div>

        <div className="dna-score-progress">
          <ProgressBar
            value={average}
            showValue={false}
            height={12}
          />
        </div>
      </div>

      <div className="section-heading">
        <h2>Skill Dimensions</h2>
        <p>
          Your skill profile across six core dimensions
        </p>
      </div>

      <div className="dna-grid">
        {dimensions.map((item) => (
          <div
            className="dna-dimension-card"
            key={item.name}
          >
            <div className="dna-card-top">
              <span>{item.name}</span>
              <strong>{item.score}</strong>
            </div>

            <ProgressBar
              value={item.score}
              showValue={false}
            />

            <span
              className={`dna-status ${getStatus(
                item.score
              )
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {getStatus(item.score)}
            </span>
          </div>
        ))}
      </div>

      <div className="dna-columns">
        <div className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Your Strengths</h2>
              <p>Your strongest capability areas</p>
            </div>
          </div>

          {strengths.map((item) => (
            <div
              className="strength-row"
              key={item.name}
            >
              <div>
                <strong>{item.name}</strong>
                <span>
                  Score {item.score}/100 — Top performer
                </span>
              </div>

              <strong>{item.score}</strong>
            </div>
          ))}
        </div>

        <div className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Development Opportunities</h2>
              <p>Areas to focus on next</p>
            </div>
          </div>

          {opportunities.map((item) => (
            <div
              className="strength-row"
              key={item.name}
            >
              <div>
                <strong>{item.name}</strong>
                <span>
                  Score {item.score}/100 — Focus area
                </span>
              </div>

              <strong>{item.score}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}