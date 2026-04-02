import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Cell,
} from "recharts";
import { useStore } from "../../store/useStore";

export default function Charts() {
  const { transactions, darkMode } = useStore();

  const chartData = transactions.map((t) => ({
    name: t.date,
    income: t.type === "income" ? t.amount : 0,
    expense: t.type === "expense" ? t.amount : 0,
  }));

  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (!acc[t.category]) acc[t.category] = { name: t.category, value: 0 };
      acc[t.category].value += t.amount;
      return acc;
    }, {})
  );

  // 🎯 Dynamic theme colors
  const textColor = darkMode ? "#e5e7eb" : "#374151";
  const gridColor = darkMode ? "#374151" : "#e5e7eb";
  const tooltipBg = darkMode ? "#111827" : "#ffffff";

  const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#3b82f6"];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      
      {/* 📈 Trend Chart */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Trend Overview
        </h2>

        {chartData.length === 0 ? (
          <p className="text-gray-500 text-sm">No data available</p>
        ) : (
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData}>
              
              <CartesianGrid
                stroke={gridColor}
                strokeDasharray="3 3"
                strokeOpacity={0.2}
              />

              <XAxis
                dataKey="name"
                tick={{ fill: textColor, fontSize: 12 }}
              />

              <YAxis
                tick={{ fill: textColor, fontSize: 12 }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: tooltipBg,
                  borderRadius: "10px",
                  border: "none",
                  color: textColor,
                }}
              />

              <Legend wrapperStyle={{ color: textColor }} />

              <Line
                type="monotone"
                dataKey="income"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="expense"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* 🥧 Category Breakdown */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Spending by Category
        </h2>

        {categoryData.length === 0 ? (
          <p className="text-gray-500 text-sm">No data available</p>
        ) : (
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
              >
                {categoryData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: tooltipBg,
                  borderRadius: "10px",
                  border: "none",
                  color: textColor,
                }}
              />

              <Legend wrapperStyle={{ color: textColor }} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}