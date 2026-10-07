import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  HelpCircle,
  Volume2,
  VolumeX,
  BookmarkCheck,
  BookOpen,
  Check,
  X,
  Search,
  Users,
  FileEdit,
  Download,
  Trophy
} from 'lucide-react';
import type { LanguageOption } from '../utils/translations';
import { SEERAH_CHAPTERS, type SeerahChapter } from '../data/seerahData';
import confetti from 'canvas-confetti';

interface SeerahJourneyViewProps {
  language?: LanguageOption;
  onSelectLanguage?: (lang: LanguageOption) => void;
}

export interface GlossaryPerson {
  id: string;
  name: string;
  arabicName: string;
  category: 'caliphs' | 'women' | 'warriors' | 'scholars' | 'leaders';
  title: {
    english: string;
    hinglish: string;
    urdu: string;
  };
  bio: {
    english: string;
    hinglish: string;
    urdu: string;
  };
  featuredModuleIndex: number; // Index in SEERAH_CHAPTERS (0-indexed)
}

// Enriched Key Figures & Historical Glossary Data
const SEERAH_GLOSSARY: GlossaryPerson[] = [
  {
    id: 'abu-bakr',
    name: 'Abu Bakr As-Siddiq (RA)',
    arabicName: 'أبو بكر الصديق رضي الله عنه',
    category: 'caliphs',
    title: {
      english: 'First Caliph of Islam & Close Companion',
      hinglish: 'Islam ke Pehle Khalifa aur Sabse Qareebi Sahabi',
      urdu: 'خلیفہ اول، یارِ غار اور کائنات کے افضل ترین انسان بعد الانبیاء'
    },
    bio: {
      english: 'The first adult male to embrace Islam without hesitation. Renowned for his unshakeable faith, immediate verification of Mi\'raj (As-Siddiq), donating 100% of his wealth for Tabuk, and accompanying the Prophet in Cave Thawr during Hijrah.',
      hinglish: 'Pehle mard Musalman jinhone bina shuk ke Islam qabool kiya. Mi\'raj ki tasdeeq par As-Siddiq laqab mila. Hijrat ke waqt Ghar-e-Thawr mein Nabi (ﷺ) ke sathi the aur Tabuk mein 100% maal Sadqah kiya.',
      urdu: 'مردوں میں سب سے پہلے بلا تردد اسلام قبول کرنے والے عظیم صحابی۔ واقعہ معراج کی تصدیق پر الصدیق کا لقب ملا، غارِ ثور میں رفیقِ ہجرت رہے اور غزوہ تبوک میں ۱۰۰ فیصد مال وقف کیا۔'
    },
    featuredModuleIndex: 10 // Mod 11: Secret Dawa & Abu Bakr
  },
  {
    id: 'khadijah',
    name: 'Sayyidah Khadijah bint Khuwailid (RA)',
    arabicName: 'سيدة خديجة الكبرى رضي الله عنها',
    category: 'women',
    title: {
      english: 'Mother of the Believers & First Muslim',
      hinglish: 'Umm-ul-Mu\'mineen aur Islam ki Pehli Musalman',
      urdu: 'ام المؤمنین، محسنۂ اسلام اور کائنات کی پہلی مسلمان خاتون'
    },
    bio: {
      english: 'The beloved first wife of Prophet Muhammad (ﷺ) for 25 years. The very first person to accept Islam, she comforted the Prophet after the first revelation of "Iqra!" and spent all her immense wealth supporting Islam.',
      hinglish: 'Nabi (ﷺ) ki pehli azeem biwi (25 saal tak). Pehli Wahi "Iqra" ke waqt Aapko tasalli di aur apna poora maal Islam par qurban kar diya.',
      urdu: 'رسول اللہ ﷺ کی ۲۵ سالہ پہلی رفیقۂ حیات۔ پہلی وحی کے موقع پر تاریخ ساز تسلی دی اور اپنا سارا مال اسلام کے لیے وقف کر دیا۔'
    },
    featuredModuleIndex: 7 // Mod 8: Marriage to Khadijah
  },
  {
    id: 'ali',
    name: 'Ali ibn Abi Talib (RA)',
    arabicName: 'علي بن أبي طالب رضي الله عنه',
    category: 'caliphs',
    title: {
      english: 'Fourth Caliph, Cousin & Lion of Allah (Asadullah)',
      hinglish: 'Chouthe Khalifa, Nabi ke Bhai aur Lion of Allah',
      urdu: 'خلیفہ چہارم، ابنِ عمِ مصطفیٰ اور شیرِ خدا (اسد اللہ)'
    },
    bio: {
      english: 'First youth to embrace Islam at age 10. He fearlessly slept in the Prophet\'s bed on the night of Hijrah to return Makkan trusts, and famously ripped the iron door of Khaybar to grant Muslims victory.',
      hinglish: 'Bachon mein sabse pehle (10 saal ki umar mein) Islam qabool kiya. Hijrat ki raat Nabi ke bistar par soye aur Fateh Khaybar mein darwaza ukhad kar jeet dilayi.',
      urdu: 'بچوں میں سب سے پہلے اسلام قبول کرنے والی ہستی۔ ہجرت کی رات آپ کے بستر پر سوئے اور غزوہ خیبر میں وزنی دروازہ اکھاڑ کر فتح حاصل کی۔'
    },
    featuredModuleIndex: 26 // Mod 27: Conquest of Khaybar & Ali
  },
  {
    id: 'hamzah',
    name: 'Hamzah ibn Abdul-Muttalib (RA)',
    arabicName: 'حمزة بن عبد المطلب رضي الله عنه',
    category: 'warriors',
    title: {
      english: 'Sayyid al-Shuhada (Master of Martyrs) & Prophet\'s Uncle',
      hinglish: 'Sayyid al-Shuhada (Shaheedon ke Sardaar) aur Nabi ke Uncle',
      urdu: 'سید الشہداء، عمِ رسول ﷺ اور شجاعتِ عرب کی علامت'
    },
    bio: {
      english: 'Brave uncle of the Prophet whose conversion in 616 CE fortified Islam in Makkah. He fearlessly struck Abu Jahl with his bow and was martyred at the Battle of Uhud.',
      hinglish: 'Nabi (ﷺ) ke bahadur uncle jinhone Abu Jahl ko kaman se mara tha. Uhud ki jung mein shaheed hue aur Sayyid al-Shuhada ka laqab mila.',
      urdu: 'آپ ﷺ کے بہادر چچا جن کے قبولِ اسلام سے مکہ میں مسلمانوں کو غلبہ ملا۔ غزوہ احد میں شہادت پائی اور سید الشہداء کا ابدی لقب پایا۔'
    },
    featuredModuleIndex: 23 // Mod 24: Battle of Uhud & Hamzah
  },
  {
    id: 'umar',
    name: 'Umar ibn Al-Khattab (RA)',
    arabicName: 'عمر بن الخطاب رضي الله عنه',
    category: 'caliphs',
    title: {
      english: 'Second Caliph of Islam (Al-Farooq)',
      hinglish: 'Islam ke Doosre Khalifa (Al-Farooq)',
      urdu: 'خلیفہ دوم، فاروقِ اعظم اور عدلِ اسلامی کے بانی'
    },
    bio: {
      english: 'Fierce Makkan leader whose conversion after hearing Surah Taha allowed Muslims to pray publicly at the Ka\'bah for the first time. Known for absolute justice and establishing state institutions.',
      hinglish: 'Behen ke ghar Surah Taha sun kar Musalman hue. Unke Islam lane se Ka\'bah par khullam khulla Namaz shuru hui.',
      urdu: 'سورۃ طٰہٰ کی تلاوت سن کر اسلام لائے۔ آپ کے اسلام لاتے ہی کعبہ میں علی الاعلان با جماعت نماز کا آغاز ہوا۔'
    },
    featuredModuleIndex: 14 // Mod 15: Conversion of Umar
  },
  {
    id: 'musab',
    name: 'Mus\'ab ibn Umayr (RA)',
    arabicName: 'مصعب بن عمير رضي الله عنه',
    category: 'scholars',
    title: {
      english: 'First Official Ambassador of Islam',
      hinglish: 'Islam ke Pehle Official Ambassador',
      urdu: 'اسلام کے سب سے پہلے سفیر اور قرآن کے عظیم معلم'
    },
    bio: {
      english: 'A refined, wealthy Makkan youth who sacrificed all luxury for Islam. Sent to Yathrib (Madinah) before Hijrah, his gentle preaching brought Islam to every household in Madinah.',
      hinglish: 'Ameer khandan ke naujawan jinhone sab chhod diya. Hijrat se pehle Madinah gaye aur ghar ghar ko Musalman bana diya.',
      urdu: 'مکہ کے امير ترین نوجوان جو اسلام کے لیے سب کچھ چھوڑ آئے۔ ہجرت سے قبل مدینہ جا کر ہر گھر کو اسلام سے روشن کر دیا۔'
    },
    featuredModuleIndex: 19 // Mod 20: Musab in Yathrib
  },
  {
    id: 'jafar',
    name: 'Ja\'far ibn Abi Talib (RA)',
    arabicName: 'جعفر بن أبي طالب (الطيار) رضي الله عنه',
    category: 'scholars',
    title: {
      english: 'Leader of Abyssinian Migrants (Ja\'far al-Tayyar)',
      hinglish: 'Habsha Hijrat ke Leader aur Eloquent Speaker',
      urdu: 'سفیرِ حبشہ، خطیبِ دربارِ نجاشی اور جعفر طیار'
    },
    bio: {
      english: 'Cousin of the Prophet who led the 2nd migration to Abyssinia. Delivered a legendary speech before King Negus reciting Surah Maryam, moving Negus to tears and securing sanctuary.',
      hinglish: 'Habsha ki hijrat ke sardaar jinhone King Najashi ke samne Surah Maryam padhi aur Najashi ko rula kar Musalmanon ko pnah dilayi.',
      urdu: 'ہجرتِ حبشہ کے قائد جنہوں نے نجاشی کے دربار میں سورۃ مریم کی تلاوت فرمائی اور مسلمانوں کے لیے ابدی تحفظ حاصل کیا۔'
    },
    featuredModuleIndex: 13 // Mod 14: Abyssinia & Jafar
  },
  {
    id: 'salman',
    name: 'Salman al-Farsi (RA)',
    arabicName: 'سلمان الفارسي رضي الله عنه',
    category: 'scholars',
    title: {
      english: 'Architect of the Trench Strategy (Khandaq)',
      hinglish: 'Khondak (Trench) Strategy dene waale Persian Sahabi',
      urdu: 'عظیم فارس کے صحابی اور غزوہ خندق کے عسکری دانشور'
    },
    bio: {
      english: 'Persian companion who spent years seeking truth before finding the Prophet. He proposed digging the trench around Madinah, saving 3,000 Muslims from 10,000 enemy troops.',
      hinglish: 'Persian Sahabi jinhone Madinah ke charon taraf Khondak khodne ka idea diya, jisse 10,000 kafiron ka lashkar bhatak gaya.',
      urdu: 'فارسی صحابی جنہوں نے مدینہ کے دفاع کے لیے خندق کھودنے کی عسکری حکمتِ عملی تجویز کی اور فتح حاصل ہوئی۔'
    },
    featuredModuleIndex: 24 // Mod 25: Battle of Trench
  },
  {
    id: 'negus',
    name: 'King Negus (Ashama al-Najashi)',
    arabicName: 'النجاشي ملك الحبشة رحمه الله',
    category: 'leaders',
    title: {
      english: 'Righteous King of Abyssinia',
      hinglish: 'Habsha ke Insaf-Pasand Isai Baadshah',
      urdu: 'حبشہ کے عادل نصرانی بادشاہ جنہوں نے اسلام قبول کیا'
    },
    bio: {
      english: 'Just Christian ruler of Abyssinia who refused Quraysh bribes, wept upon hearing Surah Maryam, granted sanctuary to Muslims, and privately embraced Islam.',
      hinglish: 'Habsha ke insaf-pasand Baadshah jinhone Quraysh ke tohfe thukra kar Musalmanon ko pnah di aur Islam qabool kiya.',
      urdu: 'حبشہ کے عادل حاکم جنہوں نے قریشی تحائف کو ٹھکرا کر مسلمانوں کو پناہ دی اور بعد میں قبولِ اسلام کیا۔'
    },
    featuredModuleIndex: 13 // Mod 14: King Negus
  },
  {
    id: 'bilal',
    name: 'Bilal ibn Rabah (RA)',
    arabicName: 'بلال بن رباح رضي الله عنه',
    category: 'warriors',
    title: {
      english: 'First Muezzin of Islam & Symbol of Equality',
      hinglish: 'Islam ke Pehle Muezzin aur Ahad-Ahad bolne waale Sahabi',
      urdu: 'مؤذنِ رسول ﷺ اور نعرۂ احد احد کے تاریخی علمبردار'
    },
    bio: {
      english: 'Abyssinian companion who endured brutal torture under hot desert rocks, steadfastly chanting "Ahad! Ahad!" (Allah is One!). Freed by Abu Bakr (RA), he became Islam\'s first Muezzin.',
      hinglish: 'Garam pattharon par litaye jaane par "Ahad! Ahad!" bolte rahe. Abu Bakr (RA) ne azad kiya aur woh Islam ke Pehle Muezzin banien.',
      urdu: 'تپتی ریت پر وزنی پتھروں کے نیچے زبان سے "احد! احد!" پکارنے والے صحابی۔ حضرت ابوبکر نے آزاد کرایا اور اسلام کے پہلے مؤذن بنے۔'
    },
    featuredModuleIndex: 12 // Mod 13: Persecution & Bilal
  },
  {
    id: 'sumayyah',
    name: 'Sayyidah Sumayyah bint Khayyat (RA)',
    arabicName: 'سيدة سمية بنت خياط رضي الله عنها',
    category: 'women',
    title: {
      english: 'First Martyr (Shaheed) in Islamic History',
      hinglish: 'Islam ki Pehli Shaheed Aurat',
      urdu: 'اسلامی تاریخ کی سب سے پہلی شہیدِ نسیہ خاتون'
    },
    bio: {
      english: 'Mother of Ammar ibn Yasir (RA). She endured brutal torture by Abu Jahl and refused to renounce Tawheed, becoming the very first person to achieve martyrdom in Islam.',
      hinglish: 'Abu Jahl ke zulm ke bawajood Eeman par qaim rahien aur neze se shaheed hokar Islam ki Pehli Shaheed banien.',
      urdu: 'ابو جہل کی شدید ترین ایذا رسانی کے باوجود توحید پر قائم رہیں اور نیزہ مار کر شہید کی گئیں، جو اسلام کی پہلی شہید بنیں۔'
    },
    featuredModuleIndex: 12 // Mod 13: Sumayyah Martyrdom
  },
  {
    id: 'khalid',
    name: 'Khalid ibn al-Walid (RA)',
    arabicName: 'خالد بن الوليد (سيف الله المسلول) رضي الله عنه',
    category: 'warriors',
    title: {
      english: 'The Drawn Sword of Allah (Saifullah al-Maslul)',
      hinglish: 'Saifullah (Allah Ki Talwar)',
      urdu: 'سیف اللہ المسلول (اللہ کی سوتیں ہوئی تلوار)'
    },
    bio: {
      english: 'Brilliant military general who embraced Islam after Hudaybiyyah. Led Muslim armies in numerous decisive battles without a single defeat in over 100 military engagements.',
      hinglish: 'Duniya ke azeem Military Commander jinhone Hudaybiyyah ke baad Islam qabool kiya aur 100+ jungs bina kisi haar ke jeetien.',
      urdu: 'دینا کے سب سے عظیم تر ملٹری جنرل جنہوں نے صلح حدیبیہ کے بعد اسلام قبول کیا اور ۱۰۰ سے زائد جنگوں میں کوئی ایک جنگ نہیں ہاری۔'
    },
    featuredModuleIndex: 23 // Mod 24 & 26: Uhud & Khalid
  },
  {
    id: 'aisha',
    name: 'Sayyidah Aishah bint Abi Bakr (RA)',
    arabicName: 'سيدة عائشة بنت أبي بكر رضي الله عنها',
    category: 'women',
    title: {
      english: 'Mother of the Believers & Master Scholar',
      hinglish: 'Umm-ul-Mu\'mineen aur Deen ki Azeem Scholar',
      urdu: 'ام المؤمنین، فقہِ اسلامی کی عظیم عالمہ اور روایتِ حدیث کی مہر'
    },
    bio: {
      english: 'Beloved wife of the Prophet, daughter of Abu Bakr (RA). Possessed unmatched knowledge of Qur\'an, Hadith, law, and medicine, narrating over 2,200 Hadiths for the Ummah.',
      hinglish: 'Nabi (ﷺ) ki beloved biwi, Abu Bakr (RA) ki beti. 2,200+ Hadith narrate karke Deen ki sabse badi Aalimah banien.',
      urdu: 'آپ ﷺ کی چہیتی زوجہ اور حضرت ابوبکر کی بیٹی۔ ۲۲۰۰ سے زائد احادیث روایت کر کے امت کی سب سے بڑی فقہیہ اور عالمہ بنیں۔'
    },
    featuredModuleIndex: 29 // Mod 30: Farewell & Aisha
  },
  {
    id: 'sad-ibn-muadh',
    name: 'Sa\'d ibn Mu\'adh (RA)',
    arabicName: 'سعد بن معاذ رضي الله عنه',
    category: 'leaders',
    title: {
      english: 'Leader of the Ansar (Aus Tribe)',
      hinglish: 'Ansar (Aus Qabile) ke Azeem Leader',
      urdu: 'انصار کے عظیم رہنما، جن کی وفات پر عرشِ الٰہی جھوم اٹھا'
    },
    bio: {
      english: 'Chieftain of the Aus tribe in Madinah who accepted Islam through Mus\'ab ibn Umayr (RA). When he passed away from wounds after Khandaq, the Throne of Allah shook with joy for his soul.',
      hinglish: 'Madinah ke Aus qabile ke sardaar. Unki maut par Allah ka Arsh hil gaya tha.',
      urdu: 'مدینہ منورہ کے قبیلہ اوس کے سردار۔ جب ان کی وفات ہوئی تو ان کی روح کے استقبال کے لیے عرشِ خداوندی جھوم اٹھا۔'
    },
    featuredModuleIndex: 19 // Mod 20 & 22: Aqabah & Sa'd
  }
];

