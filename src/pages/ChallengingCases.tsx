import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function ChallengingCases() {
  const cases = [
    {
      title: "CIBIL / Credit Score Irregularities",
      desc: "Advising businesses and promoters with historic credit defaults, delayed payments, or low CIBIL scores on restructuring their credit profile and accessing appropriate funding.",
      number: "01"
    },
    {
      title: "Stressed Accounts & SMA (0, 1, 2)",
      desc: "Advising accounts exhibiting signs of stress (Special Mention Accounts) to prevent classification as Non-Performing Assets (NPAs) through proactive debt restructuring and refinancing.",
      number: "02"
    },
    {
      title: "NPA Funding & Turnaround",
      desc: "Structuring turnaround financing and rescue capital for accounts classified as NPAs, facilitating revival and regularisation of operations.",
      number: "03"
    },
    {
      title: "One-Time Settlement (OTS) Funding",
      desc: "Advising on and structuring funding solutions to execute One-Time Settlements (OTS) with existing lenders, enabling promoters to resolve legacy debt and rebuild their financial standing.",
      number: "04"
    },
    {
      title: "ARC Asset Takeovers & Refinancing",
      desc: "Assisting promoters in arranging funding to redeem assets acquired by Asset Reconstruction Companies (ARCs), facilitating the settlement of ARC dues and asset retrieval.",
      number: "05"
    },
    {
      title: "Insolvency (IBC) & NCLT Resolution",
      desc: "Advisory support for companies facing insolvency proceedings under the Insolvency and Bankruptcy Code (IBC). Structuring resolution plans and arranging funding for successful applicants.",
      number: "06"
    },
    {
      title: "Multiple Overlapping Loans",
      desc: "Structuring debt consolidation for borrowers burdened by multiple high-cost loans, unifying obligations to improve cash flow and reduce overall borrowing costs.",
      number: "07"
    },
    {
      title: "Complex Collateral & Property Issues",
      desc: "Structuring financing against non-standard, disputed, or legally complex properties, agricultural land, or properties involving multiple co-owners and partition issues.",
      number: "08"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Challenging Borrower Files" 
        description="Specialised funding solutions for complex and non-standard financial scenarios."
        canonicalUrl="/challenging-cases"
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
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Challenging Borrower Files</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              Navigating complexity. <br/>
              <span className="italic font-light text-slate-500">Structuring solutions.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-[#0B1120] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl lg:text-5xl font-serif leading-[1.3] font-light mb-12">
            "We understand that financial distress, historic defaults, or complex credit profiles require specialised advisory, not standard rejections."
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto font-light leading-relaxed text-lg mb-16">
            Capital Corridor specialises in advising on, structuring, and coordinating funding for borrower files generally considered challenging or unbankable by traditional lenders. We work to rebuild financial viability and facilitate access to appropriate capital.
          </p>
          
          {/* Complexity Framework */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-800">
            {["Complexity", "Analysis", "Structuring", "Solution"].map((step, i) => (
              <div key={i} className="text-center">
                <span className="block text-xs font-bold tracking-widest text-[#C5A059] uppercase mb-2">Step 0{i + 1}</span>
                <span className="font-serif text-xl">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Cases */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {cases.map((c, idx) => (
              <div key={idx} className="relative">
                <span className="absolute top-0 left-0 text-[120px] leading-none font-serif text-slate-100 -z-10 -ml-6 -mt-8 select-none">
                  {c.number}
                </span>
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{c.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Note & CTA */}
      <section className="py-24 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-light text-slate-500 max-w-4xl mx-auto mb-12 leading-relaxed">
            <strong>Important Disclaimer:</strong> While Capital Corridor specialises in structuring solutions for challenging cases, we do not guarantee funding, loan sanctions, or regulatory approvals. All funding is subject to the independent credit evaluation and absolute discretion of the respective lenders, financial institutions, or investors.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-[#0B1120] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#C5A059] transition-colors">
            Discuss Your Case Confidentially
          </Link>
        </div>
      </section>
    </div>
  );
}
