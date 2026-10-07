import type { LanguageOption } from './translations';

export interface MakhrajTranslationItem {
  simpleExplanation: { english: string; hinglish: string; urdu: string };
  step1: { english: string; hinglish: string; urdu: string };
  step1Label: { english: string; hinglish: string; urdu: string };
  step2: { english: string; hinglish: string; urdu: string };
  step2Label: { english: string; hinglish: string; urdu: string };
  keyRule: { english: string; hinglish: string; urdu: string };
}

export const UI_LESSON_LABELS = {
  howToSayTitle: {
    english: (pron: string, char: string) => `How to say ${pron} (${char})?`,
    hinglish: (pron: string, char: string) => `${pron} (${char}) kaise bolein?`,
    urdu: (pron: string, char: string) => `${pron} (${char}) ادا کرنے کا طریقہ`,
  },
  guideSubtitle: {
    english: 'A simple 2-step guide',
    hinglish: 'Aasaan 2-step tareeqa',
    urdu: 'آسان ۲ مرحلہ وار رہنمائی',
  },
  makhrajTitle: {
    english: 'Makhraj',
    hinglish: 'Makhraj (Awaz ka nikalna)',
    urdu: 'مخرج (آواز کا منبع)',
  },
  makhrajSubtitle: {
    english: '(Where does sound come from?)',
    hinglish: '(Awaz kahan se nikal rahi hai?)',
    urdu: '(آواز کہاں سے نکلتی ہے؟)',
  },
  keyRuleTitle: {
    english: 'Key Rule:',
    hinglish: 'Khaas Rule:',
    urdu: 'اہم قاعدہ:',
  },
};

