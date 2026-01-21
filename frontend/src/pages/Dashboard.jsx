export default function Dashboard() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="bg-white p-6 rounded-lg border shadow" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="text-lg font-medium text-center">Welcome 👋</h2>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Manage employees and track attendance efficiently.
        </p>
      </div>
    </div>
  );
}