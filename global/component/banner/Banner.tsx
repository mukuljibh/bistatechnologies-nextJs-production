import './animation.css'
import Image from 'next/image'
type bannerProps = {
    heading: string
    subHeading: string
    image: { imageSrc: string, alt: string }
}
export default function Banner({ heading, subHeading, image }: bannerProps) {
    return (
        <div className="relative w-full bg-sky-200 overflow-hidden flex  lg:space-y-0 space-y-10 ">
            <div className="lg:text-start text-center self-center lg:mx-20 mx-10 lg:space-y-3">
                <h1 className="lg:text-4xl  text-2xl font-bold text-blue-800">{heading} </h1>
                <h1 className="lg:text-lg text-xs">Home / <span className="font-semibold">{subHeading}</span></h1>
            </div>
            <div className="bannerImg z-10 lg:w-1/3 mx-auto w-auto  opacity-0 ">
                <Image className="mx-auto w-full h-full" src={image.imageSrc} alt={image.alt} width="1200" height="600" />
            </div>
            <div className="shape1 absolute z-0  bg-sky-300 w-full h-full bottom-0 ">
            </div>

            <div className="shape2 absolute z-0  bg-sky-400 w-full h-full">
            </div>
        </div>
    )

}