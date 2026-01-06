export default function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: 220,
        background: "#0b1f2a",
        color: "#fff",
        padding: 20
      }}>
        <h2 style={{ marginBottom: 30 }}>obvio</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span>Dashboard</span>
          <span>Accounts</span>
          <span>Allocation</span>
          <span>Geography</span>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: 40, background: "#f5f7f9" }}>
        
        {/* Header */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40
        }}>
          <h1>Client Overview</h1>
          <select>
            <option>GBP</option>
            <option>EUR</option>
            <option>USD</option>
            <option>AED</option>
            <option>AUD</option>
          </select>
        </header>

        {/* Content blocks */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <div style={cardStyle}>
            <h3>Total Net Worth</h3>
            <p style={{ fontSize: 28 }}>£2,794,380</p>
          </div>

          <div style={cardStyle}>
            <h3>Policies</h3>
            <p>3 Active</p>
          </div>

          <div style={cardStyle}>
            <h3>Last Updated</h3>
            <p>Today</p>
          </div>
        </section>

      </main>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
};
