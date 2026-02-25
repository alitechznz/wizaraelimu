import { useNavigate, useSearchParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout";

function ActionPlanSubmit() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dept = searchParams.get("dept") || "";
  const division = searchParams.get("division") || "";
  const qs = `dept=${encodeURIComponent(dept)}&division=${encodeURIComponent(division)}`;

  const handleSubmit = () => {
    alert("Report submitted to Director for Review and Approval!");
    navigate("/dashboard");
  };

  return (
    <PageLayout platformLabel="Planning Platform">
      <h2 className="pme-section-title">Action Plan &mdash; Submit</h2>
      <div className="pme-alert pme-alert-info" style={{ textAlign: "center" }}>
        Submit to the Director for Review and Approval
      </div>
      <div className="pme-btn-group" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
        <button
          className="pme-btn pme-btn-outline"
          onClick={() => navigate(`/planning/action-plan/review?${qs}`)}
        >
          ← Go Back
        </button>
        <button className="pme-btn pme-btn-success" onClick={handleSubmit}>
          Submit
        </button>
        <button
          className="pme-btn pme-btn-outline"
          onClick={() => alert("Report sent to printer.")}
        >
          Print the Report
        </button>
      </div>
    </PageLayout>
  );
}

export default ActionPlanSubmit;
