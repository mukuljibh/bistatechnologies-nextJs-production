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
    title: 'My Site',
    description: 'This site demonstrates Open Graph meta tags.',
    url: 'https://www.example.com',
    images: [
      {
        url: 'https://www.example.com/image.jpg',
        width: 800,
        height: 600,
        alt: 'Image description',
      },
    ],
    siteName: 'My Site',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Site',
    description: 'This site demonstrates Open Graph meta tags.',
    images: ['https://www.example.com/image.jpg'],
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
