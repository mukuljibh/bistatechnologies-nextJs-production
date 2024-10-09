export const ourServicesData = [
    {
        heading: "Healthcare Staffing",
        description: "We specialize in recruiting healthcare professionals, including doctors, nurses, allied health staff, and administrative personnel. Our focus is on delivering candidates who are not only qualified but also committed to providing high-quality patient care.",
        image: { imageSrc: "/homepage/our-services/1.png", alt: "healthcarelogo" },
        css: "border-2 hover:border-blue-400", animationTime: 0
    },
    {
        heading: "IT Staffing",
        description: "From software developers to cybersecurity experts, we provide IT professionals who are at the forefront of technology. Our candidates are selected for their technical skills, industry knowledge, and ability to adapt to your business environment.",
        image: { imageSrc: "/homepage/our-services/2.png", alt: "IT staffing logo" },
        css: "border-2 hover:border-gray-500", animationTime: 200
    },
    {
        heading: "Engineering Staffing",
        description: "From mechanical engineers to civil engineers, we connect you with skilled engineering professionals who possess the expertise to tackle complex projects and drive innovation in your field.",
        image: { imageSrc: "/homepage/our-services/3.png", alt: "Engineering Staffing logo" },
        animationTime: 300, css: "border-2 hover:border-orange-500"
    },
    {
        heading: "Non-IT Staffing",
        description: "Our Non-IT staffing services cover a wide range of industries, including finance, marketing, human resources, and more. We find the right talent to support your business operations and drive growth.",
        image: { imageSrc: "/homepage/our-services/4.png", alt: "non IT logo" },
        animationTime: 400, css: "border-2 hover:border-green-700"
    }
]

export const hiringData = [{
    label: "Resume Uploaded", counting: 400, imgSrc: "/homepage/hiring-metric/1.png",
    styles: {
        imageBG: "bg-sky-700",
        text: "text-sky-700",
        hover: "border-sky-700",
        animationTime: 200
    }
},
{
    label: "Open Position", counting: 90, imgSrc: "/homepage/hiring-metric/2.png",
    styles: {
        extras: "lg:translate-y-5",
        imageBG: "bg-orange-500",
        text: "text-orange-500",
        hover: "border-orange-500",
        animationTime: 500

    }
},
{
    label: "Overall Selection", counting: 100, imgSrc: "/homepage/hiring-metric/3.png",
    styles: {
        imageBG: "bg-green-500",
        text: "text-green-500",
        hover: "border-green-700",
        animationTime: 800

    }
}
]
