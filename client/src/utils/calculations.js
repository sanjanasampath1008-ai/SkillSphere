export function clamp(value, min = 0, max = 100) {
  return Math.max(
    min,
    Math.min(max, Number(value) || 0)
  );
}

export function calculateSkillGap(current, required) {
  const currentValue = clamp(current);
  const requiredValue = clamp(required);

  return Math.max(
    0,
    requiredValue - currentValue
  );
}

export function calculateReadiness(
  currentSkills = [],
  requiredSkills = []
) {
  if (!requiredSkills.length) return 0;

  const total = requiredSkills.reduce(
    (sum, requiredSkill) => {
      const currentSkill = currentSkills.find(
        (skill) =>
          String(skill.name || skill.skill || "")
            .toLowerCase() ===
          String(
            requiredSkill.name ||
              requiredSkill.skill ||
              ""
          ).toLowerCase()
      );

      const current = Number(
        currentSkill?.score ||
          currentSkill?.level ||
          0
      );

      const required = Number(
        requiredSkill.required ||
          requiredSkill.score ||
          requiredSkill.level ||
          0
      );

      if (required <= 0) return sum + 1;

      return (
        sum +
        Math.min(current / required, 1)
      );
    },
    0
  );

  return Math.round(
    (total / requiredSkills.length) * 100
  );
}

export function getSkillLevel(score) {
  const value = Number(score) || 0;

  if (value < 40) return "Beginner";
  if (value < 70) return "Proficient";
  return "Expert";
}

export function getGapPriority(gap) {
  const value = Number(gap) || 0;

  if (value >= 40) return "High";
  if (value >= 20) return "Medium";
  return "Low";
}

export function getGapStatus(current, required) {
  const gap = calculateSkillGap(
    current,
    required
  );

  if (gap === 0) return "Met";
  if (gap <= 15) return "Needs Development";
  return "Critical Gap";
}

export function calculateAverage(values = []) {
  if (!values.length) return 0;

  const total = values.reduce(
    (sum, value) =>
      sum + (Number(value) || 0),
    0
  );

  return Math.round(total / values.length);
}

export function calculateGoalProgress(
  goals = []
) {
  if (!goals.length) return 0;

  return calculateAverage(
    goals.map((goal) => goal.progress || 0)
  );
}

export function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function formatDate(date) {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}