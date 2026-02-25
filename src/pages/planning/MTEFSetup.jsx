import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { FINANCIAL_YEARS, QUARTERS } from "../../data/constants";

function MTEFSetup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const [fy, setFy] = useState("");
  const [quarter, setQuarter] = useState("");

  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  const handleProceed = () => {
    if (fy && quarter) {
      navigate(
        `/planning/mtef/activities?${qs}&fy=${encodeURIComponent(fy)}&quarter=${encodeURIComponent(quarter)}`
      );
    }
  };

  return (
    <PageLayout platformLabel="Planning Platform">
      <h2 className="pme-section-title">MTEF</h2>

      <label className="pme-label">Planning Period (Financial Year)</label>
      <select className="pme-select" value={fy} onChange={(e) => setFy(e.target.value)}>
        <option value="">-- Select Financial Year --</option>
        {FINANCIAL_YEARS.map((f) => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>

      <label className="pme-label">Quarter</label>
      <select className="pme-select" value={quarter} onChange={(e) => setQuarter(e.target.value)}>
        <option value="">-- Select Quarter --</option>
        {QUARTERS.map((q) => (
          <option key={q} value={q}>{q}</option>
        ))}
      </select>

      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button className="pme-btn" disabled={!fy || !quarter} onClick={handleProceed}>
          Proceed
        </button>
        <button className="pme-btn pme-btn-outline" onClick={() => alert("Draft saved!")}>
          Save Draft
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={`/planning/choice?${qs}`} className="pme-back-link">← Back</Link>
      </div>
    </PageLayout>
  );
}

export default MTEFSetup;
