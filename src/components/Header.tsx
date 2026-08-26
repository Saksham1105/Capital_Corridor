import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Services', path: '/services' },
  { name: 'Capital Markets', path: '/capital-markets' },
  { name: 'Team', path: '/our-team' },
  { name: 'Process', path: '/our-process' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-[#0B1120]/95 backdrop-blur-md border-slate-800 py-4 shadow-sm" : "bg-[#0B1120] border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col group">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.15em] uppercase font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Capital Corridor
              </span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs tracking-widest uppercase font-medium transition-colors hover:text-[#C5A059]",
                  location.pathname === link.path ? "text-[#C5A059]" : "text-slate-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-[#C5A059] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#0B1120] border-b border-slate-800 lg:hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-sm tracking-widest uppercase font-medium transition-colors",
                    location.pathname === link.path ? "text-[#C5A059]" : "text-slate-300 hover:text-[#C5A059]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
