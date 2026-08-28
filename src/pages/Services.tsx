import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function Services() {
  const categories = [
    {
      title: "Corporate Lending & Structured Credit",
      desc: "Capital Corridor facilitates and coordinates corporate lending and structured credit solutions to support business expansion, acquisitions, refinancing, and strategic capital requirements.",
      items: [
        "Debt Consolidation",
        "Government Tender Financing",
        "Loans Against Bonds & NCDs",
        "External Commercial Borrowings (ECB)",
        "Lease Rental Discounting (LRD)"
      ]
    },
    {
      title: "Trade Finance & International Business Solutions",
      desc: "We provide comprehensive trade finance advisory and coordination support for domestic and cross-border trade transactions.",
      items: [
        "Letter of Credit (LC)",
        "Standby Letter of Credit (SBLC)",
        "Bank Guarantees (BG)",
        "SWIFT Message Services",
        "Corporate Guarantees",
        "Export Finance",
        "Export Bill Discounting",
        "Import Finance",
        "Buyer's Credit",
        "Supplier's Credit"
      ]
    },
    {
      title: "Working Capital & Supply Chain Finance",
      desc: "We provide advisory and structuring support for working capital and supply chain finance solutions, helping businesses enhance liquidity.",
      items: [
        "Term Loans",
        "Cash Credit (CC)",
        "Overdraft (OD)",
        "Drop-Line Overdraft",
        "Supply Chain Finance"
      ]
    },
    {
      title: "Receivables & Invoice Financing",
      desc: "Capital Corridor facilitates receivables financing solutions, enabling businesses to unlock working capital tied up in outstanding invoices.",
      items: [
        "Invoice Discounting",
        "Bill Discounting",
        "Factoring",
        "Receivables Securitisation",
        "Purchase Order (PO) Financing"
      ]
    },
    {
      title: "Project, Infrastructure & Institutional Funding",
      desc: "Advisory, structuring, and coordination support for long-term project financing solutions across diverse sectors.",
      items: [
        "Greenfield Projects",
        "Brownfield Projects",
        "Industrial / Manufacturing Projects",
        "Renewable Energy",
        "Hospitality",
        "Expansion / Modernization",
        "Capacity Enhancement",
        "Infrastructure Projects",
        "Transport & Logistics",
        "Warehousing & Industrial Parks",
        "Urban Infrastructure & Utilities",
        "PPP Projects",
        "Acquisition Financing",
        "CapEx Financing",
        "Healthcare Institutions",
        "Educational Infrastructure Development"
      ]
    },
    {
      title: "Real Estate Funding",
      desc: "Specialised real estate financing advisory for developers, builders, and real estate projects.",
      items: [
        "Builder & Developer Funding",
        "Construction Finance",
        "Inventory Funding"
      ]
    },
    {
      title: "Asset & Equipment Finance",
      desc: "Advisory and structuring support for asset-backed financing solutions, helping businesses acquire, refinance, and leverage assets.",
      items: [
        "Equipment & Machinery Finance",
        "Inventory / Stock Finance",
        "Commodity Financing",
        "Revenue-Based Financing",
        "Non-Recourse Loans",
        "Margin Financing"
      ]
    },
    {
      title: "Stressed Asset & Resolution Funding",
      desc: "Capital Corridor advises and coordinates with stakeholders on stressed asset resolution, debt restructuring, and One-Time Settlements (OTS).",
      items: [
        "SMA-0 Funding",
        "SMA-1 Funding",
        "SMA-2 Funding",
        "NPA & NPL Funding",
        "ARC Funding & Asset Takeovers",
        "One-Time Settlement (OTS) Structuring",
        "Interim Finance under IBC",
        "NCLT Funding Support",
        "Stressed Asset Revival Funding",
        "Debt Resolution & Recapitalisation",
        "Debt Restructuring"
      ]
    },
    {
      title: "Investment Banking & Capital Raising",
      desc: "We provide advisory and coordination support for debt, equity, and growth capital raising, assisting businesses in securing appropriate capital solutions.",
      items: [
        "Venture Capital",
        "Private Equity Funding",
        "Equity Funding",
        "FDI — Debt & Equity Structuring",
        "Funding for Listed Companies",
        "Private Credit Funding",
        "Structured Debt Solutions",
        "Mezzanine Financing"
      ]
    },
    {
      title: "Retail & Business Loans",
      desc: "Advisory and coordination support for a broad range of secured and unsecured loan solutions.",
      items: [
        "Secured Loans",
        "Unsecured Loans",
        "Home Loans",
        "Personal Loans",
        "Car Loans",
        "Education Loans",
        "Gold Loans",
        "Business Loans",
        "Professional Loans",
        "Loan Against Property (LAP)",
        "Loan Against Securities (LAS)",
        "Balance Transfer Facilities"
      ]
    },
    {
      title: "Government-Backed Loan Schemes",
      desc: "Capital Corridor facilitates access to government-supported financing programmes by coordinating with appropriate institutions.",
      items: [
        "PMMY — Pradhan Mantri Mudra Yojana",
        "CGTMSE",
        "ECLGS"
      ]
    },
    {
      title: "Impact & Development Finance",
      desc: "We provide advisory and structuring support to organisations seeking funding solutions that promote measurable social impact.",
      items: [
        "CSR Funding Advisory",
        "NGO & Non-Profit Funding Solutions"
      ]
    },
    {
      title: "Capital Markets",
      desc: "Strategic advisory, structuring, and transaction coordination support for companies seeking to raise capital through public and private equity market instruments.",
      items: [
        "IPO, FPO, Rights Issue, Bonus Issue, Offer for Sale (OFS)",
        "QIP, Private Placement, Preferential Allotment, Pre-IPO Placements",
        "SME IPO, Mainboard IPO, Direct Listing",
        "Block Placement Advisory",
        "IPO Transaction Coordination",
        "Capital-Markets Documentation Coordination",
        "Investor & Institutional Coordination",
        "Coordination with SEBI-Registered Intermediaries",
        "Due-Diligence Coordination",
        "5 P's: Planning",
        "5 P's: Preparation",
        "5 P's: Process Coordination",
        "5 P's: Public Offering Support",
        "5 P's: Post-IPO Advisory"
      ]
    },
    {
      title: "Listed Company Acquisition & Public Market Entry",
      desc: "Strategic advisory and transaction coordination support for businesses exploring public market opportunities through acquisitions and restructuring.",
      items: [
        "Listed-Company Identification",
        "Acquisition / Transaction Structures",
        "Shareholding & Ownership Structuring",
        "Capital-Structure Planning",
        "Business Integration",
        "Corporate Restructuring",
        "Regulatory / Governance Coordination",
        "Investor Relations",
        "Strategic Value Creation",
        "End-to-End Transaction Coordination"
      ]
    },
    {
      title: "Legal, Insolvency, Restructuring & Recovery Advisory",
      desc: "Capital Corridor provides strategic advisory and coordination support in relation to insolvency, restructuring, debt recovery, and stressed asset resolution.",
      items: [
        "Insolvency & Bankruptcy Advisory",
        "IBC / CIRP Strategy",
        "Debt Restructuring & Settlement",
        "Debt Recovery & Enforcement Advisory",
        "SARFAESI-Related Advisory",
        "NPA Resolution",
        "Stressed-Asset Resolution",
        "Business Turnaround & Revival",
        "Distressed-Asset / NCLT Transaction Advisory",
        "Coordination with Qualified Legal & Professional Advisors"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Complete Services Portfolio" 
        description="Capital Corridor facilitates, coordinates, and advises on a comprehensive range of financial solutions, from corporate lending to capital markets."
        canonicalUrl="/services"
      />
      
      {/* Header */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Advisory & Structuring Portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              Comprehensive <span className="italic font-light text-slate-500">financial solutions.</span>
            </h1>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              As an independent financial facilitator, we provide structuring, advisory, and coordination support to help businesses access capital, resolve stressed assets, and navigate complex transactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Editorial Layout */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-3xl font-serif text-slate-900 mb-6">Our Capabilities</h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  We structure and coordinate tailored solutions spanning corporate credit, structured finance, investment banking, and capital markets.
                </p>
                <div className="h-px w-full bg-slate-200 mb-8"></div>
                <ul className="space-y-4">
                  {categories.map((category, idx) => (
                    <li key={idx}>
                      <a href={`#service-${idx}`} className="text-sm font-medium tracking-wide text-slate-500 hover:text-[#C5A059] transition-colors line-clamp-1">
                        {String(idx + 1).padStart(2, '0')}. {category.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-20 lg:space-y-32">
              {categories.map((category, idx) => (
                <div key={idx} id={`service-${idx}`} className="relative scroll-mt-32">
                  <span className="text-[#C5A059] font-medium tracking-widest uppercase text-xs mb-4 block">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-6">{category.title}</h3>
                  <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">{category.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-12 pt-8 border-t border-slate-200">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start">
                        <div className="h-px w-3 bg-[#C5A059] mt-2.5 mr-4 shrink-0"></div>
                        <span className="text-slate-800 font-light text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
