import type { LessonData, AppSettings, ArticulationZone } from '../types';
import { FULL_MAKHRAJ_DATABASE } from './makhrajGuideData';

export const INITIAL_APP_SETTINGS: AppSettings = {
  title: 'Arabic Tajweed Master',
  subtitle: 'Interactive 28-Letter Tajweed & Makhraj Guide',
  author: 'Ustadh Al-Huda',
  academy: 'Qur\'an Literacy Academy',
  defaultLanguage: 'hinglish',
  soundEnabled: true,
};

export const SAMPLE_IMAGES = {
  dates: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%"><rect width="200" height="200" rx="16" fill="%23FFFBEB"/><path d="M70 120 C 60 70, 100 50, 120 90 C 130 110, 110 140, 85 135 Z" fill="%2378350F"/><path d="M110 110 C 100 60, 140 40, 160 80 C 170 100, 150 130, 125 125 Z" fill="%2392400E"/><path d="M50 140 C 40 100, 75 80, 95 110 C 105 125, 85 155, 65 150 Z" fill="%23451A03"/><path d="M100 45 L105 30 L115 45 Z" fill="%2315803D"/><path d="M90 40 Q 110 20 130 35" stroke="%23166534" stroke-width="4" fill="none"/></svg>`,
  writing: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%"><rect width="200" height="200" rx="16" fill="%23F0FDF4"/><rect x="40" y="40" width="120" height="120" rx="8" fill="%23FFFFFF" stroke="%23CBD5E1" stroke-width="4"/><line x1="60" y1="70" x2="140" y2="70" stroke="%2394A3B8" stroke-width="3"/><line x1="60" y1="100" x2="140" y2="100" stroke="%2394A3B8" stroke-width="3"/><line x1="60" y1="130" x2="120" y2="130" stroke="%2394A3B8" stroke-width="3"/><path d="M120 140 L160 60 L145 50 L105 130 Z" fill="%23D97706"/><path d="M160 60 L165 50 L150 45 L145 50 Z" fill="%231E293B"/></svg>`,
  house: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%"><rect width="200" height="200" rx="16" fill="%23EFF6FF"/><path d="M100 40 L30 100 L50 100 L50 170 L150 170 L150 100 L170 100 Z" fill="%232563EB"/><rect x="85" y="110" width="30" height="60" fill="%231E3A8A"/><rect x="60" y="110" width="20" height="25" fill="%2393C5FD"/><rect x="120" y="110" width="20" height="25" fill="%2393C5FD"/></svg>`,
  blackboard: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%"><rect width="200" height="200" rx="16" fill="%23FEF3C7"/><rect x="30" y="40" width="140" height="100" rx="8" fill="%231E293B" stroke="%2378350F" stroke-width="6"/><text x="100" y="110" font-family="sans-serif" font-size="50" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">ت</text><path d="M60 140 L40 180 M140 140 L160 180" stroke="%2378350F" stroke-width="8"/></svg>`,
  step1Mouth: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="100%"><rect width="240" height="180" rx="12" fill="%23FFF5F5"/><path d="M 40 90 Q 120 40 200 90 Q 120 150 40 90 Z" fill="%23FECDD3" stroke="%23E11D48" stroke-width="4"/><rect x="90" y="65" width="60" height="22" rx="4" fill="%23FFFFFF" stroke="%23CBD5E1" stroke-width="2"/><line x1="120" y1="65" x2="120" y2="87" stroke="%2394A3B8" stroke-width="2"/><path d="M 70 120 Q 120 85 120 87" stroke="%23E11D48" stroke-width="12" stroke-linecap="round" fill="none"/><line x1="120" y1="140" x2="120" y2="92" stroke="%23E11D48" stroke-width="3" stroke-dasharray="3,3"/><polygon points="120,87 115,97 125,97" fill="%23E11D48"/><text x="120" y="165" font-family="sans-serif" font-size="10" font-weight="bold" fill="%239F1239" text-anchor="middle">Tip of tongue touching front teeth</text></svg>`,
  step2Mouth: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="100%"><rect width="240" height="180" rx="12" fill="%23F0FDF4"/><path d="M 40 80 Q 120 30 200 80 Q 120 160 40 80 Z" fill="%23FECDD3" stroke="%23E11D48" stroke-width="4"/><rect x="90" y="60" width="60" height="22" rx="4" fill="%23FFFFFF" stroke="%23CBD5E1" stroke-width="2"/><line x1="120" y1="60" x2="120" y2="82" stroke="%2394A3B8" stroke-width="2"/><path d="M 70 130 Q 120 110 120 115" stroke="%23E11D48" stroke-width="12" stroke-linecap="round" fill="none"/><path d="M 120 85 Q 115 95 120 105" stroke="%2338BDF8" stroke-width="4" stroke-dasharray="2,2" fill="none"/><text x="120" y="165" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23166534" text-anchor="middle">Release & say "Ta"</text></svg>`,
  makhrajTaaSide: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" width="100%" height="100%"><rect width="260" height="200" rx="12" fill="%23FFFBEB"/><path d="M 40 160 Q 80 90 170 100 Q 210 110 230 150" stroke="%2364748B" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M 90 160 Q 110 120 180 110 Q 200 90 190 50" stroke="%23E11D48" stroke-width="16" fill="none" stroke-linecap="round"/><circle cx="185" cy="55" r="10" fill="%23F59E0B"/><text x="185" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="%239F1239" text-anchor="middle">Makhraj Point (ت)</text><text x="130" y="188" font-family="sans-serif" font-size="10" fill="%23475569" text-anchor="middle">Tip of tongue against upper front teeth</text></svg>`,
  makhrajDefault: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240" width="100%" height="100%"><rect width="300" height="240" rx="12" fill="%23F8FAFC"/><circle cx="150" cy="110" r="45" fill="%23E2E8F0"/><text x="150" y="118" font-family="sans-serif" font-size="32" fill="%2364748B" text-anchor="middle">👄</text><text x="150" y="190" font-family="sans-serif" font-size="12" fill="%2364748B" text-anchor="middle">Makhraj Diagram</text></svg>`,
  genericObj: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%"><rect width="200" height="200" rx="16" fill="%23F1F5F9"/><text x="100" y="110" font-family="sans-serif" font-size="40" text-anchor="middle">📖</text></svg>`
};

