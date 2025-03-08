import BlinkingDotsBG from "@/components/BlinkingDotsBG";

export default function Home() {
  return (
    <BlinkingDotsBG>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">
              Echo Bot
            </h1>
          </div>
        </div>
      </div>
    </BlinkingDotsBG>
  );
}
