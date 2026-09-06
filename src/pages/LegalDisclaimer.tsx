import { SEO } from '../components/SEO';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Scale, 
  Building2, 
  TrendingUp, 
  FileText, 
  Layers, 
  Gavel, 
  MailCheck, 
  Lock, 
  RefreshCw, 
  Globe, 
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';

export function LegalDisclaimer() {
  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Legal Disclaimer & Regulatory Disclosures — Capital Corridor" 
        description="Comprehensive official legal disclaimer, regulatory disclosures, non-lender status, advisory scope limitations, and fraud prevention notice for Capital Corridor."
        canonicalUrl="/legal-disclaimer"
      />

      {/* Header Section */}
      <section className="pt-36 pb-20 bg-[#060D1A] text-white border-b border-[#162744] px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle Architectural Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent absolute top-0 left-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12203D] border border-[#C5A059]/30 rounded-sm text-[#C5A059] text-[10.5px] font-semibold tracking-[0.25em] uppercase mb-5">
            <Scale className="h-3.5 w-3.5" />
            Official Regulatory Notice
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight mb-6">
            Legal Disclaimer & Regulatory Disclosures
          </h1>
          <p className="text-base sm:text-lg font-light text-slate-300 max-w-3xl leading-relaxed">
            Statutory positioning, role & scope of advisory services, institutional non-lender status, limitations of liability, and fraud prevention disclosures governing all engagements and communications of Capital Corridor.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Prominent High-Priority Highlight Banner */}
          <div className="p-8 bg-[#070F1E] text-white border-l-4 border-[#C5A059] shadow-xl rounded-sm relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#12203D] border border-[#C5A059]/40 rounded-sm shrink-0">
                <ShieldAlert className="h-6 w-6 text-[#C5A059]" />
              </div>
              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-serif text-white font-bold tracking-wide">
                  Core Regulatory Declaration & Non-Lender Status
                </h2>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Capital Corridor is an independent financial advisory, consultancy, structuring, documentation, coordination, and facilitation firm. Capital Corridor does not act as a bank, Non-Banking Financial Company (NBFC), registered lender, guarantor, credit decision-making authority, deposit-taking institution, payment service provider, investment manager, portfolio manager, stockbroker, merchant banker, depository participant, law firm, Insolvency Professional Entity (IPE), or any other regulated entity, unless expressly authorised under applicable law.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-400 font-light">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                    <span>Does not accept public deposits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                    <span>Does not disburse loans directly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                    <span>Does not manage or hold client funds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                    <span>Does not custody securities or client assets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Legal Sections (01 to 13) */}
          <div className="space-y-8 text-slate-700">
            
            {/* Section 01 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">01</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#C5A059]" /> Nature of the Company
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Capital Corridor is an independent financial advisory, consultancy, structuring, documentation, coordination, and facilitation firm. The Company provides advisory and execution support across funding, debt syndication, capital raising, capital markets, legal and insolvency advisory, restructuring, and financial documentation.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Capital Corridor does not act as a bank, Non-Banking Financial Company (NBFC), registered lender, guarantor, credit decision-making authority, deposit-taking institution, payment service provider, investment manager, portfolio manager, stockbroker, merchant banker, depository participant, law firm, Insolvency Professional Entity (IPE), or any other regulated entity, unless expressly authorised under applicable law.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                The Company does not accept deposits, disburse loans directly, manage client funds, hold client assets, custody securities, or undertake any regulated activity requiring statutory registration or licensing.
              </p>
            </div>

            {/* Section 02 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">02</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-[#C5A059]" /> Role & Scope of Services
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                The role of Capital Corridor is limited to understanding client requirements, identifying suitable funding, investment, or advisory solutions, structuring proposals, preparing and coordinating documentation, liaising with banks, NBFCs, financial institutions, investors, and other stakeholders, and facilitating the transaction process until the issuance of a sanction, approval, or resolution, wherever applicable.
              </p>
              <div className="p-4 bg-slate-50 border-l-2 border-[#C5A059] text-xs sm:text-sm font-medium text-slate-800">
                Capital Corridor acts solely as an advisor, consultant, arranger, facilitator, and coordinator, and not as a principal to any transaction.
              </div>
            </div>

            {/* Section 03 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">03</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="h-5 w-5 text-[#C5A059]" /> Funding & Financial Solutions
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Capital Corridor is a facilitator, not a loan provider. We do not guarantee loan approvals, funding sanctions, credit decisions, loan amounts, interest rates, repayment tenures, or disbursement timelines.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                All lending decisions rest solely with the respective banks, NBFCs, financial institutions, Alternative Investment Funds (AIFs), private credit funds, or Asset Reconstruction Companies (ARCs) involved, based on their independent credit evaluation, risk parameters, and internal appraisal policies.
              </p>
            </div>

            {/* Section 04 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">04</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[#C5A059]" /> Financial Advisory & Capital Market Services
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Capital Corridor is not registered with the Securities and Exchange Board of India (SEBI) as an Investment Adviser, Merchant Banker, Portfolio Manager, Stockbroker, or any other regulated intermediary, unless expressly stated under applicable law.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Any advisory relating to shares, securities, IPOs, or capital raising is informational and consultative in nature, does not constitute investment advice or a recommendation to buy or sell any security, and carries no guarantee of investment returns, listing outcomes, or capital appreciation. Investment decisions remain the sole responsibility of the client.
              </p>
            </div>

            {/* Section 05 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">05</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-[#C5A059]" /> Legal, Insolvency, Restructuring & Recovery Advisory
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Capital Corridor is not a law firm or an Insolvency Professional Entity (IPE) and does not provide legal representation or appear before courts, tribunals, NCLT, NCLAT, DRT, or DRAT.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                We act solely in an advisory and coordination capacity for matters relating to insolvency, restructuring, and debt recovery. Services requiring statutory registration or legal representation are undertaken by qualified advocates, insolvency professionals, chartered accountants, company secretaries, registered valuers, and other authorised professionals, wherever required.
              </p>
            </div>

            {/* Section 06 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">06</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-[#C5A059]" /> Documentation Support
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Capital Corridor does not itself prepare financial or project documentation such as Project Reports, CMA Data, TEV Reports, or other related documents. These are prepared by empanelled or independent professionals—including Chartered Accountants (CAs), Company Secretaries (CSs), former banking professionals, and other qualified experts—engaged or coordinated through Capital Corridor.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Such documentation is prepared based on the specific requirements of the funding proposal, project, or loan case to facilitate the funding process.
              </p>
            </div>

            {/* Section 07 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">07</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#C5A059]" /> Beyond Funding / Other Services
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                The services mentioned under the "Beyond Funding – Other Services" section are facilitated through Capital Corridor's network of independent professionals, consultants, associates, specialised service providers, and industry experts. These services are separate from Capital Corridor's core business activities, including financial advisory, structured finance, funding facilitation, capital raising advisory, and strategic financial consultancy.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Capital Corridor's role is limited to facilitating introductions and coordinating with suitable service providers where required. The respective service providers are solely responsible for the execution of their services, regulatory compliance, and all professional obligations. Any engagement or agreement for such services shall be directly between the client and the respective service provider.
              </p>
            </div>

            {/* Section 08 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">08</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-[#C5A059]" /> Limitation of Liability
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                To the fullest extent permitted under applicable law, Capital Corridor, its affiliates, directors, officers, employees, consultants, and representatives shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive losses or damages, including loss of profits, business opportunities, goodwill, data, or investments, arising from reliance upon the Company's advisory services, communications, documentation, website, or information provided.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Capital Corridor shall also not be liable for delays or failures resulting from events beyond its reasonable control, including regulatory changes, natural disasters, pandemics, civil disturbances, banking or network disruptions, or other force majeure events.
              </p>
            </div>

            {/* Section 09 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">09</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-[#C5A059]" /> Currency of Information & Supersession
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                This document and website content are subject to periodic review, revision, and update by Capital Corridor without prior notice. The current version supersedes and replaces all previous versions, drafts, or copies previously shared, circulated, or issued in any form, whether physical or digital.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                For the most current version of this document, recipients and clients should contact Capital Corridor directly or refer to <a href="https://www.capitalcorridor.in" className="text-[#C5A059] font-medium hover:underline">www.capitalcorridor.in</a>.
              </p>
            </div>

            {/* Section 10 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">10</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#C5A059]" /> No Binding Representation & Definitive Agreements
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                This website and associated documents are provided for general informational purposes only and do not constitute a binding offer, warranty, representation, undertaking, or contractual commitment by Capital Corridor.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                No statement, description, figure, or illustrative example contained in this website or profile, whether in the current or any previous version, shall be construed as creating any legal obligation or liability on the part of Capital Corridor, its directors, employees, or representatives.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                All engagements with Capital Corridor are governed solely by the specific terms of the definitive engagement letter, mandate letter, or agreement executed between Capital Corridor and the client, and not by the contents of this document or website.
              </p>
            </div>

            {/* Section 11: Fraud Warning & Communication */}
            <div className="p-8 bg-[#FFFDF5] border-l-4 border-[#C5A059] border-y border-r border-amber-200/60 shadow-md rounded-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-amber-200/60 pb-3">
                <span className="font-mono text-xs font-bold text-slate-900 bg-[#C5A059] px-2.5 py-1 rounded-sm">11</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-950 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-[#C5A059]" /> Communication & Fraud Prevention
                </h3>
              </div>
              <div className="space-y-3 text-slate-700 font-light text-sm sm:text-base leading-relaxed">
                <p className="font-medium text-slate-900">
                  Official communication from Capital Corridor is issued only through email addresses ending in <span className="font-mono font-bold text-[#070F1E] bg-amber-100 px-2 py-0.5 rounded">@capitalcorridor.in</span>.
                </p>
                <div className="p-3 bg-amber-100/70 border border-amber-300/60 rounded-sm font-semibold text-amber-900 text-sm">
                  We do not offer digital lending.
                </div>
                <p>
                  No reliance should be placed on communications purporting to be from Capital Corridor through any other channel.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Capital Corridor does not charge upfront cash processing fees in personal bank accounts, nor does it request passwords, OTPs, PINs, or sensitive banking credentials. Clients and stakeholders are advised to verify all communications directly through the official contact channels published on <a href="https://www.capitalcorridor.in" className="text-[#C5A059] font-medium underline">www.capitalcorridor.in</a> (+91 99822 22210 / +91 80031 57877).
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">12</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <MailCheck className="h-5 w-5 text-[#C5A059]" /> Intellectual Property
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                All content in this document and website — including text, design, financial models, methodologies, graphics, trade names, branding, logos, and proprietary frameworks (including the 5 P's IPO Framework) — is the intellectual property of Capital Corridor and may not be reproduced, distributed, or used without prior written consent.
              </p>
            </div>

            {/* Section 13 */}
            <div className="p-8 bg-white border border-slate-200/90 shadow-sm rounded-sm space-y-4 transition-all duration-200 hover:border-[#C5A059]/40">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-bold text-[#C5A059] bg-[#070F1E] px-2.5 py-1 rounded-sm">13</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#C5A059]" /> Jurisdiction, Governing Law & Other Legal Policies
                </h3>
              </div>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                Any dispute, controversy, or claim arising out of or in connection with the use of this website, corporate profile, communications, or advisory services shall be subject to the exclusive jurisdiction of the competent courts at <strong>Ajmer, Rajasthan, India</strong>, and governed by the laws of India.
              </p>
              <p className="font-light text-sm sm:text-base leading-relaxed text-slate-600">
                For our complete <strong>Terms of Use</strong>, <strong>Privacy Policy</strong>, <strong>Anti-Money Laundering (AML) Policy</strong>, and other institutional governance policies, please refer to the Capital Corridor website or contact our compliance desk at <a href="mailto:contact@capitalcorridor.in" className="text-[#C5A059] font-medium hover:underline">contact@capitalcorridor.in</a>.
              </p>
            </div>

          </div>

          {/* Bottom Verification & Contact Card */}
          <div className="p-8 bg-[#060D1A] text-slate-300 rounded-sm border border-[#182C4E] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-white font-serif text-base font-bold mb-1">Have Questions Regarding Compliance?</div>
              <div className="text-xs text-slate-400 font-light">Direct inquiries regarding regulatory disclosures, partner mandates, or empanelled coordination.</div>
            </div>
            <a 
              href="mailto:contact@capitalcorridor.in" 
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#060D1A] bg-[#C5A059] hover:bg-[#D4B36D] transition-colors rounded-sm shadow-sm whitespace-nowrap"
            >
              Contact Compliance Desk
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
