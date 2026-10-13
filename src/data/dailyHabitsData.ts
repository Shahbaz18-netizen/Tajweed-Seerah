export type HabitCategory = 'protection' | 'taharah' | 'eating' | 'character' | 'night' | 'sadaqah';

export type TimelinePhase = 'dawn' | 'morning' | 'day_work' | 'evening' | 'night';

export interface DivineReward {
  title: string;
  rewardPromise: string;
  hadithSnippet: string;
  estimatedTime: string;
}

export interface DailyHabitItem {
  id: string;
  category: HabitCategory;
  categoryLabel: string;
  timelinePhase: TimelinePhase;
  phaseLabel: string;
  phaseOrder: number;
  timeOfDayLabel: string;
  title: string;
  badge: string;
  divineReward: DivineReward;
  arabicDua?: string;
  transliteration?: string;
  englishMeaning?: string;
  hinglishMeaning?: string;
  hadithSource: string;
  whyItMatters: string;
  actionSteps: string[];
  revertEncouragement: string;
  mentorshipPrompt: string;
  frequency: 'daily' | 'each_meal' | 'morning_evening' | 'before_sleep';
}

export const TIMELINE_PHASES: { id: TimelinePhase; label: string; icon: string; timeSpan: string }[] = [
  { id: 'dawn', label: '1. Dawn & Waking (Fajr)', icon: '🌅', timeSpan: '5:00 AM - 7:00 AM' },
  { id: 'morning', label: '2. Morning Protection & Start', icon: '☀️', timeSpan: '7:00 AM - 11:00 AM' },
  { id: 'day_work', label: '3. Midday, Work & Character', icon: '💼', timeSpan: '11:00 AM - 5:00 PM' },
  { id: 'evening', label: '4. Dusk, Family & Gratitude', icon: '🌇', timeSpan: '5:00 PM - 8:30 PM' },
  { id: 'night', label: '5. Night Sanctuary & Peaceful Sleep', icon: '🌙', timeSpan: '8:30 PM - Bedtime' },
];

export const DAILY_HABITS_CATEGORIES: { id: HabitCategory; label: string; icon: string; count: number }[] = [
  { id: 'protection', label: 'Morning & Protection Dhikr', icon: '☀️', count: 3 },
  { id: 'taharah', label: 'Mindful Wudu & Purity', icon: '💧', count: 3 },
  { id: 'eating', label: 'Sunnah Eating & Drinking', icon: '🍽️', count: 2 },
  { id: 'character', label: 'Speech & Noble Character', icon: '🤝', count: 3 },
  { id: 'night', label: 'Night Routine & Peaceful Sleep', icon: '🌙', count: 2 },
  { id: 'sadaqah', label: 'Daily Kindness & Charity', icon: '🌿', count: 2 },
];

