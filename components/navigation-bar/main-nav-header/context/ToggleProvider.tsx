"use client";

import { createContext, ReactNode, useState, useContext } from "react"

type toggleProps = {
    toggle: boolean
    setToggle: (value: boolean | ((prev: boolean) => boolean)) => void

}

const toggleContext = createContext<toggleProps | undefined>(undefined)

export function useToggle() {
    const context = useContext(toggleContext)
    if (context === undefined) {
        throw new Error("Component is not in the provider")
    }
    return context
}
export default function ToggleProvider({ children }: { children: ReactNode }) {
    const [toggle, setToggle] = useState(false)

    return (
        <toggleContext.Provider value={{ toggle: toggle, setToggle: setToggle }}>
            {children}
        </toggleContext.Provider>
    )
}