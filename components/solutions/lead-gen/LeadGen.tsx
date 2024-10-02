'use client'
import Image from "next/image";
import LeadGenCards from "./lead-gen-cards/LeadGenCards";

export default function LeadGen() {
  return (
    <div className="bg-slate-50 lg:mb-0 mb-10">
      <div className="space-y-10 lg:mb-16">
        <Image className="w-full " src="/solutions/lead-gen/banner.jpg" alt="staffing solutions banner" width="1920" height="600" />
        <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Lead Generation</h1>
      </div>
      <LeadGenCards />
    </div>

  );
}
