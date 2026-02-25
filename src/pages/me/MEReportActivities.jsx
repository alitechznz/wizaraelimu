import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

const SHUGHULI = Array.from({ length: 9 }, (_, i) => `Shughuli ${i + 1}`);

function MEReportActivities() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  return (
    <PageLayout platformLabel="M&amp;E Platform">
      <h2 className="pme-section-title">Reporting on the Action Plan</h2>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "1rem" }}>
        Select a Shughuli to report on.
      </p>
      <div className="pme-grid">
        {SHUGHULI.map((s, i) => (
          <div
            key={s}
            className="pme-grid-item"
            onClick={() => navigate(`/me/reporting/${i + 1}?${qs}`)}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button className="pme-btn pme-btn-outline" onClick={() => alert("Draft saved!")}>
          Save Draft
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={`/me/choice?${qs}`} className="pme-back-link">← Back</Link>
      </div>
    </PageLayout>
  );
}

export default MEReportActivities;
