import { useState } from 'react';
import almasiPhoto from './almasi..jpeg';
import {
  PackageCheck,
  TrendingUp,
  Megaphone,
  Landmark,
  BarChart3,
  Cpu,
  MessageCircle,
  Mail,
  Check,
  Copy,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  Send,
} from 'lucide-react';
import {
  PORTFOLIO_OWNER,
  EXPERIENCE_CARDS,
  SKILLS_LIST,
  ExperienceItem,
  SkillItem,
} from './data/portfolioData';
import { InventorySimulator } from './components/InventorySimulator';

export function App() {
  const [activeExpCategory, setActiveExpCategory] = useState<string>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>('inventory-management');
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_LIST[0]);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Interactive WhatsApp Quick Composer State
  const [inquiryTopic, setInquiryTopic] = useState<string>(
    'Finance / Data Analyst Opportunity'
  );
  const [visitorName, setVisitorName] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>('');

  const currentYear = new Date().getFullYear();

  const filteredExperiences =
    activeExpCategory === 'All'
      ? EXPERIENCE_CARDS
      : EXPERIENCE_CARDS.filter((item) => item.category === activeExpCategory);

  const filteredSkills =
    activeSkillCategory === 'All'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.category === activeSkillCategory);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_OWNER.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-[#F4B400]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#F4B400]" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-[#F4B400]" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-[#F4B400]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#F4B400]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#F4B400]" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#F4B400]" />;
    }
  };

  const generateWhatsAppURL = () => {
    const intro = visitorName.trim()
      ? `Hello Almasi, my name is ${visitorName.trim()}.`
      : `Hello Almasi, I visited your personal website.`;
    const topicPart = ` I am reaching out regarding: ${inquiryTopic}.`;
    const notePart = customNote.trim() ? ` Details: ${customNote.trim()}` : '';
    const fullMessage = encodeURIComponent(`${intro}${topicPart}${notePart}`);
    return `https://wa.me/${PORTFOLIO_OWNER.whatsappNumber}?text=${fullMessage}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#0F172A]">
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#071A33]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#home"
            className="text-white font-display text-2xl font-extrabold tracking-tight flex items-center gap-1"
          >
            ALMASI<span className="text-[#F4B400]">.</span>
            <span className="hidden sm:inline-block ml-2 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
              FINANCE & DATA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Experience', href: '#experience' },
              { label: 'Simulator', href: '#simulator' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#F4B400] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct WhatsApp Header Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${PORTFOLIO_OWNER.whatsappNumber}?text=Hello%20Almasi,%20I%20visited%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F4B400] hover:bg-[#FFC928] text-[#071A33] font-bold text-xs tracking-wide transition shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-[#071A33]" />
              WhatsApp Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#071A33] border-b border-white/10 px-6 py-5 space-y-3">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Experience', href: '#experience' },
              { label: 'Simulator', href: '#simulator' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-[#F4B400]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={`https://wa.me/${PORTFOLIO_OWNER.whatsappNumber}?text=Hello%20Almasi,%20I%20visited%20your%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#F4B400] text-[#071A33] font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[88vh] flex items-center justify-center text-center text-white px-6 py-20 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #123B67 0%, #071A33 100%)',
        }}
      >
        {/* Subtle technical grid pattern */}
        <div className="absolute inset-0 bg-tech-grid-dark pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Elevated "AI" Monogram Emblem */}
          <div className="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-[#F4B400]/40 animate-pulse-ring" />
            <div className="w-36 h-36 rounded-full border-4 border-[#F4B400] bg-white text-[#071A33] flex flex-col items-center justify-center shadow-2xl">
       <img
  src={almasiPhoto}
  alt="Almasi Ibrahim"
  className="w-full h-full object-cover rounded-full"
