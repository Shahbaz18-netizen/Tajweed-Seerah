import React from 'react';
import type { LanguageOption } from '../utils/translations';
import type { AppMode } from '../types';
import { SeerahJourneyView } from './SeerahJourneyView';

interface UniversalLifeMasteryViewProps {
  language?: LanguageOption;
  mode: AppMode;
  onChangeLanguage?: (lang: LanguageOption) => void;
}

export const UniversalLifeMasteryView: React.FC<UniversalLifeMasteryViewProps> = ({
  language = 'hinglish',
  onChangeLanguage,
}) => {
  return (
    <SeerahJourneyView
      language={language}
      onSelectLanguage={onChangeLanguage}
    />
  );
};
