import ItStaffingCards from "./it-staffing-cards/ItStaffingCards"
import Image from "next/image"
import ItSubCards from "./it-staffing-cards/ItSubCards"
export default function ItStaffing() {

    return (
        <div className="bg-slate-50 ">
            <div className="space-y-10 lg:mb-16">
                <Image className="w-full " src="/services/it-staffing/1.jpg" alt="IT banner" width="1200" height="500" />
                <h1 className="text-4xl  font-semibold text-center text-gray-700">IT Resource Augmentation</h1>
            </div>
            <ItStaffingCards />
            <ItSubCards />

        </div>
    )
}