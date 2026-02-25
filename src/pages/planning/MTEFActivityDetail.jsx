import { useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import IconInput from "../../components/IconInput";
import { GFS_CODES } from "../../data/constants";

function MTEFActivityDetail() {
  const { activityId } = useParams();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const fy = searchParams.get("fy") || "";
  const quarter = searchParams.get("quarter") || "";

  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}&fy=${encodeURIComponent(fy)}&quarter=${encodeURIComponent(quarter)}`;

  const [title, setTitle] = useState("");
  const [gfsCode, setGfsCode] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [numUnits, setNumUnits] = useState("");

  const estimates =
    unitCost && numUnits ? (parseFloat(unitCost) * parseFloat(numUnits)).toLocaleString() : "0";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Activity ${activityId} submitted!\nTitle: ${title}\nGFS: ${gfsCode}\nEstimates: ${estimates}`);
  };

  return (
    <PageLayout platformLabel="Planning Platform">
      <h2 className="pme-section-title">MTEF &mdash; Activity {activityId}</h2>

      <form onSubmit={handleSubmit}>
        <label className="pme-label">Activity Title</label>
        <IconInput
          icon="edit"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter activity title"
          required
        />

        <label className="pme-label">GFS Codes</label>
        <select
          className="pme-select"
          value={gfsCode}
          onChange={(e) => setGfsCode(e.target.value)}
          required
        >
          <option value="">-- Select GFS Code --</option>
          {GFS_CODES.map((g) => (
            <option key={g.code} value={g.code}>
              {g.code} {g.name}
            </option>
          ))}
        </select>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <div>
            <label className="pme-label">Unit Cost</label>
            <IconInput
              icon="money"
              type="number"
              min="0"
              value={unitCost}
              onChange={(e) => setUnitCost(e.target.value)}
              placeholder="0"
              required
            />
          </div>
          <div>
            <label className="pme-label"># of Units</label>
            <IconInput
              icon="hash"
              type="number"
              min="0"
              value={numUnits}
              onChange={(e) => setNumUnits(e.target.value)}
              placeholder="0"
              required
            />
          </div>
          <div>
            <label className="pme-label">Estimates</label>
            <div
              style={{
                padding: "0.75rem 1rem",
                background: "#f0f0f0",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "1rem",
                color: "#291f5f",
              }}
            >
              {estimates}
            </div>
          </div>
        </div>

        <div className="pme-btn-group" style={{ justifyContent: "center" }}>
          <button type="submit" className="pme-btn">Submit</button>
          <button type="button" className="pme-btn pme-btn-outline" onClick={() => alert("Draft saved!")}>
            Save Draft
          </button>
        </div>
      </form>

      <div style={{ textAlign: "center" }}>
        <Link to={`/planning/mtef/activities?${qs}`} className="pme-back-link">
          ← Back to Activities
        </Link>
      </div>
    </PageLayout>
  );
}

export default MTEFActivityDetail;
