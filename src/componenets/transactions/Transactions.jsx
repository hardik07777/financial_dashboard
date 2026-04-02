import { useStore } from "../../store/useStore";
import AddTransactionModal from "./AddTransactionModal";
import { useState } from "react";

export default function Transactions() {
  const { transactions, search, setSearch, filter, setFilter, role } =
    useStore();

  const filtered = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => (filter === "all" ? true : t.type === filter));

  const [open, setOpen] = useState(false);

  return (
    <>
    <div
      className="mt-6 relative bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl
      p-6 rounded-2xl border border-gray-200/70 dark:border-gray-700/60
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
      transition-all duration-300"
    >
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none 
        bg-gradient-to-br from-white/40 via-transparent to-transparent 
        dark:from-white/5" />

      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 tracking-tight">
          Transactions
        </h2>

        {role === "admin" && (
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95
            transition-all text-white px-4 py-2 rounded-lg text-sm
            shadow-md shadow-blue-500/20 hover:shadow-blue-500/30"
          >
            + Add Transaction
          </button>
        )}

      </div>


      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap relative z-10">
        <input
          placeholder="Search category..."
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
          bg-white/70 dark:bg-gray-800/70 backdrop-blur
          text-gray-800 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          shadow-sm focus:shadow-md transition-all"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
          bg-white/70 dark:bg-gray-800/70 backdrop-blur
          text-gray-800 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500
          shadow-sm focus:shadow-md transition-all"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200/70 dark:border-gray-700/60 relative z-10">
        <table className="w-full text-sm text-left">
          <thead
            className="bg-gray-100/70 dark:bg-gray-800/70 backdrop-blur 
            text-gray-600 dark:text-gray-300 sticky top-0 z-10"
          >
            <tr>
              <th className="px-4 py-3 font-medium tracking-wide">Date</th>
              <th className="px-4 py-3 font-medium tracking-wide">Amount</th>
              <th className="px-4 py-3 font-medium tracking-wide">Category</th>
              <th className="px-4 py-3 font-medium tracking-wide">Type</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((t, i) => (
              <tr
                key={t.id}
                className={`border-t dark:border-gray-700 
                ${
                  i % 2 === 0
                    ? "bg-white/60 dark:bg-gray-900/50"
                    : "bg-gray-50/60 dark:bg-gray-800/50"
                }
                hover:bg-blue-50/70 dark:hover:bg-gray-700/60
                hover:scale-[1.005]
                transition-all duration-200`}
              >
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                  {t.date}
                </td>

                <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">
                  ₹{t.amount}
                </td>

                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {t.category}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                    ${
                      t.type === "income"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                        : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            No transactions found
          </div>
        )}
      </div>


    </div>
                            {open && <AddTransactionModal setOpen={setOpen} />}

    </>

  );
}