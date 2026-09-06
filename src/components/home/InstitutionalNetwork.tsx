import { Landmark, Building2, Shield, CircleDollarSign } from 'lucide-react';

export function InstitutionalNetwork() {
  const lenderTypes = [
    {
      icon: Landmark,
      category: 'Public Sector Banks (PSUs)',
      description: 'State Bank of India, Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank & major PSBs.',
    },
    {
      icon: Building2,
      category: 'Private Sector Commercial Banks',
      description: 'HDFC Bank, ICICI Bank, Axis Bank, IndusInd Bank, Kotak Mahindra Bank & regional commercial lenders.',
    },
    {
      icon: Shield,
      category: 'Non-Banking Financial Companies (NBFCs)',
      description: 'Tata Capital, Bajaj Finance, L&T Finance, Aditya Birla Finance & specialized corporate NBFCs.',
    },
    {
      icon: CircleDollarSign,
      category: 'AIF Private Debt Funds & ARCs',
      description: 'Category II AIFs, Structured Credit Funds, Distressed Debt Funds & Asset Reconstruction Companies.',
    },
  ];

  return (
    <section className="bg-[#050B14] py-20 lg:py-28 text-white relative border-t border-[#1E3356]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-px bg-[#C5A059]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#C5A059]">
              INSTITUTIONAL ECOSYSTEM
            </span>
            <span className="w-6 h-px bg-[#C5A059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            25+ Banking & Credit <span className="italic text-[#C5A059]">Relationships.</span>
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base">
            Active syndication channels across India's premier public and private financial institutions to ensure optimal rate discovery and credit structure alignment for every client mandate.
          </p>
        </div>

        {/* 4 Lender Category Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lenderTypes.map((lender, i) => {
            const Icon = lender.icon;
            return (
              <div
                key={i}
                className="bg-[#070E1C] border border-[#1E3356] p-6 rounded-sm hover:border-[#C5A059]/60 transition-colors group"
              >
                <div className="p-3 bg-[#1E3356]/40 text-[#C5A059] rounded-sm w-fit mb-4 group-hover:bg-[#C5A059] group-hover:text-[#070E1C] transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                  {lender.category}
                </h3>
                <p className="text-xs font-light text-slate-400 leading-relaxed">
                  {lender.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500 font-light max-w-2xl mx-auto">
          Note: Capital Corridor operates purely in an advisory and facilitation capacity. All credit sanctions and disbursals rest with the respective regulated banking and financial institutions.
        </div>

      </div>
    </section>
  );
}
