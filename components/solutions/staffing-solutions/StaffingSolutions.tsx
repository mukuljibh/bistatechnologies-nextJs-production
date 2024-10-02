'use client'
import Image from "next/image";
import StaffingSolutionsCards from "./staffing-sol-cards/StaffingSolutionCards";
export default function StaffingSolutions() {


  return (
    <div className="bg-slate-50 lg:mb-0 mb-10">
      <div className="space-y-10 lg:mb-16">
        <Image className="w-full " src="/solutions/staffing-solutions/banner.jpg" alt="staffing solutions banner" width="1920" height="600" />
        <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Staffing Solutions</h1>
      </div>
      <StaffingSolutionsCards />
    </div>

  );
}
