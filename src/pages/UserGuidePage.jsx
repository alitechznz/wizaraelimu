import { Link } from "react-router-dom";
import logoSmz from "../assets/logo.jpg";
import "./WelcomePage.css";

function UserGuidePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-card welcome-card-guide">
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
        <h2 className="guide-heading">User Guide</h2>
        <div className="guide-content">
          <p>
            Hapa utapata mwongozo wa matumizi ya mfumo wa PM&E. Ongeza maudhui ya mwongozo hapa.
          </p>
          <p>
            You can add your guide content here – steps, instructions, FAQs, or links to documents.
          </p>
        </div>
        <p className="login-footer" style={{ marginTop: "1.5rem" }}>
          <Link to="/" className="login-link">← Rudi ukurasa wa kwanza</Link>
        </p>
      </div>
    </div>
  );
}

export default UserGuidePage;
