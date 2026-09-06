import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#040812] text-slate-300 border-t border-[#132238] relative overflow-hidden">
      {/* Hairline gold accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#C5A059]/70 to-transparent" />

      {/* Subtle architectural background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Top Section: Brand Statement & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#14233D]">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 pr-0 lg:pr-6 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="bg-white/95 p-2 rounded-sm border border-[#C5A059]/40">
                <img 
                  src="/images/capital-corridor-logo.png" 
                  alt="Capital Corridor" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-white text-sm uppercase font-bold block">
                  CAPITAL CORRIDOR
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                  Structured Finance & Advisory
                </span>
              </div>
            </Link>

            <p className="text-xs font-light text-slate-400 leading-relaxed max-w-sm">
              Three decades of trusted financial advisory, debt syndication, structured credit, and capital markets solutions. Operating as a strategic bridge between capital demand and institutional capital sources across India.
            </p>

            <div className="p-4 bg-[#081224] border border-[#182C4E] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                <ShieldCheck className="h-4 w-4" /> Institutional Facilitation
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Empanelled coordination with Public & Private Banks, NBFCs, AIFs, Private Credit Funds & ARCs.
              </p>
            </div>
          </div>

          {/* Column 2: Service Pillars */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-[#C5A059]" /> Advisory Practices
            </h3>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link to="/services#funding-loans" className="text-slate-400 hover:text-[#C5A059] transition-colors flex items-center justify-between group">
                  <span>01. Corporate Funding & Credit</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </Link>
              </li>
              <li>
                <Link to="/services#financial-advisory" className="text-slate-400 hover:text-[#C5A059] transition-colors flex items-center justify-between group">
                  <span>02. Financial Advisory & ECM</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </Link>
              </li>
              <li>
                <Link to="/services#legal-advisory" className="text-slate-400 hover:text-[#C5A059] transition-colors flex items-center justify-between group">
                  <span>03. Legal & Insolvency Advisory</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </Link>
              </li>
              <li>
                <Link to="/services#documentation-support" className="text-slate-400 hover:text-[#C5A059] transition-colors flex items-center justify-between group">
                  <span>04. DPR & Documentation Support</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </Link>
              </li>
              <li>
                <Link to="/services#other-services" className="text-slate-400 hover:text-[#C5A059] transition-colors flex items-center justify-between group">
                  <span>05. Extended Network Services</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-[#C5A059]" /> Contact Us
            </h3>
            
            <div className="space-y-4 text-xs font-light">
              <div className="p-3 bg-[#081224] border border-[#162744] rounded-sm">
                <div className="text-white font-serif text-sm font-semibold">Rahul Mantri</div>
                <a href="tel:+919826033481" className="text-white hover:text-[#C5A059] transition-colors block text-xs font-serif font-medium mt-1">+91 98260 33481</a>
                <a href="mailto:rahull@capitalcorridor.in" className="text-slate-400 hover:text-white transition-colors block text-[11px] font-sans">rahull@capitalcorridor.in</a>
              </div>

              <div className="p-3 bg-[#081224] border border-[#162744] rounded-sm">
                <div className="text-white font-serif text-sm font-semibold">Daksh Khandelwal</div>
                <a href="tel:+918003157877" className="text-white hover:text-[#C5A059] transition-colors block text-xs font-serif font-medium mt-1">+91 80031 57877</a>
                <a href="mailto:daksh@capitalcorridor.in" className="text-slate-400 hover:text-white transition-colors block text-[11px] font-sans">daksh@capitalcorridor.in</a>
              </div>

              <div className="space-y-1.5 pt-1">
                <a href="mailto:contact@capitalcorridor.in" className="flex items-center gap-2 text-slate-400 hover:text-[#C5A059] transition-colors">
                  <Mail className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                  <span>contact@capitalcorridor.in</span>
                </a>
                <a href="https://wa.me/918003157877" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-[#C5A059] transition-colors">
                  <MessageCircle className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                  <span>WhatsApp: +91 80031 57877</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Registered Offices */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-[#C5A059]" /> Locations
            </h3>
            
            <div className="space-y-3 text-xs font-light text-slate-400">
              <div>
                <div className="text-white font-medium text-[11px]">Office 1</div>
                <p className="leading-relaxed mt-0.5">Plot No. 401/10, Near Church, Brahampuri, Suchna Kendra Circle, Ajmer, Rajasthan – 305001, India.</p>
              </div>

              <div>
                <div className="text-white font-medium text-[11px]">Office 2</div>
                <p className="leading-relaxed mt-0.5">A-1-A, ACR Scheme, Near Petrol Pump, Vaishali Nagar, Ajmer, Rajasthan – 305001, India.</p>
              </div>

              <div className="pt-2 border-t border-[#162744]">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Clock className="h-3 w-3 text-[#C5A059]" />
                  <span>Mon–Fri: 9 AM – 6 PM</span>
                </div>
                <div className="text-[11px] text-slate-500 pl-4.5">Sat: 10 AM – 4 PM</div>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Section: Regulatory Disclosures (from Official Company Profile) */}
        <div className="py-8 border-b border-[#14233D] text-[11px] text-slate-500 font-light leading-relaxed space-y-3">
          <p>
            <strong className="text-slate-400 font-medium uppercase tracking-wider">Regulatory Disclaimer:</strong> Capital Corridor is an independent financial advisory, consultancy, structuring, documentation, and facilitation firm. Capital Corridor does not act as a bank, Non-Banking Financial Company (NBFC), registered lender, guarantor, credit decision-making authority, deposit-taking institution, investment manager, or stockbroker. The firm does not disburse loans directly or manage client funds. All credit and funding decisions rest solely with the respective banks, NBFCs, AIFs, and institutional investors based on their independent appraisal.
          </p>
          <p>
            Where advisory involves legal representation, insolvency filings, or statutory certifications, Capital Corridor coordinates with empanelled advocates, Insolvency Professionals (IPs), Chartered Accountants (CAs), and Registered Valuers.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            &copy; {year} Capital Corridor. All rights reserved. Registered in Ajmer, Rajasthan.
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about" className="hover:text-[#C5A059] transition-colors">About Firm</Link>
            <Link to="/our-team" className="hover:text-[#C5A059] transition-colors">Leadership</Link>
            <Link to="/calculators" className="hover:text-[#C5A059] transition-colors">Financial Tools</Link>
            <Link to="/legal-disclaimer" className="hover:text-[#C5A059] transition-colors underline underline-offset-4 text-slate-400">
              Full Legal Disclaimer & Compliance
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
