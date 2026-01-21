# HRMS Lite - Full Stack Coding Assignment

## Project Overview

HRMS Lite is a simplified Human Resource Management System designed as a full-stack coding assignment. The application allows users to manage employees and their attendance records. It features a modern frontend for user interaction and a backend API for data management.

### Key Features
- Employee management (add, view, list)
- Attendance management (mark, view, list)
- Dashboard for quick insights


## Tech Stack Used

### Frontend
- React (with Vite)
- JavaScript (ES6+)
- CSS (custom styling)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)

## Steps to Run the Project Locally

### Prerequisites
- Node.js (v16 or above recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud instance)

### 1. Clone the Repository
```bash
git clone https://github.com/sdeayushigupta55-netizen/Full-Stack-Coding-Assignment-HRMS-Lite.git
cd Full-Stack-Coding-Assignment-HRMS-Lite
```

### 2. Setup Backend
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` directory with the following (edit as needed):
	```env
	MONGODB_URI=mongodb://localhost:27017/hrmslite
	PORT=5000
	```
- Start the backend server:
	```bash
	npm start
	```
	The backend will run on [http://localhost:5000](http://localhost:5000).

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
- The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

### 4. Access the Application
- Open your browser and go to [http://localhost:5173](http://localhost:5173)

## Assumptions or Limitations
- No authentication or authorization is implemented (open access for demo purposes).
- The backend expects a running MongoDB instance (local or cloud).
- Error handling is basic and may need enhancements for production use.
- The UI is designed for desktop and tablet; mobile responsiveness may be limited.
- Employee and attendance data are not validated for complex business rules.

---

For any issues or questions, please open an issue in the repository.
# Full-Stack-Coding-Assignment-HRMS-Lite
