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

