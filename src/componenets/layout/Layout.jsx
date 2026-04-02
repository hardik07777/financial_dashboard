import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";

export default function Layout({ children }) {
  const { role, setRole, toggleDark, darkMode } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  // 🌙 Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  // 📜 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      {/* 🌊 ANIMATION LAYER */}
    <div
  className={`min-h-screen transition-colors duration-500 
${darkMode ? "dark-reveal" : "light-reveal"}
bg-gray-100 dark:bg-gray-950`}
>

      {/* 🧱 MAIN LAYOUT */}
      <div className="min-h-screen bg-gray-200 dark:bg-gray-800 transition-colors duration-500">
        
        {/* 🔥 Navbar */}
        <div
  className={`fixed top-4 left-0 right-0 mx-auto z-50
  w-full max-w-4xl
  transform-gpu will-change-transform
  transition-[transform,opacity,background,padding]
  duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

  ${
    scrolled
      ? "translate-y-0 opacity-100 py-2 px-4 rounded-xl shadow-md backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700"
      : "translate-y-2 opacity-90 py-3 px-5"
  }`}
>
          <div className="flex justify-between items-center">
            
            <h1 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">
              Finance Dashboard
            </h1>

            <div className="flex items-center gap-3">
              
                <select
                  className="px-2 py-1 rounded-md 
                  bg-white/70 dark:bg-gray-800/70 backdrop-blur
                  border border-gray-200 dark:border-gray-700
                  text-sm text-gray-700 dark:text-gray-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                >
                  <option value="viewer">Viewer</option>
                  <option value="admin">Admin</option>
                </select>

              <button
                onClick={(e) => {
                  setClickPos({ x: e.clientX, y: e.clientY });
                  toggleDark();
                }}
                className="text-lg hover:scale-110 transition"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

            </div>
          </div>
        </div>

        {/* 📦 Content */}
        <div className="pt-24 px-4 md:px-8">
          {children}
        </div>
      </div>
    </div>

    </>
  );
}