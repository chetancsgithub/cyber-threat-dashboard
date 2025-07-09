import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/threats/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <div className="stat-box">Total Threats: {stats.total_threats}</div>
      <div className="stat-box green">
        <h2>By Category</h2>
        <ul>
          {Object.entries(stats.by_category).map(([cat, count]) => (
            <li key={cat}>{cat}: {count}</li>
          ))}
        </ul>
      </div>
      <div className="stat-box red">
        <h2>By Severity</h2>
        <ul>
          {Object.entries(stats.by_severity).map(([sev, count]) => (
            <li key={sev}>Score {sev}: {count}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
