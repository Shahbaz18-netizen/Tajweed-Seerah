export interface SeerahTestQuestion {
  id: string;
  question: {
    english: string;
    hinglish: string;
    urdu: string;
  };
  options: {
    english: string[];
    hinglish: string[];
    urdu: string[];
  };
  correctIndex: number;
  explanation: {
    english: string;
    hinglish: string;
    urdu: string;
  };
}

export interface SeerahChapter {
  id: string;
  chapterNumber: number;
  period: string;
  title: {
    english: string;
    hinglish: string;
    urdu: string;
  };
  arabicTitle: string;
  icon: string;
  sealedNectarRef: string;
  summary: {
    english: string;
    hinglish: string;
    urdu: string;
  };
  fullStory: {
    english: string;
    hinglish: string;
    urdu: string;
  };
  keyTakeaways: {
    english: string[];
    hinglish: string[];
    urdu: string[];
  };
  hadithOrVerse: {
    arabic: string;
    reference: string;
    translation: {
      english: string;
      hinglish: string;
      urdu: string;
    };
  };
  test: SeerahTestQuestion[];
}

export const SEERAH_CHAPTERS: SeerahChapter[] = [
  // MODULE 1
  {
    id: 'seerah-1',
    chapterNumber: 1,
    period: 'Module 1 • Pre-Islamic Arabia & Ishmaelite Lineage',
    title: {
      english: '1. Geography of Arabia, Lineage of Ishmael (AS) & Ancestry of Quraysh',
      hinglish: '1. Arab Ka Jugrafia, Hazrat Ishmael (AS) Ki Nasal Aur Quraysh Ka Khandan',
      urdu: '۱. جغرافیۂ عرب، نسلِ اسماعیل علیہ السلام اور قریش کا نسبی شرف'
    },
    arabicTitle: 'موقع العرب وأقوامها ونسب النبي الشريف',
    icon: '🏜️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 1: Location & Tribes of Arabia',
    summary: {
      english: 'Detailed exploration of the geographical positioning of Arabia, the lineage of Prophet Ibrahim (AS) and Isma\'il (AS), the origin of Arab tribes, and the noble ancestry of Quraysh.',
      hinglish: 'Arab ke jugrafia, Hazrat Ibrahim (AS) aur Isma\'il (AS) ki nasli tareekh, Arab ke qabail aur Quraysh ke aala nasab ki mukammal tafseel.',
      urdu: 'عرب کے جغرافیائی وقوع، حضرت ابراہیم و اسماعیل علیہما السلام کے نسبی سلسلے اور قریش کے اعلیٰ ترین نسب کی تفصیلی تاریخ۔'
    },
    fullStory: {
      english: `According to *The Sealed Nectar (Ar-Raheeq Al-Makhtum)* by Safiur Rahman Mubarakpuri, understanding the Seerah begins with the geography and demographic roots of Arabia. The Arabian Peninsula was bounded by the Red Sea to the west, the Arabian Gulf to the east, the Indian Ocean to the south, and the Syrian desert to the north. This strategic isolation protected Arabia from conquest by external superpowers like the Byzantine and Persian Empires, keeping its language, customs, and spirit uncorrupted.

Historians divide the Arab peoples into three distinct categories:
1. **Arab-e-Ba'idah (The Extinct Arabs)**: Ancient tribes such as 'Aad, Thamud, Tasm, and Jadis who perished due to disobedience to Allah's prophets.
2. **Arab-e-A'ribah (The Pure Arabs)**: Descendants of Qahtan who originated in Yemen, including famous tribes like Ma'rib and Jurhum.
3. **Arab-e-Musta'ribah (The Arabized Arabs)**: Descendants of Prophet Isma'il (AS), son of Ibrahim (AS).

When Ibrahim (AS) left his wife Hajar and infant son Isma'il in the barren valley of Makkah by divine command, the miraculous Spring of Zamzam gushed forth. The Yemeni tribe of Jurhum settled nearby with Hajar's permission. Isma'il (AS) grew up among them, learned Arabic, and married into Jurhum. Together with Ibrahim (AS), he built the Holy Ka'bah as the universal epicenter of monotheism (Tawheed).

From Isma'il's lineage descended **Adnan**, from whom descended **Fihr (nicknamed Quraysh)**. Quraysh split into noble branches, including Banu Hashim. Prophet Muhammad (ﷺ) said: *"Allah chose Ishmael from the children of Abraham, chose Banu Kinanah from Ishmael, chose Quraysh from Banu Kinanah, chose Banu Hashim from Quraysh, and chose me from Banu Hashim."* Thus, the Prophet possessed the purest and most noble lineage in human history.`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, Seerah ko samajhne ke liye Arab ke jugrafia aur nasab ko samajhna zaroori hai. Arab ka ilaqah Red Sea, Arabian Gulf aur Indian Ocean se ghira tha. Iss ilaqe ki qudrati hifazat ne ise Rome aur Persia jaisi super powers ke qabze se bachaye rakha.

Arab logon ko 3 qismon mein baant te hain: Arab-e-Ba'idah, Arab-e-A'ribah aur Arab-e-Musta'ribah. Hazrat Ibrahim (AS) aur Isma'il (AS) ne Makkah mein Ka'bah ko Ek Allah ki ibadat ke liye tameer kiya tha. Isma'il (AS) ki nasal se **Adnan** aur unse **Quraysh** paida hue. Nabi (ﷺ) ne farmaya: *"Allah ne Ibrahim ki nasal se Isma'il ko chuna, Kinanah se Quraysh ko, aur Banu Hashim se mujhe chuna."*`,
      urdu: `*الرحیق المختوم* کی شاندار تفصیلات کے مطابق، سیرتِ نبوی کے فہم کے لیے عرب کے جغرافیائی وقوع اور نسبی تاریخ کا جاننا ضروری ہے۔ جزیرہ نما عرب بحرِ احمر، خلیجِ عرب اور بحرِ ہند کے درمیان واقع تھا۔ اس قدرتی حفاظت کی بنا پر یہ خطہ سپر پاورز کے تسلط سے محفوظ رہا۔

مورخین عرب اقوام کو تین اقسام میں تقسیم کرتے ہیں: عربِ بائدہ، عربِ عاربہ اور عربِ مستعربہ۔ حضرت ابراہیم اور اسماعیل علیہما السلام نے مکہ میں بیت اللہ کی تعمیر کی اور توحید کا مرکز بنایا۔ اسی نسل سے عدنان اور قریش کا سلسلہ چلا۔ رسول اللہ ﷺ نے ارشاد فرمایا: *"اللہ تعالیٰ نے اولادِ ابراہیم میں سے اسماعیل کو، اور قریش میں سے بنو ہاشم اور بنو ہاشم میں سے مجھے منتخب فرمایا۔"*`
    },
    keyTakeaways: {
      english: [
        'Prophet Muhammad (ﷺ) holds the purest, most noble lineage tracing directly back to Ibrahim (AS).',
        'Geographical isolation kept Arabian language and character uncorrupted for divine revelation.',
        'Zamzam and the Ka\'bah are eternal monuments of Ibrahim and Isma\'il\'s absolute submission to Allah.'
      ],
      hinglish: [
        'Nabi (ﷺ) ka nasab Hazrat Ibrahim (AS) se joda sabse paakizah nasab hai.',
        'Arab ki jugrafiyai hifazat ne Wahi ke liye zuban ko paak rakha.',
        'Zamzam aur Ka\'bah Hazrat Ibrahim (AS) ki qurbani ke zinda nishan hain.'
      ],
      urdu: [
        'رسول اللہ ﷺ کا نسب عالی حضرت ابراہیم علیہ السلام سے ملتا ہوا کائنات کا سب سے پاکیزہ نسب ہے۔',
        'عرب کی قدرتی حکمت نے زبانِ عربی کو الٰہی وحی کی حفاظت کے لیے محفوظ رکھا۔',
        'زمزم اور کعبہ حضرت ابراہیم و اسماعیل علیہما السلام کی تسلیم و رضا کی ابدی نشانی ہیں۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'إِنَّ اللَّهَ اصْطَفَى كِنَانَةَ مِنْ وَلَدِ إِسْمَاعِيلَ وَاصْطَفَى قُرَيْشًا مِنْ كِنَانَةَ',
      reference: 'Sahih Muslim 2276',
      translation: {
        english: '"Indeed Allah chose Kinanah from the children of Ishmael, and chose Quraysh from Kinanah..."',
        hinglish: '"Beshak Allah ne Isma\'il ki nasal se Kinanah ko chuna, aur Kinanah se Quraysh ko chuna..."',
        urdu: '"بے شک اللہ تعالیٰ نے اسماعیل کی اولاد میں سے کنانہ کو اور کنانہ میں سے قریش کو منتخب فرمایا..."'
      }
    },
    test: [
      {
        id: 'q1-1',
        question: {
          english: 'Which prophet built the Ka\'bah with his son Isma\'il (AS)?',
          hinglish: 'Kinhone apne bete Isma\'il (AS) ke saath Ka\'bah tameer kiya tha?',
          urdu: 'کس پیغمبر نے اپنے بیٹے حضرت اسماعیل علیہ السلام کے ساتھ مل کر کعبہ کی تعمیر فرمائی تھی؟'
        },
        options: {
          english: ['Prophet Ibrahim (AS)', 'Prophet Musa (AS)', 'Prophet Isa (AS)', 'Prophet Nuh (AS)'],
          hinglish: ['Hazrat Ibrahim (AS)', 'Hazrat Musa (AS)', 'Hazrat Isa (AS)', 'Hazrat Nuh (AS)'],
          urdu: ['حضرت ابراہیم علیہ السلام', 'حضرت موسیٰ علیہ السلام', 'حضرت عیسیٰ علیہ السلام', 'حضرت نوح علیہ السلام']
        },
        correctIndex: 0,
        explanation: {
          english: 'Prophet Ibrahim (AS) and Isma\'il (AS) built the Ka\'bah as the center of Tawheed.',
          hinglish: 'Hazrat Ibrahim (AS) ne Ka\'bah tameer kiya tha.',
          urdu: 'حضرت ابراہیم علیہ السلام اور حضرت اسماعیل علیہ السلام نے کعبہ کی تعمیر فرمائی تھی۔'
        }
      },
      {
        id: 'q1-2',
        question: {
          english: 'What miraculous water source gushed forth for baby Isma\'il and his mother Hajar in Makkah?',
          hinglish: 'Makkah mein Hazrat Hajar aur Isma\'il (AS) ke liye konsa chashma phoot nikla tha?',
          urdu: 'مکہ کی وادی میں حضرت ہاجرہ اور اسماعیل کے لیے کون سا معجزانہ چشمہ جاری ہوا تھا؟'
        },
        options: {
          english: ['Zamzam', 'Nile', 'Euphrates', 'Kawthar'],
          hinglish: ['Zamzam', 'Neel', 'Faraat', 'Kawthar'],
          urdu: ['زمزم', 'نیل', 'فرات', 'کوثر']
        },
        correctIndex: 0,
        explanation: {
          english: 'The miraculous spring of Zamzam gushed forth in the desert of Makkah.',
          hinglish: 'Zamzam ka chashma phoot nikla tha.',
          urdu: 'زمزم کا معجزانہ چشمہ جاری ہوا تھا۔'
        }
      },
      {
        id: 'q1-3',
        question: {
          english: 'Which category of Arabs trace their lineage directly to Prophet Isma\'il (AS)?',
          hinglish: 'Konsi Arab qism Hazrat Isma\'il (AS) ki nasal se hai?',
          urdu: 'عربوں کی کون سی قسم بلاواسطہ حضرت اسماعیل علیہ السلام کی اولاد سے تعلق رکھتی ہے؟'
        },
        options: {
          english: ['Arab-e-Musta\'ribah (Arabized Arabs)', 'Arab-e-Ba\'idah', 'Arab-e-A\'ribah', 'Phoenicians'],
          hinglish: ['Arab-e-Musta\'ribah', 'Arab-e-Ba\'idah', 'Arab-e-A\'ribah', 'Phoenicians'],
          urdu: ['عربِ مستعربہ', 'عربِ بائدہ', 'عربِ عاربة', 'فینقی']
        },
        correctIndex: 0,
        explanation: {
          english: 'The descendants of Isma\'il (AS) are known as Arab-e-Musta\'ribah.',
          hinglish: 'Arab-e-Musta\'ribah Hazrat Isma\'il (AS) ki nasal hain.',
          urdu: 'حضرت اسماعیل علیہ السلام کی اولاد کو عربِ مستعربہ کہا جاتا ہے۔'
        }
      }
    ]
  },

  // MODULE 2
  {
    id: 'seerah-2',
    chapterNumber: 2,
    period: 'Module 2 • Pre-Islamic Jahiliyyah & Social Breakdown',
    title: {
      english: '2. Pre-Islamic Jahiliyyah, Idolatry & Social Breakdown',
      hinglish: '2. Jahiliyyah Ka Daur, Shirk Aur Samajik Tabahi',
      urdu: '۲. دورِ جاہلیت، کثرتِ شرک اور معاشرتی بگاڑ'
    },
    arabicTitle: 'الدين والاجتماع والسياسة في الجاهلية',
    icon: '🗿',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 2: Religions and Social Life of Arabs',
    summary: {
      english: 'Detailed study of the religious corruption introduced by Amr ibn Luhayy, the 360 idols around Ka\'bah, female infanticide, tribal warfare, and moral decay.',
      hinglish: 'Amr ibn Luhayy ke zariye shirk ki shuruaat, Ka\'bah ke 360 butt, betiyon ko zinda dafnana aur qabaili ladaaiyon ki mukammal tafseel.',
      urdu: 'عمرو بن لحی کے ذریعے بت پرستی کا آغاز، ۳۶۰ بت، لکڑی کے معبود، لڑکیوں کی زندہ درگوری اور قبائلی جنگوں کی تفصیلی تاریخ۔'
    },
    fullStory: {
      english: `As detailed in *The Sealed Nectar*, for centuries after Isma'il (AS), the Arabs held fast to pure monotheism. However, a chief of Khuza'ah named **Amr ibn Luhayy** traveled to Syria, where he saw people worshipping idols. He brought back the idol **Hubal** made of red agate and placed it inside the Ka'bah, instructing Quraysh to worship it.

Subrequently, idolatry spread like wildfire across Arabia. Specific idols were dedicated to tribes: **Lat** in Ta'if, **Uzza** in Nakhlah, **Manat** in Qudayd, and **Wadd, Suwa', Yaghuth, Ya'uq, and Nasr** across regional territories. By the time Prophet Muhammad (ﷺ) was born, 360 idols encircled the Holy Ka'bah, which had been built for the worship of Allah alone!

Social life was severely corrupted:
• **Oppression of Women**: Women had no inheritance rights, were treated as property, and female infants were routinely buried alive out of fear of shame or poverty.
• **Tribal Fanaticism (Asabiyyah)**: Tribal wars erupted for minor incidents and raged for decades (e.g., the War of Basus lasted 40 years over a camel!).
• **Alcohol & Gambling**: Drinking wine and gambling (*Maysir*) were widespread signs of prestige.

Despite this darkness, Allah preserved noble virtues in Arab character—unmatched hospitality (*Karam*), courage, defense of honor, and strict adherence to oaths—preparing them to become the carriers of Islam once purified.`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, Hazrat Isma\'il (AS) ke centuries baad tak Arab Tauheed par rahe. Lekin **Amr ibn Luhayy** ne Shaam se **Hubal** naam ka butt la kar Ka\'bah mein rakha aur logo ko ibadat ka hukam diya. Iske baad **Lat, Uzza aur Manat** jaise 360 butt Ka\'bah ke gird rakhe gaye. Betiyon ko zinda dafnana aur qabaili ladaaiyan aam thiient. Iske bawajood mehman-nawazi aur bahaduri jaise akhlaq bache rahe.`,
      urdu: `*الرحیق المختوم* کی تحریر کے مطابق، حضرت اسماعیل علیہ السلام کے بعد عرب توحید پر قائم رہے۔ لیکن **عمرو بن لحی** نے شام سے **حبل** بت لا کر کعبہ میں رکھا اور پرستش شروع کروائی۔ کعبہ کے گرد ۳۶۰ بت نصب ہو گئے۔ خواتین پر مظالم، لڑکیوں کی زندہ درگوری اور قبائلی جنگیں عام تھیں، لیکن مہمان نوازی اور غیرت کی صفات محفوظ تھیں۔`
    },
    keyTakeaways: {
      english: [
        'Idolatry destroys human dignity and social justice, whereas Tawheed uplifts humanity.',
        'Islam totally abolished female infanticide and restored full rights to women 1400 years ago.',
        'Tribalism and racism (*Asabiyyah*) are jahiliyyah traits explicitly forbidden in Islam.'
      ],
      hinglish: [
        'Shirk se insani izzat tabah hoti hai, Tauheed insan ko buland karti hai.',
        'Islam ne betiyon ko zinda dafnane ki rasam ko khatam kiya.',
        'Nasal-parasti aur jaat-paat Jahiliyyah ki buraiyan hain.'
      ],
      urdu: [
        'بت پرستی انسانی وقار اور عدل کو تباہ کرتی ہے جبکہ توحید انسان کو بلندیاں عطا کرتی ہے۔',
        'اسلام نے بچیوں کی زندہ درگوری کو مکمل طور پر ختم کر کے خواتین کے حقوق بحال کیے۔',
        'قومیت اور نسلی تعصب جاہلیت کی ناپاک رسومات ہیں جنہیں اسلام نے باطل قرار دیا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'وَإِذَا الْمَوْءُودَةُ سُئِلَتْ بِأَيِّ ذَنبٍ قُتِلَتْ',
      reference: 'Surah At-Takwir 81:8-9',
      translation: {
        english: '"And when the girl [buried] alive is asked for what sin she was killed..."',
        hinglish: '"Aur jab zinda dafnayi gayi ladki se poochha jayega ki kis gunah par use qatl kiya gaya..."',
        urdu: '"اور جب زندہ درگور کی گئی لڑکی سے پوچھا جائے گا کہ وہ کس گناہ کی پاداش میں قتل کی گئی..."'
      }
    },
    test: [
      {
        id: 'q2-1',
        question: {
          english: 'Who introduced idol worship to Makkah by bringing the idol Hubal from Syria?',
          hinglish: 'Shaam se Hubal butt la kar Makkah mein kisne rakha tha?',
          urdu: 'شام سے حبل بت لا کر مکہ میں بت پرستی کا آغاز کس شخص نے کیا تھا؟'
        },
        options: {
          english: ['Amr ibn Luhayy', 'Abu Jahl', 'Abu Lahab', 'Fihr'],
          hinglish: ['Amr ibn Luhayy', 'Abu Jahl', 'Abu Lahab', 'Fihr'],
          urdu: ['عمرو بن لحی', 'ابو جہل', 'ابو لہب', 'فہر']
        },
        correctIndex: 0,
        explanation: {
          english: 'Amr ibn Luhayy al-Khuza\'i brought Hubal and corrupted Ibrahim\'s monotheistic teachings.',
          hinglish: 'Amr ibn Luhayy sabse pehle Hubal butt laya tha.',
          urdu: 'عمرو بن لحی الخزاعی نے بت پرستی کی شروعات کی تھی۔'
        }
      },
      {
        id: 'q2-2',
        question: {
          english: 'How many idols encircled the Ka\'bah before Prophet Muhammad (ﷺ) purified it?',
          hinglish: 'Nabi (ﷺ) ki paidaish ke waqt Ka\'bah ke charon taraf kitne butt the?',
          urdu: 'ولادتِ نبوی کے وقت کعبۃ اللہ کے گرد کتنے بت نصب تھے؟'
        },
        options: {
          english: ['360 Idols', '100 Idols', '50 Idols', '1,000 Idols'],
          hinglish: ['360 Butt', '100 Butt', '50 Butt', '1,000 Butt'],
          urdu: ['۳۶۰ بت', '۱۰۰ بت', '۵۰ بت', '۱,۰۰۰ بت']
        },
        correctIndex: 0,
        explanation: {
          english: '360 idols surrounded the Ka\'bah during the era of Jahiliyyah.',
          hinglish: '360 butt Ka\'bah ke gird the.',
          urdu: 'کعبہ کے گرد ۳۶۰ بت موجود تھے۔'
        }
      },
      {
        id: 'q2-3',
        question: {
          english: 'What horrific pre-Islamic custom regarding infant girls was completely eradicated by Islam?',
          hinglish: 'Islam ne betiyon ke saath hone waali kis sakht burai ko khatam kiya?',
          urdu: 'اسلام نے بچیوں کے متعلق کس قبیح ترین جاہلانہ رواج کو جڑ سے اکھاڑ پھینکا؟'
        },
        options: {
          english: ['Burying female infants alive', 'Forcing girls to travel', 'Denying them toys', 'Sending them abroad'],
          hinglish: ['Betiyon ko zinda dafnana', 'Travel karwana', 'Khilone na dena', 'Baharr bhejna'],
          urdu: ['بچیوں کو زندہ درگور کرنا', 'سفر پر مجبور کرنا', 'کھلونے نہ دینا', 'بیرونِ ملک بھیجنا']
        },
        correctIndex: 0,
        explanation: {
          english: 'Islam outlawed female infanticide and established sacred status for daughters.',
          hinglish: 'Islam ne betiyon ko zinda dafnane ko khatam kiya.',
          urdu: 'اسلام نے بچیوں کو زندہ درگور کرنے کا قبیح رواج ختم کیا۔'
        }
      }
    ]
  },

  // MODULE 3
  {
    id: 'seerah-3',
    chapterNumber: 3,
    period: 'Module 3 • 570 CE • Year of the Elephant & Birth',
    title: {
      english: '3. The Year of the Elephant (Aam al-Fil) & Birth of Prophet Muhammad (ﷺ)',
      hinglish: '3. Aam al-Fil (Haathi Waala Saal) Aur Nabi (ﷺ) Ki Mubaraka Paidaish',
      urdu: '۳. عام الفیل کا معجزہ اور ولادتِ باسعادت (۵۷۰ء)'
    },
    arabicTitle: 'عام الفيل ومولد خاتم النبيين صلى الله عليه وسلم',
    icon: '🐘',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 3: The Year of Elephant & Birth of the Prophet',
    summary: {
      english: 'The miraculous destruction of Abraha\'s army by Ababil birds (Surah Al-Fil), passing of father Abdullah, and the birth of Prophet Muhammad (ﷺ) on 12th Rabi\' al-Awwal in Makkah.',
      hinglish: 'Abraha ke haathi waale lashkar ki Ababil parindon se tabahi, Waalid Abdullah ka intiqal aur 12 Rabi\' al-Awwal ko Makkah mein Wiladat.',
      urdu: 'ابرہہ کے ہاتھیوں کے لشکر کی ابابیل پرندوں کے ذریعے تباہی، والد حضرت عبداللہ کا انتقال اور ۱۲ ربیع الاول کو مکہ میں ولادتِ با سعادت۔'
    },
    fullStory: {
      english: `As recorded in *The Sealed Nectar*, just 50 days before the birth of Prophet Muhammad (ﷺ), a momentous event occurred. **Abraha al-Ashram**, the Abyssinian viceroy of Yemen, built a cathedral in San'a called Al-Qullays. When Arabs ignored it, Abraha marched towards Makkah with an army of 60,000 men and massive war elephants, led by the giant elephant **Mahmud**, to destroy the Ka'bah.

When Abraha reached Muhassir near Makkah, grandfather **Abdul-Muttalib** said: *"The Ka'bah is the House of Allah, and He will protect His House!"* The elephant Mahmud knelt and refused to move towards the Ka'bah. Allah sent flocks of small birds (**Ababil**) carrying stones of baked clay (*Sijjil*), destroying Abraha's army like chewed straw (*'Asfin Ma'kul*), as recorded in Surah Al-Fil.

Fifty days later, on Monday, 12th Rabi' al-Awwal (April 22, 570 CE), Prophet Muhammad (ﷺ) was born. His father **Abdullah** had passed away in Yathrib (Madinah) before his birth. Grandfather Abdul-Muttalib carried the newborn inside the Ka'bah, gave thanks to Allah, and named him **Muhammad** (The Praised One).`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, Nabi (ﷺ) ki paidaish se 50 din pehle **Abraha** ne haathiyon ke saath Ka\'bah ko todne ke liye hamla kiya. Dada Abdul-Muttalib ne farmaya: *"Ka\'bah Allah ka ghar hai, aur Allah Apne ghar ki hifazat khud karega!"* Allah ne **Ababil** parindon ke zariye Abraha ke poore lashkar ko tabah kar diya (Surah Al-Fil). 50 din baad Peer 12 Rabi\' al-Awwal (570 CE) ko Nabi (ﷺ) ki wiladat hui. Naam **Muhammad** (ﷺ) rakha gaya.`,
      urdu: `*الرحیق المختوم* کے مطابق، ولادت سے ۵۰ دن قبل یمن کے گورنر **ابرہہ** نے ۶۰,۰۰۰ فوجیوں اور محمود ہاتھی کے ساتھ کعبہ پر چڑھائی کی۔ عبدالمطلب نے فرمایا: *"یہ کعبہ اللہ کا گھر ہے، اور وہ اپنے گھر کی حفاظت خود فرمائے گا!"* اللہ تعالی نے ابابیل پرندوں کے ذریعے ابرہہ کی فوج کو تباہ کیا۔ ۵۰ دن بعد پیر ۱۲ ربیع الاول ۵۷۰ء کو رسول اللہ ﷺ کی ولادت ہوئی اور نام **محمد** رکھا گیا۔`
    },
    keyTakeaways: {
      english: [
        'Allah is the ultimate Defender of His sacred symbols (Ka\'bah).',
        'Prophet Muhammad (ﷺ) was born an orphan, demonstrating that Allah alone is the true Nurturer.',
        'The destruction of Abraha paved the safe way for the birth of the Final Messenger.'
      ],
      hinglish: [
        'Allah Apne Muqaddas Ka\'bah ki hifazat karne waala hai.',
        'Yateemi mein paida hona dikhata hai ki Allah hi sabka asli Parwardigar hai.',
        'Abraha ki tabahi ne Nabi (ﷺ) ki paidaish ka rasta saaf kiya.'
      ],
      urdu: [
        'اللہ تعالی اپنے شعائر (کعبہ) کا واحد نگہبان و محافظ ہے۔',
        'یتیمی میں ولادت بتاتی ہے کہ اللہ ہی کائنات کا حقیقی پروردگار ہے۔',
        'ابرہہ کی تباہی نے حبیبِ خدا ﷺ کی ولادت کے لیے راستہ ہموار کیا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ',
      reference: 'Surah Al-Fil 105:1',
      translation: {
        english: '"Have you not considered how your Lord dealt with the companions of the elephant?"',
        hinglish: '"Kya aapne nahi dekha ki aapke Rab ne haathi waalon ke saath kya kiya?"',
        urdu: '"کیا آپ نے نہیں دیکھا کہ آپ کے رب نے ہاتھی والوں کے ساتھ کیا معاملہ فرمایا؟"'
      }
    },
    test: [
      {
        id: 'q3-1',
        question: {
          english: 'How many days before the birth of Prophet Muhammad (ﷺ) did the event of the Elephant occur?',
          hinglish: 'Haathi waala waqia (Aam al-Fil) Nabi (ﷺ) ki paidaish se kitne din pehle hua tha?',
          urdu: 'عام الفیل کا معجزانہ واقعہ آپ ﷺ کی ولادت سے کتنے دن قبل پیش آیا تھا؟'
        },
        options: {
          english: ['50 Days', '100 Days', '1 Year', '30 Days'],
          hinglish: ['50 Din', '100 Din', '1 Saal', '30 Din'],
          urdu: ['۵۰ دن', '۱۰۰ دن', '۱ سال', '۳۰ دن']
        },
        correctIndex: 0,
        explanation: {
          english: 'The destruction of Abraha happened approximately 50 days before the birth of Prophet Muhammad (ﷺ).',
          hinglish: '50 din pehle Aam al-Fil hua tha.',
          urdu: 'عام الفیل کا واقعہ ولادت سے ۵۰ دن قبل پیش آیا تھا۔'
        }
      },
      {
        id: 'q3-2',
        question: {
          english: 'What birds were sent by Allah to destroy Abraha\'s army carrying stones of clay?',
          hinglish: 'Abraha ke lashkar par Kankar marne ke liye Allah ne kin parindon ko bheja tha?',
          urdu: 'ابرہہ کے لشکر پر کنکر برسانے کے لیے اللہ تعالی نے کن پرندوں کو بھیجا تھا؟'
        },
        options: {
          english: ['Ababil', 'Eagles', 'Falcons', 'Pigeons'],
          hinglish: ['Ababil', 'Eagles', 'Falcons', 'Pigeons'],
          urdu: ['ابابیل', 'عقاب', 'شاہین', 'کبوتر']
        },
        correctIndex: 0,
        explanation: {
          english: 'Flocks of Ababil birds dropped stones of baked clay upon Abraha\'s army.',
          hinglish: 'Ababil parindon ne kankar barsaye the.',
          urdu: 'ابابیل پرندوں نے کنکر برسا کر ابرہہ کی فوج کو تباہ کیا۔'
        }
      },
      {
        id: 'q3-3',
        question: {
          english: 'On what day of the week and month was Prophet Muhammad (ﷺ) born in Makkah?',
          hinglish: 'Nabi (ﷺ) ki wiladat kis din aur mahine mein hui thi?',
          urdu: 'آپ ﷺ کی ولادتِ باسعادت ہفتے کے کس دن اور کس اسلامی مہینے میں ہوئی تھی؟'
        },
        options: {
          english: ['Monday, 12th Rabi\' al-Awwal', 'Friday, 1st Ramadan', 'Saturday, 10th Muharram', 'Sunday, 15th Sha\'ban'],
          hinglish: ['Peer, 12 Rabi\' al-Awwal', 'Juma, 1 Ramzan', 'Hafta, 10 Muharram', 'Itwar, 15 Sha\'ban'],
          urdu: ['پیر، ۱۲ ربیع الاول', 'جمعہ، ۱ رمضان', 'ہفتہ، ۱۰ محرم', 'اتوار، ۱۵ شعبان']
        },
        correctIndex: 0,
        explanation: {
          english: 'Prophet Muhammad (ﷺ) was born on Monday, 12th Rabi\' al-Awwal 570 CE.',
          hinglish: 'Peer 12 Rabi\' al-Awwal ko wiladat hui thi.',
          urdu: 'آپ ﷺ کی ولادت پیر ۱۲ ربیع الاول کو ہوئی۔'
        }
      }
    ]
  },

  // MODULE 4
  {
    id: 'seerah-4',
    chapterNumber: 4,
    period: 'Module 4 • 570–576 CE • Halimah Sa\'diyyah & Shaqq al-Sadr',
    title: {
      english: '4. Fosterage in Banu Sa\'d, Halimah\'s Miracles & Shaqq al-Sadr',
      hinglish: '4. Halimah Sa\'diyyah Ke Ghar Barkatein Aur Shaqq al-Sadr Ka Waqia',
      urdu: '۴. دایہ حلیمہ سعدیہ کا گھر اور شقِ صدر کا معجزانہ واقعہ'
    },
    arabicTitle: 'الرضاعة في بني سعد وحادثة شق الصدر',
    icon: '🌸',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 4: Life in Banu Sa\'d & Splitting of Chest',
    summary: {
      english: 'Prophet Muhammad\'s early years in the desert with Halimah Sa\'diyyah, the overflow of blessings in Banu Sa\'d, and the divine event of Shaqq al-Sadr (Splitting of the Chest).',
      hinglish: 'Banu Sa\'d mein Halimah Sa\'diyyah ke paas parwarish, barkaton ka nuzool aur Shaqq al-Sadr (seene ka paak hona) ka waqia.',
      urdu: 'بنو سعد میں حلیمہ سعدیہ کے ہاں پرورش، برکات کا نزول اور شقِ صدر کا الٰہی واقعہ۔'
    },
    fullStory: {
      english: `As detailed in *The Sealed Nectar*, Arab nobility preferred to send their infants into the desert to grow up in clean air, gain fluent Arabic dialect, and develop strong constitutions. **Halimah bint Abi Dhu'ayb** of the Banu Sa'd tribe initially hesitated to take baby Muhammad because he was an orphan and lacked a wealthy father to reward her generously. However, finding no other infant, she accepted him.

The moment Halimah carried baby Muhammad, instant miracles transformed her impoverished life! Her weak donkey outpaced all others, her dry camel overflowed with milk, and the barren pastures of Banu Sa'd turned lush and green wherever her goats grazed! Halimah realized she was holding a blessed child (*Tifl Mubarak*).

When Muhammad was around 4 years old, the event of **Shaqq al-Sadr** (Splitting of the Chest) occurred. While playing with foster brothers near their tents, Angel Jibreel appeared, gently laid Muhammad down, opened his chest, removed his heart, extracted a dark clot saying: *"This was the portion of Satan in you"*, washed his heart in a golden vessel filled with Zamzam water, and sealed it. Frightened, his foster brother ran to Halimah saying Muhammad had been killed, but they found him standing unharmed with a pale face. Halimah safely returned him to his mother Aminah in Makkah.`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, Halimah Sa\'diyyah ne yateem hone ke bawajood baby Muhammad ko parwarish ke liye liya. Unke ghar mein turant barkatein aayiien: sookhi bakriyan doodh se bhar gayiien. 4 saal ki umar mein **Shaqq al-Sadr** (Seene ka paak hona) ka waqia hua jab Farishte Jibreel (AS) ne aapke dil ko Zamzam se dhoya aur Shaytan ka hissa nikal diya. Halimah ne aapko waalidah Aminah ko wapas lautaya.`,
      urdu: `*الرحیق المختوم* کے مطابق، دایہ حلیمہ سعدیہ نے یتیم ہونے کے باوجود آپ ﷺ کی پرورش کی ذمہ داری لی۔ آپ کی قدم رنجائی سے ان کے گھر میں برکات نازل ہوئیں۔ ۴ برس کی عمر میں **شقِ صدر** کا معجزہ پیش آیا جب حضرت جبرائیل علیہ السلام نے آپ کا قلب مبارک زمزم سے دھویا اور شیطان کا حصہ دور فرمایا۔ حلیمہ نے آپ کو والدہ ماجدہ کے سپرد کر دیا۔`
    },
    keyTakeaways: {
      english: [
        'Prophet Muhammad (ﷺ) brought divine Barakah to everyone who took care of him.',
        'Shaqq al-Sadr was a divine purification protecting the Prophet from all satanic whispers from childhood.',
        'Growing up in simple, clean surroundings develops humility and strength.'
      ],
      hinglish: [
        'Nabi (ﷺ) ki wajah se Halimah ke ghar mein barkatein aayiien.',
        'Shaqq al-Sadr se Allah ne Nabi ko har burai se paak rakha.',
        'Saada zindagi insaan ko mazboot banati hai.'
      ],
      urdu: [
        'حبیبِ خدا ﷺ کی بدولت حلیمہ کے گھر میں الٰہی برکات کا نزول ہوا۔',
        'شقِ صدر کے ذریعے اللہ نے اپنے نبی کے قلب کو ہر وسوسے سے پاک فرمایا۔',
        'سادہ زندگی انسان کو مضبوط اور عاجز بناتی ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ',
      reference: 'Surah Ash-Sharh 94:1',
      translation: {
        english: '"Did We not expand for you your breast?"',
        hinglish: '"Kya Humne aapka seena paak aur khol nahi diya?"',
        urdu: '"کیا ہم نے آپ کا سینه کشادہ نہیں فرما دیا؟"'
      }
    },
    test: [
      {
        id: 'q4-1',
        question: {
          english: 'Which desert tribe did foster mother Halimah belong to?',
          hinglish: 'Daya Halimah kis qabeele se thiien?',
          urdu: 'دایہ حلیمہ سعدیہ کس قبیلے سے تعلق رکھتی تھیں؟'
        },
        options: {
          english: ['Banu Sa\'d', 'Banu Quraysh', 'Banu Hashim', 'Banu Umayyah'],
          hinglish: ['Banu Sa\'d', 'Banu Quraysh', 'Banu Hashim', 'Banu Umayyah'],
          urdu: ['بنو سعد', 'بنو قریش', 'بنو ہاشم', 'بنو امیہ']
        },
        correctIndex: 0,
        explanation: {
          english: 'Halimah Sa\'diyyah belonged to the renowned Bedouin tribe of Banu Sa\'d.',
          hinglish: 'Halimah Banu Sa\'d se thiien.',
          urdu: 'دایہ حلیمہ کا تعلق بنو سعد سے تھا۔'
        }
      },
      {
        id: 'q4-2',
        question: {
          english: 'With what water did Angel Jibreel wash the Prophet\'s heart during Shaqq al-Sadr?',
          hinglish: 'Shaqq al-Sadr ke waqt Farishte ne dil ko kis paani se dhoya tha?',
          urdu: 'شقِ صدر کے موقع پر فرشتہ جبرائیل نے قلبِ مبارک کو کس پانی سے دھویا تھا؟'
        },
        options: {
          english: ['Zamzam Water', 'Rain Water', 'River Nile Water', 'Rose Water'],
          hinglish: ['Zamzam Paani', 'Baarish ka Paani', 'Neel Paani', 'Gulaab Paani'],
          urdu: ['آبِ زمزم', 'بارش کا پانی', 'دریائے نیل کا پانی', 'عرقِ گلاب']
        },
        correctIndex: 0,
        explanation: {
          english: 'Angel Jibreel washed his heart in a golden vessel filled with Zamzam water.',
          hinglish: 'Zamzam ke paani se dil dhoya tha.',
          urdu: 'حضرت جبرائیل نے آبِ زمزم سے دلِ مبارک کو دھویا تھا۔'
        }
      },
      {
        id: 'q4-3',
        question: {
          english: 'At what age did the event of Shaqq al-Sadr occur in Banu Sa\'d?',
          hinglish: 'Shaqq al-Sadr ka waqia kitni umar mein hua tha?',
          urdu: 'شقِ صدر کا واقعہ کس عمر میں پیش آیا تھا؟'
        },
        options: {
          english: ['4 Years Old', '10 Years Old', '15 Years Old', '20 Years Old'],
          hinglish: ['4 Saal', '10 Saal', '15 Saal', '20 Saal'],
          urdu: ['۴ سال', '۱۰ سال', '۱۵ سال', '۲۰ سال']
        },
        correctIndex: 0,
        explanation: {
          english: 'The event of Shaqq al-Sadr occurred when he was around 4 years old.',
          hinglish: '4 saal ki umar mein hua tha.',
          urdu: 'شقِ صدر ۴ سال کی عمر میں پیش آیا تھا۔'
        }
      }
    ]
  },

  // MODULE 5
  {
    id: 'seerah-5',
    chapterNumber: 5,
    period: 'Module 5 • 576–578 CE • Passing of Aminah & Abdul-Muttalib',
    title: {
      english: '5. Childhood Loss: Passing of Mother Aminah & Grandfather Abdul-Muttalib',
      hinglish: '5. Waalidah Aminah Aur Dada Abdul-Muttalib Ka Intiqal',
      urdu: '۵. والدہ ماجدہ اور دادا عبدالمطلب کی وفات اور چچا کی کفالت'
    },
    arabicTitle: 'وفاة الأم آمنة والجد عبد المطلب وكفالة أبي طالب',
    icon: '💔',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 5: Back to Mother, Loss & Abu Talib Guardianship',
    summary: {
      english: 'The tragic passing of mother Aminah at Al-Abwa when Muhammad (ﷺ) was 6 years old, the passing of grandfather Abdul-Muttalib at age 8, and the loving guardianship of uncle Abu Talib.',
      hinglish: '6 saal mein Waalidah Aminah ka Al-Abwa par intiqal, 8 saal mein Dada Abdul-Muttalib ka intiqal aur Chacha Abu Talib ki muhabbat bhari parwarish.',
      urdu: '۶ سال کی عمر میں والدہ ماجدہ کا مقامِ ابواء پر انتقال، ۸ سال کی عمر میں دادا عبدالمطلب کی وفات اور چچا ابو طالب کی کفالت۔'
    },
    fullStory: {
      english: `As recorded in *The Sealed Nectar*, after returning from Banu Sa'd, young Muhammad lived with his mother **Aminah** in Makkah. When he was 6 years old, Aminah took him to Yathrib (Madinah) accompanied by her loyal maid **Umm Ayman (Barakah)** to visit her husband Abdullah's grave and meet relatives of Banu Najjar. They stayed for one month.

On their return journey to Makkah, Aminah fell severely ill and passed away at **Al-Abwa**, a location midway between Madinah and Makkah. The young orphan Muhammad (ﷺ) wept over his mother's grave. Umm Ayman held his hand and brought him safely back to Makkah.

Grandfather **Abdul-Muttalib** took young Muhammad under his wing with deep affection. He used to lay a carpet in the shade of the Ka'bah where Quraysh chiefs gathered; while no one else dared sit on it, Abdul-Muttalib would seat young Muhammad beside him, pat his back, and say: *"Leave my son, by Allah, he has a great future!"*

However, when Muhammad was 8 years old, Abdul-Muttalib passed away at age 82. Before his death, he entrusted Muhammad to his noble son **Abu Talib**, Abdullah's full brother. Abu Talib loved young Muhammad more than his own children, seating him beside him, giving him the best food, and protecting him with his life for forty years.`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, 6 saal ki umar mein waalidah **Aminah** aapko Madinah le gayiien jahan se wapsi par **Al-Abwa** par unka intiqal ho gaya. Ghulam **Umm Ayman** aapko Makkah laayii. Dada **Abdul-Muttalib** ne be-had muhabbat se paala. Lekin 8 saal ki umar mein dada ka bhi intiqal ho gaya. Phir chacha **Abu Talib** ne aapko apne bachon se ziyada muhabbat se paala.`,
      urdu: `*الرحیق المختوم* کے مطابق، ۶ سال کی عمر میں والدہ **حضرت آمنہ** آپ کو مدینہ لے گئیں جہاں سے واپسی پر بمقام **ابواء** ان کا انتقال ہو گیا۔ خادمہ **ام ایمن** آپ کو مکہ لائیں۔ دادا **عبدالمطلب** نے کمال محبت سے پالا، مگر ۸ سال کی عمر میں ان کا بھی انتقال ہو گیا۔ اس کے بعد چچا **ابو طالب** نے اپنے بچوں سے بڑھ کر آپ کی کفالت کی۔`
    },
    keyTakeaways: {
      english: [
        'Facing orphanhood and loss early in life instils deep empathy for orphans and the poor.',
        'Umm Ayman and Abu Talib were instruments of Allah\'s divine care and shelter.',
        'Treating orphans with love and honor is a major prophetic sunnah.'
      ],
      hinglish: [
        'Yateemi insaan ke andar gareebon ke liye rahem paida karti hai.',
        'Umm Ayman aur Abu Talib ne Allah ke hukum se hifazat ki.',
        'Yateemon ke saath izzat aur muhabbat se pesh aana Sunnat hai.'
      ],
      urdu: [
        'کمسنی میں یتیمی کا دکھ انسان کے اندر مظلوموں کے لیے ہمدردی پیدا کرتا ہے۔',
        'ام ایمن اور ابو طالب آپ کے لیے الٰہی تحفظ کا ذریعہ بنے۔',
        'یتیموں کے ساتھ شفقت و محبت سنتِ نبوی ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ',
      reference: 'Surah Ad-Duha 93:9',
      translation: {
        english: '"So as for the orphan, do not oppress him."',
        hinglish: '"To yateem par kabhi zoolm mat karna."',
        urdu: '"پس یتیم پر کبھی سختی نہ کرو۔"'
      }
    },
    test: [
      {
        id: 'q5-1',
        question: {
          english: 'At what location between Madinah and Makkah did mother Aminah pass away when Muhammad (ﷺ) was 6?',
          hinglish: 'Waalidah Aminah ka intiqal kis jagah par hua tha?',
          urdu: 'والدہ ماجدہ حضرت آمنہ کا انتقال کس مقام پر ہوا تھا؟'
        },
        options: {
          english: ['Al-Abwa', 'Ta\'if', 'Badr', 'Quba'],
          hinglish: ['Al-Abwa', 'Ta\'if', 'Badr', 'Quba'],
          urdu: ['ابواء', 'طائف', 'بدر', 'قبا']
        },
        correctIndex: 0,
        explanation: {
          english: 'Mother Aminah passed away at Al-Abwa on her return journey from Madinah.',
          hinglish: 'Al-Abwa par intiqal hua tha.',
          urdu: 'ابواء کے مقام پر انتقال ہوا تھا۔'
        }
      },
      {
        id: 'q5-2',
        question: {
          english: 'Which loyal maid brought young orphan Muhammad (ﷺ) safely back to Makkah?',
          hinglish: 'Konsi mubaraka khadima Nabi (ﷺ) ko Makkah wapas laayii thiien?',
          urdu: 'کون سی مبارک خادمہ یتیم محمد ﷺ کو حفاظت سے مکہ واپس لائی تھیں؟'
        },
        options: {
          english: ['Umm Ayman (Barakah)', 'Halimah', 'Thuybah', 'Asma'],
          hinglish: ['Umm Ayman', 'Halimah', 'Thuybah', 'Asma'],
          urdu: ['ام ایمن', 'حلیمہ', 'ثویبہ', 'اسماء']
        },
        correctIndex: 0,
        explanation: {
          english: 'Umm Ayman (Barakah) brought young Muhammad safely back to his grandfather in Makkah.',
          hinglish: 'Umm Ayman Makkah laayii thiien.',
          urdu: 'حضرت ام ایمن آپ کو مکہ واپس لائی تھیں۔'
        }
      },
      {
        id: 'q5-3',
        question: {
          english: 'Which loving uncle took guardianship of Prophet Muhammad (ﷺ) after his grandfather died?',
          hinglish: 'Dada ke intiqal ke baad kis chacha ne Nabi (ﷺ) ko paala?',
          urdu: 'دادا کی وفات کے بعد کس شفقت کرنے والے چچا نے آپ ﷺ کی کفالت کی؟'
        },
        options: {
          english: ['Abu Talib', 'Hamzah', 'Abbas', 'Abu Lahab'],
          hinglish: ['Abu Talib', 'Hamzah', 'Abbas', 'Abu Lahab'],
          urdu: ['ابو طالب', 'حمزہ', 'عباس', 'ابو لہب']
        },
        correctIndex: 0,
        explanation: {
          english: 'Abu Talib took full responsibility for young Muhammad (ﷺ) with immense love.',
          hinglish: 'Abu Talib ne parwarish ki thi.',
          urdu: 'ابو طالب نے آپ ﷺ کی کفالت فرمائی تھی۔'
        }
      }
    ]
  },

  // MODULE 6
  {
    id: 'seerah-6',
    chapterNumber: 6,
    period: 'Module 6 • Youth, Shepherding & Bahira the Monk',
    title: {
      english: '6. Youth, Shepherding, First Journey to Syria & Bahira the Monk',
      hinglish: '6. Bakriyan Charana, Shaam Safar Aur Bahira Monk Ka Waqia',
      urdu: '۶. رعیِ غنم (بکریاں چرانا)، پہلا سفرِ شام اور بحیرا راہب کی پیشگوئی'
    },
    arabicTitle: 'رعي الغنم والسفر إلى الشام مع أبي طالب وبحيرا الراهب',
    icon: '🐫',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 6: Shepherding & Bahira the Monk',
    summary: {
      english: 'Prophet Muhammad working as a shepherd in Makkah, his first trade journey to Syria with Abu Talib at age 12, and Bahira the Christian monk recognizing signs of prophethood.',
      hinglish: 'Nabi (ﷺ) ka Makkah mein bakriyan charana, 12 saal ki umar mein chacha Abu Talib ke saath Shaam ka safar aur Bahira monk ki nishaniyan pehchanna.',
      urdu: 'مکہ میں بکریاں چرانا، ۱۲ سال کی عمر میں چچا کے ساتھ شام کا سفر اور بحیرا راہب کا علامتِ نبوت دیکھ کر پہچاننا۔'
    },
    fullStory: {
      english: `As detailed in *The Sealed Nectar*, during his youth in Makkah, Muhammad (ﷺ) worked as a shepherd, tending sheep for the people of Quraysh in exchange for small wages (*Qarareet*). He later remarked: *"Allah never sent a prophet except that he tended sheep."* His companions asked: *"Even you, O Messenger of Allah?"* He replied: *"Yes, I used to tend sheep for the people of Makkah."* Shepherding taught prophets patience, alertness, gentle care for the weak, and guiding flocks peacefully.

When Muhammad was 12 years old, Abu Talib prepared to travel with a merchant caravan to Syria. Young Muhammad clung to his uncle, who could not bear to leave him behind.

When the caravan stopped at **Busra** in Syria, a Christian monk named **Bahira**—who lived in a monastery containing ancient scriptures—noticed strange signs. A small cloud constantly shaded young Muhammad from the harsh sun, and trees and stones bowed down as he passed! Bahira invited the whole caravan to a feast. When Bahira inspected young Muhammad, he found the **Seal of Prophethood** (*Khatam an-Nubuwwah*) between his shoulder blades, matching scripture descriptions.

Bahira asked Abu Talib: *"What is this boy to you?"* Abu Talib replied: *"He is my son."* Bahira said: *"He cannot be your son; his father should not be alive!"* Abu Talib clarified: *"He is my nephew."* Bahira warned: *"Take your nephew back to Makkah immediately and guard him from enemies, for by Allah, if they recognize what I have seen, they will try to harm him. A magnificent future awaits him!"* Abu Talib quickly returned him to Makkah.`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, Nabi (ﷺ) ne jawani mein Makkah waalon ki bakriyan charaien. Aapne baad mein farmaya: *"Allah ne har Nabi ko pehle bakriyan charane ki taufeeq di."* Isse sabr aur kamzor ki hifazat ki tarbiyaat milti thi.

12 saal ki umar mein chacha Abu Talib ke saath Shaam ke tijarati safar par Busra pohnche. Wahan **Bahira** naam ke Christian monk (eisaai buzurg) ne dekha ki ek baadal Nabi (ﷺ) par saaya kiye hue hai aur darakht jhuk rahe hain.

Bahira ne aapke shanon (shoulder) ke beech **Mohar-e-Nabuwat** (Seal of Prophethood) dekhi aur Abu Talib se farmaya: *"Inhein jaldi Makkah wapas le jao aur hifazat karo! Ye dunya ke Aakhri Nabi honge!"* Abu Talib ne aapko turant Makkah wapas bhej diya.`,
      urdu: `*الرحیق المختوم* کے مطابق، جوانی میں آپ ﷺ نے اہل مکہ کی بکریاں چرائیں۔ آپ نے بعد میں فرمایا: *"اللہ نے ہر نبی سے بکریاں چروائیں۔"* اس کام سے صبر اور ضبط کا سبق ملتا تھا۔

۱۲ سال کی عمر میں چچا کے ساتھ شام کے سفر کے دوران بصرىٰ کے مقام پر **بحیرا راہب** نے دیکھا کہ ایک بادل آپ پر سایہ فگن ہے اور درخت جھک رہے ہیں۔

بحیرا نے آپ کے دونوں کاندھوں کے درمیان **مہرِ نبوت** دیکھی اور ابو طالب سے فرمایا: *"انہیں فوراً مکہ واپس لے جاؤ اور حفاظت کرو! ان کا بڑا شان دار مستقبل ہے اور یہ سید الانبیاء ہیں!"* ابو طالب نے آپ کو فوراً واپس مکہ بھیج دیا۔`
    },
    keyTakeaways: {
      english: [
        'Shepherding teaches patience, humility, and caring for those under one\'s responsibility.',
        'Signs of Prophethood were recognized by genuine scholars of previous scriptures.',
        'Earning one\'s livelihood through honest labor is a proud prophetic tradition.'
      ],
      hinglish: [
        'Bakriyan charane se sabr aur kamzoron ki hifazat ki tarbiyaat milti hai.',
        'Pehli aasmaani kitabon ke scholars ne Nabuwat ki nishaniyan pehchan lien thiien.',
        'Mehnati kamaai se rozi kamana Sunnat hai.'
      ],
      urdu: [
        'رعیِ غنم (بکریاں چرانا) سے صبر، حلم اور ذمے داری کا احساس پیدا ہوتا ہے۔',
        'سابقہ آسمانی کتب کے سچے علماء نے آپ کی علاماتِ نبوت کو پہچان لیا تھا۔',
        'اپنے ہاتھ کی محنت سے حلال روزی کمانا انبیاء کی سنت ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'مَا بَعَثَ اللَّهُ نَبِيًّا إِلَّا رَعَى الْغَنَمَ',
      reference: 'Sahih al-Bukhari 2262',
      translation: {
        english: '"Allah never sent a prophet except that he tended sheep."',
        hinglish: '"Allah ne koi aisa Nabi nahi bheja jisne bakriyan na charayi hon."',
        urdu: '"اللہ تعالی نے کوئی ایسا نبی نہیں مبعوث فرمایا جس نے بکریاں نہ چرائی ہوں"'
      }
    },
    test: [
      {
        id: 'q6-1',
        question: {
          english: 'What occupation did Prophet Muhammad (ﷺ) and all prophets engage in during their youth?',
          hinglish: 'Nabi (ﷺ) aur tamaam Anbiya ne jawani mein konsa kaam kiya tha?',
          urdu: 'تمام انبیاء اور رسول اللہ ﷺ نے جوانی میں کون سا کام سر انجام دیا تھا؟'
        },
        options: {
          english: ['Tending sheep (Shepherding)', 'Blacksmithing', 'Farming wheat', 'Fishery'],
          hinglish: ['Bakriyan charana', 'Lohar kaam', 'Kheti', 'Machhli pakadna'],
          urdu: ['بکریاں چرانا (رعیِ غنم)', 'لوہاری', 'کھیتی باڑی', 'ماہی گیری']
        },
        correctIndex: 0,
        explanation: {
          english: 'Prophet Muhammad (ﷺ) stated that every prophet tended sheep in their youth.',
          hinglish: 'Sabhi Anbiya ne bakriyan charayi thiien.',
          urdu: 'تمام انبیاء کرام نے بکریاں چرانے کا کام کیا تھا۔'
        }
      },
      {
        id: 'q6-2',
        question: {
          english: 'How old was Prophet Muhammad (ﷺ) when he traveled to Syria with Abu Talib and met Bahira?',
          hinglish: 'Bahira monk se mulaqat ke waqt Nabi (ﷺ) ki umar kitni thi?',
          urdu: 'بحیرا راہب سے ملاقات کے وقت آپ ﷺ کی عمر مبارک کتنی تھی؟'
        },
        options: {
          english: ['12 Years Old', '20 Years Old', '25 Years Old', '40 Years Old'],
          hinglish: ['12 Saal', '20 Saal', '25 Saal', '40 Saal'],
          urdu: ['۱۲ سال', '۲۰ سال', '۲۵ سال', '۴۰ سال']
        },
        correctIndex: 0,
        explanation: {
          english: 'He was 12 years old during his first journey to Syria with Abu Talib.',
          hinglish: '12 saal ki umar thi.',
          urdu: 'آپ کی عمر مبارک ۱۲ سال تھی'
        }
      },
      {
        id: 'q6-3',
        question: {
          english: 'What seal did monk Bahira inspect between the Prophet\'s shoulders?',
          hinglish: 'Bahira monk ne Nabi (ﷺ) ke shano ke beech kya dekha tha?',
          urdu: 'بحیرا راہب نے آپ ﷺ کے دونوں کاندھوں کے درمیان کون سی مقدس نشانی دیکھی تھا؟'
        },
        options: {
          english: ['Khatam an-Nubuwwah (Seal of Prophethood)', 'Golden ring', 'Crown mark', 'Tattoo'],
          hinglish: ['Khatam an-Nubuwwah (Mohar-e-Nabuwat)', 'Sone ki angoothi', 'Taj nishan', 'Tattoo'],
          urdu: ['مہرِ نبوت (خاتم النبوۃ)', 'سونے کی انگوٹھی', 'تاج کا نشان', 'تتو']
        },
        correctIndex: 0,
        explanation: {
          english: 'Bahira recognized the Seal of Prophethood between his shoulders.',
          hinglish: 'Khatam an-Nubuwwah dekhi thi.',
          urdu: 'آپ کے شانوں کے درمیان مہرِ نبوت دیکھی تھی۔'
        }
      }
    ]
  },

  // MODULE 7
  {
    id: 'seerah-7',
    chapterNumber: 7,
    period: 'Module 7 • 590 CE • Hilf al-Fudul (Pact of Virtue)',
    title: {
      english: '7. Hilf al-Fudul (Pact of Virtuous Alliance) & Protection of the Oppressed',
      hinglish: '7. Hilf al-Fudul Mu\'ahada Aur Mazloomon Ki Hifazat',
      urdu: '۷. حلف الفضول کا تاریخی معاہدہ اور مظلوموں کا تحفظ'
    },
    arabicTitle: 'حلف الفضول ونصرة المظلوم في مكة',
    icon: '🤝',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 7: Fijar War & Hilf al-Fudul',
    summary: {
      english: 'The participation of youth Muhammad (ﷺ) in Hilf al-Fudul, an alliance formed in the house of Ibn Jud\'an by Makkan leaders to defend all victims of injustice.',
      hinglish: 'Jawani mein Nabi (ﷺ) ka Hilf al-Fudul mu\'ahade mein hissa lena aur mazloomon ke huqooq ki hifazat.',
      urdu: 'جوانی میں آپ ﷺ کی حلف الفضول کے معاہدے میں شرکت اور مظلوموں کے حقوق کا تحفظ۔'
    },
    fullStory: {
      english: `As detailed in *The Sealed Nectar*, after the Sacrilegious Wars (Harb al-Fijar), a Yemeni merchant brought trade goods to Makkah. A powerful Makkan noble, Al-As ibn Wa'il, took the goods but refused to pay him. When the Yemeni trader appealed to Quraysh leaders on Mount Abu Qubays, noble tribes gathered at the house of Abdullah ibn Jud'an.

They swore a solemn oath by Allah that: *"No victim of oppression—whether native Makkan or foreign visitor—shall be wronged in Makkah, but that we shall stand as one with him against the oppressor until full restitution is made!"*

Prophet Muhammad (ﷺ) attended this alliance in his youth and praised it even after receiving prophethood, saying: *"I witnessed a pact in the house of Abdullah ibn Jud'an that was more beloved to me than red camels. If I were invited to it in Islam, I would certainly respond!"*`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, Makkah ke sardar Al-As ibn Wa'il ne ek Yemeni taajir ke paise mar liye. Yemeni taajir ne shor machaya to Abdullah ibn Jud'an ke ghar mein Makkah ke qabail ne **Hilf al-Fudul** qasam khayi: *"Jab tak Makkah mein koi mazloom hoga, hum milkar dushman ke khilaf khade honge!"* Nabi (ﷺ) ne baad mein farmaya: *"Mujhe iss mu'ahade ke muqable mein surkh oont bhi pasand nahi!"*`,
      urdu: `*الرحیق المختوم* کے مطابق، العاص بن وائل نے یمنی تاجر کے پیسے ہڑپ کر لیے۔ تاجر کی فریاد پر عبداللہ بن جدعان کے گھر **حلف الفضول** کا معاہدہ ہوا جس میں قسم کھائی گئی: *"جب تک مکہ میں کوئی مظلوم رہے گا، ہم مل کر ظالم کا ہاتھ روکیں گے!"* آپ ﷺ نے بعد میں فرمایا: *"مجھے اس معاہدے کے بدلے سرخ اونٹ ملنا بھی پسند نہیں۔"*`
    },
    keyTakeaways: {
      english: [
        'Standing up for victims of oppression is an essential prophetic duty.',
        'Muslims must support noble civic causes and treaties that defend human rights.',
        'Character is defined by defending the weak against the arrogant.'
      ],
      hinglish: [
        'Mazloom ki madad karna Nabuwat ki zaroori taleem hai.',
        'Insaani huqooq ke mu\'ahadon mein Musalmanon ko aage rehna chahiye.',
        'Kamzor ki hifazat hi asli bahaduri hai.'
      ],
      urdu: [
        'مظلوم کی مدد کرنا نبوت کا بنیادی فریضہ ہے۔',
        'انسانی حقوق کے معاہدوں کی مسلمانوں کو ہمیشہ حمایت کرنی چاہیے۔',
        'کمزور کی حفاظت ہی حقیقی شرافت ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'لَقَدْ شَهِدْتُ فِي دَارِ عَبْدِ اللَّهِ بْنِ جُدْعَانَ حِلْفًا مَا أُحِبُّ أَنَّ لِي بِهِ حُمُرَ النَّعَمِ',
      reference: 'Sunan al-Kubra 12929',
      translation: {
        english: '"I witnessed a pact in the house of Ibn Jud\'an; I would not exchange my presence at it for red camels..."',
        hinglish: '"Main Ibn Jud\'an ke ghar mein aise mu\'ahade mein shamil tha jiske badle surkh oont milna bhi mujhe pasand nahi..."',
        urdu: '"میں ابن جدعان کے گھر میں ایک ایسے معاہدے میں شریک تھا جس کے بدلے سرخ اونٹ ملنا بھی مجھے پسند نہیں..."'
      }
    },
    test: [
      {
        id: 'q7-1',
        question: {
          english: 'In whose house was the alliance "Hilf al-Fudul" established?',
          hinglish: 'Hilf al-Fudul mu\'ahada kiske ghar mein hua tha?',
          urdu: 'حلف الفضول کا معاہدہ کس کے مکان پر منعقد ہوا تھا؟'
        },
        options: {
          english: ['Abdullah ibn Jud\'an', 'Abu Talib', 'Abu Jahl', 'Al-As ibn Wa\'il'],
          hinglish: ['Abdullah ibn Jud\'an', 'Abu Talib', 'Abu Jahl', 'Al-As ibn Wa\'il'],
          urdu: ['عبداللہ بن جدعان', 'ابو طالب', 'ابو جہل', 'العاص بن وائل']
        },
        correctIndex: 0,
        explanation: {
          english: 'Hilf al-Fudul was formed in the house of Abdullah ibn Jud\'an.',
          hinglish: 'Abdullah ibn Jud\'an ke ghar hua tha.',
          urdu: 'عبداللہ بن جدعان کے گھر منعقد ہوا تھا۔'
        }
      },
      {
        id: 'q7-2',
        question: {
          english: 'What was the main purpose of Hilf al-Fudul?',
          hinglish: 'Hilf al-Fudul ka main maqsad kya tha?',
          urdu: 'حلف الفضول کا بنیادی مقصد کیا تھا؟'
        },
        options: {
          english: ['To defend any victim of oppression in Makkah', 'To attack neighboring cities', 'To control camel prices', 'To start a war'],
          hinglish: ['Mazloomon ki madad karna', 'Aas-paas hamla karna', 'Oont ki keemat tai karna', 'Ladaai shuru karna'],
          urdu: ['مظلوموں کی مدد اور عدل قائم کرنا', 'پڑوسی شہروں پر حملہ کرنا', 'اونٹوں کی قیمت طے کرنا', 'جنگ چھیڑنا']
        },
        correctIndex: 0,
        explanation: {
          english: 'It was formed to protect the oppressed and guarantee justice for all.',
          hinglish: 'Mazloomon ki madad ke liye tha.',
          urdu: 'مظلوموں کی مدد کے لیے بنایا گیا تھا۔'
        }
      },
      {
        id: 'q7-3',
        question: {
          english: 'What animal did Prophet Muhammad (ﷺ) mention when praising Hilf al-Fudul?',
          hinglish: 'Nabi (ﷺ) ne Hilf al-Fudul ke muqable kis cheez ka zikr kiya tha?',
          urdu: 'آپ ﷺ نے حلف الفضول کی تعریف میں کس نایاب چیز کا ذکر فرمایا تھا؟'
        },
        options: {
          english: ['Red camels (Humur al-Na\'am)', 'Black horses', 'White falcons', 'Gold coins'],
          hinglish: ['Surkh oont (Red camels)', 'Kale ghode', 'Safed baaz', 'Sona sikke'],
          urdu: ['سرخ اونٹ (حمر النعم)', 'کالے گھوڑے', 'سفید باز', 'سونے کے سکے']
        },
        correctIndex: 0,
        explanation: {
          english: 'He stated he would not trade his participation in it even for prized red camels.',
          hinglish: 'Surkh oont ka zikr kiya tha.',
          urdu: 'سرخ اونٹ کا ذکر فرمایا تھا'
        }
      }
    ]
  },

  // MODULE 8
  {
    id: 'seerah-8',
    chapterNumber: 8,
    period: 'Module 8 • 595 CE • Trade & Marriage to Khadijah (RA)',
    title: {
      english: '8. Commercial Integrity in Syria & Blessed Marriage to Sayyidah Khadijah (RA)',
      hinglish: '8. Shaam Mein Imandari Se Tijarat Aur Hazrat Khadijah (RA) Se Nikah',
      urdu: '۸. شام میں تجارتی دیانت اور سیدہ خدیجۃ الکبریٰ رض سے مبارک نکاح'
    },
    arabicTitle: 'التجارة في مال خديجة والزواج المبارك',
    icon: '📦',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 8: Trade for Khadijah & Marriage',
    summary: {
      english: 'Prophet Muhammad\'s management of Khadijah\'s trade caravan to Syria with Maysarah, his incredible financial honesty, and their sacred marriage in Makkah.',
      hinglish: 'Syria mein Hazrat Khadijah (RA) ke tijarati maal ki imandari se nigrani, Maysarah ki tasdeeq aur 25 saal ki umar mein nikah.',
      urdu: 'ملکِ شام میں سیدہ خدیجہ رض کے تجارتی قافلے کی قیادت، میسرہ کی گواہی اور ۲۵ برس کی عمر میں مبارک نکاح۔'
    },
    fullStory: {
      english: `As detailed in *The Sealed Nectar*, Sayyidah Khadijah bint Khuwaylid (RA) was a noble, wealthy businesswoman of Quraysh known as *At-Tahirah* (The Pure One). Hearing of Muhammad's complete truthfulness, trustworthy character, and noble manners, she offered him double the usual wage to lead her trade caravan to Busra in Syria.

Accompanied by her servant **Maysarah**, Muhammad (ﷺ) conducted business with complete transparency, gentle speech, and zero deception. The caravan returned with double the customary profits! Maysarah observed amazing signs during the trip: two angels shading Muhammad from the midday sun, and his extraordinary honesty when bargaining.

Impressed by his character, Khadijah sent her friend Nafisah bint Manbah to convey a proposal of marriage. Prophet Muhammad (ﷺ) consulted his uncle Abu Talib, who agreed wholeheartedly. Muhammad was 25 years old and Khadijah was 40. Their marriage lasted 25 years until her passing, producing six children: Al-Qasim, Abdullah, Zainab, Ruqayyah, Umm Kulthum, and Fatimah (RA).`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, Hazrat Khadijah (RA) ne Nabi (ﷺ) ki imandari sun kar apna tijarati maal Syria (Shaam) bheja. Ghulam Maysarah ke saath aapne be-misaal imandari se tijarat ki aur dugna munafa kamaya. Maysarah ne aapke aala akhlaq ki tareef ki jisse Hazrat Khadijah (RA) ne nikah ka paigham bheja. 25 saal ki umar mein aapka nikah hua.`,
      urdu: `*الرحیق المختوم* کے مطابق، سیدہ خدیجہ رض نے آپ ﷺ کی دیانت داری سن کر اپنا تجارتی قافلہ شام بھیجا۔ غلام میسرہ کے ساتھ آپ نے بے مثال شفافیت سے تجارت کی۔ میسرہ کی گواہی پر سیدہ خدیجہ رض نے رشتہ نکاح بھیجا اور ۲۵ سال کی عمر میں یہ مبارک نکاح ہوا۔`
    },
    keyTakeaways: {
      english: [
        'Commercial honesty and transparency attract divine Barakah (blessings).',
        'Character and truthfulness are far more valuable in a spouse than worldly wealth.',
        'Khadijah (RA) was the Prophet\'s greatest source of comfort, support, and companionship.'
      ],
      hinglish: [
        'Tijarat mein imandari se barkat aati hai.',
        'Achha akhlaq daulat se kahin bada khazana hai.',
        'Hazrat Khadijah (RA) Nabi (ﷺ) ki sabse badi rafeeq thiien.'
      ],
      urdu: [
        'تجارتی دیانت سے رزق میں برکت نازل ہوتی ہے۔',
        'اچھا اخلاق دنیاوی دولت سے کہیں زیادہ قیمتی ہے۔',
        'سیدہ خدیجہ رض آپ ﷺ کے لیے تسکین اور نصرت کا عظیم ذریعہ تھیں۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'التَّاجِرُ الصَّدُوقُ الأَمِينُ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ',
      reference: 'Sunan al-Tirmidhi 1209',
      translation: {
        english: '"The honest and trustworthy merchant will be with the prophets, the truthful, and the martyrs."',
        hinglish: '"Sacha aur amanatdar taajir Qiyamat ke din Anbiya aur Siddiqin ke saath hoga."',
        urdu: '"سچا اور امانت دار تاجر قیامت کے دن انبیاء اور صدیقین کے ساتھ ہوگا"'
      }
    },
    test: [
      {
        id: 'q8-1',
        question: {
          english: 'What noble title was Sayyidah Khadijah (RA) known by among the people of Makkah?',
          hinglish: 'Hazrat Khadijah (RA) ko Makkah waale kis laqab se pukarte the?',
          urdu: 'سیدہ خدیجہ رض کو اہل مکہ کس محترم لقب سے یاد کرتے تھے؟'
        },
        options: {
          english: ['At-Tahirah (The Pure One)', 'Al-Malikah', 'Al-Amirah', 'Al-Hakimah'],
          hinglish: ['At-Tahirah', 'Al-Malikah', 'Al-Amirah', 'Al-Hakimah'],
          urdu: ['الطاہرة (الطاہرہ)', 'الملكة', 'الأميرة', 'الحكيمة']
        },
        correctIndex: 0,
        explanation: {
          english: 'Sayyidah Khadijah (RA) was widely known as At-Tahirah (The Pure One) for her virtue.',
          hinglish: 'At-Tahirah kehte the.',
          urdu: 'انہیں الطاہرہ کہا جاتا تھا'
        }
      },
      {
        id: 'q8-2',
        question: {
          english: 'Which servant accompanied Prophet Muhammad (ﷺ) on the trade trip to Syria for Khadijah?',
          hinglish: 'Syria safar par Hazrat Khadijah (RA) ka konsa ghulam saath gaya tha?',
          urdu: 'سیدہ خدیجہ رض کا کون سا غلام آپ ﷺ کے ساتھ شام کے تجارتی سفر پر گیا تھا؟'
        },
        options: {
          english: ['Maysarah', 'Zayd', 'Bilal', 'Salim'],
          hinglish: ['Maysarah', 'Zayd', 'Bilal', 'Salim'],
          urdu: ['میسره', 'زید', 'بلال', 'سالم']
        },
        correctIndex: 0,
        explanation: {
          english: 'Maysarah accompanied him and witnessed his miracles and absolute honesty.',
          hinglish: 'Maysarah saath gaya tha.',
          urdu: 'میسرہ ساتھ گیا تھا'
        }
      },
      {
        id: 'q8-3',
        question: {
          english: 'How old was Prophet Muhammad (ﷺ) when he married Sayyidah Khadijah (RA)?',
          hinglish: 'Nikah ke waqt Nabi (ﷺ) ki umar kitni thi?',
          urdu: 'سیدہ خدیجہ رض سے نکاح کے وقت رسول اللہ ﷺ کی عمر مبارک کتنی تھی؟'
        },
        options: {
          english: ['25 Years Old', '40 Years Old', '30 Years Old', '18 Years Old'],
          hinglish: ['25 Saal', '40 Saal', '30 Saal', '18 Saal'],
          urdu: ['۲۵ سال', '۴۰ سال', '۳۰ سال', '۱۸ سال']
        },
        correctIndex: 0,
        explanation: {
          english: 'He was 25 years old and Khadijah (RA) was 40 years old.',
          hinglish: '25 saal umar thi.',
          urdu: 'آپ کی عمر مبارک ۲۵ سال تھی'
        }
      }
    ]
  },

  // MODULE 9
  {
    id: 'seerah-9',
    chapterNumber: 9,
    period: 'Module 9 • 605 CE • Rebuilding Ka\'bah & Black Stone',
    title: {
      english: '9. Rebuilding of the Ka\'bah & The Masterstroke of the Black Stone',
      hinglish: '9. Ka\'bah Ki Dubara Tameer Aur Hajar al-Aswad Ka Faisla',
      urdu: '۹. تعمیرِ کعبہ اور حجرِ اسود کا لافانی دانشمندانہ فیصلہ'
    },
    arabicTitle: 'بناء الكعبة وقضية التحكيم في الحجر الأسود',
    icon: '🕋',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 9: Rebuilding of Ka\'bah & Black Stone Dispute',
    summary: {
      english: 'Rebuilding the Ka\'bah following flash floods when the Prophet was 35, the fierce tribal dispute over placing Hajar al-Aswad, and the Prophet\'s brilliant peaceful resolution.',
      hinglish: '35 saal ki umar mein Ka\'bah ki dubara tameer, Hajar al-Aswad ke masle par talwarein nikalna aur Nabi (ﷺ) ka aala faisla.',
      urdu: '۳۵ سال کی عمر میں تعمیر کعبہ، حجرِ اسود پر تلواریں سونتنے کا واقعہ اور آپ ﷺ کا تاریخی حکمت آمیز فیصلہ۔'
    },
    fullStory: {
      english: `As detailed in *The Sealed Nectar*, when Prophet Muhammad (ﷺ) was 35 years old, a sudden flash flood damaged the walls of the Ka'bah. Quraysh decided to demolish and rebuild the Ka'bah using strictly pure halal money—excluding all income from interest, gambling, or theft.

When the building reached the height to place **Hajar al-Aswad** (The Black Stone), a fierce dispute broke out among the tribal chiefs. Every tribe wanted the sole honor of placing the sacred stone. For four days, civil war threatened Makkah; tribes dipped their hands in bowls of blood swearing to fight to the death!

Abu Umayyah ibn al-Mughirah suggested: *"Let the next person who enters through the gate of the Sanctuary (Banu Shaybah gate) be your arbitrator!"* They agreed and waited. The first person to walk through was Muhammad (ﷺ)! They cheered: *"This is Al-Amin! We are pleased with his judgment!"*

Prophet Muhammad (ﷺ) demonstrated masterly prophetic wisdom. He spread his cloak on the ground, placed Hajar al-Aswad in the middle, and instructed the leader of every single tribe to hold an edge of the cloak and lift it together! When they raised it to position, he took the stone with his own blessed hands and placed it into the wall. Thus, bloodshed was avoided and all tribes felt honored.`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, 35 saal ki umar mein Ka\'bah ki tameer hui. **Hajar al-Aswad** ko rakhne par qabail mein ladaai shuru hui. Abu Umayyah ne kaha ki Haram mein aane waale pehle banda faisla karega. Nabi (ﷺ) dakhil hue! Sabne kaha: *"Ye Al-Amin hain! Hum raazi hain!"* Aapne chadar par patthar rakh kar sabhi sardaron se uthwaya aur apne haathon se naseeb kiya.`,
      urdu: `*الرحیق المختوم* کے مطابق، ۳۵ سال کی عمر میں تعمیر کعبہ ہوئی۔ **حجرِ اسود** کی تنصیب پر خونریز جنگ کا خطر پیدا ہوا۔ طے پایا کہ حرم میں سب سے پہلے داخل ہونے والے شخص کا فیصلہ مانا جائے گا۔ آپ ﷺ داخل ہوئے تو سب پکار اٹھے: *"یہ الامین ہیں! ہم راضی ہیں!"* آپ نے مبارک چادر پر حجر اسود رکھ کر تمام قبائل سے اٹھوایا اور خود نصب فرما دیا۔`
    },
    keyTakeaways: {
      english: [
        'Prophet Muhammad (ﷺ) possessed extraordinary wisdom and conflict resolution skills even before prophethood.',
        'Inclusive decision-making unites people and prevents bloodshed.',
        'Quraysh recognized halal money was necessary for building Allah\'s House.'
      ],
      hinglish: [
        'Hikmat se ladaai ko dosti mein badalna.',
        'Sabko shamil karke faisla karna ladaai roktah hai.',
        'Allah ke ghar ke liye paak kamaai zaroori hai.'
      ],
      urdu: [
        'آپ ﷺ اعلائے نبوت سے قبل بھی بے مثال حکمت اور صلح جوئی کی خصوصیات رکھتے تھے۔',
        'شاملِ نصاب فیصلے جنگ و جدل کو روکتے ہیں۔',
        'خانہ کعبہ کے لیے صرف حلال مال ہی استعمال کیا گیا تھا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'هَذَا الأَمِينُ رَضِينَا بِهِ هَذَا مُحَمَّدٌ',
      reference: 'Sirat Ibn Hisham 1/197',
      translation: {
        english: '"This is Al-Amin! We are pleased with him; this is Muhammad!"',
        hinglish: '"Ye Al-Amin hain! Hum inke faisle par raazi hain; ye Muhammad hain!"',
        urdu: '"یہ الامین ہیں! ہم ان کے فیصلے پر راضی ہیں؛ یہ محمد ہیں!"'
      }
    },
    test: [
      {
        id: 'q9-1',
        question: {
          english: 'How old was Prophet Muhammad (ﷺ) during the rebuilding of the Ka\'bah?',
          hinglish: 'Tameer-e-Ka\'bah ke waqt Nabi (ﷺ) ki umar kitni thi?',
          urdu: 'تعمیر کعبہ کے وقت رسول اللہ ﷺ کی عمر مبارک کتنی تھی؟'
        },
        options: {
          english: ['35 Years Old', '25 Years Old', '40 Years Old', '30 Years Old'],
          hinglish: ['35 Saal', '25 Saal', '40 Saal', '30 Saal'],
          urdu: ['۳۵ سال', '۲۵ سال', '۴۰ سال', '۳۰ سال']
        },
        correctIndex: 0,
        explanation: {
          english: 'He was 35 years old when Quraysh rebuilt the Ka\'bah.',
          hinglish: '35 saal umar thi.',
          urdu: 'آپ کی عمر مبارک ۳۵ سال تھی'
        }
      },
      {
        id: 'q9-2',
        question: {
          english: 'What sacred stone caused a severe dispute among tribal leaders?',
          hinglish: 'Kis mubaraka patthar ko rakhne par qabail mein ladaai hui thi?',
          urdu: 'کس مقدس پتھر کی تنصیب پر قبائل کے درمیان تنازع برپا ہوا تھا؟'
        },
        options: {
          english: ['Hajar al-Aswad (The Black Stone)', 'Maqam Ibrahim', 'Yemeni Corner stone', 'Mount Safa stone'],
          hinglish: ['Hajar al-Aswad', 'Maqam Ibrahim', 'Yemeni Corner', 'Safa stone'],
          urdu: ['حجرِ اسود', 'مقامِ ابراہیم', 'رکنِ یمانی', 'کوہِ صفا کا پتھر']
        },
        correctIndex: 0,
        explanation: {
          english: 'The dispute was over who would place Hajar al-Aswad.',
          hinglish: 'Hajar al-Aswad par ladaai hui thi.',
          urdu: 'حجرِ اسود کی تنصیب پر تنازع ہوا تھا'
        }
      },
      {
        id: 'q9-3',
        question: {
          english: 'What object did Prophet Muhammad (ﷺ) spread to involve all tribal leaders in raising the Black Stone?',
          hinglish: 'Nabi (ﷺ) ne sabhi sardaron ko shamil karne ke liye kis cheez ka istemal kiya?',
          urdu: 'آپ ﷺ نے تمام قبائل کے سرداروں کو شریک کرنے کے لیے کس چیز پر حجر اسود رکھا تھا؟'
        },
        options: {
          english: ['His Cloak (Rida)', 'A wooden box', 'A shield', 'A carpet'],
          hinglish: ['Chadar (Rida)', 'Lakdi box', 'Dhaal', 'Kalin'],
          urdu: ['اپنی مبارک چادر (رداء)', 'لکڑی کا صندوق', 'ڈھال', 'قالین']
        },
        correctIndex: 0,
        explanation: {
          english: 'He placed the stone on his cloak and had all leaders lift it together.',
          hinglish: 'Chadar par rakha tha.',
          urdu: 'مبارک چادر پر حجر اسود رکھا تھا'
        }
      }
    ]
  },

  // MODULE 10
  {
    id: 'seerah-10',
    chapterNumber: 10,
    period: 'Module 10 • 610 CE • Cave Hira & The First Revelation',
    title: {
      english: '10. Solitude in Cave Hira & The First Revelation of "Iqra!"',
      hinglish: '10. Ghar-e-Hira Mein Pehli Wahi "Iqra!" Aur Nabuwat Ka Aagaz',
      urdu: '۱۰. غارِ حراء میں خلوت گزینی اور پہلی وحی "اقرأ" کا مبارک نزول'
    },
    arabicTitle: 'نزول الوحي في غار حراء واقرأ باسم ربك',
    icon: '✨',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 10: In the Shade of Prophethood',
    summary: {
      english: 'Solitary contemplation in Cave Hira, Angel Jibreel bringing the first verses of Surah Al-Alaq, Khadijah\'s steadfast support, and Waraqah ibn Nawfal\'s confirmation.',
      hinglish: 'Ghar-e-Hira mein ibadat, Farishte Jibreel (AS) ka aana, Surah Al-Alaq ki pehli 5 aayat, Hazrat Khadijah (RA) ki tasalli aur Waraqah ki tasdeeq.',
      urdu: 'غارِ حراء میں عبادت، حضرت جبرائیل کی آمد، سورۃ العلق کی آیات اور سیدہ خدیجہ رض کی تاریخی تسلی۔'
    },
    fullStory: {
      english: `As recorded in *The Sealed Nectar*, as he approached age 40, Muhammad (ﷺ) spent weeks in spiritual contemplation inside **Cave Hira** on Mount Noor, supported by provisions from Khadijah (RA). On Monday, 21st Ramadan (August 610 CE), Angel Jibreel appeared and commanded: **"Iqra!"** (Read!). He replied: "I am not one who reads." Jibreel embraced him three times and revealed the first 5 verses of Surah Al-Alaq: *"Read in the name of your Lord who created..."*

Trembling, he returned to Khadijah (RA) saying: **"Zammilooni!"** (Cover me!). She comforted him with famous words: *"Never! Allah will never humiliate you! You maintain ties of kinship, bear the burdens of the weak, help the poor, entertain guests, and assist those afflicted by calamity!"* Waraqah ibn Nawfal confirmed he was the final Prophet.`,
      hinglish: `*Ar-Raheeq Al-Makhtum* ke mutabiq, 21 Ramzan ko Ghar-e-Hira mein Jibreel (AS) ne Surah Al-Alaq ki 5 aayat nazil kien. Hazrat Khadijah (RA) ne aapko kambal oodha kar mashhoor alfaaz se tasalli di. Waraqah ibn Nawfal ne Nabuwat ki tasdeeq ki.`,
      urdu: `*الرحیق المختوم* کے مطابق، ۲۱ رمضان المبارک کی رات غارِ حراء میں حضرت جبرائیل نے سورۃ العلق کی ابتدائی ۵ آیات نازل فرمائیں۔ سیدہ خدیجہ رض نے تاریخی الفاظ میں تسلی دی اور ورقہ بن نوفل نے نبوت کی تصدیق کی۔`
    },
    keyTakeaways: {
      english: [
        'Seeking authentic knowledge ("Iqra") is Islam\'s supreme mandate.',
        'Service to humanity and noble character earn divine protection.',
        'Spouse support in moments of trial is a sacred Sunnah.'
      ],
      hinglish: [
        'Ilam hasil karna ("Iqra") Islam ka pehla Hukam hai.',
        'Gareebon ki khidmat karne waalon ko Allah ruswa nahi karta.',
        'Mushkil mein sharik-e-hayat ki tasalli azeem Sunnat hai.'
      ],
      urdu: [
        'علم حاصل کرنا ("اقرأ") اسلام کا بنیادی ترین حکم ہے۔',
        'مظلوموں اور غریبوں کی خدمت کرنے والوں کو اللہ کبھی ضائع نہیں کرتا۔',
        'مشکل وقت میں شریکِ حیات کی تسلی سنتِ نبوی ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
      reference: 'Surah Al-Alaq 96:1',
      translation: {
        english: '"Read in the name of your Lord who created."',
        hinglish: '"Padho apne Rab ke naam se jisne paida kiya."',
        urdu: '"پڑھیے اپنے رب کے نام سے جس نے پیدا کیا۔"'
      }
    },
    test: [
      {
        id: 'q10-1',
        question: {
          english: 'Where was Prophet Muhammad (ﷺ) when the first revelation "Iqra!" arrived?',
          hinglish: 'Pehli Wahi nazil hone ke waqt Nabi (ﷺ) kahan ibadat kar rahe the?',
          urdu: 'پہلی وحی کے نزول کے وقت آپ ﷺ کہاں خلوت گزیں تھے؟'
        },
        options: {
          english: ['Cave Hira on Mount Noor', 'Cave Thawr', 'Inside Ka\'bah', 'Masjid Nabawi'],
          hinglish: ['Jabal al-Noor par Ghar-e-Hira', 'Ghar-e-Thawr', 'Ka\'bah ke andar', 'Masjid Nabawi'],
          urdu: ['جبلِ نور پر واقع غارِ حراء', 'غارِ ثور', 'کعبہ کے اندر', 'مسجدِ نبوی']
        },
        correctIndex: 0,
        explanation: {
          english: 'The first revelation occurred in Cave Hira.',
          hinglish: 'Ghar-e-Hira mein pehli Wahi nazil hui thi.',
          urdu: 'غارِ حراء میں پہلی وحی نازل ہوئی تھی۔'
        }
      },
      {
        id: 'q10-2',
        question: {
          english: 'Who was the very first person to embrace Islam?',
          hinglish: 'Sabse pehle Islam kisne qabool kiya tha?',
          urdu: 'سب سے پہلے دائرہ اسلام میں کون داخل ہوا تھا؟'
        },
        options: {
          english: ['Sayyidah Khadijah (RA)', 'Abu Bakr (RA)', 'Ali (RA)', 'Zayd (RA)'],
          hinglish: ['Sayyidah Khadijah (RA)', 'Abu Bakr (RA)', 'Ali (RA)', 'Zayd (RA)'],
          urdu: ['سیدہ خدیجہ بنت خویلد رض', 'حضرت ابو بکر صدیق رض', 'حضرت علی رض', 'حضرت زید رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Sayyidah Khadijah (RA) was the first person to accept Islam.',
          hinglish: 'Sayyidah Khadijah (RA) sabse pehle imandar banien.',
          urdu: 'سیدہ خدیجہ رض کائنات کی پہلی مسلمان تھیں۔'
        }
      },
      {
        id: 'q10-3',
        question: {
          english: 'What was the very first word revealed in the Qur\'an?',
          hinglish: 'Qur\'an ka sabse pehla nazil hone waala lafz kya tha?',
          urdu: 'قرآن مجید کا سب سے پہلا نازل ہونے والا مبارک لفظ کیا تھا؟'
        },
        options: {
          english: ['Iqra (Read)', 'Uktub (Write)', 'Qum (Stand)', 'Isma (Listen)'],
          hinglish: ['Iqra (Padho)', 'Uktub', 'Qum', 'Isma'],
          urdu: ['اقرأ (پڑھیے)', 'اكتب', 'قم', 'اسمع']
        },
        correctIndex: 0,
        explanation: {
          english: 'The word "Iqra" (Read) was the first word revealed.',
          hinglish: 'Iqra pehla lafz tha.',
          urdu: 'اقرأ سب سے پہلا لفظ تھا'
        }
      }
    ]
  },

  // MODULE 11
  {
    id: 'seerah-11',
    chapterNumber: 11,
    period: 'Module 11 • 610 - 613 CE • Secret Da\'wah (Da\'wah al-Sirriyyah)',
    title: {
      english: '11. The Period of Secret Preaching & The Early Vanguard of Islam',
      hinglish: '11. Chupchap Da\'wah Ka Daur Aur Pehle Musalmanon Ka Giroh',
      urdu: '۱۱. دعوتِ سرّیہ کا دور، دارِ ارقم اور صابقونِ اولون'
    },
    arabicTitle: 'الدعوة السرية ودار الأرقم بن أبي الأرقم',
    icon: '🤫',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 11: Three Years of Secret Call',
    summary: {
      english: 'Three years of discrete, personal invitation to Islam in Makkah, establishing Dar al-Arqam as the first Islamic educational center, and the early conversions of Abu Bakr, Ali, Zayd, and Bilal (RA).',
      hinglish: 'Makkah mein 3 saal tak khufia da\'wah, Dar-e-Arqam ko pehla Islamic Taleemi Markaz banana, aur Abu Bakr, Ali, Zayd wa Bilal (RA) ka Islam lana.',
      urdu: 'مکہ مکرمہ میں تین سالہ دورِ دعوتِ سرّیہ، دارِ ارقم کو پہلا تعلیمی مرکز بنانا اور ابتدائی قدسی صفات صحابہ کرام رضی اللہ عنہم کا قبولِ اسلام۔'
    },
    fullStory: {
      english: `Following the initial revelation, Prophet Muhammad (ﷺ) was commanded by Allah to convey the message discreetly for three years (*Da'wah al-Sirriyyah*). Recognizing the fierce idolatrous pride of the Quraysh, the Prophet began by inviting those closest to him in character and blood.

The first adult male to embrace Islam without a moment of hesitation was **Abu Bakr As-Siddiq (RA)**, a respected merchant known for his wisdom, honesty, and noble lineage. Abu Bakr immediately became an active caller to Islam, bringing noble figures like Uthman ibn Affan, Az-Zubayr ibn Al-Awwam, Abdur Rahman ibn Awf, Sa'd ibn Abi Waqqas, and Talhah ibn Ubaydullah into the fold.

Among youths, the first was the Prophet's cousin **Ali ibn Abi Talib (RA)**, aged 10, followed by the freed slave **Zayd ibn Harithah (RA)**. Converts gathered secretly at **Dar al-Arqam** (the house of Al-Arqam ibn Abi Al-Arqam) on the slopes of Mount Safa, where the Prophet recited newly revealed Qur'anic verses and taught them purification of the soul (*Tazkiyah*).`,
      hinglish: `Nabuwat ke baad 3 saal tak khufia da'wah ka daur chala. Sabse pehle mardon mein **Abu Bakr As-Siddiq (RA)** ne bina kisi jhijhak ke Islam qabool kiya. Unke zariye Uthman, Zubayr, Abdur Rahman ibn Awf, aur Sa'd (RA) imandar bane. Bachhon mein **Ali (RA)** aur azad karda ghulam mein **Zayd (RA)** pehle Musalman banien. Sabhi Musalman **Dar al-Arqam** mein chupa kar Deen ki taleem hasil karte the.`,
      urdu: `اعلانِ نبوت کے بعد ابتدائی تین سال تک حکمت کے تحت دعوت کا کام خفیہ انداز میں جاری رکھا گیا۔ مردوں میں بلا تردد سب سے پہلے **حضرت ابو بکر صدیق رض** دائرہ اسلام میں داخل ہوئے۔ بچوں میں حضرت علی رض اور آزاد کردہ غلاموں میں حضرت زید بن حارثہ رض پہل کار بنے۔ **دارِ ارقم** کو اسلام کا پہلا تعلیمی و تربیتی مرکز بنایا گیا۔`
    },
    keyTakeaways: {
      english: [
        'Strategic wisdom and gradual planning are essential in calling people to truth.',
        'Abu Bakr (RA) demonstrated immediate, unshakeable conviction and proactive evangelism.',
        'Dar al-Arqam establishes the principle of centralized education for spiritual growth.'
      ],
      hinglish: [
        'Haq ki taraf bulane mein hikmat aur sabar zaroori hai.',
        'Abu Bakr (RA) ne bina shak ke Islam qabool kiya aur doosron ko bhi laya.',
        'Dar al-Arqam ne deeni taleem ke liye markaz ki bunyad rakhi.'
      ],
      urdu: [
        'دعوت و تبلیغ میں حکمت اور تدریج کا پالنا سنتِ نبوی ہے۔',
        'حضرت ابوبکر صدیق رض کا بلا ججھک قبولِ اسلام ان کے اعلیٰ مرتبے کی دلیل ہے۔',
        'دارِ ارقم نے اسلامی تعلیم و تربیت کی بنیاد رکھی۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'وَالأَوَّلُونَ الأَوَّلُونَ أُولَئِكَ الْمُقَرَّبُونَ',
      reference: 'Surah Al-Waqi\'ah 56:10-11',
      translation: {
        english: '"And the forerunners, the forerunners - Those are the ones brought near [to Allah]."',
        hinglish: '"Aur jo aage badhne waale hain, wohi Allah ke qareeb hain."',
        urdu: '"اور جو آگے بڑھنے والے ہیں، وہی اللہ کے مقرب بندے ہیں۔"'
      }
    },
    test: [
      {
        id: 'q11-1',
        question: {
          english: 'How many years did the Secret Phase of Da\'wah last in Makkah?',
          hinglish: 'Makkah mein Khufia Da\'wah ka daur kitne saal tak chala?',
          urdu: 'مکہ مکرمہ میں دعوتِ سرّیہ کا دور کتنے سال جاری رہا؟'
        },
        options: {
          english: ['3 Years', '5 Years', '1 Year', '7 Years'],
          hinglish: ['3 Saal', '5 Saal', '1 Saal', '7 Saal'],
          urdu: ['۳ سال', '۵ سال', '۱ سال', '۷ سال']
        },
        correctIndex: 0,
        explanation: {
          english: 'The secret preaching phase lasted for 3 years before open declaration.',
          hinglish: '3 saal tak secret preaching hui thi.',
          urdu: 'دعوتِ سرّیہ کا دور ۳ سال تک محیط تھا۔'
        }
      },
      {
        id: 'q11-2',
        question: {
          english: 'Whose home served as the first secret educational sanctuary for early Muslims?',
          hinglish: 'Early Muslims ke liye pehla khufia taleemi ghar kiska tha?',
          urdu: 'مسلمانوں کا پہلا خفیہ تعلیمی مرکز کس صحابی کا گھر تھا؟'
        },
        options: {
          english: ['Al-Arqam ibn Abi Al-Arqam', 'Abu Bakr As-Siddiq', 'Uthman ibn Affan', 'Umar ibn Al-Khattab'],
          hinglish: ['Dar al-Arqam', 'Abu Bakr ka ghar', 'Uthman ka ghar', 'Umar ka ghar'],
          urdu: ['دارِ ارقم (حضرت ارقم بن ابی الارقم کا گھر)', 'ابو بکر کا گھر', 'عثمان کا گھر', 'عمر کا گھر']
        },
        correctIndex: 0,
        explanation: {
          english: 'Dar al-Arqam served as the spiritual base and learning hub.',
          hinglish: 'Dar-e-Arqam pehla markaz tha.',
          urdu: 'دارِ ارقم اسلام کا پہلا تعلیمی مرکز تھا۔'
        }
      },
      {
        id: 'q11-3',
        question: {
          english: 'Who was the first adult male to embrace Islam without hesitation?',
          hinglish: 'Sabse pehle mardon mein bina kisi shubhe ke Islam kisne qabool kiya?',
          urdu: 'بالغ مردوں میں سب سے پہلے بلا تردد کس نے اسلام قبول کیا؟'
        },
        options: {
          english: ['Abu Bakr As-Siddiq (RA)', 'Umar ibn Al-Khattab (RA)', 'Abu Sufyan (RA)', 'Khalid ibn al-Walid (RA)'],
          hinglish: ['Abu Bakr As-Siddiq (RA)', 'Umar (RA)', 'Abu Sufyan', 'Khalid ibn Walid'],
          urdu: ['حضرت ابو بکر صدیق رض', 'حضرت عمر فاروق رض', 'ابو سفیان', 'خالد بن ولید']
        },
        correctIndex: 0,
        explanation: {
          english: 'Abu Bakr As-Siddiq (RA) was the first adult male convert.',
          hinglish: 'Abu Bakr (RA) pehle mard Musalman the.',
          urdu: 'حضرت ابو بکر صدیق رض مردوں میں اول المسلمین تھے۔'
        }
      }
    ]
  },

  // MODULE 12
  {
    id: 'seerah-12',
    chapterNumber: 12,
    period: 'Module 12 • 613 CE • Public Declaration (Da\'wah Jahriyyah)',
    title: {
      english: '12. Open Declaration at Mount Safa & The Hostility of Abu Lahab',
      hinglish: '12. Kohe-Safa Par Khula Ailan Aur Abu Lahab Ki Dushmani',
      urdu: '۱۲. کوہِ صفا پر علانیہ دعوت کا آغاز اور ابو لہب کی عداوت'
    },
    arabicTitle: 'الجهر بالدعوة على الصفا ومعاداة أبي لهب',
    icon: '📢',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 12: Open Call at Mount Safa',
    summary: {
      english: 'Allah commanded the open declaration of Islam. Prophet Muhammad (ﷺ) climbed Mount Safa to address Quraysh clans, affirming his truthfulness before delivering the divine warning, triggering Abu Lahab\'s enmity.',
      hinglish: 'Allah ke hukam se Koh-e-Safa par khula ailan, Quraysh se apni sachai ka iqrar karwaya, aur Phuppa Abu Lahab ki baddua aur dushmani.',
      urdu: 'کلامِ الہی کے حکم پر کوہِ صفا سے علانیہ دعوت، قریش سے سچائی کا اعتراف اور چچا ابو لہب کی کھلی دشمنی۔'
    },
    fullStory: {
      english: `After three years of secret preaching, Allah revealed: *"And warn your closest kin"* (Surah Ash-Shu'ara 26:214) and *"Proclaim openly what you are commanded"* (Surah Al-Hijr 15:94). Prophet Muhammad (ﷺ) ascended **Mount Safa** and called out to each clan of Quraysh by name: *"O Banu Fihr! O Banu Adi! O Banu Hashim!"*

When the crowds gathered, the Prophet asked: *"If I were to inform you that an enemy army in the valley behind this mountain is preparing to attack you, would you believe me?"* Unanimously, they replied: **"Yes! We have never experienced anything from you except absolute truthfulness (Sadiq) and trustworthiness (Amin)!"**

The Prophet then declared: *"Then I am a warner sent to you before a severe punishment!"* Upon hearing this call to Monotheism, his uncle **Abu Lahab** cursed: *"May you perish for the rest of the day! Is this why you assembled us?"* In response, Allah revealed Surah Al-Masad (Tabat Yada Abi Lahab), condemning Abu Lahab and his wife to eternal retribution.`,
      hinglish: `3 saal baad Allah ka hukam aaya ki khulla ailan karo. Nabi (ﷺ) Koh-e-Safa par chadhe aur sabhi qabail ko pukara. Aapne pucha: *"Agar main kaho ki pahad ke peeche se dushman hamla karne waala hai, to kya yaqeen karoge?"* Sabne ek saath kaha: *"Haan! Humne aapko hamesha Sadiq aur Amin paya hai!"* Fir Aapne Tawheed ka ailan kiya. Is par Abu Lahab ne baddua di, jiske jawab mein Surah Al-Masad nazil hui.`,
      urdu: `تین سال بعد اللہ تعالی کا حکم آیا کہ کوہِ صفا پر چڑھ کر دعوت دو۔ آپ ﷺ نے صفا پر کھڑے ہو کر قریش کو پکارا۔ پوچھا: *"اگر میں کہوں کہ اس پہاڑ کے پیچھے سے دشمن حملہ کرنے والا ہے تو کیا مانو گے؟"* سب نے بیک زبان کہا: *"ہاں! ہم نے آپ کو ہمیشہ صادق اور امین پایا ہے۔"* اس پر آپ نے توحید کی دعوت دی۔ چچا ابو لہب نے گستاخی کی جس پر سورۃ المسد نازل ہوئی۔`
    },
    keyTakeaways: {
      english: [
        'Flawless personal character and truthfulness form the bedrock of effective leadership.',
        'Truth often faces immediate opposition even from close relatives.',
        'Surah Al-Masad stands as a miraculous Qur\'anic prophecy of Abu Lahab dying as a disbeliever.'
      ],
      hinglish: [
        'Acha akhlaq aur sachai baat manwane ke liye sabse zaroori hai.',
        'Haq baat bolne par apno ki dushmani bhi mil sakti hai.',
        'Surah Masad ne Abu Lahab ki kufr par maut ki peshangoi ki jo sach hui.'
      ],
      urdu: [
        'اعلیٰ اخلاق اور سچائی مؤثر قیادت کی بنیاد ہیں۔',
        'حق بات کے اظہار پر قریبی رشتہ دار بھی مخالف بن سکتے ہیں۔',
        'سورۃ المسد قرآن مجید کی سچی اور معجزانہ پیشگوئی ثابت ہوئی۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'وَأَنذِرْ عَشِيرَتَكَ الأَقْرَبِينَ',
      reference: 'Surah Ash-Shu\'ara 26:214',
      translation: {
        english: '"And warn, [O Muhammad], your closest relatives."',
        hinglish: '"Aur apne sabse qareebi rishtedaron ko darao."',
        urdu: '"اور اپنے سب سے قریبی رشتہ داروں کو (عذابِ الٰہی سے) ڈرائیے۔"'
      }
    },
    test: [
      {
        id: 'q12-1',
        question: {
          english: 'From which mountain did Prophet Muhammad (ﷺ) deliver the first open call to Islam?',
          hinglish: 'Kis pahad par khade hokar Nabi (ﷺ) ne pehla khulla ailan kiya tha?',
          urdu: 'آپ ﷺ نے کس پہاڑ پر کھڑے ہو کر علانیہ دعوت کا آغاز فرمایا تھا؟'
        },
        options: {
          english: ['Mount Safa', 'Mount Marwah', 'Mount Uhud', 'Mount Arafat'],
          hinglish: ['Mount Safa', 'Mount Marwah', 'Mount Uhud', 'Mount Arafat'],
          urdu: ['کوہِ صفا', 'کوہِ مروہ', 'جبلِ احد', 'جبلِ عرفات']
        },
        correctIndex: 0,
        explanation: {
          english: 'The open declaration was delivered from Mount Safa.',
          hinglish: 'Koh-e-Safa se ailan hua tha.',
          urdu: 'کوہِ صفا پر کھڑے ہو کر علانیہ دعوت دی گئی تھی۔'
        }
      },
      {
        id: 'q12-2',
        question: {
          english: 'What did the Quraysh unanimously testify about the Prophet before he proclaimed Tawheed?',
          hinglish: 'Tawheed ke ailan se pehle Quraysh ne Nabi (ﷺ) ke bare mein kis baat ki gawahi di?',
          urdu: 'توحید کے اعلان سے قبل قریش نے آپ ﷺ کی کس خصوصیت کا اعتراف کیا؟'
        },
        options: {
          english: ['He was always Sadiq (Truthful) & Amin (Trustworthy)', 'He was a wealthy ruler', 'He was a military general', 'He was a poet'],
          hinglish: ['Woh hamesha Sadiq aur Amin the', 'Ameer the', 'General the', 'Shayer the'],
          urdu: ['آپ ہمیشہ صادق اور امین رہے ہیں', 'مالدار حاکم', 'سپہ سالار', 'شاعر']
        },
        correctIndex: 0,
        explanation: {
          english: 'They confirmed he was known only for complete honesty and reliability.',
          hinglish: 'Unone Sadiq aur Amin Hone ki gawahi di.',
          urdu: 'قریش نے آپ کو ہمیشہ صادق اور امین ماننے کا اعتراف کیا۔'
        }
      },
      {
        id: 'q12-3',
        question: {
          english: 'Which Surah was revealed in response to Abu Lahab\'s hostility at Mount Safa?',
          hinglish: 'Koh-e-Safa par Abu Lahab ki baddua ke jawab mein konsi Surah nazil hui?',
          urdu: 'ابو لہب کی گستاخی کے جواب میں کون سی سورۃ نازل ہوئی؟'
        },
        options: {
          english: ['Surah Al-Masad (Tabat Yada)', 'Surah Al-Ikhlas', 'Surah Al-Kafirun', 'Surah Al-Nasr'],
          hinglish: ['Surah Al-Masad', 'Surah Al-Ikhlas', 'Surah Al-Kafirun', 'Surah Al-Nasr'],
          urdu: ['سورۃ المسد (تبت يدا)', 'سورۃ الاخلاص', 'سورۃ الکافرون', 'سورۃ النصر']
        },
        correctIndex: 0,
        explanation: {
          english: 'Surah Al-Masad condemned Abu Lahab for his defiance.',
          hinglish: 'Surah Masad nazil hui thi.',
          urdu: 'سورۃ المسد نازل کی گئی تھی۔'
        }
      }
    ]
  },

  // MODULE 13
  {
    id: 'seerah-13',
    chapterNumber: 13,
    period: 'Module 13 • 613 - 615 CE • Persecution & Steadfastness',
    title: {
      english: '13. Persecution of Early Muslims: Bilal, Sumayyah & Yasir (RA)',
      hinglish: '13. Musalmanon Par Zulm: Bilal, Sumayyah Aur Yasir (RA) Ki Qurbani',
      urdu: '۱۳. ابتدائی مسلمانوں پر قریشی مظالم، اولین شہداء اور لالچ کی نا کامی'
    },
    arabicTitle: 'الاضطهاد والتعذيب وشهداء الإسلام الأولين',
    icon: '🛡️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 13: Persecution Phase',
    summary: {
      english: 'Quraysh launched brutal tortures against vulnerable converts. Sumayyah (RA) became Islam\'s first martyr, Bilal (RA) endured burning desert rocks chanting "Ahad, Ahad!", and Quraysh failed to bribe the Prophet.',
      hinglish: 'Quraysh ne ghareeb Musalmanon par zulm shuru kiya. Sumayyah (RA) pehli shaheed banien, Bilal (RA) ko garama kankariyon par ghasa' + 'te hue "Ahad! Ahad!" bolne ka waqia.',
      urdu: 'قریش نے غریب مسلمانوں پر شدید ترین مظالم ڈھائے۔ سیدہ سمیہ رض اسلام کی پہلی شہید بنیں اور حضرت بلال رض تپتی ریت پر "احد! احد!" پکارتے رہے۔'
    },
    fullStory: {
      english: `As Islam began to spread, Quraysh leaders realized that peaceful opposition had failed. They unleashed systematic torture against converts, targeting slaves and vulnerable believers who lacked tribal protection.

**Bilal ibn Rabah (RA)**, an Abyssinian slave owned by Umayyah ibn Khalaf, was dragged into the scorching Makkan desert at midday. A massive boulder was placed upon his chest while he was commanded to worship idols. Bilal steadfastly chanted: **"Ahad! Ahad!"** (Allah is One! Allah is One!). Seeing his agony, Abu Bakr (RA) purchased Bilal at an exorbitant price and set him free.

The family of **Yasir (RA)** endured unspeakable agony. Umayyah and Abu Jahl subjected Yasir, his wife **Sumayyah (RA)**, and son Ammar to extreme heat and beatings. Prophet Muhammad (ﷺ) passed by them and gave glad tidings: *"Patience, O family of Yasir! Indeed, your promised destination is Paradise!"* Abu Jahl stabbed Sumayyah (RA) with a spear, making her the **very first martyr (Shaheed) in Islamic history**. Seeing torture fail, Utbah ibn Rabi'ah offered the Prophet unlimited wealth, kingship, and doctors, but the Prophet responded with verses of Surah Fussilat, refusing to compromise Tawheed.`,
      hinglish: `Islam ke phailne par Quraysh ne mazloom Musalmanon par zulm shuru kiya. **Bilal (RA)** ko garama dhoop mein garam patthar par litaya gaya, lekin woh **"Ahad! Ahad!"** pukarte rahe. Abu Bakr (RA) ne unhe khareed kar azad kiya. **Sumayyah (RA)** ko Abu Jahl ne neze se shaheed kiya, jo **Islam ki pehli Shaheed** banien. Quraysh ne Nabi (ﷺ) ko daulat aur hukumat ki offer di, jise Aapne nakar diya.`,
      urdu: `اسلام کی مقبولیت پر قریش نے مظلوم مسلمانوں پر سخت ترین تشدد شروع کیا۔ **حضرت بلال رض** کے سینے پر تپتی ریت پر وزنی پتھر رکھا جاتا، آپ زبان سے **"احد! احد!"** کا نعرہ لگاتے۔ حضرت ابوبکر رض نے انہیں خرید کر آزاد فرمایا۔ **سیدہ سمیہ رض** کو ابو جہل نے نیزہ مار کر شہید کیا اور وہ **اسلام کی پہلی شہید** بنیں۔ قریش کی لالچ اور حکومت کی پیشکش کو آپ ﷺ نے رد فرما دیا۔`
    },
    keyTakeaways: {
      english: [
        'Faith (Iman) is priceless and cannot be extinguished by physical torture.',
        'Sayyidah Sumayyah (RA) represents the eternal honor and heroism of women in Islam.',
        'Principles of Tawheed cannot be traded for wealth, status, or worldly power.'
      ],
      hinglish: [
        'Iman ki taqat kisi zulm se khatam nahi ho sakti.',
        'Sayyidah Sumayyah (RA) Islam ki pehli azeem aurat shaheed hain.',
        'Deen ko daulat ya hukumat ke badle nahi becha ja sakta.'
      ],
      urdu: [
        'ایمان وہ عظیم دولت ہے جسے جسمانی تشدد مٹا نہیں سکتا۔',
        'سیدہ سمیہ رض کی شہادت اسلامی تاریخ میں خواتین کا عظیم فخر ہے۔',
        'توحید کے اصولوں پر کوئی سمجھوتہ نہیں ہو سکتا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'صَبْرًا آلَ يَاسِرٍ فَإِنَّ مَوْعِدَكُمُ الْجَنَّةُ',
      reference: 'Sunan Al-Kubra / Sealed Nectar Ref',
      translation: {
        english: '"Be patient, O family of Yasir! For indeed your appointed destination is Paradise."',
        hinglish: '"Sabar karo aal-e-Yasir! Tumhara thikana Jannat hai."',
        urdu: '"صبر کرو اے آلِ یاسر! تمہارا وعدہ گاہ جنت ہے۔"'
      }
    },
    test: [
      {
        id: 'q13-1',
        question: {
          english: 'Who was the very first martyr (Shaheed) in the history of Islam?',
          hinglish: 'Islam ki tareekh mein sabse pehli Shaheed hone waali hasti kaun hain?',
          urdu: 'اسلامی تاریخ میں سب سے پہلی شہید کا رتبہ کس کو حاصل ہوا؟'
        },
        options: {
          english: ['Sayyidah Sumayyah bint Khayyat (RA)', 'Sayyidah Khadijah (RA)', 'Sayyidah Fatimah (RA)', 'Sayyidah Aishah (RA)'],
          hinglish: ['Sayyidah Sumayyah (RA)', 'Sayyidah Khadijah (RA)', 'Sayyidah Fatimah (RA)', 'Sayyidah Aishah (RA)'],
          urdu: ['سیدہ سمیہ بنت خیاط رض', 'سیدہ خدیجہ رض', 'سیدہ فاطمہ رض', 'سیدہ عائشہ رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Sayyidah Sumayyah (RA) was stabbed by Abu Jahl, becoming the first martyr.',
          hinglish: 'Sumayyah (RA) pehli shaheed banien.',
          urdu: 'سیدہ سمیہ رض اسلام کی پہلی شہید تھیں۔'
        }
      },
      {
        id: 'q13-2',
        question: {
          english: 'What did Hazrat Bilal (RA) continuously chant while being tortured on hot sands?',
          hinglish: 'Tapate pattharon par litaye jaane par Hazrat Bilal (RA) kya pukarte the?',
          urdu: 'شدید ترین تشدد کے دوران حضرت بلال رض کی زبان پر کیا نعرہ جاری تھا؟'
        },
        options: {
          english: ['Ahad! Ahad! (Allah is One!)', 'La Sharika Lahu!', 'Allahu Akbar!', 'Al-Hamdulillah!'],
          hinglish: ['Ahad! Ahad!', 'La Sharika Lahu', 'Allahu Akbar', 'Al-Hamdulillah'],
          urdu: ['احد! احد! (اللہ ایک ہے)', 'لا شریک لہ', 'اللہ اکبر', 'الحمد لله']
        },
        correctIndex: 0,
        explanation: {
          english: 'Bilal (RA) fearlessly proclaimed "Ahad! Ahad!" affirming Tawheed.',
          hinglish: 'Ahad Ahad pukarte the.',
          urdu: 'حضرت بلال رض توحید کا نعرہ احد احد لگاتے۔'
        }
      },
      {
        id: 'q13-3',
        question: {
          english: 'Which noble companion purchased Hazrat Bilal (RA) to set him free from slavery?',
          hinglish: 'Hazrat Bilal (RA) ko khareed kar aazad kisne kiya tha?',
          urdu: 'حضرت بلال رض کو خرید کر غلامی سے کس صحابی نے آزاد فرمایا؟'
        },
        options: {
          english: ['Abu Bakr As-Siddiq (RA)', 'Umar ibn Al-Khattab (RA)', 'Uthman ibn Affan (RA)', 'Ali ibn Abi Talib (RA)'],
          hinglish: ['Abu Bakr As-Siddiq (RA)', 'Umar (RA)', 'Uthman (RA)', 'Ali (RA)'],
          urdu: ['حضرت ابو بکر صدیق رض', 'حضرت عمر فاروق رض', 'حضرت عثمان غنی رض', 'حضرت علی رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Abu Bakr (RA) paid a heavy sum to free Bilal (RA).',
          hinglish: 'Abu Bakr (RA) ne azad kiya tha.',
          urdu: 'حضرت ابوبکر صدیق رض نے خطیر رقم دے کر آزاد کرایا۔'
        }
      }
    ]
  },

  // MODULE 14
  {
    id: 'seerah-14',
    chapterNumber: 14,
    period: 'Module 14 • 615 CE • Migration to Abyssinia (Habasha)',
    title: {
      english: '14. First & Second Migrations to Abyssinia & Ja\'far (RA)\'s Speech',
      hinglish: '14. Habsha Ki Hijrat Aur Ja\'far ibn Abi Talib (RA) Ki Mashhoor Taqrreer',
      urdu: '۱۴. ہجرتِ حبشہ اور نجاشی کے دربار میں حضرت جعفر طیار رض کی تاریخی تقریب'
    },
    arabicTitle: 'الهجرة إلى الحبشة وخطاب جعفر بن أبي طالب عند النجاشي',
    icon: '⛵',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 14: Migration to Abyssinia',
    summary: {
      english: 'To protect believers from persecution, the Prophet advised migration to Abyssinia ruled by the just Christian King Negus. Ja\'far ibn Abi Talib (RA) delivered a masterpiece speech presenting Surah Maryam.',
      hinglish: 'Zulm se bachne ke liye Habsha ki hijrat. King Negus (Najashi) ke darbar mein Ja\'far (RA) ne Surah Maryam ki tilawat aur Islam ka mauqaf pesh kiya.',
      urdu: 'مظالم سے نجات کے لیے ملکِ حبشہ ہجرت، عادل نصرانی بادشاہ نجاشی کے دربار میں حضرت جعفر بن ابی طالب رض کی شاندار تقریب اور سورۃ مریم کی تلاوت۔'
    },
    fullStory: {
      english: `Seeing the intense suffering of Muslims in Makkah in the 5th year of Prophethood (615 CE), Prophet Muhammad (ﷺ) advised: *"If you were to go to Abyssinia, it would be better for you, for in it is a king under whom no one is wronged!"*

The **First Migration** consisted of 12 men and 4 women, including Uthman ibn Affan (RA) and his wife Ruqayyah (RA, the Prophet's daughter). Later, a **Second Migration** of 83 men and 18 women followed under the leadership of **Ja'far ibn Abi Talib (RA)**.

Alarmed, Quraysh dispatched Amr ibn Al-As and Abdullah ibn Abi Rabi'ah with lavish gifts to persuade King Negus (Ashama) to extradite the refugees. Negus summoned the Muslims. Ja'far (RA) stepped forward and delivered a legendary speech contrasting pre-Islamic ignorance (Jahiliyyah) with Islamic enlightenment: *"O King! We were an ignorant people worshiping idols, eating carrion, and severing ties... until Allah sent us a Prophet whose lineage, truthfulness, and purity we know!"* When Ja'far recited opening verses of **Surah Maryam**, King Negus wept until his beard was soaked and declared: *"Indeed, this and what Jesus brought come from the very same lamp of light!"* Negus refused Quraysh's bribes and granted Muslims eternal sanctuary.`,
      hinglish: `Nabuwat ke 5ve saal zulm se bachne ke liye Nabi (ﷺ) ne Habsha hijrat ka hukam diya. Pehli hijrat mein 16 log the (Uthman aur Ruqayyah RA). Doosri hijrat mein 83 mard the jiske sardaar **Ja'far ibn Abi Talib (RA)** the. Quraysh ne Amr ibn Al-As ko tohfe ke saath bheja taaki Musalmanon ko wapas laya jaye. **Najashi** ke darbar mein Ja'far (RA) ne **Surah Maryam** padhi. Najashi ro pada aur Quraysh ko khali haath louta diya.`,
      urdu: `نبوت کے پانچویں سال مظالم کے پیشِ نظر آپ ﷺ نے صحابہ کو حبشہ ہجرت کا مشورہ دیا۔ دوسری ہجرت میں ۸۳ مرد شامل تھے جس کے قائد **حضرت جعفر طیار رض** تھے۔ قریش نے عمرو بن العاص کو تحائف کے ساتھ بھیجا۔ نجاشی کے دربار میں حضرت جعفر رض نے جاہلیت اور اسلام کے فرق کو واضع کیا اور **سورۃ مریم** کی تلاوت فرمائی۔ نجاشی زار و قطار رو پڑا اور مسلمانوں کو پناہ دی۔`
    },
    keyTakeaways: {
      english: [
        'Seeking asylum and sanctuary to preserve faith is a legitimate Islamic diplomatic sunnah.',
        'Ja\'far (RA)\'s speech models articulate, respectful interfaith dialogue anchored in truth.',
        'Justice is a universal virtue appreciated across different religions and cultures.'
      ],
      hinglish: [
        'Eeman bachane ke liye hijrat karna Sunnat hai.',
        'Ja\'far (RA) ki taqreer ne Islam ke sache pegham ko duniya ke samne rakha.',
        'Insaf har mazhab mein pasand kiya jata hai.'
      ],
      urdu: [
        'ایمان کی حفاظت کے لیے ہجرت کرنا عظیم سنتِ نبوی ہے۔',
        'حضرت جعفر طیار رض کی تقریر اسلامی سفارت کاری کا شاہکار ہے۔',
        'عدل و انصاف ہر سچے انسان کا پسندیدہ وصف ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'قَالُواْ كُنَّا مُسْتَضْعَفِينَ فِي الأَرْضِ قَالْواْ أَلَمْ تَكُنْ أَرْضُ اللَّهِ وَاسِعَةً فَتُهَاجِرُواْ فِيهَا',
      reference: 'Surah An-Nisa 4:97',
      translation: {
        english: '"They will say: We were oppressed in the land. They will say: Was not the earth of Allah spacious enough for you to emigrate therein?"',
        hinglish: '"Farishte kahenge: Kya Allah ki zameen itni kushada nahi thi ki tum hijrat kar lete?"',
        urdu: '"فرشتے کہیں گے: کیا اللہ کی زمین اتنی کشادہ نہ تھی کہ تم اس میں ہجرت کر جاتے؟"'
      }
    },
    test: [
      {
        id: 'q14-1',
        question: {
          english: 'Which Christian King granted sanctuary to Muslims in Abyssinia (Habasha)?',
          hinglish: 'Habsha ke kis insaf-pasand Isai Baadshah ne Musalmanon ko pnah di thi?',
          urdu: 'حبشہ کے کس عادل نصرانی بادشاہ نے مسلمانوں کو پناہ عطا کی تھی؟'
        },
        options: {
          english: ['King Negus (Ashama Al-Najashi)', 'Heraclius', 'Chosroes', 'Muqawqis'],
          hinglish: ['King Negus (Najashi)', 'Heraclius', 'Chosroes', 'Muqawqis'],
          urdu: ['نجاشی (اشحمہ النجاشی)', 'ہرقل', 'خسرو پرویز', 'مقوقس']
        },
        correctIndex: 0,
        explanation: {
          english: 'King Negus granted sanctuary and later embraced Islam.',
          hinglish: 'Najashi ne pnah di thi.',
          urdu: 'بادشاہ نجاشی نے مسلمانوں کو مکمل تحفظ دیا۔'
        }
      },
      {
        id: 'q14-2',
        question: {
          english: 'Which Surah did Ja\'far ibn Abi Talib (RA) recite in front of King Negus?',
          hinglish: 'King Najashi ke darbar mein Ja\'far (RA) ne kis Surah ki tilawat ki thi?',
          urdu: 'حضرت جعفر طیار رض نے نجاشی کے دربار میں کس سورۃ کی تلاوت فرمائی تھی؟'
        },
        options: {
          english: ['Surah Maryam', 'Surah Al-Baqarah', 'Surah Yasin', 'Surah Al-Kahf'],
          hinglish: ['Surah Maryam', 'Surah Al-Baqarah', 'Surah Yasin', 'Surah Al-Kahf'],
          urdu: ['سورۃ مریم', 'سورۃ البقرہ', 'سورۃ یس', 'سورۃ الکہف']
        },
        correctIndex: 0,
        explanation: {
          english: 'Reciting Surah Maryam moved King Negus to tears.',
          hinglish: 'Surah Maryam padhi thi.',
          urdu: 'سورۃ مریم کی تلاوت سن کر نجاشی آبدیدہ ہو گیا۔'
        }
      },
      {
        id: 'q14-3',
        question: {
          english: 'Who led the delegation of Quraysh sent to bring back the Muslim migrants from Abyssinia?',
          hinglish: 'Quraysh ka konsa banda tohfe lekar Musalmanon ko wapas lane Habsha gaya tha?',
          urdu: 'قریش کا کون سا سفیر تحائف لے کر مسلمانوں کو واپس لانے حبشہ گیا تھا؟'
        },
        options: {
          english: ['Amr ibn Al-As', 'Abu Jahl', 'Abu Sufyan', 'Walid ibn al-Mughirah'],
          hinglish: ['Amr ibn Al-As', 'Abu Jahl', 'Abu Sufyan', 'Walid'],
          urdu: ['عمرو بن العاص', 'ابو جہل', 'ابو سفیان', 'ولید بن مغیرہ']
        },
        correctIndex: 0,
        explanation: {
          english: 'Amr ibn Al-As led Quraysh\'s delegation before his conversion to Islam.',
          hinglish: 'Amr ibn Al-As gaye the.',
          urdu: 'عمرو بن العاص ہجرتِ حبشہ کے وقت قریش کے سفیر بن کر گئے۔'
        }
      }
    ]
  },

  // MODULE 15
  {
    id: 'seerah-15',
    chapterNumber: 15,
    period: 'Module 15 • 616 CE • Fortification of Islam',
    title: {
      english: '15. Conversion of Hamzah (RA) & Umar ibn Al-Khattab (RA)',
      hinglish: '15. Hazrat Hamzah (RA) Aur Hazrat Umar (RA) Ka Qabool-e-Islam',
      urdu: '۱۵. حضرت حمزہ رض اور حضرت عمر فاروق رض کا قبولِ اسلام اور غلبۂ دین'
    },
    arabicTitle: 'إسلام حمزة بن عبد المطلب وعمر بن الخطاب رضي الله عنهما',
    icon: '⚔️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 15: Conversion of Hamzah & Umar',
    summary: {
      english: 'Within three days, the lions of Arabia—Hamzah ibn Abdul-Muttalib (RA) and Umar ibn Al-Khattab (RA)—accepted Islam, shifting the balance of power in Makkah and enabling public worship at the Ka\'bah.',
      hinglish: '3 din ke andar Hazrat Hamzah (RA) aur Hazrat Umar (RA) ne Islam qabool kiya, jisse Musalmanon ko zabardast taqat mili aur Ka\'bah par khule aam Namaz padhi gayi.',
      urdu: 'تین دنوں کے اندر حضرت حمزہ رض اور حضرت عمر فاروق رض کے قبولِ اسلام سے مکہ میں مسلمانوں کو عظیم الشان طاقت ملی اور کعبہ میں با جماعت نماز کا آغاز ہوا۔'
    },
    fullStory: {
      english: `In the 6th year of Prophethood (616 CE), Islam received a powerful reinforcement through the conversion of two formidable Makkan leaders: **Hamzah (RA)** and **Umar (RA)**.

**Hamzah ibn Abdul-Muttalib (RA)**, the Prophet's brave uncle and skilled hunter, returned from hunting to hear that Abu Jahl had insulted his nephew near Mount Safa. Enraged, Hamzah marched into the Sacred Mosque, struck Abu Jahl across the face with his bow, and declared: *"Do you insult him when I follow his religion and say what he says? Return the blow if you dare!"*

Three days later, **Umar ibn Al-Khattab (RA)** set out with a drawn sword intending to eliminate the Prophet. On his way, Nu'aym ibn Abdillah informed him that his own sister Fatimah and her husband Sa'id ibn Zayd had embraced Islam. Umar rushed to their house, heard verses of **Surah Taha** being recited from a scroll, and struck his brother-in-law. When he saw his sister bleeding yet resolute in her faith, his heart melted. He read the scroll: *"Indeed, I am Allah. There is no deity except Me, so worship Me..."* (Taha 20:14). Overwhelmed, Umar went straight to Dar al-Arqam, testified faith, and led Muslims in two proud lines—one led by Hamzah, the other by Umar—to pray publicly at the Ka'bah for the first time!`,
      hinglish: `Nabuwat ke 6te saal do sheron ne Islam qabool kiya: **Hamzah (RA)** aur **Umar (RA)**. Hamzah (RA) ne Abu Jahl ko kaman se maara jab usne Nabi (ﷺ) ki shaan mein gustakhi ki thi. **Umar (RA)** Nabi (ﷺ) ko shaheed karne nikle the, lekin behen Fatimah ke ghar **Surah Taha** sun kar unka dil badal gaya. Dar-e-Arqam jakar Islam qabool kiya aur Ka'bah par khullam khulla Namaz shuru karwai!`,
      urdu: `نبوت کے چھٹے سال دو عظیم رہنماؤں **حضرت حمزہ رض** اور **حضرت عمر فاروق رض** نے اسلام قبول کیا۔ حضرت حمزہ نے ابو جہل کی گستاخی پر اس کا سر کمان سے پھاڑ دیا۔ حضرت عمر تلوار لے کر نکلے تھے لیکن اپنی بہن کے گھر **سورۃ طٰہٰ** کی تلاوت سن کر دل موم ہو گیا۔ کعبۃ اللہ میں با جماعت علانیہ نماز کا آغاز ہوا۔`
    },
    keyTakeaways: {
      english: [
        'Allah answers the sincere prayers of His Messenger (e.g., "O Allah, strengthen Islam with Umar").',
        'Physical courage and noble strength dedicated to truth transform society.',
        'The Holy Qur\'an possesses unmatched power to soften the hardest of human hearts.'
      ],
      hinglish: [
        'Nabi (ﷺ) ki Dua se Hazrat Umar (RA) ko Hidayat mili.',
        'Acha insan jab Islam lata hai to Deen ko taqat milti hai.',
        'Qur\'an ki aayat sakht se sakht dil ko bhi pighla sakti hai.'
      ],
      urdu: [
        'رسول اللہ ﷺ کی دعا کی برکت سے حضرت عمر رض کو ہدایت ملی۔',
        'شجاعت اور طاقت جب اسلام کے لیے وقف ہو تو انقلاب آتا ہے۔',
        'قرآن مجید کا اعجاز سخت ترین دلوں کو موم کر دیتا ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'اللَّهُمَّ أَعِزَّ الإِسْلاَمَ بِأَحَبِّ هَذَيْنِ الرَّجُلَيْنِ إِلَيْكَ بِأَبِي جَهْلٍ أَوْ بِعُمَرَ بْنِ الْخَطَّابِ',
      reference: 'Sunan al-Tirmidhi 3681',
      translation: {
        english: '"O Allah, strengthen Islam with whichever of these two men is more beloved to You: Abu Jahl or Umar ibn Al-Khattab."',
        hinglish: '"Ya Allah! Umar bin Khattab ya Abu Jahl mein se jo tujhe zyada pasand ho usse Islam ko taqat de."',
        urdu: '"اے اللہ! عمر بن خطاب یا ابو جہل میں سے جو تجھے زیادہ محبوب ہو اس کے ذریعے اسلام کو عزت عطا فرما۔"'
      }
    },
    test: [
      {
        id: 'q15-1',
        question: {
          english: 'Which Surah softened the heart of Hazrat Umar (RA) when he heard it at his sister\'s home?',
          hinglish: 'Behen ke ghar par konsi Surah sun kar Hazrat Umar (RA) ka dil pighal gaya tha?',
          urdu: 'بہن کے گھر پر کس سورۃ کی تلاوت سن کر حضرت عمر فاروق رض کا دل موم ہوا تھا؟'
        },
        options: {
          english: ['Surah Taha', 'Surah Yasin', 'Surah Al-Rahman', 'Surah Al-Mulk'],
          hinglish: ['Surah Taha', 'Surah Yasin', 'Surah Al-Rahman', 'Surah Al-Mulk'],
          urdu: ['سورۃ طٰہٰ', 'سورۃ یس', 'سورۃ الرحمن', 'سورۃ الملک']
        },
        correctIndex: 0,
        explanation: {
          english: 'Reading Surah Taha led Umar (RA) directly to embrace Islam.',
          hinglish: 'Surah Taha ki aayat thi.',
          urdu: 'سورۃ طٰہٰ کی آیات نے حضرت عمر رض کے دل کی دنیا بدل دی۔'
        }
      },
      {
        id: 'q15-2',
        question: {
          english: 'Whose insult towards the Prophet led Hazrat Hamzah (RA) to strike him with his bow?',
          hinglish: 'Kiske gustakhi karne par Hazrat Hamzah (RA) ne use kaman se mara tha?',
          urdu: 'آپ ﷺ کی گستاخی پر حضرت حمزہ رض نے کس کا سر کمان سے پھاڑ دیا تھا؟'
        },
        options: {
          english: ['Abu Jahl', 'Abu Lahab', 'Umayyah ibn Khalaf', 'Utbah ibn Rabi\'ah'],
          hinglish: ['Abu Jahl', 'Abu Lahab', 'Umayyah', 'Utbah'],
          urdu: ['ابو جہل', 'ابو لہب', 'امیہ بن خلف', 'عتبہ بن ربیعہ']
        },
        correctIndex: 0,
        explanation: {
          english: 'Hamzah struck Abu Jahl for abusing the Prophet.',
          hinglish: 'Abu Jahl ko mara tha.',
          urdu: 'ابو جہل کو حضرت حمزہ نے سبق سکھایا تھا۔'
        }
      },
      {
        id: 'q15-3',
        question: {
          english: 'What major historical action did Muslims take right after Umar (RA) accepted Islam?',
          hinglish: 'Hazrat Umar (RA) ke Islam lane ke baad Musalmanon ne pehli baar kya kiya?',
          urdu: 'حضرت عمر رض کے قبولِ اسلام کے بعد مسلمانوں نے پہلی بار کیا تاریخی قدم اٹھایا؟'
        },
        options: {
          english: ['Marched in two lines and prayed publicly at the Ka\'bah', 'Migrated to Madinah immediately', 'Fought the Battle of Badr', 'Built Masjid Nabawi'],
          hinglish: ['Ka\'bah par khullam khulla Namaz padhi', 'Madinah hijrat ki', 'Badr ki jung ladi', 'Masjid banai'],
          urdu: ['صفیں بنا کر کعبۃ اللہ میں علانیہ با جماعت نماز ادا کی', 'مدینہ ہجرت کی', 'غزوہ بدر میں حصہ لیا', 'مسجد نبوی کی تعمیر']
        },
        correctIndex: 0,
        explanation: {
          english: 'They marched to the Ka\'bah and prayed publicly under the protection of Hamzah and Umar.',
          hinglish: 'Ka\'bah par khule aam Namaz padhi.',
          urdu: 'کعبۃ اللہ میں علی الاعلان نماز ادا کی۔'
        }
      }
    ]
  },

  // MODULE 16
  {
    id: 'seerah-16',
    chapterNumber: 16,
    period: 'Module 16 • 617 - 619 CE • Social Boycott in Shi\'b Abi Talib',
    title: {
      english: '16. Three Years of Total Boycott in the Valley of Shi\'b Abi Talib',
      hinglish: '16. Shi\'b-e-Abi Talib Mein 3 Saal Ka Sakht Social Boycott',
      urdu: '۱۶. شعبِ ابی طالب کا تین سالہ سخت ترین سماجی و اقتصادی بائیکاٹ'
    },
    arabicTitle: 'الحصار الشديد في شعب أبي طالب ونقض الصحيفة الظالمة',
    icon: '📜',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 16: The General Boycott',
    summary: {
      english: 'Quraysh imposed a cruel 3-year total embargo on Banu Hashim and Banu Al-Muttalib in the narrow valley of Shi\'b Abi Talib. Muslims ate tree leaves to survive until noble non-Muslims tore down the unjust parchment eaten by ants.',
      hinglish: 'Quraysh ne Banu Hashim ka 3 saal tak boycott kiya. Shi\'b Abi Talib ghati mein Musalmanon ne darakht ke patte khaye. Aakhir mein parchment ko deemak ne chaat liya aur boycott toota.',
      urdu: 'قریش نے شعبِ ابی طالب میں تین سالہ خوفناک بائیکاٹ نافذ کیا۔ مسلمانوں نے درختوں کے پتے کھا کر وقت گزارا۔ بالآخر دیمک کے عہد نامہ چاٹنے سے بائیکاٹ ختم ہوا۔'
    },
    fullStory: {
      english: `Furious at the conversion of Hamzah and Umar, the chiefs of Quraysh drafted a ruthless pact of total economic and social boycott against Banu Hashim and Banu Al-Muttalib (both Muslims and non-Muslim clan members protecting the Prophet).

The parchment, written by Mansur ibn Ikrimah, declared:
1. No trading, buying, or selling with them.
2. No marriage ties with them.
3. No peace or social contact until they handed over Muhammad (ﷺ) to be executed.

The document was hung inside the Ka'bah. For three excruciating years (7th to 10th year of Prophethood, 617-619 CE), Muslims and their protectors were forced into the barren valley of **Shi'b Abi Talib**. Food supplies were completely cut off. Cries of starving infants echoed across Makkah. Believers survived by chewing dried leather and leaves of trees (*Talh*). Yet, not a single believer abandoned Prophet Muhammad (ﷺ).

Finally, five fair-minded Makkan leaders (Hisham ibn Amr, Zuhair ibn Abi Umayyah, Mut'im ibn Adi, Abul-Bukhturi, and Zam'ah ibn Al-Aswad) protested against this cruelty. Simultaneously, Allah informed the Prophet that white ants (*Deemak*) had eaten the entire parchment inside the Ka'bah, except the divine words **"Bismika Allahumma"** (In Your Name, O Allah). When Abu Talib challenged Quraysh to inspect the document, they found the prophecy true, breaking the boycott!`,
      hinglish: `Hamzah aur Umar ke Islam lane se ghabra kar Quraysh ne **Shi'b Abi Talib** mein Banu Hashim ka boycott kar diya. Khana peena sab band tha. Musalmanon ne patte aur chamda chaba kar 3 saal guzare. Phir Allah ne **deemak** ke zariye parchament ko chatwa diya sirf "Bismika Allahumma" bacha. 5 acche logon ne mil kar boycott tod diya.`,
      urdu: `قریش نے **شعبِ ابی طالب** کی گھاٹی میں تین سالہ سخت ترین مقاطعت نافذ کی۔ مسلمانوں نے بھوک کی شدت میں درختوں کے پتے اور چمڑا چبا کر دن گزارے۔ بالآخر اللہ کی قدر ت سے دیمک نے عہد نامہ چاٹ لیا سوائے "بسمک اللهم" کے اور ۵ با مروت سرداروں کی کوشش سے بائیکاٹ ٹوٹ گیا۔`
    },
    keyTakeaways: {
      english: [
        'Unshakeable patience (Sabr) during financial and social trials brings divine victory.',
        'Standing up against systematic injustice is commendable, regardless of one\'s background.',
        'Miraculous divine signs (ants consuming the scroll) vindicated the truthfulness of the Prophet.'
      ],
      hinglish: [
        'Mushkil waqt mein sabar karne waalon ki Allah madad karta hai.',
        'Zulm ke khilaf aawaz uthana azeem kaam hai.',
        'Allah ne deemak ke zariye boycott ka aahad-nama khatam kiya.'
      ],
      urdu: [
        'شدید ترین معاشی و سماجی آزمائش میں صبر ہی نصرتِ الٰہی کا ضامن ہے۔',
        'ظالم کے سامنے ڈٹ جانا اور مظلوم کا ساتھ دینا انسانی فریضہ ہے۔',
        'دیمک کا معاہدے کو چاٹ جانا کلامِ نبوت की صداقت کا روشن ثبوت تھا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ',
      reference: 'Surah Ar-Rum 30:47',
      translation: {
        english: '"And it was an obligation upon Us to help the believers."',
        hinglish: '"Aur Musalmanon ki madad karna Hum par lazmi haq hai."',
        urdu: '"اور مومنوں کی نصرت و مدد کرنا ہمارے ذمے ایک حق ہے۔"'
      }
    },
    test: [
      {
        id: 'q16-1',
        question: {
          english: 'How many years did the brutal social and economic boycott in Shi\'b Abi Talib last?',
          hinglish: 'Shi\'b Abi Talib ghati mein boycott kitne saal tak chala tha?',
          urdu: 'شعبِ ابی طالب کی گھاٹی میں بائیکاٹ کتنے سال جاری رہا؟'
        },
        options: {
          english: ['3 Years', '1 Year', '5 Years', '7 Years'],
          hinglish: ['3 Saal', '1 Saal', '5 Saal', '7 Saal'],
          urdu: ['۳ سال', '۱ سال', '۵ سال', '۷ سال']
        },
        correctIndex: 0,
        explanation: {
          english: 'The boycott lasted for three full years from 617 to 619 CE.',
          hinglish: '3 saal tak chala tha.',
          urdu: 'بائیکاٹ ۳ مکمل سال تک جاری رہا۔'
        }
      },
      {
        id: 'q16-2',
        question: {
          english: 'What miraclulously consumed the boycott document inside the Ka\'bah except "Bismika Allahumma"?',
          hinglish: 'Ka\'bah ke andar rakhe boycott ke parchment ko kisne kha liya tha?',
          urdu: 'کعبہ کے اندر رکھے ہوئے بائیکاٹ نامے کو کس چیز نے چاٹ لیا تھا؟'
        },
        options: {
          english: ['White Ants / Termites (Deemak)', 'Fire', 'Rainwater', 'Rats'],
          hinglish: ['Deemak (White Ants)', 'Aag', 'Baarish ka paani', 'Chuhe'],
          urdu: ['دیمک (کیڑوں)', 'آگ', 'بارش کا پانی', 'چوہے']
        },
        correctIndex: 0,
        explanation: {
          english: 'White ants ate the entire paper except Allah\'s name.',
          hinglish: 'Deemak ne kha liya tha.',
          urdu: 'دیمک نے اللہ کے نام کے سوا پورا عہد نامہ چاٹ لیا تھا۔'
        }
      },
      {
        id: 'q16-3',
        question: {
          english: 'What did starving believers eat to survive during the valley blockade?',
          hinglish: 'Blockade ke dauran Musalmanon ne zinda rehne ke liye kya khaya tha?',
          urdu: 'بائیکاٹ کے دوران مسلمانوں نے بھوک مٹانے کے لیے کیا کھایا تھا؟'
        },
        options: {
          english: ['Tree leaves and dried animal hides/leather', 'Dates and meat', 'Bread and honey', 'Fish and olives'],
          hinglish: ['Darakht ke patte aur chamda', 'Khajoor aur gosht', 'Roti aur shehed', 'Machli'],
          urdu: ['درختوں کے پتے اور خشک چمڑا', 'کھجوریں اور گوشت', 'روٹی اور شہد', 'مچھلی']
        },
        correctIndex: 0,
        explanation: {
          english: 'Believers survived by boiling tree leaves and dried leather.',
          hinglish: 'Patte aur chamda khaya tha.',
          urdu: 'مسلمانوں نے درختوں کے پتے چبا کر بھوک مٹائی۔'
        }
      }
    ]
  },

  // MODULE 17
  {
    id: 'seerah-17',
    chapterNumber: 17,
    period: 'Module 17 • 619 CE • Year of Sorrow (Aam al-Huzn)',
    title: {
      english: '17. The Year of Sorrow (Aam al-Huzn): Passing of Khadijah & Abu Talib',
      hinglish: '17. Aam al-Huzn (Gham Ka Saal): Hazrat Khadijah aur Abu Talib Ka Wafat',
      urdu: '۱۷. عام الحزن (غم کا سال)، سیدہ خدیجہ الكبرىٰ اور ابو طالب کی رحلت'
    },
    arabicTitle: 'عام الحزن ووفاة خديجة وأبي طالب',
    icon: '💔',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 17: Year of Grief',
    summary: {
      english: 'In the 10th year of Prophethood, within a span of weeks, the Prophet lost his protective uncle Abu Talib and his beloved wife Sayyidah Khadijah (RA), leaving him deeply grieving without earthly protectors.',
      hinglish: 'Nabuwat ke 10ve saal choti muddat mein uncle Abu Talib aur azeem biwi Hazrat Khadijah (RA) ka intiqal ho gaya. Nabi (ﷺ) ne ise "Gham Ka Saal" qarar diya.',
      urdu: 'نبوت کے دسویں سال چند ہفتوں کے فاصلے پر سرپرست چچا ابو طالب اور رفیقۂ حیات سیدہ خدیجہ الكبرىٰ رض کا انتقال ہوا جس پر شدید ملال ہوا۔'
    },
    fullStory: {
      english: `Shortly after the boycott ended in the 10th year of Prophethood (619 CE), Prophet Muhammad (ﷺ) faced his most heartbreaking personal trials, naming this year **Aam al-Huzn (The Year of Sorrow)**.

First, his uncle **Abu Talib** fell mortally ill. For 40 years, Abu Talib had shielded his nephew against all Makkan hostility. On his deathbed, the Prophet pleaded: *"O uncle! Say 'La ilaha illallah', a sentence with which I will plead for you before Allah!"* But Abu Jahl pressured Abu Talib to remain on the religion of his ancestors. Abu Talib passed away without declaring faith, causing profound grief to the Messenger of Allah.

Just two months later, his beloved wife of 25 years, **Sayyidah Khadijah (RA)**, passed away at age 65. She was his first pillar of strength, his comforter during the first revelation, and the mother of his children. The Prophet personally buried her at Jannat al-Mu'alla in Makkah. He never forgot her, stating years later: *"Allah never replaced her with anyone better! She believed in me when people disbelieved, trusted me when people called me a liar, spent her wealth for me when people denied me, and Allah granted me children through her!"*`,
      hinglish: `Boycott khatam hone ke foran baad 10ve saal mein do azeem sadme hue. Uncle **Abu Talib** ka wafat hua jinhone 40 saal hifazat ki thi. Uske 2 mahine baad azeem biwi **Sayyidah Khadijah (RA)** ka wafat hua. Nabi (ﷺ) ne is saal ko **Aam al-Huzn (Gham Ka Saal)** kaha. Khadijah (RA) ki muhabbat ko Aapne hamesha yaad rakha.`,
      urdu: `بائیکاٹ کے خاتمے کے فوراً بعد دسویں سال دو عظیم صدمے ملے۔ پہلے چچا **ابو طالب** کا انتقال ہوا جنہوں نے ۴۰ سال تحفظ دیا۔ دو ماہ بعد پہلی زوجہ **سیدہ خدیجہ رض** کی رحلت ہوئی۔ آپ ﷺ نے اس سال کو **عام الحزن (غم کا سال)** قرار دیا۔ سیدہ خدیجہ رض کی خدمات کو ہمیشہ یاد فرمایا۔`
    },
    keyTakeaways: {
      english: [
        'Prophets experience genuine human grief and heart-wrenching loss.',
        'Spouse loyalty and emotional partnership (demonstrated by Khadijah RA) leave an eternal legacy.',
        'Earthly supports fade so believers lean entirely upon Allah Al-Baqi (The Everlasting).'
      ],
      hinglish: [
        'Nabi (ﷺ) ne insani gham ko bardasht kiya.',
        'Khadijah (RA) ki wafadari aur wafa Islam mein misal hai.',
        'Duniyawi sahare khatam hote hain taaki eeman sirf Allah par tiki rahe.'
      ],
      urdu: [
        'انبیاء علیہم السلام بھی شدید انسانی غم اور صدمات سے گزرتے ہیں۔',
        'سیدہ خدیجہ رض کی وفاداری اور غمخواری رہتی دنیا تک مثال رہے گی۔',
        'ظاہری سہارے ختم ہوتے ہیں تاکہ توکل صرف اللہ الباقی کی ذات پر ہو۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'مَا أَبْدَلَنِي اللَّهُ عَزَّ وَجَلَّ خَيْرًا مِنْهَا آمَنَتْ بِي إِذْ كَفَرَ بِي النَّاسُ',
      reference: 'Musnad Ahmad 24864',
      translation: {
        english: '"Allah did not replace her with anyone better: She believed in me when people disbelieved in me..."',
        hinglish: '"Allah ne mujhe Khadijah se behtar biwi nahi di, woh tab eeman layien jab log inkar kar rahe the..."',
        urdu: '"اللہ نے مجھے خدیجہ سے بہتر بدل نہیں دیا، وہ تب ایمان لائیں جب لوگوں نے میرا انکار کیا تھا..."'
      }
    },
    test: [
      {
        id: 'q17-1',
        question: {
          english: 'What name did Prophet Muhammad (ﷺ) give to the 10th year of Prophethood?',
          hinglish: 'Nabuwat ke 10ve saal ko Nabi (ﷺ) ne kya naam diya tha?',
          urdu: 'آپ ﷺ نے نبوت کے دسویں سال کو کیا نام عطا فرمایا؟'
        },
        options: {
          english: ['Aam al-Huzn (Year of Sorrow)', 'Aam al-Fil (Year of Elephant)', 'Aam al-Wufud (Year of Delegations)', 'Aam al-Fath (Year of Conquest)'],
          hinglish: ['Aam al-Huzn (Gham Ka Saal)', 'Aam al-Fil', 'Aam al-Wufud', 'Aam al-Fath'],
          urdu: ['عام الحزن (غم کا سال)', 'عام الفیل', 'عام الوفود', 'عام الفتح']
        },
        correctIndex: 0,
        explanation: {
          english: 'It was named Year of Sorrow due to the deaths of Khadijah (RA) and Abu Talib.',
          hinglish: 'Aam al-Huzn kaha gaya tha.',
          urdu: 'غم کا سال (عام الحزن) کہا گیا تھا۔'
        }
      },
      {
        id: 'q17-2',
        question: {
          english: 'How many years were Prophet Muhammad (ﷺ) and Sayyidah Khadijah (RA) married?',
          hinglish: 'Nabi (ﷺ) aur Sayyidah Khadijah (RA) ka nikah kitne saal tak qaim raha?',
          urdu: 'رسول اللہ ﷺ اور سیدہ خدیجہ رض کا مبارک تعلقِ زوجیت کتنے سال رہا؟'
        },
        options: {
          english: ['25 Years', '10 Years', '15 Years', '30 Years'],
          hinglish: ['25 Saal', '10 Saal', '15 Saal', '30 Saal'],
          urdu: ['۲۵ سال', '۱۰ سال', '۱۵ سال', '۳۰ سال']
        },
        correctIndex: 0,
        explanation: {
          english: 'They lived together in blessed matrimony for 25 full years.',
          hinglish: '25 saal tak sath rahe.',
          urdu: '۲۵ سال تک رفاقتِ زوجیت قائم رہی۔'
        }
      },
      {
        id: 'q17-3',
        question: {
          english: 'Where is Sayyidah Khadijah (RA) buried in Makkah?',
          hinglish: 'Sayyidah Khadijah (RA) Makkah mein kahan dafan hain?',
          urdu: 'سیدہ خدیجہ الكبرىٰ رض مکہ مکرمہ کے کس تاریخی قبرستان میں مدفون ہیں؟'
        },
        options: {
          english: ['Jannat al-Mu\'alla (Al-Hajun)', 'Jannat al-Baqi', 'Mount Uhud', 'Cave Hira'],
          hinglish: ['Jannat al-Mu\'alla', 'Jannat al-Baqi', 'Uhud', 'Hira'],
          urdu: ['جنت المعلیٰ (مکہ مکرمہ)', 'جنت البقیع (مدینہ)', 'جبلِ احد', 'غارِ حراء']
        },
        correctIndex: 0,
        explanation: {
          english: 'Sayyidah Khadijah (RA) was buried at Jannat al-Mu\'alla.',
          hinglish: 'Jannat al-Mu\'alla mein dafan hain.',
          urdu: 'جنت المعلیٰ میں تدفین ہوئی۔'
        }
      }
    ]
  },

  // MODULE 18
  {
    id: 'seerah-18',
    chapterNumber: 18,
    period: 'Module 18 • 619 CE • Journey to At-Ta\'if',
    title: {
      english: '18. The Trial of At-Ta\'if: Stoning, Supplication & Addas the Christian Slave',
      hinglish: '18. Ta\'if Ka Waqia: Pattharbaazi, Roohani Dua Aur Addas Ka Islam',
      urdu: '۱۸. سفرِ طائف، شدید ترین ازیت، تاریخ ساز دعا اور عداس عیساوی کا قبولِ اسلام'
    },
    arabicTitle: 'رحلة الطائف ودعاء النبي عند البستان وإسلام عداس',
    icon: '🍇',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 18: Journey to Ta\'if',
    summary: {
      english: 'Seeking support, the Prophet walked 60 miles to Ta\'if. Rejected by its chiefs, street street urchins pelted him with stones until his shoes filled with blood. He poured his heart in a legendary Du\'a under a vineyard.',
      hinglish: 'Ta\'if ka 60 mile ka safar, sardaaron ka inkar, aawarah ladkon ka patthar marna jisse jootiyan khoon se bhar gyien. Darakht ke neeche historical Dua aur Addas ka angur pesh karna.',
      urdu: '۶۰ میل پیدل سفر کے بعد طائف میں اوباشوں کی پتھراؤ سے خونم خون جوتے، باغ میں تاریخی عاجزانہ دعا اور نصرانی غلام عداس کا قبولِ اسلام۔'
    },
    fullStory: {
      english: `Following the deaths of Abu Talib and Khadijah, Makkan hostility reached dangerous heights. In Shawwal of the 10th year (619 CE), Prophet Muhammad (ﷺ) walked 60 miles uphill to the mountain city of **At-Ta'if**, accompanied by Zayd ibn Harithah (RA), hoping the tribe of Thaqif would accept Islam.

He approached three brothers who led Thaqif (Abd Yalayl, Mas'ud, and Habib). They mocked him ruthlessly. Worse, they incited street urchins and slaves to form two lines along his exit route, pelting him with heavy stones for miles. Zayd (RA) used his own body as a shield, suffering head wounds. The Prophet's feet bled so profusely that his sandals stuck to his bloodied feet.

Bleeding and exhausted, he took refuge in a private vineyard owned by Utbah and Shaybah ibn Rabi'ah. There, he raised his hands and poured out his legendary supplication (*Du'a Ta'if*): **"O Allah! To You I complain of my weakness, my lack of resourcefulness, and my insignificance before people..."**

Moved by pity, the owners sent their Christian slave **Addas** with a plate of grapes. The Prophet said *"Bismillah"* before eating. Surprised, Addas kissed the Prophet's hands and embraced Islam. Then Angel Jibreel appeared with the **Angel of the Mountains**, offering to crush Ta'if between two mountains (Al-Akhshabayn). The Prophet mercifully replied: **"No! I hope Allah will bring forth from their loins descendants who will worship Allah alone without associating partners with Him!"**`,
      hinglish: `Nabi (ﷺ) 60 mile chal kar **Ta'if** gaye. Thaqif ke sardaaron ne inkar kiya aur aawarah ladkon ko patthar marne laga diya. Aapki jootiyan khoon se bhar gyien. Ek baag mein jakar Aapne rone waali mashhoor **Dua** ki: *"Ya Allah! Main Tujh se apni kamzori ki shikayat karta hun..."* Angel ne pahad todne ko kaha par Aapne **Rehmat** se mana kar diya. Christian ghulam **Addas** ne Islam qabool kiya.`,
      urdu: `آپ ﷺ ۶۰ میل پیدل سفر کر کے **طائف** تشریف لے گئے۔ ثقیف کے سرداروں نے بد تمیزی کی اور او باش لڑکوں سے پتھراؤ کرایا جس سے قدمِ مبارک خون آلود ہو گئے۔ ایک باغ میں بیٹھ کر تاریخ ساز عاجزانہ **دعا** فرمائی: *"اے اللہ! میں تجھ سے اپنی بے کسی اور لوگوں کے نزدیک اپنی کم قدری کا شکوہ کرتا ہوں..."* پہاڑوں کے فرشتے کی طائف تباہ کرنے کی پیشکش کو **رحمۃ للعالمین** نے ماننے سے انکار کر دیا۔ عداس غلام نے اسلام قبول کیا۔`
    },
    keyTakeaways: {
      english: [
        'Prophet Muhammad (ﷺ) demonstrated supreme mercy (Rahmatan lil-Alamin) by forgiving those who stoned him.',
        'The Du\'a of Ta\'if teaches absolute reliance on Allah regardless of worldly success or rejection.',
        'Sincere efforts never go in vain: Addas accepted Islam in the midst of tragedy.'
      ],
      hinglish: [
        'Patthar marne waalon ko maaf karke Aapne Rehmat ki azeem misal qaim ki.',
        'Ta\'if ki Dua sikhati hai ki natija Allah ke hath mein hai.',
        'Sachi koshish bekaar nahi jaati: Addas Musalman bana.'
      ],
      urdu: [
        'پتھر مارنے والوں کو معاف فرما کر آپ نے رحمۃ للعالمین ہونے ਦਾ ثبوت دیا۔',
        'دعائے طائف سکھاتی ہے کہ نتیجہ ہمیشہ اللہ تعالی پر چھوڑنا چاہیے۔',
        'مخلصانہ کوشش رائے گاں نہیں جاتی، عداس نصرانی کا قبولِ اسلام اس کا ثبوت ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'بَلْ أَرْجُو أَنْ يُخْرِجَ اللَّهُ مِنْ أَصْلابِهِمْ مَنْ يَعْبُدُ اللَّهَ وَحْدَهُ لا يُشْرِكُ بِهِ شَيْئًا',
      reference: 'Sahih al-Bukhari 3231',
      translation: {
        english: '"Rather, I hope that Allah will bring forth from their offspring those who worship Allah alone, associating nothing with Him."',
        hinglish: '"Mujhe umeed hai ki Allah inki nasal se Tawheed par chalne waalon ko paida karega."',
        urdu: '"بلکہ مجھے امید ہے کہ اللہ ان کی نسل سے ایسے لوگ پیدا فرمائے گا جو صرف ایک اللہ کی عبادت کریں گے۔"'
      }
    },
    test: [
      {
        id: 'q18-1',
        question: {
          english: 'Which companion accompanied Prophet Muhammad (ﷺ) on his trip to At-Ta\'if?',
          hinglish: 'Ta\'if ke safar mein Nabi (ﷺ) ke saath konsa sahabi tha?',
          urdu: 'طائف کے سفر میں آپ ﷺ کے ساتھ کون سے صحابی تھے؟'
        },
        options: {
          english: ['Zayd ibn Harithah (RA)', 'Abu Bakr As-Siddiq (RA)', 'Ali ibn Abi Talib (RA)', 'Bilal ibn Rabah (RA)'],
          hinglish: ['Zayd ibn Harithah (RA)', 'Abu Bakr (RA)', 'Ali (RA)', 'Bilal (RA)'],
          urdu: ['حضرت زید بن حارثہ رض', 'حضرت ابو بکر صدیق رض', 'حضرت علی رض', 'حضرت بلال رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Zayd ibn Harithah (RA) accompanied and shielded the Prophet.',
          hinglish: 'Zayd ibn Harithah (RA) the.',
          urdu: 'حضرت زید بن حارثہ رض ساتھ تھے۔'
        }
      },
      {
        id: 'q18-2',
        question: {
          english: 'Who was the Christian slave in the vineyard who accepted Islam after offering grapes to the Prophet?',
          hinglish: 'Baag mein angur dene waala Christian ghulam kaun tha jo Musalman hua?',
          urdu: 'باغ میں انگور کی پلیٹ پیش کرنے والا نصرانی غلام کون تھا جو دائرہ اسلام میں داخل ہوا؟'
        },
        options: {
          english: ['Addas', 'Salman', 'Suhaib', 'Najashi'],
          hinglish: ['Addas', 'Salman', 'Suhaib', 'Najashi'],
          urdu: ['عداس', 'سلمان', 'صہیب', 'نجاشی']
        },
        correctIndex: 0,
        explanation: {
          english: 'Addas kissed the Prophet\'s hands and accepted Islam.',
          hinglish: 'Addas ne Islam qabool kiya.',
          urdu: 'عداس نصرانی نے اسلام قبول کیا۔'
        }
      },
      {
        id: 'q18-3',
        question: {
          english: 'How did Prophet Muhammad (ﷺ) respond when the Angel of Mountains offered to crush Ta\'if?',
          hinglish: 'Jab Farishte ne Ta\'if ko do pahadon se peesne ko kaha to Nabi (ﷺ) ne kya jawab diya?',
          urdu: 'جب فرشتے نے طائف کو دو پہاڑوں کے درمیان پیسنے کی پیشکش کی تو آپ ﷺ نے کیا فرمایا؟'
        },
        options: {
          english: ['Refused out of mercy, praying for their future generations to be guided', 'Agreed to punish them', 'Asked for 3 days delay', 'Demanded gold'],
          hinglish: ['Rehmat ki wajah se mana kiya aur nasal ki Hidayat ki dua ki', 'Haan bola', '3 din ka waqt manga', 'Gold manga'],
          urdu: ['رحمت کی بنا پر انکار فرمایا اور ان کی آئندہ نسلوں کی ہدایت کی دعا فرمائی', 'تباہ کرنے کا حکم دیا', 'تین دن کی مہلت مانگی', 'مال طلب کیا']
        },
        correctIndex: 0,
        explanation: {
          english: 'He refused vengeance, praying their descendants would embrace Tawheed.',
          hinglish: 'Rehmat dikha kar maaf kiya.',
          urdu: 'آپ نے کمالِ رحمت سے معاف فرما دیا۔'
        }
      }
    ]
  },

  // MODULE 19
  {
    id: 'seerah-19',
    chapterNumber: 19,
    period: 'Module 19 • 621 CE • Al-Isra\' wal-Mi\'raj',
    title: {
      english: '19. Al-Isra\' wal-Mi\'raj: The Miraculous Night Journey & 5 Daily Prayers',
      hinglish: '19. Isra wal Mi\'raj: Miraj Ka Safar, Nabiyon Ki Imamat Aur 5 Waqt Ki Namaz',
      urdu: '۱۹. واقعۂ معراجِ مصطفیٰ ﷺ، سدرۃ المنتہیٰ کی سیر اور ۵ وقت کی با برکت نماز کا تحفہ'
    },
    arabicTitle: 'الإسراء والمعراج وفرض الصلوات الخمس',
    icon: '🌌',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 19: Night Journey & Ascension',
    summary: {
      english: 'The miraculous night journey riding Al-Buraq from Makkah to Al-Aqsa Mosque in Jerusalem, leading all Prophets in prayer, ascending through the 7 Heavens to Sidrat al-Muntaha, and receiving the 5 daily prayers.',
      hinglish: 'Al-Buraq par Makkah se Al-Aqsa (Jerusalem) tak ka safar, sabhi Anbiya ki Imamat, 7 Aasmanon ki sair, Sidrat al-Muntaha par Allah se mulaqat aur 5 Namazon ka tohfa.',
      urdu: 'براق پر مکہ سے مسجدِ اقصی تک کا معجزانہ سفر، انبیاء کرام کی امامت، ۷ آسمانوں کی سیر، سدرۃ المنتہیٰ پر ربِ ذوالجلال سے کلام اور ۵ وقت نماز کا تحفہ۔'
    },
    fullStory: {
      english: `To comfort His Messenger after intense sorrow, Allah granted him the greatest physical and spiritual journey in human history: **Al-Isra' wal-Mi'raj** (27th Rajab, 621 CE).

Riding the heavenly creature **Al-Buraq** accompanied by Jibreel (AS), the Prophet traveled from Al-Masjid al-Haram in Makkah to **Al-Masjid al-Aqsa** in Jerusalem (*Al-Isra'*). There, he led all previous Prophets from Adam to Isa (AS) in congregational prayer.

Next began **Al-Mi'raj** (Ascension). He mounted through the seven Heavens, meeting Prophets at each level: Adam (1st), Yahya & Isa (2nd), Yusuf (3rd), Idris (4th), Harun (5th), Musa (6th), and Ibrahim (7th, leaning against Al-Bait al-Ma'mur). Beyond **Sidrat al-Muntaha** (the Lote Tree of the Utmost Boundary), where Jibreel could not cross, the Prophet was brought directly into the Presence of Allah.

There, Allah commanded **50 daily prayers** upon the Ummah. Upon returning, Prophet Musa (AS) advised him to request reductions due to human weakness. The Prophet returned repeatedly until Allah reduced it to **5 daily prayers**, carrying the reward of 50! When Quraysh mocked this claim the next morning, Abu Bakr (RA) instantly validated it without hesitation, earning the divine title **As-Siddiq (The Verifier of Truth)**.`,
      hinglish: `Gham ke baad Allah ne Nabi (ﷺ) ko **Isra wal Mi'raj** ka sabse bada معجزہ diya. **Al-Buraq** par Masjid Haram se Masjid Aqsa gaye, wahan tamam Anbiya ki Imamat ki. Fir 7 Aasmanon ki sair ki. **Sidrat al-Muntaha** ke paar Allah se Mulaqat hui aur **5 Waqt ki Namaz** ka tohfa mila. Abu Bakr (RA) ne bina shak ke tasdeeq ki aur **As-Siddiq** ka laqab paya.`,
      urdu: `شدید غم کے بعد اللہ تعالی نے آپ ﷺ کو **واقعۂ معراج** کا عظیم معجزہ عطا فرمایا۔ **براق** پر سوار ہو کر مسجدِ حرام سے مسجدِ اقصی تشریف لے گئے، تمام انبیاء کی امامت فرمائی۔ ۷ آسمانوں کی سیر اور **سدرۃ المنتہیٰ** پر ربِ ذوالجلال سے بلا واسطہ گفتگو ہوئی۔ امّت کے لیے **۵ وقت کی نماز** کا تحفہ ملا۔ حضرت ابوبکر رض نے بلا تردد تصدیق کر کے **صدیق** کا لقب پایا۔`
    },
    keyTakeaways: {
      english: [
        'Salah (5 daily prayers) is the Mi\'raj (ascension) of the believer\'s soul to communicate with Allah.',
        'Al-Aqsa Mosque holds sacred rank as the first Qiblah and the site of prophetic congregation.',
        'Abu Bakr (RA)\'s unshakeable faith in Mi\'raj exemplifies true, pure conviction.'
      ],
      hinglish: [
        'Namaz Musalman ke liye Allah se mulaqat (Mi\'raj) hai.',
        'Masjid Aqsa hamara Pehla Qibla aur muqaddas maqam hai.',
        'Abu Bakr (RA) ne bina dekhe tasdeeq karke Siddiqiyat ka darja paya.'
      ],
      urdu: [
        'نماز مومن کا معراج ہے جس میں بندہ براہِ راست اللہ سے ہم کلام ہوتا ہے۔',
        'مسجدِ اقصی مسلمانوں کا پہلا قبلہ اور انتہائی مقدس معراج گاہ ہے۔',
        'حضرت ابو بکر صدیق رض کی بلا جھجک تصدیق کامل ترین ایمان کا نمونہ ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'سُبْحَانَ الَّذِي أَسْرَى بِعَبْدِهِ لَيْلاً مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الأَقْصَى',
      reference: 'Surah Al-Isra 17:1',
      translation: {
        english: '"Exalted is He who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa..."',
        hinglish: '"Pak hai woh Zaat jo Apne bande ko raat ke waqt Masjid Haram se Masjid Aqsa le gayi..."',
        urdu: '"پاک ہے وہ ذات جو اپنے بندے کو راتوں رات مسجدِ حرام سے مسجدِ اقصی لے گئی..."'
      }
    },
    test: [
      {
        id: 'q19-1',
        question: {
          english: 'How many daily prayers were ultimately ordained for the Ummah during Mi\'raj?',
          hinglish: 'Mi\'raj ke dauran Ummat ke liye final kitni Namaz farz ki gyien?',
          urdu: 'معراج کے موقع پر امتِ محمدیہ پر بلا واسطہ کتنی نمازیں فرض کی گئیں؟'
        },
        options: {
          english: ['5 Daily Prayers (with the reward of 50)', '50 Daily Prayers', '3 Daily Prayers', '10 Daily Prayers'],
          hinglish: ['5 Namaz (50 ka sawab)', '50 Namaz', '3 Namaz', '10 Namaz'],
          urdu: ['۵ وقت کی نمازیں (۵۰ کے ثواب کے ساتھ)', '۵۰ وقت کی نمازیں', '۳ وقت کی نمازیں', '۱۰ وقت کی نمازیں']
        },
        correctIndex: 0,
        explanation: {
          english: 'Allah made it 5 daily prayers in count but kept the reward of 50.',
          hinglish: '5 Namaz farz hui 50 ke sawab ke sath.',
          urdu: '۵ وقت کی نماز فرض کی گئی لیکن ثواب ۵۰ کا ہی رکھا گیا۔'
        }
      },
      {
        id: 'q19-2',
        question: {
          english: 'At which holy site did Prophet Muhammad (ﷺ) lead all earlier Prophets in prayer?',
          hinglish: 'Nabi (ﷺ) ne tamam Anbiya ki Imamat kis muqaddas jagah ki thi?',
          urdu: 'آپ ﷺ نے تمام انبیاء کرام کی امامت کس جگہ فرمائی تھی؟'
        },
        options: {
          english: ['Al-Masjid al-Aqsa in Jerusalem', 'Masjid Nabawi', 'Ka\'bah', 'Mount Sinai'],
          hinglish: ['Al-Masjid al-Aqsa (Jerusalem)', 'Masjid Nabawi', 'Ka\'bah', 'Mount Sinai'],
          urdu: ['مسجدِ اقصی (بیت المقدس)', 'مسجدِ نبوی', 'کعبۃ اللہ', 'کوهِ طور']
        },
        correctIndex: 0,
        explanation: {
          english: 'The Prophet led all Prophets in prayer at Al-Masjid al-Aqsa.',
          hinglish: 'Masjid Aqsa mein Imamat ki thi.',
          urdu: 'مسجدِ اقصی میں تمام انبیاء کی امامت فرمائی۔'
        }
      },
      {
        id: 'q19-3',
        question: {
          english: 'Which title did Abu Bakr (RA) earn for immediately affirming the event of Mi\'raj?',
          hinglish: 'Mi\'raj ki tasdeeq karne par Abu Bakr (RA) ko konsa laqab mila?',
          urdu: 'واقعۂ معراج کی بلا جھجک تصدیق پر حضرت ابوبکر رض کو کیا لقب ملا؟'
        },
        options: {
          english: ['As-Siddiq (The Verifier of Truth)', 'Al-Farooq', 'Saifullah', 'Dhul-Nurayn'],
          hinglish: ['As-Siddiq', 'Al-Farooq', 'Saifullah', 'Dhul-Nurayn'],
          urdu: ['الصدیق (سچائی کی تصدیق کرنے والا)', 'الفاروق', 'سیف اللہ', 'ذو النورین']
        },
        correctIndex: 0,
        explanation: {
          english: 'He was given the title As-Siddiq by the Prophet.',
          hinglish: 'As-Siddiq laqab mila tha.',
          urdu: 'حضرت ابو بکر کو الصدیق کا لقب ملا۔'
        }
      }
    ]
  },

  // MODULE 20
  {
    id: 'seerah-20',
    chapterNumber: 20,
    period: 'Module 20 • 620 - 622 CE • Pledges of Aqabah',
    title: {
      english: '20. Pledges of Al-Aqabah & Mus\'ab ibn Umayr (RA)\'s Mission to Yathrib',
      hinglish: '20. Aqabah Ki Bay\'at Aur Mus\'ab ibn Umayr (RA) Ka Yathrib Mein Da\'wah',
      urdu: '۲۰. بیعتِ عقبہ اولیٰ و ثانیہ اور حضرت مصعب بن عمیر رض کی مدینہ منورہ میں اسلامی تاریخ ساز محنت'
    },
    arabicTitle: 'بيعة العقبة الأولى والثانية وسفارة مصعب بن عمير إلى المدينة',
    icon: '🤝',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 20: Pledges of Aqabah',
    summary: {
      english: 'Prophet Muhammad (ﷺ) presented Islam to visiting pilgrims at Mina. 6 men from Yathrib accepted Islam, leading to the First and Second Pledges of Aqabah, and Mus\'ab ibn Umayr (RA) transformed Yathrib into Islam\'s new home.',
      hinglish: 'Hajj ke moke par Yathrib (Madinah) ke logon ko Da\'wah. 6 log Musalman hue. Mus\'ab ibn Umayr (RA) ko pehla Ambassador bana kar Madinah bheja gaya. 73 mard wa 2 auraton ne Bay\'at-e-Aqabah-2 ki.',
      urdu: 'حج کے موقع پر یثرب کے زائرین کو دعوت۔ ۶ افراد کا قبولِ اسلام۔ حضرت مصعب بن عمیر رض کو پہلا سفیر بنا کر یثرب بھیجا گیا جنہوں نے ہر گھر کو اسلام سے روشن کر دیا۔'
    },
    fullStory: {
      english: `During Hajj seasons, Prophet Muhammad (ﷺ) systematically visited tribal camps outside Makkah, offering Islam and asking for military protection. In the 11th year of Prophethood (620 CE), at Al-Aqabah near Mina, he met **6 pilgrims from the Khazraj tribe of Yathrib (Madinah)**. Recognizing him from Jewish prophecies of a coming Prophet, they embraced Islam on the spot.

The next year (621 CE), 12 men from Yathrib met the Prophet at Aqabah and swore the **First Pledge of Aqabah (Bay'at al-Aqabah al-Ula)**, promising to worship Allah alone, abstain from theft, adultery, and slander. The Prophet dispatched **Mus'ab ibn Umayr (RA)**—a refined, handsome young companion—as Islam's **first official ambassador** to teach the Qur'an and propagate Islam in Yathrib. Mus'ab's gentle wisdom converted leaders like As'ad ibn Zurarah and Sa'd ibn Mu'adh. Soon, every single household in Yathrib contained Muslims!

In June 622 CE, Mus'ab returned with **73 men and 2 women** (including Nusaybah bint Ka'b) for the **Second Pledge of Aqabah (Bay'at al-Aqabah ath-Thaniyah)**. At midnight, under cover of darkness, they pledged to protect Prophet Muhammad (ﷺ) like their own families, opening the door for the Great Hijrah!`,
      hinglish: `Hajj ke waqt **Yathrib (Madinah)** ke 6 logon ne Aqabah par Islam qabool kiya. Agle saal 12 logon ne **Bay'at-e-Aqabah-1** ki. Nabi (ﷺ) ne **Mus'ab ibn Umayr (RA)** ko pehla Ambassador bana kar Yathrib bheja. Mus'ab (RA) ke akhlaq se Sa'd ibn Mu'adh Musalman hue aur ghar ghar Islam phail gaya. Agle saal 75 logon ne **Bay'at-e-Aqabah-2** karke Nabi (ﷺ) ko Madinah aane ki dawat aur hifazat ka wada diya.`,
      urdu: `حج کے ایام میں عقبہ کے مقام پر **یثرب** کے ۶ خزرجی افراد نے اسلام قبول کیا۔ اگلے سال ۱۲ افراد نے **بیعتِ عقبہ اولیٰ** کی۔ آپ ﷺ نے **حضرت مصعب بن عمیر رض** کو پہلا سفیر بنا کر مدینہ بھیجا۔ حضرت مصعب کی حکمت سے سعد بن معاذ جیسے سردار مسلمان ہوئے اور ہر گھر میں اسلام پھیل گیا۔ اگلے سال ۰۷۵ افراد نے **بیعتِ عقبہ ثانیہ** کر کے ہجرت کا راستہ ہموار کیا۔`
    },
    keyTakeaways: {
      english: [
        'Mus\'ab ibn Umayr (RA) models how wisdom, gentle speech, and sincerity win hearts to Islam.',
        'Strategic alliances and securing a safe sanctuary are essential components of nation-building.',
        'Women (like Nusaybah bint Ka\'b) actively participated in political pledges and early Islamic statecraft.'
      ],
      hinglish: [
        'Mus\'ab (RA) ke narm akhlaq ne poore Yathrib ko Musalman bana diya.',
        'Hijrat se pehle jagah aur protection tay karna zaroori tha.',
        'Auraton ne bhi Bay\'at-e-Aqabah-2 mein sardaari hissa liya.'
      ],
      urdu: [
        'حضرت مصعب بن عمیر رض کی حکمت و نرمی نے پورے مدینے کا رخ بدل دیا۔',
        'ہجرت کے لیے پہلے تحفظ اور محفوظ مرکز قائم کرنا سیاسی بصیرت کا ثبوت ہے۔',
        'خواتین (سیدہ نسیبہ رض) نے بیعتِ عقبہ ثانیہ میں اہم سیاسی و دینی کردار ادا کیا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ',
      reference: 'Surah Al-Hashr 59:9',
      translation: {
        english: '"And [also for] those who were settled in the Home [Madinah] and [adopted] the faith before them. They love those who emigrated to them..."',
        hinglish: '"Aur jinhone pehle se Madinah aur Eeman ko thikana banaya, woh hijrat karke aane waalon se muhabbat karte hain..."',
        urdu: '"اور جنہوں نے اس گھر (مدینہ) اور ایمان کو پہلے ہی سے جگہ بنا رکھا ہے، وہ ان لوگوں سے محبت کرتے ہیں جو ان کی طرف ہجرت کر کے آئے..."'
      }
    },
    test: [
      {
        id: 'q20-1',
        question: {
          english: 'Who was appointed by Prophet Muhammad (ﷺ) as the very first ambassador of Islam to Yathrib (Madinah)?',
          hinglish: 'Islam ka sabse pehla Official Ambassador bana kar Yathrib kis sahabi ko bheja gaya tha?',
          urdu: 'رسول اللہ ﷺ کی جانب سے اسلام کے سب سے پہلے سفیر بن کر مدینہ کون سے صحابی گئے تھے؟'
        },
        options: {
          english: ['Mus\'ab ibn Umayr (RA)', 'Abu Bakr As-Siddiq (RA)', 'Usamah ibn Zayd (RA)', 'Mu\'adh ibn Jabal (RA)'],
          hinglish: ['Mus\'ab ibn Umayr (RA)', 'Abu Bakr (RA)', 'Usamah (RA)', 'Mu\'adh (RA)'],
          urdu: ['حضرت مصعب بن عمیر رض', 'حضرت ابو بکر صدیق رض', 'حضرت اسامہ بن زید رض', 'حضرت معاذ بن جبل رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Mus\'ab ibn Umayr (RA) was sent to teach Islam and transformed Yathrib.',
          hinglish: 'Mus\'ab ibn Umayr (RA) gaye the.',
          urdu: 'حضرت مصعب بن عمیر رض پہلے سفیرِ اسلام بن کر مدینہ گئے۔'
        }
      },
      {
        id: 'q20-2',
        question: {
          english: 'How many believers from Yathrib participated in the Second Pledge of Aqabah (Bay\'at al-Aqabah II)?',
          hinglish: 'Bay\'at-e-Aqabah-2 mein Yathrib se kitne mard wa auratein shamil hue the?',
          urdu: 'بیعتِ عقبہ ثانیہ میں مدینہ منورہ سے کتنے مرد و خواتین شامل ہوئے تھے؟'
        },
        options: {
          english: ['73 Men and 2 Women', '12 Men', '6 Men', '100 Men'],
          hinglish: ['73 Mard aur 2 Auratein', '12 Mard', '6 Mard', '100 Mard'],
          urdu: ['۷۳ مرد اور ۲ خواتین', '۱۲ مرد', '۶ مرد', '۱۰۰ مرد']
        },
        correctIndex: 0,
        explanation: {
          english: '73 men and 2 women pledged full protection to the Prophet.',
          hinglish: '75 log the (73 mard, 2 auratein).',
          urdu: '۷۳ مرد اور ۲ خواتین شامل تھیں۔'
        }
      },
      {
        id: 'q20-3',
        question: {
          english: 'Which powerful tribal leader of Madinah accepted Islam through Mus\'ab (RA), causing his whole clan Banu Abd al-Ashhal to convert?',
          hinglish: 'Mus\'ab (RA) ke zariye Madinah ke kis azeem sardaar ne Islam qabool kiya tha?',
          urdu: 'حضرت مصعب رض کے ہاتھ پر مدینہ کے کس عظیم الشان سردار نے اسلام قبول کیا جس سے پورا قبیلہ مسلمان ہوا؟'
        },
        options: {
          english: ['Sa\'d ibn Mu\'adh (RA)', 'Abdullah ibn Ubayy', 'Abu Mas\'ud', 'Ka\'b ibn Malik'],
          hinglish: ['Sa\'d ibn Mu\'adh (RA)', 'Abdullah ibn Ubayy', 'Abu Mas\'ud', 'Ka\'b ibn Malik'],
          urdu: ['حضرت سعد بن معاذ رض', 'عبداللہ بن ابی', 'ابو مسعود', 'کعب بن مالک']
        },
        correctIndex: 0,
        explanation: {
          english: 'Sa\'d ibn Mu\'adh (RA) converted, prompting his entire tribe to accept Islam.',
          hinglish: 'Sa\'d ibn Mu\'adh (RA) Musalman hue the.',
          urdu: 'حضرت سعد بن معاذ رض کے اسلام لاتے ہی ان کا پورا قبیلہ مسلمان ہو گیا۔'
        }
      }
    ]
  },

  // MODULE 21
  {
    id: 'seerah-21',
    chapterNumber: 21,
    period: 'Module 21 • 622 CE • The Great Hijrah',
    title: {
      english: '21. The Great Hijrah to Madinah, Cave Thawr & Sanctuary in Quba',
      hinglish: '21. Azeem Hijrat-e-Madinah, Ghar-e-Thawr Ka Waqia Aur Quba Mein Pehli Masjid',
      urdu: '۲۱. عظیم ہجرتِ مدینہ، غارِ ثور کا تاریخی واقعہ اور قبا میں پہلی مسجد کی بنیاد'
    },
    arabicTitle: 'الهجرة النبوية المباركة وغار ثور وتأسيس مسجد قباء',
    icon: '🐫',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 21: Migration of the Prophet',
    summary: {
      english: 'Quraysh conspired to assassinate the Prophet at Dar al-Nadwah. Leaving Ali (RA) in his bed, the Prophet and Abu Bakr (RA) escaped to Cave Thawr, protected by divine spider webs, reaching Quba where the first mosque was built.',
      hinglish: 'Dar al-Nadwah mein Quraysh ki qatl ki sazish. Ali (RA) ko bistar par sula kar Nabi (ﷺ) aur Abu Bakr (RA) Ghar-e-Thawr gaye. Spider web ke معجزہ se bach kar Quba pahuche aur pehli Masjid-e-Quba banai.',
      urdu: 'دار الندوہ میں قتل کی سازش ناکام، حضرت علی رض کو بستر پر سلا کر غارِ ثور میں روپوشی، دیمک و مکڑی کے جالے کا معجزہ اور قبا میں اسلام کی پہلی مسجد کی تعمیر۔'
    },
    fullStory: {
      english: `Realizing Muslims were establishing a stronghold in Yathrib, Quraysh chiefs gathered at **Dar al-Nadwah** (Council Hall). Abu Jahl proposed selecting one armed youth from every clan to strike Muhammad (ﷺ) simultaneously so Banu Hashim could not fight all tribes.

Allah warned the Prophet and commanded Hijrah. On the fateful night (27th Safar, 622 CE), the Prophet asked **Ali ibn Abi Talib (RA)** to sleep in his green cloak on his bed to return stored trust deposits (*Amanat*) to Makkans. Throwing a handful of dust at the assassins outside while reciting Surah Yasin (36:9), the Prophet walked out unnoticed!

He joined **Abu Bakr As-Siddiq (RA)**, and they hid for three days inside **Cave Thawr** on Mount Thawr south of Makkah. When Makkan trackers reached the mouth of the cave, Abu Bakr whispered in worry: *"O Messenger of Allah! If one of them looks down at his feet, he will see us!"* The Prophet calmly replied: **"O Abu Bakr! What do you think of two, where Allah is the third?"** Allah cast blindness over the trackers; a spider web and nesting pigeons covered the entrance.

Guided by Abdullah ibn Urayqit, they traveled along the Red Sea coast. Upon reaching **Quba** on 12th Rabi' al-Awwal 1 AH, the Prophet established **Masjid Quba**—the very first mosque in Islamic history!`,
      hinglish: `Quraysh ne **Dar al-Nadwah** mein Nabi (ﷺ) ko shaheed karne ki sazish ki. Aapne **Ali (RA)** ko apne bistar par sula kar Amanat wapas karne ko kaha. Aap aur **Abu Bakr (RA)** **Ghar-e-Thawr** mein 3 din chuptay rahe. Dushman ghar ke muuh tak aaye to Abu Bakr ghabraye, Aapne farmaya: *"Donon ke teesra Allah hai!"* Spider web ke معجزہ se bache aur **Quba** pahunch kar **Masjid-e-Quba** ki bunyad rakhi.`,
      urdu: `قریش نے **دار الندوہ** میں آپ ﷺ کے قتل کی سازش کی۔ آپ نے **حضرت علی رض** کو اپنے بستر پر سلا کر امانتیں لوٹانے کی ہدایت فرمائی۔ آپ اور **حضرت ابو بکر رض** ۳ دن **غارِ ثور** میں روپوش رہے۔ کمالِ توکل سے فرمایا: *"ان دو کے ساتھ تیسرا اللہ ہے!"* اللہ تعالی نے مکڑی کے جالے سے حفاظت فرمائی۔ ۱۲ ربیع الاول کو **قبا** پہنچ کر اسلام کی پہلی **مسجدِ قبا** کی بنیاد رکھی۔`
    },
    keyTakeaways: {
      english: [
        'Hijrah marks the turning point of Islamic history, inaugurating the Hijri Calendar.',
        'Trust in Allah (Tawakkul) requires thorough preparation (hiding in Cave Thawr, hiring a guide) combined with complete spiritual reliance.',
        'Returning enemy trust deposits even during assassination attempts highlights unmatched Prophetic integrity.'
      ],
      hinglish: [
        'Hijrat se Islamic Calendar (Hijri) shuru hua.',
        'Tawakkul ka matlab hai poori taiyari karke Allah par yaqeen rakhna.',
        'Dushmanon ki amanat ko bistar par Ali (RA) ke zariye wapas karwana azeem amanatdari hai.'
      ],
      urdu: [
        'ہجرت اسلامی تاریخ کا سب سے بڑا موڑ ہے جس سے ہجری تقویم کا آغاز ہوا۔',
        'توکل کا مفہوم مکمل تدبیر کے بعد اعتمادِ الٰہی پر قائم ہونا ہے۔',
        'قتال پر تلے دشمنوں کی امانتیں لوٹانے کے لیے حضرت علی کو بستر پر سلا کر امانت داری کا اعلیٰ ترین ثبوت دیا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'إِلاَّ تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُواْ ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لاَ تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
      reference: 'Surah At-Tawbah 9:40',
      translation: {
        english: '"If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, \'Do not grieve; indeed Allah is with us.\'"',
        hinglish: '"Agar tum Nabi ki madad nahi karoge to Allah ne unki madad ki jab woh ghar mein the aur sahabi se kahe: Gham na karo Allah hamare sath hai..."',
        urdu: '"اگر تم نبی کی مدد نہ کرو گے تو اللہ نے اس کی مدد اس وقت کی تھی جب کافروں نے اسے نکال دیا تھا، وہ دو میں سے دوسرا تھا جب وہ غار میں تھے، جب وہ اپنے ساتھی سے کہہ رہا تھا: غم نہ کر، اللہ ہمارے ساتھ ہے..."'
      }
    },
    test: [
      {
        id: 'q21-1',
        question: {
          english: 'Who slept in Prophet Muhammad (ﷺ)\'s bed on the night of Hijrah to return Makkan trusts?',
          hinglish: 'Hijrat ki raat Nabi (ﷺ) ke bistar par amanat wapas karne ke liye kaun soye the?',
          urdu: 'ہجرت کی تاریخی رات امانتیں واپس کرنے کے لیے آپ ﷺ کے مبارک بستر پر کون سے صحابی سوئے تھے؟'
        },
        options: {
          english: ['Ali ibn Abi Talib (RA)', 'Abu Bakr As-Siddiq (RA)', 'Zayd ibn Harithah (RA)', 'Uthman ibn Affan (RA)'],
          hinglish: ['Ali ibn Abi Talib (RA)', 'Abu Bakr (RA)', 'Zayd (RA)', 'Uthman (RA)'],
          urdu: ['حضرت علی بن ابی طالب رض', 'حضرت ابو بکر صدیق رض', 'حضرت زید بن حارثہ رض', 'حضرت عثمان بن عفان رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Ali (RA) stayed behind to return trust deposits.',
          hinglish: 'Ali (RA) soye the.',
          urdu: 'حضرت علی رض بستر پر سوئے تھے۔'
        }
      },
      {
        id: 'q21-2',
        question: {
          english: 'In which cave did Prophet Muhammad (ﷺ) and Abu Bakr (RA) take refuge for 3 days during Hijrah?',
          hinglish: 'Hijrat ke dauran 3 din tak Nabi (ﷺ) aur Abu Bakr (RA) kis ghar mein chupe the?',
          urdu: 'ہجرت کے دوران ۳ دن تک آپ ﷺ اور حضرت ابو بکر صدیق رض کس غار میں روپوش رہے؟'
        },
        options: {
          english: ['Cave Thawr', 'Cave Hira', 'Cave Uhud', 'Cave Kahf'],
          hinglish: ['Cave Thawr', 'Cave Hira', 'Cave Uhud', 'Cave Kahf'],
          urdu: ['غارِ ثور', 'غارِ حراء', 'غارِ احد', 'غارِ کہف']
        },
        correctIndex: 0,
        explanation: {
          english: 'They stayed in Cave Thawr south of Makkah.',
          hinglish: 'Ghar-e-Thawr mein the.',
          urdu: 'غارِ ثور میں روپوش رہے۔'
        }
      },
      {
        id: 'q21-3',
        question: {
          english: 'What is recognized as the very first mosque built in Islamic history upon reaching the outskirts of Madinah?',
          hinglish: 'Madinah ke qareeb pahuche par Islam ki sabse pehli konsi Masjid banai gayi thi?',
          urdu: 'مدینہ منورہ کے مضافات میں پہنچ کر اسلام کی سب سے پہلی کون سی مسجد قائم کی گئی؟'
        },
        options: {
          english: ['Masjid Quba', 'Masjid Nabawi', 'Masjid al-Qiblatayn', 'Masjid al-Haram'],
          hinglish: ['Masjid Quba', 'Masjid Nabawi', 'Masjid Qiblatayn', 'Masjid Haram'],
          urdu: ['مسجدِ قبا', 'مسجدِ نبوی', 'مسجدِ قبلتین', 'مسجدِ حرام']
        },
        correctIndex: 0,
        explanation: {
          english: 'Masjid Quba was the first mosque founded upon piety.',
          hinglish: 'Masjid Quba pehli masjid hai.',
          urdu: 'مسجدِ قبا اسلام کی پہلی مسجد ہے۔'
        }
      }
    ]
  },

  // MODULE 22
  {
    id: 'seerah-22',
    chapterNumber: 22,
    period: 'Module 22 • 1 AH (622 CE) • Establishing Madinah State',
    title: {
      english: '22. Establishing the Prophetic State: Masjid Nabawi, Mu\'akhat & Madinah Charter',
      hinglish: '22. Madinah Riyasat Ki Bunyad: Masjid Nabawi, Mu\'akhat (Bhai-Chara) Aur Meesaq-e-Madinah',
      urdu: '۲۲. ریاستِ مدینہ کا قیام، مسجدِ نبوی کی تعمیر، مواخاۃ (مواخاۃِ مدینہ) اور میثاقِ مدینہ'
    },
    arabicTitle: 'بناء المسجد النبوي والمؤاخاة بين المهاجرين والأنصار وميثاق المدينة',
    icon: '🕌',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 22: Building the New Society',
    summary: {
      english: 'The Prophet entered Madinah to unanimous joy. He let his camel Qaswa choose the site for Masjid Nabawi, established brotherhood (Mu\'akhat) between Muhajirun and Ansar, and drafted the world\'s first constitution: The Constitution of Madinah.',
      hinglish: 'Qaswa oontni ke zariye Masjid Nabawi ki jagah chunna. Muhajirun aur Ansar ke beech Mu\'akhat (bhai-chara) qaim karna aur meesaq-e-Madinah (duniya ka pehla Constitution) likhna.',
      urdu: 'قصواء اونٹنی کی جگہ انتخاب پر مسجدِ نبوی کی تعمیر، مہاجرین و انصار کے درمیان ঐতিহাসিক مواخاۃ اور دنیا کے پہلے تحریری آئین "میثاقِ مدینہ" کی تدوین۔'
    },
    fullStory: {
      english: `On Friday, 16th Rabi' al-Awwal 1 AH, Prophet Muhammad (ﷺ) entered Yathrib, renamed **Al-Madinah al-Munawwarah** (The Illuminated City). Every tribal chief begged to host him, but the Prophet said: *"Let my camel go free, for she is commanded by Allah!"* The camel **Qaswa** knelt on a drying ground belonging to two orphans (Sahl and Suhail). The Prophet purchased the land and built **Al-Masjid al-Nabawi** with unbaked bricks and palm-trunk pillars, working directly alongside companions carrying stones.

To integrate refugees into Madinah's economy, the Prophet created **Al-Mu'akhat (Fraternization)** at the house of Anas ibn Malik (RA). He paired 90 Muhajirun (Emigrants) with 90 Ansar (Helpers) as blood brothers. The Ansar displayed unprecedented generosity—Sa'd ibn Al-Rabi offered to split half his farmland, wealth, and home with Abdur Rahman ibn Awf (RA). Abdur Rahman gracefully replied: *"May Allah bless your family and wealth! Just show me the way to the marketplace!"*

Finally, the Prophet drafted **Dustur al-Madinah (The Constitution of Madinah)**—the world's first written constitution establishing equal rights, freedom of religion for Jewish tribes, mutual defense against aggression, and making the Prophet the supreme arbiter of justice.`,
      hinglish: `Nabi (ﷺ) Madinah pahuche. **Qaswa** oontni Sahl aur Suhail yateemon ki zameen par baithie, jahan **Masjid Nabawi** banai gayi. Phir **Mu'akhat** (bhai-chara) shuru hua: Ansar ne Muhajirun ko apna aadha maal aur ghar de diya. Phir **Meesaq-e-Madinah** (duniya ka pehla written Constitution) likha gaya jisme sabhi qabail ko barabar haq aur aazadi mili.`,
      urdu: `آپ ﷺ مدینہ تشریف لائے۔ **قصواء** اونٹنی کے انتخاب پر دو یتیموں کی زمین خرید کر **مسجدِ نبوی** کی تعمیر کی۔ پھر **مواخاۃِ مدینہ** قائم فرمائی جس میں انصار نے مہاجرین کے ساتھ اپنی آدھی جائیداد تقسیم کر دی۔ اس کے بعد دنیا کا پہلا تحریری آئین **میثاقِ مدینہ** تدوین کیا جس نے مذہبی آزادی اور مشترکہ دفاع کو لازمی قرار دیا۔`
    },
    keyTakeaways: {
      english: [
        'Masjid Nabawi served as a multi-functional center: place of worship, parliament, hospital, and university.',
        'The Ansar\'s sacrifice and Abdur Rahman ibn Awf\'s self-reliance model true Islamic economic values.',
        'The Constitution of Madinah proved Islam\'s pioneering commitment to pluralism, human rights, and rule of law.'
      ],
      hinglish: [
        'Masjid Nabawi Namaz, Parliament aur taleem ka markaz thi.',
        'Ansar ki qurbani aur Abdur Rahman (RA) ki mehnat hamare liye misal hai.',
        'Meesaq-e-Madinah ne insani huqooq aur qanoon ki hukmrani ki pehli tareekh likhi.'
      ],
      urdu: [
        'مسجدِ نبوی عبادت گاہ کے ساتھ پارلیمنٹ، ہسپتال اور تعلیمی مرکز بھی تھی۔',
        'انصار ایثار کی اور حضرت عبدالرحمٰن بن عوف رض خود داری کی بے مثال علامت ہیں۔',
        'میثاقِ مدینہ نے حقوقِ انسانيت اور قانون کی بالادستی کا دنیا کا پہلا عالمی نمونہ پیش کیا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',
      reference: 'Surah Al-Hujurat 49:10',
      translation: {
        english: '"The believers are but brothers, so make settlement between your brothers..."',
        hinglish: '"Beshak tamam Musalman aas mein bhai bhai hain..."',
        urdu: '"بیشک تمام اہلۃِ ایمان آپس میں بھائی بھائی ہیں..."'
      }
    },
    test: [
      {
        id: 'q22-1',
        question: {
          english: 'Whose camel knelt down on the land where Masjid Nabawi was subsequently constructed?',
          hinglish: 'Nabi (ﷺ) ki kis oontni ke baithne par Masjid Nabawi ki zameen chuni gayi?',
          urdu: 'آپ ﷺ کی کس اونٹنی کے زانو ٹیکنے پر مسجدِ نبوی کی زمین کا انتخاب ہوا؟'
        },
        options: {
          english: ['Qaswa', 'Al-Adba', 'Al-Jada', 'Al-Shahba'],
          hinglish: ['Qaswa', 'Al-Adba', 'Al-Jada', 'Al-Shahba'],
          urdu: ['قصواء', 'العضباء', 'الجدعاء', 'الشهباء']
        },
        correctIndex: 0,
        explanation: {
          english: 'The camel Qaswa selected the spot divinely guided.',
          hinglish: 'Qaswa oontni thi.',
          urdu: 'قصواء اونٹنی نے انتخاب فرمایا۔'
        }
      },
      {
        id: 'q22-2',
        question: {
          english: 'What is the historic pact of brotherhood established between Muhajirun and Ansar called?',
          hinglish: 'Muhajirun aur Ansar ke beech qaim hone waale bhai-chare ko kya kehte hain?',
          urdu: 'مہاجرین اور انصار کے درمیان قائم ہونے والے تاریخی بھائی چارے کو کیا کہا جاتا ہے؟'
        },
        options: {
          english: ['Al-Mu\'akhat (Fraternization)', 'Al-Hilf', 'Al-Mithaq', 'Al-Bay\'at'],
          hinglish: ['Al-Mu\'akhat (Bhai-chara)', 'Hilf', 'Mithaq', 'Bay\'at'],
          urdu: ['المواخاة (مواخاۃِ مدینہ)', 'الحلف', 'الميثاق', 'البيعة']
        },
        correctIndex: 0,
        explanation: {
          english: 'Mu\'akhat united Muhajirun and Ansar as literal brothers.',
          hinglish: 'Mu\'akhat kehte hain.',
          urdu: 'مواخاۃِ مدینہ کہا جاتا ہے۔'
        }
      },
      {
        id: 'q22-3',
        question: {
          english: 'What was Abdur Rahman ibn Awf (RA)\'s famous reply when an Ansar brother offered half his wealth?',
          hinglish: 'Ansar bhai ke aadhah maal dene par Abdur Rahman ibn Awf (RA) ne kya kaha tha?',
          urdu: 'انصاری بھائی کے آدھی جائیداد پیش کرنے پر حضرت عبدالرحمٰن بن عوف رض نے کیا رشکِ عالم جواب دیا؟'
        },
        options: {
          english: ['"May Allah bless your wealth! Just show me the way to the marketplace!"', '"I take it all"', '"Give me money for 1 year"', '"I refuse your friendship"'],
          hinglish: ['"Mujhe bazaar ka rasta dikha do!"', 'Sab le lunga', '1 saal ke paise do', 'Nahi chahiye'],
          urdu: ['"اللہ تمہارے مال میں برکت دے، مجھے بازار کا راستہ دکھا دو!"', 'تمام مال دے دو', 'ایک سال کے لیے رقم دو', 'انکار کیا']
        },
        correctIndex: 0,
        explanation: {
          english: 'He requested only to be shown the market so he could work independently.',
          hinglish: 'Bazaar ka rasta pucha tha.',
          urdu: 'بازار کا راستہ پوچھے کر تجارت شوع کی۔'
        }
      }
    ]
  },

  // MODULE 23
  {
    id: 'seerah-23',
    chapterNumber: 23,
    period: 'Module 23 • 2 AH (624 CE) • Battle of Badr',
    title: {
      english: '23. Battle of Badr: The Day of Criterion (Yawm al-Furqan)',
      hinglish: '23. Jung-e-Badr (17 Ramzan 2 AH): 313 Musalmanon Ki Azeem Tareekhi Fateh',
      urdu: '۲۳. غزوۂ بدر الكبرىٰ (۱۷ رمضان ۲ھ)، ۳۱۳ کی ۳ ہزار ملائکہ کی مدد سے معجزانہ فتح'
    },
    arabicTitle: 'غزوة بدر الكبرى يوم الفرقان ونصر الله للمؤمنين',
    icon: '⚔️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 23: The Battle of Badr',
    summary: {
      english: 'On Friday, 17th Ramadan 2 AH, 313 ill-equipped Muslims faced 1,000 elite Makkan warriors at Badr. Allah sent 3,000 angels to assist them. Abu Jahl and 70 Makkan chiefs were killed in Islam\'s decisive first victory.',
      hinglish: '17 Ramzan 2 AH ko 313 Musalmanon ne 1,000 Quraysh ke lashkar ko Badr mein haraya. Allah ne Farishton ke zariye madad bheji. Abu Jahl samet 70 sardaar maare gaye.',
      urdu: '۱۷ رمضان ۲ھ کو ۳۱۳ نہتے مسلمانوں نے ۱۰۰۰ کے قریشی لشکر کو بدر کے میدان میں شکستِ فاش دی۔ فرشتوں کی نصرت اتری اور ابو جہل سمیت ۷۰ قریشی سردار جہنم واصل ہوئے۔'
    },
    fullStory: {
      english: `On Friday, 17th Ramadan 2 AH (March 17, 624 CE), the defining conflict between Truth and Falsehood took place at the wells of **Badr**: **Ghazwat Badr al-Kubra (The Day of Criterion - Yawm al-Furqan)**.

The Muslim army numbered only **313 men** with only 2 horses and 70 camels, lacking armor and weapons. They marched initially to intercept a rich Makkan trade caravan led by Abu Sufyan. Abu Sufyan escaped along the coast and summoned Abu Jahl, who marched from Makkah with **1,000 heavily armed warriors**, 100 horses, and singers, boasting he would crush Muslims forever.

The Prophet spent the preceding night weeping in intense supplication inside his tent (*Al-Arish*), raising his hands so high his cloak fell: *"O Allah! If this small group of Muslims perishes today, You will never be worshipped on earth again!"* Abu Bakr (RA) comforted him.

Allah answered with rain to firm the sand under Muslims' feet and sent **3,000 angels** led by Jibreel (AS). The battle began with duels: Hamzah (RA), Ali (RA), and Ubaydah ibn Al-Harith (RA) vanquished Makkan champions Utbah, Shaybah, and Walid. Two young Ansar brothers (Mu'adh and Mu'awwidh) mortally wounded **Abu Jahl**, and Abdullah ibn Mas'ud finished him off. 70 Makkan leaders were slain, 70 taken captive, while 14 Muslims achieved martyrdom.`,
      hinglish: `17 Ramzan 2 AH ko **Badr** ki jung hui. Musalman sirf **313** the aur Quraysh ke **1,000** sipahi the. Nabi (ﷺ) ne raat bhar ror kar Dua ki: *"Ya Allah! Agar yeh 313 khatam hue to zameen par Tera naam lene waala koi nahi bachega!"* Allah ne **3,000 Farishte** bheje. **Hamzah (RA)** aur **Ali (RA)** ne dushman ke sardaaron ko dher kiya. **Abu Jahl** mara gaya. Quraysh ke 70 maare gaye aur 70 arrest hue.`,
      urdu: `۱۷ رمضان ۲ھ کو **غزوۂ بدر** کا واقعہ پیش آیا۔ مسلمانوں کی تعداد صرف **۳۱۳** تھی جبکہ قریش **۱۰۰۰** مسلّح جنگجو لے کر آئے۔ آپ ﷺ نے عریش میں رات بھر عاجزانہ دعا کی: *"اے اللہ! اگر یہ مٹھی بھر جماعت ہلاک ہو گئی تو زمین پر تیری عبادت نہ ہو گی!"* اللہ نے **۳۰۰۰ فرشتے** بھیجے۔ **ابو جہل** اور ۷۰ قریشی سردار مارے گئے اور ۱۴ مسلمان شہید ہوئے۔`
    },
    keyTakeaways: {
      english: [
        'Victory depends not on numbers or weapons, but on Iman, unity, and divine assistance.',
        'Intense, tears-filled supplication (Du\'a) is a weapon capable of shifting real-world outcomes.',
        'Badr established Islam as an unshakeable sovereign power in the Arabian Peninsula.'
      ],
      hinglish: [
        'Jeet fauj se nahi balki Eeman aur Allah ki madad se milti hai.',
        'Ro kar Dua karna taqdeer badal sakta hai.',
        'Badr ne Islam ko poore Arab mein taqatwar bana diya.'
      ],
      urdu: [
        'فتح و نصرت کا دارومدار تعداد پر نہیں بلکہ ایمان اور نصرتِ الٰہی پر ہے۔',
        'گریہ و زاری کے ساتھ دعا تقدیر کے فیصلے بدل دیتی ہے۔',
        'غزوۂ بدر نے اسلام کو عرب کی سب سے بڑی طاقت کے طور پر تسلیم کرایا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ فَاتَّقُواْ اللَّهَ لَعَلَّكُمْ تَشْكُرُونَ',
      reference: 'Surah Ali \'Imran 3:123',
      translation: {
        english: '"And Allah has already given you victory at Badr while you were few in number. So fear Allah; perhaps you will be grateful."',
        hinglish: '"Aur Allah ne Badr mein tumhari madad ki jab tum kamzor the..."',
        urdu: '"اور بلا شبہ اللہ نے بدر میں تمہاری مدد کی جب تم بے سر و سامان تھے..."'
      }
    },
    test: [
      {
        id: 'q23-1',
        question: {
          english: 'How many Muslim companions fought in the historic Battle of Badr?',
          hinglish: 'Jung-e-Badr mein kitne Musalman Sahaba shamil the?',
          urdu: 'غزوۂ بدر الكبرىٰ میں کتنے مسلم صحابہ کرام نے شرکت فرمائی تھی؟'
        },
        options: {
          english: ['313 Companions', '1,000 Companions', '500 Companions', '3,000 Companions'],
          hinglish: ['313 Sahaba', '1,000 Sahaba', '500 Sahaba', '3,000 Sahaba'],
          urdu: ['۳۱۳ صحابہ کرام', '۱۰۰۰ صحابہ', '۵۰۰ صحابہ', '۳۰۰۰ صحابہ']
        },
        correctIndex: 0,
        explanation: {
          english: 'There were 313 Muslims facing 1,000 Quraysh warriors.',
          hinglish: '313 Sahaba the.',
          urdu: '۳۱۳ صحابہ کرام شامل تھے۔'
        }
      },
      {
        id: 'q23-2',
        question: {
          english: 'On what Islamic date did the Battle of Badr take place?',
          hinglish: 'Jung-e-Badr kis Islamic taareekh ko hui thi?',
          urdu: 'غزوۂ بدر کس اسلامی تاریخ کو برپا ہوا تھا؟'
        },
        options: {
          english: ['17th Ramadan 2 AH', '1st Shawwal 3 AH', '10th Muharram 1 AH', '27th Rajab 2 AH'],
          hinglish: ['17 Ramzan 2 AH', '1 Shawwal 3 AH', '10 Muharram', '27 Rajab'],
          urdu: ['۱۷ رمضان المبارک ۲ھ', '۱ شوال ۳ھ', '۱۰ محرم ۱ھ', '۲۷ رجب ۲ھ']
        },
        correctIndex: 0,
        explanation: {
          english: 'Battle of Badr occurred on Friday, 17th Ramadan 2 AH.',
          hinglish: '17 Ramzan ko hui thi.',
          urdu: '۱۷ رمضان المبارک ۲ھ کو برپا ہوا۔'
        }
      },
      {
        id: 'q23-3',
        question: {
          english: 'Which arch-enemy of Islam was slain during the Battle of Badr?',
          hinglish: 'Jung-e-Badr mein Islam ka sabse bada dushman kaun maara gaya tha?',
          urdu: 'غزوۂ بدر میں اسلام کا کون سا سب سے بڑا فرعون صفت دشمن واصلِ جہنم ہوا؟'
        },
        options: {
          english: ['Abu Jahl (Amr ibn Hisham)', 'Abu Lahab', 'Abu Sufyan', 'Musaylimah'],
          hinglish: ['Abu Jahl', 'Abu Lahab', 'Abu Sufyan', 'Musaylimah'],
          urdu: ['ابو جہل (عمرو بن ہشام)', 'ابو لہب', 'ابو سفیان', 'مسیلمہ کذاب']
        },
        correctIndex: 0,
        explanation: {
          english: 'Abu Jahl was killed at Badr.',
          hinglish: 'Abu Jahl maara gaya.',
          urdu: 'ابو جہل غزوہ بدر میں مارا گیا۔'
        }
      }
    ]
  },

  // MODULE 24
  {
    id: 'seerah-24',
    chapterNumber: 24,
    period: 'Module 24 • 3 AH (625 CE) • Battle of Uhud',
    title: {
      english: '24. Battle of Uhud: Lessons of Obedience & Martyrdom of Hamzah (RA)',
      hinglish: '24. Jung-e-Uhud (3 AH): Archers Ki Galti, Hamzah (RA) Ki Shahadat Aur Sabar',
      urdu: '۲۴. غزوۂ احد (۳ھ)، تیر اندازوں کا درّہ، سید الشہداء حضرت حمزہ رض کی شہادت اور اطاعت کا سبق'
    },
    arabicTitle: 'غزوة أحد وشهادة سيد الشهداء حمزة بن عبد المطلب',
    icon: '🏔️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 24: The Battle of Uhud',
    summary: {
      english: 'Seeking revenge for Badr, 3,000 Makkan pagans marched to Mount Uhud. 50 archers left Jabal al-Rumat prematurely against the Prophet\'s command, allowing Khalid ibn al-Walid\'s cavalry to flank Muslims, resulting in 70 martyrs including Hamzah (RA).',
      hinglish: 'Badr ka badla lene 3,000 Quraysh Uhud aaye. 50 Archers ne Nabi (ﷺ) ke manay karne ke bawajood pahadi chodi. Khalid bin Walid ne peeche se hamla kiya. Hamzah (RA) samet 70 Sahaba shaheed hue.',
      urdu: 'بدلہ بدر کے لیے ۳۰۰۰ کا لشکر احد پہنچا۔ ۵۰ تیر اندازوں نے حکمِ نبوی کے خلاف پہاڑی چھوڑ دی، خالد بن ولید نے پیچھے سے حملہ کیا۔ حضرت حمزہ سمیت ۷۰ صحابہ شہید ہوئے۔'
    },
    fullStory: {
      english: `In Shawwal 3 AH (625 CE), Quraysh returned with an army of **3,000 warriors** led by Abu Sufyan to avenge their humiliation at Badr. Prophet Muhammad (ﷺ) positioned 700 Muslim fighters at the base of **Mount Uhud**.

Crucially, the Prophet stationed **50 expert archers** on the hillock of **Jabal al-Rumat** under Abdullah ibn Jubayr (RA) with strict, unequivocal commands: *"Protect our backs! Even if you see birds snatching our bodies, do not leave this position until I send for you!"*

Initially, Muslims dominated the battlefield, pushing the Makkans into retreat. Seeing war spoils scattered, 40 of the 50 archers abandoned their posts despite Abdullah ibn Jubayr's desperate pleas. Spotting the exposed pass, **Khalid ibn al-Walid** (then a pagan cavalry commander) led a surprise cavalry charge around the mountain, surrounding Muslims from behind.

In the chaos, rumors spread that the Prophet was killed. The Prophet was hit by stones and a helmet ring, losing a tooth and sustaining facial wounds, yet surrounded by a human shield of companions (Talhah, Abu Dujanah, Nusaybah bint Ka'b). **Hamzah ibn Abdul-Muttalib (RA)** was martyred by the Abyssinian spearman Wahshi and mutilated by Hind bint Utbah. The Prophet grieved deeply, giving Hamzah the divine title **Sayyid al-Shuhada (Master of Martyrs)**.`,
      hinglish: `Shawwal 3 AH mein **Jung-e-Uhud** hui. Nabi (ﷺ) ne **Jabal al-Rumat** pahadi par **50 Archers** ko khada kiya aur sakht hukam diya ki jitien ya haarien pahadi mat chodna. Muslims jeetne lage to 40 archers ne maal-e-ghaneemat ke liye pahadi chod di. **Khalid ibn Walid** ne peeche se hamla kar diya. **Hamzah (RA)** shaheed hue. Nabi (ﷺ) ke dante mubarak shaheed hue. Total 70 Sahaba shaheed hue.`,
      urdu: `شوال ۳ھ میں **غزوۂ احد** برپا ہوا۔ آپ ﷺ نے **جبل الرماۃ** پر **۵۰ تیر اندازوں** کو فکس کیا اور کسی صورت جگہ نہ چھوڑنے کا سخت ترین حکم دیا۔ ابتدائی فتح دیکھ کر ۴۰ تیر اندازوں نے جگہ چھوڑ دی۔ **خالد بن ولید** نے چکر کاٹ کر پیچھے سے حملہ کر دیا۔ **حضرت حمزہ رض** شہید ہوئے، آپ ﷺ کا رخسار اور دندانِ مبارک زخمی ہوا۔ ۷۰ صحابہ شہید ہوئے۔`
    },
    keyTakeaways: {
      english: [
        'Absolute obedience to the Commander (Prophet Muhammad ﷺ) is non-negotiable for success.',
        'Material greed (desire for spoils) can ruin physical victories in an instant.',
        'True leaders stand firm at the frontlines during the most dangerous moments of trial.'
      ],
      hinglish: [
        'Nabi (ﷺ) ke Hukam ki na-farmani tabahi laati hai.',
        'Maal-e-Ghaneemat ki lalach ne jeet ko mushkil mein badal diya.',
        'Hamzah (RA) Sayyid al-Shuhada (Shaheedon ke Sardaar) hain.'
      ],
      urdu: [
        'رسول اللہ ﷺ کی اطاعت سے انحراف تباہی کا باعث بنتا ہے۔',
        'مال و متاع کی حرص جیتی ہوئی جنگ کا پاسا پلٹ سکتی ہے۔',
        'حضرت حمزہ رض کو سید الشہداء کا ابدی لقب عطا ہوا۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'حَتَّى إِذَا فَشِلْتُمْ وَتَنَازَعْتُمْ فِي الأَمْرِ وَعَصَيْتُم مِّن بَعْدِ مَا أَرَاكُم مَّا تُحِبُّونَ',
      reference: 'Surah Ali \'Imran 3:152',
      translation: {
        english: '"...until when you faltered and disputed about the order and disobeyed after He had shown you that which you love."',
        hinglish: '"Yahan tak ki tumne na-farmani ki jab Allah ne tumhari pasandida cheez dikha di thi..."',
        urdu: '"یہاں تک کہ تم نے بزدلی دکھائی اور حکم میں اختلاف کیا اور نافرمانی کی بعد اس کے کہ اس نے تمہیں وہ دکھا دیا جو تم چاہتے تھے..."'
      }
    },
    test: [
      {
        id: 'q24-1',
        question: {
          english: 'How many archers were stationed on Jabal al-Rumat during the Battle of Uhud?',
          hinglish: 'Uhud mein Jabal al-Rumat pahadi par kitne Archers ko khada kiya gaya tha?',
          urdu: 'غزوۂ احد میں جبل الرماۃ کے درّے پر کتنے تیر اندازوں کو تعینات کیا گیا تھا؟'
        },
        options: {
          english: ['50 Archers', '100 Archers', '30 Archers', '10 Archers'],
          hinglish: ['50 Archers', '100 Archers', '30 Archers', '10 Archers'],
          urdu: ['۵۰ تیر انداز', '۱۰۰ تیر انداز', '۳۰ تیر انداز', '۱۰ تیر انداز']
        },
        correctIndex: 0,
        explanation: {
          english: '50 archers were posted to guard the rear pass.',
          hinglish: '50 archers the.',
          urdu: '۵۰ تیر اندازوں کو تعینات کیا گیا تھا۔'
        }
      },
      {
        id: 'q24-2',
        question: {
          english: 'Which noble uncle of the Prophet earned the title "Sayyid al-Shuhada" (Master of Martyrs) at Uhud?',
          hinglish: 'Uhud mein shaheed hone waale Nabi (ﷺ) ke kis uncle ko "Sayyid al-Shuhada" ka laqab mila?',
          urdu: 'غزوہ احد میں کس چچا کو "سید الشہداء" کا عظیم الشان لقب عطا ہوا؟'
        },
        options: {
          english: ['Hazrat Hamzah ibn Abdul-Muttalib (RA)', 'Hazrat Abbas (RA)', 'Hazrat Abu Talib', 'Hazrat Ja\'far (RA)'],
          hinglish: ['Hazrat Hamzah (RA)', 'Hazrat Abbas (RA)', 'Abu Talib', 'Ja\'far (RA)'],
          urdu: ['حضرت حمزہ بن عبد المطلب رض', 'حضرت عباس رض', 'ابو طالب', 'حضرت جعفر رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Hamzah (RA) was martyred and named Master of Martyrs.',
          hinglish: 'Hamzah (RA) the.',
          urdu: 'حضرت حمزہ رض کو سید الشہداء کا لقب ملا۔'
        }
      },
      {
        id: 'q24-3',
        question: {
          english: 'Which cavalry commander launched the flank attack on Muslims after archers left the pass?',
          hinglish: 'Archers ke pahadi chodne par kis Cavalry Commander ne peeche se hamla kiya tha?',
          urdu: 'تیر اندازوں کے درّہ چھوڑنے پر کس نے پیچھے سے چکر کاٹ کر گھڑ سوار حملہ کیا تھا؟'
        },
        options: {
          english: ['Khalid ibn al-Walid (before converting)', 'Abu Sufyan', 'Ikrimah ibn Abi Jahl', 'Amr ibn Al-As'],
          hinglish: ['Khalid ibn al-Walid', 'Abu Sufyan', 'Ikrimah', 'Amr ibn Al-As'],
          urdu: ['خالد بن ولید (قبولِ اسلام سے قبل)', 'ابو سفیان', 'عکرمہ بن ابی جہل', 'عمرو بن العاص']
        },
        correctIndex: 0,
        explanation: {
          english: 'Khalid ibn al-Walid led the Makkan cavalry charge.',
          hinglish: 'Khalid bin Walid the.',
          urdu: 'خالد بن ولید نے گھڑ سوار دستانے کی قیادت کی تھی۔'
        }
      }
    ]
  },

  // MODULE 25
  {
    id: 'seerah-25',
    chapterNumber: 25,
    period: 'Module 25 • 5 AH (627 CE) • Battle of the Trench',
    title: {
      english: '25. Battle of the Trench (Ahzab / Khandaq) & Salman al-Farsi\'s Genius',
      hinglish: '25. Ghazwat al-Khandaq (Ahzab): Salman al-Farsi (RA) Ki Khondak Strategy',
      urdu: '۲۵. غزوۂ خندق (احزاب، ۵ھ)، حضرت سلمان فارسی رض کی دائرہ نما خندق حکمت عملی اور ہوا کی نصرت'
    },
    arabicTitle: 'غزوة الخندق الأحزاب وسلمان الفارسي ونصر الله بالريح',
    icon: '⛏️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 25: The Battle of the Trench',
    summary: {
      english: 'A confederacy of 10,000 enemy troops besieged Madinah. Upon Salman al-Farsi (RA)\'s advice, Muslims dug a deep trench protecting Madinah. After weeks of siege and intense cold, Allah destroyed the enemy camp with a freezing hurricane.',
      hinglish: '10,000 dushmanon ke lashkar ne Madinah ko ghera. Salman al-Farsi (RA) ke kehne par Madinah ke charon taraf khondak (trench) khodi gayi. 1 mahine ke Siege ke baad Allah ne tez aandhi bhej kar dushman ko bhaga diya.',
      urdu: '۱۰ ہزار کا متحدہ احزاب لشکر مدینہ پر ٹوٹ پڑا۔ حضرت سلمان فارسی رض کے مشورے پر مدینہ کے اطراف خندق کھودی گئی۔ شدید ٹھنڈی طوفانی ہوا نے دشمن کے خیمے اکھاڑ پھینکے۔'
    },
    fullStory: {
      english: `In Shawwal 5 AH (627 CE), Jewish leaders of Banu Nadir incited a massive confederacy (*Ahzab*) of **10,000 confederate soldiers** from Quraysh, Ghatafan, and desert tribes to completely wipe out Islam in Madinah.

Facing an unprecedented military force, Prophet Muhammad (ﷺ) consulted his companions. **Salman al-Farsi (RA)**, a Persian companion, suggested a revolutionary defensive strategy unknown to Arabia: *"O Messenger of Allah! In Persia, when we were besieged, we used to dig a trench around us!"*

The Prophet enthusiastically approved. 3,000 Muslims worked frantically for 6 days in freezing winter conditions to dig a 5-meter deep and 5-meter wide trench along Madinah's open northern border. The Prophet worked alongside them, breaking a giant boulder with a sledgehammer that emitted three blinding sparks, prophesying the upcoming conquests of Yemen, Persia, and Rome!

When the 10,000 besiegers arrived, they were stunned by the impassable trench. Traitors within Banu Qurayza broke their treaty from inside, creating extreme anxiety (*"when eyes grew wild and hearts reached throats"* - 33:10). Nu'aym ibn Mas'ud cleverly sowed discord between Banu Qurayza and Quraysh. Finally, Allah sent a freezing, howling hurricane (*Rih*) and invisible angels that blew away tents, overturned cooking pots, and filled the enemy with sheer panic, forcing them to retreat in total defeat without fighting!`,
      hinglish: `5 AH mein 10,000 kafiron ke lashkar ne Madinah ko ghera. **Salman al-Farsi (RA)** ne **Khondak (Trench)** khodne ka idea diya. 3,000 Muslims ne 6 din mein khondak khodi. Nabi (ﷺ) ne khud patthar tode aur Rome, Persia ki jeet ki peshangoi ki. 1 mahine baad Allah ne **tez thandi aandhi** (Hurricane) bheji jisse kafiron ke khemay ukhad gaye aur woh bhaag gaye!`,
      urdu: `۵ھ میں ۱۰ ہزار کے کافروں کے لشکر نے مدینہ کو گھیر لیا۔ **حضرت سلمان فارسی رض** کی تجویز پر **خندق** کھودی گئی۔ ۳۰۰۰ مسلمانوں نے ۶ دن میں خندق مکمل کی۔ آپ ﷺ نے پتھر توڑتے وقت روما اور فارس کی فتح کی بشارت دی۔ شدید **طوفانی ہوا** نے دشمنوں کے خیمے اکھاڑ کر انہیں بھاگنے پر مجبور کر دیا۔`
    },
    keyTakeaways: {
      english: [
        'Openness to innovative strategic advice (like Persian trench warfare) is a trademark of Islamic governance.',
        'Hard work alongside followers builds deep communal unity and morale.',
        'Allah sends invisible forces (wind, weather, fear) to defend His believers when all human means seem exhausted.'
      ],
      hinglish: [
        'Doosron ki achi technical advice manna Sunnat hai.',
        'Leader jab khud kaam karta hai to fauj ki taqat dugni hoti hai.',
        'Allah hawa aur mausam ke zariye bhi Apne logon ki madad karta hai.'
      ],
      urdu: [
        'دیگر اقوام کے اچھے اور جائز تکنیکی مشورے اپنانا حکمتِ نبوی ہے۔',
        'قائد جب خود مزدوری کرے تو امّت کا حوصلہ بلند ترین رہتا ہے۔',
        'جب تمام ظاہری اسباب ختم ہو جائیں تو نصرتِ الٰہی غیبی ہواؤں سے نازل ہوتی ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ جَاءَتْكُمْ جُنُودٌ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا وَجُنُودًا لَّمْ تَرَوْهَا',
      reference: 'Surah Al-Ahzab 33:9',
      translation: {
        english: '"O you who have believed, remember the favor of Allah upon you when there came against you armies and We sent upon them a wind and armies [of angels] you did not see."',
        hinglish: '"O Eeman waalon Allah ki naimat yaad karo jab tum par lashkar aaye to Humne tez hawa aur na dikhne waale farishte bheje..."',
        urdu: '"اے ایمان والو! اپنے اوپر اللہ کے احسان کو یاد کرو جب تم پر فوجیں چڑھ آئیں تو ہم نے ان پر ہوا اور ایسے لشکر بھیجے جنہیں تم نہ دیکھ سکتے تھے..."'
      }
    },
    test: [
      {
        id: 'q25-1',
        question: {
          english: 'Which Persian companion suggested digging the trench around Madinah?',
          hinglish: 'Madinah ke charon taraf Khondak (Trench) khodne ka mashwara kis Sahabi ne diya tha?',
          urdu: 'مدینہ کے اطراف خندق کھودنے کا تاریخی مشورہ کس صحابی نے دیا تھا؟'
        },
        options: {
          english: ['Hazrat Salman al-Farsi (RA)', 'Hazrat Abu Hurairah (RA)', 'Hazrat Suhaib al-Rumi (RA)', 'Hazrat Bilal (RA)'],
          hinglish: ['Hazrat Salman al-Farsi (RA)', 'Abu Hurairah (RA)', 'Suhaib al-Rumi (RA)', 'Bilal (RA)'],
          urdu: ['حضرت سلمان فارسی رض', 'حضرت ابو ہریرہ رض', 'حضرت صہیب رومی رض', 'حضرت بلال رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Salman al-Farsi (RA) proposed trench warfare from his Persian heritage.',
          hinglish: 'Salman al-Farsi (RA) ne mashwara diya tha.',
          urdu: 'حضرت سلمان فارسی رض نے تجویز دی تھی۔'
        }
      },
      {
        id: 'q25-2',
        question: {
          english: 'How many confederate enemy soldiers besieged Madinah during the Battle of the Trench?',
          hinglish: 'Ghazwat al-Khandaq (Ahzab) mein kafiron ke lashkar ki kul taareekhi taqdad kitni thi?',
          urdu: 'غزوہ خندق (احزاب) میں کافروں کے متحدہ لشکر کی تعداد کتنی تھی؟'
        },
        options: {
          english: ['10,000 Soldiers', '3,000 Soldiers', '1,000 Soldiers', '20,000 Soldiers'],
          hinglish: ['10,000 Sipahi', '3,000 Sipahi', '1,000 Sipahi', '20,000 Sipahi'],
          urdu: ['۱۰,۰۰۰ کافر جنگجو', '۳,۰۰۰ جنگجو', '۱,۰۰۰ جنگجو', '۲۰,۰۰۰ جنگجو']
        },
        correctIndex: 0,
        explanation: {
          english: 'The enemy force numbered 10,000 men.',
          hinglish: '10,000 the.',
          urdu: '۱۰,۰۰۰ کافر جنگجو تھے۔'
        }
      },
      {
        id: 'q25-3',
        question: {
          english: 'What divine natural phenomenon destroyed the enemy camp and forced their retreat?',
          hinglish: 'Dushman ke khemay ukhadne ke liye Allah ne kya cheez bheji thi?',
          urdu: 'دشمن کا لشکر تباہ کرنے کے لیے اللہ تعالی نے کیا قدرتی عذاب نازل فرمایا؟'
        },
        options: {
          english: ['Freezing Hurricane / Violent Wind (Rih)', 'Earthquake', 'Flood', 'Fire from Heaven'],
          hinglish: ['Tez Thandi Aandhi (Wind)', 'Zalzala', 'Baadh', 'Aag'],
          urdu: ['شدید طوفانی اور ٹھنڈی ہوا (ریح)', 'زلزلہ', 'سیلاب', 'آسمانی آگ']
        },
        correctIndex: 0,
        explanation: {
          english: 'A freezing hurricane blew away tents and fires.',
          hinglish: 'Tez aandhi aayi thi.',
          urdu: 'شدید ٹھنڈی ہوائیں چلی تھیں۔'
        }
      }
    ]
  },

  // MODULE 26
  {
    id: 'seerah-26',
    chapterNumber: 26,
    period: 'Module 26 • 6 AH (628 CE) • Treaty of Hudaybiyyah',
    title: {
      english: '26. Treaty of Hudaybiyyah, Bay\'at al-Ridwan & The Manifest Victory',
      hinglish: '26. Sulah-e-Hudaybiyyah (6 AH): Bay\'at-e-Ridwan Aur Khuli Hui Fateh (Fath Mubeen)',
      urdu: '۲۶. صلحِ حدیبیہ (۶ھ)، بیعتِ رضوان اور کلامِ الٰہی کی "فتح مبین" کی خوشخبری'
    },
    arabicTitle: 'صلح الحديبية وبيعة الرضوان والفتح المبين',
    icon: '🕊️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 26: The Treaty of Hudaybiyyah',
    summary: {
      english: '1,400 unarmed Muslims marched for Umrah. Blocked at Hudaybiyyah, the Prophet negotiated a 10-year peace treaty despite unequal conditions. Allah declared Hudaybiyyah "A Manifest Victory" (Fath Mubeen) in Surah Al-Fath.',
      hinglish: '1,400 Musalman Umrah ke liye gaye. Hudaybiyyah par Quraysh ne roka. Rumors par Uthman (RA) ke liye Bay' + '\'at-e-Ridwan hui. 10 saal ka peace treaty sign hua jise Surah Al-Fath ne "Fath Mubeen" kaha.',
      urdu: '۱۴۰۰ مسلمان عمرہ کے لیے نکلے۔ حدیبیہ پر قریش نے روکا۔ حضرت عثمان رض کی شہادت کی افواہ پر بیعتِ رضوان ہوئی۔ ۱۰ سالہ امن معاہدہ طے پایا جسے قرآن نے "فتح مبین" کہا۔'
    },
    fullStory: {
      english: `In Dhu al-Qi'dah 6 AH (628 CE), Prophet Muhammad (ﷺ) saw a dream that he was performing Umrah. He set out for Makkah with **1,400 unarmed companions**, dressed in ihram and driving sacrificial animals.

Alarmed, Quraysh deployed military detachments to block their entry. The Prophet camped at **Al-Hudaybiyyah**. He sent **Uthman ibn Affan (RA)** as an envoy to explain that Muslims came solely for pilgrimage. When rumors spread that Uthman had been murdered, the Prophet stood under an acacia tree and took the legendary **Bay'at al-Ridwan (Pledge of Satisfaction)** from 1,400 companions, pledging to fight to the death for justice. Allah declared His pleasure with all 1,400 pledge-takers in Surah Al-Fath (48:18).

Realizing Muslim resolve, Quraysh dispatched Suhail ibn Amr to negotiate a treaty. The terms seemed heavily skewed against Muslims:
1. 10-year cessation of war.
2. Muslims return without Umrah this year, returning next year for 3 days.
3. Anyone defecting from Makkah to Madinah must be returned, but defectors from Madinah to Makkah would not be returned.

Despite deep initial heartbreak among companions (including Umar RA), the Prophet accepted the terms. On the return journey to Madinah, Allah revealed Surah Al-Fath: **"Indeed, We have granted you a manifest victory (Fath Mubeen)!"** Peace allowed Islam to spread rapidly—in just 2 years, more people entered Islam than in the preceding 19 years combined!`,
      hinglish: `6 AH mein 1,400 Musalman Umrah ke liye **Hudaybiyyah** pahuche. Quraysh ne roka. **Uthman (RA)** ke liye **Bay'at-e-Ridwan** hui. Phir 10 saal ka **Sulah-e-Hudaybiyyah** pact sign hua. Terms mushkil lag rahi thi lekin **Surah Al-Fath** ne ise **Fath Mubeen (Khuli Fateh)** kaha. Peace ki wajah se agle 2 saal mein hazaron log Musalman hue!`,
      urdu: `۶ھ میں ۱۴۰۰ صحابہ عمرہ کے لیے **حدیبیہ** پہنچے۔ قریش کے روکنے پر **حضرت عثمان رض** کے لیے درخت کے نیچے **بیعتِ رضوان** ہوئی۔ پھر ۱۰ سالہ **صلح حدیبیہ** معاہدہ ہوا۔ بظاہر شرائط سخت تھیں لیکن قرآن نے اسے **فتح مبین** قرار دیا۔ امن کی برکت سے اگلے دو سال میں تئیس ہزار سے زیادہ لوگ مسلمان ہوئے۔`
    },
    keyTakeaways: {
      english: [
        'Strategic diplomacy and peaceful treaties often achieve greater victories than war.',
        'Allah was pleased with all 1,400 companions of Bay\'at al-Ridwan, guaranteeing their divine approval.',
        'Short-term compromise for long-term spiritual growth is a masterclass in Prophetic leadership.'
      ],
      hinglish: [
        'Aman aur samjhauta kabhi kabhi jung se badi jeet Lata hai.',
        'Bay' + '\'at-e-Ridwan waale 1,400 Sahaba se Allah raazi hua.',
        'Nabi (ﷺ) ki vision ne Sulah-e-Hudaybiyyah ko Islam ki sabse badi jeet bana diya.'
      ],
      urdu: [
        'حکمتِ عملی اور پُر امن معاہدے بعض اوقات جنگ سے بڑی فتح کا پیش خیمہ بنتے ہیں۔',
        'بیعتِ رضوان کے ۱۴۰۰ صحابہ سے اللہ تعالی کے ابدی راضی ہونے کا قرآن میں اعلان ہوا۔',
        'دور اندیشی اور امن و سلامتی ہی اسلام کا حقیقی بنیادی فلسفہ ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا',
      reference: 'Surah Al-Fath 48:1',
      translation: {
        english: '"Indeed, We have granted you a clear victory."',
        hinglish: '"Beshak Humne aapko khuli hui fateh (Fath Mubeen) di hai."',
        urdu: '"بیشک ہم نے آپ کو ایک روشن اور کھلی فتح عطا فرمائی۔"'
      }
    },
    test: [
      {
        id: 'q26-1',
        question: {
          english: 'What divine pledge was taken under the tree by 1,400 companions at Hudaybiyyah?',
          hinglish: 'Hudaybiyyah mein 1,400 Sahaba ne Darakht ke neeche konsi Bay\'at ki thi?',
          urdu: 'حدیبیہ میں درخت کے نیچے ۱۴۰۰ صحابہ نے کون سی تاریخی بیعت کی تھی؟'
        },
        options: {
          english: ['Bay\'at al-Ridwan (Pledge of Satisfaction)', 'Bay\'at al-Aqabah', 'Bay\'at al-Nisa', 'Bay\'at al-Fath'],
          hinglish: ['Bay\'at-e-Ridwan', 'Bay\'at-e-Aqabah', 'Bay\'at-e-Nisa', 'Bay\'at-e-Fath'],
          urdu: ['بیعتِ رضوان', 'بیعتِ عقبہ', 'بیعتِ النساء', 'بیعتِ الفتح']
        },
        correctIndex: 0,
        explanation: {
          english: 'Bay\'at al-Ridwan was taken when Uthman (RA) was rumored killed.',
          hinglish: 'Bay\'at-e-Ridwan hui thi.',
          urdu: 'بیعتِ رضوان کی گئی تھی۔'
        }
      },
      {
        id: 'q26-2',
        question: {
          english: 'How many years of peace was agreed upon in the Treaty of Hudaybiyyah?',
          hinglish: 'Sulah-e-Hudaybiyyah mein kitne saal ke aman (peace) ka pact hua tha?',
          urdu: 'صلح حدیبیہ کے معاہدے میں کتنے سالہ امن کا تصفیہ طے پایا تھا؟'
        },
        options: {
          english: ['10 Years', '5 Years', '3 Years', '20 Years'],
          hinglish: ['10 Saal', '5 Saal', '3 Saal', '20 Saal'],
          urdu: ['۱۰ سال', '۵ سال', '۳ سال', '۲۰ سال']
        },
        correctIndex: 0,
        explanation: {
          english: 'A 10-year armistice was established.',
          hinglish: '10 saal ka tha.',
          urdu: '۱۰ سال کے لیے جنگ بندی طے پائی۔'
        }
      },
      {
        id: 'q26-3',
        question: {
          english: 'Which Surah was revealed declaring the Treaty of Hudaybiyyah a "Manifest Victory"?',
          hinglish: 'Sulah-e-Hudaybiyyah ko "Fath Mubeen" kehne waali konsi Surah nazil hui thi?',
          urdu: 'صلح حدیبیہ کو "فتح مبین" قرار دینے والی کون سی سورۃ نازل ہوئی؟'
        },
        options: {
          english: ['Surah Al-Fath', 'Surah Al-Nasr', 'Surah Al-Anfal', 'Surah Al-Baqarah'],
          hinglish: ['Surah Al-Fath', 'Surah Al-Nasr', 'Surah Al-Anfal', 'Surah Al-Baqarah'],
          urdu: ['سورۃ الفتح', 'سورۃ النصر', 'سورۃ الانفال', 'سورۃ البقرہ']
        },
        correctIndex: 0,
        explanation: {
          english: 'Surah Al-Fath proclaimed it a manifest victory.',
          hinglish: 'Surah Al-Fath nazil hui थी.',
          urdu: 'سورۃ الفتح نازل ہوئی تھی۔'
        }
      }
    ]
  },

  // MODULE 27
  {
    id: 'seerah-27',
    chapterNumber: 27,
    period: 'Module 27 • 7 AH (628 CE) • Letters & Khaybar',
    title: {
      english: '27. Letters to World Kings & Conquest of Khaybar: Ali (RA)\'s Heroism',
      hinglish: '27. Duniya Ke Baadshahibon Ko Khat Aur Fateh Khaybar: Ali (RA) Ki Bahaduri',
      urdu: '۲۷. دنیا کے بادشاہوں کو خطوط اور فتحِ خیبر، حضرت علی المرتضیٰ رض کی شجاعت'
    },
    arabicTitle: 'الرسائل إلى الملوك والأمراء وغزوة خيبر وفتوح علي بن أبي طالب',
    icon: '✉️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 27: Letters to Kings & Khaybar',
    summary: {
      english: 'Prophet Muhammad (ﷺ) sent diplomatic letters sealed with "Muhammad Rasul Allah" to emperors of Rome, Persia, Abyssinia, and Egypt. Soon after, Muslims conquered the formidable Jewish fortress of Khaybar where Ali (RA) lifted the gate.',
      hinglish: 'Rome, Persia, Egypt ke Kings ko Islam ki Dawat ke Khat bheje. Khaybar ke mazboot qilon ko jeeta, jahan Ali (RA) ne Khaybar ka bhaari darwaza ukhad kar jeet dilayi.',
      urdu: 'ہرقل، خسرو پرویز، مقوقس کو خطوط روانہ کیے گئے۔ خیبر کے مضبوط قلعوں کو فتح کیا گیا جہاں حضرت علی رض نے خیبر کا وزنی دروازہ اکھاڑ کر تاریخی فتح حاصل کی۔'
    },
    fullStory: {
      english: `Following the peace of Hudaybiyyah in 7 AH (628 CE), Prophet Muhammad (ﷺ) expanded the call of Islam globally. He had a silver signet ring engraved with **"Muhammad Rasul Allah"** and dispatched emissaries with diplomatic letters to major world rulers:
- **Heraclius** (Byzantine Emperor) treated the letter respectfully.
- **Chosroes II** (Persian Emperor) foolishly tore the Prophet's letter; the Prophet prophesied: *"May Allah tear his empire to pieces!"*
- **Al-Muqawqis** (Ruler of Egypt) received it warmly and sent gifts, including Maria al-Qibtiyya.
- **Negus** of Abyssinia embraced Islam.

In Muharram 7 AH, 1,400 Muslims marched against the heavily fortified Jewish oasis of **Khaybar**, which had become a hotbed of anti-Islamic conspiracies. Khaybar consisted of seven massive stone fortresses on high rocks.

For days, the stronghold of Al-Qamus resisted assault. The Prophet announced: **"Tomorrow, I will give the banner to a man who loves Allah and His Messenger, and whom Allah and His Messenger love! Allah will grant victory through his hands!"** The next morning, he called **Ali ibn Abi Talib (RA)**, cured his eye infection with his blessed saliva, and gave him the flag. Ali (RA) charged forward, defeated the giant warrior Marhab, ripped the massive iron door of the fort off its hinges to use as a shield, and conquered Khaybar!`,
      hinglish: `7 AH mein Nabi (ﷺ) ne **"Muhammad Rasul Allah"** ki ring ki mohar lagakar Rome, Persia, Egypt ke Emperors ko Islam ke Khat bheje. Persian Emperor ne khat phad diya to Aapne farmaya uski saltanat tukde ho jayegi. Phir **Khaybar** ke qilon par hamla hua. Nabi (ﷺ) ne Flag **Ali (RA)** ko diya. Ali (RA) ne Marhab ko dher kiya aur **Khaybar ka bhaari darwaza** ukhad kar fort jeet liya!`,
      urdu: `۷ھ میں آپ ﷺ نے **"محمد رسول اللہ"** کی چاندی کی مہر لگا کر روما، فارس، مصر کے بادشاہوں کو دعوت کے خطوط بھیجے۔ خسرو پرویز نے خط پھاڑا تو آپ نے اس کی سلطنت کے ٹکڑے ہونے کی پیشگوئی فرمائی۔ محرم ۷ھ میں **خیبر** کے قلعوں کو فتح کیا گیا۔ آپ نے علم **حضرت علی رض** کو تھمایا جنہوں نے مرحب کو واصلِ جہنم کر کے خیبر کا وزنی دروازہ اکھاڑ کر فتح حاصل کی۔`
    },
    keyTakeaways: {
      english: [
        'Islam is a universal message intended for all nations, races, and rulers.',
        'Ali ibn Abi Talib (RA) possesses supreme spiritual and martial status as one beloved by Allah and His Messenger.',
        'Arrogance against divine guidance (Chosroes tearing the letter) leads to complete civilizational collapse.'
      ],
      hinglish: [
        'Islam poori duniya aur har insaan ke liye hai.',
        'Ali (RA) se Allah aur Uska Rasool muhabbat karte hain.',
        'Takabbur karne waalon ki saltanat tabah ho jaati hai.'
      ],
      urdu: [
        'اسلام ایک عالمی پیغام ہے جو ہر قوم، نسل اور حاکم کے لیے ہے۔',
        'حضرت علی المرتضیٰ رض کا مقام کہ اللہ اور اس کے رسول ان سے محبت فرماتے ہیں۔',
        'حق سے تکبر (خسرو پرویز کا خط پھاڑنا) قوموں کی تباہی کا سبب بنتا ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'لَأُعْطِيَنَّ الرَّايَةَ غَدًا رَجُلاً يُحِبُّ اللَّهَ وَرَسُولَهُ وَيُحِبُّهُ اللَّهُ وَرَسُولُهُ',
      reference: 'Sahih al-Bukhari 3706',
      translation: {
        english: '"Tomorrow I will give the banner to a man who loves Allah and His Messenger, and Allah and His Messenger love him."',
        hinglish: '"Kal main flag us aadmi ko dunga jo Allah aur Uske Rasool se muhabbat karta hai..."',
        urdu: '"کل میں علم ایسے شخص کو دوں گا جو اللہ اور اس کے رسول سے محبت رکھتا ہے اور اللہ اور اس کا رسول اس سے محبت رکھتے ہیں..."'
      }
    },
    test: [
      {
        id: 'q27-1',
        question: {
          english: 'Which companion was given the flag and conquered the fortress of Khaybar after ripping its iron door?',
          hinglish: 'Khaybar ka darwaza ukhad kar fateh dilwane waale Sahabi kaun the?',
          urdu: 'خیبر کا وزنی دروازہ اکھاڑ کر فتح حاصل کرنے والے جلیل القدر صحابی کون تھے؟'
        },
        options: {
          english: ['Hazrat Ali ibn Abi Talib (RA)', 'Hazrat Khalid ibn al-Walid (RA)', 'Hazrat Umar ibn Al-Khattab (RA)', 'Hazrat Abu Ubaydah (RA)'],
          hinglish: ['Hazrat Ali ibn Abi Talib (RA)', 'Khalid ibn al-Walid (RA)', 'Umar (RA)', 'Abu Ubaydah (RA)'],
          urdu: ['حضرت علی بن ابی طالب رض', 'حضرت خالد بن ولید رض', 'حضرت عمر فاروق رض', 'حضرت ابو عبیدہ بن الجراح رض']
        },
        correctIndex: 0,
        explanation: {
          english: 'Ali (RA) was given the flag and conquered Khaybar.',
          hinglish: 'Ali (RA) the.',
          urdu: 'حضرت علی رض نے فتح حاصل کی۔'
        }
      },
      {
        id: 'q27-2',
        question: {
          english: 'Which Emperor foolishly tore Prophet Muhammad (ﷺ)\'s letter, leading to his empire\'s collapse?',
          hinglish: 'Kis Baadshah ne Nabi (ﷺ) ka Khat phad diya tha jisse uski saltanat tabah hui?',
          urdu: 'کس مغرور بادشاہ نے آپ ﷺ کا مبارک خط پھاڑ کر اپنی سلطنت تباہ کی؟'
        },
        options: {
          english: ['Chosroes II (Parviz of Persia)', 'Heraclius of Rome', 'Negus of Abyssinia', 'Muqawqis of Egypt'],
          hinglish: ['Chosroes (Persia Ka Baadshah)', 'Heraclius', 'Negus', 'Muqawqis'],
          urdu: ['خسرو پرویز (شاہِ فارس)', 'ہرقل (روما)', 'نجاشی', 'مقوقس (مصر)']
        },
        correctIndex: 0,
        explanation: {
          english: 'Chosroes II torn the letter and his empire fell apart.',
          hinglish: 'Persia ke Chosroes ne phada tha.',
          urdu: 'خسرو پرویز نے خط پھاڑا تھا۔'
        }
      },
      {
        id: 'q27-3',
        question: {
          english: 'What words were engraved on Prophet Muhammad (ﷺ)\'s silver signet ring used for official letters?',
          hinglish: 'Nabi (ﷺ) ki silver ring ki mohar par kya likha tha?',
          urdu: 'رسول اللہ ﷺ کی مبارک چاندی کی مہر پر کیا تحریر تھا؟'
        },
        options: {
          english: ['Muhammad Rasul Allah', 'La Ilaha Illallah', 'Allahu Akbar', 'Al-Hamdulillah'],
          hinglish: ['Muhammad Rasul Allah', 'La Ilaha Illallah', 'Allahu Akbar', 'Al-Hamdulillah'],
          urdu: ['محمد رسول الله', 'لا إله إلا الله', 'الله أكبر', 'الحمد لله']
        },
        correctIndex: 0,
        explanation: {
          english: 'The ring had "Muhammad Rasul Allah" engraved on three lines.',
          hinglish: 'Muhammad Rasul Allah likha tha.',
          urdu: 'محمد رسول اللہ کندہ تھا۔'
        }
      }
    ]
  },

  // MODULE 28
  {
    id: 'seerah-28',
    chapterNumber: 28,
    period: 'Module 28 • 8 AH (630 CE) • Conquest of Makkah',
    title: {
      english: '28. Conquest of Makkah (Fath Makkah): Cleansing Ka\'bah & Universal Amnesty',
      hinglish: '28. Fath Makkah (8 AH): Ka\'bah Se Buton Ka Khatma Aur Aam Maafi (Amnesty)',
      urdu: '۲۸. فتحِ مکہ (۸ھ)، کعبۃ اللہ کی بتوں سے پاکی اور "تم پر کوئی ملامت نہیں" کی عالمگیر معافی'
    },
    arabicTitle: 'فتح مكة المكرمة وتطهير الكعبة والتسامح النبوي العظيم',
    icon: '🗝️',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 28: The Conquest of Makkah',
    summary: {
      english: 'Quraysh breached the Treaty of Hudaybiyyah by attacking Banu Khuza\'ah. The Prophet marched with 10,000 soldiers, conquered Makkah without bloodshed, smashed 360 idols inside the Ka\'bah, and granted absolute amnesty to his former persecutors.',
      hinglish: 'Quraysh ne Treaty toda. Nabi (ﷺ) 10,000 Musalmanon ke sath Makkah pahuche. Bina khoon bahaye Fath Makkah hua. Ka\'bah ke 360 But tode aur Makkah ke dushmanon ko Aam Maafi di.',
      urdu: 'قریش نے صلح حدیبیہ کا معاہدہ توڑا۔ آپ ۱۰ ہزار لشکر کے ساتھ مکہ میں داخل ہوئے۔ بغیر خون خرابے کے مکہ فتح ہوا، ۳۶۰ بت توڑے گئے اور تمام دشمنوں کو عالمگیر معافی کا تحفہ ملا۔'
    },
    fullStory: {
      english: `In 8 AH (630 CE), Banu Bakr (allied with Quraysh) launched a night attack on Banu Khuza'ah (allied with Muslims) inside the sacred sanctuary, breaching the Treaty of Hudaybiyyah. Abu Sufyan rushed to Madinah to renew the treaty, but the Prophet refused.

On 10th Ramadan 8 AH, Prophet Muhammad (ﷺ) marched towards Makkah with **10,000 saintly warriors**. Camped at Marr al-Zahran, the massive ring of Muslim campfires terrified Makkans. Abu Sufyan converted to Islam that night.

The Prophet entered Makkah on 20th Ramadan, his head bowed so low in humility upon his camel Qaswa that his beard touched his saddle. He proclaimed: *"Whoever enters Abu Sufyan's house is safe; whoever locks his door is safe; whoever enters the Sacred Mosque is safe!"*

Makkah was liberated without bloodshed. The Prophet approached the Ka'bah, pointing his staff at the **360 idols** surrounding it while reciting: *"Truth has come and falsehood has vanished; indeed falsehood is ever bound to vanish!"* (17:81). The idols fell flat on their faces.

Then, gathering the trembling leaders of Quraysh who had tortured, boycotted, and driven him out, he asked: *"O Quraysh! What do you think I am going to do with you?"* They replied: *"Good! You are a noble brother, son of a noble brother!"* The Prophet declared with unmatched mercy: **"I say to you as Yusuf said to his brothers: 'No blame upon you today!' Go, for you are all free (Al-Tulaqa)!"**`,
      hinglish: `Quraysh ne Treaty tod diya. 10 Ramzan 8 AH ko Nabi (ﷺ) **10,000 fauj** ke sath Makkah pahuche. Abu Sufyan Musalman hue. Bina khoon bahaye Makkah Fateh hua. Nabi (ﷺ) ne **360 But (Idols)** ko chob se giraya aur Surah Isra ki aayat padhi. Makkah ke sardaaron ko **"Go! You are free!" (Aam Maafi)** de kar duniya ko sabse bada Maafi ka sabak diya.`,
      urdu: `قریش نے معاہدہ توڑ دیا۔ ۱۰ رمضان ۸ھ کو آپ ﷺ **۱۰,۰۰۰ صحابہ** کے ساتھ مکہ میں داخل ہوئے۔ بغیر کسی خون ریزی کے مکہ فتح ہوا۔ آپ نے کعبہ کے **۳۶۰ بتوں** کو گرا کر حق کا نعرہ بلند کیا۔ قریشیوں کو تلملا تا دیکھ کر فرمایا: **"جاؤ تم سب آزاد ہو!"** اور عالمگیر عفو و درگزر کا مثال قائم کی۔`
    },
    keyTakeaways: {
      english: [
        'True victory brings supreme humility (bowing low on camel), not arrogant military parades.',
        'Prophet Muhammad (ﷺ)\'s general amnesty is the greatest act of forgiveness in human history.',
        'Idolatry and falsehood are fragile; truth ultimately prevails.'
      ],
      hinglish: [
        'Jeet ke baad takabbur nahi balki aazizi aur shukr karna chahiye.',
        'Makkah ki Aam Maafi (Amnesty) insani tareekh ka sabse bada Maafi ka kaam hai.',
        'Jhoot aakhir kar khatam ho jata hai.'
      ],
      urdu: [
        'سچی فتح تکبر کی بجائے کمالِ عاجزی اور شکر الٰہی لاتی ہے۔',
        'مکہ میں عام معافی کی مثال پوری انسانی تاریخ میں بے نظیر ہے۔',
        'باطل مٹنے ہی کے لیے ہے، حق ہمیشہ غالب رہتا ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا',
      reference: 'Surah Al-Isra 17:81',
      translation: {
        english: '"And say: Truth has come, and falsehood has departed. Indeed is falsehood, [by nature], ever bound to depart."',
        hinglish: '"Aur kaho: Haq aa gaya aur jhoot mit gaya, beshak jhoot mitne hi waala hai..."',
        urdu: '"اور فرما دیجیے: حق آ گیا اور باطل مٹ گیا، بیشک باطل مٹنے ہی والا تھا..."'
      }
    },
    test: [
      {
        id: 'q28-1',
        question: {
          english: 'How many Muslim soldiers marched with Prophet Muhammad (ﷺ) for the Conquest of Makkah?',
          hinglish: 'Fath Makkah ke liye Nabi (ﷺ) ke saath kitni Musalman fauj thi?',
          urdu: 'فتحِ مکہ کے موقع پر آپ ﷺ کے ساتھ کتنے مسلم مجاہدین کا لشکر تھا؟'
        },
        options: {
          english: ['10,000 Soldiers', '3,000 Soldiers', '1,400 Soldiers', '30,000 Soldiers'],
          hinglish: ['10,000 Sipahi', '3,000 Sipahi', '1,400 Sipahi', '30,000 Sipahi'],
          urdu: ['۱۰,۰۰۰ مسلم مجاہدین', '۳,۰۰۰ مجاہدین', '۱,۴۰۰ مجاہدین', '۳۰,۰۰۰ مجاہدین']
        },
        correctIndex: 0,
        explanation: {
          english: '10,000 companions marched to liberate Makkah.',
          hinglish: '10,000 Sahaba the.',
          urdu: '۱۰,۰۰۰ صحابہ کا لشکر تھا۔'
        }
      },
      {
        id: 'q28-2',
        question: {
          english: 'How many idols surrounding the Ka\'bah were smashed during the Conquest of Makkah?',
          hinglish: 'Ka\'bah ke charon taraf kitne But (Idols) the jinhe Fath Makkah par toya gaya?',
          urdu: 'فتحِ مکہ کے دن کعبۃ اللہ کے گرد قائم کتنے بتوں کو پاش پاش کیا گیا؟'
        },
        options: {
          english: ['360 Idols', '100 Idols', '500 Idols', '70 Idols'],
          hinglish: ['360 But', '100 But', '500 But', '70 But'],
          urdu: ['۳۶۰ بت', '۱۰۰ بت', '۵۰۰ بت', '۷۰ بت']
        },
        correctIndex: 0,
        explanation: {
          english: '360 idols were cleared from the Sacred Mosque.',
          hinglish: '360 But the.',
          urdu: '۳۶۰ بتوں کو گرایا گیا۔'
        }
      },
      {
        id: 'q28-3',
        question: {
          english: 'What words did Prophet Muhammad (ﷺ) utter to grant universal freedom to Quraysh after capturing Makkah?',
          hinglish: 'Quraysh ko Maafi dete hue Nabi (ﷺ) ne kya alfaaz kahe the?',
          urdu: 'فتح کے بعد آپ ﷺ نے مکہ کے دشمنوں کو معاف فرماتے وقت کیا تاریخ ساز الفاظ ارشاد فرمائے؟'
        },
        options: {
          english: ['"Go, for you are all free (Al-Tulaqa)!"', '"Pay heavy tax"', '"Leave Makkah in 3 days"', '"You are all prisoners"'],
          hinglish: ['"Go! Tum sab aazad ho!"', 'Tax do', 'Makkah chodo', 'Prisoners ho'],
          urdu: ['"جاؤ! تم سب آزاد ہو (الطُّلَقَاء)!"', 'ٹیکس ادا کرو', 'مکہ چھوڑ دو', 'تم سب قیدی ہو']
        },
        correctIndex: 0,
        explanation: {
          english: 'He granted them complete freedom and general amnesty.',
          hinglish: 'Tum sab aazad ho kaha.',
          urdu: 'جاؤ تم سب آزاد ہو ارشاد فرمایا۔'
        }
      }
    ]
  },

  // MODULE 29
  {
    id: 'seerah-29',
    chapterNumber: 29,
    period: 'Module 29 • 8 - 9 AH (630 - 631 CE) • Hunayn & Tabuk',
    title: {
      english: '29. Battle of Hunayn, Tabuk Expedition & The Year of Delegations (Aam al-Wufud)',
      hinglish: '29. Ghazwat Hunayn, Tabuk Ka Hardship Safar Aur Aam al-Wufud (Qabail Ka Aana)',
      urdu: '۲۹. غزوۂ حنین، غزوۂ تبوک (جیوش العسرۃ) اور عام الوفود (قبائل کی دربارِ رسالت میں آمد)'
    },
    arabicTitle: 'غزوة حنين وغزوة تبوك وعام الوفود',
    icon: '🚩',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 29: Hunayn, Tabuk & Delegations',
    summary: {
      english: 'Overcoming initial pride at Hunayn through divine steadfastness, followed by the grueling 300-mile Tabuk Expedition in intense heat against Byzantine forces, leading to Arabia\'s total submission in the Year of Delegations.',
      hinglish: 'Hunayn mein 12,000 ki taqdad par ghurur toota aur Jeet hui. Phir Tabuk ka 300 mile sakht garam safar. 9 AH mein poore Arab se Qabail ne Madinah aakar Islam qabool kiya (Aam al-Wufud).',
      urdu: 'غزوۂ حنین میں تعداد پر فخر کا سبق، پھر شدید گرمی میں ۳۰۰ میل پر مشتمل غزوۂ تبوک کا کٹھن سفر، اور ۹ھ میں تمام عرب کے وفود کا مدینہ آ کر قبولِ اسلام (عام الوفود)۔'
    },
    fullStory: {
      english: `Shortly after Makkah's conquest in 8 AH, the fierce tribes of Hawazin and Thaqif gathered 20,000 men at the valley of **Hunayn**. The Muslim army numbered **12,000 fighters** for the first time. Proud of their numbers, some whispered: *"We will not be defeated today due to small numbers!"*

Allah allowed a temporary setback: Hawazin archers ambushed Muslims in narrow mountain passes, causing a panic retreat. Prophet Muhammad (ﷺ) stood steadfast on his white mule, calling out fearlessly: **"I am the Prophet, no lie! I am the son of Abdul-Muttalib!"** Abbas (RA) boomed his voice to rally the companions. The Muslims regrouped, crushed Hawazin, and secured massive spoils.

In Rajab 9 AH (630 CE), rumors arrived that Byzantine Emperor Heraclius was mobilizing a massive army to invade Arabia. The Prophet called for the **Tabuk Expedition** during scorching summer heat and famine (*Jaysh al-'Usrah* - Army of Hardship). Abu Bakr (RA) donated 100% of his wealth, Uthman (RA) equipped one-third of the entire army with 900 camels and 100 horses! The Muslim army of 30,000 marched 300 miles to Tabuk. Terrified by Muslim resolve, the Roman forces fled without fighting.

Following Tabuk in 9 AH (**Aam al-Wufud - Year of Delegations**), tribal delegations from every corner of Arabia flooded Madinah to pledge allegiance to Prophet Muhammad (ﷺ), uniting the entire Arabian Peninsula under Tawheed!`,
      hinglish: `**Hunayn** mein 12,000 Musalmanon ne apni taqdad par ghamand kiya to shuru mein ambush hua, lekin Nabi (ﷺ) ne dath kar pukaara: *"Main Nabi hun, koi jhoot nahi!"* aur jeet hui. Phir 9 AH mein garam dhoop mein **Tabuk** ka 300 mile safar hua. Abu Bakr (RA) ne poora maal diya, Uthman (RA) ne 900 oont diye. Roman army darr kar bhaag gayi. Phir **Aam al-Wufud** mein poore Arab ne Islam qabool kiya.`,
      urdu: `غزوہ **حنین** میں ۱۲ ہزار کی تعداد پر غرور ٹوٹا۔ آپ ﷺ نے خچر پر کھڑے ہو کر للکارا اور فتح حاصل کی۔ رجب ۹ھ میں شدید گرمی میں **غزوہ تبوک** کا ۳۰۰ میل سفر برپا ہوا جسے **جیوش العسرۃ** کہا گیا۔ حضرت ابو بکر رض نے پورا مال دے دیا۔ رومن فوج خوفزدہ ہو کر بھاگ گئی۔ ۹ھ **عام الوفود** میں پورے عرب نے اسلام قبول کر لیا۔`
    },
    keyTakeaways: {
      english: [
        'Numbers and material strength without humility before Allah lead to temporary failure.',
        'Abu Bakr (RA)\'s 100% donation and Uthman (RA)\'s generosity for Tabuk exemplify ultimate sacrifice.',
        'The Year of Delegations fulfilled the divine promise of crowds entering Islam en masse (Surah An-Nasr).'
      ],
      hinglish: [
        'Fauj ki taqdad par ghamand nahi karna chahiye.',
        'Abu Bakr (RA) ne 100% aur Uthman (RA) ne aadhah lashkar tayyar karke azeem misal di.',
        'Surah An-Nasr ka waada poora hua aur poora Arab Musalman bana.'
      ],
      urdu: [
        'تعداد یا سامانِ حرب پر تکیہ اللہ کے ہاں نا پسندیدہ ہے۔',
        'حضرت ابوبکر صدیق رض کا ۱۰۰ فیصد اور حضرت عثمان غنی رض کا عظیم خرچ اخلاص کی معراج ہے۔',
        'سورۃ النصر کی بشارت کے مطابق دربارِ رسالت میں جوق در جوق قومیں اسلام میں داخل ہوئیں۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
      reference: 'Surah An-Nasr 110:1-2',
      translation: {
        english: '"When the victory of Allah has come and the conquest, and you see the people entering into the religion of Allah in multitudes..."',
        hinglish: '"Jab Allah ki madad aur fateh aa jaye aur tum logon ko giroh ke giroh Deen mein aate dekho..."',
        urdu: '"جب اللہ کی نصرت اور فتح آ پہنچے اور آپ لوگوں کو جوق در جوق اللہ کے دین میں داخل ہوتے دیکھ لیں..."'
      }
    },
    test: [
      {
        id: 'q29-1',
        question: {
          english: 'How much of his total worldly wealth did Hazrat Abu Bakr (RA) donate for the Tabuk Expedition?',
          hinglish: 'Ghazwat Tabuk ke liye Hazrat Abu Bakr (RA) ne apna kitna maal Sadqah kar diya tha?',
          urdu: 'غزوہ تبوک (جیوش العسرۃ) کے لیے حضرت ابو بکر صدیق رض نے اپنا کتنا مال صدقہ فرمایا؟'
        },
        options: {
          english: ['100% (Everything he owned)', '50%', '33%', '10%'],
          hinglish: ['100% (Sab kuch)', '50%', '33%', '10%'],
          urdu: ['۱۰۰ فیصد (اپنا پورا اثاثہ)', '۵۰ فیصد', '۳۳ فیصد', '۱۰ فیصد']
        },
        correctIndex: 0,
        explanation: {
          english: 'Abu Bakr (RA) brought 100% of his possessions, leaving Allah and His Messenger for his family.',
          hinglish: 'Pura 100% maal de diya tha.',
          urdu: 'اپنا ۱۰۰ فیصد پورا مال پیش کر دیا۔'
        }
      },
      {
        id: 'q29-2',
        question: {
          english: 'What is the 9th year of Hijrah called in Islamic history due to tribal leaders visiting Madinah?',
          hinglish: '9 AH ko Islamic History mein poore Arab ke delegates ke aane par kya kehte hain?',
          urdu: '۹ھ کو مدینہ منورہ میں قبائل کے وفود کی آمد کی بنا پر کیا نام دیا جاتا ہے؟'
        },
        options: {
          english: ['Aam al-Wufud (Year of Delegations)', 'Aam al-Huzn', 'Aam al-Fil', 'Aam al-Fath'],
          hinglish: ['Aam al-Wufud (Year of Delegations)', 'Aam al-Huzn', 'Aam al-Fil', 'Aam al-Fath'],
          urdu: ['عام الوفود (وفود کا سال)', 'عام الحزن', 'عام الفیل', 'عام الفتح']
        },
        correctIndex: 0,
        explanation: {
          english: 'It was known as Aam al-Wufud.',
          hinglish: 'Aam al-Wufud kehte hain.',
          urdu: 'عام الوفود کہا جاتا ہے۔'
        }
      },
      {
        id: 'q29-3',
        question: {
          english: 'Which super-power empire was the Tabuk Expedition directed against in the North?',
          hinglish: 'Tabuk ki Jung kis super-power Empire ke khilaf thi?',
          urdu: 'غزوہ تبوک کی مہم شمالی سرحد پر کس عالمی سپر پاور کے خلاف تھی؟'
        },
        options: {
          english: ['Byzantine Empire (Romans)', 'Persian Empire', 'Egyptian Empire', 'Abyssinian Empire'],
          hinglish: ['Byzantine (Romans)', 'Persian', 'Egyptian', 'Abyssinian'],
          urdu: ['رومی سلطنت (بزنطی)', 'فارسی سلطنت', 'مصری سلطنت', 'حبشی سلطنت']
        },
        correctIndex: 0,
        explanation: {
          english: 'It was directed against the Roman/Byzantine forces.',
          hinglish: 'Roman Empire ke khilaf thi.',
          urdu: 'رومی سلطنت کے خلاف تھی'
        }
      }
    ]
  },

  // MODULE 30
  {
    id: 'seerah-30',
    chapterNumber: 30,
    period: 'Module 30 • 10 - 11 AH (632 CE) • Farewell Hajj & Departure',
    title: {
      english: '30. The Farewell Pilgrimage (Hajjat al-Wada\'), Final Sermon & Departure to Ar-Rafiq al-A\'la',
      hinglish: '30. Hajjat al-Wada\' (Aakhri Hajj), Khutbah-e-Arafat Aur Rafiq al-A\'la Ki Taraf Safar',
      urdu: '۳۰. حجۃ الوداع (۱۰ھ)، خطبۂ عرفات، تکمیلِ دین اور رفیقِ اعلیٰ کی جانب کمالِ رحلت'
    },
    arabicTitle: 'حجة الوداع والخطبة الخالدة اليوم أكملت لكم دينكم والرفيق الأعلى',
    icon: '👑',
    sealedNectarRef: 'Ar-Raheeq Al-Makhtum • Section 30: Farewell Pilgrimage & Departure',
    summary: {
      english: 'In 10 AH, the Prophet led 124,000 companions in Hajj, delivering the legendary Universal Charter of Human Rights at Arafat. Verse of Completion was revealed. On 12th Rabi\' al-Awwal 11 AH, he chose the Highest Companion (Ar-Rafiq al-A\'la).',
      hinglish: '10 AH mein 124,000 Sahaba ke sath Aakhri Hajj. Arafat par Human Rights ka mashhoor Khutbah. Qur\'an ne Deen ki takmeel ka ailan kiya. 12 Rabi\' al-Awwal 11 AH ko Nabi (ﷺ) ka Rafiq al-A\'la ki taraf wafat.',
      urdu: '۱۰ھ میں ۱۲۴,۰۰۰ صحابہ کے ساتھ آخری حج۔ میدانِ عرفات میں حقوقِ انسانیت کا آفاقی خطبہ۔ دین کی تکمیل کا اعلان۔ ۱۲ ربیع الاول ۱۱ھ کو رفیقِ اعلیٰ کی جانب سفر۔'
    },
    fullStory: {
      english: `In Dhu al-Hijjah 10 AH (632 CE), Prophet Muhammad (ﷺ) performed his only Hajj after Hijrah, known as **Hajjat al-Wada' (The Farewell Pilgrimage)**, accompanied by **124,000 companions**.

On Friday, 9th Dhu al-Hijjah at Mount Arafat, seated on Qaswa, he delivered his historic **Farewell Sermon (Khutbat al-Wada')**—the definitive Charter of Human Rights:
- *"O People! Your blood, property, and honor are sacred until you meet your Lord!"*
- *"An Arab has no superiority over a non-Arab, nor a white person over a black person, except by Taqwa (piety)!"*
- *"Treat women with goodness, for they are your trusted partners!"*
- *"I leave behind two things; if you hold fast to them, you will never go astray: The Book of Allah and my Sunnah!"*

Then he asked: *"Have I conveyed the message?"* 124,000 voices thundered: *"We testify you have conveyed, fulfilled, and advised!"* Raising his finger to heaven, he repeated: **"O Allah, bear witness!"** Right then, Allah revealed: **"This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion."** (5:3).

In Safar 11 AH, he fell ill with a fever. Choosing to spend his last days in Aishah (RA)'s apartment, he instructed Abu Bakr (RA) to lead prayers. On Monday, 12th Rabi' al-Awwal 11 AH (June 8, 632 CE), pointing his finger upward, his final whispered words were: **"Allahumma Al-Rafiq Al-A'la!"** (O Allah, with the Highest Companion!). The light of the world departed, leaving behind an unshakeable legacy of Tawheed and Mercy for all creation.`,
      hinglish: `10 AH mein **124,000 Sahaba** ke sath **Hajjat al-Wada'** hua. Mount Arafat par Human Rights ka mashhoor **Khutbah** diya: *"Kisi Arabi ko Ajami par aur kisi gore ko kaale par koi taqraeeh nahi sivaaye Taqwa ke! Auraton ke sath achai karo!"* Phir Allah ne **"Aaj Maine tumhara Deen mukammal kar diya"** (Surah Ma'idah 5:3) nazil kiya. Peer 12 Rabi' al-Awwal 11 AH ko Aishah (RA) ke ghar **"Allahumma Al-Rafiq Al-A'la"** bolte hue Nabi (ﷺ) ka intiqal hua.`,
      urdu: `۱۰ھ میں **۱۲۴,۰۰۰ صحابہ** کے ساتھ **حجۃ الوداع** کا خطبہ برپا ہوا: *"کسی عربی کو عجمی پر اور کسی گورے کو کالے پر فوقیت نہیں سوائے تقویٰ کے! عورتوں سے حسنِ سلوک کرو!"* پھر آیتِ اکمال نازل ہوئی۔ ۱۲ ربیع الاول ۱۱ھ کو سیدہ عائشہ رض کے حجرے میں آخری الفاظ **"اللهم الرفيق الأعلى"** (اے اللہ! اعلیٰ ترین رفیق) ادا فرماتے ہوئے کائنات کے آفتاب غروب ہو گئے۔`
    },
    keyTakeaways: {
      english: [
        'The Farewell Sermon is the world\'s first universal charter of racial equality, sanctity of life, and women\'s rights.',
        'Islam is complete, perfect, and finalized—requiring no additions or subtractions.',
        'Love for Prophet Muhammad (ﷺ) means adhering strictly to the Qur\'an and Sunnah.'
      ],
      hinglish: [
        'Khutbah-e-Arafat ne racial equality aur auraton ke huqooq ki sabse badi misal di.',
        'Deen-e-Islam complete ho chuka hai.',
        'Nabi (ﷺ) ki asli muhabbat Qur\'an aur Sunnat par chalna hai.'
      ],
      urdu: [
        'خطبہ حجة الوداع نسلی مساوات اور حقوقِ نسواں کا عالمی ترین منشور ہے۔',
        'دینِ اسلام کی تکمیل ہو چکی ہے جس میں کسی کمی بیشی کی گنجائش نہیں۔',
        'حبِ رسول ﷺ کی حقیقی برہان قرآن و سنت کی مکمل پیروی کرنا ہے۔'
      ]
    },
    hadithOrVerse: {
      arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الإِسْلَامَ دِينًا',
      reference: 'Surah Al-Ma\'idah 5:3',
      translation: {
        english: '"This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as your religion."',
        hinglish: '"Aaj Maine tumhara Deen poora kar diya aur Apni naimat mukammal kar di aur Islam se raazi hua..."',
        urdu: '"آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا اور تم پر اپنی نعمت تمام کر دی اور تمہارے لیے اسلام کو بطور دین پسند کر لیا..."'
      }
    },
    test: [
      {
        id: 'q30-1',
        question: {
          english: 'How many companions performed the Farewell Pilgrimage (Hajjat al-Wada\') with Prophet Muhammad (ﷺ)?',
          hinglish: 'Hajjat al-Wada\' mein Nabi (ﷺ) ke saath kitne Sahaba shamil the?',
          urdu: 'حجۃ الوداع میں آپ ﷺ کے ساتھ کتنے صحابہ کرام نے حج ادا فرمایا تھا؟'
        },
        options: {
          english: ['124,000 Companions', '10,000 Companions', '50,000 Companions', '14,000 Companions'],
          hinglish: ['124,000 Sahaba', '10,000 Sahaba', '50,000 Sahaba', '14,000 Sahaba'],
          urdu: ['۱۲۴,۰۰۰ صحابہ کرام', '۱۰,۰۰۰ صحابہ', '۵۰,۰۰۰ صحابہ', '۱۴,۰۰۰ صحابہ']
        },
        correctIndex: 0,
        explanation: {
          english: 'Approximately 124,000 companions gathered at Arafat.',
          hinglish: '124,000 Sahaba the.',
          urdu: 'تقریباً ۱۲۴,۰۰۰ صحابہ شامل تھے۔'
        }
      },
      {
        id: 'q30-2',
        question: {
          english: 'Which verse was revealed on Mount Arafat declaring the final completion of the Islamic faith?',
          hinglish: 'Mount Arafat par Deen ki takmeel ka ailan karne waali konsi Aayat nazil hui thi?',
          urdu: 'میدانِ عرفات میں دین کی مکمل تکمیل کا اعلان کرنے والی کون سی آیتِ مبارکہ نازل ہوئی؟'
        },
        options: {
          english: ['Al-Yawma akmaltu lakum dinakum (Surah Al-Ma\'idah 5:3)', 'Surah Al-Nasr 110:1', 'Surah Al-Ikhlas 112:1', 'Ayat al-Kursi (2:255)'],
          hinglish: ['Al-Yawma akmaltu lakum dinakum (5:3)', 'Surah Al-Nasr', 'Surah Al-Ikhlas', 'Ayat al-Kursi'],
          urdu: ['الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ (سورۃ المائدہ ۵:۳)', 'سورۃ النصر', 'سورۃ الاخلاص', 'آیة الکرسی']
        },
        correctIndex: 0,
        explanation: {
          english: 'Surah Al-Ma\'idah 5:3 declared religion complete.',
          hinglish: 'Surah Ma\'idah 5:3 nazil hui thi.',
          urdu: 'سورۃ المائدہ ۵:۳ نازل کی گئی تھی۔'
        }
      },
      {
        id: 'q30-3',
        question: {
          english: 'What were the final spoken words of Prophet Muhammad (ﷺ) before his blessed departure?',
          hinglish: 'Wafat ke waqt Nabi (ﷺ) ke aakhri alfaaz kya the?',
          urdu: 'رحلتِ مبارکہ کے وقت نبی کریم ﷺ کی زبانِ مبارک سے ادا ہونے والے آخری الفظ کیا تھے؟'
        },
        options: {
          english: ['"Allahumma Al-Rafiq Al-A\'la!" (O Allah, with the Highest Companion!)', '"As-Salah, As-Salah!"', '"La ilaha illallah"', '"Ummati, Ummati!"'],
          hinglish: ['"Allahumma Al-Rafiq Al-A\'la!"', '"As-Salah, As-Salah!"', '"La ilaha illallah"', '"Ummati, Ummati!"'],
          urdu: ['"اللَّهُمَّ الرَّفِيقَ الأَعْلَى!" (اے اللہ! اعلیٰ ترین رفیق کے ساتھ!)', 'الصلاة الصلاة', 'لا إله إلا الله', 'أمتی أمتی']
        },
        correctIndex: 0,
        explanation: {
          english: 'His final words were "Allahumma Al-Rafiq Al-A\'la!"',
          hinglish: 'Allahumma Al-Rafiq Al-A\'la the.',
          urdu: 'آخری الفاظ "اللهم الرفيق الأعلى" تھے۔'
        }
      }
    ]
  }
];


