export type AppMode = 'student' | 'teacher';

export type NavTab = 
  | 'dashboard'
  | 'journey'
  | 'letters'
  | 'lesson'
  | 'classroom'
  | 'settings'
  | 'chapter-lesson'
  | 'life-mastery';

export type ArticulationZone = 'Throat' | 'Tongue' | 'Lips' | 'Nasal' | 'Empty Space';

export interface LetterForms {
  isolated: string;
  beginning: string;
  middle: string;
  ending: string;
}

export interface VocabItem {
  id: string;
  /** 1=beginning, 2=middle, 3=ending, 4=isolated/alone */
  position: number;
  arabicWord: string;
  /** The exact Arabic character(s) to highlight inside arabicWord */
  highlightChar: string;
  transliteration: string;
  meaning: string;
  imageUrl: string;
}

export interface PracticeSection {
  sayText: string;
  writeText: string;
  joinText: string;
  readText: string;
  findLetterText: string;
}

export interface MakhrajData {
  name: string;
  arabicName?: string;
  zone: ArticulationZone;
  simpleExplanation: string;
  teacherExplanation: string;
  step1: string;
  step1Label?: string;
  step2: string;
  step2Label?: string;
  keyRule?: string;
  illustrationUrl: string;
  step1IllustrationUrl?: string;
  step2IllustrationUrl?: string;
}

export interface TeacherInsight {
  commonMistakes: string[];
  tajweedAttributes: string[];
  pedagogyTip: string;
}

export interface LessonData {
  id: string;
  lessonNumber: number;
  arabicLetter: string;
  name: string;
  pronunciation: string;
  englishDescription: string;
  hinglishDescription: string;
  urduDescription: string;
  forms: LetterForms;
  makhraj: MakhrajData;
  vocabulary: VocabItem[];
  practice: PracticeSection;
  teacherNotes: TeacherInsight;
  isCompleted?: boolean;
}

export interface AppSettings {
  title: string;
  subtitle: string;
  author: string;
  academy: string;
  defaultLanguage: 'english' | 'hinglish' | 'urdu';
  soundEnabled: boolean;
}

export type TemplatePreset = 'kids' | 'adult' | 'flashcard';

export interface BookSettings {
  title: string;
  subtitle: string;
  author: string;
  edition: string;
  publisher: string;
  coverPattern: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  isMasterLocked: boolean;
  selectedBook: string;
  templatePreset: TemplatePreset;
}
