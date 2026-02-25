import logoSmz from "../assets/logo.jpg";
import "./PageLayout.css";

function PageLayout({ platformLabel, children }) {
  return (
    <div className="pme-page">
      <div className="pme-card">
        <img src={logoSmz} alt="SMZ Zanzibar Logo" className="pme-logo" />
        <h1 className="pme-title">
          Zanzibar Education Sector Planning,
          <br />
          Monitoring and Evaluation System (PM&amp;E)
        </h1>
        {platformLabel && (
          <span className="pme-platform-badge">{platformLabel}</span>
        )}
        <div className="pme-content">{children}</div>
      </div>
    </div>
  );
}

export default PageLayout;
