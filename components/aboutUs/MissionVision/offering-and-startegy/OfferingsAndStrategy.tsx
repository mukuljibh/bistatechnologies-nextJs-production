import { offeringsAndStrategy } from "../config/MissionVisionconfig"
import Image from "next/image"

export default function OfferingsAndStrategy() {
    return (
        <div className="space-y-20 my-28">
            <h1 className="text-center text-4xl font-semibold"> Why choose Us ?</h1>
            <div className="lg:flex justify-center gap-5 lg:px-24 px-5 lg:mt-4 mt-10 lg:space-y-0 space-y-10">
                {offeringsAndStrategy.map((item, index) => {
                    return (
                        <div key={index} className="shadow-md  hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-xl lg:w-1/3 space-y-3  p-4 hover:lg:-translate-y-5 transition-all duration-1000 ease-out  ">
                            <div className="w-14">
                                <Image className="w-full h-full" src={item.image.imageSrc} alt={item.image.alt} width="100" height="100" />
                            </div>

                            <h1 className="font-bold  text-lg text-blue-950 tracking-wider">{item.heading}</h1>
                            <p className="text-xs tracking-wider text-justify  " >{item.description}</p>
                        </div>)
                })}
            </div>
        </div>




    )
}