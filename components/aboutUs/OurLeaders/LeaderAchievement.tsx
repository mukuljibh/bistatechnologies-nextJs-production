'use client'
import MainCard from "@/components/ui/merged_components/service-cards/mainCard/MainCard"
import { ourLeadersAchivement } from "./config/ourLeadersconfig"
export default function LeaderAchievement() {
    return (
        <div>
            {ourLeadersAchivement.map((item, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={item.heading1}
                        heading2={item.heading2}
                        image={item.image}
                        description={item.description}
                        cardCss={item.cardCss}
                        headingCss={item.headingCss}
                        observingClass={"our-leaders"}
                        finalTransition={['opacity-100', 'gap-x-0']}

                    />
                )
            })}
        </div>
    )
}