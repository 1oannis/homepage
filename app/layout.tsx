import { open_sans } from "@/app/fonts"
import "@/app/globals.css"
import Sidebar from "@/components/ui/sidebar"
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
      <body className={`${open_sans.className} ${open_sans.className} antialiased`}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
