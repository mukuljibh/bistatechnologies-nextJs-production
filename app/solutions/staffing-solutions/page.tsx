import StaffingSolutions from "@/components/solutions/staffing-solutions/StaffingSolutions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Staffing Solutions: Permanent, Temporary & Project-Based Services",
    description: `Expert staffing solutions by Bista Technologies. Get permanent, temporary, and project-based staff tailored to your business needs.`,
    keywords: `staffing solutions, permanent staffing,
     temporary staffing, project-based staffing, workforce solutions,
      talent acquisition, recruitment services, contract staffing, vetted candidates, 
      short-term staffing, project-based professionals, Bista Technologies staffing`
};
export default function staffingSolutions() {
    return (

        <StaffingSolutions />

    )
}