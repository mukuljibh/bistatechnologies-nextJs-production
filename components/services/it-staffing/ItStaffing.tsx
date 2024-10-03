import ItStaffingCards from "./it-staffing-cards/ItStaffingCards"
import ItSubCards from "./it-staffing-cards/ItSubCards"
import Banner from "@/global/component/banner/Banner"
export default function ItStaffing() {

    return (
        <div className="bg-slate-50 ">
            <div className="space-y-10 ">
                <Banner heading="Services" subHeading="IT staffing" image={{ imageSrc: "/services/it-staffing/bannerImage.webp", alt: "IT staffing banner image" }} />
                <h1 className="text-4xl  font-semibold text-center text-gray-700">IT Resource Augmentation</h1>
            </div>
            <ItStaffingCards />
            <ItSubCards />

        </div>
    )
}