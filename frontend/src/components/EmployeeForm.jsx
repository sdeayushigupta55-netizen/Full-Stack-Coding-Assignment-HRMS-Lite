import React, { useState } from 'react';

const EmployeeForm = ({ onAdd }) => {
  const [form, setForm] = useState({ employeeId: '', fullName: '', email: '', department: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(form);
    setForm({ employeeId: '', fullName: '', email: '', department: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input name="employeeId" placeholder="Employee ID" value={form.employeeId} onChange={handleChange} required />
      <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required type="email" />
      <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;