export type Region = "Luzon" | "Visayas" | "Mindanao";

export const REGIONS: readonly Region[] = ["Luzon", "Visayas", "Mindanao"] as const;

export interface ChapterEvent {
  title: string;
  date: string; // ISO date
  kind: "Meetup" | "Workshop" | "Hackathon" | "Summit";
}
