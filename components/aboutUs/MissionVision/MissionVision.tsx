import OfferingsAndStrategy from "./offering-and-startegy/OfferingsAndStrategy";
import MissionStatement from "./mission-statement/MissionStatement";
import WhoUs from "./who-we-are/WhoUs";
export default function MissionVision() {
    return (
        <div>
            <div className="bg-red-50 pb-10">

                <WhoUs />
                <MissionStatement />
            </div>
            <OfferingsAndStrategy />
        </div >
    );
}
