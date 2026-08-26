import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function OurTeam() {
  const team = [
    {
      name: "Rahul Mantri",
      role: "Director",
      bio: [
        "A highly accomplished finance professional, Rahul Mantri brings over 30 years of extensive experience across banking, finance, and investment advisory. He has developed a reputation as a trusted advisor to corporations, high-net-worth individuals, and institutional clients.",
        "His deep expertise lies in loan syndication, structured finance, NPA resolution, private equity, capital market advisory, IPO strategy, M&A, and debt restructuring.",
        "Rahul is known for his ability to navigate complex financial landscapes and structure innovative capital solutions. Under his leadership, Capital Corridor has facilitated over 500 successful funding assignments across diverse industries, establishing strong relationships with a vast network of banks, NBFCs, AIFs, private credit funds, and institutional investors."
      ]
    },
    {
      name: "Daksh Khandelwal",
      role: "Director",
      bio: [
        "A seasoned financial expert, Daksh Khandelwal brings deep insights and technical proficiency in financial advisory, transaction structuring, and deal execution.",
        "He plays a pivotal role in driving Capital Corridor's advisory mandates, ensuring meticulous analysis and seamless coordination across complex funding, restructuring, and capital market transactions.",
        "Daksh's execution-focused approach and strong relationships with institutional lenders and investors are instrumental in delivering tailored financial solutions that align with the strategic objectives of the firm's clients."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Our Team" 
        description="Meet the leadership team guiding Capital Corridor's strategic vision."
        canonicalUrl="/our-team"
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
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Leadership</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              Driven by <span className="italic font-light text-slate-500">expertise & execution.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {team.map((member, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              
              <div className="lg:col-span-5 relative">
                <div className="aspect-[3/4] bg-slate-100 border border-slate-200 flex items-center justify-center grayscale opacity-80">
                  <span className="font-serif text-4xl text-slate-300 uppercase tracking-widest">{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                </div>
                {/* Decorative border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C5A059] -z-10"></div>
              </div>

              <div className="lg:col-span-7">
                <h2 className="text-4xl font-serif text-slate-900 mb-2">{member.name}</h2>
                <p className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-10">{member.role}</p>
                
                <div className="space-y-6">
                  {member.bio.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-lg text-slate-600 font-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
