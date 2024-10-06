import { open_sans } from "@/app/fonts"
import "@/app/globals.css"
import Sidebar from "@/components/ui/sidebar"
import Header from "@/components/ui/header"
import { Metadata } from "next";

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
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>
        <Sidebar>
        <div className="flex flex-col h-full">
            <Header />
            <main className="flex-1 p-4 overflow-auto">
              {children}
            </main>
          </div>
        </Sidebar>
      </body>
    </html>
  )
}