const ARABIC_LETTERS_RAW = [
  { num: 1, char: 'ا', name: 'Alif', pron: 'Alif', zone: 'Empty Space' as ArticulationZone, eng: 'Empty space of mouth & throat (Madd letter)', isolated: 'ا', beginning: 'ا', middle: 'ـا', ending: 'ـا' },
  { num: 2, char: 'ب', name: 'Baa', pron: 'Baa', zone: 'Lips' as ArticulationZone, eng: 'Produced by closing both lips together softly', isolated: 'ب', beginning: 'بـ', middle: 'ـبـ', ending: 'ـب' },
  { num: 3, char: 'ت', name: 'Taa', pron: 'Taa', zone: 'Tongue' as ArticulationZone, eng: 'Tip of tongue touching roots of upper front teeth', isolated: 'ت', beginning: 'تـ', middle: 'ـتـ', ending: 'ـت' },
  { num: 4, char: 'ث', name: 'Thaa', pron: 'Thaa', zone: 'Tongue' as ArticulationZone, eng: 'Tip of tongue touching edges of upper front teeth', isolated: 'ث', beginning: 'ثـ', middle: 'ـثـ', ending: 'ـث' },
  { num: 5, char: 'ج', name: 'Jeem', pron: 'Jeem', zone: 'Tongue' as ArticulationZone, eng: 'Middle of tongue touching middle of palate', isolated: 'ج', beginning: 'جـ', middle: 'ـجـ', ending: 'ـج' },
  { num: 6, char: 'ح', name: 'Haa', pron: 'Haa', zone: 'Throat' as ArticulationZone, eng: 'Middle of throat with clear breath friction', isolated: 'ح', beginning: 'حـ', middle: 'ـحـ', ending: 'ـح' },
  { num: 7, char: 'خ', name: 'Khaa', pron: 'Khaa', zone: 'Throat' as ArticulationZone, eng: 'Top of throat near back of tongue (heavy sound)', isolated: 'خ', beginning: 'خـ', middle: 'ـخـ', ending: 'ـخ' },
  { num: 8, char: 'د', name: 'Daal', pron: 'Daal', zone: 'Tongue' as ArticulationZone, eng: 'Tip of tongue touching upper teeth roots softly', isolated: 'د', beginning: 'د', middle: 'ـد', ending: 'ـد' },
  { num: 9, char: 'ذ', name: 'Zhaal', pron: 'Zhaal', zone: 'Tongue' as ArticulationZone, eng: 'Tip of tongue touching upper teeth edges softly', isolated: 'ذ', beginning: 'ذ', middle: 'ـذ', ending: 'ـذ' },
  { num: 10, char: 'ر', name: 'Raa', pron: 'Raa', zone: 'Tongue' as ArticulationZone, eng: 'Tip of tongue touching palate near front teeth', isolated: 'ر', beginning: 'ر', middle: 'ـر', ending: 'ـر' },
  { num: 11, char: 'ز', name: 'Zay', pron: 'Zay', zone: 'Tongue' as ArticulationZone, eng: 'Tip of tongue near lower front teeth with buzz', isolated: 'ز', beginning: 'ز', middle: 'ـز', ending: 'ـز' },
  { num: 12, char: 'س', name: 'Seen', pron: 'Seen', zone: 'Tongue' as ArticulationZone, eng: 'Tip of tongue near lower front teeth with whistle', isolated: 'س', beginning: 'سـ', middle: 'ـسـ', ending: 'ـس' },
  { num: 13, char: 'ش', name: 'Sheen', pron: 'Sheen', zone: 'Tongue' as ArticulationZone, eng: 'Middle of tongue spreading sound across mouth', isolated: 'ش', beginning: 'شـ', middle: 'ـشـ', ending: 'ـش' },
  { num: 14, char: 'ص', name: 'Saad', pron: 'Saad', zone: 'Tongue' as ArticulationZone, eng: 'Heavy full-mouthed S sound from tongue tip', isolated: 'ص', beginning: 'صـ', middle: 'ـصـ', ending: 'ـص' },
  { num: 15, char: 'ض', name: 'Dhaad', pron: 'Dhaad', zone: 'Tongue' as ArticulationZone, eng: 'Side edge of tongue touching upper molars', isolated: 'ض', beginning: 'ضـ', middle: 'ـضـ', ending: 'ـض' },
  { num: 16, char: 'ط', name: 'Taa (Heavy)', pron: 'Taa', zone: 'Tongue' as ArticulationZone, eng: 'Heavy full-mouthed T sound from tongue tip', isolated: 'ط', beginning: 'طـ', middle: 'ـطـ', ending: 'ـط' },
  { num: 17, char: 'ظ', name: 'Zhaa', pron: 'Zhaa', zone: 'Tongue' as ArticulationZone, eng: 'Heavy TH sound with tip of tongue on teeth', isolated: 'ظ', beginning: 'ظـ', middle: 'ـظـ', ending: 'ـظ' },
  { num: 18, char: 'ع', name: 'Ain', pron: 'Ain', zone: 'Throat' as ArticulationZone, eng: 'Middle of throat deep guttural contraction sound', isolated: 'ع', beginning: 'عـ', middle: 'ـعـ', ending: 'ـع' },
  { num: 19, char: 'غ', name: 'Ghain', pron: 'Ghain', zone: 'Throat' as ArticulationZone, eng: 'Top of throat gargling sound', isolated: 'غ', beginning: 'غـ', middle: 'ـغـ', ending: 'ـغ' },
  { num: 20, char: 'ف', name: 'Faa', pron: 'Faa', zone: 'Lips' as ArticulationZone, eng: 'Edge of upper teeth touching inside lower lip', isolated: 'ف', beginning: 'فـ', middle: 'ـفـ', ending: 'ـف' },
  { num: 21, char: 'ق', name: 'Qaaf', pron: 'Qaaf', zone: 'Tongue' as ArticulationZone, eng: 'Deep back of tongue touching soft palate', isolated: 'ق', beginning: 'قـ', middle: 'ـقـ', ending: 'ـق' },
  { num: 22, char: 'ك', name: 'Kaaf', pron: 'Kaaf', zone: 'Tongue' as ArticulationZone, eng: 'Back of tongue touching hard palate', isolated: 'ك', beginning: 'كـ', middle: 'ـكـ', ending: 'ـك' },
  { num: 23, char: 'ل', name: 'Laam', pron: 'Laam', zone: 'Tongue' as ArticulationZone, eng: 'Side edge to tip of tongue touching palate', isolated: 'ل', beginning: 'لـ', middle: 'ـلـ', ending: 'ـل' },
  { num: 24, char: 'م', name: 'Meem', pron: 'Meem', zone: 'Lips' as ArticulationZone, eng: 'Closing both lips together with nasal resonance', isolated: 'م', beginning: 'مـ', middle: 'ـمـ', ending: 'ـم' },
  { num: 25, char: 'ن', name: 'Noon', pron: 'Noon', zone: 'Nasal' as ArticulationZone, eng: 'Tip of tongue touching upper gums with Ghunnah', isolated: 'ن', beginning: 'نـ', middle: 'ـنـ', ending: 'ـن' },
  { num: 26, char: 'ه', name: 'Haa (Light)', pron: 'Haa', zone: 'Throat' as ArticulationZone, eng: 'Bottom of throat light breath sound', isolated: 'ه', beginning: 'هـ', middle: 'ـهـ', ending: 'ـه' },
  { num: 27, char: 'و', name: 'Waw', pron: 'Waw', zone: 'Lips' as ArticulationZone, eng: 'Rounding both lips cleanly without contact', isolated: 'و', beginning: 'و', middle: 'ـو', ending: 'ـو' },
  { num: 28, char: 'ي', name: 'Yaa', pron: 'Yaa', zone: 'Tongue' as ArticulationZone, eng: 'Middle of tongue raised toward hard palate', isolated: 'ي', beginning: 'يـ', middle: 'ـيـ', ending: 'ـي' },
];


