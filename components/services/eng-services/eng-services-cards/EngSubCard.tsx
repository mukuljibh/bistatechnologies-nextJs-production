'use client'
import { cardsConfig } from "../config/engServicesConfig"
import useObserver from "@/shared/hooks/useObserver"
import Card from "@/components/ui/merged_components/service-cards/Card"
export default function EngSubCard() {
    const { isCardVisible } = useObserver('engServices', 0.7, ['opacity-100'])

    return (
        <div className="bg-purple-50 py-20 space-y-10">
            <h1 className="text-3xl text-gray-700 text-center font-semibold">Scale Up Your Team The Way You Want</h1>
            <div className={`engServices  lg:flex  justify-center ${isCardVisible && 'engSubCard'} gap-16 lg:space-y-0 space-y-10`}>
                {cardsConfig.map((data, index) => {
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