export const SeerahJourneyView: React.FC<SeerahJourneyViewProps> = ({
  language = 'hinglish',
  onSelectLanguage,
}) => {
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(language || 'hinglish');
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  // Search & Era Filter state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [eraFilter, setEraFilter] = useState<'all' | 'makkan' | 'madinan' | 'completed'>('all');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [glossaryCategory, setGlossaryCategory] = useState<'all' | 'caliphs' | 'women' | 'warriors' | 'scholars' | 'leaders'>('all');
  const [glossarySearchQuery, setGlossarySearchQuery] = useState<string>('');
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Seeker of Sacred Knowledge');

  // Synchronize internal language state
  useEffect(() => {
    if (language) {
      setSelectedLang(language);
    }
  }, [language]);

  const handleLangSwitch = (lang: LanguageOption) => {
    setSelectedLang(lang);
    if (onSelectLanguage) {
      onSelectLanguage(lang);
    }
  };

  // LocalStorage Persistence for completed Seerah modules
  const [completedSeerahChapters, setCompletedSeerahChapters] = useState<number[]>(() => {
    const saved = localStorage.getItem('tajweed_seerah_completed');
    return saved ? JSON.parse(saved) : [];
  });

  // Personal Reflection Notes per module
  const [notes, setNotes] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem('tajweed_seerah_notes');
    return saved ? JSON.parse(saved) : {};
  });

  const [activeNoteText, setActiveNoteText] = useState<string>('');

  // Multi-Question Exam State for active module
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isTestSubmitted, setIsTestSubmitted] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('tajweed_seerah_completed', JSON.stringify(completedSeerahChapters));
  }, [completedSeerahChapters]);

  useEffect(() => {
    localStorage.setItem('tajweed_seerah_notes', JSON.stringify(notes));
  }, [notes]);

  // Reset exam state & load module note when active chapter changes
  useEffect(() => {
    setUserAnswers({});
    setIsTestSubmitted(false);
    setIsAudioPlaying(false);
    const chapNum = SEERAH_CHAPTERS[activeChapterIndex]?.chapterNumber;
    setActiveNoteText(notes[chapNum] || '');
  }, [activeChapterIndex, notes]);

  const currentChapter: SeerahChapter = SEERAH_CHAPTERS[activeChapterIndex] || SEERAH_CHAPTERS[0];
  const totalModules = SEERAH_CHAPTERS.length;
  const progressPercent = Math.round((completedSeerahChapters.length / totalModules) * 100);

  // Filter modules based on search query and selected era
  const filteredChapters = SEERAH_CHAPTERS.filter((chap) => {
    const matchesSearch =
      chap.title[selectedLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      chap.period.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chap.summary[selectedLang].toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (eraFilter === 'makkan') return chap.chapterNumber <= 20;
    if (eraFilter === 'madinan') return chap.chapterNumber >= 21;
    if (eraFilter === 'completed') return completedSeerahChapters.includes(chap.chapterNumber);

    return true;
  });

  // Filter glossary figures based on search query and category
  const filteredGlossary = SEERAH_GLOSSARY.filter((person) => {
    const matchesCategory = glossaryCategory === 'all' || person.category === glossaryCategory;
    const matchesSearch =
      person.name.toLowerCase().includes(glossarySearchQuery.toLowerCase()) ||
      person.arabicName.toLowerCase().includes(glossarySearchQuery.toLowerCase()) ||
      person.title[selectedLang].toLowerCase().includes(glossarySearchQuery.toLowerCase()) ||
      person.bio[selectedLang].toLowerCase().includes(glossarySearchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleJumpToModule = (modIdx: number) => {
    setActiveChapterIndex(modIdx);
    setIsGlossaryOpen(false);
  };

  const handleMarkChapterComplete = (chapNum: number) => {
    if (!completedSeerahChapters.includes(chapNum)) {
      const updated = [...completedSeerahChapters, chapNum];
      setCompletedSeerahChapters(updated);
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
    }
  };

  const handleSaveNote = () => {
    setNotes((prev) => ({
      ...prev,
      [currentChapter.chapterNumber]: activeNoteText
    }));
  };

  const handleNextChapter = () => {
    if (activeChapterIndex < totalModules - 1) {
      setActiveChapterIndex((prev) => prev + 1);
    }
  };

  const handlePrevChapter = () => {
    if (activeChapterIndex > 0) {
      setActiveChapterIndex((prev) => prev - 1);
    }
  };

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    if (isTestSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleTestSubmit = () => {
    const totalQuestions = currentChapter.test.length;
    if (Object.keys(userAnswers).length < totalQuestions) {
      alert('Please answer all test questions before submitting!');
      return;
    }

    setIsTestSubmitted(true);
    let correctCount = 0;
    currentChapter.test.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    if (correctCount === totalQuestions) {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
      handleMarkChapterComplete(currentChapter.chapterNumber);
    }
  };

  // Web Speech Synthesis Audio Narration (TTS)
  const handleToggleAudioNarration = () => {
    if ('speechSynthesis' in window) {
      if (isAudioPlaying) {
        window.speechSynthesis.cancel();
        setIsAudioPlaying(false);
      } else {
        window.speechSynthesis.cancel();
        const textToSpeech = `${currentChapter.title[selectedLang]}. ${currentChapter.fullStory[selectedLang]}`;
        const utterance = new SpeechSynthesisUtterance(textToSpeech);
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.onend = () => setIsAudioPlaying(false);
        utterance.onerror = () => setIsAudioPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsAudioPlaying(true);
      }
    } else {
      alert('Audio Narration is not supported on this browser.');
    }
  };

  return (
    <div className="space-y-6">
      {/* SEERAH BANNER HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#4A1521] via-[#6A1B29] to-[#2D0B12] rounded-3xl p-6 sm:p-8 text-amber-50 shadow-2xl border border-amber-500/30">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-300" /> Inspired by The Sealed Nectar (الرحيق المختوم) • 3-4 Months Course
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-wide">
              Prophetic Seerah Deep-Dive (سيرة النبي ﷺ)
            </h1>
            <p className="text-xs sm:text-sm text-amber-100/90 font-medium leading-relaxed">
              Explore the comprehensive, in-depth biography of Prophet Muhammad (ﷺ) step-by-step across 30 long-form modules with end-of-lesson assessment tests!
            </p>
          </div>

          {/* Controls: Glossary Drawer, Certificate Button, Audio TTS & Trilingual Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 self-start md:self-auto shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsGlossaryOpen(true)}
              className="px-3.5 py-2 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Users className="w-4 h-4 text-amber-300" /> Key Figures
            </button>

            <button
              onClick={() => setIsCertificateOpen(true)}
              className="px-3.5 py-2 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-burgundy-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer hover:brightness-110"
            >
              <Trophy className="w-4 h-4" /> Certificate
            </button>

            <button
              onClick={handleToggleAudioNarration}
              className={`px-3.5 py-2 rounded-2xl text-xs font-black transition-all flex items-center justify-center gap-2 border shadow-xs cursor-pointer ${
                isAudioPlaying
                  ? 'bg-amber-400 text-burgundy-950 border-amber-300 animate-pulse'
                  : 'bg-black/30 text-amber-200 border-amber-400/30 hover:bg-black/50 hover:text-white'
              }`}
            >
              {isAudioPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
              <span>{isAudioPlaying ? 'Stop' : 'Listen'}</span>
            </button>

            <div className="flex items-center gap-1 bg-black/40 p-1.5 rounded-2xl border border-amber-400/30">
              <button
                onClick={() => handleLangSwitch('english')}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedLang === 'english'
                    ? 'bg-amber-400 text-slate-950 shadow-xs font-black'
                    : 'text-amber-200 hover:text-white'
                }`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => handleLangSwitch('hinglish')}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedLang === 'hinglish'
                    ? 'bg-amber-400 text-slate-950 shadow-xs font-black'
                    : 'text-amber-200 hover:text-white'
                }`}
              >
                💬 Hinglish
              </button>
              <button
                onClick={() => handleLangSwitch('urdu')}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer font-arabic ${
                  selectedLang === 'urdu'
                    ? 'bg-amber-400 text-slate-950 shadow-xs font-black'
                    : 'text-amber-200 hover:text-white'
                }`}
              >
                🇵🇰 اردو
              </button>
            </div>
          </div>
        </div>

        {/* PROGRESS TRACKER BAR */}
        <div className="mt-6 pt-5 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="font-extrabold text-amber-200">Course Completion:</span>
            <div className="flex-1 sm:w-56 bg-black/40 rounded-full h-3 border border-amber-400/30 p-0.5">
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-300 h-full rounded-full transition-all duration-500 shadow-xs"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="font-black text-amber-300">{completedSeerahChapters.length} / {totalModules} ({progressPercent}%)</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-amber-100">
              Pass each lesson exam to unlock the next module!
            </span>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-amber-900/10 shadow-xs">
        {/* ERA FILTER PILLS */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setEraFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer border ${
              eraFilter === 'all'
                ? 'bg-burgundy-900 text-white border-burgundy-950 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            All 30 Mods
          </button>
          <button
            onClick={() => setEraFilter('makkan')}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer border ${
              eraFilter === 'makkan'
                ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
            }`}
          >
            🕋 Makkan (1-20)
          </button>
          <button
            onClick={() => setEraFilter('madinan')}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer border ${
              eraFilter === 'madinan'
                ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            🕌 Madinan (21-30)
          </button>
          <button
            onClick={() => setEraFilter('completed')}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer border ${
              eraFilter === 'completed'
                ? 'bg-purple-900 text-white border-purple-950 shadow-xs'
                : 'bg-purple-50 text-purple-900 border-purple-200 hover:bg-purple-100'
            }`}
          >
            ✅ Completed ({completedSeerahChapters.length})
          </button>
        </div>

        {/* SEARCH INPUT */}
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Seerah (e.g. Badr, Hira, Khadijah)..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs font-bold bg-slate-50 border border-slate-200 focus:outline-none focus:border-amber-500 text-slate-800"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* TIMELINE CHAPTER STRIP (Interactive 1-30 selector) */}
      <div className="bg-white p-3 rounded-2xl border border-amber-900/10 shadow-xs overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {filteredChapters.map((chap) => {
            const originalIndex = SEERAH_CHAPTERS.findIndex((c) => c.id === chap.id);
            const isCurrent = originalIndex === activeChapterIndex;
            const isCompleted = completedSeerahChapters.includes(chap.chapterNumber);

            return (
              <button
                key={chap.id}
                onClick={() => setActiveChapterIndex(originalIndex)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer border ${
                  isCurrent
                    ? 'bg-burgundy-900 text-white border-burgundy-950 shadow-md scale-105'
                    : isCompleted
                    ? 'bg-emerald-50 text-emerald-950 border-emerald-300 hover:bg-emerald-100'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{chap.icon}</span>
                <span>Mod {chap.chapterNumber}</span>
                {isCompleted && (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isCurrent ? 'text-amber-400' : 'text-emerald-600'}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE SEERAH STORY READER CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-900/10 shadow-xl space-y-8">
        {/* CHAPTER HEADER INFO */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-2xl">{currentChapter.icon}</span>
              <span className="px-3 py-0.5 rounded-full bg-amber-100 text-amber-950 text-xs font-black uppercase tracking-wider border border-amber-300">
                {currentChapter.period}
              </span>
              <span className="px-3 py-0.5 rounded-full bg-purple-100 text-purple-950 text-[11px] font-extrabold tracking-wider border border-purple-300">
                {currentChapter.sealedNectarRef}
              </span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-black text-slate-900 ${selectedLang === 'urdu' ? 'font-arabic text-right' : ''}`}>
              {currentChapter.title[selectedLang]}
            </h2>
            <p className="text-sm font-arabic font-bold text-amber-900 text-right">
              {currentChapter.arabicTitle}
            </p>
          </div>

          <button
            onClick={() => handleMarkChapterComplete(currentChapter.chapterNumber)}
            className={`px-4 py-2.5 rounded-2xl font-black text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs shrink-0 ${
              completedSeerahChapters.includes(currentChapter.chapterNumber)
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-amber-400 hover:bg-amber-500 text-burgundy-950 border border-amber-500/40'
            }`}
          >
            <BookmarkCheck className="w-4 h-4" />
            <span>
              {completedSeerahChapters.includes(currentChapter.chapterNumber)
                ? 'Module Completed ✓'
                : 'Mark Completed'}
            </span>
          </button>
        </div>

        {/* FULL STORY NARRATIVE INSPIRED BY THE SEALED NECTAR */}
        <div className="space-y-5">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-300 text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
            <span className="font-black text-amber-900 block mb-1 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-700" /> Module Overview & Context:
            </span>
            <p className={selectedLang === 'urdu' ? 'font-arabic text-right text-base' : ''}>
              {currentChapter.summary[selectedLang]}
            </p>
          </div>

          <div className="prose prose-amber max-w-none text-slate-800 leading-relaxed font-medium space-y-4 text-sm sm:text-base">
            {currentChapter.fullStory[selectedLang].split('\n\n').map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className={`p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-2xs ${
                  selectedLang === 'urdu' ? 'font-arabic text-right text-lg leading-loose text-slate-900' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* QURAN / HADITH GEM HIGHLIGHT */}
        <div className="bg-gradient-to-br from-[#4A1521] to-[#6A1B29] p-6 sm:p-8 rounded-3xl text-amber-50 space-y-3 shadow-lg border border-amber-400/30">
          <div className="flex items-center justify-between text-xs font-black uppercase text-amber-300 tracking-wider">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300" /> Sacred Evidentiary Gem
            </span>
            <span>{currentChapter.hadithOrVerse.reference}</span>
          </div>
          <p className="font-arabic text-xl sm:text-2xl text-center text-amber-200 leading-loose py-2 font-bold">
            {currentChapter.hadithOrVerse.arabic}
          </p>
          <p className={`text-xs sm:text-sm text-center font-bold text-white italic ${selectedLang === 'urdu' ? 'font-arabic text-base' : ''}`}>
            {currentChapter.hadithOrVerse.translation[selectedLang]}
          </p>
        </div>

        {/* KEY MORAL TAKEAWAYS */}
        <div className="space-y-3 bg-emerald-50/80 border border-emerald-200 p-5 sm:p-6 rounded-3xl">
          <h3 className="text-xs font-black uppercase text-emerald-950 tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Prophetic Character & Practical Lessons:
          </h3>
          <ul className="space-y-2">
            {currentChapter.keyTakeaways[selectedLang].map((item, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-extrabold text-emerald-900">
                <span className="text-emerald-600 mt-0.5 font-bold">✦</span>
                <span className={selectedLang === 'urdu' ? 'font-arabic text-right' : ''}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* PERSONAL REFLECTION JOURNAL & NOTES */}
        <div className="bg-amber-50/60 border border-amber-300/80 p-5 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
              <FileEdit className="w-4 h-4 text-amber-700" /> Personal Reflection Journal (Module {currentChapter.chapterNumber})
            </span>
            <button
              onClick={handleSaveNote}
              className="px-3 py-1 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs transition-all cursor-pointer shadow-2xs"
            >
              Save Reflection Note
            </button>
          </div>
          <textarea
            value={activeNoteText}
            onChange={(e) => setActiveNoteText(e.target.value)}
            placeholder="Write your personal reflections, key intentions, or action items from this Seerah lesson..."
            className="w-full h-24 p-3 rounded-xl bg-white border border-amber-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-amber-500 resize-none"
          />
        </div>

        {/* MULTI-QUESTION LESSON EXAM / TEST */}
        <div className="bg-purple-50/90 border-2 border-purple-300 p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-purple-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-200 text-purple-950 text-xs font-black uppercase mb-1">
                <HelpCircle className="w-4 h-4 text-purple-700" /> Module Assessment Test
              </div>
              <h3 className="text-lg font-black text-slate-900">
                Module {currentChapter.chapterNumber} Knowledge Test
              </h3>
            </div>
            <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-purple-900 text-white shadow-xs">
              3 Questions • Test Your Retention
            </span>
          </div>

          <div className="space-y-6">
            {currentChapter.test.map((q, qIdx) => {
              const selectedOption = userAnswers[qIdx];
              const isQuestionCorrect = selectedOption === q.correctIndex;

              return (
                <div key={q.id} className="bg-white p-5 rounded-2xl border border-purple-200 space-y-3 shadow-2xs">
                  <div className="flex items-start justify-between gap-2">
                    <p className={`text-sm font-black text-slate-900 ${selectedLang === 'urdu' ? 'font-arabic text-right text-base' : ''}`}>
                      <span className="text-purple-700 font-extrabold mr-1.5">Q{qIdx + 1}.</span>
                      {q.question[selectedLang]}
                    </p>
                    {isTestSubmitted && (
                      <span className={`p-1 rounded-full text-white shrink-0 ${isQuestionCorrect ? 'bg-emerald-600' : 'bg-rose-600'}`}>
                        {isQuestionCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options[selectedLang].map((option, optIdx) => {
                      const isOptionSelected = selectedOption === optIdx;
                      const isCorrectOption = optIdx === q.correctIndex;

                      let btnStyle = 'bg-slate-50 text-slate-800 border-slate-200 hover:border-purple-300';
                      if (isTestSubmitted) {
                        if (isCorrectOption) btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-black';
                        else if (isOptionSelected) btnStyle = 'bg-rose-500 text-white border-rose-600 font-black';
                      } else if (isOptionSelected) {
                        btnStyle = 'bg-purple-900 text-white border-purple-950 font-black shadow-md';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isTestSubmitted}
                          onClick={() => handleSelectAnswer(qIdx, optIdx)}
                          className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${btnStyle} ${
                            selectedLang === 'urdu' ? 'font-arabic text-right' : ''
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {isTestSubmitted && (
                    <div className="mt-2 p-3 rounded-xl bg-purple-50 text-xs font-extrabold text-purple-950 border border-purple-200">
                      <span className="font-black text-purple-900 block mb-0.5">Explanation:</span>
                      <p className={selectedLang === 'urdu' ? 'font-arabic text-right' : ''}>
                        {q.explanation[selectedLang]}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!isTestSubmitted ? (
            <button
              onClick={handleTestSubmit}
              className="w-full py-3.5 rounded-2xl font-black text-xs bg-purple-900 hover:bg-purple-950 text-white transition-all cursor-pointer shadow-md"
            >
              Submit Module Test & Verify Answers
            </button>
          ) : (
            <div className="p-5 rounded-2xl bg-white border-2 border-purple-300 text-center space-y-2">
              <span className="text-xl">🎉</span>
              <h4 className="text-base font-black text-purple-950">
                Test Submitted! You completed Module {currentChapter.chapterNumber}.
              </h4>
              <p className="text-xs font-bold text-slate-600">
                Review your answers above or proceed to the next module!
              </p>
            </div>
          )}
        </div>

        {/* BOTTOM NAVIGATION FOOTER */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <button
            disabled={activeChapterIndex === 0}
            onClick={handlePrevChapter}
            className={`px-4 py-2.5 rounded-2xl font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              activeChapterIndex === 0
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> Previous Module
          </button>

          <span className="text-xs font-black text-slate-500">
            Module {activeChapterIndex + 1} of {totalModules}
          </span>

          <button
            disabled={activeChapterIndex === totalModules - 1}
            onClick={handleNextChapter}
            className={`px-4 py-2.5 rounded-2xl font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
              activeChapterIndex === totalModules - 1
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-burgundy-900 hover:bg-burgundy-950 text-white'
            }`}
          >
            Next Module <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KEY FIGURES GLOSSARY MODAL */}
      {isGlossaryOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border-2 border-amber-400">
            {/* MODAL HEADER */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#4A1521] via-[#6A1B29] to-[#2D0B12] text-white flex items-center justify-between shrink-0 border-b border-amber-500/30">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-wide">Key Historical Figures of Seerah</h3>
                  <p className="text-xs text-amber-200/80 font-medium">Quick reference guide of companions, heroines, & historical figures</p>
                </div>
              </div>
              <button
                onClick={() => setIsGlossaryOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* SEARCH & CATEGORY FILTER BAR */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={glossarySearchQuery}
                  onChange={(e) => setGlossarySearchQuery(e.target.value)}
                  placeholder="Search figure by name, title, or biography..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl text-xs font-bold bg-white border border-slate-200 focus:outline-none focus:border-amber-500 text-slate-800"
                />
                {glossarySearchQuery && (
                  <button
                    onClick={() => setGlossarySearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* CATEGORY TABS */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
                <button
                  onClick={() => setGlossaryCategory('all')}
                  className={`px-3 py-1.5 rounded-xl font-extrabold cursor-pointer transition-all border ${
                    glossaryCategory === 'all'
                      ? 'bg-burgundy-900 text-white border-burgundy-950 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  All ({SEERAH_GLOSSARY.length})
                </button>
                <button
                  onClick={() => setGlossaryCategory('caliphs')}
                  className={`px-3 py-1.5 rounded-xl font-extrabold cursor-pointer transition-all border ${
                    glossaryCategory === 'caliphs'
                      ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                      : 'bg-white text-amber-900 border-slate-200 hover:bg-amber-50'
                  }`}
                >
                  ⭐ Caliphs
                </button>
                <button
                  onClick={() => setGlossaryCategory('women')}
                  className={`px-3 py-1.5 rounded-xl font-extrabold cursor-pointer transition-all border ${
                    glossaryCategory === 'women'
                      ? 'bg-purple-700 text-white border-purple-800 shadow-xs'
                      : 'bg-white text-purple-900 border-slate-200 hover:bg-purple-50'
                  }`}
                >
                  🌸 Women of Islam
                </button>
                <button
                  onClick={() => setGlossaryCategory('warriors')}
                  className={`px-3 py-1.5 rounded-xl font-extrabold cursor-pointer transition-all border ${
                    glossaryCategory === 'warriors'
                      ? 'bg-rose-700 text-white border-rose-800 shadow-xs'
                      : 'bg-white text-rose-900 border-slate-200 hover:bg-rose-50'
                  }`}
                >
                  🛡️ Warriors & Heroes
                </button>
                <button
                  onClick={() => setGlossaryCategory('scholars')}
                  className={`px-3 py-1.5 rounded-xl font-extrabold cursor-pointer transition-all border ${
                    glossaryCategory === 'scholars'
                      ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                      : 'bg-white text-emerald-900 border-slate-200 hover:bg-emerald-50'
                  }`}
                >
                  📜 Ambassadors & Scholars
                </button>
                <button
                  onClick={() => setGlossaryCategory('leaders')}
                  className={`px-3 py-1.5 rounded-xl font-extrabold cursor-pointer transition-all border ${
                    glossaryCategory === 'leaders'
                      ? 'bg-blue-700 text-white border-blue-800 shadow-xs'
                      : 'bg-white text-blue-900 border-slate-200 hover:bg-blue-50'
                  }`}
                >
                  👑 Kings & Leaders
                </button>
              </div>
            </div>

            {/* FIGURES LIST */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 flex-1 bg-slate-50/50">
              {filteredGlossary.length > 0 ? (
                filteredGlossary.map((person) => (
                  <div key={person.id} className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-900/10 shadow-2xs space-y-2.5 transition-all hover:border-amber-300">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-black text-slate-900">{person.name}</h4>
                          <span className="font-arabic font-bold text-amber-900 text-sm">{person.arabicName}</span>
                        </div>
                        <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 text-[10px] font-black uppercase tracking-wider border border-amber-300">
                          {person.title[selectedLang]}
                        </span>
                      </div>

                      <button
                        onClick={() => handleJumpToModule(person.featuredModuleIndex)}
                        className="px-3 py-1.5 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-black text-[11px] flex items-center gap-1 transition-all cursor-pointer shadow-2xs shrink-0"
                      >
                        <span>Jump to Module</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className={`text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed ${selectedLang === 'urdu' ? 'font-arabic text-right text-base' : ''}`}>
                      {person.bio[selectedLang]}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center space-y-2">
                  <p className="text-sm font-black text-slate-600">No historical figures match your search or filter.</p>
                  <button
                    onClick={() => {
                      setGlossarySearchQuery('');
                      setGlossaryCategory('all');
                    }}
                    className="text-xs font-black text-amber-700 hover:underline cursor-pointer"
                  >
                    Reset Search & Filters
                  </button>
                </div>
              )}
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between shrink-0">
              <span className="text-xs font-bold text-slate-500">
                Showing {filteredGlossary.length} of {SEERAH_GLOSSARY.length} figures
              </span>
              <button
                onClick={() => setIsGlossaryOpen(false)}
                className="px-5 py-2 rounded-xl bg-burgundy-900 hover:bg-burgundy-950 text-white font-black text-xs cursor-pointer shadow-2xs"
              >
                Close Glossary
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SEERAH COURSE COMPLETION CERTIFICATE MODAL */}
      {isCertificateOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border-4 border-amber-400 space-y-6 text-center relative overflow-hidden">
            <button
              onClick={() => setIsCertificateOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-black uppercase">
                <Trophy className="w-4 h-4 text-amber-600" /> Official Certificate of Achievement
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-burgundy-950">
                Prophetic Seerah Mastery (سيرة النبي ﷺ)
              </h2>
              <p className="text-xs font-bold text-slate-500">
                Inspired by Ar-Raheeq Al-Makhtum • 30 Deep-Dive Modules & Exams
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/80 border-2 border-dashed border-amber-300 space-y-3">
              <p className="text-xs font-extrabold uppercase text-amber-900 tracking-widest">
                This is to certify that
              </p>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="text-xl sm:text-2xl font-black text-center text-burgundy-900 border-b-2 border-amber-400 focus:outline-none bg-transparent w-full"
                placeholder="Enter Your Name"
              />
              <p className="text-xs font-semibold text-slate-700 leading-relaxed max-w-lg mx-auto">
                Has successfully completed the 30-Module Prophetic Seerah Journey course, passing all module retention tests with distinction.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-extrabold text-slate-600 pt-2 border-t border-slate-100">
              <div>
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Course Status</span>
                <span className="text-emerald-700 font-black">{completedSeerahChapters.length} / 30 Modules Completed</span>
              </div>
              <div>
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Verification Badge</span>
                <span className="text-amber-600 font-black">⭐ Tajweed Al-Hira Certified</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-burgundy-950 font-black text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4" /> Print / Save Certificate
              </button>
              <button
                onClick={() => setIsCertificateOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
