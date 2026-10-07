import type { ArticulationZone } from '../types';

export interface ComprehensiveMakhrajInfo {
  name: string;
  arabicName: string;
  zone: ArticulationZone;
  simpleExplanation: string;
  teacherExplanation: string;
  step1: string;
  step1Label: string;
  step2: string;
  step2Label: string;
  keyRule: string;
  step1Svg: string;
  step2Svg: string;
  makhrajSvg: string;
}

// Reusable SVG Generator for Articulation Diagrams
const generateMakhrajSvg = (targetArea: string, letterChar: string, label: string) => {
  let indicatorY = 120;
  let indicatorX = 170;
  let indicatorColor = '%23F59E0B'; // amber

  if (targetArea.includes('throat-upper')) { indicatorX = 175; indicatorY = 135; }
  else if (targetArea.includes('throat-middle')) { indicatorX = 165; indicatorY = 155; }
  else if (targetArea.includes('throat-lower')) { indicatorX = 155; indicatorY = 175; }
  else if (targetArea.includes('tongue-deep')) { indicatorX = 150; indicatorY = 100; }
  else if (targetArea.includes('tongue-middle')) { indicatorX = 125; indicatorY = 90; }
  else if (targetArea.includes('tongue-side')) { indicatorX = 115; indicatorY = 95; }
  else if (targetArea.includes('tongue-tip-roots')) { indicatorX = 85; indicatorY = 82; }
  else if (targetArea.includes('tongue-tip-edges')) { indicatorX = 72; indicatorY = 88; }
  else if (targetArea.includes('tongue-tip-lower')) { indicatorX = 75; indicatorY = 102; }
  else if (targetArea.includes('lips')) { indicatorX = 48; indicatorY = 92; }
  else if (targetArea.includes('jawf')) { indicatorX = 110; indicatorY = 110; }

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="100%" height="100%"><rect width="280" height="200" rx="14" fill="%23FFFBEB"/><path d="M 40 92 Q 42 60 70 50 Q 140 45 200 65 Q 240 85 240 160 Q 230 185 180 185 Q 160 185 145 155 Q 130 135 110 135 Q 70 135 48 115 Z" fill="%23FED7AA" opacity="0.45"/><path d="M 45 92 Q 80 90 120 95 Q 160 100 180 140 Q 185 170 155 180" stroke="%239A3412" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M 70 70 Q 120 70 170 85 Q 210 110 205 175" stroke="%23C2410C" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="${indicatorX}" cy="${indicatorY}" r="14" fill="${indicatorColor}" stroke="%2378350F" stroke-width="3"/><circle cx="${indicatorX}" cy="${indicatorY}" r="6" fill="%23FFFFFF"/><text x="${indicatorX}" y="${indicatorY - 18}" font-family="sans-serif" font-size="12" font-weight="bold" fill="%239A3412" text-anchor="middle">Makhraj (${letterChar})</text><text x="140" y="192" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23451A03" text-anchor="middle">${label}</text></svg>`;
};

const generateStep1Svg = (instruction: string, letter: string) => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%"><rect width="200" height="150" rx="12" fill="%23FFF1F2"/><ellipse cx="100" cy="75" rx="65" ry="38" fill="%23FECDD3" stroke="%23E11D48" stroke-width="3"/><path d="M 50 75 Q 100 45 150 75" stroke="%23E11D48" stroke-width="4" fill="none"/><circle cx="100" cy="75" r="16" fill="%23E11D48" opacity="0.85"/><text x="100" y="80" font-family="sans-serif" font-size="16" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">${letter}</text><text x="100" y="135" font-family="sans-serif" font-size="9" font-weight="bold" fill="%23881337" text-anchor="middle">${instruction}</text></svg>`;
};

