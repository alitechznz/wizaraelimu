import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

function RipotiIlaniReview() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  const handleSubmit = () => {
    alert("Ripoti ya Ilani submitted to the Director for Review and Approval!");
    navigate("/dashboard");
  };

  return (
    <PageLayout platformLabel="M&amp;E Platform">
      <h2 className="pme-section-title">Ripoti ya Ilani &mdash; Review</h2>
      <div className="pme-alert pme-alert-info">
        Review the Report Before Submitting to the Director for Approval
      </div>
      <p style={{ textAlign: "center", color: "#555", margin: "1rem 0" }}>
        Please review all submitted ibara data. You can go back to make changes.
      </p>
      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button
          className="pme-btn pme-btn-outline"
          onClick={() => navigate(`/me/ripoti-ilani?${qs}`)}
        >
          Go Back to Edit
        </button>
        <button className="pme-btn pme-btn-success" onClick={handleSubmit}>
          Submit to Director
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={`/me/ripoti-ilani?${qs}`} className="pme-back-link">← Back</Link>
      </div>
    </PageLayout>
  );
}

export default RipotiIlaniReview;
