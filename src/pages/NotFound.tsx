import { Link } from 'react-router-dom';
import { ArrowLeft, Landmark } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found — Capital Corridor"
        description="The requested page could not be found. Return to Capital Corridor home or explore our corporate financial advisory practices."
      />
      <main className="min-h-[75vh] flex items-center justify-center bg-[#050B14] text-white px-4 py-32">
        <div className="max-w-md w-full text-center">
          <div className="p-4 bg-[#070E1C] border border-[#1E3356] rounded-sm w-fit mx-auto mb-6 text-[#C5A059]">
            <Landmark className="h-10 w-10" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
            404 ERROR
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">
            The page or practice resource you are looking for does not exist or has been relocated.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] text-[#070E1C] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#D4B473] transition-colors inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Home</span>
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3.5 border border-slate-700 hover:border-[#C5A059] text-slate-300 hover:text-white text-xs font-medium uppercase tracking-[0.18em] transition-colors bg-[#070E1C]"
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
