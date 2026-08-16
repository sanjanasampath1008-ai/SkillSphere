import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("skillsphere_token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401
    ) {
      localStorage.removeItem(
        "skillsphere_token"
      );
      localStorage.removeItem(
        "skillsphere_user"
      );
    }

    return Promise.reject(error);
  }
);

/* AUTH */

export const registerUser = (data) =>
  api.post("/auth/register", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);

export const getCurrentUser = () =>
  api.get("/auth/me");

/* EMPLOYEES */

export const getEmployees = (params = {}) =>
  api.get("/employees", { params });

export const getEmployee = (id) =>
  api.get(`/employees/${id}`);

export const updateEmployee = (id, data) =>
  api.put(`/employees/${id}`, data);

export const deleteEmployee = (id) =>
  api.delete(`/employees/${id}`);

export const getEmployeeSkills = (id) =>
  api.get(`/employees/${id}/skills`);

export const updateEmployeeSkill = (
  id,
  skillId,
  data
) =>
  api.put(
    `/employees/${id}/skills/${skillId}`,
    data
  );

export const addEmployeeSkill = (id, data) =>
  api.post(
    `/employees/${id}/skills`,
    data
  );

/* SKILLS */

export const getSkills = (params = {}) =>
  api.get("/skills", { params });

export const createSkill = (data) =>
  api.post("/skills", data);

export const updateSkill = (id, data) =>
  api.put(`/skills/${id}`, data);

export const deleteSkill = (id) =>
  api.delete(`/skills/${id}`);

/* CAREER */

export const getCareerRoles = () =>
  api.get("/career-roles");

export const getCareerRole = (id) =>
  api.get(`/career-roles/${id}`);

export const getEmployeeSkillGaps = (id) =>
  api.get(
    `/employees/${id}/skill-gaps`
  );

export const getEmployeeReadiness = (id) =>
  api.get(
    `/employees/${id}/readiness`
  );

export const createCareerRole = (data) =>
  api.post("/career-roles", data);

export const updateCareerRole = (
  id,
  data
) =>
  api.put(`/career-roles/${id}`, data);

export const deleteCareerRole = (id) =>
  api.delete(`/career-roles/${id}`);

/* GOALS */

export const getGoals = (params = {}) =>
  api.get("/goals", { params });

export const createGoal = (data) =>
  api.post("/goals", data);

export const updateGoal = (id, data) =>
  api.put(`/goals/${id}`, data);

export const deleteGoal = (id) =>
  api.delete(`/goals/${id}`);

/* COURSES */

export const getCourses = (params = {}) =>
  api.get("/courses", { params });

export const createCourse = (data) =>
  api.post("/courses", data);

export const updateCourse = (
  id,
  data
) =>
  api.put(`/courses/${id}`, data);

export const deleteCourse = (id) =>
  api.delete(`/courses/${id}`);

/* FEEDBACK */

export const getFeedback = (employeeId) =>
  api.get(
    `/employees/${employeeId}/feedback`
  );

export const createFeedback = (data) =>
  api.post("/feedback", data);

/* ADMIN */

export const getDepartments = () =>
  api.get("/admin/departments");

export const createDepartment = (data) =>
  api.post("/admin/departments", data);

export const updateDepartment = (
  id,
  data
) =>
  api.put(
    `/admin/departments/${id}`,
    data
  );

export const deleteDepartment = (id) =>
  api.delete(
    `/admin/departments/${id}`
  );

export const getAdminStats = () =>
  api.get("/admin/stats");

export const getReports = () =>
  api.get("/admin/reports");

export default api;