import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

function PlanningChoice() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  return (
    <PageLayout platformLabel="Planning Platform">
      <p style={{ textAlign: "center", color: "#555", marginBottom: "1.5rem" }}>
        Select either <strong>MTEF</strong> or <strong>Action Plan</strong> to proceed.
      </p>
      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button
          className="pme-btn"
          style={{ minWidth: 160 }}
          onClick={() => navigate(`/planning/mtef/setup?${qs}`)}
        >
          MTEF
        </button>
        <button
          className="pme-btn"
          style={{ minWidth: 160 }}
          onClick={() => navigate(`/planning/action-plan?${qs}`)}
        >
          Action Plan
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={`/planning/division?dept=${encodeURIComponent(dept)}`} className="pme-back-link">
          ← Back
        </Link>
      </div>
    </PageLayout>
  );
}

export default PlanningChoice;
