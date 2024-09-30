import { useState } from "react";
import { useToggle } from "../../context/ToggleProvider";

export default function useMenuHandler() {
    const [hover, setHover] = useState(false)
    const { setToggle } = useToggle()
    const handleSubMenuClick = () => {
        setToggle(false)
        setHover(() => true);
        setTimeout(() => {
            setHover(() => false);
        }, 100);
    };
    return { hover, handleSubMenuClick }
}