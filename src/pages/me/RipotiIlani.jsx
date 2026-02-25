import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

const IBARA_LIST = Array.from({ length: 5 }, (_, i) => `Ibara # ${i + 1}`);

function RipotiIlani() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  const [selectedIbara, setSelectedIbara] = useState("");
  const [utekelezaji, setUtekelezaji] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${selectedIbara} submitted!`);
    setSelectedIbara("");
    setUtekelezaji("");
  };

  return (
    <PageLayout platformLabel="M&amp;E Platform">
      <h2 className="pme-section-title">Ripoti ya Ilani</h2>

      <form onSubmit={handleSubmit}>
        <label className="pme-label">Select Ibara</label>
        <select
          className="pme-select"
          value={selectedIbara}
          onChange={(e) => setSelectedIbara(e.target.value)}
          required
        >
          <option value="">-- Select Ibara --</option>
          {IBARA_LIST.map((ib) => (
            <option key={ib} value={ib}>{ib}</option>
          ))}
        </select>

        {selectedIbara && (
          <>
            <label className="pme-label">Ibara ya Ilani</label>
            <div className="pme-alert pme-alert-info">
              {selectedIbara} &mdash; (Fixed in the system)
            </div>

            <label className="pme-label">Utekelezaji</label>
            <textarea
              className="pme-textarea"
              value={utekelezaji}
              onChange={(e) => setUtekelezaji(e.target.value)}
              placeholder="Enter implementation details"
              required
            />

            <div className="pme-btn-group" style={{ justifyContent: "center" }}>
              <button type="submit" className="pme-btn">Submit</button>
              <button type="button" className="pme-btn pme-btn-outline" onClick={() => alert("Draft saved!")}>
                Save Draft
              </button>
            </div>
          </>
        )}
      </form>

      <div className="pme-btn-group" style={{ justifyContent: "center", marginTop: "1rem" }}>
        <button
          className="pme-btn pme-btn-success"
          onClick={() => navigate(`/me/ripoti-ilani/review?${qs}`)}
        >
          Review &amp; Submit to Director
        </button>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link to={`/me/choice?${qs}`} className="pme-back-link">← Back</Link>
      </div>
    </PageLayout>
  );
}

export default RipotiIlani;
