import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      setRole("judge");
      navigate("/dashboard");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Judge Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;