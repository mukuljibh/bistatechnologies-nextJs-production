import StaffAug from "@/components/solutions/staff-augmentation/StaffAug";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comprehensive Staff Augmentation Services",
    description: `Our Staff Augmentation Services provide skilled IT, technical, operational,
 and strategic professionals to enhance your team's capabilities. From seamless integration
  of IT experts to senior-level consultants driving business growth, we offer flexible staffing 
  solutions tailored to your needs.`,
    keywords: `staff augmentation, IT professionals, technical staff, operational support, strategic consultants`
};
export default function staffAug() {
    return (

        <StaffAug />
    )
}