import axios from "axios";

const api = axios.create({
  baseURL: "https://full-stack-coding-assignment-hrms-lite-1.onrender.com/api"
});

// Employee APIs
export const getEmployees = () => api.get("/employees");
export const addEmployee = (data) => api.post("/employees", data);
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);

// Attendance APIs
export const markAttendance = (data) => api.post("/attendance", data);
export const getAttendance = (employeeId) => api.get(`/attendance/${employeeId}`);

export default api;


