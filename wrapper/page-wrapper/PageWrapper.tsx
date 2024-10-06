'use client'
import { obj } from "./config/page.config"
import { usePathname } from "next/navigation"
import Banner from "@/global/component/banner/Banner"
import AnimationWrapper from "../animation-wrapper/AnimationWrapper"
import useScrollToTop from "./hooks/useScrollToTop"
import NewsLetter from "./component/newsletter/NewsLetter"
import Image from "next/image"
import { ReactNode } from "react"
export default function PageWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    useScrollToTop(pathname)
    const excludedRoutes = ['/', '/career/job-postings', '/career/employee-login', 'career/employer-login', '/contact-us']
    return (
        <AnimationWrapper>
            {!excludedRoutes.includes(pathname)
                && <Banner
                    heading={obj[pathname]?.heading}
                    subHeading={obj[pathname]?.subHeading}
                    image={obj[pathname]?.image}
                />}
            {children}
            {pathname == "/" ? <NewsLetter /> : <Image className="lg:h-128 w-full" src="/banner.gif" alt="banner" width="1200" height="500" />}
        </AnimationWrapper>
    )
}