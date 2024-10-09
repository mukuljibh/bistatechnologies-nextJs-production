'use client'
import Card from "@/components/ui/merged_components/service-cards/Card"
import { ourServicesData } from "../../config/homepage.config"
import useObserver from "@/shared/hooks/useObserver"
export default function OurServicesCards() {
    const { isCardVisible } = useObserver('ourServices', 0.25, ['opacity-100'])
    return (
        <section className={`ourServices lg:flex ${isCardVisible && 'cards'}  gap-16 lg:space-y-0 space-y-10`}>
            {ourServicesData.map((data, index) => {
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
        </section>
    )
}