import MissionVision from "@/components/aboutUs/MissionVision/MissionVision"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expert Consulting for IT & Non-IT Services",
    description: `Bista Technologies Inc., a leading global staffing agency based in Dubai,
     UAE, connects businesses with top-tier talent in IT, healthcare, engineering, and finance. 
     Offering personalized staffing solutions, our expert team drives long-term success through strategic hiring, global reach, and commitment to quality.`,
    keywords: `Global Staffing Solutions, 
    IT Staffing Services, Healthcare Staffing, 
    Engineering Recruitment, Workforce Solutions UAE, 
    Bista Technologies Inc., International Talent Acquisition,
     Tailored Staffing Solutions.`
};
export default function missionVision() {
    return (
        <MissionVision />
    )
}