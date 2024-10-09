import Image from "next/image"
import { useState, useEffect } from "react"
export type cardsProps = {
    heading: string
    description: string
    imgSrc: string
    alt: string
    css: string,
}
//${css} ${animating ? 'opacity-1 ' : 'opacity-0 -translate-x-7 '}
export default function Card({ heading, description, imgSrc, css, alt, }: cardsProps) {
    const [js, setJs] = useState(false)
    useEffect(() => {
        setJs(true)
    }, [])
    return (
        <article className={`${css}  cursor-default  ${!js && 'noJsSubCard'} opacity-0 z-30 bg-white shadow-md rounded-xl lg:w-72 duration-500 border-white `}>
            <div className={`p-5`}>
                <div className="lg:w-32 lg:h-32 w-20 h-20 ">
                    <Image className="w-full h-full object-cover border  border-black rounded-full"
                        src={imgSrc}
                        alt={alt}
                        width="128"
                        height="128"
                    />
                </div>
                <div className="pb-5">
                    <h1 className="lg:text-2xl  text-xl font-semibold pt-3 ">{heading}</h1>
                    <p className="lg:text-md text-zinc-700 text-md pt-2">{description}</p>
                </div>
            </div>
        </article>
    )
}