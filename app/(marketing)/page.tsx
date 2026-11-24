import { HeroSection } from "@/components/marketing/HeroSection";
import { ChallengeSolutionSection } from "@/components/marketing/ChallengeSolutionSection";
import { HowItFlowsSection } from "@/components/marketing/HowItFlowsSection";
import { PartnershipBenefitsSection } from "@/components/marketing/PartnershipBenefitsSection";
import { CommissionSplitSection } from "@/components/marketing/CommissionSplitSection";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ChallengeSolutionSection />
      <HowItFlowsSection />
      <PartnershipBenefitsSection />
      <CommissionSplitSection />
    </main>
  );
}