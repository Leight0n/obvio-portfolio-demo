"use client";

import { useState } from "react";
import PolicyPie from "../components/PolicyPie";

type Currency = "GBP" | "EUR" | "USD";

const FX_RATES: Record<Currency, number> = {
  GBP: 1,
  EUR: 1.17,
  USD: 1.27,
};

export default function Home() {
  const [currency, setCurrency] = useState<Currency>("GBP");

  const totalGBP = 2092600;

  const convertedTotal = Math.round(totalGBP * FX_RATES[currency]);

  const policyData = [
    { name: "Ardan EUR Portfolio", value: 780000 },
    { name: "Ardan USD Portfolio", value: 640000 },
    { name: "Offshore Bond", value: 672600 },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "2rem",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Client Overview
      </h1>

      {/* Currency Selector */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ marginRight: "0.5rem" }}>Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
        >
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div style={cardStyle}>
          <strong>Total Net Worth</strong>
          <div style={{ fontSize: "1.4rem", marginTop: "0.5rem" }}>
            {currency} {convertedTotal.toLocaleString()}
          </div>
        </div>

        <div style={cardStyle}>
          <strong>Policies</strong>
          <div style={{ fontSize: "1.4rem", marginTop: "0.5rem" }}>
            {policyData.length}
          </div>
        </div>

        <div style={cardStyle}>
          <strong>Last Updated</strong>
          <div style={{ marginTop: "0.5rem" }}>Today</div>
        </div>
      </div>

      {/* Policy Allocation Pie */}
      <div>
        <h2 style={{ marginBottom: "1rem" }}>Portfolio Allocation</h2>
        <PolicyPie data={policyData} />
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
};
