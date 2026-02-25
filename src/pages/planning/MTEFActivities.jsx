import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

const ACTIVITIES = Array.from({ length: 9 }, (_, i) => `Activity ${i + 1}`);

function MTEFActivities() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const fy = searchParams.get("fy") || "";
  const quarter = searchParams.get("quarter") || "";

  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}&fy=${encodeURIComponent(fy)}&quarter=${encodeURIComponent(quarter)}`;

  return (
    <PageLayout platformLabel="Planning Platform">
      <h2 className="pme-section-title">MTEF &mdash; Activities</h2>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "1rem" }}>
        Select an activity to cost.
      </p>
      <div className="pme-grid">
        {ACTIVITIES.map((a, i) => (
          <div
            key={a}
            className="pme-grid-item"
            onClick={() => navigate(`/planning/mtef/activity/${i + 1}?${qs}`)}
          >
            {a}
          </div>
        ))}
      </div>
      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button className="pme-btn pme-btn-outline" onClick={() => alert("Draft saved!")}>
          Save Draft
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link
          to={`/planning/mtef/setup?dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`}
          className="pme-back-link"
        >
          ← Back
        </Link>
      </div>
    </PageLayout>
  );
}

export default MTEFActivities;
