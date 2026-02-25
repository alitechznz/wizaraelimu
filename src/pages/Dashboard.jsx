import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "1.5rem" }}>
        To proceed with submitting information, select either of the two:
        <br />
        <strong>1) Planning</strong> or <strong>2) M&amp;E</strong>.
      </p>
      <div className="pme-btn-group" style={{ justifyContent: "center" }}>
        <button
          className="pme-btn"
          style={{ minWidth: 180 }}
          onClick={() => navigate("/planning")}
        >
          Planning Platform
        </button>
        <button
          className="pme-btn"
          style={{ minWidth: 180 }}
          onClick={() => navigate("/me")}
        >
          M&amp;E Platform
        </button>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
