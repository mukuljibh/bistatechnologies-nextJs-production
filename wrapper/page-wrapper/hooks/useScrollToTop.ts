"use client"
import { useEffect } from "react";

export default function useScrollToTop(pathname: string) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname])
}