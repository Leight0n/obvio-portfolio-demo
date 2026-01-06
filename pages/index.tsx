import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* =========================
   TYPES
========================= */
type Currency = "GBP" | "USD" | "EUR";

type PortfolioPoint = {
  date: string;
  totalValue: number; // base GBP
};

/* =========================
   MOCK PERFORMANCE DATA
========================= */
const portfolioHistory: PortfolioPoint[] = [
  { date: "2019-01", totalValue: 820000 },
  { date: "2019-06", totalValue: 865000 },
  { date: "2020-01", totalValue: 910000 },
  { date: "2020-06", totalValue: 940000 },
  { date: "2021-01", totalValue: 1020000 },
  { date: "2021-06", totalValue: 1180000 },
  { date: "2022-01", totalValue: 1320000 },
  { date: "2022-06", totalValue: 1400000 },
  { date: "2023-01", totalValue: 1650000 },
  { date: "2023-06", totalValue: 1820000 },
  { date: "2024-01", totalValue: 1950000 },
  { date: "2024-06", totalValue: 2092600 },
];

/* =========================
   FX (mock)
========================= */
const fxRates: Record<Currency, number> = {
  GBP: 1,
  USD: 1.27,
  EUR: 1.17,
};

/* =========================
   PAGE
========================= */
export default function Dashboard() {
  const [currency, setCurrency] = useState<Currency>("GBP");

  const fx = fxRates[currency];

  const displayHistory = portfolioHistory.map((p) => ({
    date: p.date,
    value: Math.round(p.totalValue * fx),
  }));

  const latestValue =
    displayHistory[displayHistory.length - 1]?.value ?? 0;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "system-ui",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          background: "#0b1f2a",
          color: "#ffffff",
          padding: 20,
        }}
      >
        <h2 style={{ marginBottom: 30 }}>obvio</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span>Dashboard</span>
          <span>Allocation</span>
          <span>Performance</span>
          <span>Geography</span>
        </nav>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: 32, background: "#f5f7f9" }}>
        <h1 style={{ marginBottom: 12 }}>Client Overview</h1>

        {/* Currency selector */}
        <div style={{ marginBottom: 24 }}>
          Currency:&nbsp;
          <select
            value={currency}
            onChange={(e) =>
              setCurrency(e.target.value as Currency)
            }
          >
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        {/* Summary cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div style={cardStyle}>
            <strong>Total Net Worth</strong>
            <div style={{ fontSize: 22, marginTop: 8 }}>
              {currency} {latestValue.toLocaleString()}
            </div>
          </div>

          <div style={cardStyle}>
            <strong>Policies</strong>
            <div style={{ fontSize: 22, marginTop: 8 }}>3</div>
          </div>

          <div style={cardStyle}>
            <strong>Last Updated</strong>
            <div style={{ fontSize: 22, marginTop: 8 }}>
              Today
            </div>
          </div>
        </div>

        {/* Performance graph */}
        <h2 style={{ marginBottom: 16 }}>
          Portfolio Performance (Since Inception)
        </h2>

        <div
          style={{
            width: "100%",
            height: 340,
            background: "#ffffff",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <ResponsiveContainer>
            <LineChart data={displayHistory}>
              <XAxis dataKey="date" />
              <YAxis
                tickFormatter={(v) =>
                  `${currency} ${v / 1000}k`
                }
              />
              <Tooltip
                formatter={(v: number) =>
