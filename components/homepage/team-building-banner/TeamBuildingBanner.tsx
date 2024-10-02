/* eslint-disable react/no-unescaped-entities */
"use client"
import "./animation.css"
import Image from "next/image"
import useObserver from "@/shared/hooks/useObserver"
export default function TeamBuildingBanner() {
    useObserver("team-building-banner", 0.4, ["opacity-100", "gap-x-0"])
    return (
        <section className="relative">
            {/*floating object animation*/}
            <ul className='TeamBuildingBanner -z-10 absolute '>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className={`team-building-banner z-20 relative lg:flex py-4 min-h-screen gap-32 opacity-0 duration-1000 delay-150 items-center justify-evenly px-5 space-y-4 lg:h-96 transition-all`}>
                <div className=" lg:w-1/3 space-y-5">
                    <h1 className="text-4xl font-bold">
                        <span className="text-orange-500">Find, Evaluate,</span>  Hire The Right People With Us
                    </h1>
                    <p className="text-sm text-gray-500 text-justify">
                        At Bista Technologies, we recognize the importance of finding, evaluating, and hiring the right
                        talent to propel your business forward. Our end-to-end recruitment solutions are designed to simplify
                        the hiring process, ensuring you attract top candidates who align with your company's values and goals.
                        We collaborate with your team to create tailored recruitment strategies that meet your specific needs,
                        utilizing advanced assessment tools to thoroughly evaluate candidates' skills, experience, and cultural fit.
                        With our expertise, you can make informed hiring decisions quickly and efficiently, securing the right people
                        to drive your business success.
                    </p>
                </div>

                <div className={`lg:w-2/5 h-full px-1 py-12  `}>
                    <Image className="w-full lg:h-full object-cover  rounded-2xl "
                        src="/homepage/team-building-banner/1.webp"
                        alt="Team Building Banner"
                        width="1430"
                        height="939"
                    />
                </div>
            </div>
        </section>
    )
}