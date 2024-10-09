import ContactUs from "@/components/contactUs/ContactUs"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Bista Technologies - Your Staffing Solutions Partner",
    description: `Get in touch with Bista Technologies for expert staffing solutions. 
    Reach us via phone or email for inquiries about our non-IT and IT staffing services.
     We're here to assist you with your business needs!`,
    keywords: `contact Bista Technologies, staffing solutions, finance staffing, 
    HR staffing, IT staffing, Dubai staffing agency, recruitment support, leave a message, 
    professional staffing services, Bista Technologies contact information`
};
export default function Contact() {
    return (
        <ContactUs />
    )
}