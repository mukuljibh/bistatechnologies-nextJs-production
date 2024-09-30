
import CompanyCard from "./contact-card/CompanyCard"
import ContactForm from "./contact-form/ContactForm"
export default function ContactUs() {

    return (
        <>
            <img className="w-full" src="contact-us.jpg" alt="contact"></img>
            <CompanyCard />
            <ContactForm />
        </>
    )
}