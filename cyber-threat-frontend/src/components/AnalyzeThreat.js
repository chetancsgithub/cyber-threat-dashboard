import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AnalyzeThreat = () => {
  const [description, setDescription] = useState("");
  const [prediction, setPrediction] = useState(null);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post("http://localhost:8080/api/analyze", { description }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPrediction(res.data.predicted_category);
    } catch (err) {
      if (err.response?.status === 401) {
        alert("Unauthorized. Please login again.");
        navigate("/login");
      } else {
        alert("Error: " + err.response?.data?.error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Threat Analysis</h2>
        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={handleLogout}>Logout</button>
      </div>

      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Paste threat description here..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAnalyze}>Analyze</button>

      {prediction && <p className="mt-4">Predicted Category: <strong>{prediction}</strong></p>}
    </div>
  );
};

export default AnalyzeThreat;
