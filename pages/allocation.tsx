import Layout from "../components/Layout";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useState } from "react";

type AllocationSlice = {
  name: string;
  value: number;
};

const data: AllocationSlice[] = [
  { name: "Equities", value: 45 },
  { name: "Fixed Income", value: 30 },
  { name: "Alternatives", value: 15 },
  { name: "Cash", value: 10 },
];

const COLORS = ["#0b5cff", "#ff7a00", "#6b7280", "#0b1f2a"];

export default function AllocationPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Layout>
      <h1>Portfolio Allocation</h1>

      <p style={{ opacity: 0.7, marginBottom: 24 }}>
        Strategic asset allocation (current)
      </p>

      <div style={{ width: "100%", height: 420 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={90}
              outerRadius={140}
              paddingAngle={3}
              activeIndex={activeIndex ?? undefined}
              activeShape={renderActiveShape}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
}

/**
 * Hover "explode" effect
 */
function renderActiveShape(props: any) {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const offset = 12;
  const cxOffset = cx + cos * offset;
  const cyOffset = cy + sin * offset;

  return (
    <g>
      <Pie
        cx={cxOffset}
        cy={cyOffset}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        data={[props.payload]}
        dataKey="value"
      />
    </g>
  );
}
