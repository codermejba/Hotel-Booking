import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import { getAllBlogs } from "../../services/BlogsService";

const Dashboard = () => {
  const [blogs, setBlogs] = React.useState([]);
  const fakeSummary = {
    rooms: 8,
    bookings: 21,
    users: 2,
  };

const getBlogs = async () => {
  try {
    const result = await getAllBlogs();
    
    if (result.error) {
      throw new Error(result.message);
    }

    setBlogs(result.data);
    return { success: true, message: 'Welcome to our blog' };
  } catch (error) {
console.error(error);

  }
}
useEffect(() => {
  getBlogs();
  
}, []);

  return (
    <AdminLayout>
      <div className="container-fluid">
        <h3 className="mb-4">Admin Dashboard Overview</h3>

        {/* Summary Cards */}
        <div className="row g-4">
          {/* Rooms */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <i className="bi bi-door-open fs-2 text-primary"></i>
                <h6 className="mt-2">Rooms</h6>
                <p className="fs-4 fw-bold">{fakeSummary.rooms}</p>
                <Link to="/dashboard/rooms" className="btn btn-sm btn-outline-primary">
                  View Rooms
                </Link>
              </div>
            </div>
          </div>

          {/* Bookings */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <i className="bi bi-calendar-check fs-2 text-success"></i>
                <h6 className="mt-2">Bookings</h6>
                <p className="fs-4 fw-bold">{fakeSummary.bookings}</p>
                <Link to="/dashboard/bookings" className="btn btn-sm btn-outline-success">
                  View Bookings
                </Link>
              </div>
            </div>
          </div>

          {/* Blogs */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <i className="bi bi-journal-text fs-2 text-warning"></i>
                <h6 className="mt-2">Blogs</h6>
                <p className="fs-4 fw-bold">{blogs.length}</p>
                <Link to="/dashboard/blogs" className="btn btn-sm btn-outline-warning">
                  View Blogs
                </Link>
              </div>
            </div>
          </div>

          {/* Users */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <i className="bi bi-people fs-2 text-info"></i>
                <h6 className="mt-2">Panel Users</h6>
                <p className="fs-4 fw-bold">{fakeSummary.users}</p>
                <Link to="/dashboard/users" className="btn btn-sm btn-outline-info">
                  Manage Users
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-5">
          <h5 className="mb-3">Quick Actions</h5>
          <div className="row g-3">
            <div className="col-md-3">
              <Link to="/dashboard/add-room" className="btn btn-primary w-100">
                ➕ Add New Room
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/dashboard/write-blog" className="btn btn-warning w-100">
                ✍️ Write Blog
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/dashboard/create-user" className="btn btn-info w-100">
                👤 Create Admin User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
