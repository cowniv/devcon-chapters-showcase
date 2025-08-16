import { Link } from "react-router-dom";
import { findChapter, programs, stories } from "../data";

export default function SheIsDevcon() {
  return (
    <>
      <section className="rounded-3xl bg-gradient-to-br from-she to-purple-700 p-8 text-white sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-100">Community feature</p>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">She Is DEVCON</h1>
        <p className="mt-4 max-w-2xl text-lg text-pink-50">
          Celebrating the women who organize, speak, mentor and build across our chapters, and making
          it easier for the next ones to show up.
        </p>
        <a
          href="#stories"
          className="mt-6 inline-block rounded-full bg-white px-5 py-2 font-semibold text-she hover:bg-pink-50"
        >
          Read their stories
        </a>
      </section>

      <section className="mt-12" aria-labelledby="programs-heading">
        <h2 id="programs-heading" className="text-2xl font-bold">
          Program highlights
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <li key={p.title} className="card p-5">
              <span className="text-3xl font-black text-she/40">0{i + 1}</span>
              <h3 className="mt-1 font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="stories" className="mt-12 scroll-mt-20" aria-labelledby="stories-heading">
        <h2 id="stories-heading" className="text-2xl font-bold">
          Stories
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => {
            const chapter = findChapter(s.chapter);
            const initials = s.name
              .split(" ")
              .map((w) => w[0])
              .join("");
            return (
              <li key={s.id} className="card flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 place-items-center rounded-full bg-she/15 font-bold text-she"
                  >
                    {initials}
                  </span>
                  <div>
