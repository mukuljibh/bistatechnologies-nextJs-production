import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation-bar/NavBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Global Staffing Solution | Bista Technologies Inc",
  description: `Discover Bista Technologies' global staffing solutions, core values,
   and innovative services for growing businesses, including MSME support and team building`,
  keywords: `global staffing solutions, Bista Technologies, MSME support, hiring metrics, 
   core values, team building, business services, recruitment, software services`,
  openGraph: {
    title: 'Bista Technologies Inc.',
    description: 'Bista Technologies Inc. connects businesses with top-tier talent worldwide, specializing in comprehensive staffing solutions across various industries.',
    url: 'https://www.bistatechnologies.com',
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

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html >
  );
}
