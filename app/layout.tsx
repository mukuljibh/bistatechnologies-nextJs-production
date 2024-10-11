import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation-bar/NavBar";
import Footer from "@/components/footer/Footer";
import PageWrapper from "@/wrapper/page-wrapper/PageWrapper";
export const metadata: Metadata = {
  title: "Global Staffing Solution | Bista Technologies Inc",
  description: `Discover Bista Technologies' global staffing solutions, core values,
   and innovative services for growing businesses, including MSME support and team building`,
  keywords: `global staffing solutions, Bista Technologies, MSME support, hiring metrics, 
   core values, team building, business services, recruitment, software services`,
  metadataBase: new URL('https://bistatechnologies.vercel.app'),

  openGraph: {
    title: 'Bista Technologies Inc.',
    description: 'Bista Technologies Inc. connects businesses with top-tier talent worldwide, specializing in comprehensive staffing solutions across various industries.',
    url: 'https://bistatechnologies.vercel.app/',
    images: [
      {
        url: '/bistaOG.jpeg',
        width: 800,
        height: 600,
        alt: 'Bista Technologies Logo',
      },
    ],
    siteName: 'Bista Technologies Inc.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bista Technologies Inc.',
    description: 'Bista Technologies Inc. connects businesses with top-tier talent worldwide, specializing in comprehensive staffing solutions across various industries.',
    images: ['/bistaOG.jpeg'],
  },
  verification: {
    google: "D3fWDMgMb0ruLt6fK3m2PFT_PEr-XKZO55r7U1V9Ejw",
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bista Technologies",
              "url": "https://bistatechnologies.vercel.app/",
              "logo": "/bistaOG.jpeg",
              "description": "Bista Technologies offers innovative solutions for businesses, specializing in ERP, CRM, and Cloud technologies.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9808283188",
                "contactType": "Customer Support",
                "areaServed": "Global",
                "availableLanguage": "English",
              },
              "sameAs": [
                "https://www.instagram.com/official_bistatechnologiesinc/",
                "https://www.linkedin.com/company/bistatechnologies/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <NavBar />
        <PageWrapper>
          {children}
        </PageWrapper>

        <Footer />
      </body>
    </html >
  );
}
