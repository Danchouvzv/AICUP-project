import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { AgentPipelineSection } from "@/components/sections/AgentPipelineSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { UseCaseSection } from "@/components/sections/UseCaseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col pb-24 overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AgentPipelineSection />
      <ArchitectureSection />
      <ComparisonSection />
      <ProductPreviewSection />
      <UseCaseSection />
      <FaqSection />
      <TeamSection />
      <CtaSection />
    </div>
  );
}
