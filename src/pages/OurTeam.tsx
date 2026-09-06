import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ArrowRight, ShieldCheck, Award, Briefcase } from 'lucide-react';

export function OurTeam() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rahul Mantri",
      "jobTitle": "Partner",
      "worksFor": { "@type": "Organization", "name": "Capital Corridor" },
      "description": "Seasoned financial markets and corporate finance professional with over 30 years of experience in capital markets, structured finance, debt syndication, and investment banking advisory.",
      "telephone": "+919982222210",
      "email": "rahull@capitalcorridor.in",
      "image": "https://www.capitalcorridor.in/images/rahul-mantri.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Daksh Khandelwal",
      "jobTitle": "Partner",
      "worksFor": { "@type": "Organization", "name": "Capital Corridor" },
      "description": "Partner at Capital Corridor driving business development, strategic client relationships, and market expansion across debt syndication, structured finance, and capital raising.",
      "telephone": "+918003157877",
      "email": "daksh@capitalcorridor.in",
      "image": "https://www.capitalcorridor.in/images/daksh-khandelwal.jpg"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      <SEO 
        title="Leadership & Partners — Capital Corridor | Financial Advisory" 
        description="Meet Rahul Mantri and Daksh Khandelwal — the Partners leading Capital Corridor's financial advisory, structured finance, and debt syndication practices."
        canonicalUrl="/our-team"
        schema={schemaData}
      />

      {/* Header */}
      <section className="pt-36 pb-20 bg-[#050C18] text-white border-b border-[#14233D] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091528] border border-[#C5A059]/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              PRACTICE LEADERSHIP
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
            Institutional Leadership &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
              Decades of Capital Market Heritage
            </span>
          </h1>

          <p className="text-base sm:text-lg font-light text-slate-300 max-w-3xl leading-relaxed">
            Direct partner-level engagement ensuring strategic precision, confidentiality, and transaction closure across every mandate.
          </p>
        </div>
      </section>

      {/* Team Bios Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Partner 1: Rahul Mantri */}
          <div className="p-8 sm:p-12 bg-white border border-[#E0D9CD] rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover:border-[#C5A059] transition-all">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-full aspect-[4/5] bg-[#0A1628] rounded-sm overflow-hidden shadow-md border border-[#E0D9CD]">
                <img
                  src="/images/rahul-mantri.jpg"
                  alt="Rahul Mantri - Partner at Capital Corridor"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Rahul Mantri</h2>
                <div className="text-xs uppercase font-bold text-[#9A7830] tracking-widest mt-1">
                  Partner &bull; 30+ Years Experience
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 font-light border-t border-slate-100 pt-4">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 text-[#9A7830] mr-2 shrink-0" />
                  <a href="tel:+919982222210" className="hover:text-[#9A7830] font-medium">+91 99822 22210</a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 text-[#9A7830] mr-2 shrink-0" />
                  <a href="mailto:rahull@capitalcorridor.in" className="hover:text-[#9A7830]">rahull@capitalcorridor.in</a>
                </p>
                <p className="flex items-center">
                  <MessageCircle className="h-4 w-4 text-[#25D366] mr-2 shrink-0" />
                  <a href="https://wa.me/919982222210" target="_blank" rel="noopener noreferrer" className="hover:text-[#9A7830]">WhatsApp Chat</a>
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-slate-700 font-light text-sm leading-relaxed">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A7830]">
                Executive Profile
              </div>
              <p>
                Rahul Mantri is a seasoned financial markets and corporate finance professional with over 30 years of experience in capital markets, structured finance, corporate funding, debt syndication, investment banking advisory, strategic financial advisory, and financial consultancy. As a Partner of Capital Corridor, he provides strategic leadership and brings extensive industry expertise, helping businesses navigate complex financial challenges and access customised capital solutions.
              </p>
              <p>
                He began his career in the stock broking industry and rose to the position of Chief Executive Officer of a stock broking company, where he successfully led business operations, expansion initiatives, client acquisition, and strategic financial advisory engagements. His leadership experience has provided him with a deep understanding of financial markets, institutional lending, and corporate finance.
              </p>
              <p>
                Today, Rahul specialises in structured funding and financial consultancy, assisting businesses in accessing capital through public and private sector banks, NBFCs, private credit funds, Alternative Investment Funds (AIFs), Asset Reconstruction Companies (ARCs), and other financial institutions. His expertise spans institutional lending, debt syndication, structured finance, debt restructuring, stressed asset resolution, turnaround financing, and the structuring and facilitation of complex funding transactions.
              </p>
              <p>
                Known for his integrity, execution excellence, and solution-oriented approach, Rahul has earned a reputation for successfully managing complex and high-value financial mandates with professionalism, efficiency, and discretion.
              </p>
            </div>
          </div>

          {/* Partner 2: Daksh Khandelwal */}
          <div className="p-8 sm:p-12 bg-white border border-[#E0D9CD] rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover:border-[#C5A059] transition-all">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-full aspect-[4/5] bg-[#0A1628] rounded-sm overflow-hidden shadow-md border border-[#E0D9CD]">
                <img
                  src="/images/daksh-khandelwal.jpg"
                  alt="Daksh Khandelwal - Partner at Capital Corridor"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Daksh Khandelwal</h2>
                <div className="text-xs uppercase font-bold text-[#9A7830] tracking-widest mt-1">
                  Partner &bull; Strategic Growth &amp; Syndication
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 font-light border-t border-slate-100 pt-4">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 text-[#9A7830] mr-2 shrink-0" />
                  <a href="tel:+918003157877" className="hover:text-[#9A7830] font-medium">+91 80031 57877</a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 text-[#9A7830] mr-2 shrink-0" />
                  <a href="mailto:daksh@capitalcorridor.in" className="hover:text-[#9A7830]">daksh@capitalcorridor.in</a>
                </p>
                <p className="flex items-center">
                  <MessageCircle className="h-4 w-4 text-[#25D366] mr-2 shrink-0" />
                  <a href="https://wa.me/918003157877" target="_blank" rel="noopener noreferrer" className="hover:text-[#9A7830]">WhatsApp Chat</a>
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-slate-700 font-light text-sm leading-relaxed">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A7830]">
                Executive Profile
              </div>
              <p>
                Daksh Khandelwal is a business development and strategic growth professional who represents the next generation of leadership within Capital Corridor. As a Partner, he plays an active role in driving business development, strengthening client relationships, expanding the firm's market presence, and contributing to its long-term strategic vision.
              </p>
              <p>
                Combining modern business practices with an execution-focused and professional approach, Daksh contributes to the firm's growth by identifying new business opportunities, cultivating strategic relationships, and enhancing client engagement across diverse industries.
              </p>
              <p>
                At Capital Corridor, he is actively involved in understanding client requirements, identifying appropriate funding and advisory solutions, coordinating with banks, NBFCs, financial institutions, investors, and other stakeholders, overseeing documentation coordination, supporting transaction execution, and ensuring a seamless client experience throughout each engagement.
              </p>
              <p>
                Daksh actively supports advisory engagements across debt syndication, structured finance, project finance, working capital finance, real estate finance, loan against property (LAP), private credit, construction finance, capital raising, and other customised funding solutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-[#050C18] text-white px-4 sm:px-6 lg:px-8 border-b border-[#14233D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Consult Directly with the Partners
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              We operate with founder-level responsiveness. Schedule a confidential briefing today.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#C5A059] text-[#050C18] text-xs font-bold uppercase tracking-[0.18em] rounded-sm hover:bg-[#D4B473] transition-colors shrink-0 shadow-lg"
          >
            Initiate Executive Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
