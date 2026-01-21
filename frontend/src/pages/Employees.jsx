import React, { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import { getEmployees, addEmployee, deleteEmployee } from "../services/api";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const res = await getEmployees();
      setEmployees(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch employees");
    }
    setLoading(false);
  };

  const handleAddEmployee = async (data) => {
    setLoading(true);
    try {
      await addEmployee(data);
      fetchEmployees();
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add employee");
    }
    setLoading(false);
  };

  const handleDeleteEmployee = async (id) => {
    setLoading(true);
    try {
      await deleteEmployee(id);
      fetchEmployees();
      setError("");
    } catch (err) {
      setError("Failed to delete employee");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="employees-page">
      <div className="employee-form-card">
        <h2 className="employee-form-title">Employee Management</h2>
        {error && (
          <div className="employee-form-error">
            {error}
          </div>
        )}
        <EmployeeForm onAdd={handleAddEmployee} />
      </div>
      <div className="employee-table-card">
        {loading ? (
          <p className="employee-table-loading">Loading...</p>
        ) : (
          <EmployeeTable employees={employees} onDelete={handleDeleteEmployee} />
        )}
      </div>
    </div>
  );
};

export default Employees;