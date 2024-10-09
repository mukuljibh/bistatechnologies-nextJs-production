import ItStaffing from "@/components/services/it-staffing/ItStaffing"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Elevate Your Projects with Expert IT Staffing Solutions",
    description: `Our Market Research Services provide in-depth industry analysis, competitive insights,
    customer behavior studies, and market entry strategies. We empower businesses with the knowledge to identify opportunities,
     refine strategies, and enhance product offerings, ensuring a competitive edge in the market`,
    keywords: `IT Staffing Services, Talent Acquisition, Project Management, Innovative Recruitment,
     Skilled IT Professionals, Agile Methodologies, Workforce Solutions, Technology Staffing, 
     Client-Centric IT Solutions, High-Performance Teams, Recruitment Strategy, IT Talent Management, Bista Technologies, Temporary IT Staffing, Permanent IT Placement`
};
export default function itStaffing() {
    return (

        <ItStaffing />


    )
}