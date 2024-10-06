
type pageProps = {
    heading: string;
    subHeading: string;
    image: { imageSrc: string, alt: string }
}
export const obj: Record<string, pageProps> = {

    "/services/engineering-services": {
        heading: "Services",
        subHeading: "Engineering Services",
        image: { imageSrc: '/services/eng-services/bannerImage.webp', alt: "Engineering services banner image" }
    },
    "/services/it-staffing": {
        heading: "Services",
        subHeading: "IT Staffing",
        image: { imageSrc: '/services/it-staffing/bannerImage.webp', alt: "IT staffing banner image" }
    },
    "/services/non-it-staffing": {
        heading: "Services",
        subHeading: "Non IT Staffing",
        image: { imageSrc: '/services/non-it-staffing/bannerImage.webp', alt: "Non IT staffing banner image" }
    },
    "/services/health-care-services": {
        heading: "Services",
        subHeading: "healthcare Services",
        image: { imageSrc: '/services/health-care/bannerImage.webp', alt: "health-care-services banner image" }
    },
    //solutions

    "/solutions/staffing-solutions": {
        heading: "Solution",
        subHeading: "Staffing Solution",
        image: { imageSrc: "/solutions/staffing-solutions/bannerImage.webp", alt: "Staffing Solution banner image" }
    },
    "/solutions/lead-generation": {
        heading: "Solution",
        subHeading: "Lead Generation",
        image: { imageSrc: "/solutions/lead-gen/bannerImage.webp", alt: "lead Generation banner image" }
    },

    "/solutions/training&dev": {
        heading: "Solution",
        subHeading: "Training and Developement",
        image: { imageSrc: "/solutions/training-dev/bannerImage.webp", alt: "training and developement banner image" }
    },
    "/solutions/staff-augmentation": {
        heading: "Solution",
        subHeading: "Staff Augmentation",
        image: { imageSrc: "/solutions/staff-aug/bannerImage.webp", alt: "Staff Augmentation banner image" }
    },
    "/solutions/market-research": {
        heading: "Solution",
        subHeading: "Market Research",
        image: { imageSrc: "/solutions/market-research/bannerImage.webp", alt: "Staff Augmentation banner image" }
    },

    // about us
    "/aboutUs/mission-vision": {
        heading: "About Us",
        subHeading: "Bista Technologies Inc",
        image: { imageSrc: "/about-us/mission-vision/bannerImage.webp", alt: "about us banner image" }
    },
    "/aboutUs/our-storyline": {
        heading: "About Us",
        subHeading: "Our Storyline",
        image: { imageSrc: "/solutions/training-dev/bannerImage.webp", alt: "about us banner image" }
    },
    "/aboutUs/our-leaders": {
        heading: "About Us",
        subHeading: "Our Leaders",
        image: { imageSrc: "/solutions/training-dev/bannerImage.webp", alt: "about us banner image" }
    },

}
