import { BookOpen, Bell } from 'lucide-react';
import { ResourceCategory } from './CategoryFilter';

interface EmptyResourceStateProps {
  category: ResourceCategory;
}

export function EmptyResourceState({ category }: EmptyResourceStateProps) {
  return (
    <div className="p-12 text-center bg-white border border-slate-200 shadow-sm max-w-2xl mx-auto my-8">
      <BookOpen className="h-12 w-12 text-[#C5A059] mx-auto mb-4 stroke-1" />
      <h3 className="text-xl font-serif text-slate-900 mb-2">
        Publications for &ldquo;{category}&rdquo; Coming Soon
      </h3>
      <p className="text-slate-600 font-light text-xs leading-relaxed mb-6 max-w-md mx-auto">
        Our partners and financial analysts are currently preparing deep-dive research papers, industry case studies, and corporate finance briefs for this section.
      </p>
      <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1120] uppercase tracking-wider bg-amber-50 px-4 py-2 border border-amber-200">
        <Bell className="h-4 w-4 text-[#C5A059]" />
        <span>Subscribe Below To Receive New Publications First</span>
      </div>
    </div>
  );
}
