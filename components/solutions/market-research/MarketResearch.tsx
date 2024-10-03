'use client'
import Image from "next/image";
import MarketResearchCards from "./market-research-cards/MarketResearchCards";

export default function MarketResearch() {
  return (
    <div className="bg-slate-50 lg:mb-0 mb-10">
      <div className="space-y-10 lg:mb-16">
        <Image className="w-full " src="/solutions/market-research/banner.jpg" alt="Training and developement banner" width="1920" height="600" />
        <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Market Research </h1>
      </div>
      <MarketResearchCards />
    </div>

  );
}
