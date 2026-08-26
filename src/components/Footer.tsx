import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-12 lg:col-span-4 pr-0 lg:pr-12">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-xl tracking-[0.15em] uppercase font-bold text-white">Capital Corridor</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 font-light max-w-sm">
              Three Decades of Trusted Financial Expertise. <br className="hidden lg:block"/>
              Structured Finance &bull; Investment Advisory &bull; Capital Market Solutions.
            </p>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm font-light text-slate-400 hover:text-[#C5A059] transition-colors">About Us</Link></li>
              <li><Link to="/why-us" className="text-sm font-light text-slate-400 hover:text-[#C5A059] transition-colors">Why Choose Us</Link></li>
              <li><Link to="/our-team" className="text-sm font-light text-slate-400 hover:text-[#C5A059] transition-colors">Our Team</Link></li>
              <li><Link to="/our-process" className="text-sm font-light text-slate-400 hover:text-[#C5A059] transition-colors">Our Process</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Expertise</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm font-light text-slate-400 hover:text-[#C5A059] transition-colors">Funding & Financial Solutions</Link></li>
              <li><Link to="/capital-markets" className="text-sm font-light text-slate-400 hover:text-[#C5A059] transition-colors">Capital Market Services</Link></li>
              <li><Link to="/challenging-cases" className="text-sm font-light text-slate-400 hover:text-[#C5A059] transition-colors">Challenging Borrower Files</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4 font-light text-sm text-slate-400">
              <li>+91 99822 22210</li>
              <li>+91 80031 57877</li>
              <li>contact@capitalcorridor.in</li>
              <li className="pt-2 leading-relaxed">
                S.G. Tower, First Floor, <br/>
                Chaurasiyawas Road, Vaishali Nagar,<br/>
                Ajmer, Rajasthan – 305001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-xs text-slate-500 font-light text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Capital Corridor. All rights reserved.
            </p>
            <span className="hidden md:inline text-slate-700">|</span>
            <p>
              Developed By <a href="https://mazrik.in" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-400 hover:text-[#C5A059] transition-colors focus:outline-none focus:text-[#C5A059]">MAZRIK</a>
            </p>
          </div>
          <div className="flex space-x-8 text-xs text-slate-500 font-light">
            <Link to="/legal-disclaimer" className="hover:text-white transition-colors focus:outline-none focus:text-white">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
