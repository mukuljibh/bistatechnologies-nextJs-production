'use client'
import { itSubConfig } from "../config/itStaffingConfig"
import useObserver from "@/shared/hooks/useObserver"
import Card from "@/components/ui/merged_components/service-cards/Card"
import '../animations/itStaffingAnimation.css'

export default function ItSubCards() {
    const { isCardVisible } = useObserver('itStaffing', 0.25, ['opacity-100'])
    console.log(isCardVisible)
    return (
        <div className="bg-purple-50 py-20 space-y-10">
            <h1 className="text-3xl text-gray-700 text-center font-semibold">Scale Up Your Team The Way You Want</h1>
            <div className={`itStaffing px-5  lg:flex  justify-center ${isCardVisible && 'itSubCard'} gap-16 lg:space-y-0 space-y-10`}>
                {itSubConfig.map((data, index) => {
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