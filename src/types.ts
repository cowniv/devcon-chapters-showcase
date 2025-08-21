export type Region = "Luzon" | "Visayas" | "Mindanao";

export const REGIONS: readonly Region[] = ["Luzon", "Visayas", "Mindanao"] as const;

export interface ChapterEvent {
  title: string;
  date: string; // ISO date
  kind: "Meetup" | "Workshop" | "Hackathon" | "Summit";
}

export interface Chapter {
  slug: string;
  city: string;
  region: Region;
  founded: number;
  members: number;
  tagline: string;
  about: string;
  focus: string[];
  events: ChapterEvent[];
}

export interface Story {
  id: string;
  name: string; // fictional persona, not a real person
  role: string;
  chapter: string; // chapter slug
