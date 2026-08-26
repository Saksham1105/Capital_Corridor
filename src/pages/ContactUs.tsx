import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export function ContactUs() {
  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Contact Us" 
        description="Get in touch with our team to discuss your strategic capital requirements."
        canonicalUrl="/contact"
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
            <p className="text-[#C5A059] font-medium tracking-[0.2em] uppercase mb-6 text-xs">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-tight tracking-tight">
              Initiate <span className="italic font-light text-slate-500">consultation.</span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              We welcome the opportunity to understand your financial requirements and discuss potential advisory and funding solutions. Connect with our team through the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Phone */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="w-12 h-12 bg-[#0B1120] text-white flex items-center justify-center mb-8">
                <Phone className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-6">Direct Lines</h3>
              <div className="space-y-4">
                <a href="tel:+919982222210" className="block text-slate-600 font-light hover:text-[#C5A059] transition-colors">
                  +91 99822 22210 <br/><span className="text-xs text-slate-400 uppercase tracking-widest font-medium mt-1 inline-block">Rahul Mantri</span>
                </a>
                <a href="tel:+918003157877" className="block text-slate-600 font-light hover:text-[#C5A059] transition-colors">
                  +91 80031 57877 <br/><span className="text-xs text-slate-400 uppercase tracking-widest font-medium mt-1 inline-block">Daksh Khandelwal</span>
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="w-12 h-12 bg-[#0B1120] text-white flex items-center justify-center mb-8">
                <MessageCircle className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-6">WhatsApp</h3>
              <div className="space-y-4">
                <a href="https://wa.me/919982222210" target="_blank" rel="noopener noreferrer" className="block text-slate-600 font-light hover:text-[#C5A059] transition-colors">
                  +91 99822 22210 <br/><span className="text-xs text-slate-400 uppercase tracking-widest font-medium mt-1 inline-block">Message Rahul</span>
                </a>
                <a href="https://wa.me/918003157877" target="_blank" rel="noopener noreferrer" className="block text-slate-600 font-light hover:text-[#C5A059] transition-colors">
                  +91 80031 57877 <br/><span className="text-xs text-slate-400 uppercase tracking-widest font-medium mt-1 inline-block">Message Daksh</span>
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="w-12 h-12 bg-[#0B1120] text-white flex items-center justify-center mb-8">
                <Mail className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-6">Email</h3>
              <div className="space-y-4">
                <a href="mailto:contact@capitalcorridor.in" className="block text-slate-600 font-light hover:text-[#C5A059] transition-colors">
                  contact@capitalcorridor.in <br/><span className="text-xs text-slate-400 uppercase tracking-widest font-medium mt-1 inline-block">General Enquiry</span>
                </a>
                <a href="mailto:rahull@capitalcorridor.in" className="block text-slate-600 font-light hover:text-[#C5A059] transition-colors">
                  rahull@capitalcorridor.in <br/><span className="text-xs text-slate-400 uppercase tracking-widest font-medium mt-1 inline-block">Rahul Mantri</span>
                </a>
                <a href="mailto:daksh@capitalcorridor.in" className="block text-slate-600 font-light hover:text-[#C5A059] transition-colors">
                  daksh@capitalcorridor.in <br/><span className="text-xs text-slate-400 uppercase tracking-widest font-medium mt-1 inline-block">Daksh Khandelwal</span>
                </a>
              </div>
            </motion.div>

            {/* Offices */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="w-12 h-12 bg-[#0B1120] text-white flex items-center justify-center mb-8">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-6">Our Offices</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs text-[#C5A059] uppercase tracking-widest font-bold mb-2">Ajmer Office 1</h4>
                  <a href="https://maps.google.com/?q=S.G.+Tower,+First+Floor,+Chaurasiyawas+Road,+Near+Jhulelal+Mandir,+Vaishali+Nagar,+Ajmer,+Rajasthan+–+305001" target="_blank" rel="noopener noreferrer" className="block text-slate-600 font-light leading-relaxed hover:text-[#C5A059] transition-colors">
                    S.G. Tower, First Floor, <br/>
                    Chaurasiyawas Road, Near Jhulelal Mandir, <br/>
                    Vaishali Nagar, Ajmer, <br/>
                    Rajasthan – 305001
                  </a>
                </div>
                <div>
                  <h4 className="text-xs text-[#C5A059] uppercase tracking-widest font-bold mb-2">Ajmer Office 2</h4>
                  <a href="https://maps.google.com/?q=Plot+No.+401/10,+Near+Church,+Opp.+T.B.+Hospital,+Brahmapuri,+Suchna+Kendra+Circle,+Ajmer,+Rajasthan" target="_blank" rel="noopener noreferrer" className="block text-slate-600 font-light leading-relaxed hover:text-[#C5A059] transition-colors">
                    Plot No. 401/10, Near Church, <br/>
                    Opp. T.B. Hospital, Brahmapuri, <br/>
                    Suchna Kendra Circle, <br/>
                    Ajmer, Rajasthan
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 bg-[#0B1120] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-8">Office Hours</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-12 space-y-6 sm:space-y-0 text-white font-light tracking-wide">
            <div>
              <span className="text-slate-400 uppercase tracking-widest text-xs block mb-2">Monday – Friday</span>
              <span className="text-xl font-serif">9:00 AM – 6:00 PM</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-800"></div>
            <div>
              <span className="text-slate-400 uppercase tracking-widest text-xs block mb-2">Saturday</span>
              <span className="text-xl font-serif">10:00 AM – 4:00 PM</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-800"></div>
            <div>
              <span className="text-slate-400 uppercase tracking-widest text-xs block mb-2">Sunday</span>
              <span className="text-xl font-serif text-slate-500">Closed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