export const MAKHRAJ_TRILINGUAL_DB: Record<number, MakhrajTranslationItem> = {
  // 1. Alif (ا)
  1: {
    simpleExplanation: {
      english: 'Sound originates smoothly from the open space of the throat and mouth without physical obstruction.',
      hinglish: 'Awaz bina kisi rukawat ke gale aur moonh ke khule hisse (Al-Jawf) se saaf nikalti hai.',
      urdu: 'آواز بغیر کسی رکاوٹ کے حلق اور منہ کے خالی حصے (الجوف) سے روانی کے ساتھ نکلتی ہے۔',
    },
    step1: {
      english: 'Open mouth naturally with relaxed throat and jaw.',
      hinglish: 'Moonh aur jabde ko aaram se khol kar rakhein.',
      urdu: 'منہ اور جبڑے کو بغیر کسی تناؤ کے قدرتی طور پر کھولیں۔',
    },
    step1Label: {
      english: 'Open oral cavity relaxed',
      hinglish: 'Moonh ka khula hissa',
      urdu: 'منہ کا مجوف اور کھلا حصہ',
    },
    step2: {
      english: 'Release smooth voice air from deep chest through mouth.',
      hinglish: 'Awaz ko bina khinche ya jhatke aaraam se nikalein.',
      urdu: 'سینے سے سانس کی ہموار آواز بغیر کسی رکاوٹ کے جاری کریں۔',
    },
    step2Label: {
      english: 'Sustain natural vowel (Alif)',
      hinglish: 'Saaf Alif ki awaz',
      urdu: 'الف مدہ کی صاف آواز',
    },
    keyRule: {
      english: 'Sustained for 2 counts without nasalization (Ghunnah) or closing lips.',
      hinglish: 'Naak me awaz laaye bina 2 harakat (counts) ke barabar khinchein.',
      urdu: 'غنہ کیے بغیر ۲ حرکات کے برابر لمبا کریں۔',
    },
  },

  // 2. Baa (ب)
  2: {
    simpleExplanation: {
      english: 'Produced by pressing the wet inner portions of both lips firmly together, then releasing.',
      hinglish: 'Dono honthon ke andaruni geele hisse ko aapas me majbooti se milakar chhodne se ada hota hai.',
      urdu: 'دونوں ہونٹوں کے اندرونی تر حصے کو باہم ملانے اور پھر الگ کرنے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Close both lips together softly and firmly.',
      hinglish: 'Dono honthon ko aapas me halka dabayein.',
      urdu: 'دونوں ہونٹوں کو نرمی کے ساتھ باہم ملائیں۔',
    },
    step1Label: {
      english: 'Press both lips together',
      hinglish: 'Dono honth milayein',
      urdu: 'ہونٹوں کا باہمی اتصال',
    },
    step2: {
      english: 'Release lips with a clear, popping sound "Baa".',
      hinglish: 'Honthon ko khol kar saaf "Baa" ki awaz nikalein.',
      urdu: 'ہونٹ کھول کر صاف "باء" کی آواز ادا کریں۔',
    },
    step2Label: {
      english: 'Release lips cleanly (Baa)',
      hinglish: 'Saaf Baa awaz',
      urdu: 'باء کی واضح ادائیگی',
    },
    keyRule: {
      english: 'Has Qalqalah (echoing bounce) when silent (بْ). Keep lips moist.',
      hinglish: 'Saakin (بْ) hone par Qalqalah (awaz ka palatna) karein.',
      urdu: 'ساکن (بْ) ہونے پر قلقلہ (آواز کو بلا جھٹکا لوٹانا) کریں۔',
    },
  },

  // 3. Taa (ت)
  3: {
    simpleExplanation: {
      english: 'Produced by placing the tip of the tongue against the roots of the upper two front teeth.',
      hinglish: 'Zabaan ki nok ko uper ke do saamne wale daanton ki jadd (roots) par lagane se ada hota hai.',
      urdu: 'زبان کی نوک کو اوپر کے دو سامنے والے دانتوں (ثنایا علیا) کی جڑ سے لگانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Touch tip of tongue behind upper front teeth roots.',
      hinglish: 'Zabaan ki nok uper wale daanton ki jadd par rakhein.',
      urdu: 'زبان کی نوک سامنے والے اوپر کے دانتوں کی جڑ سے لگائیں۔',
    },
    step1Label: {
      english: 'Tip on upper teeth roots',
      hinglish: 'Zabaan nok jadd par',
      urdu: 'زبان کی نوک دانت کی جڑ پر',
    },
    step2: {
      english: 'Release tongue gently with a light puff of air "Ta".',
      hinglish: 'Halki se hawa ki awaz ke sath zabaan hatayein.',
      urdu: 'زبان کو ہلکی سی سانس کی آواز کے ساتھ الگ کریں۔',
    },
    step2Label: {
      english: 'Release with soft puff (Ta)',
      hinglish: 'Halki hawa se Taa',
      urdu: 'نرم سانس کے ساتھ تاء',
    },
    keyRule: {
      english: 'Light letter (Istifal) with soft breath friction (Hams). Do not over-hiss like "S".',
      hinglish: 'Bareek letter hai. Zyada seeti (S) ki tarah mat bolein.',
      urdu: 'باریک حرف ہے۔ اسے "سین" کی طرح زیادہ سیٹی نما نہ بنائیں۔',
    },
  },

  // 4. Thaa (ث)
  4: {
    simpleExplanation: {
      english: 'Produced by touching the tip of the tongue to the biting edges of the upper two front teeth.',
      hinglish: 'Zabaan ki nok ko uper wale dono daanton ke kinare (biting edges) par lagane se ada hota hai.',
      urdu: 'زبان کی نوک کو اوپر کے دونوں سامنے والے دانتوں کے کناروں سے ملانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Place tongue tip gently against edges of upper teeth.',
      hinglish: 'Zabaan ki nok uper daanton ke kinaroon par rakhein.',
      urdu: 'زبان کی نوک کو اوپر والے دانتوں کے کنارے پر رکھیں۔',
    },
    step1Label: {
      english: 'Tip against upper teeth edges',
      hinglish: 'Daanton ke kinare par nok',
      urdu: 'دانتوں کے کنارے پر زبان',
    },
    step2: {
      english: 'Blow air softly through teeth without biting to say "Thaa".',
      hinglish: 'Bina daant kaate naram hawa se "Thaa" boleina.',
      urdu: 'دانتوں کو کاٹے بغیر نرمی سے سانس جاری کرتے ہوئے "ثاء" بولیں۔',
    },
    step2Label: {
      english: 'Soft breathy flow (Thaa)',
      hinglish: 'Naram hawa se Thaa',
      urdu: 'نرم سانس کا بہاؤ',
    },
    keyRule: {
      english: 'Soft English "th" in "think". Never sound like "S" or "Z".',
      hinglish: 'Naram "th" ki tarah bolein. Kabhi S ya Z ki awaz mat nikalein.',
      urdu: 'نرم "ثاء" بولیں۔ کبھی "سین" یا "زاء" کی آواز نہ نکالیں۔',
    },
  },

  // 5. Jeem (ج)
  5: {
    simpleExplanation: {
      english: 'Produced by pressing the middle of the tongue against the hard palate above it.',
      hinglish: 'Zabaan ke beech ke hisse ko uper ke taloo (palate) se majbooti se milane se ada hota hai.',
      urdu: 'زبان کے درمیانی حصے کو اوپر تالو کے درمیانی حصے سے مضبوطی سے ملانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Press middle of tongue firmly against upper roof of mouth.',
      hinglish: 'Zabaan ke beech ko taloo se chipkayein.',
      urdu: 'زبان کا درمیانی حصہ اوپر تالو سے لگائیں۔',
    },
    step1Label: {
      english: 'Middle tongue on palate',
      hinglish: 'Beech zabaan taloo par',
      urdu: 'درمیانِ زبان تالو پر',
    },
    step2: {
      english: 'Release with a strong, clean "Jeem" sound.',
      hinglish: 'Saaf majboot "Jeem" ki awaz nikalein.',
      urdu: 'مضبوط اور صاف "جیم" کی آواز ادا کریں۔',
    },
    step2Label: {
      english: 'Strong release (Jeem)',
      hinglish: 'Majboot Jeem awaz',
      urdu: 'مضبوط جیم',
    },
    keyRule: {
      english: 'Has Qalqalah when saakin (جْ). Do not pronounce softly like French "j".',
      hinglish: 'Saakin (جْ) par Qalqalah karein. Naram French "J" jaisa mat bolein.',
      urdu: 'ساکن (جْ) ہونے پر قلقلہ کریں۔ آواز کو پھیلا کر نرم نہ کریں۔',
    },
  },

  // 6. Haa (ح)
  6: {
    simpleExplanation: {
      english: 'Produced from the exact middle of the throat with smooth breath friction.',
      hinglish: 'Gale ke bilkul beech (middle throat) se saaf saans ki kharak ke sath ada hota hai.',
      urdu: 'حلق کے درمیانی حصے (وسط الحلق) سے سانس کی صاف رگڑ کے ساتھ ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Contract middle throat muscles gently.',
      hinglish: 'Gale ke beech ke hisse ko halka sa sukedein.',
      urdu: 'وسطِ حلق کے عضلات میں ہلکا تناؤ پیدا کریں۔',
    },
    step1Label: {
      english: 'Squeeze middle throat',
      hinglish: 'Gale ke beech sukedein',
      urdu: 'وسط الحلق کی تنگی',
    },
    step2: {
      english: 'Exhale clean breathy friction sound "Haa".',
      hinglish: 'Saaf hawa se "Haa" ki awaz nikalein.',
      urdu: 'نرم رگڑدار سانس کے ساتھ "حاء" بولیں۔',
    },
    step2Label: {
      english: 'Clean friction (Haa)',
      hinglish: 'Saaf Haa awaz',
      urdu: 'صاف حاء کی آواز',
    },
    keyRule: {
      english: 'Clean middle throat Haa. Must never sound like heavy chest H (ھ).',
      hinglish: 'Gale ke beech ki saaf Haa. Seene wali (ھ) awaz se alag karein.',
      urdu: 'حلق کے درمیان کی صاف حاء۔ اسے سینے والی (ھ) سے ممتاز رکھیں۔',
    },
  },

  // 7. Khaa (خ)
  7: {
    simpleExplanation: {
      english: 'Produced from the top of the throat near the back of the tongue with a heavy full-mouth sound.',
      hinglish: 'Gale ke sabse uper wale hisse (top throat) se moonh bhar kar mota (heavy) bolein.',
      urdu: 'حلق کے سب سے اوپری حصے (ادنیٰ الحلق) سے منہ بھر کر موٹا پڑھے جانے والے حرف کے طور پر ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Raise back of tongue towards top of throat.',
      hinglish: 'Zabaan ka pichhla hissa uper gale ki taraf utayein.',
      urdu: 'زبان کا پچھلا حصہ اوپر حلق کی طرف اٹھائیں۔',
    },
    step1Label: {
      english: 'Raise back tongue',
      hinglish: 'Pichhli zabaan utayein',
      urdu: 'زبان کا پچھلا ابھار',
    },
    step2: {
      english: 'Produce full-mouthed heavy sound "Khaa".',
      hinglish: 'Moonh bhar kar mota "Khaa" bolein.',
      urdu: 'منہ بھر کر موٹی آواز میں "خاء" ادا کریں۔',
    },
    step2Label: {
      english: 'Heavy full release (Khaa)',
      hinglish: 'Mota Khaa awaz',
      urdu: 'پر اور موٹی خاء',
    },
    keyRule: {
      english: 'Heavy letter (Musta\'aliyah). Keep full mouth shape.',
      hinglish: 'Mota (Heavy) letter hai. Hamesha moonh bhar kar padhein.',
      urdu: 'حروفِ مستعلیہ میں سے ہے۔ ہمیشہ منہ بھر کر موٹا پڑھیں۔',
    },
  },

  // 8. Daal (د)
  8: {
    simpleExplanation: {
      english: 'Produced by placing the tip of the tongue against the roots of the upper two front teeth.',
      hinglish: 'Zabaan ki nok uper ke saamne wale daanton ki jadd se lagayein.',
      urdu: 'زبان کی نوک کو اوپر کے سامنے والے دانتوں کی جڑ سے لگانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Place tip of tongue on roots of upper front teeth.',
      hinglish: 'Zabaan ki nok uper daanton ki jadd par rakhein.',
      urdu: 'زبان کی نوک اوپر کے دانتوں کی جڑ پر رکھیں۔',
    },
    step1Label: {
      english: 'Tongue tip on upper teeth roots',
      hinglish: 'Zabaan nok jadd par',
      urdu: 'زبان کی نوک دانت پر',
    },
    step2: {
      english: 'Release with a soft D sound.',
      hinglish: 'Naram D (Daal) ki awaz nikalein.',
      urdu: 'نرم دال کی آواز ادا کریں۔',
    },
    step2Label: {
      english: 'Release Daal sound',
      hinglish: 'Naram Daal awaz',
      urdu: 'نرم دال',
    },
    keyRule: {
      english: 'Has Qalqalah (bounce) when silent (دْ). Light letter.',
      hinglish: 'Saakin (دْ) par Qalqalah karein. Light letter hai.',
      urdu: 'ساکن (دْ) ہونے پر قلقلہ کریں۔ باریک حرف ہے۔',
    },
  },

  // 9. Zhaal (ذ)
  9: {
    simpleExplanation: {
      english: 'Produced by placing the tip of the tongue against the biting edges of the upper two front teeth.',
      hinglish: 'Zabaan ki nok uper wale daanton ke kinaroon par rakhein.',
      urdu: 'زبان کی نوک کو اوپر والے دانتوں کے کناروں سے ملانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Place tongue tip against upper teeth edges.',
      hinglish: 'Zabaan ki nok uper daanton ke kinaroon par rakhein.',
      urdu: 'زبان کی نوک اوپر والے دانتوں کے کناروں پر رکھیں۔',
    },
    step1Label: {
      english: 'Tongue tip on teeth edges',
      hinglish: 'Nok daanton ke kinaroon par',
      urdu: 'زبان کی نوک کنارے پر',
    },
    step2: {
      english: 'Release soft buzzing TH sound "Zhaal".',
      hinglish: 'Naram buzzing awaz se Zhaal bolein.',
      urdu: 'نرم ذال کی آواز جاری کریں۔',
    },
    step2Label: {
      english: 'Soft buzz Zhaal',
      hinglish: 'Naram Zhaal awaz',
      urdu: 'نرم ذال',
    },
    keyRule: {
      english: 'Soft voiced TH sound as in "this". Never sound like hard Z.',
      hinglish: 'Naram TH (jaise "this") bolein. Z ki tarah mat bolein.',
      urdu: 'نرم ذال بولیں۔ زاء کی طرح سخت نہ بنائیں۔',
    },
  },

  // 10. Raa (ر)
  10: {
    simpleExplanation: {
      english: 'Produced by touching the tip of the tongue near the top palate behind the front teeth.',
      hinglish: 'Zabaan ki nok aur pichhle hisse ko uper taloo ke qareeb lagayein.',
      urdu: 'زبان کی نوک کی پشت کو اوپر سامنے کے تالو سے لگانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Touch tip and back of tongue tip to upper palate.',
      hinglish: 'Zabaan ki nok uper taloo par rakhein.',
      urdu: 'زبان کی نوک تالو سے لگائیں۔',
    },
    step1Label: {
      english: 'Tongue tip on palate',
      hinglish: 'Zabaan nok taloo par',
      urdu: 'زبان کی نوک تالو پر',
    },
    step2: {
      english: 'Release with a single light tap for Raa.',
      hinglish: 'Ek baar halka tap karke Raa bolein.',
      urdu: 'ایک بار ہلکی ٹھوکر سے راء بولیں۔',
    },
    step2Label: {
      english: 'Single tap Raa',
      hinglish: 'Single tap Raa',
      urdu: 'ایک بار ٹھوکر',
    },
    keyRule: {
      english: 'Heavy with Zabar/Pesh (رَ, رُ), light with Zer (رِ).',
      hinglish: 'Zabar/Pesh par Mota padhein, Zer par Bareek padhein.',
      urdu: 'زبر اور پیش پر موٹا، زیر پر باریک پڑھیں۔',
    },
  },

  // 11. Zay (ز)
  11: {
    simpleExplanation: {
      english: 'Produced from the tip of the tongue resting near the inner surface of lower front teeth.',
      hinglish: 'Zabaan ki nok ko niche wale daanton ke andaruni hisse par rakhein.',
      urdu: 'زبان کی نوک کو نیچے والے دانتوں کے اندرونی حصے کے قریب رکھنے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Rest tongue tip behind lower front teeth.',
      hinglish: 'Zabaan ki nok niche wale daanton ke peeche rakhein.',
      urdu: 'زبان کی نوک نیچے کے دانتوں کے پیچھے رکھیں۔',
    },
    step1Label: {
      english: 'Tip behind lower teeth',
      hinglish: 'Nok niche daanton ke peeche',
      urdu: 'نوک نیچے کے دانتوں کے پیچھے',
    },
    step2: {
      english: 'Produce sharp buzzing whistle Zay.',
      hinglish: 'Sharp buzzing awaz se Zay bolein.',
      urdu: 'تیز سیٹی اور گونجدار آواز سے زاء بولیں۔',
    },
    step2Label: {
      english: 'Sharp buzz Zay',
      hinglish: 'Buzzing Zay awaz',
      urdu: 'تیز گونجدار زاء',
    },
    keyRule: {
      english: 'Sharp whistle letter (Safir). Distinct from soft Zhaal (ذ).',
      hinglish: 'Seeti (Safir) wala letter hai. Zhaal (ذ) se alag karein.',
      urdu: 'حروفِ صفیر (سیٹی والے) میں سے ہے۔',
    },
  },

  // 12. Seen (س)
  12: {
    simpleExplanation: {
      english: 'Produced by bringing tongue tip near lower front teeth with a clear whistling breath.',
      hinglish: 'Zabaan ki nok niche daanton ke paas laayein aur saaf seeti (S) ki awaz nikalein.',
      urdu: 'زبان کی نوک نیچے کے دانتوں کے قریب لا کر صاف سیٹی کی آواز سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Place tongue tip near inner lower teeth.',
      hinglish: 'Zabaan ki nok niche daanton ke andar rakhein.',
      urdu: 'زبان کی نوک نیچے کے دانتوں کے قریب رکھیں۔',
    },
    step1Label: {
      english: 'Tip near lower teeth',
      hinglish: 'Nok niche daanton par',
      urdu: 'نوک نیچے کے دانتوں پر',
    },
    step2: {
      english: 'Blow smooth whistling air for Seen.',
      hinglish: 'Saaf S (seeti) awaz nikalein.',
      urdu: 'صاف سیٹی والی سین کی آواز جاری کریں۔',
    },
    step2Label: {
      english: 'Whistling Seen release',
      hinglish: 'Seeti wali Seen awaz',
      urdu: 'سیٹی دار سین',
    },
    keyRule: {
      english: 'Light whistling letter. Keep mouth relaxed and flat.',
      hinglish: 'Bareek letter hai. Moonh ko khula aur normal rakhein.',
      urdu: 'باریک سیٹی والا حرف ہے۔ منہ گول نہ کریں۔',
    },
  },

  // 13. Sheen (ش)
  13: {
    simpleExplanation: {
      english: 'Produced from middle of tongue, spreading sound across oral cavity.',
      hinglish: 'Zabaan ke beech se awaz ko poore moonh me phailakar bolein (Tafash-shi).',
      urdu: 'زبان کے درمیانی حصے سے آواز کو پورے منہ میں پھیلا کر ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Raise middle of tongue towards roof of mouth.',
      hinglish: 'Zabaan ke beech ko taloo ki taraf utayein.',
      urdu: 'زبان کا درمیانی حصہ تالو کی طرف اٹھائیں۔',
    },
    step1Label: {
      english: 'Raise middle tongue',
      hinglish: 'Beech zabaan utayein',
      urdu: 'درمیانِ زبان کا ابھار',
    },
    step2: {
      english: 'Spread breath sound "SH" throughout mouth.',
      hinglish: 'Poore moonh me SH awaz phailayein.',
      urdu: 'منہ کے اندر شین کی شاں شاں والی آواز پھیلائیں۔',
    },
    step2Label: {
      english: 'Spreading SH sound',
      hinglish: 'Phailti hui SH awaz',
      urdu: 'آواز کا پھیلاؤ (تفشی)',
    },
    keyRule: {
      english: 'Has Tafash-shi (spreading breath sound). Light letter.',
      hinglish: 'Tafash-shi (awaz phailne) ka rule hai. Light letter hai.',
      urdu: 'حرفِ تفشی (آواز پھیلانے والا) ہے۔ باریک پڑھیں۔',
    },
  },

  // 14. Saad (ص)
  14: {
    simpleExplanation: {
      english: 'Heavy full-mouthed whistling letter from tongue tip near lower front teeth.',
      hinglish: 'Zabaan ki nok se moonh bhar kar moti seeti wali (Saad) awaz nikalein.',
      urdu: 'زبان کی نوک سے منہ بھر کر موٹی اور پر سیٹی دار صَاد کی آواز سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Position tongue tip behind lower teeth & raise back of tongue.',
      hinglish: 'Zabaan ki nok niche daanton par rakhein aur pichhli zabaan utayein.',
      urdu: 'زبان کی نوک نیچے دانتوں پر رکھیں اور زبان کی پشت اٹھائیں۔',
    },
    step1Label: {
      english: 'Tip lower & back raised',
      hinglish: 'Nok niche & pichhli zabaan uper',
      urdu: 'نوک نیچے اور پشت بلند',
    },
    step2: {
      english: 'Blow full-mouthed heavy whistle Saad.',
      hinglish: 'Moonh bhar kar moti Saad awaz nikalein.',
      urdu: 'منہ بھر کر پر اور موٹی صَاد بولیں۔',
    },
    step2Label: {
      english: 'Heavy Saad whistle',
      hinglish: 'Moti Saad awaz',
      urdu: 'موٹی صَاد',
    },
    keyRule: {
      english: 'Heavy letter (Musta\'aliyah). Always full-mouthed.',
      hinglish: 'Mota (Heavy) letter hai. Hamesha moonh bhar kar padhein.',
      urdu: 'حروفِ مستعلیہ میں سے ہے۔ ہمیشہ منہ بھر کر موٹا پڑھیں۔',
    },
  },

  // 15. Dhaad (ض)
  15: {
    simpleExplanation: {
      english: 'Produced by placing the side edge of tongue against upper molars.',
      hinglish: 'Zabaan ki karwat (side edge) ko uper ki daadho (molars) par lagayein.',
      urdu: 'زبان کے کنارے کو اوپر کی داڑھوں سے ملانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Press side edge of tongue against upper molars.',
      hinglish: 'Zabaan ki karwat ko uper daadho par dabayein.',
      urdu: 'زبان کا کنارہ اوپر کی داڑھوں پر دبائیں۔',
    },
    step1Label: {
      english: 'Side tongue on molars',
      hinglish: 'Zabaan ki karwat daadho par',
      urdu: 'حافہ زبان داڑھوں پر',
    },
    step2: {
      english: 'Release heavy prolonged Dhaad sound.',
      hinglish: 'Moonh bhar kar lambi Dhaad awaz nikalein.',
      urdu: 'منہ بھر کر لمبی اور موٹی ضاد بولیں۔',
    },
    step2Label: {
      english: 'Heavy Dhaad release',
      hinglish: 'Moti Dhaad awaz',
      urdu: 'پر اور طویل ضاد',
    },
    keyRule: {
      english: 'Unique letter with Istitalah (prolonged sound). Heavy.',
      hinglish: 'Duniya ka sabse unique letter hai. Full mouth heavy padhein.',
      urdu: 'استطالت اور جہر والا حرف ہے۔ منہ بھر کر پڑھیں۔',
    },
  },

  // 16. Taa Heavy (ط)
  16: {
    simpleExplanation: {
      english: 'Heavy full-mouthed T sound produced from tongue tip against upper teeth roots.',
      hinglish: 'Zabaan ki nok uper daanton ki jadd par lagakar moonh bhar kar mota Taa (ط) bolein.',
      urdu: 'زبان کی نوک اوپر کے دانتوں کی جڑ سے لگا کر منہ بھر کر موٹی طاء ادا ہوتی ہے۔',
    },
    step1: {
      english: 'Place tongue tip on upper teeth roots & elevate tongue back.',
      hinglish: 'Zabaan ki nok jadd par rakhein aur pichhli zabaan utayein.',
      urdu: 'زبان کی نوک دانتوں کی جڑ پر رکھیں اور پشت تالو سے لگائیں۔',
    },
    step1Label: {
      english: 'Tip on roots & back elevated',
      hinglish: 'Nok jadd par & pichhli zabaan uper',
      urdu: 'نوک جڑ پر اور پشت تالو پر',
    },
    step2: {
      english: 'Release heavy echoing Taa sound.',
      hinglish: 'Moonh bhar kar mota Taa (ط) bolein.',
      urdu: 'منہ بھر کر موٹی اور پر طاء ادا کریں۔',
    },
    step2Label: {
      english: 'Heavy Taa release',
      hinglish: 'Moti Taa awaz',
      urdu: 'پر اور موٹی طاء',
    },
    keyRule: {
      english: 'Strongest heavy letter. Has Qalqalah when saakin (طْ).',
      hinglish: 'Sabse strong mota letter hai. Saakin (طْ) par Qalqalah karein.',
      urdu: 'سب سے قوي حرف ہے۔ ساکن (طْ) ہونے پر قلقلہ کریں۔',
    },
  },

  // 17. Zhaa (ظ)
  17: {
    simpleExplanation: {
      english: 'Heavy full-mouthed TH sound from tip of tongue against upper teeth edges.',
      hinglish: 'Zabaan ki nok uper daanton ke kinaroon par lagakar moonh bhar kar mota Zhaa (ظ) bolein.',
      urdu: 'زبان کی نوک اوپر کے دانتوں کے کناروں سے لگا کر منہ بھر کر پر ظاء ادا ہوتی ہے۔',
    },
    step1: {
      english: 'Place tongue tip on teeth edges & raise back tongue.',
      hinglish: 'Zabaan ki nok kinaroon par rakhein aur pichhli zabaan utayein.',
      urdu: 'زبان کی نوک کنارے پر رکھیں اور پشت اٹھائیں۔',
    },
    step1Label: {
      english: 'Tip on edges & back raised',
      hinglish: 'Nok kinaroon par & pichhli zabaan uper',
      urdu: 'نوک کنارے پر اور پشت تالو پر',
    },
    step2: {
      english: 'Release heavy soft Zhaa sound.',
      hinglish: 'Moonh bhar kar mota Zhaa (ظ) bolein.',
      urdu: 'منہ بھر کر پر اور نرم ظاء ادا کریں۔',
    },
    step2Label: {
      english: 'Heavy Zhaa release',
      hinglish: 'Moti Zhaa awaz',
      urdu: 'پر اور موٹی ظاء',
    },
    keyRule: {
      english: 'Heavy letter. Distinct from light Zhaal (ذ).',
      hinglish: 'Mota letter hai. Bareek Zhaal (ذ) se alag karein.',
      urdu: 'حروفِ مستعلیہ میں سے ہے۔ باریک ذال سے ممتاز رکھیں۔',
    },
  },

  // 18. Ain (ع)
  18: {
    simpleExplanation: {
      english: 'Produced from deep middle throat by contracting throat muscles.',
      hinglish: 'Gale ke bilkul beech (middle throat) se saaf Ain ki awaz nikalein.',
      urdu: 'حلق کے درمیانی حصے (وسط الحلق) کے عضلات دبانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Contract middle throat muscles firmly.',
      hinglish: 'Gale ke beech ke hisse ko thoda dabayein.',
      urdu: 'وسط الحلق کے عضلات میں تناؤ پیدا کریں۔',
    },
    step1Label: {
      english: 'Squeeze middle throat',
      hinglish: 'Gale ke beech dabayein',
      urdu: 'وسط الحلق کا دباؤ',
    },
    step2: {
      english: 'Release deep clear Ain sound.',
      hinglish: 'Gale ke beech se saaf Ain awaz nikalein.',
      urdu: 'وسط الحلق سے صاف عین کی آواز جاری کریں۔',
    },
    step2Label: {
      english: 'Clear Ain release',
      hinglish: 'Saaf Ain awaz',
      urdu: 'صاف اور گہری عین',
    },
    keyRule: {
      english: 'Middle throat letter. Never sound like Hamzah (ء).',
      hinglish: 'Gale ke beech ka letter. Hamzah (ء) ki tarah mat bolein.',
      urdu: 'وسط الحلق کا حرف ہے۔ ہمزہ سے ممتاز رکھیں۔',
    },
  },

  // 19. Ghain (غ)
  19: {
    simpleExplanation: {
      english: 'Produced from top of throat near back tongue with gargling sound.',
      hinglish: 'Gale ke sabse uper wale hisse se gargling (ghar-ghar) jaisi moti awaz nikalein.',
      urdu: 'حلق کے سب سے اوپری حصے (ادنیٰ الحلق) سے غرارے جیسی آواز کے ساتھ ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Position back tongue near top of throat.',
      hinglish: 'Pichhli zabaan uper gale ke paas laayein.',
      urdu: 'زبان کی پشت ادنیٰ الحلق کے پاس لائیں۔',
    },
    step1Label: {
      english: 'Back tongue near top throat',
      hinglish: 'Pichhli zabaan gale ke paas',
      urdu: 'پشت زبان ادنیٰ الحلق کے پاس',
    },
    step2: {
      english: 'Release heavy gargling Ghain sound.',
      hinglish: 'Moonh bhar kar moti Ghain awaz nikalein.',
      urdu: 'منہ بھر کر غرارے نما موٹی غین بولیں۔',
    },
    step2Label: {
      english: 'Heavy Ghain release',
      hinglish: 'Moti Ghain awaz',
      urdu: 'پر اور موٹی غین',
    },
    keyRule: {
      english: 'Heavy letter (Musta\'aliyah). No harsh scratching.',
      hinglish: 'Mota letter hai. Moonh bhar kar padhein.',
      urdu: 'حروفِ مستعلیہ میں سے ہے۔ منہ بھر کر موٹا پڑھیں۔',
    },
  },

  // 20. Faa (ف)
  20: {
    simpleExplanation: {
      english: 'Produced by placing edge of upper front teeth on inner wet lower lip.',
      hinglish: 'Uper wale daanton ke kinaroon ko niche wale honth ke andaruni geele hisse par lagayein.',
      urdu: 'اوپر کے دانتوں کے کناروں کو نیچے کے ہونٹ کے اندرونی تر حصے پر لگانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Touch upper front teeth to inside lower lip.',
      hinglish: 'Uper daant niche honth ke andar lagayein.',
      urdu: 'اوپر کے دانت نیچے کے ہونٹ کے اندر لگائیں۔',
    },
    step1Label: {
      english: 'Teeth on inner lower lip',
      hinglish: 'Daant niche honth par',
      urdu: 'دانت نیچے کے ہونٹ پر',
    },
    step2: {
      english: 'Blow soft air through teeth for Faa.',
      hinglish: 'Naram hawa se Faa bolein.',
      urdu: 'نرم سانس کے ساتھ فاء بولیں۔',
    },
    step2Label: {
      english: 'Soft Faa release',
      hinglish: 'Naram Faa awaz',
      urdu: 'نرم فاء',
    },
    keyRule: {
      english: 'Light letter with soft breath friction.',
      hinglish: 'Bareek letter hai. Naram hawa se padhein.',
      urdu: 'باریک حرف ہے۔ نرم سانس جاری رکھیں۔',
    },
  },

  // 21. Qaaf (ق)
  21: {
    simpleExplanation: {
      english: 'Heavy deep Q sound from back of tongue against soft palate.',
      hinglish: 'Zabaan ke bilkul pichhle hisse ko uper naram taloo se lagakar moonh bhar kar mota Qaaf (ق) bolein.',
      urdu: 'زبان کی جڑ کو اوپر کے نرم تالو سے لگا کر منہ بھر کر پر قاف ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Press extreme back of tongue on soft palate.',
      hinglish: 'Zabaan ki jadd ko naram taloo par dabayein.',
      urdu: 'زبان کی جڑ نرم تالو سے لگائیں۔',
    },
    step1Label: {
      english: 'Back tongue on soft palate',
      hinglish: 'Zabaan jadd naram taloo par',
      urdu: 'جڑِ زبان نرم تالو پر',
    },
    step2: {
      english: 'Release heavy popping Qaaf sound.',
      hinglish: 'Moonh bhar kar mota Qaaf bolein.',
      urdu: 'منہ بھر کر موٹی اور پُر قاف ادا کریں۔',
    },
    step2Label: {
      english: 'Heavy Qaaf release',
      hinglish: 'Moti Qaaf awaz',
      urdu: 'پر اور موٹی قاف',
    },
    keyRule: {
      english: 'Heavy letter with Qalqalah when saakin (قْ).',
      hinglish: 'Mota letter hai. Saakin (قْ) par Qalqalah karein.',
      urdu: 'حروفِ مستعلیہ اور قلقلہ میں سے ہے۔',
    },
  },

  // 22. Kaaf (ك)
  22: {
    simpleExplanation: {
      english: 'Light K sound from back of tongue against hard palate.',
      hinglish: 'Zabaan ke pichhle hisse ko uper sakht taloo se lagakar Kaaf (ك) bolein.',
      urdu: 'زبان کے پچھلے حصے کو قاف سے ذرا آگے سخت تالو سے لگانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Place back tongue on hard palate in front of Qaaf.',
      hinglish: 'Zabaan pichhla hissa sakht taloo par rakhein.',
      urdu: 'زبان کی پشت سخت تالو سے لگائیں۔',
    },
    step1Label: {
      english: 'Back tongue on hard palate',
      hinglish: 'Zabaan pichhla hissa sakht taloo par',
      urdu: 'پشتِ زبان سخت تالو پر',
    },
    step2: {
      english: 'Release light K sound with soft puff.',
      hinglish: 'Halki hawa se Kaaf bolein.',
      urdu: 'نرم ہوا کے ساتھ کاف ادا کریں۔',
    },
    step2Label: {
      english: 'Light Kaaf release',
      hinglish: 'Halki Kaaf awaz',
      urdu: 'باریک کاف',
    },
    keyRule: {
      english: 'Light letter with soft breath puff (Hams). Distinct from heavy Q.',
      hinglish: 'Bareek letter hai. Mota Qaaf (ق) se alag karein.',
      urdu: 'باریک حرف ہے۔ موٹی قاف سے ممتاز رکھیں۔',
    },
  },

  // 23. Laam (ل)
  23: {
    simpleExplanation: {
      english: 'Produced by touching front side of tongue to gums of upper front teeth.',
      hinglish: 'Zabaan ki samne ki karwat ko uper daanton ke masoodoon (gums) par lagayein.',
      urdu: 'زبان کے سامنے کے کنارے کو اوپر کے دانتوں کے مسوڑھوں سے ملانے سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Place front tongue edge on upper teeth gums.',
      hinglish: 'Zabaan ki samne ki karwat masoodoon par rakhein.',
      urdu: 'زبان کا کنارہ اوپر کے مسوڑھوں پر رکھیں۔',
    },
    step1Label: {
      english: 'Front tongue on upper gums',
      hinglish: 'Zabaan karwat masoodoon par',
      urdu: 'کنارہِ زبان مسوڑھوں پر',
    },
    step2: {
      english: 'Release smooth Laam sound.',
      hinglish: 'Saaf Laam awaz nikalein.',
      urdu: 'صاف لام کی آواز جاری کریں۔',
    },
    step2Label: {
      english: 'Smooth Laam release',
      hinglish: 'Saaf Laam awaz',
      urdu: 'صاف لام',
    },
    keyRule: {
      english: 'Usually light, but heavy in Lafz Allah after Zabar/Pesh.',
      hinglish: 'Aam taur par Bareek, lekin Lafz Allah me Zabar/Pesh par Mota.',
      urdu: 'عام طور پر باریک، لفظِ اللہ میں زبر/پیش پر موٹا۔',
    },
  },

  // 24. Meem (م)
  24: {
    simpleExplanation: {
      english: 'Produced by closing dry outer lips together with nasal sound.',
      hinglish: 'Dono honthon ke suke hisse ko milakar naak ki awaz (Ghunnah) se bolein.',
      urdu: 'دونوں ہونٹوں کے خشک حصے کو ملانے اور ناک سے غنہ کی آواز سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Close outer lips together softly.',
      hinglish: 'Dono honth milayein.',
      urdu: 'دونوں ہونٹ نرمی سے ملائیں۔',
    },
    step1Label: {
      english: 'Close lips softly',
      hinglish: 'Honth milayein',
      urdu: 'ہونٹوں کا اتصال',
    },
    step2: {
      english: 'Release Meem with nasal resonance.',
      hinglish: 'Naak ki gungunjahat se Meem bolein.',
      urdu: 'ناک کی گونج کے ساتھ میم بولیں۔',
    },
    step2Label: {
      english: 'Nasal Meem release',
      hinglish: 'Nasal Meem awaz',
      urdu: 'غنہ والی میم',
    },
    keyRule: {
      english: 'Has Ghunnah (nasal sound). Hold when doubled (مّ).',
      hinglish: 'Naak ki awaz (Ghunnah) wala letter. Tashdeed (مّ) par rokein.',
      urdu: 'غنہ والا حرف ہے۔ تشدید پر ۱ الف روکیں۔',
    },
  },

  // 25. Noon (ن)
  25: {
    simpleExplanation: {
      english: 'Produced from tongue tip on gums of upper teeth with Ghunnah.',
      hinglish: 'Zabaan ki nok uper masoodoon par lagakar naak ki awaz (Ghunnah) se Noon bolein.',
      urdu: 'زبان کی نوک کو اوپر کے مسوڑھوں سے لگا کر ناک کی آواز (غنہ) کے ساتھ ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Place tongue tip on upper front teeth gums.',
      hinglish: 'Zabaan nok uper masoodoon par rakhein.',
      urdu: 'زبان کی نوک اوپر کے مسوڑھوں پر رکھیں۔',
    },
    step1Label: {
      english: 'Tip on upper gums',
      hinglish: 'Nok masoodoon par',
      urdu: 'نوک مسوڑھوں پر',
    },
    step2: {
      english: 'Release Noon with nasal sound.',
      hinglish: 'Naak ki awaz se Noon bolein.',
      urdu: 'ناک کی گونج سے نون ادا کریں۔',
    },
    step2Label: {
      english: 'Nasal Noon release',
      hinglish: 'Nasal Noon awaz',
      urdu: 'غنہ والا نون',
    },
    keyRule: {
      english: 'Has Ghunnah. Primary letter for Tajweed rules (Izhar/Ikhfa).',
      hinglish: 'Ghunnah ka primary letter hai.',
      urdu: 'غنہ اور احکامِ نون کا بنیادی حرف ہے۔',
    },
  },

  // 26. Waaw (و)
  26: {
    simpleExplanation: {
      english: 'Produced by rounding both lips with a small central opening.',
      hinglish: 'Dono honthon ko gol (circle) karke chhota surakh chhodte hue Waaw bolein.',
      urdu: 'دونوں ہونٹوں کو گول کر کے درمیانی سوراخ سے واؤ ادا ہوتی ہے۔',
    },
    step1: {
      english: 'Round both lips into a small circle.',
      hinglish: 'Honthon ko gol karein.',
      urdu: 'ہونٹوں کو گول کریں۔',
    },
    step1Label: {
      english: 'Round both lips',
      hinglish: 'Honth gol karein',
      urdu: 'ہونٹوں کی گولائی',
    },
    step2: {
      english: 'Release smooth W sound.',
      hinglish: 'Saaf Waaw awaz nikalein.',
      urdu: 'ہموار واؤ کی آواز جاری کریں۔',
    },
    step2Label: {
      english: 'Smooth Waaw release',
      hinglish: 'Saaf Waaw awaz',
      urdu: 'صاف واؤ',
    },
    keyRule: {
      english: 'Do not bite lower lip like Faa or V sound.',
      hinglish: 'Honth gol karein. V ki tarah daant mat lagayein.',
      urdu: 'ہونٹ گول کریں۔ انگریزی V کی طرح دانت نہ لگائیں۔',
    },
  },

  // 27. Haa (ھ)
  27: {
    simpleExplanation: {
      english: 'Produced from bottom of throat deep from chest.',
      hinglish: 'Gale ke sabse niche wale hisse (bottom throat / chest) se Haa bolein.',
      urdu: 'حلق کے سب سے نیچے والے حصے (اقصیٰ الحلق) سے سادگی سے ادا ہوتا ہے۔',
    },
    step1: {
      english: 'Open bottom of throat relaxed.',
      hinglish: 'Niche gale ko aaram se khol kar rakhein.',
      urdu: 'اقصیٰ الحلق کو نرمی سے کھولیں۔',
    },
    step1Label: {
      english: 'Open bottom throat',
      hinglish: 'Niche galam kholain',
      urdu: 'اقصیٰ الحلق کھولیں',
    },
    step2: {
      english: 'Release deep breathy Haa sound.',
      hinglish: 'Gahre gale se Haa (ھ) bolein.',
      urdu: 'سینے سے گہری ہاء بولیں۔',
    },
    step2Label: {
      english: 'Deep Haa release',
      hinglish: 'Gahri Haa awaz',
      urdu: 'گہری ہاء',
    },
    keyRule: {
      english: 'Deep throat letter. Light and breathy.',
      hinglish: 'Gale ke aakhir ka letter hai. Light padhein.',
      urdu: 'اقصیٰ الحلق کا حرف ہے۔ نرمی سے ادا کریں۔',
    },
  },

  // 28. Yaa (ي)
  28: {
    simpleExplanation: {
      english: 'Produced by raising middle of tongue towards upper palate without closing.',
      hinglish: 'Zabaan ke beech ko uper taloo ki taraf utakar Yaa bolein.',
      urdu: 'زبان کے درمیانی حصے کو اوپر تالو کی طرف اٹھا کر یاء ادا ہوتی ہے۔',
    },
    step1: {
      english: 'Raise middle of tongue towards roof of mouth.',
      hinglish: 'Beech zabaan taloo ki taraf utayein.',
      urdu: 'درمیانِ زبان تالو کی طرف اٹھائیں۔',
    },
    step1Label: {
      english: 'Raise middle tongue',
      hinglish: 'Beech zabaan utayein',
      urdu: 'درمیانِ زبان کا ابھار',
    },
    step2: {
      english: 'Release smooth Yaa sound.',
      hinglish: 'Saaf Yaa awaz nikalein.',
      urdu: 'ہموار یاء کی آواز جاری کریں۔',
    },
    step2Label: {
      english: 'Smooth Yaa release',
      hinglish: 'Saaf Yaa awaz',
      urdu: 'صاف یاء',
    },
    keyRule: {
      english: 'Light vowel/consonant letter. Keep jaw relaxed.',
      hinglish: 'Bareek letter hai. Jabda normal rakhein.',
      urdu: 'باریک حرف ہے۔ تالو سے مکمل نہ چپکائیں۔',
    },
  },
};

export function getTrilingualMakhrajText(lessonNumber: number, lang: LanguageOption) {
  const item = MAKHRAJ_TRILINGUAL_DB[lessonNumber] || MAKHRAJ_TRILINGUAL_DB[1];
  const l = lang === 'english' ? 'english' : lang === 'urdu' ? 'urdu' : 'hinglish';
  return {
    simpleExplanation: item.simpleExplanation[l],
    step1: item.step1[l],
    step1Label: item.step1Label[l],
    step2: item.step2[l],
    step2Label: item.step2Label[l],
    keyRule: item.keyRule[l],
  };
}
