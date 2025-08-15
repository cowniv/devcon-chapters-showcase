import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-500">That chapter or page doesn't exist (yet).</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-brand px-4 py-2 text-white">
        Back to chapters
