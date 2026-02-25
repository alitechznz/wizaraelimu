import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

function ActionPlanReview() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  return (
    <PageLayout platformLabel="Planning Platform">
      <h2 className="pme-section-title">Action Plan &mdash; Review</h2>
      <div className="pme-alert pme-alert-info">
        Review the Report Before Submitting to the Director for Approval
      </div>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "1.5rem" }}>
        Please review all submitted shughuli data before submitting. You can go back to make changes.
      </p>
      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button
          className="pme-btn pme-btn-outline"
          onClick={() => navigate(`/planning/action-plan?${qs}`)}
        >
          Go Back to Edit
        </button>
        <button
          className="pme-btn pme-btn-success"
          onClick={() => navigate(`/planning/action-plan/submit?${qs}`)}
        >
          Proceed to Submit
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={`/planning/action-plan?${qs}`} className="pme-back-link">← Back</Link>
      </div>
    </PageLayout>
  );
}

export default ActionPlanReview;