export const DAILY_HABITS_DATA: DailyHabitItem[] = [
  {
    id: 'waking-up',
    category: 'protection',
    categoryLabel: 'Morning & Protection Dhikr',
    timelinePhase: 'dawn',
    phaseLabel: 'Dawn & Waking',
    phaseOrder: 1,
    timeOfDayLabel: 'Right upon waking up',
    title: 'The Waking Gratitude Du’a',
    badge: 'Morning Sunnah',
    divineReward: {
      title: 'Spiritual Life Awakening',
      rewardPromise: 'Shields your soul from morning anxiety and reclaims immediate awareness of God before digital distractions.',
      hadithSnippet: '"He has revived us after our sleep, and to Him is our return."',
      estimatedTime: '5 seconds'
    },
    arabicDua: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: 'Al-ḥamdu lillāhillaḏī aḥyānā ba‘da مَا amātanā wa-ilayhin-nušūr',
    englishMeaning: 'All praise is for Allah who gave us life after giving us death (sleep), and to Him is the final return.',
    hinglishMeaning: 'Shukr hai us Allah ka jisne humein zinda kiya sula dene ke baad, aur Usi ki taraf wapas lautna hai.',
    hadithSource: 'Sahih al-Bukhari 6312',
    whyItMatters: 'Starts your day immediately with grateful consciousness rather than anxiety or screen addiction.',
    actionSteps: [
      'Sit up gently upon opening your eyes.',
      'Wipe the sleep from your face with both hands.',
      'Recite the du’a or whisper "Alhamdulillah" with sincere appreciation for another breath of life.'
    ],
    revertEncouragement: 'Even saying "Alhamdulillah" (All praise to God) right when you open your eyes sets a peaceful aura for your entire day.',
    mentorshipPrompt: 'Ask Ustadh: "How do I cultivate mindful focus in the morning when I wake up exhausted or late for work?"',
    frequency: 'morning_evening'
  },
  {
    id: 'siwak-hygiene',
    category: 'taharah',
    categoryLabel: 'Mindful Wudu & Purity',
    timelinePhase: 'dawn',
    phaseLabel: 'Dawn & Waking',
    phaseOrder: 2,
    timeOfDayLabel: 'First thing at the sink',
    title: 'Fresh Breath & Dental Sunnah (Miswak / Brush)',
    badge: 'Purity Sunnah',
    divineReward: {
      title: 'Double Purification',
      rewardPromise: 'Cleanses the mouth for recitation and earns direct pleasure from the Lord Almighty.',
      hadithSnippet: '"The Siwak cleanses the mouth and pleases the Lord."',
      estimatedTime: '1 minute'
    },
    hadithSource: 'Sahih al-Bukhari 887',
    whyItMatters: 'The Prophet ﷺ loved clean breath: "The Siwak cleanses the mouth and pleases the Lord."',
    actionSteps: [
      'Brush teeth or use a natural olive/peelu miswak before Salah or upon waking.',
      'Keep mouth smelling fresh, especially when standing for prayer or speaking with loved ones.'
    ],
    revertEncouragement: 'Islam was the first civilization in world history to make oral dental hygiene an act of religious worship and love for God.',
    mentorshipPrompt: 'Ask Ustadh: "What is the Sunnah way of holding and using the natural Miswak twig?"',
    frequency: 'daily'
  },
  {
    id: 'wudu-bismillah',
    category: 'taharah',
    categoryLabel: 'Mindful Wudu & Purity',
    timelinePhase: 'dawn',
    phaseLabel: 'Dawn & Waking',
    phaseOrder: 3,
    timeOfDayLabel: 'Before Fajr Prayer',
    title: 'The Calm Wudu (With Intention & Basmalah)',
    badge: 'Spiritual Wash',
    divineReward: {
      title: 'Washing of All Minor Sins',
      rewardPromise: 'With every drop of water dripping from your face, hands, and feet, your small daily faults and stress wash away completely.',
      hadithSnippet: '"Sins leave with the last drop of water."',
      estimatedTime: '2 minutes'
    },
    arabicDua: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillāh',
    englishMeaning: 'In the name of Allah.',
    hinglishMeaning: 'Allah ke naam se shuru.',
    hadithSource: 'Sunan Ibn Majah 399',
    whyItMatters: 'Wudu is not just physical hygiene; every drop of water falling from your limbs washes away small sins and daily stress.',
    actionSteps: [
      'Make quiet intention (niyyah) in your heart to purify yourself for Allah.',
      'Say "Bismillah" before beginning.',
      'Wash hands (3x), rinse mouth (3x), rinse nose gently (3x).',
      'Wash face from hairline to chin (3x).',
      'Wash arms including elbows, right then left (3x).',
      'Wipe wet hands over head once, and wipe inside/outside of ears.',
      'Wash feet up to ankles, right then left (3x).'
    ],
    revertEncouragement: 'Do not waste water! The Prophet ﷺ performed full wudu with just a small bowl of water (approx 1 pint / 500ml).',
    mentorshipPrompt: 'Ask Ustadh: "How do I perform wudu discreetly in an office or airport bathroom without making a mess?"',
    frequency: 'daily'
  },
  {
    id: 'wudu-shahadah-dua',
    category: 'taharah',
    categoryLabel: 'Mindful Wudu & Purity',
    timelinePhase: 'dawn',
    phaseLabel: 'Dawn & Waking',
    phaseOrder: 4,
    timeOfDayLabel: 'Right after finishing wudu',
    title: 'Du’a After Completing Wudu (8 Gates of Jannah)',
    badge: 'Jannah Key',
    divineReward: {
      title: 'All 8 Gates of Paradise Opened',
      rewardPromise: 'The Prophet ﷺ promised that all 8 doors of Jannah are opened wide for the believer who recites this testimony after wudu to enter from whichever they wish.',
      hadithSnippet: '"The 8 gates of Paradise are opened for him."',
      estimatedTime: '10 seconds'
    },
    arabicDua: 'أَشْهَدُ أَن لَّا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
    transliteration: 'Ašhadu an lā ilāha illallāhu waḥdahū lā šarīka lah, wa ašhadu anna Muḥammadan ‘abduhū wa rasūluh. Allāhummaj‘alnī minat-tawwābīna waj‘alnī minal-mutaṭahhirīn.',
    englishMeaning: 'I bear witness that there is no god but Allah alone with no partner, and Muhammad is His servant and messenger. O Allah, make me of those who constantly repent and make me of those who purify themselves.',
    hinglishMeaning: 'Main gawahi deta hoon ke Allah ke siva koi ma’bood nahi, aur Muhammad Uske bande aur Rasool hain. Ae Allah, mujhe tauba karne walon aur paak rahne walon mein shamil farma.',
    hadithSource: 'Jami` at-Tirmidhi 55',
    whyItMatters: 'A 10-second habit that opens the celestial gates of Paradise after each purification.',
    actionSteps: [
      'Step back calmly from the sink.',
      'Face towards the Qiblah if possible.',
      'Recite this beautiful affirmation of faith and humility.'
    ],
    revertEncouragement: 'Take pride in this—in just 10 seconds, you turn a bathroom wash into a celestial key for eternal Paradise.',
    mentorshipPrompt: 'Ask Ustadh: "Can we recite this du’a together in our live class so I get the flow and pronunciation exact?"',
    frequency: 'daily'
  },
  {
    id: 'ayat-al-kursi',
    category: 'protection',
    categoryLabel: 'Morning & Protection Dhikr',
    timelinePhase: 'morning',
    phaseLabel: 'Morning Protection',
    phaseOrder: 5,
    timeOfDayLabel: 'After Fajr & before leaving house',
    title: 'Ayat al-Kursi (The Throne Verse Shield)',
    badge: 'Divine Shield',
    divineReward: {
      title: 'An Angelic Guardian All Day',
      rewardPromise: 'Allah assigns a personal guarding angel to shield you from every harm, unseen evil, and spiritual distress until evening.',
      hadithSnippet: '"A guardian from Allah will remain with you."',
      estimatedTime: '25 seconds'
    },
    arabicDua: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...',
    transliteration: 'Allāhu lā ilāha illā huwal-ḥayyul-qayyūm...',
    englishMeaning: 'Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence...',
    hinglishMeaning: 'Allah, Uske siva koi ma’bood nahi, Woh hamesha zinda aur sab ko qayam rakhne wala hai...',
    hadithSource: 'Sahih al-Bukhari 2311',
    whyItMatters: 'The greatest verse in the entire Quran, placing you directly inside the protection of the Almighty.',
    actionSteps: [
      'Recite once after Fajr prayer.',
      'Recite once before leaving your doorstep for work or errands.',
      'Recite after every obligatory Salah for guarantee of entering Jannah.'
    ],
    revertEncouragement: 'Practice reading this line-by-line in your 1-on-1 session with your teacher until it flows effortlessly.',
    mentorshipPrompt: 'Ask Ustadh: "Can you listen to my Ayat al-Kursi recitation and verify my stops and makharij?"',
    frequency: 'morning_evening'
  },
  {
    id: 'morning-protection-3quls',
    category: 'protection',
    categoryLabel: 'Morning & Protection Dhikr',
    timelinePhase: 'morning',
    phaseLabel: 'Morning Protection',
    phaseOrder: 6,
    timeOfDayLabel: 'Early morning & before sunset',
    title: 'The 3 Quls Protection Shield (3x Each)',
    badge: 'Daily Armor',
    divineReward: {
      title: 'Sufficient Against Every Evil',
      rewardPromise: 'The Prophet ﷺ stated: "Recite them 3 times morning and evening—it will suffice you against EVERYTHING in harm, jealousy (hasad), and evil eye."',
      hadithSnippet: '"They will suffice you against everything."',
      estimatedTime: '45 seconds'
    },
    arabicDua: 'قُلْ هُوَ اللَّهُ أَحَدٌ • قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ • قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    transliteration: 'Surah Al-Ikhlas, Al-Falaq, An-Nas (3 times each)',
    englishMeaning: 'Reciting the 3 protector Surahs morning and evening suffices you against every unseen harm, envy, and evil eye.',
    hinglishMeaning: 'Subah aur shaam 3 martaba Ikhlas, Falaq aur Nas padhna har tarah ke shar, hasad aur nazar-e-bad se bachata hai.',
    hadithSource: 'Sunan Abi Dawud 5082',
    whyItMatters: 'A complete spiritual detox from negative energy, envy from others, and toxic self-doubt.',
    actionSteps: [
      'Recite Surah Al-Ikhlas, Al-Falaq, and An-Nas three times after Fajr.',
      'Recite three times after Asr / Maghrib before dusk.',
      'Cup hands together, blow gently with dry breath, and wipe over your body.'
    ],
    revertEncouragement: 'These 3 short Surahs form an impenetrable spiritual armor that you carry anywhere you go.',
    mentorshipPrompt: 'Ask Ustadh: "How do I maintain concentration and avoid rushing when reciting the 3 Quls 3 times?"',
    frequency: 'morning_evening'
  },
  {
    id: 'smiling-salam',
    category: 'character',
    categoryLabel: 'Speech & Noble Character',
    timelinePhase: 'day_work',
    phaseLabel: 'Midday & Work',
    phaseOrder: 7,
    timeOfDayLabel: 'Entering office, home, or stores',
    title: 'Spreading Salam & Smiling (Effortless Sadaqah)',
    badge: 'Heart Connector',
    divineReward: {
      title: 'Counted as Financial Gold Charity',
      rewardPromise: 'Offering a sincere smile and spreading peace counts as financial charity in your book of deeds without spending a single dollar.',
      hadithSnippet: '"Smiling in the face of your brother is charity (sadaqah)."',
      estimatedTime: '1 second'
    },
    arabicDua: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ',
    transliteration: 'As-salāmu ‘alaykum wa raḥmatullāhi wa barakātuh',
    englishMeaning: 'May peace, mercy, and blessings of Allah be upon you.',
    hinglishMeaning: 'Aap par salamati, Allah ki rehmat aur barkatein hon.',
    hadithSource: 'Jami` at-Tirmidhi 1956',
    whyItMatters: 'Disarms tension, melts prejudice, and builds genuine human warmth.',
    actionSteps: [
      'Greet first when entering home, mosque, or workspace.',
      'Make pleasant eye contact and offer a warm, genuine smile.',
      'Greet both those you know and those you do not know.'
    ],
    revertEncouragement: 'As a new Muslim or practicing adult, greeting fellow humans with unconditional kindness is your best living representation of Islam.',
    mentorshipPrompt: 'Ask Ustadh: "How should I respond to greetings from non-Muslim colleagues with warmth and adab?"',
    frequency: 'daily'
  },
  {
    id: 'eating-sunnah',
    category: 'eating',
    categoryLabel: 'Sunnah Eating & Drinking',
    timelinePhase: 'day_work',
    phaseLabel: 'Midday & Work',
    phaseOrder: 8,
    timeOfDayLabel: 'Breakfast, lunch, and dinner',
    title: 'Mindful Table Manners: Right Hand & Bismillah',
    badge: 'Table Etiquette',
    divineReward: {
      title: 'Infusing Barakah into Nourishment',
      rewardPromise: 'Prevents Shaytan from sharing your meal, prevents overeating, and turns routine biological fuel into continuous worship.',
      hadithSnippet: '"Mention the name of Allah, eat with your right hand."',
      estimatedTime: 'During meal'
    },
    arabicDua: 'بِسْمِ اللَّهِ وَعَلَىٰ بَرَكَةِ اللَّهِ',
    transliteration: 'Bismillāhi wa ‘alā barakatillāh',
    englishMeaning: 'In the name of Allah and upon the blessings of Allah.',
    hinglishMeaning: 'Allah ke naam se aur Allah ki barkat par.',
    hadithSource: 'Sahih Muslim 2017',
    whyItMatters: 'Turns biological necessity into continuous gratitude and keeps food blessed (barakah).',
    actionSteps: [
      'Say "Bismillah" before the very first bite.',
      'Eat with your right hand.',
      'Eat from what is directly in front of you.',
      'Do not criticize food—if you like it eat it, if not leave it politely without complaining.'
    ],
    revertEncouragement: 'If you ever forget Bismillah at the start, say: "Bismillahi awwalahu wa akhirahu" (In the name of Allah at its beginning and end).',
    mentorshipPrompt: 'Ask Ustadh: "What is the Sunnah advice regarding portions and stopping before feeling sluggish?"',
    frequency: 'each_meal'
  },
  {
    id: 'guarding-tongue',
    category: 'character',
    categoryLabel: 'Speech & Noble Character',
    timelinePhase: 'day_work',
    phaseLabel: 'Midday & Work',
    phaseOrder: 9,
    timeOfDayLabel: 'During debates, meetings, or irritation',
    title: 'Guarding the Tongue & Managing Anger',
    badge: 'Dignified Speech',
    divineReward: {
      title: 'A Palace in the Highest Part of Jannah',
      rewardPromise: 'The Prophet ﷺ guaranteed a palace in the highest gardens of Jannah for whoever leaves an argument even when they are right.',
      hadithSnippet: '"Speak good or remain silent."',
      estimatedTime: 'Moment of restraint'
    },
    arabicDua: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    transliteration: 'A‘ūḏu billāhi minaš-šayṭānir-rajīm',
    englishMeaning: 'I seek refuge in Allah from the accursed Satan.',
    hinglishMeaning: 'Main shaitaan mardood se Allah ki panaah maangta hoon.',
    hadithSource: 'Sahih al-Bukhari 6116',
    whyItMatters: '"Whoever believes in Allah and the Last Day, let him speak good or remain silent."',
    actionSteps: [
      'When anger flares up, say "A’udhu billah..." immediately.',
      'If standing, sit down; if sitting, lie down; or make fresh wudu with cool water.',
      'Avoid backbiting (gheebah), office gossip, and unnecessary arguing.'
    ],
    revertEncouragement: 'True strength in Islam is not overpowering others in an argument, but controlling your own temper under pressure.',
    mentorshipPrompt: 'Ask Ustadh: "How do I hold my tongue when family members or coworkers provoke me?"',
    frequency: 'daily'
  },
  {
    id: 'daily-sadaqah',
    category: 'sadaqah',
    categoryLabel: 'Daily Kindness & Charity',
    timelinePhase: 'day_work',
    phaseLabel: 'Midday & Work',
    phaseOrder: 10,
    timeOfDayLabel: 'Anytime during the day',
    title: 'Daily Secret Kindness (Sadaqah Every Day)',
    badge: 'Heart Purification',
    divineReward: {
      title: 'Extinguishing Sins Like Water Extinguishes Fire',
      rewardPromise: 'Giving secret charity or removing an obstacle from someone’s path cools the anger of the Lord and wipes away faults.',
      hadithSnippet: '"Charity extinguishes sin as water extinguishes fire."',
      estimatedTime: '2 minutes'
    },
    hadithSource: 'Sahih al-Bukhari 2989',
    whyItMatters: 'Every Muslim is required to give charity every day the sun rises. Even helping someone carry groceries or removing trash from a walkway is sadaqah.',
    actionSteps: [
      'Give a small coin or dollar in charity secretly.',
      'Remove a stone, glass, or trash from a walkway.',
      'Help an elderly neighbor or speak a comforting word to someone feeling lonely.'
    ],
    revertEncouragement: 'Charity in Islam is not restricted to wealth—it is kindness in motion. A smile, a cup of water, a sincere prayer for a stranger are all gold.',
    mentorshipPrompt: 'Ask Ustadh: "What are the most impactful daily micro-sadaqahs that a busy professional can automate?"',
    frequency: 'daily'
  },
  {
    id: 'eating-alhamdulillah',
    category: 'eating',
    categoryLabel: 'Sunnah Eating & Drinking',
    timelinePhase: 'evening',
    phaseLabel: 'Dusk & Evening',
    phaseOrder: 11,
    timeOfDayLabel: 'After concluding your meal',
    title: 'Post-Meal Praise (Forgiveness of Minor Sins)',
    badge: 'Gratitude Seal',
    divineReward: {
      title: 'Full Pardon of Past Minor Sins',
      rewardPromise: 'Whoever concludes their meal praising Allah with this du’a, their past minor sins are forgiven because they credited God for their sustenance.',
      hadithSnippet: '"His past sins are forgiven."',
      estimatedTime: '10 seconds'
    },
    arabicDua: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    transliteration: 'Al-ḥamdu lillāhillaḏī aṭ‘amanā wa saqānā wa ja‘alanā muslimīn',
    englishMeaning: 'Praise be to Allah who has fed us and given us drink and made us Muslims.',
    hinglishMeaning: 'Shukr hai Allah ka jisne humein khilaya, pilaya aur humein Musalman banaya.',
    hadithSource: 'Sunan Abi Dawud 3850',
    whyItMatters: 'Acknowledging that the food was provided by God, not by our own power.',
    actionSteps: [
      'Pause before leaving the dining table.',
      'Thank the cook/host, then recite this prayer.',
      'Lick your fingers or finish the plate so no blessing is discarded.'
    ],
    revertEncouragement: 'A gentle reminder of how blessed we are compared to millions who sleep hungry tonight.',
    mentorshipPrompt: 'Ask Ustadh: "What did the Prophet ﷺ do when he didn’t like a particular food?"',
    frequency: 'each_meal'
  },
  {
    id: 'honoring-parents',
    category: 'character',
    categoryLabel: 'Speech & Noble Character',
    timelinePhase: 'evening',
    phaseLabel: 'Dusk & Evening',
    phaseOrder: 12,
    timeOfDayLabel: 'Evening family check-in',
    title: 'Honoring Parents & Checking on Loved Ones',
    badge: 'Birr al-Walidayn',
    divineReward: {
      title: 'The Greatest Deed After Monotheism',
      rewardPromise: 'Gentle treatment and praying for parents extends life with barakah and opens the middle gate of Paradise (the highest entrance).',
      hadithSnippet: '"The pleasure of the Lord is in the pleasure of the parents."',
      estimatedTime: '5 minutes'
    },
    arabicDua: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transliteration: 'Rabbir-ḥamhumā kamā rabbayānī ṣaġīrā',
    englishMeaning: 'My Lord, have mercy upon them as they brought me up [when I was] small.',
    hinglishMeaning: 'Ae mere Rab, mere walidain par reham farma jaise unhone bachpan mein meri parwarish ki.',
    hadithSource: 'Surah Al-Isra 17:24',
    whyItMatters: 'In Islam, kindness to parents comes right after worship of Allah. Even for reverts whose parents are non-Muslim, maintaining love, gentleness, and respect is paramount.',
    actionSteps: [
      'Call or message your parents today with genuine affection.',
      'Speak in gentle tones, never rolling eyes or sighing ("Uff").',
      'Make this heartfelt du’a for their health and guidance.'
    ],
    revertEncouragement: 'Your transformation into a softer, more respectful, attentive son or daughter is the greatest testament to the beauty of Islam your family will ever see.',
    mentorshipPrompt: 'Ask Ustadh: "How do I maintain loving boundaries and deep respect with non-Muslim parents?"',
    frequency: 'daily'
  },
  {
    id: 'night-sleep-sunnah',
    category: 'night',
    categoryLabel: 'Night Routine & Peaceful Sleep',
    timelinePhase: 'night',
    phaseLabel: 'Night Sanctuary',
    phaseOrder: 13,
    timeOfDayLabel: 'Right before closing your eyes',
    title: 'The Prophetic Bedtime Sanctuary & Forgiving All',
    badge: 'Deep Rest',
    divineReward: {
      title: 'An Angel in Your Blanket All Night',
      rewardPromise: 'Whoever sleeps in a state of wudu and recitation, an angel stays inside their garments and prays: "O Allah, forgive Your servant, for he slept in purity."',
      hadithSnippet: '"An angel spends the night in his garments praying for him."',
      estimatedTime: '2 minutes'
    },
    arabicDua: 'بِاسْمِكَ رَبِّي وَضَعْتُ جَنبِي وَبِكَ أَرْفَعُهُ',
    transliteration: 'Bismika Rabbī waḍa‘tu janbī wa bika arfa‘uh',
    englishMeaning: 'In Your name, my Lord, I lay down my side, and by You I raise it up.',
    hinglishMeaning: 'Tere naam se ae mere Rab, maine apna pehlu zameen par rakha aur Tere hi sahare uthunga.',
    hadithSource: 'Sahih al-Bukhari 6320',
    whyItMatters: 'Falling asleep in the remembrance of Allah guarantees peace from nightmares and anxiety.',
    actionSteps: [
      'Make wudu before climbing into bed.',
      'Dust the bed 3 times.',
      'Lie down on your right side with right hand resting under your cheek.',
      'Empty your heart: forgive anyone who hurt you today so you sleep pure.'
    ],
    revertEncouragement: 'Sleep with zero resentment in your heart—when you forgive everyone before sleep, Allah envelops you in restful peace.',
    mentorshipPrompt: 'Ask Ustadh: "Can we practice the bedtime Azkar and Surah Al-Mulk habit together in our live session?"',
    frequency: 'before_sleep'
  }
];
