
import VisionStatementVideo from "./vision-statement-video/VisionStatementVideo";
import QuickServicesBar from "./quick-service-bar/QuickServicesBar";
import MsmeBanner from "./msme-banner/MsmeBanner";
import OurServices from "./our-services/OurServices";
import Metrics from "./hiring-metrics/Metrics";
import TeamBuildingBanner from "./team-building-banner/TeamBuildingBanner";
import CoreValuesBanner from "./core-values-banner/CoreValuesBanner";

export default function Homepage() {

    return (
        <>
            <VisionStatementVideo />
            <QuickServicesBar />
            <MsmeBanner />
            <OurServices />
            <Metrics />
            <TeamBuildingBanner />
            <CoreValuesBanner />
        </>
    )
}