const Attendance = require('../models/Attendance');
const Employee = require('../models/Employee');

exports.markAttendance = async (req, res, next) => {
  try {
    const { employeeId, date, status } = req.body;
    if (!employeeId || !date || !status) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    const attendance = new Attendance({
      employee: employee._id,
      date: new Date(date),
      status
    });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Attendance already marked for this date.' });
    }
    next(err);
  }
};

exports.getAttendanceByEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findOne({ employeeId: req.params.employeeId });
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    const records = await Attendance.find({ employee: employee._id }).sort({ date: -1 });
    res.json(records);
  } catch (err) {
    next(err);
  }
};
