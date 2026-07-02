// ── Shared lesson content types ────────────────────────────────────────────────
// Every lesson format below maps to one player component in
// web/app/learn/components/lesson/*Player.tsx, dispatched by lesson type.

export type QuizChoiceQuestion = {
  kind: "choice";
  emoji: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explain: string;
};

export type QuizBlankQuestion = {
  kind: "blank";
  emoji: string;
  /** Sentence containing a literal "___" marking the blank to fill in. */
  sentence: string;
  options: string[];
  correctIndex: number;
  explain: string;
};

export type QuizQuestion = QuizChoiceQuestion | QuizBlankQuestion;

export type ReadReflectCard = {
  emoji?: string;
  headline: string;
  body: string;
};

export type InteractiveStep = {
  /** true = user types their own answer before seeing modelAnswer; false = modelAnswer is shown directly as a guided walkthrough step, no typing required. */
  open: boolean;
  prompt: string;
  placeholder: string;
  modelAnswer: string;
};

export type ScenarioBeat =
  | { kind: "narrative"; emoji?: string; body: string }
  | { kind: "decision"; prompt: string; choices: { label: string; outcome: string }[] };

export type ToolWalkthroughStep = {
  title: string;
  body: string;
  tip?: string;
};

export type QuizLessonContent = {
  type: "quiz";
  lessonTitle: string;
  questions: QuizQuestion[];
};

export type ReadReflectLessonContent = {
  type: "read-reflect";
  lessonTitle: string;
  cards: ReadReflectCard[];
  reflectPrompt: string;
  /** Short recap quiz shown after the reflect card, before the lesson completes. */
  recapQuestions: QuizQuestion[];
};

export type InteractiveExerciseLessonContent = {
  type: "interactive-exercise";
  lessonTitle: string;
  intro: string;
  steps: InteractiveStep[];
  artifactTitle: string;
  /** Short recap quiz shown after the artifact step, before the lesson completes. */
  recapQuestions: QuizQuestion[];
};

export type ScenarioLessonContent = {
  type: "scenario";
  lessonTitle: string;
  beats: ScenarioBeat[];
  /** Short recap quiz shown after the final beat, before the lesson completes. */
  recapQuestions: QuizQuestion[];
};

export type ToolWalkthroughLessonContent = {
  type: "tool-walkthrough";
  lessonTitle: string;
  toolName: string;
  toolUrl: string;
  steps: ToolWalkthroughStep[];
};

export type LessonContent =
  | QuizLessonContent
  | ReadReflectLessonContent
  | InteractiveExerciseLessonContent
  | ScenarioLessonContent
  | ToolWalkthroughLessonContent;
