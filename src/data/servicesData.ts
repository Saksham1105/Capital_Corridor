export interface SubSection {
  label: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  sections: SubSection[];
  locationNote?: string;
}

export interface CategoryGroup {
  id: string;
  pillarNum: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  services: ServiceItem[];
}

export const servicesData: CategoryGroup[] = [
  {
    "id": "funding-loans",
    "pillarNum": "01",
    "name": "Funding & Financial Solutions",
    "shortName": "Funding & Loans",
    "tagline": "Corporate Finance, Structured Lending & Capital Solutions",
    "summary": "We provide customised funding advisory, trade finance, structured credit, capital raising, and investment banking advisory solutions for corporates, MSMEs, developers, exporters, importers, and investors.",
    "services": [
      {
        "id": "corporate-lending",
        "num": "01",
        "title": "Corporate Lending & Structured Credit",
        "desc": "We provide advisory, structuring, and coordination support for corporate lending and structured credit solutions to support business expansion, acquisitions, refinancing, and strategic capital requirements.",
        "sections": [
          {
            "label": "Corporate Funding Solutions",
            "items": [
              "Debt Consolidation",
              "Government Tender Financing",
              "Loans Against Bonds & NCDs",
              "External Commercial Borrowings (ECB)",
              "Lease Rental Discounting (LRD)"
            ]
          }
        ]
      },
      {
        "id": "trade-finance",
        "num": "02",
        "title": "Trade Finance & International Business Solutions",
        "desc": "We provide comprehensive trade finance advisory and international business solutions that facilitate domestic and cross-border trade transactions.",
        "sections": [
          {
            "label": "A. Trade Finance Instruments",
            "items": [
              "Letter of Credit (LC)",
              "Standby Letter of Credit (SBLC)",
              "Bank Guarantees (BG)",
              "Swift Message Services",
              "Corporate Guarantees"
            ]
          },
          {
            "label": "B. Export Finance Solutions",
            "items": [
              "Export Finance",
              "Export Bill Discounting"
            ]
          },
          {
            "label": "C. Import Finance Solutions",
            "items": [
              "Import Finance",
              "Buyer's Credit",
              "Supplier's Credit"
            ]
          }
        ]
      },
      {
        "id": "working-capital",
        "num": "03",
        "title": "Working Capital & Supply Chain Finance",
        "desc": "We provide advisory, structuring, and coordination support for working capital and supply chain finance solutions, helping businesses enhance liquidity and operational resilience.",
        "sections": [
          {
            "label": "Credit Facilities",
            "items": [
              "Term Loans",
              "Cash Credit (CC)",
              "Overdraft (OD)",
              "Drop-Line Overdraft",
              "Supply Chain Finance"
            ]
          }
        ]
      },
      {
        "id": "receivables-financing",
        "num": "04",
        "title": "Receivables & Invoice Financing",
        "desc": "We provide advisory, structuring, and coordination support for receivables financing solutions, enabling businesses to unlock working capital tied up in outstanding invoices.",
        "sections": [
          {
            "label": "Receivables Solutions",
            "items": [
              "Invoice Discounting",
              "Bill Discounting",
              "Factoring",
              "Receivables Securitisation",
              "Purchase Order (PO) Financing"
            ]
          }
        ]
      },
      {
        "id": "project-infrastructure",
        "num": "05",
        "title": "Project, Infrastructure & Institutional Funding",
        "desc": "We provide advisory, structuring, and coordination support for long-term project financing solutions across infrastructure, industrial projects, renewable energy, and institutional developments.",
        "sections": [
          {
            "label": "A. Project Finance",
            "items": [
              "Greenfield Project Financing",
              "Brownfield Project Financing",
              "Industrial & Manufacturing Projects",
              "Renewable Energy Projects",
              "Hospitality Projects (Hotels & Resorts)",
              "Expansion & Modernisation"
            ]
          },
          {
            "label": "B. Infrastructure & Strategic Assets",
            "items": [
              "Infrastructure Project Finance",
              "Transport & Logistics Funding",
              "Warehousing & Industrial Parks",
              "Urban Utility Projects",
              "PPP Projects"
            ]
          },
          {
            "label": "C. Acquisition & Institutional",
            "items": [
              "Acquisition Financing",
              "Capital Expenditure (CapEx) Financing",
              "Healthcare Institutions",
              "Educational Infrastructure Development"
            ]
          }
        ]
      },
      {
        "id": "real-estate-funding",
        "num": "06",
        "title": "Real Estate Funding",
        "desc": "We provide advisory, structuring, and coordination support for specialised real estate financing solutions for developers, builders, and property sponsors.",
        "sections": [
          {
            "label": "Developer Financing",
            "items": [
              "Builder & Developer Funding",
              "Construction Finance",
              "Inventory Funding"
            ]
          }
        ]
      },
      {
        "id": "asset-equipment-finance",
        "num": "07",
        "title": "Asset & Equipment Finance",
        "desc": "We provide advisory, structuring, and coordination support for asset-backed financing solutions, helping businesses acquire, refinance, and leverage tangible assets.",
        "sections": [
          {
            "label": "Asset Solutions",
            "items": [
              "Equipment & Machinery Finance",
              "Inventory / Stock Finance",
              "Commodity Financing",
              "Revenue-Based Financing",
              "Non-Recourse Loans",
              "Margin Financing"
            ]
          }
        ]
      },
      {
        "id": "stressed-asset-funding",
        "num": "08",
        "title": "Stressed Asset & Resolution Funding",
        "desc": "We provide advisory, structuring, and coordination support to businesses and investors in relation to stressed asset resolution, debt restructuring, and One-Time Settlements (OTS).",
        "sections": [
          {
            "label": "Resolution Facilities",
            "items": [
              "SMA-0, SMA-1 & SMA-2 Funding",
              "NPA & NPL Funding",
              "ARC Funding & Asset Takeovers",
              "One-Time Settlement (OTS) Structuring",
              "Interim Finance under IBC",
              "NCLT Funding Support",
              "Stressed Asset Revival Funding",
              "Debt Resolution & Recapitalisation",
              "Debt Restructuring"
            ]
          }
        ]
      },
      {
        "id": "investment-banking-raising",
        "num": "09",
        "title": "Investment Banking & Capital Raising",
        "desc": "We provide advisory, structuring, and coordination support for debt, equity, and growth capital raising across venture capital, private equity, and private credit.",
        "sections": [
          {
            "label": "A. Equity & Growth Capital",
            "items": [
              "Venture Capital",
              "Private Equity Funding",
              "Equity Funding",
              "FDI Structuring (Debt & Equity)",
              "Funding for Listed Companies"
            ]
          },
          {
            "label": "B. Alternative Capital Solutions",
            "items": [
              "Private Credit Funding",
              "Structured Debt Solutions",
              "Mezzanine Financing"
            ]
          }
        ]
      },
      {
        "id": "retail-business-loans",
        "num": "10",
        "title": "Retail & Business Loans",
        "desc": "We provide advisory, structuring, and coordination support for a broad range of secured and unsecured loan solutions for business owners and professionals.",
        "sections": [
          {
            "label": "Loan Products",
            "items": [
              "Secured Loans",
              "Unsecured Loans",
              "Home Loans",
              "Personal Loans",
              "Car Loans",
              "Education Loans",
              "Gold Loans",
              "Business Loans",
              "Professional Loans",
              "Loan Against Property (LAP)",
              "Loan Against Securities (LAS)",
              "Balance Transfer Facilities"
            ]
          }
        ]
      },
      {
        "id": "government-schemes",
        "num": "11",
        "title": "Government-Backed Loan Schemes",
        "desc": "We provide advisory and coordination support to businesses and entrepreneurs in accessing government-supported financing programmes.",
        "sections": [
          {
            "label": "Supported Schemes",
            "items": [
              "Pradhan Mantri Mudra Yojana (PMMY)",
              "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
              "Emergency Credit Line Guarantee Scheme (ECLGS)"
            ]
          }
        ]
      },
      {
        "id": "impact-development-finance",
        "num": "12",
        "title": "Impact & Development Finance",
        "desc": "We provide advisory, structuring, and coordination support to organisations and institutions in accessing funding solutions that promote measurable social and developmental impact.",
        "sections": [
          {
            "label": "Impact Solutions",
            "items": [
              "CSR Funding Advisory",
              "NGO & Non-Profit Funding Solutions"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "financial-advisory",
    "pillarNum": "02",
    "name": "Financial Advisory & Capital Market Services",
    "shortName": "Financial Advisory & ECM",
    "tagline": "Equity Capital Markets, IPO 5 P's Framework & Listed Entity Advisory",
    "summary": "We provide strategic advisory, structuring, and transaction coordination support for companies seeking to raise capital through public and private equity market instruments.",
    "services": [
      {
        "id": "equity-capital-market",
        "num": "01",
        "title": "Equity Capital Market (ECM) Services",
        "desc": "Strategic advisory, structuring, and transaction coordination support for public market issuances, private placements, and SEBI-registered intermediary coordination.",
        "sections": [
          {
            "label": "A. Public Market Issuances",
            "items": [
              "Initial Public Offering (IPO)",
              "Follow-on Public Offering (FPO)",
              "Rights Issue",
              "Bonus Issue",
              "Offer for Sale (OFS)"
            ]
          },
          {
            "label": "B. Private Market Issuances",
            "items": [
              "Qualified Institutional Placement (QIP)",
              "Private Placement",
              "Preferential Allotment",
              "Pre-IPO Placements"
            ]
          },
          {
            "label": "C. Market Listing & Access",
            "items": [
              "SME IPO",
              "Mainboard IPO",
              "Direct Listing"
            ]
          },
          {
            "label": "D. Transaction Support Services",
            "items": [
              "Block Placement Advisory",
              "IPO Transaction Coordination",
              "Capital Markets Documentation Coordination",
              "Investor & Institutional Coordination",
              "Coordination with SEBI Intermediaries",
              "Due Diligence Coordination"
            ]
          }
        ]
      },
      {
        "id": "ipo-framework",
        "num": "02",
        "title": "IPO Framework (5 P's) & End-to-End Support",
        "desc": "Our structured 5 P's Framework is designed to support IPO readiness, facilitate merchant banker coordination, and guide companies through listing and post-listing governance.",
        "sections": [
          {
            "label": "The 5 P's Framework",
            "items": [
              "1. Planning — Readiness assessment, business review, listing strategy",
              "2. Preparation — Documentation coordination, due diligence, DRHP coordination",
              "3. Process Coordination — SEBI merchant bankers, stock exchanges, legal advisors, auditors",
              "4. Public Offering Support — Investor positioning strategy, valuation & pricing advisory",
              "5. Post-IPO Advisory — Post-listing support, investor relations & corporate governance"
            ]
          }
        ]
      },
      {
        "id": "listed-company-acquisition",
        "num": "03",
        "title": "Listed Company Acquisition & Public Market Entry",
        "desc": "Helping businesses explore public market opportunities through acquisitions, mergers, strategic investments, reverse mergers, and listed entity restructuring.",
        "sections": [
          {
            "label": "Advisory Scope",
            "items": [
              "1. Listed Company Identification & Transaction Advisory",
              "2. Transaction Structuring & Capital Planning",
              "3. Business Integration & Restructuring Advisory",
              "4. Regulatory & Governance Coordination",
              "5. Capital Markets & Investor Relations Advisory",
              "6. Growth & Strategic Value Creation",
              "7. End-to-End Advisory & Transaction Coordination"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "legal-advisory",
    "pillarNum": "03",
    "name": "Legal, Insolvency, Restructuring & Recovery Advisory",
    "shortName": "Legal & Insolvency",
    "tagline": "Insolvency, Restructuring, SARFAESI Enforcement & Business Turnaround",
    "summary": "Capital Corridor provides strategic advisory, structuring, and coordination support in relation to insolvency, restructuring, debt recovery, and distressed asset transactions in coordination with qualified advocates, Insolvency Professionals, and Valuers.",
    "services": [
      {
        "id": "insolvency-bankruptcy",
        "num": "01",
        "title": "Insolvency & Bankruptcy Advisory",
        "desc": "Advisory and coordination support under the Insolvency and Bankruptcy Code (IBC), 2016, CIRP resolution planning, and NCLT/NCLAT coordination.",
        "sections": [
          {
            "label": "Coverage",
            "items": [
              "IBC 2016 Advisory & Coordination Support",
              "CIRP Strategy & Resolution Planning",
              "Debt Restructuring & Settlement Advisory",
              "Coordination with Resolution Professionals & Lenders",
              "Coordination Support for NCLT and NCLAT Matters"
            ]
          }
        ]
      },
      {
        "id": "debt-recovery-enforcement",
        "num": "02",
        "title": "Debt Recovery & Enforcement Advisory",
        "desc": "Advisory and coordination support relating to the SARFAESI Act, NPA resolution strategies, and DRT/DRAT proceedings.",
        "sections": [
          {
            "label": "Coverage",
            "items": [
              "SARFAESI Act Advisory & Coordination",
              "Debt Recovery Strategy & NPA Resolution",
              "Coordination with Legal Counsel for DRT and DRAT",
              "Recovery Planning & Stakeholder Coordination"
            ]
          }
        ]
      },
      {
        "id": "stressed-asset-resolution",
        "num": "03",
        "title": "Stressed Asset Resolution & Restructuring",
        "desc": "Stressed asset resolution strategies, debt restructuring, financial realignment, and business revival advisory.",
        "sections": [
          {
            "label": "Coverage",
            "items": [
              "Stressed Asset Resolution Strategies",
              "Debt Restructuring & Settlement Advisory",
              "Financial Restructuring Planning",
              "Business Revival and Recovery Advisory"
            ]
          }
        ]
      },
      {
        "id": "business-turnaround",
        "num": "04",
        "title": "Business Turnaround & Revival Advisory",
        "desc": "Operational and financial rehabilitation planning to restore distressed businesses to sustainable viability.",
        "sections": [
          {
            "label": "Coverage",
            "items": [
              "Business Turnaround & Rehabilitation Planning",
              "Operational & Financial Restructuring Advisory",
              "Value Enhancement Strategies",
              "Long-Term Sustainability Planning"
            ]
          }
        ]
      },
      {
        "id": "distressed-asset-nclt",
        "num": "05",
        "title": "Distressed Asset & NCLT Transaction Advisory",
        "desc": "Distressed asset transaction advisory, due diligence coordination, and transaction structuring for NCLT cases.",
        "sections": [
          {
            "label": "Coverage",
            "items": [
              "Distressed Asset Transaction Advisory",
              "Advisory & Coordination for NCLT Transactions",
              "Coordination of Due Diligence with Qualified Experts",
              "Transaction Structuring & Stakeholder Coordination"
            ]
          }
        ]
      },
      {
        "id": "funding-stressed-businesses",
        "num": "06",
        "title": "Funding Advisory for Stressed Businesses",
        "desc": "Specialised capital raising and funding advisory for revival, restructuring, and turnaround execution.",
        "sections": [
          {
            "label": "Coverage",
            "items": [
              "Capital Raising & Funding Advisory",
              "Advisory for Revival & Restructuring Funding",
              "Integration of Funding Strategies with Turnaround Plans"
            ]
          }
        ]
      },
      {
        "id": "regulatory-strategic-support",
        "num": "07",
        "title": "Regulatory & Strategic Support",
        "desc": "Regulatory compliance, recovery frameworks, and coordination across IBC, SARFAESI, RDB Act, NCLT, and DRT.",
        "sections": [
          {
            "label": "Frameworks Covered",
            "items": [
              "Insolvency and Bankruptcy Code (IBC), 2016",
              "Corporate Insolvency Resolution Process (CIRP)",
              "SARFAESI Act & RDB Act",
              "Matters relating to NCLT & NCLAT",
              "Matters relating to DRT & DRAT"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "documentation-support",
    "pillarNum": "04",
    "name": "Financial & Investment Documentation Services",
    "shortName": "Documentation Services",
    "tagline": "Bank-Ready Project Reports, CMA Data, TEV Reports & Credit Rating Support",
    "summary": "Financial and project documentation prepared by empanelled or independent qualified professionals, including Chartered Accountants (CA), Company Secretaries (CS), former bankers, and technical experts.",
    "services": [
      {
        "id": "dpr-report",
        "num": "01",
        "title": "Detailed Project Report (DPR)",
        "desc": "Coordination of comprehensive project reports covering business plans, project costs, financial projections, and project viability.",
        "sections": [
          {
            "label": "Core Deliverables",
            "items": [
              "Multi-Year Financial Projections",
              "Project Costing & Break-Even Analysis",
              "Market & Technical Feasibility Dossier"
            ]
          }
        ]
      },
      {
        "id": "cma-data",
        "num": "02",
        "title": "CMA Data (Credit Monitoring Arrangement)",
        "desc": "Coordination of bank-ready CMA data, financial statements, cash flow analysis, and repayment projections.",
        "sections": [
          {
            "label": "Core Deliverables",
            "items": [
              "Standard Bank-Format CMA Statements",
              "Working Capital Assessment & Limits",
              "Financial Ratio Analytics & Cash Flows"
            ]
          }
        ]
      },
      {
        "id": "tev-reports",
        "num": "03",
        "title": "Techno-Economic Viability (TEV) Reports",
        "desc": "Coordination of technical and economic feasibility assessments for funding and investment proposals.",
        "sections": [
          {
            "label": "Core Deliverables",
            "items": [
              "Technical Feasibility Evaluation",
              "Economic & Market Viability Testing",
              "Sensitivity & Stress-Test Analysis"
            ]
          }
        ]
      },
      {
        "id": "credit-rating-support",
        "num": "04",
        "title": "Credit Rating Support",
        "desc": "Advisory and coordination support for financial information and documentation required for credit rating assessments.",
        "sections": [
          {
            "label": "Core Deliverables",
            "items": [
              "Rating Agency Presentation Materials",
              "Credit Metrics & Balance Sheet Optimization",
              "Lender Rating Enhancement Advisory"
            ]
          }
        ]
      },
      {
        "id": "project-reports",
        "num": "05",
        "title": "Project Reports",
        "desc": "Coordination of customised project reports for startups, MSMEs, business expansion, and funding requirements.",
        "sections": [
          {
            "label": "Core Deliverables",
            "items": [
              "Startup Business Proposals",
              "Industrial Expansion Reports",
              "Government Scheme & Subsidy Dossiers"
            ]
          }
        ]
      },
      {
        "id": "lie-reports",
        "num": "06",
        "title": "Lender's Independent Engineer (LIE) Reports",
        "desc": "Coordination of project monitoring and loan utilisation reports prepared for lender and investor requirements.",
        "sections": [
          {
            "label": "Core Deliverables",
            "items": [
              "Physical Construction Progress Audits",
              "Fund Utilisation Verification",
              "Drawdown & Milestone Certification"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "other-services",
    "pillarNum": "05",
    "name": "Other Services (Beyond Funding & Advisory)",
    "shortName": "Extended Network Services",
    "tagline": "Comprehensive Business Support Through Capital Corridor's Network",
    "summary": "Capital Corridor facilitates access to a wider network of independent professionals, consultants, associates, and specialised service providers across India.",
    "services": [
      {
        "id": "subsidy-consultancy",
        "num": "01",
        "title": "Subsidy Consultancy",
        "desc": "Connecting businesses with experienced consultants who assist in identifying suitable Central and State Government subsidies, incentives, and MSME schemes.",
        "locationNote": "Available in Rajasthan only",
        "sections": [
          {
            "label": "Services",
            "items": [
              "Central & State Government Subsidies",
              "MSME Capital Subsidy Coordination",
              "Application & Documentation Support"
            ]
          }
        ]
      },
      {
        "id": "real-estate-advisory",
        "num": "02",
        "title": "Real Estate Advisory Services",
        "desc": "Facilitating access to professionals providing advisory support for commercial, residential, industrial, agricultural, and hospitality properties.",
        "locationNote": "Available in Rajasthan & Maharashtra only",
        "sections": [
          {
            "label": "Services",
            "items": [
              "Commercial & Industrial Land Acquisition",
              "Agricultural & Hospitality Advisory",
              "Transaction Assistance & Documentation"
            ]
          }
        ]
      },
      {
        "id": "construction-development",
        "num": "03",
        "title": "Construction & Project Development Services",
        "desc": "Support services for infrastructure and construction projects, including project planning, execution guidance, and cost monitoring.",
        "locationNote": "Available in PAN India",
        "sections": [
          {
            "label": "Services",
            "items": [
              "Project Planning & Scheduling",
              "Execution Guidance & Cost Control",
              "Government & Private Project Supervision"
            ]
          }
        ]
      },
      {
        "id": "business-advisory-startup",
        "num": "04",
        "title": "Business Advisory & Startup Consulting",
        "desc": "Services relating to company setup, MSME registration, IEC registration, business planning, and growth strategy advisory.",
        "locationNote": "Available in PAN India",
        "sections": [
          {
            "label": "Services",
            "items": [
              "Company Formation & Setup",
              "MSME & IEC Registrations",
              "Business Planning & Strategic Growth"
            ]
          }
        ]
      },
      {
        "id": "import-export-services",
        "num": "05",
        "title": "Import & Export Services",
        "desc": "Support for Import Export Code (IEC) registration, international trade documentation, customs coordination, and sourcing assistance.",
        "locationNote": "Available in PAN India",
        "sections": [
          {
            "label": "Services",
            "items": [
              "IEC Licensing & Registration",
              "International Trade Documentation",
              "Customs Clearance & Sourcing Assistance"
            ]
          }
        ]
      },
      {
        "id": "hospitality-consultancy",
        "num": "06",
        "title": "Hospitality Consultancy",
        "desc": "Advisory support for hotels, resorts, restaurants, and cafes, including project planning, operational strategy, and turnkey project support.",
        "locationNote": "Available in PAN India",
        "sections": [
          {
            "label": "Services",
            "items": [
              "Hotel & Resort Feasibility & Planning",
              "Operational Strategy & Turnkey Support",
              "Brand Collaborations & Operator Search"
            ]
          }
        ]
      },
      {
        "id": "school-brand-tieup",
        "num": "07",
        "title": "School Brand Tie-Up",
        "desc": "Access to opportunities involving established school franchises and education brands for developing educational institutions.",
        "locationNote": "Available in PAN India",
        "sections": [
          {
            "label": "Services",
            "items": [
              "School Franchise & Brand Tie-ups",
              "Branding & Operational Support",
              "Curriculum & Infrastructure Alignment"
            ]
          }
        ]
      },
      {
        "id": "secondary-market-trading",
        "num": "08",
        "title": "Secondary Market & Trading Services",
        "desc": "Facilitating access to experienced market professionals for equity insights, market research, stock analysis, and hedging support through SEBI-registered intermediaries.",
        "locationNote": "Available in PAN India",
        "sections": [
          {
            "label": "Services",
            "items": [
              "Equity Market Insights & Research",
              "Stock Analysis & Buy/Sell Discussions",
              "Derivatives & Portfolio Support via SEBI Intermediaries"
            ]
          }
        ]
      }
    ]
  }
];
