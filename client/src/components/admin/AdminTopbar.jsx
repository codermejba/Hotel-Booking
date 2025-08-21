import { useNavigate } from "react-router-dom";

const AdminTopbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className=" position-sticky top-0 border-bottom z-1 " style={{ width: "100%", height: "80px" }}>
      <div className="bg-light h-100 p-3 d-flex justify-content-between align-items-center">
      <h6 className="m-0">📊 Admin Dashboard</h6>
      <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>
        Logout 🏹
      </button>
    </div>
    </div>
  );
};

export default AdminTopbar;
