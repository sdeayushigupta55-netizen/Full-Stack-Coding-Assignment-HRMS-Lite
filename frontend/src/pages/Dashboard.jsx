import { useEffect, useState } from "react";
import { getEmployees, getPresentDaysSummary } from "../services/api";

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
      } catch (err) {
        // handle error (optional)
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="bg-white p-6 rounded-lg border shadow" style={{ maxWidth: 600, width: "100%" }}>
        <h2 className="text-lg font-medium text-center mb-2">Dashboard Summary</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="mb-4">
              <strong>Total Employees:</strong> {employeeCount}
            </div>
            <div>
              <strong>Present Days per Employee:</strong>
              <table className="w-full mt-2 border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-2 py-1">Employee ID</th>
                    <th className="border px-2 py-1">Name</th>
                    <th className="border px-2 py-1">Present Days</th>
                  </tr>
                </thead>
                <tbody>
                  {presentSummary.length === 0 ? (
                    <tr><td colSpan={3} className="text-center py-2">No data</td></tr>
                  ) : (
                    presentSummary.map(emp => (
                      <tr key={emp.employeeId}>
                        <td className="border px-2 py-1">{emp.employeeId}</td>
                        <td className="border px-2 py-1">{emp.name}</td>
                        <td className="border px-2 py-1">{emp.presentDays}</td>
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