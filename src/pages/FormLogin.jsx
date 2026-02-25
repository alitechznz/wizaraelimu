import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoSmz from "../assets/logo.jpg";
import IconInput from "../components/IconInput";
import { useAuth } from "../context/AuthContext";
import "./WelcomePage.css";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        login(data.user);
        setSuccess(data.message || "Umefanikiwa kuingia.");
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        setError(data.message || "Login imeshindwa.");
      }
    } catch (err) {
      setError("Hitilafu ya mtandao. Hakikisha server inaendesha (npm run server).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="welcome-page">
      <div className="welcome-card">
        <img src={logoSmz} alt="SMZ Zanzibar Logo" className="welcome-logo" />
        <h1 className="welcome-title">
          Zanzibar Education Sector Planning,
          <br />
          Monitoring and Evaluation System (PM&amp;E)
        </h1>

        {error && <p className="login-message login-error">{error}</p>}
        {success && <p className="login-message login-success">{success}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <IconInput
            icon="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <IconInput
            icon="lock"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="login-forgot">
            <Link to="/forgot-password" className="login-link">Forgot password?</Link>
          </p>
          <button type="submit" className="welcome-btn login-submit-btn" disabled={loading}>
            {loading ? "Inaingia…" : "Login"}
          </button>
        </form>

        <p className="login-footer">
          <Link to="/" className="login-link">← Rudi ukurasa wa kwanza</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
