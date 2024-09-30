import Image from "next/image";
import OfferingsAndStrategy from "./offering-and-startegy/OfferingsAndStrategy";
import MissionStatement from "./mission-statement/MissionStatement";
import WhoUs from "./who-we-are/WhoUs";
export default function MissionVision() {
    return (
        <div>
            <div className="bg-red-50 pb-10">
                <div className="space-y-10 lg:mb-16">
                    <Image className="w-full" src="/about-us/mission-vision/1.webp" alt="" width="800" height="0" />
                    <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">About Bista Technologies Inc</h1>
                </div>
                <WhoUs />
                <MissionStatement />
            </div>
            <OfferingsAndStrategy />
        </div >
    );
}
