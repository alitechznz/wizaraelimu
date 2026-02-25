import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { DEPARTMENTS, AGENCIES } from "../../data/constants";

function MEDeptSelect() {
  const navigate = useNavigate();
  const [dept, setDept] = useState("");
  const [agency, setAgency] = useState("");

  const handleProceed = () => {
    const selected = dept || agency;
    if (selected) {
      navigate(`/me/division?dept=${encodeURIComponent(selected)}`);
    }
  };

  return (
    <PageLayout platformLabel="M&amp;E Platform">
      <h2 className="pme-section-title">MoEVT Department</h2>
      <select
        className="pme-select"
        value={dept}
        onChange={(e) => { setDept(e.target.value); setAgency(""); }}
      >
        <option value="">-- Select Department --</option>
        {DEPARTMENTS.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <h2 className="pme-section-title">Agencies / Institutes</h2>
      <select
        className="pme-select"
        value={agency}
        onChange={(e) => { setAgency(e.target.value); setDept(""); }}
      >
        <option value="">-- Select Agency / Institute --</option>
        {AGENCIES.map((a) => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>

      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button className="pme-btn" disabled={!dept && !agency} onClick={handleProceed}>
          Proceed
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/dashboard" className="pme-back-link">← Back to Dashboard</Link>
      </div>
    </PageLayout>
  );
}

export default MEDeptSelect;
