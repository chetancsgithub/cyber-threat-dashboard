// 📁 src/App.js
import React from "react";
import { Link, Navigate, Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Analyze from "./components/AnalyzeThreat";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ThreatDetail from "./components/ThreatDetail";
import ThreatList from "./components/ThreatList";

const Logout = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);
  return null;
};

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <div className="p-4 font-sans">
        <h1 className="text-2xl font-bold mb-4">Cyber Threat Dashboard</h1>
        <nav className="mb-4 space-x-4">
          <Link to="/" className="text-indigo-600 hover:underline">Dashboard</Link>
          <Link to="/threats" className="text-indigo-600 hover:underline">Threats</Link>
          <Link to="/analyze" className="text-indigo-600 hover:underline">Analyze</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/threats" element={<ThreatList />} />
          <Route path="/threats/:id" element={<ThreatDetail />} />
          <Route path="/analyze" element={<PrivateRoute><Analyze /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;