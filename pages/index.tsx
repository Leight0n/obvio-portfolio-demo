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
   MOCK DATA (since inception)
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
   FX RATES (mock)
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

  const displayData = portfolioHistory.map((p) => ({
    date: p.date,
    value: Math.round(p.totalValue * fx),
  }));

  const latestValue =
    displayData[displayData.length - 1]?.value ?? 0;

  return (
    <main style={{ padding: "32px", fontFamily: "system-ui" }}>
      <h1 style={{ marginBottom: "8px" }}>Client Overview</h1>

      {/* Currency selector */}
      <div style={{ marginBottom: "24px" }}>
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
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <div style={cardStyle}>
          <strong>Total Net Worth</strong>
          <div style={{ fontSize: "22px", marginTop: "8px" }}>
            {currency} {latestValue.toLocaleString()}
          </div>
        </div>

        <div style={cardStyle}>
          <strong>Policies</strong>
          <div style={{ fontSize: "22px", marginTop: "8px" }}>
            3
          </div>
        </div>

        <div style={cardStyle}>
          <strong>Last Updated</strong>
          <div style={{ fontSize: "22px", marginTop: "8px" }}>
            Today
          </div>
        </div>
      </div>

      {/* Performance chart */}
      <h2 style={{ marginBottom: "16px" }}>
        Portfolio Performance (Since Inception)
      </h2>

      <div
        style={{
          width: "100%",
          height: 320,
          background: "#fafafa",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={displayData}>
            <XAxis dataKey="date" />
            <YAxis
              tickFormatter={(v) =>
                `${currency} ${v / 1000}k`
              }
            />
            <Tooltip
              formatter={(v: number) =>
                `${currency} ${v.toLocaleString()}`
              }
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0b5cff"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

/* =========================
   STYLES
========================= */
const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
};
