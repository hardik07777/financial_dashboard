import { useStore } from "../../store/useStore";

export default function Layout({ children }) {
  const { role, setRole, toggleDark, darkMode } = useStore();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Finance Dashboard</h1>

          <div className="flex gap-2">
            <select onChange={(e) => setRole(e.target.value)}>
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>

            <button onClick={toggleDark}>🌙</button>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}