// Simple beginner-friendly words for each letter form
// position: 1=beginning (أول), 2=middle (وسط), 3=ending (آخر), 4=isolated/alone (منفصل)
// highlightChar: the exact letter character to color inside arabicWord
const LETTER_VOCAB: Record<number, Array<{
  position: number;
  arabicWord: string;
  highlightChar: string;
  transliteration: string;
  meaning: string;
}>> = {
  1: [ // Alif ا
    { position: 1, arabicWord: 'أَب',   highlightChar: 'أ', transliteration: 'Ab',    meaning: 'Father' },
    { position: 2, arabicWord: 'مَال',  highlightChar: 'ا', transliteration: 'Maal',  meaning: 'Wealth' },
    { position: 3, arabicWord: 'دَعَا', highlightChar: 'ا', transliteration: 'Da\'aa', meaning: 'He prayed' },
    { position: 4, arabicWord: 'ا',     highlightChar: 'ا', transliteration: 'Alif',  meaning: 'The letter' },
  ],
  2: [ // Baa ب
    { position: 1, arabicWord: 'بَيْت', highlightChar: 'ب', transliteration: 'Bayt',  meaning: 'House' },
    { position: 2, arabicWord: 'صَبْر', highlightChar: 'ب', transliteration: 'Sabr',  meaning: 'Patience' },
    { position: 3, arabicWord: 'كَلْب', highlightChar: 'ب', transliteration: 'Kalb',  meaning: 'Dog' },
    { position: 4, arabicWord: 'ب',     highlightChar: 'ب', transliteration: 'Baa',   meaning: 'The letter' },
  ],
  3: [ // Taa ت
    { position: 1, arabicWord: 'تَمْر', highlightChar: 'ت', transliteration: 'Tamr',  meaning: 'Dates' },
    { position: 2, arabicWord: 'فَتَحَ',highlightChar: 'ت', transliteration: 'Fataha',meaning: 'He opened' },
    { position: 3, arabicWord: 'بَيْت', highlightChar: 'ت', transliteration: 'Bayt',  meaning: 'House' },
    { position: 4, arabicWord: 'ت',     highlightChar: 'ت', transliteration: 'Taa',   meaning: 'The letter' },
  ],
  4: [ // Thaa ث
    { position: 1, arabicWord: 'ثَوْب',  highlightChar: 'ث', transliteration: 'Thawb',  meaning: 'Garment / Dress' },
    { position: 2, arabicWord: 'مَثَل',  highlightChar: 'ث', transliteration: 'Mathal', meaning: 'Example' },
    { position: 3, arabicWord: 'حَدِيث', highlightChar: 'ث', transliteration: 'Hadeeth',meaning: 'Speech / Hadith' },
    { position: 4, arabicWord: 'ث',     highlightChar: 'ث', transliteration: 'Thaa',   meaning: 'The letter' },
  ],
  5: [ // Jeem ج
    { position: 1, arabicWord: 'جَبَل', highlightChar: 'ج', transliteration: 'Jabal',  meaning: 'Mountain' },
    { position: 2, arabicWord: 'سَجَدَ',highlightChar: 'ج', transliteration: 'Sajada', meaning: 'Prostrated' },
    { position: 3, arabicWord: 'فَرَج', highlightChar: 'ج', transliteration: 'Faraj',  meaning: 'Relief' },
    { position: 4, arabicWord: 'ج',     highlightChar: 'ج', transliteration: 'Jeem',   meaning: 'The letter' },
  ],
  6: [ // Haa ح
    { position: 1, arabicWord: 'حَمْد', highlightChar: 'ح', transliteration: 'Hamd',   meaning: 'Praise' },
    { position: 2, arabicWord: 'رَحِيم',highlightChar: 'ح', transliteration: 'Raheem', meaning: 'Merciful' },
    { position: 3, arabicWord: 'فَلَاح',highlightChar: 'ح', transliteration: 'Falaah', meaning: 'Success' },
    { position: 4, arabicWord: 'ح',     highlightChar: 'ح', transliteration: 'Haa',    meaning: 'The letter' },
  ],
  7: [ // Khaa خ
    { position: 1, arabicWord: 'خَيْر', highlightChar: 'خ', transliteration: 'Khayr',  meaning: 'Good' },
    { position: 2, arabicWord: 'دَخَلَ',highlightChar: 'خ', transliteration: 'Dakhala',meaning: 'He entered' },
    { position: 3, arabicWord: 'شَيْخ', highlightChar: 'خ', transliteration: 'Shaykh', meaning: 'Elder' },
    { position: 4, arabicWord: 'خ',     highlightChar: 'خ', transliteration: 'Khaa',   meaning: 'The letter' },
  ],
  8: [ // Daal د
    { position: 1, arabicWord: 'دَرْس', highlightChar: 'د', transliteration: 'Dars',   meaning: 'Lesson' },
    { position: 2, arabicWord: 'أَدَب', highlightChar: 'د', transliteration: 'Adab',   meaning: 'Manners' },
    { position: 3, arabicWord: 'وَلَد', highlightChar: 'د', transliteration: 'Walad',  meaning: 'Child' },
    { position: 4, arabicWord: 'د',     highlightChar: 'د', transliteration: 'Daal',   meaning: 'The letter' },
  ],
  9: [ // Zhaal ذ
    { position: 1, arabicWord: 'ذَهَب', highlightChar: 'ذ', transliteration: 'Dhahab', meaning: 'Gold' },
    { position: 2, arabicWord: 'إِذَا', highlightChar: 'ذ', transliteration: 'Idha',   meaning: 'When / If' },
    { position: 3, arabicWord: 'أَخَذَ',highlightChar: 'ذ', transliteration: 'Akhadha',meaning: 'He took' },
    { position: 4, arabicWord: 'ذ',     highlightChar: 'ذ', transliteration: 'Zhaal',  meaning: 'The letter' },
  ],
  10: [ // Raa ر
    { position: 1, arabicWord: 'رَجُل', highlightChar: 'ر', transliteration: 'Rajul',  meaning: 'Man' },
    { position: 2, arabicWord: 'مَرَض', highlightChar: 'ر', transliteration: 'Maradh', meaning: 'Illness' },
    { position: 3, arabicWord: 'قَمَر', highlightChar: 'ر', transliteration: 'Qamar',  meaning: 'Moon' },
    { position: 4, arabicWord: 'ر',     highlightChar: 'ر', transliteration: 'Raa',    meaning: 'The letter' },
  ],
  11: [ // Zay ز
    { position: 1, arabicWord: 'زَيْت', highlightChar: 'ز', transliteration: 'Zayt',   meaning: 'Olive oil' },
    { position: 2, arabicWord: 'مِيزَان',highlightChar:'ز', transliteration: 'Mizaan', meaning: 'Scale' },
    { position: 3, arabicWord: 'خَبَزَ',highlightChar: 'ز', transliteration: 'Khabaza',meaning: 'Baked' },
    { position: 4, arabicWord: 'ز',     highlightChar: 'ز', transliteration: 'Zay',    meaning: 'The letter' },
  ],
  12: [ // Seen س
    { position: 1, arabicWord: 'سَمَاء',highlightChar: 'س', transliteration: 'Samaa',  meaning: 'Sky' },
    { position: 2, arabicWord: 'مَسْجِد',highlightChar:'س', transliteration: 'Masjid', meaning: 'Mosque' },
    { position: 3, arabicWord: 'نَفْس', highlightChar: 'س', transliteration: 'Nafs',   meaning: 'Soul' },
    { position: 4, arabicWord: 'س',     highlightChar: 'س', transliteration: 'Seen',   meaning: 'The letter' },
  ],
  13: [ // Sheen ش
    { position: 1, arabicWord: 'شَمْس', highlightChar: 'ش', transliteration: 'Shams',  meaning: 'Sun' },
    { position: 2, arabicWord: 'مَشَى', highlightChar: 'ش', transliteration: 'Masha',  meaning: 'He walked' },
    { position: 3, arabicWord: 'عَرْش', highlightChar: 'ش', transliteration: 'Arsh',   meaning: 'Throne' },
    { position: 4, arabicWord: 'ش',     highlightChar: 'ش', transliteration: 'Sheen',  meaning: 'The letter' },
  ],
  14: [ // Saad ص
    { position: 1, arabicWord: 'صَبْر', highlightChar: 'ص', transliteration: 'Sabr',   meaning: 'Patience' },
    { position: 2, arabicWord: 'أَصْل', highlightChar: 'ص', transliteration: 'Asl',    meaning: 'Origin' },
    { position: 3, arabicWord: 'خَلَصَ',highlightChar: 'ص', transliteration: 'Khalasa',meaning: 'Saved / Done' },
    { position: 4, arabicWord: 'ص',     highlightChar: 'ص', transliteration: 'Saad',   meaning: 'The letter' },
  ],
  15: [ // Dhaad ض
    { position: 1, arabicWord: 'ضَوْء', highlightChar: 'ض', transliteration: 'Dhaw\'', meaning: 'Light' },
    { position: 2, arabicWord: 'رِضَا', highlightChar: 'ض', transliteration: 'Ridha',  meaning: 'Contentment' },
    { position: 3, arabicWord: 'أَرْض', highlightChar: 'ض', transliteration: 'Ardh',   meaning: 'Earth' },
    { position: 4, arabicWord: 'ض',     highlightChar: 'ض', transliteration: 'Dhaad',  meaning: 'The letter' },
  ],
  16: [ // Taa Heavy ط
    { position: 1, arabicWord: 'طِفْل', highlightChar: 'ط', transliteration: 'Tifl',   meaning: 'Child' },
    { position: 2, arabicWord: 'مَطَر', highlightChar: 'ط', transliteration: 'Matar',  meaning: 'Rain' },
    { position: 3, arabicWord: 'فَقَط', highlightChar: 'ط', transliteration: 'Faqat',  meaning: 'Only' },
    { position: 4, arabicWord: 'ط',     highlightChar: 'ط', transliteration: 'Taa',    meaning: 'The letter' },
  ],
  17: [ // Zhaa ظ
    { position: 1, arabicWord: 'ظُلْم', highlightChar: 'ظ', transliteration: 'Dhulm',  meaning: 'Darkness' },
    { position: 2, arabicWord: 'عَظِيم',highlightChar: 'ظ', transliteration: 'Adheem', meaning: 'Great' },
    { position: 3, arabicWord: 'حَفِظَ',highlightChar: 'ظ', transliteration: 'Hafidha',meaning: 'He memorized' },
    { position: 4, arabicWord: 'ظ',     highlightChar: 'ظ', transliteration: 'Zhaa',   meaning: 'The letter' },
  ],
  18: [ // Ain ع
    { position: 1, arabicWord: 'عِلْم', highlightChar: 'ع', transliteration: 'Ilm',    meaning: 'Knowledge' },
    { position: 2, arabicWord: 'فَعَلَ',highlightChar: 'ع', transliteration: 'Fa\'ala', meaning: 'He did' },
    { position: 3, arabicWord: 'سَمِعَ',highlightChar: 'ع', transliteration: 'Sami\'a', meaning: 'He heard' },
    { position: 4, arabicWord: 'ع',     highlightChar: 'ع', transliteration: 'Ain',    meaning: 'The letter' },
  ],
  19: [ // Ghain غ
    { position: 1, arabicWord: 'غَيْب', highlightChar: 'غ', transliteration: 'Ghayb',  meaning: 'Unseen' },
    { position: 2, arabicWord: 'مَغْرِب',highlightChar:'غ', transliteration: 'Maghrib',meaning: 'Sunset' },
    { position: 3, arabicWord: 'بَلَغَ',highlightChar: 'غ', transliteration: 'Balagha',meaning: 'He reached' },
    { position: 4, arabicWord: 'غ',     highlightChar: 'غ', transliteration: 'Ghain',  meaning: 'The letter' },
  ],
  20: [ // Faa ف
    { position: 1, arabicWord: 'فَرَح', highlightChar: 'ف', transliteration: 'Farah',  meaning: 'Joy' },
    { position: 2, arabicWord: 'سَفَر', highlightChar: 'ف', transliteration: 'Safar',  meaning: 'Journey' },
    { position: 3, arabicWord: 'شَرَف', highlightChar: 'ف', transliteration: 'Sharaf', meaning: 'Honor' },
    { position: 4, arabicWord: 'ف',     highlightChar: 'ف', transliteration: 'Faa',    meaning: 'The letter' },
  ],
  21: [ // Qaaf ق
    { position: 1, arabicWord: 'قَلَم', highlightChar: 'ق', transliteration: 'Qalam',  meaning: 'Pen' },
    { position: 2, arabicWord: 'عَقْل', highlightChar: 'ق', transliteration: 'Aql',    meaning: 'Mind' },
    { position: 3, arabicWord: 'سُوق', highlightChar: 'ق', transliteration: 'Souq',   meaning: 'Market' },
    { position: 4, arabicWord: 'ق',     highlightChar: 'ق', transliteration: 'Qaaf',   meaning: 'The letter' },
  ],
  22: [ // Kaaf ك
    { position: 1, arabicWord: 'كِتَاب',highlightChar: 'ك', transliteration: 'Kitaab', meaning: 'Book' },
    { position: 2, arabicWord: 'شُكْر', highlightChar: 'ك', transliteration: 'Shukr',  meaning: 'Gratitude' },
    { position: 3, arabicWord: 'مَلَك', highlightChar: 'ك', transliteration: 'Malak',  meaning: 'Angel' },
    { position: 4, arabicWord: 'ك',     highlightChar: 'ك', transliteration: 'Kaaf',   meaning: 'The letter' },
  ],
  23: [ // Laam ل
    { position: 1, arabicWord: 'لَيْل', highlightChar: 'ل', transliteration: 'Layl',   meaning: 'Night' },
    { position: 2, arabicWord: 'عِلْم', highlightChar: 'ل', transliteration: 'Ilm',    meaning: 'Knowledge' },
    { position: 3, arabicWord: 'جَبَل', highlightChar: 'ل', transliteration: 'Jabal',  meaning: 'Mountain' },
    { position: 4, arabicWord: 'ل',     highlightChar: 'ل', transliteration: 'Laam',   meaning: 'The letter' },
  ],
  24: [ // Meem م
    { position: 1, arabicWord: 'مَاء',  highlightChar: 'م', transliteration: 'Maa\'',   meaning: 'Water' },
    { position: 2, arabicWord: 'شَمْس', highlightChar: 'م', transliteration: 'Shams',  meaning: 'Sun' },
    { position: 3, arabicWord: 'يَوْم', highlightChar: 'م', transliteration: 'Yawm',   meaning: 'Day' },
    { position: 4, arabicWord: 'م',     highlightChar: 'م', transliteration: 'Meem',   meaning: 'The letter' },
  ],
  25: [ // Noon ن
    { position: 1, arabicWord: 'نُور',  highlightChar: 'ن', transliteration: 'Noor',   meaning: 'Light' },
    { position: 2, arabicWord: 'كَنْز', highlightChar: 'ن', transliteration: 'Kanz',   meaning: 'Treasure' },
    { position: 3, arabicWord: 'دِين',  highlightChar: 'ن', transliteration: 'Deen',   meaning: 'Way of Life' },
    { position: 4, arabicWord: 'ن',     highlightChar: 'ن', transliteration: 'Noon',   meaning: 'The letter' },
  ],
  26: [ // Haa Light ه
    { position: 1, arabicWord: 'هُدَى', highlightChar: 'ه', transliteration: 'Huda',   meaning: 'Guidance' },
    { position: 2, arabicWord: 'شَهْر', highlightChar: 'ه', transliteration: 'Shahr',  meaning: 'Month' },
    { position: 3, arabicWord: 'وَجْه', highlightChar: 'ه', transliteration: 'Wajh',   meaning: 'Face' },
    { position: 4, arabicWord: 'ه',     highlightChar: 'ه', transliteration: 'Haa',    meaning: 'The letter' },
  ],
  27: [ // Waw و
    { position: 1, arabicWord: 'وَلَد', highlightChar: 'و', transliteration: 'Walad',  meaning: 'Child' },
    { position: 2, arabicWord: 'نُور',  highlightChar: 'و', transliteration: 'Noor',   meaning: 'Light' },
    { position: 3, arabicWord: 'عَفْو', highlightChar: 'و', transliteration: 'Afw',    meaning: 'Pardon' },
    { position: 4, arabicWord: 'و',     highlightChar: 'و', transliteration: 'Waw',    meaning: 'The letter' },
  ],
  28: [ // Yaa ي
    { position: 1, arabicWord: 'يَوْم', highlightChar: 'ي', transliteration: 'Yawm',   meaning: 'Day' },
    { position: 2, arabicWord: 'بَيْت', highlightChar: 'ي', transliteration: 'Bayt',   meaning: 'House' },
    { position: 3, arabicWord: 'كُرْسِي',highlightChar:'ي', transliteration: 'Kursi',  meaning: 'Chair' },
    { position: 4, arabicWord: 'ي',     highlightChar: 'ي', transliteration: 'Yaa',    meaning: 'The letter' },
  ],
};

