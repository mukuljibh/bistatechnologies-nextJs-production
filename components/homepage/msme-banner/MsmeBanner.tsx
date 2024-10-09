import Image from "next/image"
export default function MsmeBanner() {
    return (
        <article className="flex relative justify-center pt-5 items-center z-30  bg-white ">
            <Image className="w-5/6"
                src="/homepage/sme.webp"
                width="1600"
                height="200"
                alt="SME banner"
            />
        </article>
    )
}