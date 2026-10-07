export interface JoiningExample {
  formula: string;    // e.g. "ا + ب" or "ث + ا" or "ب + ا + ب"
  joined: string;     // e.g. "اب" or "ثا" or "باب"
  sound: string;      // e.g. "Alif + Baa = ab" or "Thaa + Alif = thaa"
  isNonConnecting?: boolean;
}

export interface LetterJoiningSection {
  position: 'beginning' | 'middle' | 'end';
  title: string;
  arabicTitle: string;
  ruleExplanation: string;
  items: JoiningExample[];
  nonConnectingItems?: JoiningExample[];
}

export const getLetterJoiningData = (
  letterNum: number,
  char: string,
  name: string,
  pron: string
): LetterJoiningSection[] => {
  // ALIF (Letter 1 - ا) - 3 EXAMPLES EACH
  if (letterNum === 1 || char === 'ا') {
    return [
      {
        position: 'beginning',
        title: 'Beginning',
        arabicTitle: 'أول الكلمة',
        ruleExplanation: 'Alif comes first and does not join to the next letter.',
        items: [
          { formula: 'ا + ب', joined: 'اب', sound: 'Alif + Baa = ab' },
          { formula: 'ا + ت', joined: 'ات', sound: 'Alif + Taa = at' },
          { formula: 'ا + ن', joined: 'ان', sound: 'Alif + Noon = an' },
        ],
      },
      {
        position: 'middle',
        title: 'Middle',
        arabicTitle: 'وسط الكلمة',
        ruleExplanation: 'The letter before joins to Alif, and Alif does not join to the next letter.',
        items: [
          { formula: 'ب + ا + ب', joined: 'باب', sound: 'Baa + Alif + Baa = baab' },
          { formula: 'ت + ا + ب', joined: 'تاب', sound: 'Taa + Alif + Baa = taab' },
          { formula: 'م + ا + ل', joined: 'مال', sound: 'Meem + Alif + Laam = maal' },
        ],
        nonConnectingItems: [
          { formula: 'د + ا + ر', joined: 'دار', sound: 'Daal + Alif + Raa = daar', isNonConnecting: true },
          { formula: 'ر + ا + س', joined: 'راس', sound: 'Raa + Alif + Seen = raas', isNonConnecting: true },
          { formula: 'و + ا + د', joined: 'واد', sound: 'Waaw + Alif + Daal = waad', isNonConnecting: true },
        ],
      },
      {
        position: 'end',
        title: 'End',
        arabicTitle: 'آخر الكلمة',
        ruleExplanation: 'The letter before joins to Alif, and the word stops.',
        items: [
          { formula: 'ب + ا', joined: 'با', sound: 'Baa + Alif = baa' },
          { formula: 'ت + ا', joined: 'تا', sound: 'Taa + Alif = taa' },
          { formula: 'م + ا', joined: 'ما', sound: 'Meem + Alif = maa' },
        ],
        nonConnectingItems: [
          { formula: 'د + ا', joined: 'دا', sound: 'Daal + Alif = daa', isNonConnecting: true },
          { formula: 'ر + ا', joined: 'را', sound: 'Raa + Alif = raa', isNonConnecting: true },
          { formula: 'و + ا', joined: 'وا', sound: 'Waaw + Alif = waa', isNonConnecting: true },
        ],
      },
    ];
  }

  // THAA (Letter 4 - ث) - 3 EXAMPLES EACH
  if (letterNum === 4 || char === 'ث') {
    return [
      {
        position: 'beginning',
        title: 'Beginning',
        arabicTitle: 'أول الكلمة',
        ruleExplanation: `${name} (${char}) connects to the next letter at the start of a word.`,
        items: [
          { formula: 'ث + ا', joined: 'ثا', sound: 'Thaa + Alif = thaa' },
          { formula: 'ث + ب', joined: 'ثب', sound: 'Thaa + Baa = thab' },
          { formula: 'ث + م', joined: 'ثم', sound: 'Thaa + Meem = tham' },
        ],
      },
      {
        position: 'middle',
        title: 'Middle',
        arabicTitle: 'وسط الكلمة',
        ruleExplanation: `${name} (${char}) connects from both right and left in the middle.`,
        items: [
          { formula: 'م + ث + ل', joined: 'مثل', sound: 'Meem + Thaa + Laam = mathal' },
          { formula: 'ع + ث + م', joined: 'عثم', sound: 'Ain + Thaa + Meem = uthm' },
          { formula: 'ك + ث + ر', joined: 'كثر', sound: 'Kaaf + Thaa + Raa = kathar' },
        ],
      },
      {
        position: 'end',
        title: 'End',
        arabicTitle: 'آخر الكلمة',
        ruleExplanation: `${name} (${char}) connects to the preceding letter at the end.`,
        items: [
          { formula: 'ل + ي + ث', joined: 'ليث', sound: 'Laam + Yaa + Thaa = layth' },
          { formula: 'ح + د + ي + ث', joined: 'حديث', sound: 'Haa + Daal + Yaa + Thaa = hadeeth' },
          { formula: 'ب + ح + ث', joined: 'بحث', sound: 'Baa + Haa + Thaa = bahath' },
        ],
      },
    ];
  }

  // ALL OTHER ARABIC LETTERS - 3 EXAMPLES EACH
  return [
    {
      position: 'beginning',
      title: 'Beginning',
      arabicTitle: 'أول الكلمة',
      ruleExplanation: `${name} (${char}) connects to the following letter at the start of a word.`,
      items: [
        { formula: `${char} + ا`, joined: `${char}ا`, sound: `${pron} + Alif = ${pron.toLowerCase()}aa` },
        { formula: `${char} + و`, joined: `${char}و`, sound: `${pron} + Waw = ${pron.toLowerCase()}oo` },
        { formula: `${char} + ي`, joined: `${char}ي`, sound: `${pron} + Yaa = ${pron.toLowerCase()}ee` },
      ],
    },
    {
      position: 'middle',
      title: 'Middle',
      arabicTitle: 'وسط الكلمة',
      ruleExplanation: `${name} (${char}) connects to preceding and following letters in the middle.`,
      items: [
        { formula: `ب + ${char} + ل`, joined: `ب${char}ل`, sound: `Baa + ${name} + Laam` },
        { formula: `س + ${char} + ر`, joined: `س${char}ر`, sound: `Seen + ${name} + Raa` },
        { formula: `م + ${char} + د`, joined: `م${char}د`, sound: `Meem + ${name} + Daal` },
      ],
    },
    {
      position: 'end',
      title: 'End',
      arabicTitle: 'آخر الكلمة',
      ruleExplanation: `${name} (${char}) connects to the preceding letter at the end of a word.`,
      items: [
        { formula: `ب + ${char}`, joined: `ب${char}`, sound: `Baa + ${name}` },
        { formula: `س + ${char}`, joined: `س${char}`, sound: `Seen + ${name}` },
        { formula: `م + ${char}`, joined: `م${char}`, sound: `Meem + ${name}` },
      ],
    },
  ];
};
