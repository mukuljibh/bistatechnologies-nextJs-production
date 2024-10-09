import EngServices from "@/components/services/eng-services/EngServices"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Transform Your Engineering Projects with Engineering Staffing Solutions",
    description: `Connect with top professionals in civil, mechanical, electrical, and software engineering.
     Our tailored staffing and project management services ensure you find the right talent 
     for successful project execution. Enhance your team’s capabilities and drive innovation with our industry expertise.`,
    keywords: `engineering staffing, civil engineering, mechanical engineering,
     electrical engineering, software engineering, project management, contract staffing, skilled engineers`
};
export default function EngineeringServices() {
    return (
        <EngServices />
    )
}