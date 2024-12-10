import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-32 sm:py-48">
        <div className="text-center">
          <div className="relative">
            {/* Coming Soon Pill */}
            <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 
              bg-background/10 backdrop-blur-xl
              text-sm font-medium text-foreground/90 animate-fade-up
              before:absolute before:inset-0 before:rounded-full before:p-[1px]
              dark:before:bg-gradient-to-r dark:before:from-primary/50 dark:before:via-accent/30 dark:before:to-secondary/50
              before:bg-gradient-to-r before:from-blue-500/50 before:via-purple-500/30 before:to-pink-500/50
              after:absolute after:inset-[1px] after:rounded-full after:bg-background/20 after:backdrop-blur-xl
              relative isolate before:-z-10 after:-z-10
              shadow-sm shadow-primary/10 hover:shadow-md hover:shadow-primary/20 transition-shadow
              border border-primary/10">
              Coming Soon
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-7xl animate-fade-up pb-4">
              <span className="inline-block bg-gradient-to-br from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent pb-2">
                RAGu.ai
              </span>
              <span className="block text-2xl sm:text-4xl mt-4 bg-gradient-to-r from-foreground/80 to-foreground/50 bg-clip-text text-transparent animate-fade-up animation-delay-200">
                Context-aware Question Generation
              </span>
            </h1>
            
            {/* Decorative elements */}
            <div className="absolute -left-8 top-0 h-72 w-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -right-8 top-0 h-72 w-72 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-up animation-delay-400 max-w-2xl mx-auto relative z-10">
            Transform your documents into engaging questions using advanced RAG technology. Perfect for educators, content creators, and learning professionals.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-up animation-delay-600">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Button>
            <Button variant="outline" size="lg" className="group relative overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}