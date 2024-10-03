import EngServicesCards from "./eng-services-cards/EngServicesCards"
import EngSubCard from "./eng-services-cards/EngSubCard"
import Banner from "@/global/component/banner/Banner"
export default function EngServices() {
    return (
        <div className=" bg-slate-50 ">
            <div className="space-y-10">
                <Banner
                    heading={"Services"}
                    subHeading="Engineering Services"
                    image={{ imageSrc: '/services/eng-services/bannerImage.webp', alt: "Engineering services banner image" }}
                />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Welcome to Engineering Services</h1>
            </div>
            <EngServicesCards />
            <EngSubCard />
        </div>
    )
}