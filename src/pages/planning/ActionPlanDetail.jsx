import { useState } from "react";
import { useParams, useSearchParams, useNavigate, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import IconInput from "../../components/IconInput";
import { FUNDING_SOURCES, QUARTERS } from "../../data/constants";

function ActionPlanDetail() {
  const { shughuliId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  const [title, setTitle] = useState("");
  const [fundingSource, setFundingSource] = useState("");
  const [budgetQuarter, setBudgetQuarter] = useState("");
  const [makisio, setMakisio] = useState("");
  const [indicator, setIndicator] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [annualTarget, setAnnualTarget] = useState("");
  const [quarterTarget, setQuarterTarget] = useState("");
  const [targetQuarter, setTargetQuarter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Shughuli ${shughuliId} submitted!`);
    navigate(`/planning/action-plan/review?${qs}`);
  };

  return (
    <PageLayout platformLabel="Planning Platform">
      <h2 className="pme-section-title">Action Plan &mdash; Shughuli {shughuliId}</h2>

      <form onSubmit={handleSubmit}>
        <label className="pme-label">Activity Title</label>
        <IconInput
          icon="edit"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter activity title"
          required
        />

        <label className="pme-label">Chanzo cha Fedha</label>
        <select
          className="pme-select"
          value={fundingSource}
          onChange={(e) => setFundingSource(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          {FUNDING_SOURCES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label className="pme-label">Makisio ya Fedha (Quarter)</label>
            <select
              className="pme-select"
              value={budgetQuarter}
              onChange={(e) => setBudgetQuarter(e.target.value)}
            >
              <option value="">-- Select Quarter --</option>
              {QUARTERS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="pme-label">Kiasi (Amount)</label>
            <IconInput
              icon="money"
              type="number"
              min="0"
              value={makisio}
              onChange={(e) => setMakisio(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        <label className="pme-label">Kiashiria cha Matokeo (Indicator)</label>
        <IconInput
          icon="target"
          type="textarea"
          value={indicator}
          onChange={(e) => setIndicator(e.target.value)}
          placeholder="Enter indicator"
          required
        />

        <label className="pme-label">Hali ya Sasa (Current Status)</label>
        <IconInput
          icon="chart"
          type="textarea"
          value={currentStatus}
          onChange={(e) => setCurrentStatus(e.target.value)}
          placeholder="Enter current status"
        />

        <label className="pme-label">Shabaha ya Mwaka (Annual Target)</label>
        <IconInput
          icon="target"
          type="textarea"
          value={annualTarget}
          onChange={(e) => setAnnualTarget(e.target.value)}
          placeholder="Enter annual target"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label className="pme-label">Shabaha ya Kila Quarter</label>
            <select
              className="pme-select"
              value={targetQuarter}
              onChange={(e) => setTargetQuarter(e.target.value)}
            >
              <option value="">-- Select Quarter --</option>
              {QUARTERS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="pme-label">Target</label>
            <IconInput
              icon="target"
              value={quarterTarget}
              onChange={(e) => setQuarterTarget(e.target.value)}
              placeholder="Enter target"
            />
          </div>
        </div>

        <label className="pme-label">Upload Supporting Documents</label>
        <input className="pme-input" type="file" multiple />

        <div className="pme-btn-group" style={{ justifyContent: "center" }}>
          <button type="submit" className="pme-btn">Submit</button>
          <button type="button" className="pme-btn pme-btn-outline" onClick={() => alert("Draft saved!")}>
            Save Draft
          </button>
        </div>
      </form>

      <div style={{ textAlign: "center" }}>
        <Link to={`/planning/action-plan?${qs}`} className="pme-back-link">
          ← Back to Shughuli List
        </Link>
      </div>
    </PageLayout>
  );
}

export default ActionPlanDetail;
