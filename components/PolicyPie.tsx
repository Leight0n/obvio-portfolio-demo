"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Policy = {
  name: string;
  value: number;
};

const COLORS = ["#ff7a00", "#0b1f2a", "#6b7280", "#94a3b8"];

export default function PolicyPie({ data }: { data: Policy[] }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            innerRadius={60}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(v: number) => `£${v.toLocaleString()}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
