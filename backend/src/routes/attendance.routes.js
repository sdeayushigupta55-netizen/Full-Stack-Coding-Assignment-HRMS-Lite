const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.controller');

// Get total present days per employee
router.get('/summary/present-days', attendanceController.getPresentDaysSummary);

router.post('/', attendanceController.markAttendance);
router.get('/:employeeId', attendanceController.getAttendanceByEmployee);

// Filter attendance records by date for an employee
router.get('/:employeeId/filter', attendanceController.filterAttendanceByDate);

module.exports = router;
router.get('/:employeeId/filter', attendanceController.filterAttendanceByDate);

module.exports = router;
