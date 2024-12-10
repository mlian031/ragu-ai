import { Brain, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t bg-background/95 backdrop-blur", className)}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">RAGu</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Revolutionizing question generation with contextually aware artificial intelligence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#docs" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RAGu. All rights reserved.
        </div>
      </div>
    </footer>
  )
}