export default function SummaryCard({ title, amount }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow w-full">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-2xl font-bold">₹{amount}</p>
    </div>
  );
}