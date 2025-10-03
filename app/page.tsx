import Header from "@/components/Header"
import Hero from "@/components/Hero"
import SimpleRoutine from "@/components/SimpleRoutine"
import OneMinute from "@/components/OneMinute"
import Results from "@/components/Results"
import DailyBenefits from "@/components/DailyBenefits"
import GetTheSet from "@/components/GetTheSet"
import Ingredients from "@/components/Ingredients"
import ThreeFormulas from "@/components/ThreeFormulas"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SimpleRoutine />
        <OneMinute />
        <Results />
        <DailyBenefits />
        <GetTheSet />
        <Ingredients />
        <ThreeFormulas />
        <Testimonials />
        <GetTheSet />
      </main>
      <Footer />
    </>
  )
}
