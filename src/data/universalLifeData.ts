export interface PrincipleDetail {
  id: string;
  number: number;
  title: { english: string; hinglish: string; urdu: string };
  arabicTitle: string;
  icon: string;
  summary: { english: string; hinglish: string; urdu: string };
  quranVerse?: { arabic: string; reference: string; translation: { english: string; hinglish: string; urdu: string } };
  hadithRef?: { arabic: string; reference: string; translation: { english: string; hinglish: string; urdu: string } };
  actionItems: { english: string[]; hinglish: string[]; urdu: string[] };
}

export interface MuhasabahItem {
  id: string;
  category: 'deen' | 'time' | 'tawakkul' | 'character';
  question: { english: string; hinglish: string; urdu: string };
  points: number;
  icon: string;
}

export interface ReflectionStory {
  id: string;
  title: { english: string; hinglish: string; urdu: string };
  arabicTitle: string;
  theme: string;
  storyText: { english: string; hinglish: string; urdu: string };
  moralTakeaway: { english: string; hinglish: string; urdu: string };
  hadithKey: string;
}

export const UNIVERSAL_PRINCIPLES: PrincipleDetail[] = [
  // 1. Tawakkul in Allah
  {
    id: 'tawakkul',
    number: 1,
    title: {
      english: 'Unshakable Tawakkul (Trust in Allah)',
      hinglish: 'Allah par Mukammal Tawakkul (Trust)',
      urdu: 'اللہ تعالیٰ پر کامل توکل اور بھروسہ',
    },
    arabicTitle: 'التَّوَكُّلُ عَلَى اللَّهِ',
    icon: '🤲',
    summary: {
      english: 'Put in your maximum effort (Asbab), then rest your heart with total peace in Allah\'s decree (Qadar).',
      hinglish: 'Puri mehnat karein, phir nateeje ke liye apna dil Allah ke faisle par mukammal mutmain rakhein.',
      urdu: 'اپنی بساط بھر مکمل محنت کریں، پھر نتیجے کے لیے اپنے دل کو اللہ تعالی کے فیصلے پر پرسکون رکھیں۔',
    },
    quranVerse: {
      arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ',
      reference: 'Surah At-Talaq (65:3)',
      translation: {
        english: '"And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."',
        hinglish: '"Aur jo Allah par bharosa rakhega, Allah uske liye kaafi hai. Beshak Allah apna kaam poora karke rehta hai."',
        urdu: '"اور جو شخص اللہ پر توکل کرے گا تو اللہ اس کے لیے کافی ہے۔ بیشک اللہ اپنا حکم پورا کر کے رہتا ہے۔"',
      },
    },
    hadithRef: {
      arabic: 'لَوْ أَنَّكُمْ تَتَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ',
      reference: 'Sunan At-Tirmidhi (2344)',
      translation: {
        english: '"If you were to rely upon Allah with true reliance, He would provide for you just as He provides for the birds: they go out hungry and return full."',
        hinglish: '"Agar tum Allah par waisa bharosa karo jaisa haq hai, to wo tumhein aise rizq dega jaise parindon ko deta hai."',
        urdu: '"اگر تم اللہ پر ویسا ہی توکل کرو جیسا کہ اس کا حق ہے، تو وہ تمہیں ایسے رزق دے گا جیسے پرندوں کو دیتا ہے۔"',
      },
    },
    actionItems: {
      english: [
        'Tie your camel: Put 100% focused effort into your work, study, or task.',
        'Release anxiety: Say "Hasbunallahu wa Ni\'mal Wakeel" when faced with uncertainty.',
        'Accept outcomes: Never say "if only I did X", say "Qadarullah wa ma sha\'a fa\'al".',
      ],
      hinglish: [
        'Pehle apni mehnat poori karein: Padhayi ya kaam me 100% effort daalein.',
        'Fikr khatam karein: Kisi bhi pareshani me "Hasbunallahu wa Ni\'mal Wakeel" padhein.',
        'Nateeja qabool karein: "Kaash aisa karta" kehne ke bajaye "Qadarullah" bolein.',
      ],
      urdu: [
        'پہلے پوری محنت کریں: اپنے کام یا تعلیم میں ۱۰۰ فیصد کوشش شامل کریں۔',
        'تشویش ختم کریں: پریشانی کے وقت "حسبنا الله ونعم الوكيل" پڑھیں۔',
        'نتیجہ قبول کریں: "کاش میں ایسا کرتا" کہنے کے بجائے "قدر الله وما شاء فعل" کہیں۔',
      ],
    },
  },

  // 2. Time as an Amanah
  {
    id: 'time-management',
    number: 2,
    title: {
      english: 'Time as an Amanah (Time Management & Discipline)',
      hinglish: 'Waqt ki Amanah & Discipline',
      urdu: 'وقت ایک امانت اور وقت کی پابندی',
    },
    arabicTitle: 'الوَقْتُ أَمَانَةٌ وَإِدَارَةُ العُمْرِ',
    icon: '⏰',
    summary: {
      english: 'Time is non-renewable capital given by Allah. Procrastination is wasting Allah\'s sacred trust.',
      hinglish: 'Waqt Allah ki taraf se di gayi aisi amanah hai jo dubara nahi milti. Procrastination karna waqt ko zaya karna hai.',
      urdu: 'وقت اللہ تعالیٰ کی طرف سے دی گئی وہ امانت ہے جو دوبارہ نہیں ملتی۔ کام کو ٹالنا وقت ضائع کرنا ہے۔',
    },
    quranVerse: {
      arabic: 'وَالْعَصْرِ ۙ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۙ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ',
      reference: 'Surah Al-Asr (103:1-3)',
      translation: {
        english: '"By time, indeed mankind is in loss, except for those who believe and do righteous deeds and advise each other to truth and patience."',
        hinglish: '"Zamana ki qasam! Beshak insaan ghate (loss) me hai, siwaye unke jo iman laaye aur ache kaam kiye."',
        urdu: '"زمانے کی قسم! بیشک انسان خسارے میں ہے، سوائے ان کے جو ایمان لائے اور جنہوں نے نیک اعمال کیے۔"',
      },
    },
    hadithRef: {
      arabic: 'نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ',
      reference: 'Sahih Al-Bukhari (6412)',
      translation: {
        english: '"Two blessings which many people lose: Health and Free Time."',
        hinglish: '"Do neematein aisi hain jinme aksar log dhokhe me rehte hain: Sehat aur Fursat (free time)."',
        urdu: '"دو نعمتیں ایسی ہیں جن میں اکثر لوگ دھوکے میں رہتے ہیں: صحت اور فراغت۔"',
      },
    },
    actionItems: {
      english: [
        'Structure your day around 5 Daily Salah (the original Islamic timeblocks).',
        'Capitalize on Fajr hours: Early mornings carry divine Barakah.',
        'Use 25-minute Deep Focus blocks for work/study without phone distractions.',
      ],
      hinglish: [
        'Apna din 5 Namazon ke hisab se organize karein.',
        'Fajr ke baad ke waqt me kaam karein—usme Allah ki Barakah hoti hai.',
        '25 minute bina phone touch kiye poore focus se kaam karein.',
      ],
      urdu: [
        'اپنے دن کو ۵ وقت کی نمازوں کے اوقات کے مطابق ترتیب دیں۔',
        'فجر کے بعد کے وقت میں کام کریں—اس میں برکت رکھی گئی ہے۔',
        '۲۵ منٹ فون کے استعمال کے بغیر مکمل توجہ کے ساتھ کام کریں۔',
      ],
    },
  },

  // 3. Daily Muhasabah
  {
    id: 'muhasabah',
    number: 3,
    title: {
      english: 'Daily Muhasabah (Self-Accountability & Reflection)',
      hinglish: 'Rozana Muhasabah (Self-Audit)',
      urdu: 'روزانہ کا محاسبہ اور خود احتسابی',
    },
    arabicTitle: 'المُحَاسَبَةُ وَمُرَاقَبَةُ النَّفْسِ',
    icon: '📊',
    summary: {
      english: 'Audit yourself tonight before you are audited on the Day of Judgment.',
      hinglish: 'Qayamat ke din hisab hone se pehle rozana raat ko apna hisab khud karein.',
      urdu: 'قیامت کے دن حساب کیے جانے سے پہلے روزانہ رات کو اپنا حساب خود کریں۔',
    },
    quranVerse: {
      arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ',
      reference: 'Surah Al-Hashr (59:18)',
      translation: {
        english: '"O you who have believed, fear Allah. And let every soul look to what it has put forth for tomorrow."',
        hinglish: '"Aye iman walon! Allah se daro, aur har shakhs ko dekhna chahiye ki usne kal (Akhirah) ke liye kya bheja hai."',
        urdu: '"اے ایمان والو! اللہ سے ڈرو، اور ہر شخص کو دیکھنا چاہیے کہ اس نے کل (آخرت) کے لیے کیا آگے بھیجا ہے۔"',
      },
    },
    hadithRef: {
      arabic: 'حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا',
      reference: 'Saying of Umar ibn Al-Khattab (RA)',
      translation: {
        english: '"Bring yourself to account before you are brought to account."',
        hinglish: '"Apna hisab khud karo isse pehle ki tumhara hisab liya jaaye."',
        urdu: '"اپنا محاسبہ خود کرو اس سے پہلے کہ تمہارا حساب لیا جائے۔"',
      },
    },
    actionItems: {
      english: [
        'Spend 90 seconds before sleeping reviewing your day\'s deeds.',
        'Ask: Did I fulfill my duties with excellence (Itqan)? Did I hurt anyone?',
        'Say Astaghfirullah for errors & Alhamdulillah for good deeds accomplished.',
      ],
      hinglish: [
        'Sone se pehle 90 second apne din ka hisab karein.',
        'Poochhein: Kya maine apna kaam imandari se kiya? Kya kisi ko takleef di?',
        'Galtiyon par Astaghfirullah aur achhaaiyon par Alhamdulillah bolein.',
      ],
      urdu: [
        'سوتے وقت ۹۰ سیکنڈ میں اپنے دن بھر کے اعمال کا جائزہ لیں۔',
        'پوچھیں: کیا میں نے اپنا کام ایمانداری سے کیا؟ کیا کسی کو دکھ پہنچایا؟',
        'کوتاہیوں پر استغفار اور اچھے اعمال پر الحمد للہ کہیں۔',
      ],
    },
  },

  // 4. Dunya is Temporary & Character (Akhlaq)
  {
    id: 'akhrah-akhlaq',
    number: 4,
    title: {
      english: 'Dunya is Temporary & Noble Character (Akhlaq)',
      hinglish: 'Dunya Fani Hai & Akhlaq-e-Hasanah',
      urdu: 'دنیا کی عارضی حقیقت اور حسنِ اخلاق',
    },
    arabicTitle: 'الدُّنْيَا مَزْرَعَةُ الآخِرَةِ وَحُسْنُ الخُلُقِ',
    icon: '📜',
    summary: {
      english: 'Dunya is a temporary stepping stone. Your noble character, honesty, and good deeds are your eternal legacy.',
      hinglish: 'Dunya ek chhota sa safar hai. Aapka achha akhlaq, imandari aur naik aamal hi aapka asal aasaas hain.',
      urdu: 'دنیا ایک عارضی سفرگاہ ہے۔ آپ کا بہترین اخلاق، دیانتداری اور نیک اعمال ہی آپ کا حقیقی سرمایہ ہیں۔',
    },
    quranVerse: {
      arabic: 'وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ',
      reference: 'Surah Al-Hadid (57:20)',
      translation: {
        english: '"And what is the worldly life except enjoyment of delusion."',
        hinglish: '"Aur dunya ki zindagi dhokhe ke saamaan ke siwa kuch nahi hai."',
        urdu: '"اور دنیا کی زندگی دھوکے کے سامان کے سوا کچھ نہیں۔"',
      },
    },
    hadithRef: {
      arabic: 'إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ',
      reference: 'Musnad Ahmad (8952)',
      translation: {
        english: '"I was only sent to perfect noble character."',
        hinglish: '"Mujhe isi liye bheja gaya hai taaki main achhe akhlaq ko poora karoon."',
        urdu: '"مجھے صرف اس لیے بھیجا گیا ہے تاکہ میں بہترین اخلاق کی تکمیل کروں۔"',
      },
    },
    actionItems: {
      english: [
        'Treat every human with kindness, honesty, and soft speech.',
        'Never backbite, spread unverified rumors, or harm others\' dignity.',
        'Build Sadaqah Jariyah (ongoing charity & beneficial knowledge) that outlives you.',
      ],
      hinglish: [
        'Har shakhs se izzat, narm awaz aur imandari se baat karein.',
        'Chugli, gheebah ya kisi ki izzat ko nuksan pahunchane se bachein.',
        'Aisa kaam karein jo aapke marne ke baad bhi sawab deta rahe.',
      ],
      urdu: [
        'ہر انسان سے عزت، نرم لہجے اور سچائی کے ساتھ بات کریں۔',
        'غیبت، چغلی یا کسی کی عزت کو نقصان پہنچانے سے بچیں۔',
        'ایسا صدقہ جاریہ قائم کریں جو آپ کی وفات کے بعد بھی ثواب دیتا رہے۔',
      ],
    },
  },
];

