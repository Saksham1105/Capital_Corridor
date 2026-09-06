import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function LeadershipShowcase() {
  const leaders = [
    {
      name: 'Rahul Mantri',
      role: 'Partner',
      image: '/images/rahul_mantri.jpeg',
      experience: '30+ Years Financial Markets Experience',
      bio: 'Seasoned financial markets and corporate finance professional with over 30 years of experience in capital markets, structured finance, debt syndication, and investment banking advisory. Former CEO of a leading listed stock broking company in Rajasthan, specializing in institutional debt funding, SMA/NPA debt restructuring, and turnaround financing.',
      credentials: [
        'Former CEO of Listed Stock Broking Institution',
        '30+ Years Debt Syndication & Capital Markets',
        'Stressed Asset Resolution & Bank Negotiation',
      ],
      phone: '+91 99822 22210',
      email: 'rahull@capitalcorridor.in',
      whatsapp: 'https://wa.me/919982222210',
    },
    {
      name: 'Daksh Khandelwal',
      role: 'Partner',
      image: '/images/daksh_khandelwal.jpeg',
      experience: 'Strategic Development & Execution',
      bio: 'Partner at Capital Corridor driving business development, strategic client relationships, market expansion, and transaction management. Actively overseeing coordination with banks, NBFCs, private credit funds, and institutional stakeholders across debt syndication, structured finance, and capital raising mandates.',
      credentials: [
        'Strategic Client Relationships & Expansion',
        'Institutional Banking & NBFC Coordination',
        'Debt Syndication & Real Estate Mandates',
      ],
      phone: '+91 80031 57877',
      email: 'daksh@capitalcorridor.in',
      whatsapp: 'https://wa.me/918003157877',
    },
  ];

  return (
    <section className="bg-[#F8F6F0] py-20 lg:py-32 text-[#070E1C] relative border-t border-[#E2DCD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[#E2DCD0] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                LEADERSHIP & DIRECT ENGAGEMENT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070E1C] leading-tight">
              Direct Senior Engagement on Every <span className="italic text-[#C5A059]">Mandate.</span>
            </h2>
          </div>
          <p className="text-slate-600 font-light text-sm sm:text-base max-w-md">
            Our partners personally oversee client engagements — bringing decades of market experience, execution rigor, and senior banking relationships to every transaction.
          </p>
        </div>

        {/* Executive Presentation Layout */}
        <div className="space-y-16">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-[#E2DCD0] first:border-t-0 first:pt-0"
            >
              {/* Leader Photo Column */}
              <div className="lg:col-span-4 relative">
                <div className="aspect-[3/4] w-full bg-[#050B14] rounded-sm overflow-hidden shadow-md">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Leader Bio & Direct Actions Column */}
              <div className="lg:col-span-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em]">
                      {leader.experience}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {leader.role}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#070E1C] mb-4">
                    {leader.name}
                  </h3>

                  <p className="text-slate-700 font-light text-sm sm:text-base leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {leader.credentials.map((cred, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-[#C5A059] shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Executive Contact Bar */}
                <div className="pt-6 border-t border-[#E2DCD0] flex flex-wrap items-center gap-6 text-xs">
                  <a
                    href={`tel:${leader.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 font-bold text-[#070E1C] hover:text-[#C5A059] transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#C5A059]" />
                    <span>{leader.phone}</span>
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-2 font-light text-slate-600 hover:text-[#C5A059] transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#C5A059]" />
                    <span>{leader.email}</span>
                  </a>
                  <a
                    href={leader.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link to Our Team */}
        <div className="text-center mt-16 pt-8 border-t border-[#E2DCD0]">
          <Link
            to="/our-team"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#070E1C] border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors"
          >
            <span>Read Complete Leadership Profiles &amp; Background</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