export const INITIAL_LESSONS: LessonData[] = ARABIC_LETTERS_RAW.map((item) => {
  const isCompleted = item.num <= 3;
  const vocabRaw = LETTER_VOCAB[item.num] || [
    { position: 4, arabicWord: item.char, highlightChar: item.char, transliteration: item.pron, meaning: 'The letter' },
    { position: 1, arabicWord: `${item.char}َالِم`, highlightChar: item.char, transliteration: `${item.pron}alim`, meaning: 'Example Word' },
  ];

  return {
    id: `lesson-${item.num}`,
    lessonNumber: item.num,
    arabicLetter: item.char,
    name: item.name,
    pronunciation: item.pron,
    englishDescription: item.eng,
    hinglishDescription: `${item.pron} jaise ${item.name} ka awaaz`,
    urduDescription: `حرف ${item.char}`,
    forms: {
      isolated: item.isolated,
      beginning: item.beginning,
      middle: item.middle,
      ending: item.ending,
    },
    makhraj: {
      name: FULL_MAKHRAJ_DATABASE[item.num]?.name || `Makhraj ${item.name}`,
      arabicName: FULL_MAKHRAJ_DATABASE[item.num]?.arabicName,
      zone: FULL_MAKHRAJ_DATABASE[item.num]?.zone || item.zone,
      simpleExplanation: FULL_MAKHRAJ_DATABASE[item.num]?.simpleExplanation || item.eng,
      teacherExplanation: FULL_MAKHRAJ_DATABASE[item.num]?.teacherExplanation || `Makhraj rule for ${item.name} (${item.char}).`,
      step1: FULL_MAKHRAJ_DATABASE[item.num]?.step1 || 'Position your articulation point correctly.',
      step1Label: FULL_MAKHRAJ_DATABASE[item.num]?.step1Label || 'Position Articulation Point',
      step2: FULL_MAKHRAJ_DATABASE[item.num]?.step2 || `Pronounce clearly with audio guide "${item.pron}".`,
      step2Label: FULL_MAKHRAJ_DATABASE[item.num]?.step2Label || `Say "${item.pron}"`,
      keyRule: FULL_MAKHRAJ_DATABASE[item.num]?.keyRule || 'Pronounce with correct Tajweed rules.',
      illustrationUrl: FULL_MAKHRAJ_DATABASE[item.num]?.makhrajSvg || SAMPLE_IMAGES.makhrajDefault,
      step1IllustrationUrl: FULL_MAKHRAJ_DATABASE[item.num]?.step1Svg || SAMPLE_IMAGES.step1Mouth,
      step2IllustrationUrl: FULL_MAKHRAJ_DATABASE[item.num]?.step2Svg || SAMPLE_IMAGES.step2Mouth,
    },
    vocabulary: vocabRaw.map((v, i) => ({
      id: `v-${item.num}-${i + 1}`,
      position: v.position,
      arabicWord: v.arabicWord,
      highlightChar: v.highlightChar,
      transliteration: v.transliteration,
      meaning: v.meaning,
      imageUrl: SAMPLE_IMAGES.genericObj,
    })),
    practice: {
      sayText: `Say the sound: ${item.char}َ  ${item.char}ُ  ${item.char}ِ`,
      writeText: `Write the forms: ${item.isolated}  ${item.beginning}  ${item.middle}  ${item.ending}`,
      joinText: `Join with Alif: ${item.char} + ا = ${item.char}ا`,
      readText: `Read and repeat: ${item.char}َا  ${item.char}ِي  ${item.char}ُو`,
      findLetterText: `Identify '${item.char}' among similar looking Arabic letters.`,
    },
    teacherNotes: {
      commonMistakes: item.num === 3
        ? [
            'Mixing light Taa (ت) with heavy Taa (ط)',
            'Adding excessive breath so it sounds like English "S"',
            'Pressing tongue against lower teeth instead of upper roots',
          ]
        : [`Mixing ${item.name} with adjacent articulation points.`],
      tajweedAttributes: item.num === 3
        ? ['Hams (Friction of breath)', 'Istifal (Lowering tongue)', 'Infitah (Opening mouth)']
        : ['Hams', 'Istifal'],
      pedagogyTip: item.num === 3
        ? 'Ask the student to put a finger in front of their mouth to feel a light puff of air when pronouncing Taa.'
        : `Demonstrate the ${item.zone} position in slow motion for students.`,
    },
    isCompleted,
  };
});