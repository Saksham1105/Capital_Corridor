import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export function AboutUs() {
  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="About Us" 
        description="Learn about Capital Corridor's 30+ years of expertise in financial advisory and structured finance."
        canonicalUrl="/about"
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
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Who We Are</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              Specialising in structured finance and strategic <span className="italic font-light text-slate-500">financial advisory.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-7">
              <div className="prose prose-slate max-w-none prose-lg font-light">
                <p className="text-2xl text-slate-800 leading-relaxed font-serif mb-12">
                  Capital Corridor is a leading financial advisory, structured finance, investment banking advisory, and capital markets solutions firm. We help corporates, entrepreneurs, developers, financial institutions, family offices, and investors access capital across a diversified institutional ecosystem.
                </p>
                
                <div className="h-px w-24 bg-[#C5A059] mb-12"></div>
                
                <h3 className="text-2xl font-serif text-slate-900 mb-6">Three Decades of Expertise</h3>
                <p className="text-slate-600 leading-relaxed mb-10 text-base">
                  With over 30 years of industry expertise, we deliver customised advisory solutions across corporate finance, structured funding, project finance, trade finance, real estate finance, working capital, supply chain finance, receivables financing, asset and equipment finance, investment banking advisory, private equity and venture capital advisory, capital market advisory, IPO advisory, mergers and acquisitions (M&A), financial documentation, stressed asset resolution, NPA funding, One-Time Settlement (OTS), debt restructuring, insolvency and recovery advisory, and strategic business advisory.
                </p>
                
                <h3 className="text-2xl font-serif text-slate-900 mb-6">Execution-Driven Approach</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-base">
                  Backed by a strong network of financial institutions, lenders, investors, and strategic partners, Capital Corridor provides end-to-end advisory and execution support—from financial assessment, transaction structuring, documentation coordination, and lender coordination to due diligence, coordination throughout the transaction process until successful fund disbursement or resolution, and post-transaction advisory. 
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Our execution-driven approach, deep industry expertise, and integrated financial solutions enable businesses to overcome complex financial challenges, optimise capital structures, access appropriate funding and investment solutions, and achieve sustainable growth and long-term value creation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-32">
                <div className="border-t border-slate-900 pt-8 mb-12">
                  <h3 className="text-xs font-bold text-slate-900 tracking-[0.2em] uppercase mb-8">Our Ecosystem</h3>
                  <ul className="space-y-5">
                    {[
                      "Public Sector Banks",
                      "Private Sector Banks",
                      "Non-Banking Financial Companies (NBFCs)",
                      "Housing Finance Companies (HFCs)",
                      "Venture Capital (VC) Firms",
                      "Private Equity (PE) Firms",
                      "Alternative Investment Funds (AIFs)",
                      "Private Credit Funds",
                      "Family Offices",
                      "Institutional Investors",
                      "Asset Reconstruction Companies (ARCs)"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#C5A059] mr-4 text-sm mt-0.5 font-serif italic">0{idx + 1}</span>
                        <span className="text-slate-600 text-sm font-light tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0B1120] p-8 text-white">
                  <h3 className="text-2xl font-serif mb-4">Connect</h3>
                  <p className="text-sm font-light text-slate-400 mb-8 leading-relaxed">Discuss your strategic capital requirements with our advisory team.</p>
                  <Link to="/contact" className="inline-flex items-center text-xs font-bold tracking-widest uppercase hover:text-[#C5A059] transition-colors">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
