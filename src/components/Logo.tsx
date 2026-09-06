interface LogoProps {
  variant?: 'light' | 'dark' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  useCard?: boolean;
}

export function LogoEmblem({ className = "h-8 w-auto", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const wingColor = variant === "dark" ? "#FFFFFF" : "#0B1120";
  const pillarColor = "#C5A059";

  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left Outer Perspective Wing */}
      <polygon points="35,20 85,50 85,150 35,180" fill={wingColor} />
      {/* Right Outer Perspective Wing */}
      <polygon points="115,50 165,20 165,180 115,150" fill={wingColor} />
      {/* Central Gold Pillar Corridor Line */}
      <rect x="95" y="80" width="10" height="50" fill={pillarColor} />
      {/* Central Gold Pillar Base */}
      <polygon points="91,130 109,130 120,150 80,150" fill={pillarColor} />
    </svg>
  );
}

export function Logo({ variant = 'dark', size = 'hero', showSubtitle = true, className = '', useCard = false }: LogoProps) {
  if (variant === 'image') {
    const imageSizes = {
      sm: 'h-10 sm:h-12',
      md: 'h-14 sm:h-16',
      lg: 'h-20 sm:h-24',
      hero: 'h-32 sm:h-44 lg:h-52',
      xl: 'h-40 sm:h-56 lg:h-64'
    };

    return (
      <div className={`inline-flex flex-col items-center justify-center ${className}`}>
        {useCard ? (
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#C5A059]/50 transition-transform duration-300 hover:scale-[1.02]">
            <img 
              src="/images/logo_final.png" 
              alt="Capital Corridor — Financial Advisory & Structured Credit" 
              className={`${imageSizes[size]} w-auto object-contain max-w-full drop-shadow-sm`}
            />
          </div>
        ) : (
          <img 
            src="/images/logo_final_transparent.png" 
            alt="Capital Corridor — Financial Advisory & Structured Credit" 
            className={`${imageSizes[size]} w-auto object-contain max-w-full`}
          />
        )}
      </div>
    );
  }

  const isDark = variant === 'dark';

  const emblemSizes = {
    sm: 'h-7 sm:h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-16 sm:h-20',
    hero: 'h-28 sm:h-36 lg:h-44',
    xl: 'h-36 sm:h-48 lg:h-56'
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg tracking-[0.18em]',
    md: 'text-lg sm:text-xl tracking-[0.2em]',
    lg: 'text-2xl sm:text-3xl lg:text-[2.25rem] tracking-[0.22em]',
    hero: 'text-3xl sm:text-4xl lg:text-[2.75rem] tracking-[0.24em]',
    xl: 'text-4xl sm:text-5xl lg:text-6xl tracking-[0.26em]'
  };

  const subtitleSizes = {
    sm: 'text-[7px] tracking-[0.2em]',
    md: 'text-[9px] tracking-[0.22em]',
    lg: 'text-[10px] tracking-[0.25em]',
    hero: 'text-[10px] sm:text-xs tracking-[0.3em]',
    xl: 'text-xs sm:text-sm tracking-[0.32em]'
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Emblem */}
      <LogoEmblem variant={variant} className={`${emblemSizes[size]} w-auto mb-4 transition-transform duration-300 hover:scale-105`} />

      {/* Wordmark */}
      <div className="flex flex-col items-center">
        <span className={`font-serif font-bold uppercase leading-none ${titleSizes[size]} ${isDark ? 'text-white' : 'text-[#0B1120]'}`}>
          CAPITAL
        </span>
        
        <div className="flex items-center justify-center gap-3 w-full my-2">
          <span className={`h-px w-8 sm:w-14 ${isDark ? 'bg-[#C5A059]' : 'bg-[#C5A059]'}`} />
          <span className={`font-medium uppercase tracking-[0.32em] text-[#C5A059] ${size === 'hero' || size === 'xl' ? 'text-xl sm:text-2xl font-normal' : 'text-xs sm:text-sm'}`}>
            CORRIDOR
          </span>
          <span className={`h-px w-8 sm:w-14 ${isDark ? 'bg-[#C5A059]' : 'bg-[#C5A059]'}`} />
        </div>

        {showSubtitle && (
          <span className={`font-semibold uppercase ${subtitleSizes[size]} ${isDark ? 'text-[#C5A059]/90' : 'text-slate-700'}`}>
            FINANCIAL ADVISORY &amp; STRUCTURED CREDIT
          </span>
        )}
      </div>
    </div>
  );
}
