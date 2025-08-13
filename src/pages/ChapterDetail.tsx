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
          <h3 className="mt-6 font-semibold">Focus areas</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {chapter.focus.map((f) => (
              <li key={f} className="chip bg-slate-100 dark:bg-slate-800">
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-6" aria-labelledby="events-heading">
          <h2 id="events-heading" className="text-xl font-bold">
            Events
          </h2>
          <ol className="mt-3 space-y-3">
            {events.map((e) => (
              <li key={e.title} className="border-l-4 border-brand-accent pl-3">
                <p className="font-semibold">{e.title}</p>
                <p className="text-xs text-slate-500">
                  {e.kind} · <time dateTime={e.date}>{fmt(e.date)}</time>
                </p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {chapterStories.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold">
            From <Link to="/she-is-devcon" className="text-she hover:underline">She Is DEVCON</Link>
          </h2>
          {chapterStories.map((s) => (
            <blockquote key={s.id} className="card mt-3 border-l-4 border-l-she p-5">
              <p className="italic">“{s.quote}”</p>
              <footer className="mt-2 text-sm text-slate-500">
                {s.name}, {s.role}
              </footer>
            </blockquote>
          ))}
        </section>
      )}
    </article>
  );
}
