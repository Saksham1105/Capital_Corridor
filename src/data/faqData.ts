export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
  steps?: string[];
}

export type FaqCategory =
  | 'About Capital Corridor'
  | 'Funding & Financing'
  | 'Investment & Capital Markets'
  | 'Complex / Stressed Cases'
  | 'Documentation & Process'
  | 'Working With Capital Corridor'
  | 'Legal / Compliance';

export const FAQ_CATEGORIES: FaqCategory[] = [
  'About Capital Corridor',
  'Funding & Financing',
  'Investment & Capital Markets',
  'Complex / Stressed Cases',
  'Documentation & Process',
  'Working With Capital Corridor',
  'Legal / Compliance',
];

export const FAQ_DATA: FaqItem[] = [
  // CATEGORY A — ABOUT CAPITAL CORRIDOR
  {
    id: 'faq-1',
    category: 'About Capital Corridor',
    question: 'What is Capital Corridor?',
    answer:
      'Capital Corridor is an independent financial advisory, structured finance, investment banking advisory, and capital markets solutions firm. We help corporates, entrepreneurs, developers, financial institutions, family offices, and investors identify and access appropriate funding and capital solutions through a broad network of banks, NBFCs, private credit funds, AIFs, ARCs, institutional investors, and other capital providers.',
  },
  {
    id: 'faq-2',
    category: 'About Capital Corridor',
    question: 'What services does Capital Corridor provide?',
    answer:
      'Our services span funding and financial solutions, structured finance, corporate lending advisory, trade finance, working capital and supply chain finance, receivables financing, project and infrastructure funding, real estate funding, asset and equipment finance, stressed asset and resolution funding, investment banking and capital raising, retail and business loans, government-backed loan schemes, impact and development finance, capital markets advisory, IPO advisory, financial documentation coordination, restructuring and recovery advisory, and strategic business advisory.',
  },
  {
    id: 'faq-3',
    category: 'About Capital Corridor',
    question: 'Who can work with Capital Corridor?',
    answer:
      'We work with a wide range of clients including corporates, MSMEs, entrepreneurs, developers, infrastructure companies, financial institutions, exporters and importers, startups, investors, family offices, and businesses facing complex or challenging financing requirements.',
  },

  // CATEGORY B — FUNDING & FINANCING
  {
    id: 'faq-4',
    category: 'Funding & Financing',
    question: 'Does Capital Corridor provide loans directly?',
    answer:
      'No. Capital Corridor is a financial advisory and funding facilitation firm, not a direct lender. We advise, structure, coordinate, and facilitate funding proposals with relevant banks, NBFCs, financial institutions, private credit funds, AIFs, ARCs, and other capital providers.',
  },
  {
    id: 'faq-5',
    category: 'Funding & Financing',
    question: 'Can Capital Corridor guarantee loan approval or funding?',
    answer:
      'No. Capital Corridor does not guarantee loan approvals, funding sanctions, credit decisions, loan amounts, interest rates, repayment tenures, or disbursement timelines. Final lending and funding decisions are made independently by the relevant financial institution or capital provider based on its own credit evaluation, policies, and applicable laws.',
  },
  {
    id: 'faq-6',
    category: 'Funding & Financing',
    question: 'What types of funding can Capital Corridor help arrange?',
    answer:
      "Depending on the client's requirements and eligibility, we provide advisory and coordination support across corporate lending, structured credit, working capital, trade finance, project finance, real estate finance, construction finance, equipment finance, private credit, debt syndication, capital raising, and other customised funding solutions.",
  },
  {
    id: 'faq-7',
    category: 'Funding & Financing',
    question: 'Can you help businesses with complex financing requirements?',
    answer:
      'Yes. Capital Corridor specialises in complex and challenging funding requirements that may not fit traditional banking criteria. Each case is evaluated based on factors such as business fundamentals, cash flows, existing liabilities, asset quality, promoter profile, repayment capacity, and project viability.',
  },
  {
    id: 'faq-8',
    category: 'Funding & Financing',
    question: 'Do you work with startups and MSMEs?',
    answer:
      'Yes. Capital Corridor provides advisory and funding support for startups, MSMEs, mid-corporates, entrepreneurs, and growing businesses, subject to the suitability and requirements of the proposed transaction.',
  },

  // CATEGORY C — INVESTMENT & CAPITAL MARKETS
  {
    id: 'faq-9',
    category: 'Investment & Capital Markets',
    question: 'Does Capital Corridor provide investment advice?',
    answer:
      "Capital Corridor's capital-market and securities-related services are advisory and consultative in nature. The company is not presented as a SEBI-registered Investment Adviser, Portfolio Manager, Stockbroker, Merchant Banker, or other regulated intermediary unless expressly authorised under applicable law. Investment decisions remain the responsibility of the client.",
  },
  {
    id: 'faq-10',
    category: 'Investment & Capital Markets',
    question: 'What capital markets services does Capital Corridor support?',
    answer:
      'Capital Corridor provides strategic advisory, structuring, documentation coordination, and transaction coordination support relating to public and private capital-market transactions, including IPOs, FPOs, rights issues, bonus issues, OFS, QIPs, private placements, preferential allotments, pre-IPO placements, SME and mainboard IPOs, and other capital-market opportunities.',
  },
  {
    id: 'faq-11',
    category: 'Investment & Capital Markets',
    question: 'Can Capital Corridor help with IPO preparation?',
    answer:
      'Yes. Capital Corridor provides advisory and coordination support across IPO readiness, business and capital structure review, listing and capital-raising strategy, documentation coordination, due-diligence coordination, transaction coordination, investor positioning, valuation and pricing advisory, and post-IPO strategic support. Regulatory and professional work is coordinated with SEBI-registered intermediaries and other qualified professionals where required.',
  },
  {
    id: 'faq-12',
    category: 'Investment & Capital Markets',
    question: 'Does Capital Corridor guarantee investment returns or listing outcomes?',
    answer:
      'No. Capital Corridor does not guarantee investment returns, listing outcomes, capital appreciation, or any particular market result. Investment and capital-market decisions remain subject to the relevant transaction, market conditions, regulatory requirements, and the independent decisions of the parties involved.',
  },

  // CATEGORY D — COMPLEX / STRESSED CASES
  {
    id: 'faq-13',
    category: 'Complex / Stressed Cases',
    question: 'Can Capital Corridor help with NPA or stressed asset cases?',
    answer:
      'Yes. Capital Corridor provides advisory, structuring, and coordination support for stressed assets, NPA and NPL funding, One-Time Settlement (OTS) structuring, debt restructuring, ARC funding and asset takeovers, interim finance under IBC, NCLT funding support, stressed asset revival funding, and debt resolution and recapitalisation.',
  },
  {
    id: 'faq-14',
    category: 'Complex / Stressed Cases',
    question: 'Can you help businesses with high existing debt?',
    answer:
      'Yes. Businesses with high existing debt exposure may be considered for appropriate restructuring, refinancing, resolution, or funding strategies depending on their financial position, cash flows, assets, repayment capacity, and overall viability.',
  },
  {
    id: 'faq-15',
    category: 'Complex / Stressed Cases',
    question: 'How do you evaluate a challenging borrower case?',
    answer:
      'Each case is evaluated individually. Key considerations may include business fundamentals, cash-flow strength, asset quality, promoter profile, repayment capacity, project viability, existing liabilities, and the specific requirements of the proposed transaction.',
  },
  {
    id: 'faq-16',
    category: 'Complex / Stressed Cases',
    question: 'Can Capital Corridor assist with insolvency and restructuring matters?',
    answer:
      'Capital Corridor provides strategic advisory, structuring, and coordination support in relation to insolvency, restructuring, debt recovery, stressed asset resolution, business turnaround, and distressed asset transactions. Where statutory registration, legal representation, or professional certification is required, Capital Corridor coordinates with qualified advocates, Insolvency Professionals, Chartered Accountants, Company Secretaries, Registered Valuers, and other authorised professionals as applicable.',
  },

  // CATEGORY E — DOCUMENTATION & PROCESS
  {
    id: 'faq-17',
    category: 'Documentation & Process',
    question: 'What is the process of working with Capital Corridor?',
    answer: 'Our approach generally follows these stages:',
    steps: [
      'Understanding your requirements',
      'Financial evaluation',
      'Solution structuring',
      'Documentation coordination',
      'Lender and investor mapping',
      'Transaction coordination and due diligence',
      'Documentation and funding coordination',
      'Ongoing strategic support',
    ],
  },
  {
    id: 'faq-18',
    category: 'Documentation & Process',
    question: 'What documents may be required?',
    answer:
      'The documentation required depends on the nature of the transaction. Depending on the case, this may include financial statements, project reports, CMA data, business plans, financial projections, credit proposals, and other transaction-related documents.',
  },
  {
    id: 'faq-19',
    category: 'Documentation & Process',
    question: 'Does Capital Corridor prepare project reports and CMA data itself?',
    answer:
      'Capital Corridor provides coordination and documentation support. Project Reports, CMA Data, TEV Reports, and similar professional documentation are prepared by empanelled or independent qualified professionals, including Chartered Accountants, Company Secretaries, former banking professionals, technical consultants, and other subject-matter experts, based on the requirements of the relevant transaction.',
  },
  {
    id: 'faq-20',
    category: 'Documentation & Process',
    question: 'How does Capital Corridor identify suitable funding partners?',
    answer:
      'Capital Corridor leverages its network across public and private sector banks, NBFCs, financial institutions, AIFs, private credit funds, family offices, institutional investors, ARCs, and other capital providers to identify and engage with potential funding partners appropriate to the requirements of the transaction.',
  },

  // CATEGORY F — WORKING WITH CAPITAL CORRIDOR
  {
    id: 'faq-21',
    category: 'Working With Capital Corridor',
    question: 'What happens during the initial discussion?',
    answer:
      'The initial discussion focuses on understanding your business profile, funding requirement, financial position, growth plans, and strategic objectives. This helps determine the nature of advisory or funding solution that may be appropriate for your requirements.',
  },
  {
    id: 'faq-22',
    category: 'Working With Capital Corridor',
    question: 'How long does the funding process take?',
    answer:
      'Timelines vary depending on the nature and complexity of the transaction, documentation, due diligence, lender or investor requirements, regulatory processes, and other factors. Capital Corridor does not guarantee a specific approval or disbursement timeline.',
  },
  {
    id: 'faq-23',
    category: 'Working With Capital Corridor',
    question: 'What industries does Capital Corridor support?',
    answer:
      'Our experience and solutions extend across sectors including real estate and construction, infrastructure and EPC, manufacturing, healthcare and education, hospitality and hotels, warehousing and logistics, renewable energy, technology and SaaS, trading and distribution, MSMEs, and mid-corporates.',
  },
  {
    id: 'faq-24',
    category: 'Working With Capital Corridor',
    question: 'Can Capital Corridor continue supporting us after funding?',
    answer:
      'Yes. Our relationship can extend beyond the initial funding transaction through ongoing strategic advisory, refinancing support, capital-structure optimisation, expansion funding advisory, debt restructuring advisory, and long-term financial planning.',
  },
  {
    id: 'faq-25',
    category: 'Working With Capital Corridor',
    question: 'How can I get started with Capital Corridor?',
    answer:
      'You can contact the Capital Corridor team to discuss your financial requirements and potential advisory or funding solutions. The team will first understand your requirements and then assess the appropriate way forward.',
  },

  // CATEGORY G — LEGAL / COMPLIANCE
  {
    id: 'faq-26',
    category: 'Legal / Compliance',
    question: 'Is Capital Corridor a bank or NBFC?',
    answer:
      'No. Capital Corridor is an independent financial advisory, consultancy, structuring, documentation, coordination, and facilitation firm. It does not act as a bank, NBFC, registered lender, deposit-taking institution, payment service provider, or other regulated entity unless expressly authorised under applicable law.',
  },
  {
    id: 'faq-27',
    category: 'Legal / Compliance',
    question: 'Does Capital Corridor hold or manage client funds?',
    answer:
      'No. Capital Corridor does not accept deposits, disburse loans directly, manage client funds, hold client assets, or provide custody of securities.',
  },
  {
    id: 'faq-28',
    category: 'Legal / Compliance',
    question: 'Does Capital Corridor provide legal representation?',
    answer:
      'No. Capital Corridor is not a law firm or Insolvency Professional Entity and does not provide legal representation or appear before courts, tribunals, NCLT, NCLAT, DRT, or DRAT. Where required, the company coordinates with qualified legal and professional advisors.',
  },
  {
    id: 'faq-29',
    category: 'Legal / Compliance',
    question: 'Are funding decisions made by Capital Corridor?',
    answer:
      'No. Capital Corridor acts as an advisor, consultant, arranger, facilitator, and coordinator. Credit, funding, and investment decisions remain solely with the relevant banks, NBFCs, financial institutions, investors, or other capital providers based on their independent evaluation and applicable policies.',
  },
];
