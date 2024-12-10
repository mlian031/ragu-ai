"use client"

import { useState, useEffect } from "react"
import { Brain } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed w-full transition-all duration-200 z-50",
      isScrolled 
        ? "bg-background/[0.01] backdrop-blur supports-[backdrop-filter]:bg-background/[0.2]" 
        : "bg-background backdrop-blur supports-[backdrop-filter]:bg-background/[0.01]"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Brain className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">RAGu</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#docs" className="text-foreground/70 hover:text-foreground transition-colors">
              Docs
            </Link>
            <ThemeToggle />
            <Button size="sm">Get Started</Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-background/50"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/60 backdrop-blur-lg supports-[backdrop-filter]:bg-background/40 border-b border-border/50">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="#features" className="block px-3 py-2 text-foreground/70 hover:text-foreground">
              Features
            </Link>
            <Link href="#pricing" className="block px-3 py-2 text-foreground/70 hover:text-foreground">
              Pricing
            </Link>
            <Link href="#docs" className="block px-3 py-2 text-foreground/70 hover:text-foreground">
              Docs
            </Link>
            <Button className="w-full mt-2">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}