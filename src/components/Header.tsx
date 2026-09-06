import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Industry Solutions', path: '/industry-solutions' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Financial Tools', path: '/calculators' },
  { name: 'Resources', path: '/resources' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#060D1A]/95 backdrop-blur-md border-b border-[#1A2942] py-3 shadow-2xl shadow-black/40'
          : 'bg-gradient-to-b from-[#060D1A]/95 via-[#060D1A]/60 to-transparent py-4 border-b border-white/5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-2 xl:gap-4">
          
          {/* Brand Emblem / Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="bg-white/95 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-sm border border-[#C5A059]/40 shadow-sm transition-all duration-300 group-hover:border-[#C5A059] group-hover:scale-105">
              <img 
                src="/images/capital-corridor-logo.png" 
                alt="Capital Corridor — Financial Advisory & Structured Finance" 
                className="h-6 sm:h-7.5 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif tracking-[0.2em] text-white text-xs uppercase font-bold group-hover:text-[#C5A059] transition-colors whitespace-nowrap">
                CAPITAL CORRIDOR
              </span>
              <span className="text-[8px] uppercase tracking-[0.22em] text-[#C5A059] font-medium whitespace-nowrap">
                Structured Finance & Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 shrink-0" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                (link.path === '/services' && location.pathname.startsWith('/services'));
              
              if (link.path === '/services') {
                return (
                  <div 
                    key={link.path} 
                    className="relative shrink-0"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'px-2 xl:px-2.5 2xl:px-3 py-2 text-[10.5px] xl:text-[11px] font-medium tracking-[0.08em] xl:tracking-[0.12em] uppercase transition-colors inline-flex items-center gap-0.5 xl:gap-1 whitespace-nowrap shrink-0',
                        isActive ? 'text-[#C5A059]' : 'text-slate-300 hover:text-white'
                      )}
                    >
                      <span className="whitespace-nowrap">{link.name}</span>
                      <ChevronDown className={cn(
                        "h-3 w-3 opacity-60 transition-transform duration-200 shrink-0",
                        servicesDropdown && "rotate-180 text-[#C5A059]"
                      )} />
                    </Link>

                    {/* Architectural Megamenu Dropdown */}
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 w-80 bg-[#070F1E] border border-[#1E3356] shadow-2xl rounded-sm p-3 z-50"
                        >
                          <div className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold px-3 py-1.5 border-b border-[#1E3356]/60 mb-1">
                            Core Advisory Pillars
                          </div>
                          
                          <Link 
                            to="/services#funding-loans" 
                            className="flex items-start gap-2.5 px-3 py-2 rounded-sm hover:bg-[#12203D] transition-colors group"
                          >
                            <span className="text-[10px] font-mono text-[#C5A059] pt-0.5">01</span>
                            <div>
                              <div className="text-[11px] font-semibold text-white group-hover:text-[#C5A059] transition-colors">Funding & Loan Services</div>
                              <div className="text-[9px] text-slate-400">Corporate debt, trade finance, real estate & CapEx</div>
                            </div>
                          </Link>

                          <Link 
                            to="/services#financial-advisory" 
                            className="flex items-start gap-2.5 px-3 py-2 rounded-sm hover:bg-[#12203D] transition-colors group"
                          >
                            <span className="text-[10px] font-mono text-[#C5A059] pt-0.5">02</span>
                            <div>
                              <div className="text-[11px] font-semibold text-white group-hover:text-[#C5A059] transition-colors">Financial Advisory & ECM</div>
                              <div className="text-[9px] text-slate-400">IPO 5 P's framework, QIP, acquisitions & listings</div>
                            </div>
                          </Link>

                          <Link 
                            to="/services#legal-advisory" 
                            className="flex items-start gap-2.5 px-3 py-2 rounded-sm hover:bg-[#12203D] transition-colors group"
                          >
                            <span className="text-[10px] font-mono text-[#C5A059] pt-0.5">03</span>
                            <div>
                              <div className="text-[11px] font-semibold text-white group-hover:text-[#C5A059] transition-colors">Legal & Insolvency Advisory</div>
                              <div className="text-[9px] text-slate-400">IBC/CIRP, SARFAESI, NCLT/DRT & turnaround</div>
                            </div>
                          </Link>

                          <Link 
                            to="/services#documentation-support" 
                            className="flex items-start gap-2.5 px-3 py-2 rounded-sm hover:bg-[#12203D] transition-colors group"
                          >
                            <span className="text-[10px] font-mono text-[#C5A059] pt-0.5">04</span>
                            <div>
                              <div className="text-[11px] font-semibold text-white group-hover:text-[#C5A059] transition-colors">Documentation Services</div>
                              <div className="text-[9px] text-slate-400">DPR, CMA data, TEV reports & LIE audits</div>
                            </div>
                          </Link>

                          <Link 
                            to="/services#other-services" 
                            className="flex items-start gap-2.5 px-3 py-2 rounded-sm hover:bg-[#12203D] transition-colors group"
                          >
                            <span className="text-[10px] font-mono text-[#C5A059] pt-0.5">05</span>
                            <div>
                              <div className="text-[11px] font-semibold text-white group-hover:text-[#C5A059] transition-colors">Extended Network Services</div>
                              <div className="text-[9px] text-slate-400">Subsidies, real estate, project development</div>
                            </div>
                          </Link>

                          <div className="mt-2 pt-2 border-t border-[#1E3356]/60 px-3">
                            <Link 
                              to="/services" 
                              className="text-[10px] uppercase font-bold text-[#C5A059] tracking-wider hover:underline flex items-center justify-between"
                            >
                              <span>Explore Full Directory</span>
                              <span>&rarr;</span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-2 xl:px-2.5 2xl:px-3 py-2 text-[10.5px] xl:text-[11px] font-medium tracking-[0.08em] xl:tracking-[0.12em] uppercase transition-colors relative whitespace-nowrap shrink-0',
                    isActive ? 'text-[#C5A059]' : 'text-slate-300 hover:text-white'
                  )}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#C5A059]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-3 xl:px-4 py-1.5 xl:py-2 text-[10.5px] xl:text-[11px] font-bold uppercase tracking-[0.12em] xl:tracking-[0.15em] text-[#C5A059] border border-[#C5A059]/70 hover:bg-[#C5A059] hover:text-[#060D1A] transition-all duration-200 rounded-sm shadow-sm whitespace-nowrap shrink-0"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#C5A059] border border-[#C5A059]/60 rounded-sm whitespace-nowrap"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#070F1E] border-b border-[#1E3356] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3 max-h-[85vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block py-2 text-xs font-semibold uppercase tracking-[0.18em] border-b border-[#1E3356]/40 whitespace-nowrap',
                    location.pathname === link.path ? 'text-[#C5A059]' : 'text-slate-300 hover:text-[#C5A059]'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-2 text-xs text-slate-400">
                <a href="tel:+919826033481" className="flex items-center gap-2 text-[#C5A059] py-1 whitespace-nowrap">
                  <Phone className="h-3.5 w-3.5" /> +91 98260 33481 (Rahul Mantri)
                </a>
                <a href="tel:+918003157877" className="flex items-center gap-2 text-[#C5A059] py-1 whitespace-nowrap">
                  <Phone className="h-3.5 w-3.5" /> +91 80031 57877 (Daksh Khandelwal)
                </a>
                <a href="mailto:contact@capitalcorridor.in" className="flex items-center gap-2 text-slate-300 py-1 whitespace-nowrap">
                  <Mail className="h-3.5 w-3.5 text-[#C5A059]" /> contact@capitalcorridor.in
                </a>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="block text-center w-full py-3 text-[11px] font-bold uppercase tracking-[0.2em] bg-[#C5A059] text-[#070F1E] rounded-sm whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
