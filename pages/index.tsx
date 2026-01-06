export default function Dashboard() {
  return (
    <div style={{ padding: "32px" }}>
      <h1>Client Overview</h1>

      <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
        <div style={{ background: "#fff", padding: "16px", borderRadius: "8px", flex: 1 }}>
          <strong>Total Net Worth</strong>
          <div>GBP 2,092,600</div>
        </div>

        <div style={{ background: "#fff", padding: "16px", borderRadius: "8px", flex: 1 }}>
          <strong>Policies</strong>
          <div>3</div>
        </div>

        <div style={{ background: "#fff", padding: "16px", borderRadius: "8px", flex: 1 }}>
          <strong>Last Updated</strong>
          <div>Today</div>
        </div>
      </div>

      <h2>Portfolio Performance (Since Inception)</h2>
      {/* performance chart stays here */}
    </div>
  );
}
