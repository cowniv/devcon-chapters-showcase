import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { chapters } from "../data";
import RegionBadge from "../RegionBadge";
import { REGIONS, type Region, type SortKey } from "../types";

const SORTS: Record<SortKey, { label: string; compare: (a: (typeof chapters)[number], b: (typeof chapters)[number]) => number }> = {
  name: { label: "Name (A–Z)", compare: (a, b) => a.city.localeCompare(b.city) },
  members: { label: "Most members", compare: (a, b) => b.members - a.members },
  founded: { label: "Oldest first", compare: (a, b) => a.founded - b.founded },
};

const isRegion = (v: string | null): v is Region => REGIONS.includes(v as Region);
const isSort = (v: string | null): v is SortKey => v !== null && v in SORTS;

export default function Chapters() {
  // filters live in the URL so a filtered view can be shared and survives the back button
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const regionParam = params.get("region");
  const region = isRegion(regionParam) ? regionParam : null;
  const sortParam = params.get("sort");
  const sort: SortKey = isSort(sortParam) ? sortParam : "name";

  const update = (key: string, value: string | null) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return chapters
      .filter((c) => !region || c.region === region)
      .filter(
        (c) =>
          !term ||
          c.city.toLowerCase().includes(term) ||
          c.tagline.toLowerCase().includes(term) ||
          c.focus.some((f) => f.toLowerCase().includes(term))
      )
      .sort(SORTS[sort].compare);
  }, [q, region, sort]);

  const total = chapters.reduce((sum, c) => sum + c.members, 0);

  return (
    <>
      <section className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Find your local chapter</h1>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          {chapters.length} chapters and {total.toLocaleString()} members across Luzon, Visayas and Mindanao.
        </p>
      </section>

      <form className="mb-6 grid gap-3 sm:grid-cols-[1fr_auto]" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="sr-only" htmlFor="search">
          Search chapters
        </label>
        <input
          id="search"
          className="input"
          placeholder="Search by city or focus (e.g. IoT)"
          value={q}
          onChange={(e) => update("q", e.target.value)}
        />
        <label className="flex items-center gap-2 text-sm">
          <span className="whitespace-nowrap">Sort by</span>
          <select className="input" value={sort} onChange={(e) => update("sort", e.target.value)}>
            {(Object.keys(SORTS) as SortKey[]).map((k) => (
              <option key={k} value={k}>
                {SORTS[k].label}
              </option>
            ))}
          </select>
        </label>
        <fieldset className="flex flex-wrap gap-2 sm:col-span-2">
          <legend className="sr-only">Filter by region</legend>
          {[null, ...REGIONS].map((r) => (
            <button
              key={r ?? "all"}
              type="button"
              aria-pressed={region === r}
              onClick={() => update("region", r)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                region === r
                  ? "border-brand bg-brand text-white"
                  : "border-slate-300 hover:border-brand dark:border-slate-700"
              }`}
            >
              {r ?? "All regions"}
            </button>
          ))}
        </fieldset>
      </form>
