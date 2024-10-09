import Link from 'next/link'
import './animation.css'
import Image from 'next/image'
type bannerProps = {
    heading: string
    subHeading: string
    image: { imageSrc: string, alt: string }
}
export default function Banner({ heading, subHeading, image }: bannerProps) {

    return (
        <div className="space-y-10">
            <div className="relative w-full bg-sky-200 overflow-hidden lg:flex lg:space-y-0 pt-10 space-y-2 ">
                <div className="lg:absolute lg:text-start text-center self-center lg:mx-20  mx-10 lg:space-y-3  ">
                    <h1 className="lg:text-5xl  text-sm text-black font-extrabold lg:mb-2 ">{heading} </h1>
                    <Link href="/" className=" text-gray-600 font-bold hover:text-blue-900 lg:text-lg text-xs transition-colors duration-200 ">Home</Link>
                    <span className="font-black  text-gray-700 lg:text-base text-xs"> / {subHeading}</span>
                </div>
                <div className="bannerImg z-10 lg:w-1/3 lg:h-64 h-28 mx-auto opacity-0 " >
                    <Image
                        className=" mx-auto lg:w-auto w-1/2 lg:h-auto object-cover "
                        src={image?.imageSrc}
                        alt={image?.alt}
                        width={500}
                        height={250}
                    />
                </div>
                <div className="shape1 absolute z-0  bg-sky-300 w-full h-full bottom-0 ">
                </div>

                <div className="shape2 absolute z-0  bg-sky-400 w-full h-full">
                </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">{subHeading}</h1>

        </div>
    )

}