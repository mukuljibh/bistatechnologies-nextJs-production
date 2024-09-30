'use client'
import { MissionVisionconfig } from "../config/MissionVisionconfig";
import MainCard from "@/components/ui/merged_components/service-cards/mainCard/MainCard";
export default function WhoUs() {
    return (
        <div>
            {MissionVisionconfig.map((item, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={item.heading1}
                        heading2={item.heading2}
                        image={item.image}
                        description={item.description}
                        cardCss={item.cardCss}
                        headingCss={item.headingCss}
                        observingClass={"mission-vision"}
                        finalTransition={['opacity-100', 'gap-x-0']}
                    />
                )
            })}
        </div>
    )
}