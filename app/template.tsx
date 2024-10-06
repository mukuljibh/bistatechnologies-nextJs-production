import { ReactNode } from "react";
import PageWrapper from "@/wrapper/page-wrapper/PageWrapper";
export default function template({ children }: { children: ReactNode }) {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>

    )
}