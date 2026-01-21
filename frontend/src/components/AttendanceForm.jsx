import React, { useState } from 'react';

const AttendanceForm = ({ onMark }) => {
  const [form, setForm] = useState({ employeeId: '', date: '', status: 'Present' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onMark(form);
    setForm({ employeeId: '', date: '', status: 'Present' });
  };

  return (
    <form onSubmit={handleSubmit} className="attendance-form">
      <input name="employeeId" placeholder="Employee ID" value={form.employeeId} onChange={handleChange} required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange} required>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      <button type="submit">Mark Attendance</button>
    </form>
  );
};

export default AttendanceForm;