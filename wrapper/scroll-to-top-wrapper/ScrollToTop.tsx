"use client"
import { useEffect } from "react";
import { usePathname } from 'next/navigation'

export default function ScrollToTop({ children }: { children: React.ReactNode }) {
    const location = usePathname()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location])
    return (
        <>
            {children}
        </>
    )
}