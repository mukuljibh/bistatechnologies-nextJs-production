
import CompanyCard from "./contact-card/CompanyCard"
import ContactForm from "./contact-form/ContactForm"
import Image from "next/image"
export default function ContactUs() {

    return (
        <>
            <Image className="w-full" src="/contact-us/contact-us-banner.jpg" alt="contact" width="2000" height="500" />
            <CompanyCard />
            <ContactForm />
        </>
    )
}