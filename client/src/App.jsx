import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/404 Error Page/ErrorPage";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./services/ProtectedRoute";
import styled from "styled-components";
function App() {
  return (
    <Main>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Main>
  );
}

const Main=styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default App;
