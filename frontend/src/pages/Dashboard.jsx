import { useEffect, useState } from "react";
import { getEmployees, getPresentDaysSummary } from "../services/api";
import "../App.css";

export default function Dashboard() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [presentSummary, setPresentSummary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const empRes = await getEmployees();
        setEmployeeCount(empRes.data.length);
        const presentRes = await getPresentDaysSummary();
        setPresentSummary(presentRes.data);
        console.log(presentRes.data);
      } catch (err) {
        // handle error (optional)
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">Dashboard Summary</h2>
        {loading ? (
          <p className="dashboard-no-data">Loading...</p>
        ) : (
          <>
            <div style={{ marginBottom: "1rem" }}>
              <strong>Total Employees:</strong> {employeeCount}
            </div>
            <div>
              <strong>Present Days per Employee:</strong>
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                   
                    <th>Present Days</th>
                  </tr>
                </thead>
                <tbody>
                  {presentSummary.length === 0 ? (
                    <tr><td colSpan={3} className="dashboard-no-data">No data</td></tr>
                  ) : (
                    presentSummary.map(emp => (
                      <tr key={emp.employeeId}>
                        <td>{emp.employeeId}</td>
                       
                        <td>{emp.presentDays}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}