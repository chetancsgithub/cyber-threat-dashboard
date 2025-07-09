import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThreatList = () => {
  const [threats, setThreats] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const fetchThreats = () => {
    let query = `http://localhost:8080/api/threats?page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;
    if (category) query += `&category=${category}`;

    axios.get(query)
      .then(res => {
        setThreats(res.data.content);
        setTotalPages(res.data.totalPages);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchThreats();
  }, [page, search, category]);

  return (
    <div>
      <input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <input placeholder="Filter by Category..." value={category} onChange={e => setCategory(e.target.value)} />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {threats.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.threatCategory}</td>
              <td>
                <Link to={`/threats/${t.id}`}>
                  {t.cleanedThreatDescription?.slice(0, 50)}...
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0}>Previous</button>
        <span>Page {page + 1} of {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))} disabled={page >= totalPages - 1}>Next</button>
      </div>
    </div>
  );
};

export default ThreatList;
