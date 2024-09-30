'use client'
import { healthSubConfig } from "../config/healthCareConfig"
import useObserver from "@/shared/hooks/useObserver"
import Card from "@/components/ui/merged_components/service-cards/Card"
import '../animations/healthCareAnimation.css'
export default function HealthSubCard() {
    const { isCardVisible } = useObserver('engServices', 0.7, ['opacity-100'])

    return (
        <div className="bg-purple-50 py-20 space-y-10">
            <h1 className="text-3xl text-gray-700 text-center font-semibold">Scale Up Your Team The Way You Want</h1>
            <div className={`engServices  lg:flex  justify-center ${isCardVisible && 'healthSubCard'} gap-16 lg:space-y-0 space-y-10`}>
                {healthSubConfig.map((data, index) => {
                    return (
                        <Card
                            key={index}
                            heading={data.heading}
                            description={data.description}
                            imgSrc={data.image.imageSrc}
                            alt={data.image.alt}
                            css={data.css}
                        />
                    )
                })}
            </div>
        </div>
    )
}