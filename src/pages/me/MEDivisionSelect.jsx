import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { DIVISIONS } from "../../data/constants";

function MEDivisionSelect() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const [division, setDivision] = useState("");

  const divisionList = DIVISIONS[dept] || [];

  const handleProceed = () => {
    const div = division || dept;
    navigate(`/me/choice?dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(div)}`);
  };

  return (
    <PageLayout platformLabel="M&amp;E Platform">
      <h2 className="pme-section-title">Department of {dept}</h2>
      {divisionList.length > 0 ? (
        <>
          <label className="pme-label">Select Division</label>
          <select
            className="pme-select"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            <option value="">-- Select Division --</option>
            {divisionList.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </>
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>
          No divisions configured. Proceeding directly.
        </p>
      )}

      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button
          className="pme-btn"
          disabled={divisionList.length > 0 && !division}
          onClick={handleProceed}
        >
          Proceed
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/me" className="pme-back-link">← Back</Link>
      </div>
    </PageLayout>
  );
}

export default MEDivisionSelect;
