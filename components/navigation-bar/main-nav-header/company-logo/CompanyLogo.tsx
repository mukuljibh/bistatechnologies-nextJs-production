'use client'
import Image from "next/image"
import Link from "next/link"
import Hamburger from "hamburger-react";
import { useToggle } from "../context/ToggleProvider";
export default function CompanyLogo() {
    const { toggle, setToggle } = useToggle()
    return (
        <div className=" flex lg:w-auto w-full justify-between px-2 items-center my-2 lg:mb-0">
            <Link href="/">
                <Image src="/logo.png" width="224" height="56" alt="bista technologies logo" />
            </Link>
            <button className="lg:hidden hover:bg-gray-200">
                <Hamburger onToggle={() => setToggle((prev) => !prev)} toggled={toggle} size={20} />
            </button>
        </div>
    )
}




