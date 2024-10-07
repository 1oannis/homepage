import "@/app/globals.css"

import type { Metadata } from "next"

import { open_sans } from "@/app/fonts"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import Sidebar from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "Root Layout",
  description: "Root layout component",
  icons: {
    icon: [
      {
        type: "image/x-icon",
        url: "/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        type: "image/x-icon",
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>
        <Sidebar>
          <div className="flex h-full flex-col">
            <Header />
            <main className="flex-1 overflow-auto p-4">{children}</main>
            <Footer />
          </div>
        </Sidebar>
      </body>
    </html>
  )
}
