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
