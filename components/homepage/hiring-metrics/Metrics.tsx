'use client'
import HiringMetrics from "./HiringMetrics"
import { hiringData } from "../config/homepage.config"
import useObserver from "@/shared/hooks/useObserver"
export default function Metrics() {
    const { isCardVisible: HiringMetricsVisible } = useObserver("hiringMetrics", 0.5, ['opacity-100'])

    return (
        <section className="hiringMetrics z-30 relative lg:py-20 px-5 my-10 lg:flex lg:space-y-0 justify-center gap-10 space-y-10">
            {HiringMetricsVisible && hiringData.map((item, index) => {
                return (
                    <HiringMetrics item={item} key={index} />
                )
            })}
        </section>
    )
}