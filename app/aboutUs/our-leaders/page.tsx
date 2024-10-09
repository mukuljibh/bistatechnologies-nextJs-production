import OurLeaders from "@/components/aboutUs/OurLeaders/OurLeaders";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vipul Bhatia: The Visionary Behind Bista Technologies' Success",
    description: `Meet Vipul Bhatia, Co-Founder and Managing Director of Bista Technologies Inc.
     With over 9 years of expertise in team building, recruitment, and HR strategy, Vipul has successfully led a high-performing team of 100+ 
     professionals. His vision drives Bista Technologies toward unprecedented growth and success, fostering a culture of excellence.`,
    keywords: `Vipul Bhatia, Co-Founder Bista Technologies, 
    Managing Director Bista Technologies, Leadership in Staffing, High-Performing Teams,
     Recruitment Leadership, HR Strategy Expert, Team Building Success, Bista Technologies Leadership,
      Global Staffing Expertise`
};
export default function leaders() {
    return (
        <OurLeaders />
    )
}