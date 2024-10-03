import NonItStaffingCards from "./non-it-staffing-cards/NonItStaffingCards"
import NonItSubCards from "./non-it-staffing-cards/NonItSubCards"
import Banner from "@/global/component/banner/Banner"
export default function NonItStaffing() {
    return (
        <div className="bg-slate-50 ">

            <div className="space-y-10 ">
                <Banner heading="Services" subHeading="Non IT staffing" image={{ imageSrc: "/services/non-it-staffing/bannerImage.webp", alt: "Non IT staffing banner image" }} />
                <h1 className="text-4xl  font-semibold text-center text-gray-700">IT Resource Augmentation</h1>
            </div>
            <NonItStaffingCards />
            <NonItSubCards />
        </div>
    )
}