import EngServicesCards from "./eng-services-cards/EngServicesCards"
import EngSubCard from "./eng-services-cards/EngSubCard"
import Image from "next/image"
import './animations/engServicesAnimation.css'
export default function EngServices() {
    return (
        <div className=" bg-slate-50 ">
            <div className="space-y-10 lg:mb-16">
                <Image className="w-full" src="/services/eng-services/1.webp" alt="eng-services banner" width="1920" height="600" />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Welcome to Engineering Staffing Solutions</h1>
            </div>
            <EngServicesCards />
            <EngSubCard />
        </div>
    )
}