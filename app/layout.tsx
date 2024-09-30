import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/wrapper/scroll-to-top-wrapper/ScrollToTop";
import NavBar from "@/components/navigation-bar/NavBar";
import Footer from "@/components/footer/Footer";
import FooterWrapper from "@/wrapper/footer-wrapper/FooterWrapper";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <ScrollToTop>
          {children}
        </ScrollToTop>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </body>
    </html >
  );
}
