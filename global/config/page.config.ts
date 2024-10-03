
type pageProps = {
    heading: string;
    subHeading: string;
    image: { imageSrc: string, alt: string }
}
export const obj: Record<string, pageProps> = {
    "/solutions/training&dev": {
        heading: "Services",
        subHeading: "Training and Developement",
        image: { imageSrc: "/solutions/training-dev/bannerImage.webp", alt: "training and developement banner image" }
    },

    "/services/engineering-services": {
        heading: "Services",
        subHeading: "Engineering Services",
        image: { imageSrc: '/services/eng-services/bannerImage.webp', alt: "Engineering services banner image" }
    }
}
