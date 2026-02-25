import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

function MEChoice() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  return (
    <PageLayout platformLabel="M&amp;E Platform">
      <p style={{ textAlign: "center", color: "#555", marginBottom: "1.5rem" }}>
        Select either <strong>Reporting on the Action Plan</strong> or{" "}
        <strong>Ripoti ya Ilani</strong> to proceed.
      </p>
      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button
          className="pme-btn"
          style={{ minWidth: 200 }}
          onClick={() => navigate(`/me/reporting?${qs}`)}
        >
          Reporting on the Action Plan
        </button>
        <button
          className="pme-btn"
          style={{ minWidth: 200 }}
          onClick={() => navigate(`/me/ripoti-ilani?${qs}`)}
        >
          Ripoti ya Ilani
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={`/me/division?dept=${encodeURIComponent(dept)}`} className="pme-back-link">
          ← Back
        </Link>
      </div>
    </PageLayout>
  );
}

export default MEChoice;
