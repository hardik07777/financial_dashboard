import { useState } from "react";

export default function AddTransactionModal({ setOpen }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
  });

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setOpen(false)} // close on outside click
    >
      {/* Modal */}
      <div
        className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-6 transform transition-all scale-100 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Add Transaction
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false); // just close (UI only)
          }}
        >
          {/* Title */}
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Grocery"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full mt-1 px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Amount
            </label>
            <input
              type="number"
              placeholder="₹ 0.00"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
              className="w-full mt-1 px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category + Date */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-500 dark:text-gray-400">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
              >
                <option>Food</option>
                <option>Shopping</option>
                <option>Travel</option>
                <option>Bills</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-500 dark:text-gray-400">
                Date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:opacity-80"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}