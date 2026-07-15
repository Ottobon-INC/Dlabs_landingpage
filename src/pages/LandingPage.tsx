import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import MedicalMonitor from '../components/MedicalMonitor';
import LanguageTransition, { type Lang } from '../components/LanguageTransition';
import { 
  Search, ShieldCheck, CheckCircle2, 
  AlertTriangle, Activity, Printer, FileCheck, 
  Layers, ChevronDown, Building2, Stethoscope,
  Command, Globe2, Webhook, LockKeyhole, FileWarning, TestTube, TableProperties, Calculator, TrendingDown, BookOpen, PhoneCall
} from 'lucide-react';

export default function LandingPage() {
  const [walkins, setWalkins] = useState(50);
  const { t, i18n } = useTranslation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetLang, setTargetLang] = useState<Lang | null>(null);

  const switchLanguage = (lang: Lang) => {
    if (i18n.language === lang) return;
    setTargetLang(lang);
    setIsTransitioning(true);
    
    setTimeout(() => {
      i18n.changeLanguage(lang);
    }, 400);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  };

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const painPoints = [
    {
      title: t('painPoints.points.0.title'),
      description: t('painPoints.points.0.description'),
      icon: <FileWarning className="w-6 h-6 text-rose-500" />
    },
    {
      title: t('painPoints.points.1.title'),
      description: t('painPoints.points.1.description'),
      icon: <TestTube className="w-6 h-6 text-rose-500" />
    },
    {
      title: t('painPoints.points.2.title'),
      description: t('painPoints.points.2.description'),
      icon: <TableProperties className="w-6 h-6 text-rose-500" />
    },
    {
      title: t('painPoints.points.3.title'),
      description: t('painPoints.points.3.description'),
      icon: <Calculator className="w-6 h-6 text-rose-500" />
    },
    {
      title: t('painPoints.points.4.title'),
      description: t('painPoints.points.4.description'),
      icon: <TrendingDown className="w-6 h-6 text-rose-500" />
    },
    {
      title: t('painPoints.points.5.title'),
      description: t('painPoints.points.5.description'),
      icon: <BookOpen className="w-6 h-6 text-rose-500" />
    },
    {
      title: t('painPoints.points.6.title'),
      description: t('painPoints.points.6.description'),
      icon: <PhoneCall className="w-6 h-6 text-rose-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-teal-950 font-sans selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden relative z-0">
      
      <LanguageTransition isTransitioning={isTransitioning} targetLang={targetLang} />

      {/* Exact Vector Background from Mockup */}
      <div className="absolute top-0 left-0 w-full h-[1100px] overflow-hidden -z-10 pointer-events-none">
        <svg viewBox="0 0 1440 900" className="w-full h-full object-cover" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e8cfb8" />
              <stop offset="35%" stopColor="#a3d2c8" />
              <stop offset="75%" stopColor="#35a999" />
              <stop offset="100%" stopColor="#1a9d8d" />
            </linearGradient>
            <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c3d5cd" />
              <stop offset="100%" stopColor="#81c4ba" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="#ffffff" />
          
          {/* Right massive fluid shape */}
          <path d="M 1440 0 L 800 0 C 800 0, 700 250, 950 450 C 1200 650, 700 700, 450 900 L 1440 900 Z" fill="url(#mainGradient)" />
          
          {/* Left bottom shape behind monitor */}
          <path d="M 0 600 C 250 600, 400 700, 450 900 L 0 900 Z" fill="url(#leftGradient)" />
        </svg>
      </div>

      {/* Navbar & Hero Container (100vh) */}
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="relative z-20 w-full px-6 py-8 lg:px-12 flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex items-center text-[#0a1f1e] font-serif text-2xl font-bold tracking-tight cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Activity className="w-8 h-8 mr-2 text-teal-600" />
            DLabs
          </div>
          <div className="hidden md:flex items-center gap-10 text-[#0a1f1e] font-semibold text-sm">
            <a href="#pain-points" className="hover:text-teal-600 transition-colors">{t('nav.painPoints')}</a>
            <a href="#features" className="hover:text-teal-600 transition-colors">{t('nav.features')}</a>
            <a href="#roi-calculator" className="hover:text-teal-600 transition-colors">{t('nav.roiCalculator')}</a>
            <a href="#finance" className="hover:text-teal-600 transition-colors">{t('nav.finance')}</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/50 p-1 rounded-xl border border-teal-200 shadow-sm">
              <button 
                onClick={() => switchLanguage('en')}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-300 ${i18n.language === 'en' ? 'bg-teal-600 text-white shadow-md scale-105' : 'text-teal-700 hover:bg-white'}`}
              >
                English
              </button>
              <button 
                onClick={() => switchLanguage('te')}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-300 ${i18n.language === 'te' ? 'bg-teal-600 text-white shadow-md scale-105' : 'text-teal-700 hover:bg-white'}`}
              >
                Telugu
              </button>
            </div>
            <button className="px-8 py-2 border-2 border-[#54c4b5] text-[#0a1f1e] font-bold rounded-[20px] hover:bg-teal-50 transition-colors shadow-sm">
              {t('nav.bookDemo')}
            </button>
          </div>
        </nav>

        {/* 1. Hero Section */}
        <section className="relative flex-1 flex flex-col justify-center overflow-hidden px-6 pb-20">
          <div className="max-w-[1400px] w-full mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left: Medical Monitor Graphic */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full flex justify-center lg:justify-end"
              >
                <MedicalMonitor />
              </motion.div>
              
              {/* Right: Text Content */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={staggerContainer}
                className="text-left max-w-xl"
              >
                <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl xl:text-[3.2rem] font-black text-[#0f3b39] leading-[1.1] mb-4">
                  {t('hero.title1')} <br/>
                  <span className="text-[#3c8c83]">{t('hero.title2')}</span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-[15px] lg:text-[16px] text-[#0f3b39]/90 mb-8 font-semibold leading-relaxed max-w-[420px]">
                  {t('hero.subtitle')}
                </motion.p>
                
                <motion.div variants={fadeInUp}>
                  <button className="px-8 py-3.5 bg-[#1b5853] hover:bg-[#13403c] text-[#4ac2b3] rounded-[16px] font-bold text-lg transition-all shadow-xl shadow-[#1b5853]/30">
                    {t('hero.startFreeTrial')}
                  </button>
                </motion.div>
              </motion.div>
              
            </div>
          </div>
        </section>
      </div>

      {/* 1.5 The Chaos of a Disconnected Lab */}
      <section id="pain-points" className="py-24 px-6 bg-[#f8f6f0] relative z-10 border-b border-teal-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-teal-950 mb-6">
              {t('painPoints.title')}
            </h2>
            <p className="mt-4 text-lg text-teal-700/80 max-w-2xl mx-auto">
              {t('painPoints.subtitle')}
            </p>
          </div>

          {/* Pain points grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/70 backdrop-blur-md p-6 rounded-[2rem] border-2 border-teal-400 shadow-xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 hover:-translate-y-1 transition-all ${index === 6 ? 'md:col-span-2 lg:col-span-4 xl:col-span-1' : ''}`}
              >
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-4 border border-rose-100 text-rose-500">
                  {point.icon}
                </div>
                <h4 className="font-bold text-teal-900 mb-2">{point.title}</h4>
                <p className="text-sm text-teal-700/70">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Front Desk Superpowers */}
      <section id="features" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-teal-950 mb-6">{t('features.title')}</h2>
            <p className="text-lg text-teal-700/80 leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Smart Lookup */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border-2 border-teal-400 shadow-2xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all"
            >
              <h3 className="text-2xl font-bold text-teal-950 mb-3">{t('features.smartLookup.title')}</h3>
              <p className="text-teal-700/80 mb-10">
                {t('features.smartLookup.description')}
              </p>
              
              <div className="bg-[#f8f6f0] p-6 rounded-[2rem] shadow-inner border border-teal-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/40 rounded-full blur-2xl" />
                <motion.div 
                  className="relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="flex items-center bg-white border border-teal-100 rounded-xl p-3 mb-6 shadow-sm">
                    <Search className="w-5 h-5 text-teal-500 mr-3" />
                    <span className="text-teal-900 font-bold tracking-wider text-lg flex">
                      {"98765 43210".split('').map((char, i) => (
                        <motion.span 
                          key={i} 
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { delay: 0.5 + i * 0.15 } }
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      ))}
                    </span>
                    <motion.div 
                      variants={{
                        hidden: { opacity: 1 },
                        visible: { opacity: 0, transition: { delay: 0.5 + 11 * 0.15 } }
                      }}
                      className="ml-auto flex gap-1"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" />
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { delay: 0.5 + 11 * 0.15 + 0.3 } }
                    }}
                    className="bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center justify-between shadow-sm"
                  >
                    <div>
                      <h4 className="font-bold text-teal-950">Anjali Desai</h4>
                      <p className="text-xs font-semibold text-teal-700/60 mt-1">PID: 10442 • F • 32 Yrs</p>
                    </div>
                    <span className="bg-white text-teal-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center border border-teal-200 shadow-sm">
                      <CheckCircle2 size={12} className="mr-1 text-teal-500" /> {t('features.smartLookup.badge')}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Auto B2B Discount Engine */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border-2 border-teal-400 shadow-2xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all flex flex-col"
            >
              <h3 className="text-2xl font-bold text-teal-950 mb-3">{t('features.discountEngine.title')}</h3>
              <p className="text-teal-700/80 mb-10">
                {t('features.discountEngine.description')}
              </p>
              
              <div className="bg-[#f8f6f0] p-6 rounded-[2rem] shadow-inner border border-teal-100/50 mt-auto">
                <div className="bg-white border border-teal-100 rounded-xl p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 text-[10px] font-bold uppercase rounded tracking-wider">TechCorp Inc.</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-teal-900 border-b border-dashed border-teal-200 pb-3">
                    <span>{t('features.discountEngine.panel')}</span>
                    <span>₹3,000.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-emerald-700 bg-emerald-50 p-3 rounded-lg border border-emerald-100 mt-3">
                    <span>{t('features.discountEngine.discount')}</span>
                    <span>-₹600.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-black text-teal-950 pt-2 mt-2">
                    <span>{t('features.discountEngine.totalDue')}</span>
                    <span>₹2,400.00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Foolproof Sample Accession */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-teal-950 mb-4">{t('sampleAccession.title')}</h2>
            <p className="text-lg text-teal-700/80">{t('sampleAccession.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border-2 border-teal-400 shadow-xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all text-center">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-teal-100">
                <Printer size={28} />
              </div>
              <h3 className="text-xl font-bold text-teal-950 mb-3">{t('sampleAccession.barcode.title')}</h3>
              <p className="text-teal-700/80 text-sm mb-8">{t('sampleAccession.barcode.description')}</p>
              
              {/* ZEBRA mock */}
              <div className="bg-white text-black p-4 rounded-xl inline-block text-left shadow-lg shadow-teal-900/10 rotate-3 transform transition-transform hover:rotate-0 hover:scale-105 duration-300 border border-teal-100">
                <div className="flex justify-between items-start mb-2 border-b border-teal-200 pb-1">
                  <span className="font-extrabold text-xs uppercase tracking-widest text-teal-900">DLabs</span>
                  <span className="font-bold text-[10px] text-teal-600">10/07/26</span>
                </div>
                <div className="h-10 w-full flex items-center gap-0.5 justify-center mb-1">
                  <div className="w-1.5 h-full bg-teal-950" /><div className="w-0.5 h-full bg-teal-950" /><div className="w-2 h-full bg-teal-950" />
                  <div className="w-1 h-full bg-teal-950" /><div className="w-2.5 h-full bg-teal-950" /><div className="w-0.5 h-full bg-teal-950" />
                  <div className="w-1.5 h-full bg-teal-950" /><div className="w-1 h-full bg-teal-950" /><div className="w-2 h-full bg-teal-950" />
                </div>
                <div className="text-center font-mono font-bold text-xs text-teal-900 mt-2">ACC-9921-A</div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border-2 border-teal-400 shadow-xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all text-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                <FileCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-teal-950 mb-3">{t('sampleAccession.auditTrail.title')}</h3>
              <p className="text-teal-700/80 text-sm mb-8">{t('sampleAccession.auditTrail.description')}</p>
              
              {/* Dropdown mock */}
              <div className="text-left w-full max-w-[240px] mx-auto bg-white border border-teal-200 rounded-xl p-3 shadow-md shadow-teal-900/5">
                <div className="flex justify-between items-center text-sm font-bold text-teal-900 mb-1">
                  <span>{t('sampleAccession.auditTrail.specimen')}</span>
                  <ChevronDown size={16} className="text-teal-400" />
                </div>
                <div className="mt-2 pt-2 border-t border-teal-100 flex items-center gap-2">
                  <div className="text-[10px] font-black tracking-widest text-white bg-rose-500 px-2 py-1 rounded">{t('sampleAccession.auditTrail.reject')}</div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border-2 border-teal-400 shadow-xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all text-center">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-100">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-bold text-teal-950 mb-3">{t('sampleAccession.bulkCollection.title')}</h3>
              <p className="text-teal-700/80 text-sm mb-8">{t('sampleAccession.bulkCollection.description')}</p>
              
              <div className="inline-flex flex-col gap-2">
                <div className="h-2 w-32 bg-teal-100 rounded-full mx-auto" />
                <div className="h-2 w-24 bg-teal-100 rounded-full mx-auto" />
                <div className="mt-2 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg shadow-indigo-600/20">
                  {t('sampleAccession.bulkCollection.acceptAll')}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. The Clinical Safety Net */}
      <section className="py-24 px-6 relative z-10 border-t border-teal-100/50 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-teal-950 mb-6">
              {t('clinicalSafety.title')}
            </h2>
            <p className="text-lg lg:text-xl text-teal-700/90 leading-relaxed">
              <Trans i18nKey="clinicalSafety.description" components={{ 1: <strong /> }} />
            </p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-[2.5rem] shadow-2xl shadow-teal-500/10 border-2 border-teal-400 hover:border-teal-500 hover:shadow-teal-500/20 transition-all overflow-hidden relative"
          >
            <div className="bg-teal-50 border-b border-teal-100 p-4 text-left flex items-center gap-2">
              <Activity className="text-teal-600 w-5 h-5" />
              <span className="font-bold text-teal-900">{t('clinicalSafety.consoleTitle')}</span>
            </div>
            
            <div className="p-8">
              {/* Table Header mock */}
              <div className="grid grid-cols-4 gap-4 pb-3 border-b border-teal-100 text-xs font-bold text-teal-600 uppercase tracking-wider text-left mb-6">
                <div className="col-span-1">{t('clinicalSafety.table.parameter')}</div>
                <div className="col-span-1">{t('clinicalSafety.table.refRange')}</div>
                <div className="col-span-1">{t('clinicalSafety.table.unit')}</div>
                <div className="col-span-1">{t('clinicalSafety.table.observedValue')}</div>
              </div>

              {/* Glowing Red Row Mock */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-rose-50 rounded-2xl -z-10" />
                <div className="grid grid-cols-4 gap-4 items-center text-left">
                  
                  <div className="col-span-1 flex items-center">
                    <span className="font-bold text-teal-950 text-lg">{t('clinicalSafety.hemoglobin')}</span>
                  </div>
                  
                  <div className="col-span-1">
                    <span className="bg-white border border-teal-100 px-3 py-1.5 rounded-lg text-teal-700 font-mono text-sm font-medium shadow-sm">
                      13.0 - 17.5
                    </span>
                  </div>

                  <div className="col-span-1 font-medium text-teal-600">
                    g/dL
                  </div>
                  
                  <div className="col-span-1 relative">
                    <div className="bg-white w-full border-2 border-rose-400 rounded-xl p-3 shadow-md shadow-rose-100 flex justify-between items-center relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500" />
                      <span className="font-black text-rose-600 text-xl pl-2">7.8</span>
                      <AlertTriangle className="text-rose-500 w-5 h-5 animate-pulse" />
                    </div>
                    {/* Critical Badge floating */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                       <span className="text-[10px] font-black text-white uppercase bg-rose-600 px-2 py-0.5 rounded-full shadow-sm">
                          {t('clinicalSafety.criticalLow')}
                       </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Interactive ROI Calculator Section */}
      <section id="roi-calculator" className="py-24 px-6 relative overflow-hidden z-10">
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-teal-950 mb-4">{t('roiCalculator.title')}</h2>
            <p className="text-lg text-teal-700/80">{t('roiCalculator.subtitle')}</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 lg:p-12 border-2 border-teal-400 shadow-2xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <label className="block text-teal-900 text-sm font-bold mb-4">
                  {t('roiCalculator.averageWalkins')} <span className="text-teal-600 text-2xl ml-2 font-black">{walkins}</span>
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  step="10"
                  value={walkins}
                  onChange={(e) => setWalkins(Number(e.target.value))}
                  className="w-full h-2 bg-teal-100 rounded-lg appearance-none cursor-pointer accent-teal-500 hover:accent-teal-400 focus:outline-none"
                />
                
                <div className="mt-8 space-y-4">
                   <div className="bg-[#f8f6f0] p-4 rounded-2xl border border-teal-100">
                     <p className="text-teal-700/80 text-sm mb-1">{t('roiCalculator.manualEntry')}</p>
                     <p className="text-teal-900 font-medium"><strong className="text-teal-950 text-lg">{Math.round((walkins * 8) / 60)}</strong> {t('roiCalculator.hoursDay')}</p>
                   </div>
                   <div className="bg-teal-50 p-4 rounded-2xl border border-teal-200 shadow-sm">
                     <p className="text-teal-700/80 text-sm mb-1">{t('roiCalculator.smartLookup')}</p>
                     <p className="text-teal-600 font-medium"><strong className="text-teal-700 text-lg">{(walkins * 1) / 60 < 1 ? '< 1' : Math.round((walkins * 1) / 60)}</strong> {t('roiCalculator.hourDay')}</p>
                   </div>
                </div>
              </div>

              <div className="bg-teal-600 rounded-[2rem] p-6 border border-teal-500 text-center flex flex-col justify-center h-full shadow-lg shadow-teal-600/20 text-white">
                 <h4 className="text-teal-100 text-xs font-bold uppercase tracking-wider mb-2">{t('roiCalculator.monthlySaved')}</h4>
                 <div className="text-6xl font-black mb-6">
                    {Math.round(((walkins * 7) / 60) * 26)} <span className="text-2xl text-teal-200 font-bold ml-1">{t('roiCalculator.hrs')}</span>
                 </div>
                 <div className="bg-white/20 text-white font-semibold text-sm py-2 px-4 rounded-full inline-block border border-white/30 mx-auto">
                    ≈ {Math.max(1, Math.round((((walkins * 7) / 60) * 26) / 160))} {t('roiCalculator.fte')}
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Real-Time Finance & Admin Control */}
      <section id="finance" className="py-24 px-6 border-t border-teal-100/50 bg-white/30 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-teal-950 mb-4">{t('finance.title')}</h2>
            <p className="text-lg text-teal-700/80">{t('finance.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white rounded-[2rem] p-8 border-2 border-teal-400 shadow-xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all flex flex-col justify-center">
              <h3 className="font-bold text-teal-950 mb-6">{t('finance.telemetry.title')}</h3>
              
              <div className="w-full space-y-4">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-emerald-600">{t('finance.telemetry.collected')} (96%)</span>
                  <span className="text-amber-500">{t('finance.telemetry.pending')} (4%)</span>
                </div>
                <div className="w-full h-3 bg-teal-50 rounded-full overflow-hidden flex border border-teal-100">
                  <div className="w-[96%] h-full bg-emerald-500" />
                  <div className="w-[4%] h-full bg-amber-400" />
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-teal-100/50">
                  <div>
                    <p className="text-[10px] text-teal-600/70 uppercase tracking-wider font-bold">{t('finance.telemetry.totalPaid')}</p>
                    <p className="text-lg font-black text-teal-950">₹13,940</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-teal-600/70 uppercase tracking-wider font-bold">{t('finance.telemetry.receivables')}</p>
                    <p className="text-lg font-black text-teal-950">₹553</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white rounded-[2rem] p-8 border-2 border-teal-400 shadow-xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all flex flex-col justify-center">
              <h3 className="font-bold text-teal-950 mb-6 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-indigo-500" />
                {t('finance.creditLimits.title')}
              </h3>
              
              <div className="bg-[#f8f6f0] p-4 rounded-2xl shadow-inner border border-teal-100/50 w-full">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-teal-900">City Hospital</span>
                  <span className="text-xs font-semibold text-teal-700/70">₹85k / ₹1L</span>
                </div>
                <div className="w-full h-2.5 bg-teal-100 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-amber-500 rounded-full" />
                </div>
                <p className="text-[10px] text-amber-600 font-bold uppercase mt-2 text-right">{t('finance.creditLimits.warning')}</p>
              </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white rounded-[2rem] p-8 border-2 border-teal-400 shadow-xl shadow-teal-500/10 hover:border-teal-500 hover:shadow-teal-500/20 transition-all flex flex-col items-center justify-center text-center">
              <h3 className="font-bold text-teal-950 mb-6">{t('finance.commission.title')}</h3>
              
              <div className="relative">
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border border-teal-100">
                  <Stethoscope className="w-10 h-10 text-teal-500" />
                </div>
                {/* Floating badge */}
                <div className="absolute -right-4 -bottom-2 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-teal-100 z-20">
                  <span className="text-xs font-black text-emerald-600 block leading-tight">₹45k</span>
                  <span className="text-[9px] font-bold text-teal-600/70 uppercase tracking-widest">{t('finance.commission.payoutDue')}</span>
                </div>
              </div>
              <p className="text-sm text-teal-700/80 font-medium mt-4">{t('finance.commission.referralMgmt')}</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Platform-Level Superpowers */}
      <section className="py-20 px-6 relative z-10 border-t border-teal-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-100 shadow-sm">
                <Command size={24} />
              </div>
              <h4 className="font-bold text-lg text-teal-950">{t('superpowers.search.title')}</h4>
              <p className="text-teal-700/80 text-sm leading-relaxed">
                <Trans i18nKey="superpowers.search.description" components={{ 1: <kbd className="bg-white border border-teal-200 px-1.5 py-0.5 rounded text-xs font-bold shadow-sm" />, 2: <kbd className="bg-white border border-teal-200 px-1.5 py-0.5 rounded text-xs font-bold shadow-sm" /> }} />
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100 shadow-sm">
                <Globe2 size={24} />
              </div>
              <h4 className="font-bold text-lg text-teal-950">{t('superpowers.language.title')}</h4>
              <p className="text-teal-700/80 text-sm leading-relaxed">{t('superpowers.language.description')}</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-100 shadow-sm">
                <Webhook size={24} />
              </div>
              <h4 className="font-bold text-lg text-teal-950">{t('superpowers.integration.title')}</h4>
              <p className="text-teal-700/80 text-sm leading-relaxed">{t('superpowers.integration.description')}</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 border border-purple-100 shadow-sm">
                <LockKeyhole size={24} />
              </div>
              <h4 className="font-bold text-lg text-teal-950">{t('superpowers.adminConsole.title')}</h4>
              <p className="text-teal-700/80 text-sm leading-relaxed">{t('superpowers.adminConsole.description')}</p>
            </div>

          </div>
          
          <div className="mt-20 pt-8 border-t border-teal-200 text-center text-teal-600 text-sm font-medium">
            <p className="flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 mr-2" />
              DLabs LIMS Ac {new Date().getFullYear()}. {t('superpowers.rightsReserved')}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
