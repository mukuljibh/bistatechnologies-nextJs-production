'use client'
import NavElements from "./NavElements"
import { submenuData } from "@/components/navigation-bar/config/nav_bar.config"
import { useToggle } from "../context/ToggleProvider"

export default function NavBox() {
    const { toggle } = useToggle()
    return (

        <div className={`lg:relative lg:overflow-visible lg:h-auto lg:top-0 lg:flex lg:items-center lg:gap-4 lg:w-auto lg:px-0 px-4  bg-white absolute w-11/12  mt-1 top-16  overflow-y-auto ${toggle ? 'h-96' : 'h-0'} duration-500 `}>
            {submenuData.map((menu, index) => {
                return (
                    <NavElements
                        key={index}
                        label={menu.label}
                        directPath={menu.directPath}
                        submenu={menu.submenu}
                    />
                )
            })}

        </div>

    )
}