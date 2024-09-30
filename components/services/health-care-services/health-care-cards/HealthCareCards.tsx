'use client'
import { healthMainConfig } from "../config/healthCareConfig"
import MainCard from "@/components/ui/merged_components/service-cards/mainCard/MainCard"
export default function HealthCareCards() {
    return (
        <div>
            {healthMainConfig.map(({ heading1, heading2, image, description, cardCss, headingCss }, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={heading1}
                        heading2={heading2}
                        image={image}
                        description={description}
                        cardCss={cardCss}
                        headingCss={headingCss}
                        observingClass={"EngServicesCards"}
                        finalTransition={['opacity-100', 'gap-x-1']}
                    />
                )
            })}
        </div>
    )
}