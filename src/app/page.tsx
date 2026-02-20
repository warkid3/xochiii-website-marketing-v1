import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ProblemSolution } from "@/components/home/problem-solution";
import { HowItWorks } from "@/components/home/how-it-works";
import { DualBenefits } from "@/components/home/dual-benefits";
import { StatsBar } from "@/components/home/stats-bar";
import { FinalCta } from "@/components/home/final-cta";

/**
 * Home page — assembles all sections in order.
 *
 * Section flow:
 * 1. Hero (headline + floating cards + social proof)
 * 2. Problem Statement (2×2 grid)
 * 3. How It Works (3-step process)
 * 4. Dual Benefits (Brands vs Creators split)
 * 5. Stats Bar (credibility numbers)
 * 6. Final CTA (gradient with dual buttons)
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070815] text-[#e2e0f0] font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <DualBenefits />
      <StatsBar />
      <FinalCta />
      <Footer />
    </main>
  );
}
