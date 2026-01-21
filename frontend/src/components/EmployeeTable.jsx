
import React from 'react';

const EmployeeTable = ({ employees, onDelete }) => (
 <div className="employee-table-container">
  <table className="employee-table">
    <thead>
      <tr>
        <th>Employee ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map(emp => (
        <tr key={emp.id}>
        <td className="p-2 border">{emp.employeeId}</td>
          <td className="p-2 border">{emp.fullName}</td>
          <td className="p-2 border">{emp.email}</td>
          <td className="p-2 border">{emp.department}</td>
          <td>
            <button className="action-btn" onClick={() => onEdit(emp.id)}>Edit</button>
            <button className="action-btn" onClick={() => onDelete(emp._id)} style={{ marginLeft: 8, background: "#ef4444" }}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);

export default EmployeeTable;
