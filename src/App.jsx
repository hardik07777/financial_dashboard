import Layout from "./componenets/layout/Layout";
import SummaryCard from "./componenets/cards/SummaryCard";
import Charts from "./componenets/charts/Charts";
import Transactions from "./componenets/transactions/Transactions";
import { useStore } from "./store/useStore";

export default function App() {
  const { transactions } = useStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" amount={income - expense} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expense} />
      </div>

      <Charts />
      <Transactions />
    </Layout>
  );
}