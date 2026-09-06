import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Target, Eye, 
  Award, Sparkles, Layers, Users, Zap, Landmark, Phone, Mail 
} from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      title: "Integrity & Discretion",
      desc: "Financial advisory conducted with the utmost confidentiality, regulatory adherence, and fiduciary diligence."
    },
    {
      title: "Execution Excellence",
      desc: "Delivering tangible transaction outcomes, from credit appraisal and CMA structuring to sanction disbursement."
    },
    {
      title: "Client-Centric Structuring",
      desc: "Every capital structure is tailored to the enterprise's unique cash flows, collateral, and long-term roadmap."
    },
    {
      title: "Enduring Partnerships",
      desc: "Building multi-decade relationships with promoters, family offices, and institutions across economic cycles."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      <SEO 
        title="About Us — Corporate Finance, Structured Credit & Leadership | Capital Corridor" 
        description="Capital Corridor is a 30-year financial advisory, structured finance, and capital markets solutions firm based in Ajmer, Rajasthan, serving enterprises across India."
        canonicalUrl="/about"
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-[#050C18] text-white border-b border-[#14233D] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091528] border border-[#C5A059]/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              WHO WE ARE &bull; FIRM OVERVIEW
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
            Three Decades of Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
              Financial Engineering &amp; Advisory
            </span>
          </h1>

          <p className="text-base sm:text-lg font-light text-slate-300 max-w-3xl leading-relaxed">
            Capital Corridor is an independent financial advisory, structured finance, investment banking advisory, and capital markets solutions firm. We help corporates, entrepreneurs, developers, financial institutions, family offices, and investors access capital through diverse institutional channels.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#14233D]">
            <div>
              <span className="text-[#C5A059] font-serif text-3xl font-bold block">30+</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Years Experience</span>
            </div>
            <div>
              <span className="text-[#C5A059] font-serif text-3xl font-bold block">10+</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Industry Sectors</span>
            </div>
            <div>
              <span className="text-[#C5A059] font-serif text-3xl font-bold block">500+</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Total Clients Served</span>
            </div>
            <div>
              <span className="text-[#C5A059] font-serif text-3xl font-bold block">12+</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Capital Channels</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Detailed Positioning */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold text-[#9A7830] uppercase tracking-widest">
              01 &bull; FIRM POSITIONING
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              A Strategic Bridge Between Capital Demand &amp; Capital Supply
            </h2>
            <div className="p-6 bg-[#070E1C] text-white border-l-4 border-[#C5A059] rounded-sm">
              <p className="text-xs font-light text-slate-300 leading-relaxed italic">
                &ldquo;One Platform. Multiple Capital Sources. Endless Growth Opportunities.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-slate-700 font-light text-sm leading-relaxed">
            <p>
              Capital Corridor was founded with a singular purpose: to provide businesses with institutional-grade financial advisory that bridges the gap between ambitious corporate vision and complex credit markets.
            </p>
            <p>
              With over 30 years of industry expertise, we deliver customised advisory solutions across corporate finance, structured funding, project finance, trade finance, real estate finance, working capital, supply chain finance, receivables financing, asset and equipment finance, investment banking advisory, private equity and venture capital advisory, capital market advisory, IPO advisory, mergers and acquisitions (M&A), financial documentation, stressed asset resolution, NPA funding, One-Time Settlement (OTS), debt restructuring, insolvency and recovery advisory, and strategic business advisory.
            </p>
            <p>
              Backed by a strong network of financial institutions, lenders, investors, and strategic partners, Capital Corridor provides end-to-end advisory and execution support — from financial assessment, transaction structuring, documentation coordination, and lender coordination to due diligence and facilitation through fund disbursement or resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section className="py-20 bg-[#070F1E] text-white px-4 sm:px-6 lg:px-8 border-b border-[#14233D]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div>
            <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-widest">
              02 &bull; STRATEGIC FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white mt-2">
              Vision &amp; Institutional Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#09152A] border border-[#162744] rounded-sm space-y-4">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <Eye className="h-6 w-6" />
                <h3 className="font-serif text-xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-sm font-light text-slate-300 leading-relaxed italic border-l-2 border-[#C5A059] pl-4">
                &ldquo;To become a leading structured finance, capital solutions, and investment banking platform that bridges capital demand and capital supply, empowering businesses with strategic financial solutions, execution excellence, and sustainable long-term growth.&rdquo;
              </p>
            </div>

            <div className="p-8 bg-[#09152A] border border-[#162744] rounded-sm space-y-4">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <Target className="h-6 w-6" />
                <h3 className="font-serif text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-sm font-light text-slate-300 leading-relaxed italic border-l-2 border-[#C5A059] pl-4">
                &ldquo;To provide customized, transparent, and execution-driven financial advisory services that optimize capital structures, unlock growth capital, resolve complex credit challenges, and build enduring client relationships founded on trust and integrity.&rdquo;
              </p>
            </div>
          </div>

          {/* Core Values 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 bg-[#081224] border border-[#142540] rounded-sm space-y-2">
                <div className="text-[10px] font-mono text-[#C5A059] font-bold">VALUE 0{i + 1}</div>
                <h4 className="font-serif text-base font-semibold text-white">{v.title}</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Unique Approach / Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#9A7830] uppercase tracking-widest block">
              03 &bull; METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Our Unique Approach
            </h2>
            <p className="text-sm sm:text-base font-light text-slate-700 max-w-3xl leading-relaxed">
              There is no one-size-fits-all financial solution. We do not sell off-the-shelf products — we engineer bespoke capital structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Understand Before Sourcing",
                desc: "We evaluate business fundamentals, cash flow dynamics, liabilities, and repayment capacity before recommending financial products."
              },
              {
                title: "Structure Before Sourcing",
                desc: "We focus on transaction feasibility, financial modeling, and risk optimization to create lender-ready opportunities."
              },
              {
                title: "Design Solutions, Not Just Funding",
                desc: "We combine corporate finance, trade credit, real estate, and private credit into comprehensive financial architectures."
              },
              {
                title: "Right Capital Provider Matching",
                desc: "We align mandates with appropriate banks, NBFCs, private credit funds, or ARCs based on risk profiles."
              },
              {
                title: "Operating Where Complexity Exists",
                desc: "Specialists in multi-institution funding, stressed asset resolution, OTS structures, and special situations."
              },
              {
                title: "Active Execution Involvement",
                desc: "We manage due diligence, commercial negotiation, approval coordination, and disbursement fulfillment."
              }
            ].map((app, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-white border border-[#E0D9CD] rounded-sm shadow-sm hover:border-[#C5A059] transition-all duration-200 space-y-3"
              >
                <div className="font-serif font-bold text-lg text-[#9A7830]">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-slate-600 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Leadership Showcase Link */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-xs font-bold text-[#9A7830] uppercase tracking-widest">
              04 &bull; PARTNERS &amp; LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Led by Experienced Financial Markets Professionals
            </h2>
            <p className="text-sm font-light text-slate-700 leading-relaxed">
              Capital Corridor is led by Partners Rahul Mantri (30+ years corporate finance and broking CEO experience) and Daksh Khandelwal (driving strategic relationships and debt syndication).
            </p>
            <div className="pt-2">
              <Link
                to="/our-team"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#C5A059] hover:text-[#0A1628] transition-all"
              >
                <span>Explore Full Leadership Bios</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#E0D9CD] p-4 rounded-sm shadow-sm text-center">
              <img 
                src="/images/rahul-mantri.jpg" 
                alt="Rahul Mantri" 
                className="w-full aspect-[4/5] object-cover rounded-sm mb-3 bg-[#0A1628]" 
              />
              <div className="font-serif font-bold text-slate-900 text-sm">Rahul Mantri</div>
            </div>
            <div className="bg-white border border-[#E0D9CD] p-4 rounded-sm shadow-sm text-center">
              <img 
                src="/images/daksh-khandelwal.jpg" 
                alt="Daksh Khandelwal" 
                className="w-full aspect-[4/5] object-cover rounded-sm mb-3 bg-[#0A1628]" 
              />
              <div className="font-serif font-bold text-slate-900 text-sm">Daksh Khandelwal</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#050C18] text-white px-4 sm:px-6 lg:px-8 border-b border-[#14233D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Connect Directly with Our Leadership
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Discuss your capital requirements, debt consolidation, or strategic advisory mandates.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#C5A059] text-[#050C18] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#D4B473] transition-colors shrink-0 shadow-lg"
          >
            Initiate Executive Dialogue
          </Link>
        </div>
      </section>

    </div>
  );
}
