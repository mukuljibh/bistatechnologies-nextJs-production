import OurStoryLine from "@/components/aboutUs/OurstoryLines/OurStoryLine";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bista Technologies - Empowering Global Workforce Solutions Since 2023",
    description: `Learn the inspiring story of Bista Technologies Inc.,
     founded in 2023 by visionary entrepreneurs. From humble beginnings with one team member,
      we’ve grown into a global leader in staffing, serving Fortune 2000 companies across the UAE, US, and UK. 
      Specializing in IT and Non-IT staffing solutions, we are dedicated to driving business success worldwide`,
    keywords: `Bista Technologies Inc.,
     Global Staffing Solutions,IT and Non-IT Staffing, Workforce Solutions, Fortune 2000 Staffing Partner, 
     Offshore Staffing, SOW-based Project Staffing, Contract and Full-time Staffing, 
     Dubai Staffing Agency, UAE Talent Acquisition, US Staffing Expansion`
};
export default function ourStoryLine() {
    return (
        <OurStoryLine />

    )
}