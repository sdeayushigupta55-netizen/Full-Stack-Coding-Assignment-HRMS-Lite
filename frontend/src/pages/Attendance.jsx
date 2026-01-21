import React, { useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";
import { markAttendance, getAttendance } from "../services/api";

const Attendance = () => {
  const [records, setRecords] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMarkAttendance = async (data) => {
    setLoading(true);
    try {
      await markAttendance(data);
      if (selectedEmployeeId) fetchAttendance(selectedEmployeeId);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to mark attendance");
    }
    setLoading(false);
  };

  const fetchAttendance = async (employeeId) => {
    setLoading(true);
    try {
      const res = await getAttendance(employeeId);
      setRecords(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch attendance");
    }
    setLoading(false);
  };

  return (
    <div className="attendance-page">
      <div className="attendance-form-card">
        <h2 className="attendance-form-title">Attendance Management</h2>
        {error && <div className="attendance-form-error">{error}</div>}
        <AttendanceForm onMark={handleMarkAttendance} />
        <div className="attendance-search-row">
          <input
            className="attendance-search-input"
            placeholder="Employee ID to view attendance"
            value={selectedEmployeeId}
            onChange={e => setSelectedEmployeeId(e.target.value)}
          />
          <button
            onClick={() => fetchAttendance(selectedEmployeeId)}
            className="attendance-search-btn"
          >
            View Attendance
          </button>
        </div>
      </div>
      <div className="attendance-table-card">
        {loading ? (
          <p className="attendance-table-loading">Loading...</p>
        ) : (
          <AttendanceTable records={records} />
        )}
      </div>
    </div>
  );
};

export default Attendance;