export const DAILY_MUHASABAH_ITEMS: MuhasabahItem[] = [
  {
    id: 'salah',
    category: 'deen',
    question: {
      english: 'Did I offer all 5 Daily Prayers (Salah) with focus & punctuality?',
      hinglish: 'Kya maine aaj 5on waqt ki Namaz waqt par aur dhyaan se padhi?',
      urdu: 'کیا میں نے آج پانچوں وقت کی نمازیں وقت پر اور خشوع سے ادا کیں؟',
    },
    points: 20,
    icon: '🕌',
  },
  {
    id: 'quran_dhikr',
    category: 'deen',
    question: {
      english: 'Did I recite Qur\'an & recite Morning/Evening Adhkar?',
      hinglish: 'Kya maine Quran ki tilawat aur Subah/Shaam ke Azkar padhe?',
      urdu: 'کیا میں نے قرآن پاک کی تلاوت اور صبح و شام کے اذکار کیے؟',
    },
    points: 20,
    icon: '📖',
  },
  {
    id: 'tawakkul_check',
    category: 'tawakkul',
    question: {
      english: 'Did I put in full effort and leave outcomes peacefully to Allah (Tawakkul)?',
      hinglish: 'Kya maine poori mehnat ki aur nateeja sukoon se Allah par chhoda?',
      urdu: 'کیا میں نے اپنی مکمل محنت کی اور نتیجہ پرسکون ہو کر اللہ پر چھوڑا؟',
    },
    points: 20,
    icon: '🤲',
  },
  {
    id: 'time_discipline',
    category: 'time',
    question: {
      english: 'Did I manage my time as an Amanah without wasting hours in procrastination?',
      hinglish: 'Kya maine waqt ko amanah samajh kar bina zaya kiye kaam kiya?',
      urdu: 'کیا میں نے وقت کو امانت سمجھ کر بغیر ضائع کیے کام کیا؟',
    },
    points: 20,
    icon: '⏰',
  },
  {
    id: 'character_speech',
    category: 'character',
    question: {
      english: 'Was I honest, soft-spoken, and free from backbiting/gossip today?',
      hinglish: 'Kya maine aaj imandari, narm awaz aur bina gheebah ke baat ki?',
      urdu: 'کیا میں نے آج دیانتداری، نرم لہجے اور غیبت سے پاک بات چیت کی؟',
    },
    points: 20,
    icon: '❤️',
  },
];

