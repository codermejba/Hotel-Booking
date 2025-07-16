import { Link } from "react-router-dom";

const AdminSidebar = () => (
  <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
    <h5 className="mb-4">Admin Panel</h5>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link text-white">🏠 Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard/rooms" className="nav-link text-white">🛏 Rooms</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard/bookings" className="nav-link text-white">📅 Bookings</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard/blogs" className="nav-link text-white">📰 Blogs</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard/users" className="nav-link text-white">👥 Users</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard/create-user" className="nav-link text-white">➕ Add User</Link>
      </li>
    </ul>
  </div>
);

export default AdminSidebar;
