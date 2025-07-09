import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ThreatDetail = () => {
  const { id } = useParams();
  const [threat, setThreat] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/threats/${id}`)
      .then(res => setThreat(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!threat) return <p>Loading...</p>;

  return (
    <div className="stat-box">
      <h2>Threat ID: {threat.id}</h2>
      <p><strong>Category:</strong> {threat.threatCategory}</p>
      <p><strong>Severity:</strong> {threat.severityScore}</p>
      <p><strong>Description:</strong> {threat.cleanedThreatDescription}</p>
      <p><strong>Actor:</strong> {threat.threatActor}</p>
      <p><strong>Vector:</strong> {threat.attackVector}</p>
      <p><strong>Suggested Defense:</strong> {threat.suggestedDefenseMechanism}</p>
    </div>
  );
};

export default ThreatDetail;
