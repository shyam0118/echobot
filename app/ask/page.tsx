"use client";

import "regenerator-runtime/runtime";
import TextArea from "@/components/Inputs/TextArea";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import BlinkingDotsBG from "@/components/UIElements/BlinkingDotsBG";
import { ChangeEvent, useState } from "react";
import {
  CopyIcon,
  StarIcon,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";
import FileUpload from "@/components/Inputs/FileUpload";
import { rtfToText } from "@/utils/rtfToText";
import LinkPaste from "@/components/Inputs/LinkPaste";
import useTranslate from "@/hooks/useTranslate";
import LanguageSelector from "@/components/Inputs/LanguageSelector";

export default function Home() {
  const [sourceText, setSourceText] = useState("");
  const [copied, setCopied] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [languages, setLanguages] = useState([
    "English",
    "Hindi",
    "Odia",
    "French",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");

  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleAudioPlayBack = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleLinkPaste = () => {};

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <BlinkingDotsBG>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">
              Echo Bot
            </h1>
            <p className="text- text-neutral-200">
              An AI-powered language converter that translates and adapts speech
              and text seamlessly in real-time.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-700/20">
                  <TextArea
                    id="source-language"
                    value={sourceText}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                      setSourceText(e.target.value);
                    }}
                    placeholder={"Enter text"}
                  />
                  <div className="flex flex-row justify-between w-full p-1">
                    <div className="cursor-pointer flex space-x-2 flex-row">
                      <SpeechRecognitionComponent
                        setSourceText={setSourceText}
                      />
                      <Volume2
                        size={22}
                        className="text-gray-400"
                        onClick={() => handleAudioPlayBack(sourceText)}
                      />
                      <FileUpload handleFileUpload={handleFileUpload} />
                      <LinkPaste handleLinkPaste={handleLinkPaste} />
                    </div>
                    <div className="text-sm text-gray-400">
                      {sourceText?.length} / 2000
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col space-x-3 rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-700/20">
                  <TextArea
                    id="target-language"
                    value={targetText}
                    onChange={() => {}}
                    placeholder="Target language"
                  />
                  <div className="flex flex-row justify-between w-full">
                    <div className="cursor-pointer flex space-x-2 flex-row items-center p-2">
                      <LanguageSelector
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        languages={languages}
                      />
                      <Volume2
                        size={22}
                        onClick={() => handleAudioPlayBack(targetText)}
                      />
                    </div>
                    <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                      <CopyIcon size={22} onClick={handleCopyToClipboard} />
                      {copied && (
                        <span className="text-xs text-green-400">Copied!</span>
                      )}
                      <ThumbsUp size={22} />
                      <ThumbsDown size={22} />
                      <StarIcon
                        size={22}
                        onClick={handleFavourite}
                        className={`${favourite && "text-yellow-500"}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlinkingDotsBG>
  );
}
