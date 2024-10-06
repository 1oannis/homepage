"use client"

import React, { useState } from "react"
import { PanelRightClose, Home, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

interface SidebarItemProps {
    icon: React.ReactNode
    label: string
    isOpen: boolean
}

function SidebarItem({ icon, label, isOpen }: SidebarItemProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" className={cn("w-full justify-start", isOpen ? "px-2" : "px-2")}>
                        {icon}
                        {isOpen && <span className="ml-2">{label}</span>}
                    </Button>
                </TooltipTrigger>
                {!isOpen && <TooltipContent>{label}</TooltipContent>}
            </Tooltip>
        </TooltipProvider>
    )
}

export default function Sidebar({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <aside className={cn(
                "fixed top-0 left-0 z-40 h-screen bg-muted/40 p-4 transition-all duration-300 ease-in-out flex flex-col",
                isSidebarOpen ? "w-52" : "w-16"
            )}>
                <div className={cn("flex items-center", isSidebarOpen ? "justify-between" : "justify-center", "mb-8")}>
                    {isSidebarOpen && <Image src="/logo.svg" alt="Logo" width={120} height={32} priority={true} />}
                    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                        {isSidebarOpen ? <PanelRightClose className="h-4 w-4" /> : <Image src="/logo-minimal.svg" alt="Logo-minimal" width={32} height={32} priority={true} />}
                    </Button>
                </div>
                <nav className="space-y-2">
                    <div className="mb-2">
                        <SidebarItem icon={<Home className="h-4 w-4" />} label="Home" isOpen={isSidebarOpen} />
                    </div>
                    <div className="mb-2">
                        <SidebarItem icon={<Users className="h-4 w-4" />} label="Users" isOpen={isSidebarOpen} />
                    </div>
                    <div className="mb-2">
                        <SidebarItem icon={<Settings className="h-4 w-4" />} label="Settings" isOpen={isSidebarOpen} />
                    </div>
                </nav>
            </aside>
            {/* Main content */}
            <div className={cn(
                "flex-1 transition-all duration-300 ease-in-out",
                isSidebarOpen ? "ml-52" : "ml-16"
            )}>
                {children}
            </div>
        </div>
    )
}
