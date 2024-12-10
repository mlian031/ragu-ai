import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { BackgroundGradients } from "@/components/background-gradients"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundGradients />
      <Navbar />
      <main className="flex-1 pb-10">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}