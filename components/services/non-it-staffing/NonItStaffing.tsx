import NonItStaffingCards from "./non-it-staffing-cards/NonItStaffingCards"
import NonItSubCards from "./non-it-staffing-cards/NonItSubCards"
import Image from "next/image"
export default function NonItStaffing() {
    return (
        <div className="bg-slate-50 ">
            <div className="space-y-10 lg:mb-16">
                <Image className="w-full " src="/services/non-it-staffing/1.jpg" alt="Non IT banner" width="1200" height="800" />
                <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">Innovative Staffing for the Future of Your Business
                </h1>
            </div>
            <NonItStaffingCards />
            <NonItSubCards />
        </div>
    )
}