import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, Shield, Layers, 
  FileText, Search, UserCheck, Banknote, Sparkles 
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function ExecutionFrameworkV4() {
  const steps = [
    {
      num: "01",
      title: "Understanding Requirements",
      desc: "Deep-dive assessment of business profile, funding requirements, capital structure, and strategic corporate objectives.",
      deliverable: "Strategic Brief & Capital Roadmap"
    },
    {
      num: "02",
      title: "Financial Evaluation",
      desc: "Comprehensive diagnostic of cash flows, existing debt exposure, repayment capacity, collateral profile, and viability.",
      deliverable: "Credit Diagnostic & Eligibility Matrix"
    },
    {
      num: "03",
      title: "Solution Structuring",
      desc: "Architecting the optimal financial structure (senior debt, mezzanine, working capital, trade lines, or hybrid equity).",
      deliverable: "Transaction Term Sheet & Structure"
    },
    {
      num: "04",
      title: "Documentation Coordination",
      desc: "Preparing bank-grade documentation including CMA data, Detailed Project Reports (DPR), TEV assessments, and information memorandums.",
      deliverable: "Institutional Credit Dossier"
    },
    {
      num: "05",
      title: "Lender & Investor Mapping",
      desc: "Targeting and engaging the most suitable institutions from our network of public/private banks, NBFCs, AIFs, and credit funds.",
      deliverable: "Targeted Institutional Engagement"
    },
    {
      num: "06",
      title: "Transaction Due Diligence",
      desc: "Managing lender queries, credit appraisal interactions, techno-commercial evaluation, and legal/financial due diligence.",
      deliverable: "Credit Committee Sanction"
    },
    {
      num: "07",
      title: "Sanction & Disbursement",
      desc: "Coordination of sanction terms, security creation, charge filing, loan agreement execution, and seamless fund disbursement.",
      deliverable: "Executed Facility & Capital Release"
    },
    {
      num: "08",
      title: "Ongoing Strategic Support",
      desc: "Continuous advisory covering refinancing, limit enhancements, working capital optimization, and long-term capital strategy.",
      deliverable: "Long-Term Value Advisory"
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-[#050C18] text-white border-b border-[#14233D] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#C5A059] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
              04 &bull; STRUCTURED METHODOLOGY
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              The 8-Step Advisory &amp; Funding Process
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md leading-relaxed">
            A disciplined, transparent, and execution-focused framework ensuring maximum certainty of closure across all capital mandates.
          </p>
        </div>

        {/* 8 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "p-6 rounded-sm border transition-all duration-300 flex flex-col justify-between cursor-pointer group relative",
                activeStep === idx
                  ? "bg-[#0C1A32] border-[#C5A059] shadow-xl shadow-[#C5A059]/5"
                  : "bg-[#081224] border-[#152642] hover:border-[#1E3A65] hover:bg-[#0A162B]"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={cn(
                    "font-mono text-xs font-bold px-2 py-0.5 rounded",
                    activeStep === idx 
                      ? "bg-[#C5A059] text-[#060D1A]" 
                      : "bg-[#112038] text-[#C5A059]"
                  )}>
                    STEP {step.num}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">0{idx + 1}/08</span>
                </div>

                <h3 className={cn(
                  "font-serif text-base font-semibold mb-2 transition-colors",
                  activeStep === idx ? "text-white" : "text-slate-200 group-hover:text-white"
                )}>
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#162744] text-[10px] text-[#C5A059] font-medium tracking-wide">
                Key Output: <span className="text-slate-300 font-normal">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process at a Glance Bar */}
        <div className="mt-12 p-6 bg-[#081427] border border-[#182C4D] rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A059]">Workflow Sequence:</span>
            <div className="hidden xl:flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span>Diagnostic</span> &rarr; <span>Structuring</span> &rarr; <span>Dossier Prep</span> &rarr; <span>Lender Outreach</span> &rarr; <span>Appraisal</span> &rarr; <span>Disbursement</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C5A059] text-[#060D1A] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#D4B36D] transition-colors shrink-0 shadow-md"
          >
            <span>Structure Your Mandate</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
