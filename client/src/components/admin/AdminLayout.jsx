import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Area */}
      <div className="flex-grow-1 d-flex flex-column">
        <AdminTopbar />
        
        {/* Main Page Content */}
        <main className="flex-grow-1 p-4 bg-light">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
