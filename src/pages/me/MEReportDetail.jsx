import { useState } from "react";
import { useParams, useSearchParams, useNavigate, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import IconInput from "../../components/IconInput";

function MEReportDetail() {
  const { shughuliId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  const [fundsQ1, setFundsQ1] = useState("");
  const [fundsQ2, setFundsQ2] = useState("");
  const [fundsQ3, setFundsQ3] = useState("");
  const [fundsQ4, setFundsQ4] = useState("");
  const [fundsExplanation, setFundsExplanation] = useState("");
  const [actualImpl, setActualImpl] = useState("");
  const [implExplanation, setImplExplanation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Shughuli ${shughuliId} report submitted!`);
    navigate(`/me/reporting/review?${qs}`);
  };

  return (
    <PageLayout platformLabel="M&amp;E Platform">
      <h2 className="pme-section-title">
        Reporting on Action Plan &mdash; Shughuli {shughuliId}
      </h2>

      <form onSubmit={handleSubmit}>
        <h3 style={{ color: "#291f5f", marginBottom: "0.5rem" }}>Fedha Zilizopatikana</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          {[
            { label: "Quarter 1", val: fundsQ1, set: setFundsQ1 },
            { label: "Quarter 2", val: fundsQ2, set: setFundsQ2 },
            { label: "Quarter 3", val: fundsQ3, set: setFundsQ3 },
            { label: "Quarter 4", val: fundsQ4, set: setFundsQ4 },
          ].map((q) => (
            <div key={q.label}>
              <label className="pme-label">{q.label}</label>
              <IconInput
                icon="money"
                type="number"
                min="0"
                value={q.val}
                onChange={(e) => q.set(e.target.value)}
                placeholder="0"
              />
            </div>
          ))}
        </div>

        <div className="pme-alert pme-alert-info" style={{ marginTop: "0.5rem" }}>
          <strong>% ya Fedha Zilizopatikana:</strong> Will be auto-calculated from budget
          (Makisio ya Fedha) in Planning Platform and funds received above.
        </div>

        <label className="pme-label">Maelezo ya Fedha</label>
        <IconInput
          icon="edit"
          type="textarea"
          value={fundsExplanation}
          onChange={(e) => setFundsExplanation(e.target.value)}
          placeholder="Provide relevant explanation on available funds"
        />

        <label className="pme-label">Kiashiria cha Matokeo</label>
        <div className="pme-alert pme-alert-info">
          Indicator will be picked automatically from the Planning Platform.
        </div>

        <label className="pme-label">Utekelezaji Halisi (Actual Implementation)</label>
        <IconInput
          icon="chart"
          type="textarea"
          value={actualImpl}
          onChange={(e) => setActualImpl(e.target.value)}
          placeholder="Report on actual implementation"
          required
        />

        <label className="pme-label">Maelezo ya Utekelezaji</label>
        <IconInput
          icon="edit"
          type="textarea"
          value={implExplanation}
          onChange={(e) => setImplExplanation(e.target.value)}
          placeholder="Additional implementation details"
        />

        <div className="pme-btn-group" style={{ justifyContent: "center" }}>
          <button type="submit" className="pme-btn">Submit</button>
          <button type="button" className="pme-btn pme-btn-outline" onClick={() => alert("Draft saved!")}>
            Save Draft
          </button>
        </div>
      </form>

      <div style={{ textAlign: "center" }}>
        <Link to={`/me/reporting?${qs}`} className="pme-back-link">← Back to Shughuli List</Link>
      </div>
    </PageLayout>
  );
}

export default MEReportDetail;
