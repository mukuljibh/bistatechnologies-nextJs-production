import Banner from "@/global/component/banner/Banner";
import HealthCareCards from "./health-care-cards/HealthCareCards";
import HealthSubCard from "./health-care-cards/HealthSubCard";

export default function HealthCareServices() {

    return (
        <div className="bg-slate-50">
            <div className="space-y-10">
                <Banner
                    heading={"Services"}
                    subHeading="HealthCare Staffing"
                    image={{ imageSrc: '/services/health-care/bannerImage.webp', alt: "HealthCare Staffing banner image" }}
                />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Welcome to HealthCare Staffing</h1>
            </div>
            <HealthCareCards />
            <HealthSubCard />
        </div >
    )
}