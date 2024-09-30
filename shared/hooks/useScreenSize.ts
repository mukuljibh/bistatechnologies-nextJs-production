import { useEffect, useState } from 'react'

export default function useScreenSize() {

    const breakpoints = {
        isXs: useMediaQuery("(max-width: 640px)"),
        isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
        isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
        isLg: useMediaQuery("(min-width: 1025px)"),
        active: "SSR",
    };

    return breakpoints;
}
function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => window.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}
