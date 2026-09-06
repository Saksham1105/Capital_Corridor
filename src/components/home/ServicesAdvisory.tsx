import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Landmark, Layers, FileText, RefreshCw, ShieldAlert, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const practiceGroups = [
  {
    num: '01',
    name: 'Corporate Credit & Project Finance',
    icon: Landmark,
    anchor: 'funding-loans',
    description: 'Structuring medium and long-term corporate credit facilities, project funding, and asset-backed debt for expansion, CapEx, and refinancing.',
    services: [
      'Corporate Lending & Term Loans',
      'Structured Credit Facilities',
      'Greenfield & Brownfield Project Finance',
      'Real Estate & Construction Finance',
      'Lease Rental Discounting (LRD)',
      'Asset & Equipment Finance',
    ],
  },
  {
    num: '02',
    name: 'Working Capital & Trade Operations',
    icon: Layers,
    anchor: 'funding-loans',
    description: 'Liquidity optimization solutions designed to support operational cash flows, trading cycles, and cross-border trade transactions.',
    services: [
      'Cash Credit (CC) & Overdraft (OD) Limits',
      'Trade Finance (LC / SBLC / Bank Guarantees)',
      'Export & Import Credit Lines',
      'Invoice & Bill Discounting',
      'Supply Chain & PO Financing',
    ],
  },
  {
    num: '03',
    name: 'Financial Advisory & Capital Markets',
    icon: TrendingUp,
    anchor: 'financial-advisory',
    description: 'Strategic financial advisory, capital markets, public equity entry (ECM), SME IPO 5 P\'s framework, listed acquisitions, and corporate growth strategy.',
    services: [
      'Equity Capital Markets (QIP, Rights, Pre-IPO)',
      'SME IPO & Mainboard IPO Listing Advisory (5 P\'s Framework)',
      'Listed Company Acquisition & Public Entry Advisory',
      'Capital Markets Advisory & SEBI Intermediary Coordination',
      'Mezzanine & Hybrid Debt Structuring',
    ],
  },
  {
    num: '04',
    name: 'Stressed Assets & Resolution Advisory',
    icon: RefreshCw,
    anchor: 'legal-advisory',
    description: 'Recognized advisory specialists in navigating complex borrower situations, SMA accounts, NPA resolution, OTS funding, and IBC proceedings.',
    services: [
      'SMA-1, SMA-2 & NPA Account Funding',
      'One-Time Settlement (OTS) Structuring & Bridge Finance',
      'IBC & Insolvency Resolution Applicant Advisory',
      'Legal, Restructuring & Recovery Advisory',
      'Consortium Debt Re-alignment & Tenure Extension',
    ],
  },
  {
    num: '05',
    name: 'Documentation Support & Extended Services',
    icon: ShieldAlert,
    anchor: 'documentation-support',
    description: 'Advisory and institutional coordination for specialized credit facilities, bank-ready documentation (DPR, CMA, TEV), subsidies, and extended consultancy services.',
    services: [
      'Bank-Ready CMA Data & Detailed Project Reports (DPR)',
      'Techno-Economic Viability (TEV) & Credit Rating',
      'Subsidy Consultancy (Rajasthan)',
      'Real Estate & Construction Advisory',
      'Import-Export & Hospitality Consultancy',
    ],
  },
];

export function ServicesAdvisory() {
  return (
    <section className="bg-[#050B14] py-20 lg:py-32 text-white relative border-t border-[#1E3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[#1E3356] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                PRACTICE PORTFOLIO INDEX
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              15 + Advisory Practices Across <span className="italic text-[#C5A059]">Five Pillars.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-slate-300 font-light text-sm leading-relaxed mb-3">
              From standard corporate debt syndication to complex NPA restructuring and capital market listings — explore our complete advisory domain.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059] hover:underline"
            >
              <span>View Full 15-Service Detailed Catalog</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 5 Practice Groups - Editorial Index Layout (All 15 Services Visible Without Tab Clicks) */}
        <div className="space-y-12">
          {practiceGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="pt-8 border-t border-[#1E3356]/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
              >
                {/* Left Column: Group Header */}
                <div className="lg:col-span-5 pr-0 lg:pr-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-serif text-2xl font-bold text-[#C5A059]">{group.num}.</span>
                    <Icon className="h-5 w-5 text-[#C5A059]" />
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                      {group.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-slate-300 leading-relaxed mb-4">
                    {group.description}
                  </p>
                  <Link
                    to={`/services#${group.anchor}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 group-hover:text-[#C5A059] transition-colors"
                  >
                    <span>Practice Details</span>
                    <span>→</span>
                  </Link>
                </div>

                {/* Right Column: Complete Visible Services List */}
                <div className="lg:col-span-7 bg-[#070E1C]/80 border border-[#1E3356]/60 p-6 rounded-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {group.services.map((serviceName, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-light leading-snug">
                          {serviceName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
