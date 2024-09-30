import Link from "next/link"
type submenu = {
    text: string,
    link: string
}
type submenuProps = {
    submenu?: submenu[]
}

export default function FooterSubElements({ submenu }: submenuProps) {
    return (
        <div className="text-sm text-gray-600 lg:space-y-5 space-y-3">
            {submenu?.map((menu, index) => {
                return (
                    <div key={index} className="hover:text-sky-600">

                        <Link href={menu.link} >{menu.text}</Link>
                    </div>
                )
            })}
        </div>
    )
}