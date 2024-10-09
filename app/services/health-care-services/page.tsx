import HealthCareServices from "@/components/services/health-care-services/HealthCareServices"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Expert Healthcare Staffing Solutions for Every Need",
    description: `Bista Technologies provides flexible healthcare staffing,
     including temporary, permanent, travel nursing, and locum tenens services.
      Our experienced professionals ensure continuity of care and meet your facility’s specific needs, ensuring high-quality patient care`,
    keywords: `healthcare staffing, temporary staffing, permanent placement, 
    travel nursing, locum tenens, skilled healthcare professionals, Bista Technologies`
};
export default function healthcare() {
    return (
        <HealthCareServices />
    )
}