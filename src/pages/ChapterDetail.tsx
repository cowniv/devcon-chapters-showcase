import { Link, useParams } from "react-router-dom";
import { findChapter, stories } from "../data";
import RegionBadge from "../RegionBadge";
import NotFound from "./NotFound";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" });

export default function ChapterDetail() {
  const { slug } = useParams();
  const chapter = findChapter(slug);
  if (!chapter) return <NotFound />;

  const chapterStories = stories.filter((s) => s.chapter === chapter.slug);
  const events = [...chapter.events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <article>
      <Link to="/" className="text-sm text-slate-500 hover:underline">
        ← All chapters
      </Link>
      <header className="mt-4 rounded-3xl bg-brand p-8 text-white">
        <RegionBadge region={chapter.region} />
