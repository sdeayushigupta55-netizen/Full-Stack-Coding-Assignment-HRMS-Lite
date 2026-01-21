import React from 'react';

const AttendanceTable = ({ records }) => (
  <div className="attendance-table-container">
    <table className="attendance-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {records.map(rec => (
         <tr key={rec._id}>
  <td>{new Date(rec.date).toLocaleDateString()}</td>
  <td
    style={{
      color: rec.status === "Present" ? "#16a34a" : "#ef4444",
      fontWeight: 600,
      letterSpacing: "1px"
    }}
  >
    {rec.status}
  </td>
</tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AttendanceTable;