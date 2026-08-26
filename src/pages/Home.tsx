import { Link } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useRef } from 'react';

export function Home() {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="flex flex-col w-full overflow-hidden bg-[#0B1120]">
      <SEO 
        title="Home" 
        description="Capital Corridor is a leading financial advisory, structured finance, investment banking advisory, and capital markets solutions firm."
        canonicalUrl="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Capital Corridor",
          "url": "https://capitalcorridor.in",
          "description": "Structured Finance • Investment Advisory • Capital Market Solutions",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ajmer",
            "addressRegion": "Rajasthan",
            "postalCode": "305001",
            "addressCountry": "IN"
          }
        }}
      />
      
      {/* 01 — HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-12 sm:pb-20 bg-[#0B1120] px-4 sm:px-6 lg:px-12 text-white border-b border-slate-800">
        <div className="flex-1 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <h1 className="text-[12vw] leading-[0.85] font-serif tracking-tighter uppercase mb-4 sm:mb-8 text-white">
              Capital
              <br />
              <span className="text-[#C5A059] italic pr-4">Corridor</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-6 lg:col-span-4"
          >
            <p className="text-[#C5A059] text-xs font-medium tracking-[0.2em] uppercase mb-4 flex items-center">
              <span className="w-8 h-px bg-[#C5A059] mr-4"></span>
              Positioning
            </p>
            <h2 className="text-lg sm:text-xl font-light text-slate-300 leading-relaxed uppercase tracking-wider">
              Structured Finance <br/>
              Investment Advisory <br/>
              Capital Market Solutions
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="md:col-span-6 lg:col-span-4 lg:col-start-9 flex flex-col sm:flex-row gap-6 md:justify-end"
          >
            <Link to="/contact" className="group inline-flex items-center text-sm font-medium tracking-[0.1em] uppercase text-white hover:text-[#C5A059] transition-colors pb-2 border-b border-white hover:border-[#C5A059]">
              Contact Us <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/services" className="group inline-flex items-center text-sm font-medium tracking-[0.1em] uppercase text-slate-400 hover:text-white transition-colors pb-2 border-b border-transparent hover:border-slate-400">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 02 — INSTITUTIONAL INTRODUCTION */}
      <section className="py-24 sm:py-32 bg-[#FDFBF7] px-4 sm:px-6 lg:px-12 border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">01 // Introduction</p>
          </div>
          <div className="md:col-span-8 lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-slate-900 leading-[1.15] tracking-tight mb-12"
            >
              We advise, structure, and coordinate customised financial solutions that help businesses achieve their growth objectives.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-600 font-light leading-relaxed text-lg"
            >
              <p>
                Capital Corridor is a leading financial advisory, structured finance, investment banking advisory, and capital markets solutions firm.
              </p>
              <p>
                By combining deep industry expertise, a strong institutional network, and an execution-focused advisory approach, we help clients navigate complex financing situations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — EXPERIENCE / SCALE */}
      <section className="py-24 sm:py-32 bg-[#0B1120] px-4 sm:px-6 lg:px-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <div className="md:col-span-4 lg:col-span-3">
            <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">02 // Scale</p>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-300">Three Decades of Trusted Financial Expertise.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-slate-800">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="p-8 sm:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px]"
          >
            <p className="text-[#C5A059] text-xs tracking-widest uppercase">Experience</p>
            <div className="mt-8 md:mt-0">
              <p className="text-8xl sm:text-9xl font-serif mb-4 text-white">30<span className="text-[#C5A059]">+</span></p>
              <p className="text-slate-400 font-light tracking-wide uppercase text-sm">Years of Experience</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}
            className="p-8 sm:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px]"
          >
            <p className="text-[#C5A059] text-xs tracking-widest uppercase">Reach</p>
            <div className="mt-8 md:mt-0">
              <p className="text-8xl sm:text-9xl font-serif mb-4 text-white">10<span className="text-[#C5A059]">+</span></p>
              <p className="text-slate-400 font-light tracking-wide uppercase text-sm">Industry Sectors Served</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px]"
          >
            <p className="text-[#C5A059] text-xs tracking-widest uppercase">Impact</p>
            <div className="mt-8 md:mt-0">
              <p className="text-8xl sm:text-9xl font-serif mb-4 text-white">500<span className="text-[#C5A059]">+</span></p>
              <p className="text-slate-400 font-light tracking-wide uppercase text-sm">Total Clients Served</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04 — CORE CAPABILITIES */}
      <section className="py-24 sm:py-32 bg-[#FDFBF7] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3">
            <p className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase sticky top-32">03 // Capabilities</p>
          </div>
          
          <div className="lg:col-span-9">
            <div className="flex flex-col border-t border-slate-300">
              {[
                { title: "Corporate Finance", link: "/services" },
                { title: "Structured Credit", link: "/services" },
                { title: "Working Capital", link: "/services" },
                { title: "Trade Finance", link: "/services" },
                { title: "Real Estate Funding", link: "/services" },
                { title: "Project & Infrastructure", link: "/services" },
                { title: "Investment Banking", link: "/services" },
                { title: "Capital Raising", link: "/services" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link 
                    to={item.link}
                    className="group border-b border-slate-300 py-6 lg:py-10 flex items-center justify-between hover:px-6 transition-all duration-500"
                  >
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 group-hover:text-[#C5A059] transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-slate-300 group-hover:text-[#C5A059] transition-colors">
                      <ArrowDownRight className="w-6 h-6 sm:w-10 sm:h-10" strokeWidth={1} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — COMPLEXITY / EXPERTISE */}
      <section className="py-24 sm:py-32 bg-[#0B1120] px-4 sm:px-6 lg:px-12 text-white border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3">
            <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">04 // Complexity</p>
          </div>
          
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-serif text-white mb-16 max-w-3xl leading-tight">
              We specialise in high-value, challenging funding requirements.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              <div>
                <h3 className="text-[#C5A059] tracking-widest text-sm uppercase mb-8 font-medium">The Narrative</h3>
                <div className="space-y-6 border-l border-slate-800 pl-6">
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-slate-700"></div>
                    <p className="text-xl font-light text-slate-300">Complexity</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-slate-600"></div>
                    <p className="text-xl font-light text-slate-300">Analysis</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-[#C5A059]"></div>
                    <p className="text-xl font-light text-white">Structuring</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-slate-600"></div>
                    <p className="text-xl font-light text-slate-300">Coordination</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-slate-700"></div>
                    <p className="text-xl font-light text-slate-300">Solution</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#C5A059] tracking-widest text-sm uppercase mb-8 font-medium">Our Focus Areas</h3>
                <ul className="space-y-4">
                  {[
                    "Credit-challenged situations",
                    "SMA, NPA, and stressed assets",
                    "High existing debt exposure",
                    "Startups and early-stage companies",
                    "Complex corporate finance",
                    "Specialised asset funding"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-300 font-light">
                      <span className="text-slate-600 mr-4">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/challenging-cases" className="text-sm uppercase tracking-widest font-medium text-white pb-1 border-b border-white hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                    View Challenging Cases
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CAPITAL MARKETS */}
      <section className="py-24 sm:py-32 bg-[#FDFBF7] px-4 sm:px-6 lg:px-12 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3">
            <p className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">05 // Markets</p>
          </div>
          
          <div className="lg:col-span-9">
            <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 mb-6">Capital Markets</h2>
            <p className="text-xl font-light text-slate-600 mb-16 max-w-2xl">
              Strategic advisory, structuring, and transaction coordination support for companies seeking to raise capital through public and private equity market instruments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { title: "Planning", desc: "Readiness assessment & strategy" },
                { title: "Preparation", desc: "Documentation & due diligence" },
                { title: "Coordination", desc: "Regulatory submissions" },
                { title: "Offering Support", desc: "Valuation & positioning" },
                { title: "Post-IPO", desc: "Investor relations" }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-t-2 border-slate-900 pt-6"
                >
                  <p className="text-[#C5A059] font-serif text-2xl italic mb-4">0{idx + 1}</p>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-2">{step.title}</h4>
                  <p className="text-slate-500 font-light text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16">
              <Link to="/capital-markets" className="text-sm uppercase tracking-widest font-medium text-slate-900 pb-1 border-b border-slate-900 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                Explore Capital Markets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — ADVISORY APPROACH */}
      <section className="py-24 sm:py-32 bg-[#0B1120] px-4 sm:px-6 lg:px-12 text-white border-b border-slate-800">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3">
            <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">06 // Approach</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-serif mb-16">Our Process</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { id: "01", title: "Understanding Requirements" },
                { id: "02", title: "Financial Evaluation" },
                { id: "03", title: "Solution Structuring" },
                { id: "04", title: "Lender & Investor Mapping" },
                { id: "05", title: "Transaction Coordination" },
                { id: "06", title: "Documentation Support" },
                { id: "07", title: "Funding Coordination" },
                { id: "08", title: "Ongoing Strategic Support" },
              ].map((step, idx) => (
                <div key={idx} className="flex items-start group">
                  <span className="text-[#C5A059] font-serif text-2xl mr-6 opacity-70 group-hover:opacity-100 transition-opacity">{step.id}</span>
                  <h3 className="text-xl font-light text-slate-300 pt-1 group-hover:text-white transition-colors">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — LEADERSHIP */}
      <section className="py-24 sm:py-32 bg-[#FDFBF7] px-4 sm:px-6 lg:px-12 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-3">
            <p className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">07 // Leadership</p>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              
              <div className="flex flex-col">
                <div className="w-full aspect-[3/4] bg-slate-100 mb-8 overflow-hidden relative group border border-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-slate-300 font-serif text-8xl italic">RM</span>
                  </div>
                </div>
                <h3 className="text-3xl font-serif text-slate-900 mb-2">Rahul Mantri</h3>
                <p className="text-[#C5A059] uppercase tracking-widest text-xs font-bold mb-6">Director</p>
                <p className="text-slate-600 font-light leading-relaxed">
                  Seasoned financial markets and corporate finance professional with over 30 years of experience in capital markets, structured finance, corporate funding, and investment banking advisory.
                </p>
              </div>

              <div className="flex flex-col sm:mt-24">
                <div className="w-full aspect-[3/4] bg-slate-100 mb-8 overflow-hidden relative group border border-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-slate-300 font-serif text-8xl italic">DK</span>
                  </div>
                </div>
                <h3 className="text-3xl font-serif text-slate-900 mb-2">Daksh Khandelwal</h3>
                <p className="text-[#C5A059] uppercase tracking-widest text-xs font-bold mb-6">Director</p>
                <p className="text-slate-600 font-light leading-relaxed">
                  Business development and strategic growth professional representing the next generation of leadership, focusing on delivering value-driven financial advisory services.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 09 — CONTACT CTA */}
      <section className="py-32 sm:py-48 bg-[#0B1120] px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl sm:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
            Initiate a <span className="italic text-[#C5A059]">Dialogue.</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl font-light mb-16 max-w-xl mx-auto">
            Connect with our advisory team to evaluate suitable financing options and navigate complex financial landscapes.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center px-12 py-5 bg-transparent border border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#0B1120] transition-colors duration-300">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
