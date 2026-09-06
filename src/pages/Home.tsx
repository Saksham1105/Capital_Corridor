import { SEO } from '../components/SEO';
import { HeroV4 } from '../components/home/HeroV4';
import { FirmOverview } from '../components/home/FirmOverview';
import { CoreCapabilitiesV4 } from '../components/home/CoreCapabilitiesV4';
import { WhyCapitalCorridorV4 } from '../components/home/WhyCapitalCorridorV4';
import { ExecutionFrameworkV4 } from '../components/home/ExecutionFrameworkV4';
import { ChallengingMandatesV4 } from '../components/home/ChallengingMandatesV4';
import { CapitalEcosystemV4 } from '../components/home/CapitalEcosystemV4';
import { LeadershipShowcaseV4 } from '../components/home/LeadershipShowcaseV4';
import { AdvisoryToolsBanner } from '../components/home/AdvisoryToolsBanner';
import { ClosingCTAV4 } from '../components/home/ClosingCTAV4';

export function Home() {
  return (
    <>
      <SEO
        title="Capital Corridor — Financial Advisory & Structured Finance | Ajmer, Rajasthan"
        description="Three decades of debt syndication, structured finance, investment banking advisory, and capital markets solutions firm based in Ajmer, Rajasthan. Serving corporates and investors across India."
      />

      <main className="bg-[#050C18] min-h-screen text-slate-100 selection:bg-[#C5A059] selection:text-[#050C18]">
        {/* 1. Hero & Institutional Positioning */}
        <HeroV4 />

        {/* 2. Institutional Ethos & Positioning Statement */}
        <FirmOverview />

        {/* 3. Five Core Advisory Pillars (Reset Numbering 01.. per Pillar) */}
        <CoreCapabilitiesV4 />

        {/* 4. Strategic Differentiators (Why Capital Corridor) */}
        <WhyCapitalCorridorV4 />

        {/* 5. The 8-Step Advisory & Funding Workflow */}
        <ExecutionFrameworkV4 />

        {/* 6. Special Situations & Challenging Credit Files */}
        <ChallengingMandatesV4 />

        {/* 7. Institutional Capital Sources & Ecosystem */}
        <CapitalEcosystemV4 />

        {/* 8. Leadership & Direct Partner Access */}
        <LeadershipShowcaseV4 />

        {/* 9. Financial Tools & Advisory Insights Banner */}
        <AdvisoryToolsBanner />

        {/* 10. Executive Closing CTA */}
        <ClosingCTAV4 />
      </main>
    </>
  );
}
