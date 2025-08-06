import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import ChapterDetail from "./pages/ChapterDetail";
import Chapters from "./pages/Chapters";
import NotFound from "./pages/NotFound";
import SheIsDevcon from "./pages/SheIsDevcon";
import ThemeToggle from "./ThemeToggle";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-sm font-medium ${
    isActive ? "bg-brand text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"
  }`;

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-2 focus:text-slate-900">
        Skip to content
      </a>
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3" aria-label="Main">
          <NavLink to="/" className="text-lg font-extrabold tracking-tight">
            DEVCON <span className="text-brand-accent">Chapters</span>
          </NavLink>
          <div className="flex items-center gap-1">
            <NavLink to="/" end className={navClass}>
              Chapters
            </NavLink>
            <NavLink to="/she-is-devcon" className={navClass}>
              She Is DEVCON
            </NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Chapters />} />
          <Route path="/chapters/:slug" element={<ChapterDetail />} />
          <Route path="/she-is-devcon" element={<SheIsDevcon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800">
        Fan-made student project. Chapter data is fictional sample data.
      </footer>
    </BrowserRouter>
  );
}
