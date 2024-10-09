import MarketResearch from "@/components/solutions/market-research/MarketResearch"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Empowering Decisions: Tailored Market Research Services",
    description: `Our Market Research Services provide in-depth industry analysis, competitive insights,
    customer behavior studies, and market entry strategies. We empower businesses with the knowledge to identify opportunities,
     refine strategies, and enhance product offerings, ensuring a competitive edge in the market`,
    keywords: `market research, industry analysis, competitive analysis, 
    customer insights, market entry strategy, product research`
};
export default function marketResearch() {
    return (

        <MarketResearch />

    )
}