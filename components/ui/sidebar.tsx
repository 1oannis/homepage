"use client"

import { Home, NotepadText, PanelRightClose, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  isOpen: boolean
  href: string
  onClick: () => void
}

function SidebarItem({ icon, label, isOpen, href, onClick }: SidebarItemProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} onClick={onClick}>
            <Button
              variant="ghost"
              className={cn("w-full justify-start", isOpen ? "px-2" : "px-2")}
            >
              {icon}
              {isOpen && <span className="ml-2">{label}</span>}
            </Button>
          </Link>
        </TooltipTrigger>
        {!isOpen && <TooltipContent>{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  )
}

export default function Sidebar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen flex-col bg-muted/40 p-4 transition-all duration-300 ease-in-out",
          isSidebarOpen ? "w-52" : "w-16"
        )}
      >
        <div
          className={cn(
            "flex items-center",
            isSidebarOpen ? "justify-between" : "justify-center",
            "mb-8"
          )}
        >
          {isSidebarOpen && (
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={32}
              priority
            />
          )}
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <PanelRightClose className="size-4" />
            ) : (
              <Image
                src="/logo-minimal.svg"
                alt="Logo-minimal"
                width={32}
                height={32}
                priority
              />
            )}
          </Button>
        </div>
        <nav className="space-y-2">
          <div className="mb-2">
            <SidebarItem
              icon={<Home className="size-4" />}
              label="Home"
              isOpen={isSidebarOpen}
              href="/"
              onClick={toggleSidebar}
            />
          </div>
          <div className="mb-2">
            <SidebarItem
              icon={<NotepadText className="size-4" />}
              label="Blog"
              isOpen={isSidebarOpen}
              href="/blog"
              onClick={toggleSidebar}
            />
          </div>
          <div className="mb-2">
            <SidebarItem
              icon={<Settings className="size-4" />}
              label="Settings"
              isOpen={isSidebarOpen}
              href="/settings"
              onClick={toggleSidebar}
            />
          </div>
        </nav>
      </aside>
      {/* Main content */}
      <div
        className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          isSidebarOpen ? "ml-52" : "ml-16"
        )}
      >
        {children}
      </div>
    </div>
  )
}
