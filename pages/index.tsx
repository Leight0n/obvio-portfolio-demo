import { useState } from "react";
import { mockPortfolio } from "../data/mockPortfolio";
import { fxRates } from "../data/fxRates";

export default function Dashboard() {
  const [currency, setCurrency] = useState("GBP");

  const totalNetWorth = Math.round(
    mockPortfolio.policies.reduce((sum, policy) => {
      const valueInGbp = policy.value * fxRates[policy.currency];
      const displayValue = valueInGbp / fxRates[currency];
      return sum + displayValue;
    }, 0)
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          background: "#0b1f2a",
          color: "#ffffff",
          padding: 20
        }}
      >
        <h2 style={{ marginBottom: 30 }}>obvio</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span>Dashboard</span>
          <span>Accounts</span>
          <span>Allocation</span>
          <span>Geography</span>
        </nav>
      </aside>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          padding: 40,
          background: "#f5f7f9"
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40
          }}
        >
          <h1>Client Overview</h1>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{ padding: 6 }}
          >
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="AED">AED</option>
            <option value="AUD">AUD</option>
            <option value="QAR">QAR</option>
            <option value="SAR">SAR</option>
          </select>
        </header>

        {/* Dashboard cards */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20
          }}
        >
          <div style={cardStyle}>
            <h3>Total Net Worth</h3>
            <p style={{ fontSize: 28 }}>
              {currency} {totalNetWorth.toLocaleString()}
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Policies</h3>
            <p>{mockPortfolio.policies.length} Active</p>
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
  background: "#ffffff",
  padding: 20,
  borderRadius: 8,
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
};
