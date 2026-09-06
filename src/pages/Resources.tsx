import { useState } from 'react';
import { SEO } from '../components/SEO';
import { ResourceCard, ResourceItem } from '../components/resources/ResourceCard';
import { CategoryFilter, ResourceCategory } from '../components/resources/CategoryFilter';
import { NewsletterSignup } from '../components/resources/NewsletterSignup';
import { EmptyResourceState } from '../components/resources/EmptyResourceState';
import { BookOpen } from 'lucide-react';

const categoriesList: ResourceCategory[] = ['All', 'Blogs', 'Case Studies', 'Industry Insights', 'News & Updates', 'Newsletter'];

export function Resources() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('All');

  // Architecture with initial structured publications based strictly on firm advisory focus
  const resources: ResourceItem[] = [
    {
      id: "res-1",
      title: "Understanding the 5 P's IPO Readiness Framework for Indian Enterprises",
      excerpt: "A comprehensive guide on Planning, Preparation, Process Coordination, Public Offering Support, and Post-IPO Advisory for SME & Mainboard listings.",
      category: "Industry Insights",
      date: "September 2026",
      readTime: "6 min read",
      slug: "ipo-5p-framework"
    },
    {
      id: "res-2",
      title: "Stressed Asset Resolution: Navigating OTS, ARC Takeovers & NCLT Interim Finance",
      excerpt: "An overview of debt restructuring, One-Time Settlement (OTS) structuring, and capital options for accounts under SMA-1, SMA-2, or NPA classification.",
      category: "Blogs",
      date: "August 2026",
      readTime: "8 min read",
      slug: "stressed-asset-resolution-guide"
    },
    {
      id: "res-3",
      title: "Optimising Corporate Cash Flow: Trade Finance & Receivables Discounting",
      excerpt: "How Letters of Credit, SBLC, Buyer's Credit, and Invoice Discounting release operational liquidity for high-growth trading and manufacturing firms.",
      category: "Industry Insights",
      date: "August 2026",
      readTime: "5 min read",
      slug: "trade-finance-working-capital"
    }
  ];

  const filteredResources = activeCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="flex flex-col w-full bg-[#FDFBF7]">
      <SEO 
        title="Resources & Insights — Financial Advisory & Capital Markets | Capital Corridor" 
        description="Explore research papers, strategic briefs, market insights, and industry intelligence on structured finance, debt syndication, and capital markets."
        canonicalUrl="/resources"
      />

      {/* Header */}
      <section className="pt-36 pb-16 bg-[#0B1120] text-white border-b border-slate-800 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <BookOpen className="h-4 w-4" />
            <span>KNOWLEDGE HUB</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight mb-6">
            Resources &amp; Industry Insights
          </h1>
          <p className="text-lg sm:text-xl font-light text-slate-300 max-w-3xl leading-relaxed">
            Market briefings, corporate finance research, regulatory analysis, and strategic perspectives curated by Capital Corridor advisory partners.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter 
            categories={categoriesList} 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredResources.map((item) => (
                <ResourceCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <EmptyResourceState category={activeCategory} />
          )}

          {/* Newsletter Card */}
          <div className="mt-12">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
