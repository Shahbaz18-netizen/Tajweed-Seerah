export type LanguageOption = 'english' | 'hinglish' | 'urdu';

export interface TrilingualText {
  english: string;
  hinglish: string;
  urdu: string;
}

export const APP_TRANSLATIONS = {
  // General UI Labels
  languageName: {
    english: 'English',
    hinglish: 'Hinglish (Roman)',
    urdu: 'اردو (Urdu)',
  },
  
  duaTitle: {
    english: 'Al-Hira Neo-Noorani Qaida Opening Supplication',
    hinglish: 'Noorani Qaida Sabaq Shuru Karne Ki Dua',
    urdu: 'سبق شروع کرنے کی مسنون دعائے تيسير',
  },
  duaTranslation: {
    english: '"O my Lord, make this task easy and do not make it difficult for me... O Lord, increase my knowledge."',
    hinglish: '"Aye mere Rab! Is kaam ko aasan farma aur mushkil na kar... Aye mere Rab! Mere ilm mein izaafa farma."',
    urdu: '"اے میرے رب! اس کام کو آسان فرما اور مشکل نہ کر... اے میرے رب! میرے علم میں اضافہ فرما۔"',
  },

  // Color Coding Key Labels
  tajweedLegendTitle: {
    english: 'Tajweed Color-Coding Key (Al-Hira Standard)',
    hinglish: 'Tajweed Colors Pehchan (Noorani Standard)',
    urdu: 'تجویـد کلر کوڈنگ گائیڈ (نورانی قاعدہ)',
  },
  maddLabel: {
    english: '🔴 Madd (Elongation 2, 4, 6 counts)',
    hinglish: '🔴 Madd (Awaz ko khinchna 2, 4, 6 counts)',
    urdu: '🔴 مد (لمبا کرنا ۲، ۴، ۶ ماپ)',
  },
  ghunnahLabel: {
    english: '🟢 Ghunnah & Ikhfa (Nasal Hum)',
    hinglish: '🟢 Ghunnah & Ikhfa (Naak me gunjne wali awaz)',
    urdu: '🟢 غنہ و اخفاء (ناک میں گونجنے والی آواز)',
  },
  qalqalahLabel: {
    english: '🔵 Qalqalah (Bouncing Echo)',
    hinglish: '🔵 Qalqalah (Awaz ka palatna / Echo)',
    urdu: '🔵 قلقلہ (آواز کو بلا جھٹکا لوٹانا)',
  },
  heavyLettersLabel: {
    english: '🧡 Heavy Letters (Musta\'aliyah 7)',
    hinglish: '🧡 Heavy Letters (Moonh bhar kar Mota bolne wale 7 huroof)',
    urdu: '🧡 حروفِ مستعلیہ (۷ موٹے پڑھے جانے والے حروف)',
  },

  // Pearl Box Titles
  pearlBoxSubHeader: {
    english: 'Qaida Dictation Secrets (فوائد قواعد التجويد)',
    hinglish: 'Zaroori Qaida Rules (فوائد قواعد التجويد)',
    urdu: 'ضروری قواعد التجويد و ہدایات',
  },

  // Chapter 1 Explanations
  ch1Title: {
    english: 'Al-Hira Neo-Noorani Qaida Lesson 1: Mufradaat & 17 Makharij',
    hinglish: 'Noorani Qaida Lesson 1: Mufradaat (Alag Huroof) & 17 Makharij',
    urdu: 'الدرس الأول: الحروف الهجائية المفردة والمخارج الـ١٧',
  },
  ch1Points: {
    english: [
      "Lesson 1: Master all 29 individual letters (Mufradaat) from Alif to Yaa before adding vowel strokes!",
      "Pronounce the 7 Heavy Letters (Musta'aliyah: خُصَّ ضَغْطٍ قِظْ) with a bold, full mouth by raising the back of your tongue!",
      "Notice Partial Heavy Letters (Mushtamilah: ا ل ر) which change between heavy and light based on preceding vowels.",
      "Read disjoined Quranic letters (Huroof-e-Muqatta'at) by spelling their full individual letter names!"
    ],
    hinglish: [
      "Sabaq 1: Alif se Yaa tak tamam 29 alag huroof ko bina kisi zabar/zer ke pehle ache se pehchanein!",
      "7 Mota (Heavy) huroof (خُصَّ ضَغْطٍ قِظْ) ko moonh bhar kar bold awaz me zabaan ka pichhla hissa utha kar padhein!",
      "Baaz huroof (ا ل ر) kabhi mota aur kabhi bareek padhe jate hain zabar/zer ke hisab se.",
      "Quran Majeed ke Muqatta'at huroof (jaise الم, يس) ko unke poore naam ke sath alag alag padhein!"
    ],
    urdu: [
      "الدرس الأول: الف سے یاء تک تمام ۲۹ مفرد حروف کو بغیر حرکات کے درست پہچانیں!",
      "۷ حروفِ مستعلیہ (خُصَّ ضَغْطٍ قِظْ) کو زبان کا پچھلا حصہ اٹھا کر منہ بھر کر موٹا پڑھیں!",
      "بعض حروف (ا، ل، ر) قبل کی حرکت کے مطابق کبھی موٹے اور کبھی باریک پڑھے جاتے ہیں۔",
      "حروفِ مقطعات (جیسے الم، يس) کو ان کے مکمل اسماء کے ساتھ جدا جدا پڑھیں!"
    ],
  },

  // Chapter 2 Explanations (Harakat)
  ch2Title: {
    english: 'Al-Hira Neo-Noorani Qaida Lesson 3: Harakaat Dictation Rules',
    hinglish: 'Noorani Qaida Lesson 3: Harakaat (Zabar, Zer, Pesh) Dictation Rules',
    urdu: 'الدرس الثالث: الحركات (الفتحة والكسرة والضمة)',
  },
  ch2Points: {
    english: [
      "Harakaat (Fatha, Kasrah, Dhamma) are pronounced with the shortest spell—NEVER elongated!",
      "Alif is always stand-alone without any sign; if Alif appears with any sign, it converts itself into Hamzah (ء).",
      "Ijra-e-Qawa'id Method: 'In دَرَسَ: Dal has Fatha, Raa has Fatha, Seen has Fatha—read with shortest spell!'"
    ],
    hinglish: [
      "Harakat (Zabar, Zer, Pesh) ko bilkul chhota aur jaldi padhein—kabhi mat khinchein!",
      "Alif hamesha khaali hota hai; agar Alif par koi zabar/zer/sukoon aa jaye to wo Hamzah (ء) ban jata hai!",
      "Sabaq padhne ka tareeqa: 'دَرَسَ me Dal par Zabar, Raa par Zabar, Seen par Zabar—sabko jaldi padhein!'"
    ],
    urdu: [
      "حرکات (فتحه، کسره، ضمه) کو بغیر کھینچے بالکل مختصر اور معروف پڑھیں!",
      "الف ہمیشہ خالی ہوتا ہے؛ اگر الف پر کوئی حرکت یا سکون آ جائے تو وہ ہمزہ (ء) بن جاتا ہے!",
      "اجرائے قواعد کا طریقہ: 'دَرَسَ میں دال پر زبر، راء پر زبر، سین پر زبر—تمام حرکات کو جلدی پڑھیں!'"
    ],
  },

  // Chapter 3 Explanations (Murakkabaat)
  ch3Title: {
    english: 'Al-Hira Neo-Noorani Qaida Lesson 2: Murakkabaat (Compound Shapes)',
    hinglish: 'Noorani Qaida Lesson 2: Murakkabaat (Milkar bane huroof)',
    urdu: 'الدرس الثاني: الحروف المركبة (المركبات)',
  },
  ch3Points: {
    english: [
      "Two or more letters clubbed together are called Murakkabaat.",
      "Learn to recognize the 4 positional forms: Alaahida (isolated), Ibtidayi (beginning), Darmiyani (middle), and Aakhri (end).",
      "Dot count rule: 1 dot under = Baa (بـ), 2 dots top = Taa (تـ), 3 dots top = Thaa (ثـ), 1 dot top = Noon (نـ), 2 dots under = Yaa (يـ)."
    ],
    hinglish: [
      "Do ya zyada huroof milkar bane to unhe Murakkabaat kehte hain.",
      "Huroof ki 4 shaklein pehchanein: Alag (isolated), Shuru (beginning), Beech (middle), aur Aakhir (ending).",
      "Nuqton ki pehchan: Niche 1 nuqta = Baa (بـ), Uper 2 nuqte = Taa (تـ), Uper 3 nuqte = Thaa (ثـ), Uper 1 nuqta = Noon (نـ), Niche 2 nuqte = Yaa (يـ)."
    ],
    urdu: [
      "دو یا دو سے زیادہ حروف مل کر مرکبات بنتے ہیں۔",
      "حروف کی چاروں اشکال پہچانیں: علیحدہ (منفصل)، ابتدائی، درمیانی اور آخری۔",
      "نقطوں کی پہچان: نیچے ۱ نقطہ = باء (بـ)، اوپر ۲ نقطے = تاء (تـ)، اوپر ۳ نقطے = ثاء (ثـ)، اوپر ۱ نقطہ = نون (نـ)، نیچے ۲ نقطے = ياء (يـ)۔"
    ],
  },

  // Chapter 4 Explanations (Tanween)
  ch4Title: {
    english: 'Al-Hira Neo-Noorani Qaida Lesson 7: Tanween (Double Vowels)',
    hinglish: 'Noorani Qaida Lesson 7: Tanween (Do Zabar, Do Zer, Do Pesh)',
    urdu: 'الدرس السابع: التنوين (فتحَتان، كسرَتان، ضمَّتان)',
  },
  ch4Points: {
    english: [
      "Fathatain, Kasratain and Dhammatain together are called Tanween.",
      "Where Tanween appears, it is read with the sound of Noon (نْ) added to it!",
      "Noorani Tahjiya: 'Hamzah Fatha A - Baa Fatha Ba (A-Ba) - Dal Fathatain Dan = Abadan!'"
    ],
    hinglish: [
      "Do Zabar (ـً), Do Zer (ـٍ) aur Do Pesh (ـٌ) ko Tanween kehte hain.",
      "Tanween me aakhir me Noon-e-Sakinah (نْ) ki chhipi hui awaz aati hai.",
      "Spelling tareeqa: 'Hamzah Zabar A - Baa Zabar Ba (A-Ba) - Dal Do-Zabar Dan = Abadan!'"
    ],
    urdu: [
      "دو زبر (ـً)، دو زیر (ـٍ) اور دو پیش (ـٌ) کو تنوین کہتے ہیں۔",
      "تنوین میں نون ساکن (نْ) کی چھی ہوئی آواز شامل ہوتی ہے۔",
      "ہجاء کا طریقہ: 'ہمزہ زبر اَ - باء زبر بَ (اَبَ) - دال دو زبر دَاً = اَبَداً!'"
    ],
  },

  // Chapter 5 Explanations (Sukoon & Qalqalah)
  ch5Title: {
    english: 'Al-Hira Neo-Noorani Qaida Lesson 4: Sukoon & Hamzah Twitch Effect',
    hinglish: 'Noorani Qaida Lesson 4: Sukoon (Jazm) & Hamzah Jhatka Effect',
    urdu: 'الدرس الرابع: السكون (الجزم)، القلقلة وحكم الهمزة الساكنة',
  },
  ch5Points: {
    english: [
      "A letter with Sukoon over it is called Saakin—it is clubbed with the preceding letter and read together.",
      "Hamzah-Saakinah Rule (أْ إْ ؤْ ئْ): Hamzah-Saakinah is ALWAYS pronounced with a sharp twitch / jerk effect (Jhatka)!",
      "Qalqalah Rule: Sukoon appearing over the 5 Qalqalah letters (ق ط ب ج د) produces a light bouncing sound."
    ],
    hinglish: [
      "Sukoon (ـْ) wale حرف ko Saakin kehte hain—ye pehle wale حرف ke sath milakar padha jata hai.",
      "Hamzah-Saakinah Rule (أْ إْ ؤْ ئْ): Hamzah-Saakinah ko HAMESHA ek jhatka (twitch) de kar padhein!",
      "Qalqalah Rule: 5 Qalqalah huroof (ق ط ب ج د) par sukoon aaye to awaz ko halka sa bounce / echo karein."
    ],
    urdu: [
      "سکون (ـْ) والے حرف کو ساکن کہتے ہیں—یہ اپنے سے پہلے والے متحرک حرف سے ملا کر پڑھا جاتا ہے۔",
      "ہمزہ ساکنہ (أْ إْ ؤْ ئْ) کو ہمیشہ جھٹکا دے کر ادا کریں!",
      "قلقلہ کا قاعدہ: پانچ حروفِ قلقلہ (ق ط ب ج د) پر سکون آئے تو آواز کو بلا جھٹکا لوٹائیں۔"
    ],
  },

  // Chapter 6 Explanations (Maddah & Leen)
  ch6Title: {
    english: 'Al-Hira Neo-Noorani Qaida Lessons 5 & 6: Maddah & Leen Rules',
    hinglish: 'Noorani Qaida Lessons 5 & 6: Maddah (Khinchna) & Leen Rules',
    urdu: 'الدروس ٥ و ٦: حروف المدة وحروف اللين',
  },
  ch6Points: {
    english: [
      "Maddah Letters (ا و ي): Sound of preceding letter is elongated equal to duration of 1 Alif (2 counts).",
      "Identities of Maddah Letters (Khada-Zabar, Khadi-Zer, Ulta-Pesh): Pronounced exactly like Alif-Maddah, Yaa-Maddah, and Waaw-Maddah!",
      "Leen-Letters (Waaw-Leen & Yaa-Leen): Read with a swift soft sound without dragging!"
    ],
    hinglish: [
      "Maddah huroof (ا و ي): Pehle wale حرف ki awaz ko 1 Alif (2 counts) ke barabar khinchein.",
      "Khada-Zabar (ـٰ), Khadi-Zer (ـٖ), aur Ulta-Pesh (ـٗ): Bilkul Alif-Maddah, Yaa-Maddah aur Waw-Maddah ki tarah 2 counts khinche jate hain!",
      "Leen huroof (Waw-Leen aur Yaa-Leen): Inhe naram awaz se bina khinche jaldi padhein."
    ],
    urdu: [
      "حروفِ مدہ (ا و ي): اپنے سے پہلے حرف کی آواز کو ۱ الف (۲ حرکات) کے برابر لمبا کریں۔",
      "کھڑا زبر (ـٰ)، کھڑی زیر (ـٖ)، اور الٹا پیش (ـٗ): بالکل الف مدہ، یاء مدہ اور واؤ مدہ کی طرح پڑھے جاتے ہیں!",
      "حروفِ لین (واؤ لین اور یاء لین): انہیں بغیر کھینچے نرمی سے جلد ادا کریں۔"
    ],
  },

  // Chapter 7 Explanations (Tashdeed & Laam-e-Jalalah)
  ch7Title: {
    english: 'Al-Hira Neo-Noorani Qaida Lesson 8: Tashdeed & Laam-e-Jalalah Rules',
    hinglish: 'Noorani Qaida Lesson 8: Tashdeed (Shaddah) & Lafz Allah ke Rules',
    urdu: 'الدرس الثامن: التشدید (الشدة)، الغنة وحكم لام الجلالة',
  },
  ch7Points: {
    english: [
      "A letter with Tashdeed (ـّ) is read twice: initially with the preceding letter (silent Sukoon), then with its own harakat.",
      "GHUNNA: Holding sound of Noon (نّ) or Meem (مّ) inside nose for 1 Alif duration.",
      "Laam-e-Jalalah Rule (Pronouncing 'Allah'): Read Laam Heavy (Mota) after Fatha or Dhamma, and Light (Bareek) after Kasrah!"
    ],
    hinglish: [
      "Tashdeed (ـّ) wale حرف ko do baar padha jata hai: pehle pichhle حرف se milakar, phir apni harkat ke sath.",
      "GHUNNAH: Noon (نّ) ya Meem (مّ) par Tashdeed ho to 1 Alif naak me awaz rok kar Ghunnah karein.",
      "Lafz Allah ka rule: Zabar ya Pesh ke baad Lafz Allah ko Mota (Heavy) padhein, aur Zer ke baad Bareek (Light) padhein!"
    ],
    urdu: [
      "تشدید (ـّ) والے حرف کو دو بار پڑھا جاتا ہے: پہلے پچھلے متحرک حرف سے ملا کر، پھر اپنی حرکت کے ساتھ۔",
      "غنہ: نون (نّ) یا میم (مّ) مشدد پر ۱ الف ناک میں آواز گونجا کر غنہ کریں۔",
      "لامِ جلالت (لفظِ اللہ) کا قاعدہ: زبر یا پیش کے بعد لفظِ اللہ کو موٹا (پر) پڑھیں، اور زیر کے بعد باریک پڑھیں!"
    ],
  },

  // Chapter 8 Explanations (Advanced Tajweed & Waqf)
  ch8Title: {
    english: 'Al-Hira Neo-Noorani Qaida Lessons 10-18: Final Recitation Rules',
    hinglish: 'Noorani Qaida Lessons 10-18: Izhar, Idgham, Iqlab, Ikhfa & Waqf Rules',
    urdu: 'الدروس ١٠-١٨: أحكام النون الساكنة والتنوين والوقف',
  },
  ch8Points: {
    english: [
      "Rules for Raa (بيان الراء): Raa is Heavy (Mota) with Fatha/Dhamma (رَ, رُ, قُرْآن), and Light (Bareek) with Kasrah (رِ, فِرْعَوْن).",
      "Waqf Stopping Signs: When pausing on a word ending with Fatha/Kasrah/Dhamma, turn last letter into silent Sukoon (ـْ).",
      "Ta Marbutah Rule: When stopping on Ta Marbutah (ة), turn the sound into a silent Haa (هْ)."
    ],
    hinglish: [
      "Raa ka rule: Raa par Zabar/Pesh ho to Mota (Heavy) padhein (رَ, رُ, قُرْآن), aur Zer ho to Bareek (Light) padhein (رِ, فِرْعَوْن).",
      "Waqf (Rukne) ka rule: Kisi lafz par rukte waqt aakhri Zabar/Zer/Pesh ko Sukoon (ـْ) me badal dein.",
      "Gol Taa (ة) par rukne ka rule: Gol Taa (ة) par rukte waqt uski awaz Haa-Saakinah (هْ) ban jati hai."
    ],
    urdu: [
      "بیان الراء: راء پر زبر یا پیش ہو تو موٹا (پر) پڑھیں (رَ، رُ، قُرْآن)، اور زیر ہو تو باریک پڑھیں (رِ، فِرْعَوْن)۔",
      "وقف کا قاعدہ: کسی لفظ پر وقف کرتے وقت آخری حرکت کو سکون (ـْ) میں بدل دیں۔",
      "تائے مربوطہ (ة) پر وقف کا قاعدہ: گول تاء (ة) پر وقف کرتے وقت اس کی آواز ہائے ساکنہ (هْ) بن جاتی ہے۔"
    ],
  },
};
