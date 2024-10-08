import '../animation-wrapper/styles.css'
import { ReactNode } from "react"
export default function AnimationWrapper({ children }: { children: ReactNode }) {
    return (
        <div className={`divs duration-150`}>
            {children}
        </div>
    )
}