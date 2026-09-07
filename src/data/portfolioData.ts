export interface ExperienceItem {
  id: string;
  title: string;
  category: 'Operations & Sales' | 'Finance & Economics' | 'Data & AI';
  shortDesc: string;
  appliedExample: string;
  keyMetrics: string;
  toolsUsed: string[];
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: 'Business & Operations' | 'Finance & Economics' | 'Data & Tech';
  level: string;
  description: string;
}

export const PORTFOLIO_OWNER = {
  name: 'Almasi Ibrahimu',
  monogram: 'AI',
  title: 'Economics & Finance Student | Business Professional | Aspiring Data Scientist',
  location: 'Tanzania',
  whatsappNumber: '255627378713',
  whatsappDisplay: '+255 627 378 713',
  email: 'almasi1ibrahimu@gmail.com',
  heroBio:
    'I am a motivated Tanzanian professional with experience in business operations, sales, marketing, inventory management and finance. I am passionate about technology, data, business growth and developing solutions that create real impact.',
  aboutParagraphs: [
    'My name is Almasi Ibrahimu. I am interested in economics, finance, business management, technology and data science.',
    'I enjoy learning how businesses operate, how technology can improve decision-making and how data can be used to solve real-world problems.',
    'My long-term goal is to develop strong skills in data analysis, artificial intelligence and data science while continuing to build practical experience in business and finance.',
  ],
};

export const EXPERIENCE_CARDS: ExperienceItem[] = [
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    category: 'Operations & Sales',
    shortDesc:
      'Experience managing stock, monitoring inventory movements and improving stock management processes.',
    appliedExample:
      'Structured stock ledger tracking, reorder threshold monitoring, and shrinkage minimization workflows to keep fast-moving SKUs available while reducing excess holding costs.',
    keyMetrics: 'Stock Accuracy & Turnover Optimization',
    toolsUsed: ['Microsoft Excel', 'Stock Ledgers', 'ABC Analysis'],
    iconName: 'PackageCheck',
  },
  {
    id: 'sales',
    title: 'Sales',
    category: 'Operations & Sales',
    shortDesc:
      'Experience dealing with customers, supporting sales activities and understanding customer needs.',
    appliedExample:
      'Direct customer consultation, product value communication, and consultative selling that converts inquiries into long-term repeat business relationships.',
    keyMetrics: 'Customer Conversion & Retention',
    toolsUsed: ['Customer Consultation', 'Sales Pipelines', 'Account Support'],
    iconName: 'TrendingUp',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    category: 'Operations & Sales',
    shortDesc:
      'Interested in digital marketing, customer engagement and business growth strategies.',
    appliedExample:
      'Designing audience-targeted value propositions, analyzing campaign outreach effectiveness, and aligning promotional messaging with local Tanzanian market demand.',
    keyMetrics: 'Audience Reach & Engagement Growth',
    toolsUsed: ['Digital Outreach', 'Market Segmentation', 'Growth Strategy'],
    iconName: 'Megaphone',
  },
  {
    id: 'finance-economics',
    title: 'Finance & Economics',
    category: 'Finance & Economics',
    shortDesc:
      'Developing academic and practical knowledge in economics, finance and business decision-making.',
    appliedExample:
      'Applying micro/macroeconomic principles, unit economics, cost-benefit modeling, and cash-flow analysis to evaluate business viability and pricing strategies.',
    keyMetrics: 'Margin Analysis & Capital Efficiency',
    toolsUsed: ['Financial Modeling', 'Unit Economics', 'Cost-Benefit Analysis'],
    iconName: 'Landmark',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    category: 'Data & AI',
    shortDesc:
      'Building skills in analysing information and using data to support better business decisions.',
    appliedExample:
      'Transforming raw sales and stock datasets into clear executive dashboards, identifying seasonal demand trends, and uncovering profit drivers using structured spreadsheets.',
    keyMetrics: 'Data-Backed Executive Insights',
    toolsUsed: ['Microsoft Excel', 'Pivot Tables', 'Statistical Trends'],
    iconName: 'BarChart3',
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    category: 'Data & AI',
    shortDesc:
      'Interested in artificial intelligence, automation and how emerging technologies can improve businesses.',
    appliedExample:
      'Exploring AI-driven demand forecasting, automated business reporting, and intelligent workflow assistants that reduce repetitive manual administration.',
    keyMetrics: 'Process Automation & Future Readiness',
    toolsUsed: ['AI Prompt Engineering', 'Predictive Concepts', 'Workflow Automation'],
    iconName: 'Cpu',
  },
];

export const SKILLS_LIST: SkillItem[] = [
  {
    name: 'Microsoft Excel',
    category: 'Data & Tech',
    level: 'Core Competency',
    description: 'Formulas, Pivot Tables, financial tracking sheets, and inventory movement modeling.',
  },
  {
    name: 'Inventory Management',
    category: 'Business & Operations',
    level: 'Practical Experience',
    description: 'Stock monitoring, reorder level planning, physical stock audits, and movement control.',
  },
  {
    name: 'Sales',
    category: 'Business & Operations',
    level: 'Practical Experience',
    description: 'Client communication, consultative product positioning, and revenue generation support.',
  },
  {
    name: 'Marketing',
    category: 'Business & Operations',
    level: 'Active Focus',
    description: 'Digital customer engagement, brand positioning, and market expansion strategies.',
  },
  {
    name: 'Finance',
    category: 'Finance & Economics',
    level: 'Academic & Practical',
    description: 'Financial statement interpretation, budgeting, working capital, and margin analysis.',
  },
  {
    name: 'Economics',
    category: 'Finance & Economics',
    level: 'Academic Core',
    description: 'Supply & demand dynamics, market structures, inflation impact, and resource allocation.',
  },
  {
    name: 'Data Analysis',
    category: 'Data & Tech',
    level: 'Rapidly Growing',
    description: 'Extracting actionable business insights from transactional and operational datasets.',
  },
  {
    name: 'Business Management',
    category: 'Business & Operations',
    level: 'Practical Experience',
    description: 'Day-to-day operational coordination, workflow improvement, and team collaboration.',
  },
  {
    name: 'Artificial Intelligence',
    category: 'Data & Tech',
    level: 'Emerging Specialty',
    description: 'Applying modern AI tools to accelerate research, automate tasks, and model scenarios.',
  },
  {
    name: 'Customer Service',
    category: 'Business & Operations',
    level: 'Practical Experience',
    description: 'High-empathy client support, issue resolution, and building trusted relationships.',
  },
];
