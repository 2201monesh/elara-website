import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '/components/section/navigation'
import FooterSection from '/components/section/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation />
        {children}
      <FooterSection />  
      </body>
    </html>
  );
}
