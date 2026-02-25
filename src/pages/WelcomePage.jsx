import { useNavigate } from "react-router-dom";
import logoSmz from "../assets/logo.jpg";
import "./WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-card">
        <img
          src={logoSmz}
          alt="SMZ Zanzibar Logo"
          className="welcome-logo"
        />
        <h1 className="welcome-title">
          Zanzibar Education Sector Planning,
          <br />
          Monitoring and Evaluation System (PM&E)
        </h1>
        <button
          type="button"
          className="welcome-btn"
          onClick={() => navigate("/user-guide")}
        >
          User Guide
        </button>
        <br></br>
        <br></br>
        <button
          type="button"
          className="welcome-btn"
          onClick={() => navigate("/login")}
        >
          Password
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
