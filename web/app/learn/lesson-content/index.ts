import type { LessonContent } from "./types";
import { MARKETING_LESSONS } from "./marketing";

const REGISTRY: Record<string, LessonContent[][]> = {
  marketing: MARKETING_LESSONS,
};

export function getLessonContent(trackId: string, moduleNum: string, lessonNum: string): LessonContent | null {
  const modules = REGISTRY[trackId];
  const moduleIndex = Number(moduleNum) - 1;
  const lessonIndex = Number(lessonNum) - 1;
  return modules?.[moduleIndex]?.[lessonIndex] ?? null;
}
