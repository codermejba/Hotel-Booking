import { useNavigate } from "react-router-dom";

const AdminTopbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="bg-white border-bottom p-3 d-flex justify-content-between align-items-center">
      <h6 className="m-0">📊 Admin Dashboard</h6>
      <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminTopbar;
