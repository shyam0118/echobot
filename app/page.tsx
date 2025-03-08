import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-black min-h-screen w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] bg-[length:24px_24px] opacity-20"></div>

        <div className="relative z-10 flex items-center justify-center pt-32">
          <h1 className="text-gray-400 text-6xl font-bold">Backgrounds</h1>
        </div>
      </div>
    </div>
  );
}
