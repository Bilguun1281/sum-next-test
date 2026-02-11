import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { getGlobals } from "@/lib/api"

export const revalidate = 60

export const metadata: Metadata = {
  title: {
    default: "sum",
    template: "%s | sum",
  },
  description: "sum",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const globals = await getGlobals()

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-muted">
        <Header globals={globals} />
        <main id="main-content" className="transition-all flex-1">
          {children}
        </main>
        <Footer globals={globals} />
      </body>
    </html>
  )
}
