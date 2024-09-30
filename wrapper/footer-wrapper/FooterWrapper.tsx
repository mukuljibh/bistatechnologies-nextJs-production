'use client'
import { usePathname } from "next/navigation"
import NewsLetter from "./newsletter/NewsLetter"
import Image from "next/image"
function FooterWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <div>
            {pathname == "/" ? <NewsLetter /> : <Image className="h-128 w-full" src="/banner.gif" alt="banner" width="1200" height="500" />}
            {children}
        </div >
    )
}
export default FooterWrapper