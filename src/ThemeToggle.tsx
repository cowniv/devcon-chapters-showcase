import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

type Theme = "light" | "dark";

const systemTheme = (): Theme => (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<Theme>("devcon:theme", systemTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const next: Theme = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="ml-1 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
}
