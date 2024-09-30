'use client'
import { ReactNode } from "react";
export default function ResponsiveNav({ children }: { children: ReactNode[] }) {
    const [MainNavHeader] = children;

    return (
        <>
            {MainNavHeader}
        </>

    );
}
