import { useState } from "react";
import Layout from "../components/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Currency = "GBP" | "USD" | "EUR";

type PortfolioPoint = {
  date: string;
  totalValue: number;
};

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

const fxRates: Record<Currency, number> = {
  GBP: 1,
  USD: 1.27,
  EUR: 1.17,
};

export default function Dashboard() {
  const [currency, setCurrency] = useState<Currency>("GBP");

  const displayHistory = portfolioHistory.map((p) => ({
    date: p.date,
    value: Math.round(p.totalValue * fxRates[currency]),
  }));

  const latest =
    displayHistory[displayHistory.length - 1]?.value ?? 0;

  return (
    <Layout>
      <h1>Client Overview</h1>

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 40,
        }}
      >
        <Card title="Total Net Worth">
          {currency} {latest.toLocaleString()}
        </Card>
        <Card title="Policies">3</Card>
        <Card title="Last Updated">Today</Card>
      </div>

      <h2>Portfolio Performance (Since Inception)</h2>

      <div style={{ width: "100%", height: 340 }}>
        <ResponsiveContainer>
          <LineChart data={displayHistory}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
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
    </Layout>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: 16,
        borderRadius: 12,
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <strong>{title}</strong>
      <div style={{ fontSize: 22, marginTop: 8 }}>
        {children}
      </div>
    </div>
  );
}