/>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#123B67] font-semibold mt-1">
                TANZANIA
              </span>
            </div>
            <div
              className="absolute -bottom-2 px-3 py-1 rounded-full bg-[#102B4C] border border-[#F4B400]/50 text-[11px] font-mono text-slate-200 flex items-center gap-1.5 shadow-lg"
              title="Open to Opportunities"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#10B981] -ml-3.5" />
              Available for Roles
            </div>
          </div>

          {/* Display Hero Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-[#F4B400] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              {PORTFOLIO_OWNER.name}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-2xl font-medium text-[#D6E4F5] max-w-3xl mx-auto mb-6 leading-snug">
            {PORTFOLIO_OWNER.title}
          </h2>

          {/* Original Bio Paragraph */}
          <p className="max-w-2xl mx-auto text-slate-200 text-base sm:text-lg leading-relaxed mb-9">
            {PORTFOLIO_OWNER.heroBio}
          </p>

          {/* 3 Clean Executive KPI Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-left flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#F4B400]/20 text-[#F4B400] flex items-center justify-center font-mono font-bold text-sm shrink-0">
                01
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">ACADEMIC & PRACTICAL</div>
                <div className="text-sm font-semibold text-white">Economics & Finance</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-left flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#F4B400]/20 text-[#F4B400] flex items-center justify-center font-mono font-bold text-sm shrink-0">
                02
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">CORE EXECUTION</div>
                <div className="text-sm font-semibold text-white">Inventory, Sales & Ops</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-left flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#F4B400]/20 text-[#F4B400] flex items-center justify-center font-mono font-bold text-sm shrink-0">
                03
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">FUTURE FOCUS</div>
                <div className="text-sm font-semibold text-white">Data Science & AI</div>
              </div>
            </div>
          </div>

          {/* Hero CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${PORTFOLIO_OWNER.whatsappNumber}?text=Hello%20Almasi,%20I%20visited%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#F4B400] hover:bg-[#FFC928] text-[#071A33] font-bold text-base shadow-lg transition transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-[#071A33]" />
              Contact Me on WhatsApp
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border-2 border-white/80 hover:bg-white hover:text-[#071A33] text-white font-bold text-base transition"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#123B67] font-semibold bg-[#F4F7FB] px-3.5 py-1.5 rounded-full border border-slate-200">
              EXECUTIVE BIOGRAPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A33] mt-3 mb-2">
              About Me
            </h2>
            <p className="text-slate-500 text-base">Get to know me better.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="p-5 rounded-xl bg-[#F4F7FB] border-l-4 border-[#F4B400] text-[#0F172A]">
                My name is <strong className="text-[#071A33] font-bold">Almasi Ibrahim</strong>. I am interested in economics, finance, business management, technology and data science.
              </p>
              <p>
                I enjoy learning how businesses operate, how technology can improve decision-making and how data can be used to solve real-world problems.
              </p>
              <p>
                My long-term goal is to develop strong skills in data analysis, artificial intelligence and data science while continuing to build practical experience in business and finance.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-6 text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F4B400]" />
                  <span>Based in Tanzania</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#F4B400]" />
                  <span>Economics & Finance Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F4B400]" />
                  <span>Data Science & AI Trajectory</span>
                </div>
              </div>
            </div>

            {/* 3 Strategic Pillar Summary Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-[#F4F7FB] border border-slate-200/80 hover:border-[#F4B400] transition">
                <div className="text-xs font-mono uppercase text-[#123B67] font-semibold mb-1">
                  01 • FOUNDATION
                </div>
                <h3 className="text-lg font-bold text-[#071A33]">
                  Business & Inventory Operations
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Hands-on experience managing stock movements, supporting sales conversions, and serving customers directly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F7FB] border border-slate-200/80 hover:border-[#F4B400] transition">
                <div className="text-xs font-mono uppercase text-[#123B67] font-semibold mb-1">
                  02 • DISCIPLINE
                </div>
                <h3 className="text-lg font-bold text-[#071A33]">
                  Economics & Financial Acumen
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Understanding cost structures, pricing, margin protection, and macroeconomic trends affecting East African & global markets.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F7FB] border border-slate-200/80 hover:border-[#F4B400] transition">
                <div className="text-xs font-mono uppercase text-[#123B67] font-semibold mb-1">
                  03 • HORIZON
                </div>
                <h3 className="text-lg font-bold text-[#071A33]">
                  Data Analysis & AI Solutions
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Harnessing spreadsheets, quantitative analysis, and emerging AI tools to turn raw operational data into competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Interests Section */}
      <section id="experience" className="py-24 px-6 bg-[#F4F7FB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#123B67] font-semibold bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
              CORE COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A33] mt-3 mb-2">
              Experience & Interests
            </h2>
            <p className="text-slate-600 text-base">
              Areas where I have experience and continue developing my skills.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {['All', 'Operations & Sales', 'Finance & Economics', 'Data & AI'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveExpCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeExpCategory === category
                    ? 'bg-[#071A33] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 3-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((item: ExperienceItem) => {
              const isExpanded = expandedCardId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Top Gold Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#071A33] via-[#F4B400] to-[#123B67]" />

                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#071A33] flex items-center justify-center shadow-md">
                        {getIconComponent(item.iconName)}
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#F4F7FB] text-[#123B67] border border-slate-200">
                        {item.category}
                      </span>
                    </div>

                    {/* Title & Original Description */}
                    <h3 className="text-xl font-bold text-[#071A33] mb-2.5 group-hover:text-[#123B67] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                      {item.shortDesc}
                    </p>

                    {/* Expandable Practical Application Drawer */}
                    {isExpanded && (
                      <div className="mb-5 p-4 rounded-xl bg-[#F4F7FB] border border-slate-200/80 text-xs sm:text-sm space-y-2.5 animate-fadeIn">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-[#071A33] font-bold">
                          Applied Focus & Impact:
                        </div>
                        <p className="text-slate-700 leading-relaxed">{item.appliedExample}</p>
                        <div className="pt-1 flex flex-wrap gap-1.5">
                          {item.toolsUsed.map((tool) => (
                            <span
                              key={tool}
                              className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-[#071A33]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer Toggle */}
                  <button
                    onClick={() => setExpandedCardId(isExpanded ? null : item.id)}
                    className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-[#071A33] hover:text-[#F4B400] transition cursor-pointer"
                  >
                    <span>
                      {isExpanded ? 'Hide Practical Application' : 'View Practical Application'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Business & Inventory Simulator Section */}
      <InventorySimulator />

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#EEF3F9]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#123B67] font-semibold bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
              TECHNICAL & BUSINESS TOOLKIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#071A33] mt-3 mb-2">
              My Skills
            </h2>
            <p className="text-slate-600 text-base">
              Some of the areas I am currently developing. Click any skill tag below to view its application context.
            </p>
          </div>

          {/* Skill Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['All', 'Business & Operations', 'Finance & Economics', 'Data & Tech'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition cursor-pointer ${
                  activeSkillCategory === cat
                    ? 'bg-[#123B67] text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Tags Cloud */}
          <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto mb-10">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-5 py-3 rounded-full font-medium text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#F4B400] text-[#071A33] font-bold shadow-md scale-105 ring-2 ring-[#071A33]'
                      : 'bg-[#071A33] text-white hover:bg-[#123B67]'
                  }`}
                >
                  <span>{skill.name}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-[#071A33]/15 text-[#071A33]'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {skill.category.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Skill Context Spotlight Card */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-lg font-bold text-[#071A33]">{selectedSkill.name}</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#F4B400]/20 text-[#071A33] font-semibold">
                  {selectedSkill.level}
                </span>
              </div>
              <p className="text-slate-600 text-sm mt-1">{selectedSkill.description}</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 text-xs font-mono font-bold text-[#123B67] hover:text-[#F4B400] flex items-center gap-1"
            >
              Discuss this skill
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#071A33] text-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F4B400] font-semibold bg-[#102B4C] px-3.5 py-1.5 rounded-full border border-white/10">
              DIRECT CONNECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-2">
              Contact Me
            </h2>
            <p className="text-slate-300 text-base">
              Let&apos;s connect and discuss opportunities, projects or business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Direct Contact Channels Card (Preserves original links + Copy to clipboard) */}
            <div className="lg:col-span-5 bg-[#102B4C] border border-white/10 rounded-2xl p-7 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                Direct Contact Details
              </h3>

              {/* WhatsApp Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">WhatsApp Direct</div>
                  <a
                    href={`https://wa.me/${PORTFOLIO_OWNER.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold font-mono text-[#F4B400] hover:underline flex items-center gap-1.5 mt-0.5"
                  >
                    {PORTFOLIO_OWNER.whatsappDisplay}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-slate-300 mt-1">
                    Fastest response for business, roles & inquiries
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4B400]/20 border border-[#F4B400]/40 text-[#F4B400] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-slate-400 uppercase">Email Address</div>
                  <a
                    href={`mailto:${PORTFOLIO_OWNER.email}`}
                    className="text-sm sm:text-base font-bold font-mono text-[#F4B400] hover:underline break-all block mt-0.5"
                  >
                    {PORTFOLIO_OWNER.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981]">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${PORTFOLIO_OWNER.whatsappNumber}?text=Hello%20Almasi,%20I%20visited%20your%20personal%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#F4B400] hover:bg-[#FFC928] text-[#071A33] font-bold text-base shadow-lg transition"
                >
                  <MessageCircle className="w-5 h-5 fill-[#071A33]" />
                  Send WhatsApp Message
                </a>
              </div>
            </div>

            {/* Right Interactive WhatsApp Message Composer */}
            <div className="lg:col-span-7 bg-[#102B4C] border border-white/10 rounded-2xl p-7 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Structured WhatsApp Inquiry Builder
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Customize your message topic and launch directly in WhatsApp
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#25D366]/20 text-[#25D366] font-semibold">
                  INSTANT CHAT
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Your Name / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins, Hiring Manager"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#071A33] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F4B400]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Select Inquiry Topic
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Finance / Data Analyst Opportunity',
                      'Inventory & Operations Project',
                      'Sales & Business Growth',
                      'General Networking & Connection',
                    ].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setInquiryTopic(topic)}
                        className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition cursor-pointer ${
                          inquiryTopic === topic
                            ? 'bg-[#F4B400]/20 border-[#F4B400] text-[#F4B400] font-semibold'
                            : 'bg-[#071A33]/60 border-white/10 text-slate-300 hover:bg-[#071A33]'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Brief Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Add a short message or question for Almasi..."
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#071A33] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F4B400]"
                  />
                </div>

                <div className="pt-2">
                  <a
                    href={generateWhatsAppURL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#22c35e] text-white font-bold text-base shadow-lg transition transform hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Launch WhatsApp with This Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Quick-Action Button */}
      <a
        href={`https://wa.me/${PORTFOLIO_OWNER.whatsappNumber}?text=Hello%20Almasi,%20I%20visited%20your%20website.`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with Almasi on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>

      {/* Footer */}
      <footer className="py-8 px-6 text-center bg-[#041122] text-[#AEBDCE] border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="font-display font-bold text-white">
            ALMASI IBRAHIM<span className="text-[#F4B400]">.</span>
          </div>
          <p>© {currentYear} Almasi Ibrahim. All Rights Reserved.</p>
          <div className="text-xs font-mono text-slate-400">
            Economics • Finance • Inventory • Data Science
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
