import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ReportForm from "./components/ReportForm";
import ComplaintForm from "./components/ComplaintForm";

// Pages
import Home from "./pages/Home"; // ✅ Use actual Home.jsx
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Optional: Add if you want default styles

// Layout that includes the Navbar
const Layout = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <div className="p-6 max-w-4xl mx-auto">
      <Outlet />
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🔁 Redirect base path to /auth */}
        <Route path="/" element={<Navigate to="/auth" replace />} />

        {/* 🔒 Routes with Navbar */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/complaint" element={<ComplaintForm />} />
        </Route>

        {/* 🔓 Routes without Navbar */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}
