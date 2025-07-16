import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/404 Error Page/ErrorPage";
import Auth from "./pages/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./services/ProtectedRoute";
import WriteBlog from "./pages/dashboard/WriteBlog";
import Blogs from "./pages/Blogs";
import { useEffect } from "react";
function App() {
  const location=useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
   const hideLayout =["/admin","/dashboard",'/dashboard/write-blog'].includes(location.pathname);
   console.log(hideLayout);
   
     useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
  return (
  
    <>
      {hideLayout ? null : <NavigationBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<Auth />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard/write-blog" element={
          <ProtectedRoute>
            <WriteBlog />
          </ProtectedRoute>
        } />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {hideLayout ? null : <Footer />}
    </>
  );
}


export default App;
