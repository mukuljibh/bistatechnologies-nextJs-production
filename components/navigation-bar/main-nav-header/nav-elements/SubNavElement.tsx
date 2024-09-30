import Link from "next/link"
import useMenuHandler from "./hook/useMenuHandler"
type contentProps = {
    link: string,
    text: string,
}
type submenuProps = {
    submenu: contentProps[]
    mobileToggle: boolean

}

const lg = `lg:absolute lg:w-56 lg:top-16 lg:pt-3 lg:pb-4
lg:space-y-4 lg:scale-35 lg:invisible  lg:opacity-0 
lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:scale-100 
ease-linear duration-200 lg:rounded-lg `;

export default function SubNavElement({ submenu, mobileToggle }: submenuProps) {
    const { hover, handleSubMenuClick } = useMenuHandler()

    return (
        <div className={`${lg} bg-white  ${hover && 'lg:hidden'} `}>
            <div className="lg:relative lg:flex justify-start items-center hidden border-2  border-green-600">
                <div className="w-7 h-3 rounded-full bg-green-600 ml-3 absolute "></div>
            </div>
            <div>
                <ul className={`lg:max-h-max lg:opacity-100 overflow-hidden ${mobileToggle ? 'max-h-32 opacity-100 ' : 'max-h-0 opacity-0 '}  duration-500`}>
                    {submenu.map((menu, ind) => {
                        return (
                            <li key={ind} className="pl-6 mb-2 text-zinc-700x  hover:text-sky-700 hover:font-medium"  >
                                <Link href={menu.link} onClick={handleSubMenuClick}>
                                    {menu.text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div >

    )
}