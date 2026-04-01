import { useStore } from "../../store/useStore";

export default function Transactions() {
  const { transactions, search, setSearch, filter, setFilter, role } =
    useStore();

  const filtered = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => (filter === "all" ? true : t.type === filter));

  return (
    <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-xl">
      <h2 className="mb-2">Transactions</h2>

      <div className="flex gap-2 mb-2 flex-wrap">
        <input
          placeholder="Search"
          className="border p-1"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="text-center border-t">
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td>{t.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {role === "admin" && (
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          + Add Transaction
        </button>
      )}
    </div>
  );
}