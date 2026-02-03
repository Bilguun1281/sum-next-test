import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FontSizeToolbar from "@/components/FontSizeController";

export const revalidate = 60;

export const metadata: Metadata = {
  title: {
    default: "sum",
    template: "%s | sum",
  },
  description: "sum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header/>
        <FontSizeToolbar/>
        <main id="main-content" className="transition-all">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}