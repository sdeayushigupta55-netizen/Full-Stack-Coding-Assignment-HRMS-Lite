const Employee = require('../models/Employee');

exports.createEmployee = async (req, res, next) => {
  try {
    const { employeeId, fullName, email, department } = req.body;
    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const exists = await Employee.findOne({ $or: [{ employeeId }, { email }] });
    if (exists) {
      return res.status(409).json({ error: 'Employee ID or Email already exists.' });
    }
    const employee = new Employee({ employeeId, fullName, email, department });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

exports.getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    next(err);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.json({ message: 'Employee deleted.' });
  } catch (err) {
    next(err);
  }
};
