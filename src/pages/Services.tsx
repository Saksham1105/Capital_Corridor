import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Services() {
  const categories = [
    {
      title: "Corporate Finance, Lending & Capital Solutions",
      desc: "Customised funding advisory, structured credit, and capital raising for corporates, MSMEs, and developers.",
      items: ["Debt Consolidation", "Government Tender Financing", "Loans Against Bonds & NCDs", "External Commercial Borrowings (ECB)", "Lease Rental Discounting (LRD)"]
    },
    {
      title: "Trade Finance & International Business",
      desc: "Comprehensive trade finance advisory for domestic and cross-border trade transactions.",
      items: ["Letter of Credit (LC) & SBLC", "Bank & Corporate Guarantees", "Export Finance & Bill Discounting", "Import Finance", "Buyer's & Supplier's Credit"]
    },
    {
      title: "Working Capital & Supply Chain Finance",
      desc: "Solutions to enhance liquidity, strengthen supply chains, and support operational growth.",
      items: ["Term Loans", "Cash Credit (CC)", "Overdraft & Drop-Line Overdraft", "Supply Chain Finance"]
    },
    {
      title: "Receivables & Invoice Financing",
      desc: "Unlock working capital tied up in outstanding invoices and trade receivables.",
      items: ["Invoice & Bill Discounting", "Factoring", "Receivables Securitisation", "Purchase Order (PO) Financing"]
    },
    {
      title: "Project, Infrastructure & Institutional Funding",
      desc: "Long-term project financing solutions across infrastructure, energy, hospitality, and institutional developments.",
      items: ["Greenfield & Brownfield Financing", "Industrial & Manufacturing Projects", "Infrastructure & Logistics Funding", "Acquisition & CapEx Financing"]
    },
    {
      title: "Real Estate Funding",
      desc: "Specialised real estate financing solutions for developers, builders, and real estate projects.",
      items: ["Builder & Developer Funding", "Construction Finance", "Inventory Funding"]
    },
    {
      title: "Asset & Equipment Finance",
      desc: "Asset-backed financing solutions to acquire, refinance, and leverage assets for operational efficiency.",
      items: ["Equipment & Machinery Finance", "Inventory / Stock Finance", "Commodity Financing", "Revenue-Based & Non-Recourse Loans"]
    },
    {
      title: "Stressed Asset & Resolution Funding",
      desc: "Advisory for stressed asset resolution, debt restructuring, and One-Time Settlements (OTS).",
      items: ["SMA & NPA Funding", "ARC Funding & Asset Takeovers", "OTS Structuring", "Stressed Asset Revival Funding", "Debt Restructuring"]
    },
    {
      title: "Investment Banking & Capital Raising",
      desc: "Debt, equity, and growth capital raising to support strategic expansion.",
      items: ["Venture Capital & Private Equity", "Foreign Direct Investment (FDI)", "Private Credit Funding", "Structured Debt Solutions"]
    },
    {
      title: "Retail & Business Loans",
      desc: "Broad range of secured and unsecured loan solutions for individuals and businesses.",
      items: ["Secured & Unsecured Loans", "Home, Personal & Car Loans", "Business & Professional Loans", "Loan Against Property (LAP)"]
    },
    {
      title: "Government-Backed Loan Schemes",
      desc: "Advisory for government-supported financing programmes.",
      items: ["Pradhan Mantri Mudra Yojana (PMMY)", "CGTMSE", "Emergency Credit Line Guarantee Scheme (ECLGS)"]
    },
    {
      title: "Impact & Development Finance",
      desc: "Funding solutions that promote measurable social and developmental impact.",
      items: ["CSR Funding Advisory", "NGO & Non-Profit Funding Solutions"]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Services & Funding" 
        description="Explore our comprehensive corporate finance, trade finance, and structured credit solutions."
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
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Funding & Financial Solutions</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              Optimising liquidity and <span className="italic font-light text-slate-500">access to capital.</span>
            </h1>
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
                  We provide customised funding advisory, trade finance, structured credit, and capital raising solutions to support business growth.
                </p>
                <div className="h-px w-full bg-slate-200 mb-8"></div>
                <Link to="/capital-markets" className="group flex items-center justify-between text-sm font-medium tracking-widest uppercase text-slate-900 hover:text-[#C5A059] transition-colors">
                  <span>Capital Market Services</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-16 lg:space-y-24">
              {categories.map((category, idx) => (
                <div key={idx} className="relative">
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-4">{category.title}</h3>
                  <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">{category.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-6 border-t border-slate-200">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start">
                        <div className="h-px w-3 bg-[#C5A059] mt-2.5 mr-4 shrink-0"></div>
                        <span className="text-slate-800 font-light text-sm">{item}</span>
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
