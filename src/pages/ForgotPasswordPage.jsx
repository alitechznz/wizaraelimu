import { useState } from "react";
import { Link } from "react-router-dom";
import logoSmz from "../assets/logo.jpg";
import IconInput from "../components/IconInput";
import "./WelcomePage.css";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
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
        <h2 className="guide-heading">Forgot Password</h2>
        <p className="login-footer" style={{ marginBottom: "1rem" }}>
          Ingiza barua pepe yako, tutakutumia kiungo cha kurekebisha nenosiri.
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <IconInput
            icon="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="welcome-btn login-submit-btn">
            Send reset link
          </button>
        </form>
        <p className="login-footer">
          <Link to="/login" className="login-link">← Rudi kwenye Login</Link>
        </p>
        <p className="login-footer">
          <Link to="/" className="login-link">← Rudi ukurasa wa kwanza</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
