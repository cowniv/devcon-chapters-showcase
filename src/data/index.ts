import type { Chapter, Program, Story } from "../types";
import chaptersJson from "./chapters.json";
import storiesJson from "./stories.json";

// JSON imports are typed loosely (region becomes `string`), so we narrow them once here.
export const chapters = chaptersJson as Chapter[];
