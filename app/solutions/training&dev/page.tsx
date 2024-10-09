import TrainingDev from "@/components/solutions/training-dev/TrainingDev";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Effective Training and Development Solutions",
    description: `Elevate your workforce with our tailored Training and Development Solutions,
     including Employee Onboarding, Skills Development, Leadership Training, and Continuous 
     Learning programs to foster professional growth and organizational success`,
    keywords: `training solutions, employee onboarding, skills development, leadership training, continuous learning`
};
export default function trainingDev() {
    return (
        <TrainingDev />
    )
}