export type ResourceCategory = 'All' | 'Blogs' | 'Case Studies' | 'Industry Insights' | 'News & Updates' | 'Newsletter';

interface CategoryFilterProps {
  categories: ResourceCategory[];
  activeCategory: ResourceCategory;
  onSelectCategory: (cat: ResourceCategory) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 mb-8">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-sm ${
              isActive 
                ? 'bg-[#0B1120] text-[#C5A059] shadow-sm' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
