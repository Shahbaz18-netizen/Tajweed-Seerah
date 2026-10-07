/**
 * Tajweed Audio Helper
 * Audio playback is temporarily muted per user request until custom audio pack is loaded.
 */

export type ReciterOption = 'husary_muallim' | 'alafasy' | 'minshawi' | 'custom_local';

let selectedReciter: ReciterOption = 'husary_muallim';

export const setReciter = (reciter: ReciterOption) => {
  selectedReciter = reciter;
};

export const getReciter = (): ReciterOption => selectedReciter;

export const QARI_CDNS: Record<ReciterOption, string> = {
  husary_muallim: 'https://everyayah.com/data/Husary_Muallim_128kbps/',
  alafasy: 'https://everyayah.com/data/Alafasy_128kbps/',
  minshawi: 'https://everyayah.com/data/Minshawy_Teacher_128kbps/',
  custom_local: '/audio/qaida/',
};

export const ARABIC_LETTER_NAMES: Record<string, string> = {
  'ا': 'أَلِف',
  'أ': 'أَلِف',
  'ب': 'بَاء',
  'ت': 'تَاء',
  'ث': 'ثَاء',
  'ج': 'جِيم',
  'ح': 'حَاء',
  'خ': 'خَاء',
  'د': 'دَال',
  'ذ': 'ذَال',
  'ر': 'رَاء',
  'ز': 'زَاي',
  'س': 'سِين',
  'ش': 'شِين',
  'ص': 'صَاد',
  'ض': 'ضَاد',
  'ط': 'طَاء',
  'ظ': 'ظَاء',
  'ع': 'عَيْن',
  'غ': 'غَيْن',
  'ف': 'فَاء',
  'ق': 'قَاف',
  'ك': 'كَاف',
  'ل': 'لاَم',
  'م': 'مِيم',
  'ن': 'نُون',
  'ه': 'هَاء',
  'و': 'وَاو',
  'ي': 'يَاء',
  'ء': 'هَمْزَة',
};

export const stopAudio = () => {};

/**
 * Disabled playArabicAudio (Muted per user request)
 */
export const playArabicAudio = (_text?: string, _customAudioPath?: string) => {
  // Audio muted until custom audio pack is added
};
