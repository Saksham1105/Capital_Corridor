import { SEO } from '../components/SEO';
export function LegalDisclaimer() {
  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Legal Disclaimer" 
        description="Important legal information regarding our advisory services."
        canonicalUrl="/legal-disclaimer"
      />
      {/* Header */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Important Information</p>
            <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              Legal <span className="italic font-light text-slate-500">Disclaimer.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none prose-lg font-light text-slate-700">
            
            <h3 className="font-serif text-slate-900 text-2xl">Nature of the Company</h3>
            <p>
              Capital Corridor is an independent financial advisory, consultancy, structuring, documentation, coordination, and facilitation firm. The Company provides advisory and execution support across funding, debt syndication, capital raising, capital markets, legal and insolvency advisory, restructuring, and financial documentation. Capital Corridor does not act as a bank, Non-Banking Financial Company (NBFC), registered lender, guarantor, credit decision-making authority, deposit-taking institution, payment service provider, investment manager, portfolio manager, stockbroker, merchant banker, depository participant, law firm, Insolvency Professional Entity (IPE), or any other regulated entity, unless expressly authorised under applicable law.
            </p>

            <div className="h-px w-full bg-slate-200 my-10"></div>

            <h3 className="font-serif text-slate-900 text-2xl">Role & Scope of Services</h3>
            <p>
              The role of Capital Corridor is limited to understanding client requirements, identifying suitable funding, investment, or advisory solutions, structuring proposals, preparing and coordinating documentation, liaising with banks, NBFCs, financial institutions, investors, and other stakeholders, and facilitating the transaction process until the issuance of a sanction, approval, or resolution, wherever applicable. Capital Corridor acts solely as an advisor, consultant, arranger, facilitator, and coordinator, and not as a principal to any transaction.
            </p>

            <div className="h-px w-full bg-slate-200 my-10"></div>

            <h3 className="font-serif text-slate-900 text-2xl">Funding & Financial Solutions</h3>
            <p>
              Capital Corridor is a facilitator, not a loan provider. We do not guarantee loan approvals, funding sanctions, credit decisions, loan amounts, interest rates, repayment tenures, or disbursement timelines. All lending decisions rest solely with the respective banks, NBFCs, financial institutions, Alternative Investment Funds (AIFs), private credit funds, or Asset Reconstruction Companies (ARCs) involved, based on their independent credit evaluation and internal policies.
            </p>

            <div className="h-px w-full bg-slate-200 my-10"></div>

            <h3 className="font-serif text-slate-900 text-2xl">Financial Advisory & Capital Market Services</h3>
            <p>
              Capital Corridor is not registered with the Securities and Exchange Board of India (SEBI) as an Investment Adviser, Merchant Banker, Portfolio Manager, Stockbroker, or any other regulated intermediary, unless expressly stated under applicable law. Any advisory relating to shares, securities, IPOs, or capital raising is informational and consultative in nature, does not constitute investment advice or a recommendation to buy or sell any security, and carries no guarantee of investment returns, listing outcomes, or capital appreciation. Investment decisions remain the sole responsibility of the client.
            </p>
            
            <div className="h-px w-full bg-slate-200 my-10"></div>

            <h3 className="font-serif text-slate-900 text-2xl">Documentation Support</h3>
            <p>
              Capital Corridor does not itself prepare financial or project documentation such as Project Reports, CMA Data, TEV Reports, or other related documents. These are prepared by empanelled or independent professionals—including Chartered Accountants (CAs), Company Secretaries (CSs), former banking professionals, and other qualified experts—engaged or coordinated through Capital Corridor.
            </p>
            
            <div className="h-px w-full bg-slate-200 my-10"></div>

            <h3 className="font-serif text-slate-900 text-2xl">Communication & Fraud Prevention</h3>
            <p>
              Official communication from Capital Corridor is issued only through email addresses ending in @capitalcorridor.in. We do not offer digital lending. No reliance should be placed on communications purporting to be from Capital Corridor through any other channel.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
