type ServicesItemsProps = {
    item: {
        label: string,
        image: { imageSrc: string, alt: string }
        animationTime: number
    }

}
export default function ServicesItems({ item }: ServicesItemsProps) {
    return (
        <div
            role="listitem"
            aria-label={item.label}
            className={`flex flex-col items-center gap-2 pr-3 transition-all duration-700`}>
            <img
                className="lg:w-10 w-8"
                src={item.image.imageSrc}
                alt={item.image.alt}
                width="40"
                height="40"
            />
            <h2 className="text-sm">{item.label}</h2>
        </div>
    )
}