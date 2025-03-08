"use client";

import BlinkingDotsBG from "@/components/UIElements/BlinkingDotsBG";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <BlinkingDotsBG>
      <div className=" h-screen flex justify-center items-center">
        {/* Blur bg */}
        {/* <div className="absolute inset-0 bg-white/1 backdrop-blur-[1px]"></div> */}
        <button
          className="bg-dark-600 text-white px-6 py-3 text-lg cursor-pointer border-1 font-semibold rounded-lg shadow-md transition-all 
                     duration-300 hover:bg-dark-700 hover:shadow-lg focus:outline-none focus:ring-2 
                     focus:ring-dark-500 focus:ring-opacity-50"
          onClick={() => router.push("/ask")}
        >
          Get Started
        </button>
      </div>
    </BlinkingDotsBG>
  );
}
