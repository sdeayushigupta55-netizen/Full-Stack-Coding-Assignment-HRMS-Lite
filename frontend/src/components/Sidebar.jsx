import React from "react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/", icon: "🏠" },
  { name: "Employees", path: "/employees", icon: "👥" },
  { name: "Attendance", path: "/attendance", icon: "🕒" },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-title">HRMS Lite</div>
      <ul className="sidebar-menu">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`sidebar-link${location.pathname === item.path ? " active" : ""}`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
     
    </aside>
  );
};

export default Sidebar;