const generateStep2Svg = (instruction: string, letter: string) => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="100%" height="100%"><rect width="200" height="150" rx="12" fill="%23F0FDF4"/><ellipse cx="100" cy="75" rx="65" ry="38" fill="%23BBF7D0" stroke="%2316A34A" stroke-width="3"/><path d="M 70 75 Q 100 95 130 75" stroke="%2316A34A" stroke-width="4" fill="none"/><path d="M 100 50 L 100 25 M 92 35 L 100 25 L 108 35" stroke="%23059669" stroke-width="3" fill="none"/><text x="100" y="82" font-family="sans-serif" font-size="20" font-weight="black" fill="%23166534" text-anchor="middle">${letter}</text><text x="100" y="135" font-family="sans-serif" font-size="9" font-weight="bold" fill="%2314532D" text-anchor="middle">${instruction}</text></svg>`;
};

// FULL 28-LETTER ACCURATE TAJWEED MAKHRAJ & PRONUNCIATION DATABASE
export const FULL_MAKHRAJ_DATABASE: Record<number, ComprehensiveMakhrajInfo> = {
  // 1. ALIF (ا)
  1: {
    name: 'Al-Jawf (Oral & Throat Cavity)',
    arabicName: 'الجوف (حرف مد)',
    zone: 'Empty Space',
    simpleExplanation: 'Sound originates smoothly from the open space of the throat and mouth without physical obstruction.',
    teacherExplanation: 'Alif is an unconstricted Madd vowel letter echoing from Al-Jawf, sustained for 2 Harakat naturally.',
    step1: 'Open mouth naturally with relaxed throat and jaw.',
    step1Label: 'Open oral cavity relaxed',
    step2: 'Release smooth voice air from deep chest through mouth.',
    step2Label: 'Sustain natural vowel (Alif)',
    keyRule: 'Sustained for 2 counts without nasalization (Ghunnah) or closing lips.',
    makhrajSvg: generateMakhrajSvg('jawf', 'ا', 'Open space of throat and mouth (Al-Jawf)'),
    step1Svg: generateStep1Svg('Open mouth relaxed', 'ا'),
    step2Svg: generateStep2Svg('Air echoes freely (Aa)', 'ا'),
  },

  // 2. BAA (ب)
  2: {
    name: 'Ash-Shafataan (Both Lips)',
    arabicName: 'الشفتان (انطباق الشفتين)',
    zone: 'Lips',
    simpleExplanation: 'Produced by pressing the wet inner portions of both lips firmly together, then releasing.',
    teacherExplanation: 'Produced by complete closure of both lips (Inbiqaq) followed by release. Has Qalqalah when saakin.',
    step1: 'Close both lips together softly and firmly.',
    step1Label: 'Press both lips together',
    step2: 'Release lips with a clear, popping sound "Baa".',
    step2Label: 'Release lips cleanly (Baa)',
    keyRule: 'Has Qalqalah (echoing bounce) when silent (بْ). Keep lips moist.',
    makhrajSvg: generateMakhrajSvg('lips', 'ب', 'Inner wet parts of both lips'),
    step1Svg: generateStep1Svg('Close both lips', 'ب'),
    step2Svg: generateStep2Svg('Pop lips release (Baa)', 'ب'),
  },

  // 3. TAA (ت)
  3: {
    name: 'Al-Nitiyyah (Tongue Tip & Teeth Roots)',
    arabicName: 'طرف اللسان مع أصول الثنايا العليا',
    zone: 'Tongue',
    simpleExplanation: 'Produced by placing the tip of the tongue against the roots of the upper two front teeth.',
    teacherExplanation: 'Tongue tip against upper incisor roots. Features Hams (whisper of breath) upon release.',
    step1: 'Touch tip of tongue behind upper front teeth roots.',
    step1Label: 'Tip on upper teeth roots',
    step2: 'Release tongue gently with a light puff of air "Ta".',
    step2Label: 'Release with soft puff (Ta)',
    keyRule: 'Light letter (Istifal) with soft breath friction (Hams). Do not over-hiss like "S".',
    makhrajSvg: generateMakhrajSvg('tongue-tip-roots', 'ت', 'Tongue tip against upper teeth roots'),
    step1Svg: generateStep1Svg('Tip touches teeth roots', 'ت'),
    step2Svg: generateStep2Svg('Light air release (Taa)', 'ت'),
  },

  // 4. THAA (ث)
  4: {
    name: 'Al-Lathwiyyah (Tongue Tip & Teeth Edges)',
    arabicName: 'طرف اللسان مع أطراف الثنايا العليا',
    zone: 'Tongue',
    simpleExplanation: 'Produced by touching the tip of the tongue to the biting edges of the upper two front teeth.',
    teacherExplanation: 'Tip of tongue slightly protruded against edges of upper incisors. Soft, breathy sound (Rikhawah & Hams).',
    step1: 'Place tongue tip gently against edges of upper teeth.',
    step1Label: 'Tip against upper teeth edges',
    step2: 'Blow air softly through teeth without biting to say "Thaa".',
    step2Label: 'Soft breathy flow (Thaa)',
    keyRule: 'Soft English "th" in "think". Never sound like "S" or "Z".',
    makhrajSvg: generateMakhrajSvg('tongue-tip-edges', 'ث', 'Tongue tip on edges of front teeth'),
    step1Svg: generateStep1Svg('Tip on teeth edges', 'ث'),
    step2Svg: generateStep2Svg('Soft flow of air (Thaa)', 'ث'),
  },

  // 5. JEEM (ج)
  5: {
    name: 'Wasat Al-Lisan (Middle of Tongue)',
    arabicName: 'وسط اللسان مع ما يحاذيه من الحنك الأعلى',
    zone: 'Tongue',
    simpleExplanation: 'Produced by pressing the middle of the tongue firmly against the roof of the mouth (hard palate).',
    teacherExplanation: 'Middle of tongue contacts hard palate completely (Shiddah). Strong voiced sound with Qalqalah when saakin.',
    step1: 'Raise and press middle of tongue firmly against hard palate.',
    step1Label: 'Middle tongue against palate',
    step2: 'Release tongue cleanly with strong voiced sound "Jeem".',
    step2Label: 'Crisp release (Jeem)',
    keyRule: 'Must be strong and crisp (Shiddah). Do not pronounce softly like French "J".',
    makhrajSvg: generateMakhrajSvg('tongue-middle', 'ج', 'Middle of tongue against roof of mouth'),
    step1Svg: generateStep1Svg('Middle tongue on palate', 'ج'),
    step2Svg: generateStep2Svg('Strong clean release (Jeem)', 'ج'),
  },

  // 6. HAA (ح) — FIXED ACCURATE THROAT GUIDE
  6: {
    name: 'Wasat Al-Halq (Middle of Throat)',
    arabicName: 'وسط الحلق (لسان المزمار)',
    zone: 'Throat',
    simpleExplanation: 'Produced from the middle of the throat by gently contracting the pharynx and epiglottis.',
    teacherExplanation: 'Middle of throat (Wasat Al-Halq). Pure breath friction (Hams & Rikhawah) without raspy phlegm sound.',
    step1: 'Gently tighten the middle of throat (near Adam\'s apple).',
    step1Label: 'Contract middle of throat',
    step2: 'Exhale smoothly with a clean, airy friction sound "Haa".',
    step2Label: 'Crisp airy friction (Haa)',
    keyRule: 'Pure whistling breath friction (Hams). Clearer and sharper than deep (هـ) and smoother than raspy (خ).',
    makhrajSvg: generateMakhrajSvg('throat-middle', 'ح', 'Middle of throat (Wasat Al-Halq)'),
    step1Svg: generateStep1Svg('Narrow middle throat', 'ح'),
    step2Svg: generateStep2Svg('Clean breath friction (Haa)', 'ح'),
  },

  // 7. KHAA (خ)
  7: {
    name: 'Adna Al-Halq (Top of Throat)',
    arabicName: 'أدنى الحلق مع أصل اللسان',
    zone: 'Throat',
    simpleExplanation: 'Produced from the top of the throat closest to the back of the mouth, with a heavy scraping sound.',
    teacherExplanation: 'Upper throat near uvula (Adna Al-Halq). Heavy letter (Isti\'la & Tafkheem) with friction (Rikhawah).',
    step1: 'Elevate the back of tongue near the top of throat.',
    step1Label: 'Back of tongue near top throat',
    step2: 'Exhale with full-mouthed heavy raspy sound "Khaa".',
    step2Label: 'Heavy raspy sound (Khaa)',
    keyRule: 'Always heavy (Tafkheem / full-mouth). Do not swallow the sound too deeply.',
    makhrajSvg: generateMakhrajSvg('throat-upper', 'خ', 'Top of throat closest to mouth'),
    step1Svg: generateStep1Svg('Raise back toward uvula', 'خ'),
    step2Svg: generateStep2Svg('Heavy friction sound (Khaa)', 'خ'),
  },

  // 8. DAAL (د)
  8: {
    name: 'Al-Nitiyyah (Tongue Tip & Teeth Roots)',
    arabicName: 'طرف اللسان مع أصول الثنايا العليا',
    zone: 'Tongue',
    simpleExplanation: 'Produced by pressing the tip of the tongue against the roots of the upper front teeth.',
    teacherExplanation: 'Light, voiced stopping sound (Jahr & Shiddah) with Qalqalah when saakin.',
    step1: 'Press tongue tip firmly against roots of upper teeth.',
    step1Label: 'Tip on upper teeth roots',
    step2: 'Release tongue cleanly to pronounce light "Daal".',
    step2Label: 'Clean light sound (Daal)',
    keyRule: 'Light sound (like "d" in "duck"). Has Qalqalah when silent (دْ). Never heavy.',
    makhrajSvg: generateMakhrajSvg('tongue-tip-roots', 'د', 'Tongue tip against upper teeth roots'),
    step1Svg: generateStep1Svg('Firm contact on roots', 'د'),
    step2Svg: generateStep2Svg('Crisp voice release (Daal)', 'د'),
  },

  // 9. ZHAAL (ذ)
  9: {
    name: 'Al-Lathwiyyah (Tongue Tip & Teeth Edges)',
    arabicName: 'طرف اللسان مع أطراف الثنايا العليا',
    zone: 'Tongue',
    simpleExplanation: 'Produced by placing the tip of the tongue against the edges of the upper front teeth with voice.',
    teacherExplanation: 'Voiced friction letter (Jahr & Rikhawah) like "th" in "this" or "father".',
    step1: 'Place tongue tip against upper teeth edges.',
    step1Label: 'Tip against teeth edges',
    step2: 'Release voiced humming sound through teeth "Zhaal".',
    step2Label: 'Voiced soft buzz (Zhaal)',
    keyRule: 'Light voiced "th" sound (like "that"). Do not turn into "Z".',
    makhrajSvg: generateMakhrajSvg('tongue-tip-edges', 'ذ', 'Tongue tip on upper teeth edges'),
    step1Svg: generateStep1Svg('Tip on teeth edges', 'ذ'),
    step2Svg: generateStep2Svg('Voiced soft sound (Zhaal)', 'ذ'),
  },

  // 10. RAA (ر)
  10: {
    name: 'Taraf Al-Lisan (Tongue Tip & Upper Palate)',
    arabicName: 'طرف اللسان مع ما يحاذيه من لثة الثنايا العليا',
    zone: 'Tongue',
    simpleExplanation: 'Produced by tapping the tip and back of the tongue against the gum ridge behind upper teeth.',
    teacherExplanation: 'Features Takreer (slight controlled trill) and Inhiraf (deflection of sound around sides). Heavy with Fathah/Dammah, light with Kasrah.',
    step1: 'Place tip of tongue close to upper gum ridge.',
    step1Label: 'Tip near upper gum ridge',
    step2: 'Allow a single light vibration/tap of the tongue "Raa".',
    step2Label: 'Single light tap (Raa)',
    keyRule: 'Do not roll the tongue excessively. Heavy with Fathah (رَ), light with Kasrah (رِ).',
    makhrajSvg: generateMakhrajSvg('tongue-tip-roots', 'ر', 'Tip and back of tongue on upper gums'),
    step1Svg: generateStep1Svg('Tip close to upper gums', 'ر'),
    step2Svg: generateStep2Svg('Single smooth tap (Raa)', 'ر'),
  },

  // 11. ZAY (ز)
  11: {
    name: 'Al-Asliyyah (Tongue Tip & Lower Teeth)',
    arabicName: 'طرف اللسان فوق الثنايا السفلى (حروف الصفير)',
    zone: 'Tongue',
    simpleExplanation: 'Produced by resting the tip of the tongue near the inner base of lower front teeth with a buzz.',
    teacherExplanation: 'Whistle letter (Safir) with voice (Jahr) and friction (Rikhawah).',
    step1: 'Place tongue tip right behind lower front teeth.',
    step1Label: 'Tip behind lower teeth',
    step2: 'Blow voiced buzzing air through teeth to say "Zay".',
    step2Label: 'Buzzing voice release (Zay)',
    keyRule: 'Has strong buzzing whistle sound (Safir). Sharp and light.',
    makhrajSvg: generateMakhrajSvg('tongue-tip-lower', 'ز', 'Tongue tip behind lower front teeth'),
    step1Svg: generateStep1Svg('Tip behind lower teeth', 'ز'),
    step2Svg: generateStep2Svg('Buzzing whistle (Zay)', 'ز'),
  },

  // 12. SEEN (س)
  12: {
    name: 'Al-Asliyyah (Tongue Tip & Lower Teeth)',
    arabicName: 'طرف اللسان فوق الثنايا السفلى (حروف الصفير)',
    zone: 'Tongue',
    simpleExplanation: 'Produced by placing tongue tip behind lower teeth, releasing a crisp whistling stream of air.',
    teacherExplanation: 'Light whistling letter (Safir) with breath friction (Hams & Rikhawah).',
    step1: 'Rest tongue tip gently behind lower front teeth.',
    step1Label: 'Tip behind lower teeth',
    step2: 'Blow clean unvoiced hissing air through teeth "Seen".',
    step2Label: 'Clear crisp hiss (Seen)',
    keyRule: 'Light whistling hiss (Safir & Hams). Keep mouth open, never heavy.',
    makhrajSvg: generateMakhrajSvg('tongue-tip-lower', 'س', 'Tongue tip behind lower teeth'),
    step1Svg: generateStep1Svg('Tip behind lower teeth', 'س'),
    step2Svg: generateStep2Svg('Clean whispering hiss (Seen)', 'س'),
  },

  // 13. SHEEN (ش)
  13: {
    name: 'Wasat Al-Lisan (Middle of Tongue)',
    arabicName: 'وسط اللسان مع انتشار الهواء (التفشي)',
    zone: 'Tongue',
    simpleExplanation: 'Produced by raising the middle of the tongue toward the palate, spreading air across the mouth.',
    teacherExplanation: 'Features Tafash-shi (spreading of breath throughout the mouth cavity).',
    step1: 'Raise middle of tongue without fully blocking palate.',
    step1Label: 'Raise middle of tongue',
    step2: 'Blow air spreading broadly across entire mouth "Sheen".',
    step2Label: 'Spread breath broadly (Sheen)',
    keyRule: 'Spread of breath (Tafash-shi). Sounds like "sh" in "shine".',
    makhrajSvg: generateMakhrajSvg('tongue-middle', 'ش', 'Middle of tongue raised with spreading air'),
    step1Svg: generateStep1Svg('Raise middle of tongue', 'ش'),
    step2Svg: generateStep2Svg('Broad breath spread (Sheen)', 'ش'),
  },

  // 14. SAAD (ص)
  14: {
    name: 'Al-Asliyyah (Tongue Tip with Elevation)',
    arabicName: 'طرف اللسان مع استعلاء أقصى اللسان وإطباقه',
    zone: 'Tongue',
    simpleExplanation: 'Produced from tongue tip behind lower teeth while elevating the back of tongue for heavy sound.',
    teacherExplanation: 'Heavy whistle letter (Isti\'la & Itbaq & Safir). Deep, full-mouthed heavy "S".',
    step1: 'Tip behind lower teeth; elevate back and center of tongue.',
    step1Label: 'Tip low, elevate back of tongue',
    step2: 'Release powerful full-mouthed heavy whistle "Saad".',
    step2Label: 'Heavy full-mouthed S (Saad)',
    keyRule: 'Heavy (Tafkheem & Itbaq). Fill mouth with resonant deep S sound.',
    makhrajSvg: generateMakhrajSvg('tongue-tip-lower', 'ص', 'Tongue tip low with back elevated (Itbaq)'),
    step1Svg: generateStep1Svg('Elevate back of tongue', 'ص'),
    step2Svg: generateStep2Svg('Full heavy whistle (Saad)', 'ص'),
  },

  // 15. DHAAD (ض)
  15: {
    name: 'Haffat Al-Lisan (Tongue Side & Molars)',
    arabicName: 'إحدى حافتي اللسان أو كلتيهما مع الأضراس العليا',
    zone: 'Tongue',
    simpleExplanation: 'Produced by pressing one or both side edges of the tongue firmly against the upper molars.',
    teacherExplanation: 'Features Istitalah (prolongation of sound along tongue edge). Unique letter of Arabic.',
    step1: 'Press side edge of tongue against upper molar teeth.',
    step1Label: 'Side of tongue on upper molars',
    step2: 'Release sound with heavy, smooth prolongation "Dhaad".',
    step2Label: 'Heavy prolonged sound (Dhaad)',
    keyRule: 'Heavy (Itbaq) with sound gliding along sides (Istitalah). Do not pronounce like "Z" or "D".',
    makhrajSvg: generateMakhrajSvg('tongue-side', 'ض', 'Side edge of tongue against upper molars'),
    step1Svg: generateStep1Svg('Tongue sides on upper molars', 'ض'),
    step2Svg: generateStep2Svg('Deep prolonged heavy (Dhaad)', 'ض'),
  },

  // 16. TAA HEAVY (ط)
  16: {
    name: 'Al-Nitiyyah Heavy (Tongue Tip & Teeth Roots)',
    arabicName: 'طرف اللسان مع أصول الثنايا مع الإطباق',
    zone: 'Tongue',
    simpleExplanation: 'Produced by pressing tongue tip on upper teeth roots while pressing tongue body up against palate.',
    teacherExplanation: 'Strongest letter in Arabic (Shiddah, Jahr, Isti\'la, Itbaq). Deep, heavy T sound with Qalqalah.',
    step1: 'Press tongue tip on teeth roots; cup and elevate tongue body.',
    step1Label: 'Tip on roots, cup tongue body',
    step2: 'Release with explosive heavy voice "Taa" (ط).',
    step2Label: 'Explosive heavy sound (Taa)',
    keyRule: 'Strongest letter. Fully heavy (Itbaq) with strong Qalqalah when saakin.',
    makhrajSvg: generateMakhrajSvg('tongue-tip-roots', 'ط', 'Tongue tip on roots with tongue body elevated'),
    step1Svg: generateStep1Svg('Tongue body pressed up', 'ط'),
    step2Svg: generateStep2Svg('Explosive heavy pop (Taa)', 'ط'),
  },

  // 17. ZHAA (ظ)
  17: {
    name: 'Al-Lathwiyyah Heavy (Tongue Tip & Teeth Edges)',
    arabicName: 'طرف اللسان مع أطراف الثنايا العليا مع الإطباق',
    zone: 'Tongue',
    simpleExplanation: 'Produced by touching tongue tip to upper teeth edges while elevating the back of the tongue.',
    teacherExplanation: 'Heavy voiced friction letter (Isti\'la & Itbaq & Jahr). Heavy counterpart of (ذ).',
    step1: 'Place tongue tip on upper teeth edges; elevate back of tongue.',
    step1Label: 'Tip on edges, back elevated',
    step2: 'Release full-mouthed heavy buzzing sound "Zhaa".',
    step2Label: 'Heavy voiced TH (Zhaa)',
    keyRule: 'Heavy counterpart of (ذ). Fill the entire mouth with sound.',
    makhrajSvg: generateMakhrajSvg('tongue-tip-edges', 'ظ', 'Tongue tip on edges with back elevated'),
    step1Svg: generateStep1Svg('Tip on edges, back raised', 'ظ'),
    step2Svg: generateStep2Svg('Heavy voiced TH (Zhaa)', 'ظ'),
  },

  // 18. AIN (ع)
  18: {
    name: 'Wasat Al-Halq (Middle of Throat)',
    arabicName: 'وسط الحلق (تراجع لسان المزمار)',
    zone: 'Throat',
    simpleExplanation: 'Produced by pulling the epiglottis back against the middle wall of the throat with strong voice.',
    teacherExplanation: 'Middle of throat (Wasat Al-Halq). Deep voiced guttural contraction (Bawniyyah & Jahr).',
    step1: 'Pull epiglottis back against middle throat wall.',
    step1Label: 'Contract middle throat inward',
    step2: 'Release deep resonant voiced vowel sound "Ain" (ع).',
    step2Label: 'Deep resonant voiced sound (Ain)',
    keyRule: 'Voiced deep contraction. Do not choke or replace with simple glottal stop (Hamzah).',
    makhrajSvg: generateMakhrajSvg('throat-middle', 'ع', 'Middle of throat contraction (Wasat Al-Halq)'),
    step1Svg: generateStep1Svg('Contract middle throat', 'ع'),
    step2Svg: generateStep2Svg('Deep voiced resonance (Ain)', 'ع'),
  },

  // 19. GHAIN (غ)
  19: {
    name: 'Adna Al-Halq (Top of Throat)',
    arabicName: 'أدنى الحلق مع أصل اللسان (حرف رخو مجهور)',
    zone: 'Throat',
    simpleExplanation: 'Produced from the top of the throat near the uvula with a smooth gargling, voiced sound.',
    teacherExplanation: 'Upper throat near uvula (Adna Al-Halq). Voiced heavy letter (Isti\'la & Jahr & Rikhawah).',
    step1: 'Raise back of tongue close to upper throat/uvula.',
    step1Label: 'Back of tongue near uvula',
    step2: 'Exhale with smooth, heavy gargling voiced tone "Ghain".',
    step2Label: 'Smooth heavy gargle (Ghain)',
    keyRule: 'Heavy sound without rough scraping. Voiced counterpart of (خ).',
    makhrajSvg: generateMakhrajSvg('throat-upper', 'غ', 'Top of throat closest to mouth (Adna Al-Halq)'),
    step1Svg: generateStep1Svg('Raise tongue back to uvula', 'غ'),
    step2Svg: generateStep2Svg('Smooth heavy gargle (Ghain)', 'غ'),
  },

  // 20. FAA (ف)
  20: {
    name: 'Batn Ash-Shafah (Lower Lip & Upper Teeth)',
    arabicName: 'بطن الشفة السفلى مع أطراف الثنايا العليا',
    zone: 'Lips',
    simpleExplanation: 'Produced by touching the edges of the upper front teeth to the wet inside of the lower lip.',
    teacherExplanation: 'Upper incisors on inner wet part of lower lip with breath friction (Hams & Rikhawah).',
    step1: 'Place edges of upper front teeth on inner lower lip.',
    step1Label: 'Upper teeth on inside lower lip',
    step2: 'Blow airy breath through contact to say "Faa".',
    step2Label: 'Airy breath release (Faa)',
    keyRule: 'Soft breathy sound like English "F". Keep touch soft.',
    makhrajSvg: generateMakhrajSvg('lips', 'ف', 'Upper teeth against inside lower lip'),
    step1Svg: generateStep1Svg('Upper teeth on lower lip', 'ف'),
    step2Svg: generateStep2Svg('Soft breath flow (Faa)', 'ف'),
  },

  // 21. QAAF (ق)
  21: {
    name: 'Aqsa Al-Lisan (Deep Back of Tongue & Soft Palate)',
    arabicName: 'أقصى اللسان مع ما يحاذيه من الحنك اللحمي',
    zone: 'Tongue',
    simpleExplanation: 'Produced by hitting the furthest back of the tongue against the soft fleshy palate near the uvula.',
    teacherExplanation: 'Heavy back-tongue stop (Isti\'la & Shiddah) with strong Qalqalah when saakin.',
    step1: 'Raise deepest back of tongue to touch soft palate.',
    step1Label: 'Deep tongue back on soft palate',
    step2: 'Release with deep, heavy, explosive pop "Qaaf".',
    step2Label: 'Heavy explosive pop (Qaaf)',
    keyRule: 'Always heavy (Tafkheem). Strong bouncing Qalqalah when saakin (قْ).',
    makhrajSvg: generateMakhrajSvg('tongue-deep', 'ق', 'Furthest back of tongue on soft palate'),
    step1Svg: generateStep1Svg('Back of tongue on soft palate', 'ق'),
    step2Svg: generateStep2Svg('Deep heavy pop (Qaaf)', 'ق'),
  },

  // 22. KAAF (ك)
  22: {
    name: 'Aqsa Al-Lisan (Back of Tongue & Hard Palate)',
    arabicName: 'أقصى اللسان تحت مخرج القاف مع الحنك العظمي',
    zone: 'Tongue',
    simpleExplanation: 'Produced by touching the back of the tongue just in front of Qaaf against the hard bony palate.',
    teacherExplanation: 'Light stopping sound (Shiddah) with light whisper of air upon release (Hams).',
    step1: 'Touch back of tongue to hard palate (in front of Qaf).',
    step1Label: 'Back of tongue on hard palate',
    step2: 'Release tongue with light crisp sound and soft air puff "Kaaf".',
    step2Label: 'Crisp light release (Kaaf)',
    keyRule: 'Light letter (Istifal). Features a crisp soft air puff (Hams).',
    makhrajSvg: generateMakhrajSvg('tongue-deep', 'ك', 'Back of tongue on hard bony palate'),
    step1Svg: generateStep1Svg('Back tongue on hard palate', 'ك'),
    step2Svg: generateStep2Svg('Crisp light sound (Kaaf)', 'ك'),
  },

  // 23. LAAM (ل)
  23: {
    name: 'Adna Haffat Al-Lisan (Sides to Tip of Tongue)',
    arabicName: 'أدنى حافتي اللسان إلى منتهاها مع لثة الأسنان العليا',
    zone: 'Tongue',
    simpleExplanation: 'Produced from the sides to the tip of the tongue contacting the upper gums.',
    teacherExplanation: 'Broad tongue contact with Inhiraf (air flows around sides of tongue). Light except in لفظ الجلالة (Allah).',
    step1: 'Touch front edges and tip of tongue to upper gums.',
    step1Label: 'Front edges and tip on upper gums',
    step2: 'Release clear voiced bell-like tone "Laam".',
    step2Label: 'Clear resonant tone (Laam)',
    keyRule: 'Naturally light (Muraqqaq). Becomes heavy only in name of Allah (اللّٰه) after Fathah/Dammah.',
    makhrajSvg: generateMakhrajSvg('tongue-side', 'ل', 'Sides and tip of tongue on upper gums'),
    step1Svg: generateStep1Svg('Tongue edges on upper gums', 'ل'),
    step2Svg: generateStep2Svg('Bell-like clear tone (Laam)', 'ل'),
  },

  // 24. MEEM (م)
  24: {
    name: 'Ash-Shafataan & Al-Khayshoom (Lips & Nose)',
    arabicName: 'الشفتان مع الغنة من الخيشوم',
    zone: 'Lips',
    simpleExplanation: 'Produced by closing both lips gently while voice resonance flows through the nasal cavity (Ghunnah).',
    teacherExplanation: 'Dual makhraj: physical lip closure (Shafataan) + nasal resonance (Khayshoom).',
    step1: 'Close both lips softly together.',
    step1Label: 'Close lips softly together',
    step2: 'Release sound with sweet nasal resonance "Meem".',
    step2Label: 'Sweet nasal resonance (Meem)',
    keyRule: 'Has natural Ghunnah (nasal hum). Do not press lips with excessive force.',
    makhrajSvg: generateMakhrajSvg('lips', 'م', 'Both lips closed with nasal resonance (Ghunnah)'),
    step1Svg: generateStep1Svg('Close lips gently', 'م'),
    step2Svg: generateStep2Svg('Sweet nasal hum (Meem)', 'م'),
  },

  // 25. NOON (ن)
  25: {
    name: 'Taraf Al-Lisan & Al-Khayshoom (Tongue Tip & Nose)',
    arabicName: 'طرف اللسان مع لثة الثنايا العليا مع الغنة',
    zone: 'Nasal',
    simpleExplanation: 'Produced by touching tongue tip to upper gums while voice flows through the nose with Ghunnah.',
    teacherExplanation: 'Dual makhraj: tongue tip on gums + nasal passage (Khayshoom).',
    step1: 'Touch tip of tongue to upper gums behind front teeth.',
    step1Label: 'Tip on upper gums',
    step2: 'Release sound with pleasant nasal Ghunnah "Noon".',
    step2Label: 'Pleasant nasal Ghunnah (Noon)',
    keyRule: 'Features inherent Ghunnah (2 counts when Mushaddad نّ).',
    makhrajSvg: generateMakhrajSvg('tongue-tip-roots', 'ن', 'Tongue tip on upper gums with nasal Ghunnah'),
    step1Svg: generateStep1Svg('Tip touches upper gums', 'ن'),
    step2Svg: generateStep2Svg('Resonant nasal hum (Noon)', 'ن'),
  },

  // 26. HAA LIGHT (هـ)
  26: {
    name: 'Aqsa Al-Halq (Deep Bottom of Throat)',
    arabicName: 'أقصى الحلق (منطقة الأوتار الصوتية)',
    zone: 'Throat',
    simpleExplanation: 'Produced from the deepest base of the throat near the vocal cords with a soft breathy sound.',
    teacherExplanation: 'Deepest throat (Aqsa Al-Halq). Deepest, lightest breath letter (Khafa & Hams).',
    step1: 'Open deepest base of throat with relaxed vocal cords.',
    step1Label: 'Deep base of throat relaxed',
    step2: 'Exhale soft gentle breath from chest "Haa" (هـ).',
    step2Label: 'Soft gentle breath (Haa)',
    keyRule: 'Lightest breath letter. Keep soft and clear without swallowing or hardening into (ح).',
    makhrajSvg: generateMakhrajSvg('throat-lower', 'هـ', 'Deepest base of throat near vocal cords'),
    step1Svg: generateStep1Svg('Deep throat relaxed', 'هـ'),
    step2Svg: generateStep2Svg('Soft gentle breath (Haa)', 'هـ'),
  },

  // 27. WAW (و)
  27: {
    name: 'Ash-Shafataan (Rounding Both Lips)',
    arabicName: 'الشفتان بضمهما مع ترك فرجة صغيرة',
    zone: 'Lips',
    simpleExplanation: 'Produced by rounding both lips forward into an "O" shape with a small circular opening.',
    teacherExplanation: 'Rounding of lips without complete contact. Madd letter when preceded by Dammah.',
    step1: 'Round both lips forward leaving a small circle in center.',
    step1Label: 'Round lips forward in circle',
    step2: 'Release smooth voiced sound without touching lips "Waw".',
    step2Label: 'Smooth voiced glide (Waw)',
    keyRule: 'Round lips completely. Never let upper teeth touch lower lip (which causes "V").',
    makhrajSvg: generateMakhrajSvg('lips', 'و', 'Both lips rounded forward in a circle'),
    step1Svg: generateStep1Svg('Circle lips forward', 'و'),
    step2Svg: generateStep2Svg('Smooth voiced glide (Waw)', 'و'),
  },

  // 28. YAA (ي)
  28: {
    name: 'Wasat Al-Lisan (Middle of Tongue)',
    arabicName: 'وسط اللسان مع ما يحاذيه من الحنك الأعلى',
    zone: 'Tongue',
    simpleExplanation: 'Produced by raising the middle of the tongue toward the hard palate without complete closure.',
    teacherExplanation: 'Middle of tongue raised with smooth voiced airflow. Madd letter when preceded by Kasrah.',
    step1: 'Raise middle of tongue toward hard palate.',
    step1Label: 'Raise middle of tongue',
    step2: 'Release smooth voiced glide sound "Yaa".',
    step2Label: 'Smooth voiced glide (Yaa)',
    keyRule: 'Smooth and light. Do not block air completely (which turns it into "Jeem").',
    makhrajSvg: generateMakhrajSvg('tongue-middle', 'ي', 'Middle of tongue raised toward hard palate'),
    step1Svg: generateStep1Svg('Raise middle tongue', 'ي'),
    step2Svg: generateStep2Svg('Smooth voiced glide (Yaa)', 'ي'),
  },
};
