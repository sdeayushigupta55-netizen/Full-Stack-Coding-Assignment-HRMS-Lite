// Get total present days per employee
exports.getPresentDaysSummary = async (req, res, next) => {
  try {
    // Aggregate present days for each employee
    const summary = await Attendance.aggregate([
      { $match: { status: 'Present' } },
      { $group: {
          _id: '$employee',
          presentDays: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'employees',
          localField: '_id',
          foreignField: '_id',
          as: 'employeeInfo'
        }
      },
      {
        $unwind: '$employeeInfo'
      },
      {
        $project: {
          employeeId: '$employeeInfo.employeeId',
          name: '$employeeInfo.fullName',
          // fullName: '$employeeInfo.fullName',÷
          presentDays: 1
        }
      }
    ]);
    res.json(summary);
  } catch (err) {
    next(err);
  }
};
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

// Filter attendance records by date (query params: startDate, endDate)
exports.filterAttendanceByDate = async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const { startDate, endDate } = req.query;
    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    let filter = { employee: employee._id };
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }
    const records = await Attendance.find(filter).sort({ date: -1 });
    res.json(records);
  } catch (err) {
    next(err);
  }
};
