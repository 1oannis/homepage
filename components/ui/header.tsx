'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  const title = pathSegments.length > 0 
    ? pathSegments[pathSegments.length - 1].charAt(0).toUpperCase() + pathSegments[pathSegments.length - 1].slice(1)
    : 'Home'

  return (
    <header className="bg-background p-4 border-b">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={segment} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link 
                href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                className={index === pathSegments.length - 1 ? 'text-foreground' : 'hover:text-foreground'}
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  )
}