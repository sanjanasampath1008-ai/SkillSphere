function calculateSkillGap(current, required) {
  const currentValue = Number(current) || 0;
  const requiredValue = Number(required) || 0;

  return Math.max(0, requiredValue - currentValue);
}

function calculateReadiness(employeeSkills = [], roleSkills = []) {
  if (!roleSkills.length) return 0;

  let total = 0;

  roleSkills.forEach((roleSkill) => {
    const employeeSkill = employeeSkills.find(
      (skill) =>
        String(skill.skill?._id || skill.skill) ===
        String(roleSkill.skill?._id || roleSkill.skill)
    );

    const current = employeeSkill
      ? Number(employeeSkill.level || employeeSkill.proficiency || 0)
      : 0;

    const required = Number(roleSkill.requiredLevel || 0);

    if (required === 0) {
      total += 100;
    } else {
      total += Math.min((current / required) * 100, 100);
    }
  });

  return Math.round(total / roleSkills.length);
}

function getSkillGaps(employeeSkills = [], roleSkills = []) {
  return roleSkills
    .map((roleSkill) => {
      const employeeSkill = employeeSkills.find(
        (skill) =>
          String(skill.skill?._id || skill.skill) ===
          String(roleSkill.skill?._id || roleSkill.skill)
      );

      const current = employeeSkill
        ? Number(employeeSkill.level || employeeSkill.proficiency || 0)
        : 0;

      const required = Number(roleSkill.requiredLevel || 0);

      return {
        skill: roleSkill.skill,
        current,
        required,
        gap: calculateSkillGap(current, required),
      };
    })
    .filter((item) => item.gap > 0)
    .sort((a, b) => b.gap - a.gap);
}

module.exports = {
  calculateSkillGap,
  calculateReadiness,
  getSkillGaps,
};