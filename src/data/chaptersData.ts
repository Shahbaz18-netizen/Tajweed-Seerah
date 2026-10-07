export interface ChapterData {
  id: string;
  number: number;
  title: string;
  arabicTitle: string;
  subtitle: string;
  description: string;
  iconName: string;
  gradient: string;
  accentColor: string;
  totalLessons: number;
  badge: string;
  milestoneReward: string;
  prerequisiteChapter?: number;
  topics: Array<{
    title: string;
    description: string;
    arabicExample?: string;
  }>;
}

export const QURAN_CURRICULUM_CHAPTERS: ChapterData[] = [
  {
    id: 'ch-1',
    number: 1,
    title: 'The 28 Alphabet Letters & 17 Makharij',
    arabicTitle: 'الدرس الأول: الحروف الهجائية المفردة والمخارج الـ١٧',
    subtitle: 'Al-Hira Neo-Noorani Qaida • Lesson 1 (Mufradaat)',
    description: 'Learn to identify all 29 individual letters, their 17 anatomical mouth/throat articulation points (Makharij), and Heavy (Musta\'aliyah 7) vs Light letters.',
    iconName: 'Alphabet',
    gradient: 'from-amber-600 to-amber-800',
    accentColor: '#D97706',
    totalLessons: 28,
    badge: 'Alphabet Master',
    milestoneReward: '🥉 Throat & Lips Novice Badge + Full Alphabet Certificate',
    topics: [
      { title: 'The 29 Independent Letters (Mufradaat)', description: 'Visual recognition and correct naming from Alif to Yaa', arabicExample: 'ا ب ت ث ج ح خ...' },
      { title: 'The 17 Specific Makharij Points', description: '5 major anatomical areas: Throat (3), Tongue (10), Lips (2), Nose, Oral Space', arabicExample: 'الحلق، اللسان، الشفتان' },
      { title: 'Characteristics of Letters (Mufradaat)', description: 'Heavy (Musta\'aliyah: خ ص ض ط ظ غ ق), Partial (ا ل ر), Light (Mustafilah)', arabicExample: 'خُصَّ ضَغْطٍ قِظْ' },
      { title: 'Grouping by Similar Articulation Sounds', description: 'Distinguishing look-alike & sound-alike pairs (ت ط, ث س ص, ح هـ, خ ق)', arabicExample: 'ت ط | ث س ص' },
    ],
  },
  {
    id: 'ch-2',
    number: 2,
    title: 'The Harakat (Short Vowels: Fatha, Kasrah, Dhamma)',
    arabicTitle: 'الدرس الثالث: الحركات (الفتحة والكسرة والضمة)',
    subtitle: 'Al-Hira Neo-Noorani Qaida • Lesson 3 (Harakaat)',
    description: 'Master the three fundamental vowel strokes read with the shortest spell (NEVER elongated): Fatha (A), Kasrah (I), and Dhamma (U).',
    iconName: 'Vowels',
    gradient: 'from-rose-600 to-rose-800',
    accentColor: '#E11D48',
    totalLessons: 4,
    badge: 'Harakat Master',
    milestoneReward: '🥈 Short Vowel Fluent Badge',
    prerequisiteChapter: 1,
    topics: [
      { title: 'Fatha (Zabar ـَ) - Open "A" Vowel', description: 'Shortest spell with ascending sound. Alif with Fatha becomes Hamzah!', arabicExample: 'بَ  تَ  ثَ  |  دَرَسَ، نَزَلَ، طَبَعَ' },
      { title: 'Kasrah (Zer ـِ) - Lower "I" Vowel', description: 'Shortest spell with descending sound by dropping lower jaw gently', arabicExample: 'بِ  تِ  ثِ  |  رَدِفَ، حَمِدَ، شَهِدَ' },
      { title: 'Dhamma (Pesh ـُ) - Rounded "U" Vowel', description: 'Shortest spell in forward pattern with rounded lips', arabicExample: 'بُ  تُ  ثُ  |  رُسُلُ، سُدُسُ، فُقِدَ' },
      { title: 'Ijra-e-Qawa\'id (Dictation Analysis)', description: 'Analyzing each word\'s Harakat rules without premature Tanween', arabicExample: 'دَرَسَ: دَ Fatha, رَ Fatha, سَ Fatha' },
    ],
  },
  {
    id: 'ch-3',
    number: 3,
    title: 'Letter Joining & Word Building (Murakkabaat)',
    arabicTitle: 'الدرس الثاني: المُرَكَّبَات (تكوين الكلمات)',
    subtitle: 'Al-Hira Neo-Noorani Qaida • Lesson 2 (Murakkabaat)',
    description: 'Learn how cursive Arabic script clubs two or more letters into Murakkabaat across 4 shapes: Isolated (Alaahida), Beginning (Ibtidayi), Middle (Darmiyani), and End (Aakhri).',
    iconName: 'Puzzle',
    gradient: 'from-sky-600 to-sky-800',
    accentColor: '#0284C7',
    totalLessons: 4,
    badge: 'Word Builder',
    milestoneReward: '🧩 Syllable Connector Badge',
    prerequisiteChapter: 2,
    topics: [
      { title: '4 Positional Shapes (Alaahida, Ibtidayi, Darmiyani, Aakhri)', description: 'Understanding head shapes & connection tails across all letters', arabicExample: 'بـ  ـتـ  ـث' },
      { title: 'Compound Murakkabaat Syllables', description: 'Reading smooth 2-letter & 3-letter open words with Harakat', arabicExample: 'كَتَبَ، دَخَلَ، سَجَدَ' },
      { title: 'Non-Connecting Letters Rule', description: '6 letters that never join to the left (ا د ذ ر ز و)', arabicExample: 'دَارَ، وَجَدَ، رَزَقَ' },
      { title: 'Noorani Tahjiya (Letter-by-Letter Spelling)', description: 'Traditional Tahjiya method: Spell letter name + vowel stroke before blending', arabicExample: 'كـَ (Kaaf Fatha) - تـَ (Taa Fatha) ➔ Kataba' },
    ],
  },
  {
    id: 'ch-4',
    number: 4,
    title: 'Tanween (Double Vowels - Noun Endings)',
    arabicTitle: 'الدرس السابع: التنوين (فتحتان وكسرتان وضمتان)',
    subtitle: 'Al-Hira Neo-Noorani Qaida • Lesson 7 (Tanween)',
    description: 'Master double vowel marks that add a hidden "N" sound to word endings: Fathatain (-an), Kasratain (-in), and Dhammatain (-un).',
    iconName: 'PauseCircle',
    gradient: 'from-emerald-600 to-emerald-800',
    accentColor: '#059669',
    totalLessons: 4,
    badge: 'Tanween Master',
    milestoneReward: '🎯 Tanween Noun Endings Badge',
    prerequisiteChapter: 3,
    topics: [
      { title: 'Fathatain (Double Zabar ـً) — "-an" Sound', description: 'Double Fatha creating "-an" sound with extra standing Alif', arabicExample: 'أَبَدًا، عَمَلًا، شُكْرًا' },
      { title: 'Kasratain (Double Zer ـٍ) — "-in" Sound', description: 'Double Kasrah beneath the letter creating "-in" sound', arabicExample: 'كُتُبٍ، قَمَرٍ، لَهَبٍ' },
      { title: 'Dhammatain (Double Pesh ـٌ) — "-un" Sound', description: 'Double Dhamma on top creating "-un" sound', arabicExample: 'رَجُلٌ، قَلَمٌ، مَلَكٌ' },
      { title: 'Tanween Dictation Exercises', description: 'Reading complete noun words combining Harakat and Tanween', arabicExample: 'كِتَابٌ، وَلَدٌ، عَمَلًا' },
    ],
  },
  {
    id: 'ch-5',
    number: 5,
    title: 'Sukoon (Saakin) & Qalqalah Bouncing',
    arabicTitle: 'الدرس الرابع: السكون والجزم والقلقلة',
    subtitle: 'Al-Hira Neo-Noorani Qaida • Lesson 4 (Sukoon)',
    description: 'Learn to rest on silent consonants with Sukoon (Saakin ـْ), master Hamzah-Saakinah twitch effect (Jhatka), and activate the 5 Qalqalah bouncing letters.',
    iconName: 'Zap',
    gradient: 'from-purple-600 to-purple-800',
    accentColor: '#7C3AED',
    totalLessons: 4,
    badge: 'Sukun & Qalqalah Master',
    milestoneReward: '⚡ Qalqalah Bouncing Echo Trophy',
    prerequisiteChapter: 4,
    topics: [
      { title: 'Sukoon / Jazm (ـْ) - Silent Saakin Rest', description: 'Resting on a consonant clubbed with the preceding active letter', arabicExample: 'أَبْ، مَنْ، هَلْ، قُلْ' },
      { title: 'Hamzah-Saakinah Jerk Effect (Jhatka)', description: 'Hamzah-Saakinah (أْ إْ ؤْ ئْ) pronounced with a sharp twitch effect!', arabicExample: 'تَأْتِ، يَأْكُلُ، يُؤْمِنُونَ' },
      { title: 'The 5 Qalqalah Letters (قُطْبُ جَدٍّ)', description: 'Echoing bouncing release on (ق ط ب ج د) when silent', arabicExample: 'أَقْ، أَطْ، أَبْ، أَجْ، أَدْ' },
      { title: 'Qalqalah at End of Verses', description: 'Bouncing Qalqalah letters when stopping at verse ends', arabicExample: 'فَلَقْ، أَحَدْ، كَسَبْ' },
    ],
  },
  {
    id: 'ch-6',
    number: 6,
    title: 'Maddah Letters, Standing Vowels & Leen',
    arabicTitle: 'الدرس الخامس والسادس: حروف المد واللين والألف الصغيرة',
    subtitle: 'Al-Hira Neo-Noorani Qaida • Lessons 5 & 6 (Madd & Leen)',
    description: 'Learn Maddah letters (ا و ي), Standing Vowels (Alif-Sageera Khada-Zabar, Khadi-Zer, Ulta-Pesh), Leen soft diphthongs (Waaw-Leen, Yaa-Leen), and Long Madd (~ ۤ).',
    iconName: 'Waves',
    gradient: 'from-orange-600 to-orange-800',
    accentColor: '#EA580C',
    totalLessons: 4,
    badge: 'Madd Maestro',
    milestoneReward: '🌊 Melodic Cadence Award',
    prerequisiteChapter: 5,
    topics: [
      { title: 'Natural Maddah Letters (2 Counts)', description: 'Alif after Fatha (ـَا), Waaw after Dhamma (ـُو), Yaa after Kasrah (ـِي)', arabicExample: 'قَالَ، يَقُولُ، قِيلَ' },
      { title: 'Standing Vowels (Khada-Zabar / Zer / Ulta-Pesh)', description: 'Superscript mini vowels (ـٰ ـٖ ـۥ) held for 2 full counts like Maddah', arabicExample: 'هٰذَا، إِيلٰفِهِمْ، لَهُۥ' },
      { title: 'Leen Letters (Waaw-Leen & Yaa-Leen)', description: 'Waaw and Yaa saakin preceded by Fatha read with swift soft sound', arabicExample: 'خَوْف، صَيْف، بَيْت' },
      { title: 'Long Madd (Muttasil, Munfasil, Laazim - 4-5 Counts)', description: 'Madd followed by Hamzah, Sukoon, or Tashdeed (~ ۤ)', arabicExample: 'جَآءَ، السَّمَآء، وَلَا الضَّآلِّينَ' },
    ],
  },
  {
    id: 'ch-7',
    number: 7,
    title: 'Tashdeed, Ghunnah & Rule of "Allah"',
    arabicTitle: 'الدرس الثامن: التشديد والغنة ولفظ الجلالة',
    subtitle: 'Al-Hira Neo-Noorani Qaida • Lesson 8 (Tashdeed)',
    description: 'Pronounce emphasized doubled consonants (Tashdeed ـّ), sustain 2-count nasal Ghunnah on نّ & مّ, and master heavy vs light Laam-e-Jalalah (the word "Allah").',
    iconName: 'Scale',
    gradient: 'from-indigo-600 to-indigo-800',
    accentColor: '#4F46E5',
    totalLessons: 3,
    badge: 'Tashdeed Expert',
    milestoneReward: '⚡ Energy & Emphasis Trophy',
    prerequisiteChapter: 6,
    topics: [
      { title: 'The Tashdeed Mark (ـّ)', description: 'First letter silent (Sukoon), second letter active with vowel', arabicExample: 'رَبّ = رَبْ + بَ' },
      { title: 'Ghunnah on Noon & Meem (نّ / مّ)', description: 'Holding resonant nasal hum inside nose for 1 Alif duration', arabicExample: 'إِنَّ، عَمَّ، ثُمَّ' },
      { title: 'Laam-e-Jalalah Rule (Pronouncing "Allah")', description: 'Heavy (Mota) after Fatha/Dhamma (قَالَ اللَّهُ) vs Light (Bareek) after Kasrah (بِسْمِ اللَّهِ)', arabicExample: 'قَالَ اللَّهُ | بِسْمِ اللَّهِ' },
    ],
  },
  {
    id: 'ch-8',
    number: 8,
    title: 'Core Tajweed Rules, Waqf & Full Surahs',
    arabicTitle: 'الدرس الثاني عشر والأخير: أحكام النون والميم والوقف والرا',
    subtitle: 'Al-Hira Neo-Noorani Qaida • Lessons 10-18 (Complete Recitation)',
    description: 'Master the 4 Rules of Tanween & Noon-Saakin (Izhaar, Idghaam, Iqlaab, Ikhfaa), Meem-Saakin rules, Rules for Raa (Heavy/Light), Waqf stopping signs, and Surah Al-Fatiha.',
    iconName: 'Crown',
    gradient: 'from-burgundy-900 to-[#4A0404]',
    accentColor: '#781528',
    totalLessons: 5,
    badge: 'Qur\'an Graduate',
    milestoneReward: '🏆 Official Qur\'an Reading Graduate Certificate',
    prerequisiteChapter: 7,
    topics: [
      { title: '4 Rules of Tanween & Noon-Saakin', description: 'Izhaar (Clear), Idghaam ma\'al/bila-Ghunna, Iqlaab (to Meem), Ikhfaa (Conceal)', arabicExample: 'مَنْ ءَامَنَ، مَن يَقُولُ، مِن بَعْدِ، مِن كُلِّ' },
      { title: '3 Rules of Meem-Saakin', description: 'Idghaam-e-Shafawi (into م), Ikhfaa-e-Shafawi (before ب), Izhaar-e-Shafawi', arabicExample: 'تَرْمِيهِم بِحِجَارَةٍ، لَهُم مَّا' },
      { title: 'Rules for Raa (Heavy vs Light Raa)', description: 'Heavy Raa (رَ, رُ, قُرْآن) vs Light Raa (رِ, فِرْعَوْن)', arabicExample: 'قُرْآن | فِرْعَوْن' },
      { title: 'Signs of Waqf (Stopping Rules)', description: 'Rules for (م، ط، ج، ص، ز، ق، قف، س/سکته، لا) and Ta Marbutah (ة ➔ هـ)', arabicExample: 'الرَّحْمٰنِ الرَّحِيمِ ➔ الرَّحِيمْ' },
      { title: 'Full Study: Surah Al-Fatiha & Al-Ikhlas', description: 'Recite complete Surahs with color-coded Tajweed rules!', arabicExample: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' },
    ],
  },
];
