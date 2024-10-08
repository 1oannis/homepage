import type { Metadata } from "next"

import Countdown from "@/components/ui/countdown"

export const metadata: Metadata = {
  title: "Homepage",
  description: "This is the homepage of Ioannis Theodosiadis",
}

export default function Home() {
  return <Countdown />
}
