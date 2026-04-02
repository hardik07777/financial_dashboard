import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function SummaryCard({
  title,
  amount,
  change = 0,
  type = "neutral",
}) {
  const isPositive = change >= 0;

  const config = {
    income: {
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-100/80 dark:bg-emerald-900/30",
      glow: "shadow-emerald-500/10",
      icon: "₹",
    },
    expense: {
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-100/80 dark:bg-rose-900/30",
      glow: "shadow-rose-500/10",
      icon: "₹",
    },
    balance: {
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-100/80 dark:bg-indigo-900/30",
      glow: "shadow-indigo-500/10",
      icon: "₹",
    },
    neutral: {
      color: "text-gray-600 dark:text-gray-300",
      bg: "bg-gray-100/80 dark:bg-gray-800",
      glow: "shadow-gray-500/10",
      icon: "₹",
    },
  };

  const style = config[type];

  return (
   <div
  className={`group relative bg-white dark:bg-gray-900
  p-5 rounded-2xl border border-gray-200 dark:border-gray-700
  shadow ${style.glow}
  hover:shadow-md hover:-translate-y-1
  transition-all duration-300 w-full overflow-hidden
  will-change-transform`}
>
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent dark:from-white/5" />
      </div>

      {/* Top Row */}
      <div className="flex justify-between items-center mb-3 relative z-10">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
          {title}
        </h2>

        <div
          className={`p-2 rounded-lg ${style.bg} 
          ring-1 ring-black/5 dark:ring-white/10
          transition`}
        >
          <span className={`font-bold ${style.color}`}>
            {style.icon}
          </span>
        </div>
      </div>

      {/* Amount */}
      <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100 relative z-10 tracking-tight">
        ₹{amount}
      </p>

      {/* Change Indicator */}
      <div className="flex items-center gap-1 mt-2 relative z-10">
        {isPositive ? (
          <ArrowUpRight
            size={16}
            className="text-emerald-500 dark:text-emerald-400"
          />
        ) : (
          <ArrowDownRight
            size={16}
            className="text-rose-500 dark:text-rose-400"
          />
        )}

        <span
          className={`text-sm font-medium ${
            isPositive
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-rose-600 dark:text-rose-400"
          }`}
        >
          {Math.abs(change)}%
        </span>

        <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">
          vs last period
        </span>
      </div>

      {/* Gradient Accent Line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1 rounded-b-2xl
        ${
          type === "income"
            ? "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600"
            : type === "expense"
            ? "bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600"
            : "bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"
        }`}
      />
    </div>
  );
}