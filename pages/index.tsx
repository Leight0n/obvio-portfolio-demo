import dynamic from "next/dynamic";
import { useState } from "react";

/**
 * Disable SSR for Recharts (REQUIRED for Next.js)
 */
const ResponsiveContainer = dynamic(
  () => import("recharts").then((m) => m.ResponsiveContainer),
  { ssr: false }
);
const PieChart = dynamic(
  () => import("recharts").then((m) => m.PieChart),
  { ssr: false }
);
const Pie = dynamic(
  () => import("recharts").then((m) => m.Pie),
  { ssr: false }
);
const Cell = dynamic(
  () => import("recharts").then((m) => m.Cell),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("recharts").then((m) => m.Tooltip),
  { ssr: false }
);

/**
 * Mock policy data (guaranteed to render)
 */
const policies = [
  { name: "International Pension", value: 1180000 },
  { name: "Investment Account", value: 820000 },
  { name: "ISA", value: 430000 }
];

const COLORS = ["#ff7a00", "#0b1f2a", "#6b7280"];

export default function Dashboard() {
  const [currency] = useState("GBP");

  const total = policies.reduce((sum, p) => sum + p.value, 0);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          background: "#0b1f2a",
          color: "#fff",
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

      {/* Main */}
      <main style={{ flex: 1, padding: 40, background: "#f5f7f9" }}>
        
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
          <strong>{currency}</strong>
        </header>

        {/* Summary cards */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 40
          }}
        >
          <div style={card}>
            <h3>Total Net Worth</h3>
            <p style={{ fontSize: 28 }}>
              {currency} {total.toLocaleString()}
            </p>
          </div>

          <div style={card}>
            <h3>Policies</h3>
            <p>{policies.length} Active</p>
          </div>

          <div style={card}>
            <h3>Last Updated</h3>
            <p>Today</p>
          </div>
        </section>

        {/* Policy Pie */}
        <section>
          <h2>Policies</h2>

          <div style={{ width: 420, height: 320 }}>
            <ResponsiveContainer>
              <PieChart>
