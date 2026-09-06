import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Shield, ExternalLink, ArrowRight } from 'lucide-react';

export function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Corporate Lending & Structured Credit',
    amount: '5 – 25 Cr',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const subject = encodeURIComponent(`Executive Consultation Inquiry: ${formData.company} - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company / Entity: ${formData.company}\n` +
      `Phone / WhatsApp: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Advisory Practice: ${formData.service}\n` +
      `Estimated Transaction Size: ${formData.amount}\n\n` +
      `Requirement Brief:\n${formData.message}`
    );
    window.location.href = `mailto:contact@capitalcorridor.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col w-full bg-[#FBF9F5]">
      <SEO 
        title="Direct Leadership Consultation — Capital Corridor | Ajmer, Rajasthan" 
        description="Schedule a confidential advisory consultation with Partners Rahul Mantri and Daksh Khandelwal for corporate financing, debt syndication, or capital markets advisory."
        canonicalUrl="/contact"
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-[#050C18] text-white border-b border-[#14233D] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091528] border border-[#C5A059]/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C5A059]">
              EXECUTIVE ENGAGEMENT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
            Initiate a Confidential <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EAD4] via-[#C5A059] to-[#DFBF7A] italic">
              Advisory Dialogue
            </span>
          </h1>

          <p className="text-base sm:text-lg font-light text-slate-300 max-w-3xl leading-relaxed">
            Reach out directly to the firm's Partners for a preliminary assessment of your corporate financing, capital markets, or debt restructuring mandates.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Leadership & Locations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Contact Us
              </h2>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <div className="p-6 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-slate-900">Rahul Mantri</h3>
                </div>
                <p className="text-xs text-slate-500 font-light">Capital Markets &amp; Corporate Finance</p>
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <p className="flex items-center">
                    <Phone className="h-3.5 w-3.5 text-[#9A7830] mr-2 shrink-0" />
                    <a href="tel:+919982222210" className="hover:text-[#9A7830] font-medium">+91 99822 22210</a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-3.5 w-3.5 text-[#9A7830] mr-2 shrink-0" />
                    <a href="mailto:rahull@capitalcorridor.in" className="hover:text-[#9A7830]">rahull@capitalcorridor.in</a>
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#E0D9CD] rounded-sm shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-slate-900">Daksh Khandelwal</h3>
                </div>
                <p className="text-xs text-slate-500 font-light">Strategic Growth &amp; Debt Syndication</p>
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <p className="flex items-center">
                    <Phone className="h-3.5 w-3.5 text-[#9A7830] mr-2 shrink-0" />
                    <a href="tel:+918003157877" className="hover:text-[#9A7830] font-medium">+91 80031 57877</a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-3.5 w-3.5 text-[#9A7830] mr-2 shrink-0" />
                    <a href="mailto:daksh@capitalcorridor.in" className="hover:text-[#9A7830]">daksh@capitalcorridor.in</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Registered Offices */}
            <div className="p-6 bg-[#070F1E] text-white rounded-sm space-y-4 border border-[#162744]">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Office Locations (Ajmer)
              </div>
              
              <div className="space-y-3 text-xs text-slate-300 font-light">
                <div className="border-b border-[#142540] pb-2">
                  <strong className="text-white block font-medium">Office 1:</strong>
                  Plot No. 401/10, Near Church, Brahampuri, Suchna Kendra Circle, Ajmer, Rajasthan – 305001, India.
                </div>
                <div>
                  <strong className="text-white block font-medium">Office 2:</strong>
                  A-1-A, ACR Scheme, Near Petrol Pump, Vaishali Nagar, Ajmer, Rajasthan – 305001, India.
                </div>
              </div>

              <div className="pt-2 border-t border-[#142540] flex items-center gap-2 text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5 text-[#C5A059]" />
                <span>Mon–Fri: 9:00 AM – 6:00 PM | Sat: 10:00 AM – 4:00 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#E0D9CD] rounded-sm shadow-sm">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold text-[#9A7830] uppercase tracking-widest block mb-1">
                CONFIDENTIAL MANDATE INQUIRY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Request a Consultation
              </h2>
              <p className="text-xs text-slate-600 font-light mt-1">
                Provide preliminary details below to generate a pre-formatted draft to <span className="text-slate-900 font-medium">contact@capitalcorridor.in</span>.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 text-center text-emerald-900 rounded-sm space-y-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-serif font-bold">Email Draft Prepared</h3>
                <p className="text-xs font-light leading-relaxed max-w-md mx-auto text-emerald-800">
                  Your mandate details have been compiled. Please confirm and dispatch from your email client. Capital Corridor ensures strict non-disclosure across all communications.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#070F1E] text-white text-xs uppercase font-bold tracking-widest rounded-sm"
                >
                  Modify Form Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm text-xs focus:outline-none focus:border-[#C5A059]"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Company / Organization *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm text-xs focus:outline-none focus:border-[#C5A059]"
                      placeholder="e.g. Apex Industries Pvt Ltd"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Mobile / WhatsApp *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm text-xs focus:outline-none focus:border-[#C5A059]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm text-xs focus:outline-none focus:border-[#C5A059]"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Advisory Practice
                    </label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm text-xs focus:outline-none focus:border-[#C5A059]"
                    >
                      <option>Corporate Lending & Structured Credit</option>
                      <option>Trade Finance & Guarantees (LC/SBLC)</option>
                      <option>Working Capital & Supply Chain</option>
                      <option>Project & Infrastructure Finance</option>
                      <option>Real Estate & Construction Debt</option>
                      <option>Stressed Asset Resolution & OTS</option>
                      <option>Equity Capital Markets & IPO Advisory</option>
                      <option>Listed Company Acquisition</option>
                      <option>Legal & Insolvency Advisory (IBC/SARFAESI)</option>
                      <option>DPR & CMA Documentation Support</option>
                      <option>Other Network Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      Estimated Transaction Size
                    </label>
                    <select 
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm text-xs focus:outline-none focus:border-[#C5A059]"
                    >
                      <option>&lt; ₹1 Cr</option>
                      <option>₹1 – 5 Cr</option>
                      <option>₹5 – 25 Cr</option>
                      <option>₹25 – 100 Cr</option>
                      <option>₹100 Cr+</option>
                      <option>Advisory / Non-Funding Mandate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Detailed Requirements / Context *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD5C7] rounded-sm text-xs focus:outline-none focus:border-[#C5A059]"
                    placeholder="Briefly describe your business fundamentals, current debt structure, and specific capital objectives..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#C5A059] text-[#050C18] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D4B473] transition-colors rounded-sm shadow-md flex items-center justify-center gap-2"
                >
                  <span>Dispatch Consultation Request</span>
                  <ExternalLink className="h-4 w-4" />
                </button>

                <p className="text-[11px] text-slate-500 font-light flex items-center justify-center gap-1.5 pt-1">
                  <Shield className="h-3.5 w-3.5 text-slate-400" />
                  <span>Direct confidential transmission. No browser storage or third-party sharing.</span>
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
