import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ResourceItem {
  id: string;
  title: string;
  excerpt: string;
  category: 'Blogs' | 'Case Studies' | 'Industry Insights' | 'News & Updates';
  date: string;
  readTime: string;
  slug: string;
}

interface ResourceCardProps {
  item: ResourceItem;
}

export function ResourceCard({ item }: ResourceCardProps) {
  return (
    <article className="p-8 bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#C5A059] transition-all duration-200">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#0B1120] text-[#C5A059] rounded-sm flex items-center gap-1">
            <Tag className="h-3 w-3" />
            {item.category}
          </span>
          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-light">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-[#C5A059]" />{item.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-[#C5A059]" />{item.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-serif text-slate-900 mb-3 hover:text-[#C5A059] transition-colors leading-snug">
          {item.title}
        </h3>
        <p className="text-slate-600 font-light text-xs leading-relaxed mb-6">
          {item.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link 
          to={`/resources`}
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B1120] hover:text-[#C5A059] transition-colors"
        >
          Read Publication <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
