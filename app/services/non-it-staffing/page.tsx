import NonItStaffing from "@/components/services/non-it-staffing/NonItStaffing";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Streamline Your Hiring Process and Reduce Recruitment Costs",
    description: `Bista Technologies offers specialized Non-IT staffing services in finance, human resources,
     and light industrial sectors. We connect businesses with top-tier finance professionals, skilled HR candidates,
      and light industrial workers to enhance operations and drive success.`,
    keywords: `Non-IT Staffing Solutions, Finance Staffing, Human Resource Hiring, Skilled Industrial Workers, 
    Compliance Support, Regulatory Guidance, Reduce Recruitment Costs, Improve Productivity, Expert Staffing Services,
     Top-Tier Talent, Workforce Optimization, Recruitment Efficiency, Business Success Solutions, 
     Light Industrial Staffing, Cost-Effective Hiring`
};
export default function nonItstaffing() {
    return (

        <NonItStaffing />


    )
}