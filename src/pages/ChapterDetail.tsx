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
        <h1 className="mt-3 text-4xl font-extrabold">DEVCON {chapter.city}</h1>
        <p className="mt-2 text-blue-100">{chapter.tagline}</p>
        <dl className="mt-6 flex flex-wrap gap-8">
          <div>
            <dt className="text-xs uppercase text-blue-200">Members</dt>
            <dd className="text-2xl font-bold">{chapter.members.toLocaleString()}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase text-blue-200">Founded</dt>
            <dd className="text-2xl font-bold">{chapter.founded}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase text-blue-200">Events listed</dt>
            <dd className="text-2xl font-bold">{chapter.events.length}</dd>
          </div>
        </dl>
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-[2fr_1fr]">
        <section className="card p-6">
          <h2 className="text-xl font-bold">About the chapter</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{chapter.about}</p>
