import { Languages } from "lucide-react";
import React from "react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  languages: string[];
}

const LanguageSelector = ({selectedLanguage, setSelectedLanguage, languages}: LanguageSelectorProps) => (
  <div className="cursor-pointer rounded-full space-x-1 pl-2 bg-black flex items-center flex-row">
    <Languages size={22} />
    <select
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value)}
      className="flex flex-row bg-black py-1 text-white"
    >
      {languages.map((language: string) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  </div>
);

export default LanguageSelector;
