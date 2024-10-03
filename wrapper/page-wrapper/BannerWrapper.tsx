'use client'
import { obj } from "@/global/config/page.config"
import { usePathname } from "next/navigation"
import Banner from "@/global/component/banner/Banner"
import AnimationWrapper from "../animation-wrapper/AnimationWrapper"
import { ReactNode } from "react"
export default function BannerWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    return (
        <>
            <AnimationWrapper>
                <Banner heading={obj[pathname].heading} subHeading={obj[pathname].subHeading} image={obj[pathname].image} />
                {children}
            </AnimationWrapper>

        </>
    )
}