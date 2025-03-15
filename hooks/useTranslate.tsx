import React, { useEffect, useState } from "react";
import { OpenAI } from "openai";

const openAi = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

interface useTranslateProps {
  sourceText: string;
  selectedLanguage: string;
}

const useTranslate = ({ sourceText, selectedLanguage }: useTranslateProps) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (sourceText: string) => {
      try {
        const response = await openAi.chat.completions.create({
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: `
                You will be provided a sentence. This sentence: ${sourceText}.
                Your task is to: 
                - Detect what language the sentence is in 
                - Translate the sentence into the ${selectedLanguage} language.
                do not return anything other then the translated sentence
                `,
            },
          ],
        });

        const data = response.choices[0].message.content || "";
        setTargetText(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    if (sourceText?.trim()) {
      const timeOutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500);
      return () => clearTimeout(timeOutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;