import LeadGen from "@/components/solutions/lead-gen/LeadGen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "B2B Lead Generation Services for High-Quality Business Leads",
    description: `Boost your business with Bista's B2B lead generation. Our data-driven strategies deliver high-quality leads aligned with your goals.oward unprecedented growth and success, fostering a culture of excellence.`,
    keywords: ` B2B lead generation, high-quality leads, market research, digital marketing campaigns, SEO optimization, business growth solutions`
};
export default function leadGen() {
    return (

        <LeadGen />

    )
}