import { submenuData } from "../../navigation-bar/config/nav_bar.config"
import FooterSubElements from "./FooterSubElements"


export default function FooterElement() {
    return (
        <>
            {submenuData.slice(1, 5).map((item, index) => {
                return (
                    <div key={index} className="space-y-5 mt-10" >
                        <h1 className="font-semibold text-lg">{item.label}</h1>
                        <FooterSubElements submenu={item.submenu} />
                    </div >
                )
            })}
        </>
    )
}