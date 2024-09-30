'use client'
import useObserver from "@/shared/hooks/useObserver"
import "./animation.css"
import ServicesItems from "./ServicesItems"
export default function QuickServicesBar() {
    const { isCardVisible } = useObserver("hui", 0.7, ['opcaity-100'])
    const data = [
        { label: "Quick To Hire", image: { imageSrc: "/homepage/bulb.svg", alt: "hire logo" }, animationTime: 200 },
        { label: "Best Talented Experts", image: { imageSrc: "./homepage/bolt.svg", alt: "expert logo" }, animationTime: 300 },
        { label: "360-Degree Recruitment Services", image: { imageSrc: "./homepage/user.svg", alt: "recruitment logo" }, animationTime: 500 },
        { label: "Connected you with Talented WorldWide", image: { imageSrc: "./homepage/globe.svg", alt: "connect with talent logo" }, animationTime: 800 }]

    return (
        <section
            aria-labelledby="quick-services-heading"
            className={`hui xl:flex md:flex duration- pointer-events-none select-none lg:text-lg text-sm justify-evenly  lg:space-y-0 space-y-5 text-white font-bold lg:h-32 items-center pl-5 py-8  gap-8 lg:text-center bg-gradient-to-r from-sky-700 via-teal-600 to-green-600`}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={` opacity-0 ${isCardVisible && 'quickServicesBarLogo'} `} >
                        <ServicesItems item={item} />
                    </div>

                )
            })}
        </section>


    )
}