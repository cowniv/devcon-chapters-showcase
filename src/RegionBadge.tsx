import type { Region } from "./types";

const STYLE: Record<Region, string> = {
  Luzon: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
  Visayas: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  Mindanao: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
};

export default function RegionBadge({ region }: { region: Region }) {
  return <span className={`chip ${STYLE[region]}`}>{region}</span>;
}
