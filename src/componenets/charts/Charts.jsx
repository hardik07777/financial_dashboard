import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useStore } from "../../store/useStore";

export default function Charts() {
  const { transactions } = useStore();

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

  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
        <h2>Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <Line dataKey="income" stroke="#4ade80" />
            <Line dataKey="expense" stroke="#f87171" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
        <h2>Categories</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" outerRadius={80} />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}