import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Homepage",
  description: "This is the homepage",
}

export default function Home() {
  return (
    <>
    <h1 className="text-4xl font-bold">Welcome to the homepage</h1>
    </>
  )
}
