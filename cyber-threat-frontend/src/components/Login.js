import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post("http://localhost:8080/api/auth/login", { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        navigate("/analyze");
      })
      .catch(() => alert("Invalid login"));
  };

  return (
    <div className="max-w-md mx-auto">
      <input
        className="block w-full p-2 border rounded mb-2"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="block w-full p-2 border rounded mb-4"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="w-full bg-green-500 text-white p-2 rounded" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
