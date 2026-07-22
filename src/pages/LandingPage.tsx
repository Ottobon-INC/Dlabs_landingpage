import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageTransition, { type Lang } from '../components/LanguageTransition';
import {
  Search, CheckCircle2,
  AlertTriangle, Activity, Printer,
  ChevronDown,
  Command, Globe2, LockKeyhole,
  TrendingUp, Zap, Cpu, Send, CreditCard, Banknote, BrainCircuit,
  Building2, Stethoscope, Share2, Headset, ShieldCheck, RefreshCw, FileBadge,
  Users, GraduationCap
} from 'lucide-react';

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetLang, setTargetLang] = useState<Lang | null>(null);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);

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
          <path d="M 1440 0 L 800 0 C 800 0, 700 250, 950 450 C 1200 650, 700 700, 450 900 L 1440 900 Z" fill="url(#mainGradient)" />
          <path d="M 0 600 C 250 600, 400 700, 450 900 L 0 900 Z" fill="url(#leftGradient)" />
        </svg>
      </div>

      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="relative z-20 w-full px-4 sm:px-6 py-4 sm:py-8 lg:px-12 flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex items-center text-[#0a1f1e] font-serif text-2xl font-bold tracking-tight cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Activity className="w-8 h-8 mr-2 text-teal-600" />
            DLabs
          </div>
          <div className="hidden md:flex items-center gap-10 text-[#0a1f1e] font-semibold text-sm">
            <a href="#workflow" className="hover:text-teal-600 transition-colors">{t('nav.workflow')}</a>
            <a href="#modules" className="hover:text-teal-600 transition-colors">{t('nav.features')}</a>
            <a href="#roadmap" className="hover:text-teal-600 transition-colors">{t('nav.roadmap')}</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 bg-white/50 p-1 rounded-xl border border-teal-200 shadow-sm">
              <button
                onClick={() => switchLanguage('en')}
                className={`px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${i18n.language === 'en' ? 'bg-teal-600 text-white shadow-md scale-105' : 'text-teal-700 hover:bg-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => switchLanguage('te')}
                className={`px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${i18n.language === 'te' ? 'bg-teal-600 text-white shadow-md scale-105' : 'text-teal-700 hover:bg-white'}`}
              >
                TE
              </button>
            </div>
            <a href="/login" className="px-4 py-1.5 sm:px-8 sm:py-2 border-2 border-[#54c4b5] text-[#0a1f1e] font-bold rounded-[16px] sm:rounded-[20px] hover:bg-teal-50 transition-colors shadow-sm block text-center text-sm sm:text-base whitespace-nowrap">
              {t('nav.login')}
            </a>
          </div>
        </nav>

        {/* 1. Hero Section */}
        <section className="relative flex-1 flex flex-col justify-center overflow-hidden px-6 pb-20">
          <div className="max-w-[1400px] w-full mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-left max-w-xl">
                <motion.h1 variants={fadeInUp} className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] font-black text-[#0f3b39] mb-4 ${i18n.language === 'te' ? 'leading-[1.4]' : 'leading-[1.1]'}`}>
                  {i18n.language === 'te' ? (
                    <>మీరు పేషెంట్స్ పైన ఫోకస్ చేయండి. <br /><span className="text-[#3c8c83]">IT టెన్షన్ మేము చూసుకుంటాం.</span></>
                  ) : (
                    <>{t('hero.title1')} <br /><span className="text-[#3c8c83]">{t('hero.title2')}</span></>
                  )}
                </motion.h1>
                <motion.p variants={fadeInUp} className={`text-[15px] lg:text-[16px] text-[#0f3b39]/90 mb-8 max-w-[420px] ${i18n.language === 'te' ? 'leading-loose font-medium' : 'leading-relaxed font-semibold'}`}>
                  {i18n.language === 'te' ? 'సర్వర్లు, AMCలు, సాఫ్ట్వేర్ ట్రైనింగ్... ఈ తలనొప్పులు ఇక వద్దు. తెలుగులో సులువుగా వాడుకునే DLabs క్లౌడ్ సిస్టమ్కి మారండి. ఎక్స్ట్రా ఖర్చులు ఏమీ ఉండవు.' : t('hero.subtitle')}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <button className="px-6 py-3 sm:px-8 sm:py-3.5 bg-[#1b5853] hover:bg-[#13403c] text-[#4ac2b3] rounded-[16px] font-bold text-base sm:text-lg transition-all shadow-xl shadow-[#1b5853]/30 w-full sm:w-auto">
                    {t('hero.startFreeTrial')}
                  </button>
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full flex justify-center lg:justify-end">
                {/* Cost Comparison Graphic */}
                <div className="bg-white/80 backdrop-blur-md p-5 sm:p-8 rounded-3xl shadow-2xl border border-teal-100 flex flex-col items-center gap-4 sm:gap-6 relative w-full max-w-md mx-auto mt-8 lg:mt-0">
                  <div className="absolute -top-4 -right-2 sm:-right-4 bg-rose-500 text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg transform rotate-12">
                    {i18n.language === 'te' ? 'నో హిడెన్ ఫీజు' : t('hero.badge')}
                  </div>

                  {/* Old LIMS */}
                  <div className="w-full flex justify-between items-center bg-slate-50 p-5 rounded-2xl border border-slate-200 opacity-60 relative min-h-[96px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[110%] h-[3px] bg-rose-500/80 transform -rotate-6"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">Old LIMS</span>
                      <span className="text-slate-700 font-bold text-xs sm:text-sm max-w-[130px] leading-tight mt-0.5">{i18n.language === 'te' ? '+ AMC & సర్వర్ ఖర్చులు' : t('hero.oldLimsSubtitle')}</span>
                    </div>
                    <div className="text-slate-500 font-black text-2xl">₹6,000<span className="text-sm font-bold">/mo</span></div>
                  </div>

                  {/* vs */}
                  <div className="w-10 h-10 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-black text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-sm border-2 border-white z-10">
                    VS
                  </div>

                  {/* DLabs */}
                  <div className="w-full flex justify-between items-center bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-2xl border-2 border-teal-400 shadow-xl relative overflow-hidden min-h-[96px]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75"></div>

                    <div className="flex flex-col relative z-10">
                      <span className="text-teal-900 font-black text-xl tracking-tight">DLabs</span>
                      <span className="text-teal-700 font-bold text-xs sm:text-sm max-w-[130px] leading-tight mt-0.5">{i18n.language === 'te' ? 'ఆల్-ఇన్-వన్ క్లౌడ్' : t('hero.dlabsSubtitle')}</span>
                    </div>
                    <div className="text-teal-700 font-black text-4xl relative z-10">₹4,000<span className="text-base font-bold text-teal-600">/mo</span></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Biggest Selling Point – Cost Savings */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#35a999] to-[#1a9d8d] relative z-10 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,100 L0,50 Q25,25 50,50 T100,20 L100,100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-8 shadow-lg shadow-teal-900/20 backdrop-blur-sm">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 sm:mb-12">
              {t('tco.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center shadow-lg shadow-teal-900/10 hover:bg-white/15 transition-all">
                <Users className="w-8 h-8 text-white/90 mb-3" />
                <span className="text-2xl font-bold text-white mb-2">{t('tco.benefit1Title')}</span>
                <span className="text-white/80">{t('tco.benefit1Desc')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center shadow-lg shadow-teal-900/10 hover:bg-white/15 transition-all">
                <Zap className="w-8 h-8 text-amber-300 mb-3" />
                <span className="text-2xl font-bold text-white mb-2">{t('tco.benefit2Title')}</span>
                <span className="text-white/80">{t('tco.benefit2Desc')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex flex-col items-center justify-center text-center shadow-lg shadow-teal-900/10 hover:bg-white/15 transition-all">
                <GraduationCap className="w-8 h-8 text-white/90 mb-3" />
                <span className="text-2xl font-bold text-white mb-2">{t('tco.benefit3Title')}</span>
                <span className="text-white/80">{t('tco.benefit3Desc')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Ease of Use */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-blue-50 relative z-10 border-b border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-2 lg:order-1">
              <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden aspect-video relative flex items-center justify-center border-[6px] border-slate-800 group cursor-pointer hover:border-slate-700 transition-colors w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="flex flex-col items-center z-10 text-slate-400 group-hover:text-slate-300 transition-colors">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-all">
                    <svg className="w-8 h-8 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg tracking-wider text-white">30s Workflow Demo</span>
                  <span className="text-sm">Video / GIF Placeholder</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 mb-4 sm:mb-6 leading-tight">
                {t('easeOfUse.title')}
              </h2>
              <p className="text-base sm:text-lg text-blue-900/70 leading-relaxed font-medium">
                {t('easeOfUse.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Complete Laboratory Workflow */}
      <section id="workflow" className="py-16 md:py-24 px-4 sm:px-6 bg-[#f8f6f0] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-teal-950 mb-4 sm:mb-6">{t('workflow.title')}</h2>
            <p className="text-base sm:text-lg text-teal-700/80 font-medium">
              {t('workflow.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-12 border border-teal-100 shadow-xl shadow-teal-900/5 flex flex-col lg:flex-row gap-8 sm:gap-12 min-h-[600px]">
            {/* Left Menu */}
            <div className="lg:w-5/12 flex flex-col justify-center space-y-4 border-r border-teal-50 pr-0 lg:pr-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  onClick={() => setActiveWorkflowStep(step)}
                  className={`px-6 py-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 flex items-center ${activeWorkflowStep === step
                      ? 'bg-teal-50 border-teal-500 shadow-md transform scale-[1.02]'
                      : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black mr-4 ${activeWorkflowStep === step ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                    }`}>
                    {step}
                  </div>
                  <h3 className={`text-xl lg:text-xl font-black ${activeWorkflowStep === step ? 'text-teal-900' : 'text-slate-500'
                    }`}>
                    {t(`workflow.step${step}.title`).replace(/^\d+\.\s*/, '')}
                  </h3>
                </div>
              ))}
            </div>

            {/* Right Display */}
            <div className="lg:w-7/12 flex flex-col justify-center items-center">
              <motion.div
                key={activeWorkflowStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full flex flex-col gap-8"
              >
                <div className="bg-teal-900/5 p-6 lg:p-8 rounded-3xl border border-teal-100/50">
                  <h3 className="text-2xl font-black text-teal-950 mb-3">{t(`workflow.step${activeWorkflowStep}.title`)}</h3>
                  <p className="text-teal-800 text-lg font-medium leading-relaxed">{t(`workflow.step${activeWorkflowStep}.description`)}</p>
                </div>

                <div className="w-full flex justify-center">
                  {activeWorkflowStep === 1 && (
                    <div className="w-full bg-teal-50 p-8 rounded-[2rem] border border-teal-100/50 flex flex-col items-center justify-center min-h-[250px]">
                      <div className="w-full max-w-md">
                        {/* Smart Lookup Mock */}
                        <div className="flex items-center bg-white border border-teal-100 rounded-xl p-3 mb-4 shadow-sm">
                          <Search className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-teal-900 font-bold tracking-wider text-lg">98765 43210</span>
                        </div>
                        <div className="bg-white border border-teal-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
                          <div>
                            <h4 className="font-bold text-teal-950">Anjali Desai</h4>
                            <p className="text-xs font-semibold text-teal-700/60 mt-1">PID: 10442 • F • 32 Yrs</p>
                          </div>
                          <span className="bg-teal-50 text-teal-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center border border-teal-200">
                            <CheckCircle2 size={12} className="mr-1 text-teal-500" /> Auto-filled
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeWorkflowStep === 2 && (
                    <div className="w-full bg-emerald-50 p-6 sm:p-8 rounded-[2rem] border border-emerald-100/50 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center min-h-[250px]">
                      {/* ZEBRA mock */}
                      <div className="bg-white text-black p-4 rounded-xl shadow-lg shadow-teal-900/10 border border-teal-100">
                        <div className="flex justify-between items-start mb-2 border-b border-teal-200 pb-1">
                          <span className="font-extrabold text-xs uppercase tracking-widest text-teal-900">DLabs</span>
                          <span className="font-bold text-[10px] text-teal-600">10/07</span>
                        </div>
                        <div className="h-10 w-full flex items-center gap-0.5 justify-center mb-1 px-4">
                          <div className="w-1.5 h-full bg-teal-950" /><div className="w-0.5 h-full bg-teal-950" /><div className="w-2 h-full bg-teal-950" />
                          <div className="w-1 h-full bg-teal-950" /><div className="w-2.5 h-full bg-teal-950" />
                        </div>
                        <div className="text-center font-mono font-bold text-xs text-teal-900 mt-2">ACC-9921-A</div>
                      </div>
                      {/* Dropdown mock */}
                      <div className="bg-white border border-rose-200 rounded-xl p-3 shadow-md shadow-rose-900/5 flex flex-col">
                        <div className="flex justify-between items-center text-xs font-bold text-rose-900 mb-2 gap-4">
                          <span>Hemolyzed Specimen</span>
                          <ChevronDown size={14} className="text-rose-400" />
                        </div>
                        <div className="text-[10px] font-black tracking-widest text-center text-white bg-rose-500 px-2 py-1.5 rounded">REJECT SAMPLE</div>
                      </div>
                    </div>
                  )}

                  {activeWorkflowStep === 3 && (
                    <div className="w-full bg-rose-50 p-8 rounded-[2rem] border border-rose-100/50 flex flex-col items-center justify-center min-h-[250px]">
                      <div className="w-full max-w-md bg-white rounded-2xl p-4 shadow-sm border border-rose-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-teal-950">Hemoglobin (Hb)</span>
                          <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded">13.0 - 17.5 g/dL</span>
                        </div>
                        <div className="w-full border-2 border-rose-400 rounded-xl p-4 shadow-md shadow-rose-100 flex justify-between items-center relative overflow-hidden bg-rose-50/50">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500" />
                          <span className="font-black text-rose-600 text-3xl pl-3">7.8</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-white uppercase bg-rose-600 px-2 py-1 rounded-full shadow-sm">Critical Low</span>
                            <AlertTriangle className="text-rose-500 w-6 h-6 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeWorkflowStep === 4 && (
                    <div className="w-full bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100/50 flex flex-col items-center justify-center gap-6 min-h-[250px]">
                      <div className="flex gap-4">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-indigo-100 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer">
                          <Printer className="text-indigo-500 mb-2 w-8 h-8" />
                          <span className="text-xs font-bold text-indigo-900 uppercase tracking-widest">Print</span>
                        </div>
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-indigo-100 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer">
                          <Send className="text-indigo-500 mb-2 w-8 h-8" />
                          <span className="text-xs font-bold text-indigo-900 uppercase tracking-widest">Digital</span>
                        </div>
                      </div>
                      <div className="bg-indigo-600 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg shadow-indigo-600/30 border border-indigo-500 flex items-center gap-2">
                        <span>🔥</span> STAT Priority Ready
                      </div>
                    </div>
                  )}

                  {activeWorkflowStep === 5 && (
                    <div className="w-full bg-amber-50 p-8 rounded-[2rem] border border-amber-100/50 flex flex-col items-center justify-center min-h-[250px]">
                      <div className="w-full max-w-md bg-white border border-amber-100 rounded-xl p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                          <span className="px-2 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase rounded tracking-wider">TechCorp Inc. (B2B)</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-teal-900 border-b border-dashed border-teal-200 pb-3">
                          <span>Comprehensive Panel</span>
                          <span>₹3,000.00</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-emerald-700 bg-emerald-50 p-3 rounded-lg border border-emerald-100 mt-3">
                          <span>Corporate Discount (20%)</span>
                          <span>-₹600.00</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 mt-2">
                          <div className="flex gap-2 text-teal-600">
                            <CreditCard size={20} />
                            <Banknote size={20} />
                          </div>
                          <span className="text-2xl font-black text-teal-950">₹2,400.00</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Real-Time Finance & Admin Control */}
      <section id="modules" className="py-16 md:py-24 px-4 sm:px-6 relative z-10 border-t border-teal-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-950 mb-3 sm:mb-4">{t('financeAdmin.title')}</h2>
            <p className="text-base sm:text-lg text-teal-700/80">{t('financeAdmin.subtitle')}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-20">
            {/* Card 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white border-2 border-teal-400 rounded-[2rem] p-6 flex-1 max-w-[340px] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-teal-950 text-sm mb-8">{t('financeAdmin.telemetry')}</h4>
              <div className="flex justify-between text-[10px] font-bold mb-2">
                <span className="text-teal-600">{t('financeAdmin.collected')} - 96%</span>
                <span className="text-orange-500">{t('financeAdmin.pending')} - 4%</span>
              </div>
              <div className="h-2 w-full flex rounded-full overflow-hidden mb-8">
                <div className="h-full bg-teal-500" style={{ width: '96%' }}></div>
                <div className="h-full bg-orange-400" style={{ width: '4%' }}></div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-teal-600/70 font-bold uppercase tracking-wider mb-1">{t('financeAdmin.totalPaid')}</p>
                  <p className="text-2xl font-black text-teal-950">₹13,940</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-teal-600/70 font-bold uppercase tracking-wider mb-1">{t('financeAdmin.receivables')}</p>
                  <p className="text-xl font-black text-teal-950">₹553</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white border-2 border-teal-400 rounded-[2rem] p-6 flex-1 max-w-[340px] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-indigo-500/70" />
                <h4 className="font-bold text-teal-950 text-sm">{t('financeAdmin.b2b')}</h4>
              </div>
              <div className="bg-[#f8f7f5] rounded-2xl p-5 border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-teal-950 text-sm">{t('financeAdmin.cityHospital')}</span>
                  <span className="text-xs text-teal-600/70 font-bold">₹85k / ₹1L</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-orange-500" style={{ width: '85%' }}></div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-black text-orange-500 tracking-wider uppercase">{t('financeAdmin.warningReached')}</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white border-2 border-teal-400 rounded-[2rem] p-6 flex-1 max-w-[340px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <h4 className="font-bold text-teal-950 text-sm self-start mb-6">{t('financeAdmin.doctorCommission')}</h4>

              <div className="relative mb-10 mt-2">
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100">
                  <Stethoscope className="w-8 h-8 text-teal-500" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-teal-100 shadow-sm rounded-lg px-4 py-1.5 whitespace-nowrap">
                  <div className="text-teal-600 font-black text-sm">₹45k</div>
                  <div className="text-[8px] font-black text-teal-600/70 uppercase tracking-widest">{t('financeAdmin.payoutDue')}</div>
                </div>
              </div>

              <p className="text-[11px] text-teal-700/70 font-medium px-4">{t('financeAdmin.autoReferral')}</p>
            </motion.div>
          </div>

          {/* Bottom features row */}
          <div className="border-t border-teal-100/60 pt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 rounded-xl flex flex-col items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Command className="w-5 h-5 text-blue-500" />
              </div>
              <h4 className="text-slate-900 font-semibold text-lg mb-2">
                {i18n.language === 'te' ? 'గ్లోబల్ ఇన్స్టంట్ సెర్చ్' : 'Global Instant Search'}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {i18n.language === 'te' ? (
                  <>రోగులు, టెస్టులు మరియు బిల్లుల కోసం <kbd className="px-1.5 py-0.5 bg-white border border-teal-200 rounded text-teal-600 text-[10px] shadow-sm font-sans mx-0.5 font-bold inline-block align-middle">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-teal-200 rounded text-teal-600 text-[10px] shadow-sm font-sans mx-0.5 font-bold inline-block align-middle">K</kbd> నొక్కండి.</>
                ) : (
                  <>Press <kbd className="px-1.5 py-0.5 bg-white border border-teal-200 rounded text-teal-600 text-[10px] shadow-sm font-sans mx-0.5 font-bold inline-block align-middle">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-teal-200 rounded text-teal-600 text-[10px] shadow-sm font-sans mx-0.5 font-bold inline-block align-middle">K</kbd> to search across patients, tests, and bills instantly.</>
                )}
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 rounded-xl flex flex-col items-start">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5 text-green-500" />
              </div>
              <h4 className="text-slate-900 font-semibold text-lg mb-2">
                {i18n.language === 'te' ? 'మల్టీ-లాంగ్వేజ్ సపోర్ట్' : 'Multi-Language Support'}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {i18n.language === 'te' ? 'తెలుగు (te), హిందీ (hi), మరియు ఇంగ్లీష్ (en) భాషల సపోర్ట్.' : 'Accessible interfaces native in English (en), Telugu (te), and Hindi (hi).'}
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 rounded-xl flex flex-col items-start">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-5 h-5 text-amber-500" />
              </div>
              <h4 className="text-slate-900 font-semibold text-lg mb-2">
                {i18n.language === 'te' ? 'ఇన్స్ట్రుమెంట్ ఇంటిగ్రేషన్' : 'Instrument Integration'}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {i18n.language === 'te' ? 'HL7, Sysmex మరియు ROCHE-COBAS మెషీన్ల కనెక్టివిటీ.' : 'Seamless bi-directional HL7, Sysmex, and ROCHE-COBAS connectivity.'}
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 rounded-xl flex flex-col items-start">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <LockKeyhole className="w-5 h-5 text-purple-500" />
              </div>
              <h4 className="text-slate-900 font-semibold text-lg mb-2">
                {i18n.language === 'te' ? 'ఎంటర్ప్రైజ్ అడ్మిన్ కన్సోల్' : 'Enterprise Admin Console'}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {i18n.language === 'te' ? 'డాక్టర్లు, సెంటర్లు, యూజర్లు, అవుట్సోర్సింగ్ మరియు మార్కెటింగ్ మేనేజ్మెంట్.' : 'Comprehensive management for Doctors, Centers, Users, Outsourcing, and Marketing all in one secure pane.'}
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Localization and Support Phase 2 */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f8f7f5] relative z-10 border-t border-teal-100">
        <div className="max-w-7xl mx-auto">

          {/* Task 1: Bilingual Operations Split-Screen */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-xl mb-6 shadow-sm">
                <Globe2 className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-teal-950 mb-4 sm:mb-6 leading-tight">{t('localization.title')}</h3>
              <p className="text-base sm:text-lg text-teal-700/80 leading-relaxed">{t('localization.description')}</p>
            </div>

            <div className="relative">
              <div className="flex flex-col md:flex-row bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-teal-100 md:h-[380px]">
                {/* Left side: Telugu UI */}
                <div className="w-full md:w-1/2 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-4 sm:p-6 flex flex-col gap-4 relative h-[300px] md:h-auto">
                  <div className="absolute top-4 left-4 bg-teal-100 text-teal-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Staff UI (Telugu)</div>
                  <div className="mt-10 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div className="font-bold text-slate-800 text-sm mb-2">పేషెంట్ పేరు (Patient Name)</div>
                    <div className="h-10 bg-slate-100 rounded-lg w-full border border-slate-200 flex items-center px-3">
                      <span className="text-slate-400 text-xs">పేరు నమోదు చేయండి...</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div className="font-bold text-slate-800 text-sm mb-2">టెస్ట్ ఎంచుకోండి (Select Test)</div>
                    <div className="h-10 bg-slate-100 rounded-lg w-full border border-slate-200 flex items-center px-3 justify-between">
                      <span className="text-slate-400 text-xs">టెస్ట్ వెతకండి...</span>
                      <ChevronDown size={14} className="text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Right side: English PDF */}
                <div className="w-full md:w-1/2 bg-[#e2e8f0] p-4 sm:p-6 flex flex-col items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] min-h-[300px] md:min-h-0">
                  <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">Doctor Report (EN)</div>

                  <div className="w-full h-full bg-white border border-slate-300 shadow-lg flex flex-col p-5 relative z-0 origin-center transform scale-95 rotate-1">
                    <div className="flex justify-between items-end border-b-2 border-teal-800 pb-3 mb-4">
                      <div>
                        <div className="font-black text-teal-900 text-xs uppercase tracking-widest mb-1">DLabs Diagnostics</div>
                        <div className="text-[8px] text-slate-500">123 Health Ave, City</div>
                      </div>
                      <Activity className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="text-[9px] text-slate-600 font-medium">Patient: <span className="font-bold text-slate-800">Mr. Ramesh K</span></div>
                      <div className="text-[9px] text-slate-600 font-medium text-right">Date: <span className="font-bold text-slate-800">15-Jul-2026</span></div>
                      <div className="text-[9px] text-slate-600 font-medium">Age/Sex: <span className="font-bold text-slate-800">45 Y / M</span></div>
                      <div className="text-[9px] text-slate-600 font-medium text-right">Ref By: <span className="font-bold text-slate-800">Dr. Sharma</span></div>
                    </div>
                    <div className="text-center font-bold text-[10px] bg-slate-100 py-1 mb-4 border-y border-slate-200 uppercase">Complete Blood Count</div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex justify-between text-[8px] font-bold text-slate-400 border-b border-slate-100 pb-1">
                        <span>TEST</span><span>RESULT</span><span>REF RANGE</span>
                      </div>
                      <div className="flex justify-between text-[9px] font-medium text-slate-700">
                        <span>Hemoglobin</span><span className="font-bold">14.2</span><span className="text-slate-400">13.0-17.0</span>
                      </div>
                      <div className="flex justify-between text-[9px] font-medium text-slate-700">
                        <span>WBC Count</span><span className="font-bold">6,500</span><span className="text-slate-400">4k-10k</span>
                      </div>
                      <div className="flex justify-between text-[9px] font-medium text-slate-700">
                        <span>Platelets</span><span className="font-bold">2.5L</span><span className="text-slate-400">1.5L-4.0L</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Task 2: Customer Care Block */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-gradient-to-br from-[#1e3a8a] to-[#312e81] rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-screen filter blur-[80px] opacity-30"></div>

            <div className="flex-1 relative z-10 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 leading-tight text-white drop-shadow-sm">{t('support.title')}</h3>
              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-medium">{t('support.description')}</p>
            </div>

            <div className="flex-1 flex justify-center relative z-10 w-full lg:w-auto">
              <div className="relative mt-8 lg:mt-0">
                <div className="w-56 h-56 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-2xl">
                  {/* Support Agent Icon */}
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-inner relative">
                    <div className="absolute inset-2 border-2 border-dashed border-indigo-100 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <Headset className="w-20 h-20 text-indigo-600 relative z-10 drop-shadow-md" />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 lg:-right-10 bg-amber-400 text-amber-950 font-black px-4 sm:px-6 py-2 sm:py-3.5 rounded-full shadow-2xl transform rotate-3 flex items-center gap-2 border-4 border-white hover:rotate-0 transition-transform">
                  <Zap className="w-4 h-4 sm:w-6 sm:h-6 fill-amber-950" />
                  <span className="tracking-wide text-xs sm:text-base whitespace-nowrap">Same-Day Resolution</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Task 1: Bank-Grade Stability & Compliance */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50 relative z-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-2 lg:order-1">
              <div className="flex flex-col gap-6">
                {/* Badge 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 group hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border-4 border-emerald-100 flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <ShieldCheck className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Zero Data Loss Guarantee</h4>
                    <p className="text-sm text-slate-600">Local-caching protects entries during internet drops.</p>
                  </div>
                </div>
                {/* Badge 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 group hover:shadow-md transition-all translate-x-0 lg:translate-x-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-4 border-blue-100 flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <RefreshCw className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Conflict-Free Syncing</h4>
                    <p className="text-sm text-slate-600">Perfect patient ID management during peak load.</p>
                  </div>
                </div>
                {/* Badge 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-6 group hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center border-4 border-indigo-100 flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                    <FileBadge className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Govt. Data Compliant</h4>
                    <p className="text-sm text-slate-600">Meets Indian digital health security standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center p-3 bg-slate-200/50 rounded-xl mb-6 shadow-sm">
                <LockKeyhole className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
                {t('stability.title')}
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                {t('stability.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Task 2: Future Roadmap Redesign */}
      <section id="roadmap" className="py-20 md:py-32 px-4 sm:px-6 bg-[#0f172a] relative z-10 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="absolute -right-40 bottom-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6 text-blue-400 font-bold text-sm tracking-wider uppercase">
              Coming Soon
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">{t('roadmap.title')}</h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">{t('roadmap.subtitle')}</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2"></div>

            {/* Phase 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 group">
              <div className="md:w-5/12 order-2 md:order-1 pl-12 md:pl-0 md:text-right w-full">
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 shadow-2xl hover:border-blue-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">{t('roadmap.timeline1')}</h3>
                  <p className="text-slate-400">{t('roadmap.timeline1Desc')}</p>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-slate-900 border-4 border-blue-500 rounded-full transform md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 order-1 md:order-2"></div>

              <div className="md:w-5/12 order-3 hidden md:flex justify-start">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl border border-blue-500/30 flex items-center justify-center ml-8">
                  <Cpu className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
              <div className="md:w-5/12 order-3 md:order-1 hidden md:flex justify-end">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl border border-purple-500/30 flex items-center justify-center mr-8">
                  <BrainCircuit className="w-8 h-8 text-purple-400" />
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-slate-900 border-4 border-purple-500 rounded-full transform md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10 order-1 md:order-2"></div>

              <div className="md:w-5/12 order-2 md:order-3 pl-12 md:pl-0 w-full">
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 shadow-2xl hover:border-purple-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">{t('roadmap.timeline2')}</h3>
                  <p className="text-slate-400">{t('roadmap.timeline2Desc')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0a1f1e] text-center border-t border-teal-900">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Activity className="w-12 h-12 text-teal-500 mb-6" />
          <h2 className="text-2xl md:text-3xl font-serif text-teal-50 mb-8 max-w-lg">
            "{t('footer.slogan')}"
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-6 mb-8 text-teal-400 font-semibold text-sm md:text-base">
            <a href="https://dlabs.medcytech.com/login" className="hover:text-white transition-colors">dlabs.medcytech.com/login</a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:developer@medcytech.com" className="hover:text-white transition-colors">developer@medcytech.com</a>
          </div>
          <p className="text-teal-700 text-sm">
            DLabs LIMS Ac {new Date().getFullYear()}. {t('footer.rightsReserved')}
          </p>
        </div>
      </footer>

    </div>
  );
}