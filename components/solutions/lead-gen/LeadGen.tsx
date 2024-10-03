'use client'
import LeadGenCards from "./lead-gen-cards/LeadGenCards";
import Banner from "@/global/component/banner/Banner";
export default function LeadGen() {
  return (
    <div className="bg-slate-50 lg:mb-0 mb-10">
      <div className="space-y-10 ">
        <Banner heading="Solutions" subHeading="Lead generation" image={{ imageSrc: "/solutions/lead-gen/bannerImage.webp", alt: "training and developement banner image" }} />
        <h1 className="text-4xl  font-semibold text-center text-gray-700">Lead Generation</h1>
      </div>
      <LeadGenCards />
    </div>

  );
}
