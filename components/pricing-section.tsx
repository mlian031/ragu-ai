import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Basic",
    price: "$19",
    description: "Perfect for individuals and small teams",
    features: [
      "Process up to 3 full-length documents",
      "Generate up to 90 context-aware questions per semester)",
      "Access 20 daily quizzes per month (80 quizzes/semester)",
      "Option to buy extra RAG requests or documents",
    ],
  },
  {
    name: "Pro",
    price: "$39",
    description: "For professionals and growing teams",
    features: [
      "Process up to 5 full-length documents",
      "Generate up to 250 context-aware questions per semester)",
      "Access unlimited daily quizzes",
      "Option to buy extra RAG requests or documents",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold mb-6">
                  {tier.price}
                  <span className="text-lg font-normal text-muted-foreground">/Semester (4 months)</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.name === "Pro" ? "default" : "outline"}>
                  Subscribe Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}