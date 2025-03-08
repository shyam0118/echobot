"use client";

import TextArea from "@/components/Inputs/TextArea";
import BlinkingDotsBG from "@/components/UIElements/BlinkingDotsBG";
import { useState } from "react";

export default function Home() {
  const [sourceText, setSourceText] = useState("");
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
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row">

                    </span>

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
