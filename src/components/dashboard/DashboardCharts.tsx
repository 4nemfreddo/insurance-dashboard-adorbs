import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", premium: 17271.4 },
  { month: "Feb", premium: 17271.6 },
  { month: "Mar", premium: 17271.8 },
  { month: "Apr", premium: 17272.0 },
  { month: "May", premium: 17272.2 },
  { month: "Jun", premium: 17272.4 },
];

const productData = [
  { name: "AUTO INSURANCE", value: 40 },
  { name: "LIFE INSURANCE", value: 25 },
  { name: "HEALTH INSURANCE", value: 20 },
  { name: "PROPERTY INSURANCE", value: 15 },
];

const COLORS = ["#60A5FA", "#34D399", "#F472B6", "#FBBF24"];

export const DashboardCharts = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">PRODUCTION ANALYTICS</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="premium"
                stroke="#60A5FA"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">PORTFOLIO DISTRIBUTION</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {productData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {productData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};