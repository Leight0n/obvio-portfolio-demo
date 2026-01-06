import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#ff7a00", "#0b1f2a", "#6b7280", "#94a3b8"];

export function PolicyPie({ policies, currency }: any) {
  return (
    <div style={{ height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={policies}
            dataKey="displayValue"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
          >
            {policies.map((_: any, index: number) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value: number) =>
              `${currency} ${value.toLocaleString()}`
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
