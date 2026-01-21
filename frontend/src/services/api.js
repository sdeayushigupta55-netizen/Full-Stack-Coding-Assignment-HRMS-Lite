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

// Filter attendance records by date for an employee
export const filterAttendanceByDate = (employeeId, startDate, endDate) => {
  const params = {};
  if (startDate) params.startDate = startDate;
  if (endDate) params.endDate = endDate;
  return api.get(`/attendance/${employeeId}/filter`, { params });
};

// Get total present days per employee
export const getPresentDaysSummary = () => api.get('/attendance/summary/present-days');

export default api;


