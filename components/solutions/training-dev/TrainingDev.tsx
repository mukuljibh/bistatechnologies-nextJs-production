'use client'
import TrainingDevCards from "./Training-dev-cards/TrainingDevCards";
import Banner from "@/global/component/banner/Banner"


export default function TrainingDev() {

  return (
    <div className="bg-slate-50 lg:mb-0 mb-10">
      <div className="space-y-10 ">
        <Banner heading="Services" subHeading="Training and Developement" image={{ imageSrc: "/solutions/training-dev/bannerImage.webp", alt: "training and developement banner image" }} />
        <h1 className="text-4xl  font-semibold text-center text-gray-700">Training and Developement</h1>
      </div>
      <TrainingDevCards />
    </div>

  );
}
