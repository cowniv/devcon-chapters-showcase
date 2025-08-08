import type { Chapter, Program, Story } from "../types";
import chaptersJson from "./chapters.json";
import storiesJson from "./stories.json";

// JSON imports are typed loosely (region becomes `string`), so we narrow them once here.
export const chapters = chaptersJson as Chapter[];
export const stories = storiesJson as Story[];

export const programs: Program[] = [
  { title: "Mentorship Circles", description: "Small groups pairing first-time attendees with experienced women in tech." },
  { title: "Speaker Bootcamp", description: "Practice runs and feedback for anyone giving their first tech talk." },
