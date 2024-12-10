import { Upload, Brain, Calendar, BookText  } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Generate Context-Aware Questions",
    description: "We use RAG (Retrieval Augmented Generation) to understand your content deeply. Our AI generates relevant, thought-provoking questions automatically.",
    icon: Brain,
  },
  {
    title: "Visually stunning PDFs using LaTeX",
    description: "Ready to print PDFs in exam, quiz, or assignment formats.",
    icon: BookText,
  },
  {
    title: "Daily Quiz Generation",
    description: "Schedule automatic quiz generation for continuous learning and engagement with your content.",
    icon: Calendar,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to generate high-quality questions at scale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={feature.title} className="bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}