export const REFLECTIVE_STORIES: ReflectionStory[] = [
  {
    id: 'story-umar-dust',
    title: {
      english: 'The Dust & The Empire: Caliph Umar (RA)',
      hinglish: 'Mitti Aur Sultanat: Hazrat Umar (RA)',
      urdu: 'مٹی اور سلطنت: حضرت عمر فاروقؓ کا استغناء',
    },
    arabicTitle: 'عُمَرُ بْنُ الخَطَّابِ وَتَوَاضُعُ الحَاكِمِ',
    theme: 'Zuhd & Dunya is Temporary',
    storyText: {
      english: 'When an envoy from the Roman Empire arrived in Madinah expecting a grand palace, he found Caliph Umar (RA) sleeping on the bare ground under a date tree with no bodyguards. The envoy remarked: "You ruled with justice, so you felt safe, so you slept in peace."',
      hinglish: 'Jab Rome ka safir Madinah aaya to use koi shahi mehal nahi mila. Usne Hazrat Umar (RA) ko ek khajoor ke ped ke niche mitti par sote hue paya. Safir ne kaha: "Aapne insaf kiya, isliye aap nishchint hakar sukoon se so gaye."',
      urdu: 'جب روم کا سفیر مدینہ منورہ پہنچا تو اسے کوئی شاہی محل نہ ملا۔ اس نے خلیفۂ وقت حضرت عمر فاروقؓ کو کھجور کے درخت کے نیچے مٹی پر سوتے ہوئے پایا۔ سفیر نے کہا: "آپ نے عدل کیا، اس لیے آپ بے خوف ہو کر سکون سے سو گئے۔"',
    },
    moralTakeaway: {
      english: 'True peace comes from justice, clean intention, and knowing Dunya is temporary.',
      hinglish: 'Asal sukoon insaf, saaf niyat aur dunya ko fani samajhne se aata hai.',
      urdu: 'حقیقی سکون عدل، پاک نیت اور دنیا کو فانی سمجھنے سے حاصل ہوتا ہے۔',
    },
    hadithKey: 'Justice brings safety; material luxury passes away.',
  },
  {
    id: 'story-bird-tawakkul',
    title: {
      english: 'The Bird\'s Provision & Pure Trust',
      hinglish: 'Parinde Ka Rizq Aur Sachha Tawakkul',
      urdu: 'پرندے کا رزق اور سچا توکل',
    },
    arabicTitle: 'تَوَكُّلُ الطَّيْرِ وَاليَقِينُ',
    theme: 'Tawakkul & Trust in Allah',
    storyText: {
      english: 'Every morning, millions of birds fly out of their nests with empty stomachs. They do not own storehouses or bank accounts, yet they fly out doing effort, and Allah fills their hunger every evening. The Prophet (ﷺ) taught us to have this same calm reliance in heart.',
      hinglish: 'Har subah karodon parinde khali pet apne ghoslon se nikalte hain. Unke paas koi bank account nahi hota, phir bhi wo mehnat karte hain aur Allah unhe pet bhar kar lautaata hai.',
      urdu: 'ہر صبح لاکھوں پرندے خالی پیٹ اپنے گھونسلوں سے نکلتے ہیں۔ ان کے پاس کوئی بینک اکاؤنٹ نہیں ہوتا، لیکن وہ محنت کرتے ہیں اور اللہ انہیں پیٹ بھر کر واپس لاتا ہے۔',
    },
    moralTakeaway: {
      english: 'Fly out with full effort, but keep your heart at 100% peace trusting Ar-Razzaq.',
      hinglish: 'Mehnat poori karein, lekin dil me rizq dene wale Ar-Razzaq par mukammal yaqeen rakhein.',
      urdu: 'محنت پوری کریں، لیکن دل میں رزق دینے والے الرزاق پر مکمل یقین رکھیں۔',
    },
    hadithKey: 'Tawakkul removes anxiety about provision.',
  },
  {
    id: 'story-honest-merchant',
    title: {
      english: 'The Honest Merchant of Madinah',
      hinglish: 'Madinah Ka Imandar Tajir',
      urdu: 'مدینہ کا ایماندار تاجر',
    },
    arabicTitle: 'التَّاجِرُ الصَّدُوقُ الأَمِينُ',
    theme: 'Integrity & Amanah in Work',
    storyText: {
      english: 'A merchant during the time of the Prophet (ﷺ) explicitly pointed out a small defect in his grain before taking money. The customer offered full price anyway, moved by his honesty. The Prophet (ﷺ) stated: "The truthful, trustworthy merchant will be with the Prophets and martyrs on Resurrection."',
      hinglish: 'Ek tajir ne apna anaj bechte waqt khareeddaar ko usme moujood chhota sa nuqs pehle hi bata diya. Khareeddaar uski imandari se itna mutassir hua ki poori qeemat di. Prophet (ﷺ) ne farmaya ki imandar tajir Qayamat me Anbiya ke sath honge.',
      urdu: 'ایک تاجر نے غلہ بیچتے وقت خریدار کو اس میں موجود چھوٹا سا نقص پہلے ہی بتا دیا۔ خریدار اس کی دیانتداری سے اتنا متاثر ہوا کہ پوری قیمت ادا کی۔ آپ ﷺ نے فرمایا کہ سچا اور امین تاجر قیامت میں انبیاء کے ساتھ ہوگا۔',
    },
    moralTakeaway: {
      english: 'Honesty in work, contracts, and time brings divine Barakah that money cannot buy.',
      hinglish: 'Kaam aur waqt me imandari se wo Barakah aati hai jo paise se nahi khareedi ja sakti.',
      urdu: 'کام اور وقت میں دیانتداری سے وہ برکت آتی ہے جو پیسے سے نہیں خریدی جا سکتی۔',
    },
    hadithKey: 'Honesty builds outliving Barakah in Akhirah.',
  },
];
