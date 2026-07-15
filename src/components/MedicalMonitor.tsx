import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MedicalMonitor() {
  const [vitals, setVitals] = useState({
    hr: 56,
    bp: 146,
    spo2: 76,
    rr: 36
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(prev => ({
        hr: Math.max(40, Math.min(80, prev.hr + Math.floor(Math.random() * 5) - 2)),
        bp: Math.max(120, Math.min(180, prev.bp + Math.floor(Math.random() * 5) - 2)),
        spo2: Math.max(60, Math.min(100, prev.spo2 + Math.floor(Math.random() * 3) - 1)),
        rr: Math.max(20, Math.min(50, prev.rr + Math.floor(Math.random() * 3) - 1)),
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[480px] aspect-[4/3] mx-auto filter drop-shadow-2xl">
      {/* Outer Shell */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fad6c4] to-[#f4ae8b] rounded-[2.5rem] shadow-2xl border-b-[20px] border-[#dc8f68] flex flex-col items-center p-5 pt-8">
        
        {/* Top Vent / Handle */}
        <div className="w-40 h-2.5 bg-[#d48965] rounded-full mb-6 shadow-inner" />
        
        {/* Screen Bezel */}
        <div className="w-full h-full bg-[#1b3f46] rounded-2xl p-3 relative shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)] flex">
          
          {/* Screen Content */}
          <div className="flex-1 bg-[#233f4a] rounded-xl border-2 border-[#547983] relative overflow-hidden flex flex-col">
            {/* Grid Lines Overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
              style={{ 
                backgroundImage: 'linear-gradient(#a3c5d0 1px, transparent 1px), linear-gradient(90deg, #a3c5d0 1px, transparent 1px)', 
                backgroundSize: '24px 24px',
                backgroundPosition: 'center center'
              }}
            />
            
            {/* Wave 1 */}
            <div className="flex-1 flex items-center border-b-2 border-[#547983] relative z-10 px-2">
               <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible stroke-[#44c3b2] stroke-[1.5] fill-none drop-shadow-[0_0_2px_#44c3b2]">
                 <motion.path 
                   d="M 0 10 L 20 10 L 23 5 L 28 15 L 35 2 L 40 18 L 45 10 L 100 10" 
                   strokeLinecap="round" strokeLinejoin="round" 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                 />
               </svg>
            </div>
            
            {/* Wave 2 */}
            <div className="flex-1 flex items-center border-b-2 border-[#547983] relative z-10 px-2">
               <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible stroke-[#44c3b2] stroke-[1.5] fill-none drop-shadow-[0_0_2px_#44c3b2]">
                 <motion.path 
                   d="M 0 10 L 10 0 L 20 20 L 30 0 L 40 20 L 50 0 L 60 20 L 70 0 L 80 20 L 90 0 L 100 20" 
                   strokeLinecap="round" strokeLinejoin="round" 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                 />
               </svg>
            </div>

            {/* Wave 3 (Yellow) */}
            <div className="flex-1 flex items-center relative z-10 px-2">
               <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible stroke-[#f2b366] stroke-[1.5] fill-none drop-shadow-[0_0_2px_#f2b366]">
                 <motion.path 
                   d="M 0 10 Q 5 0, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" 
                   strokeLinecap="round" strokeLinejoin="round" 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                 />
               </svg>
            </div>

            {/* Empty section matching the image layout */}
            <div className="h-[20%] border-t-2 border-[#547983] relative z-10" />
          </div>

          {/* Right Panel (Numbers) */}
          <div className="w-[90px] ml-3 flex flex-col gap-2 relative z-10">
             <div className="flex-1 border-2 border-[#547983] rounded-lg flex items-center justify-center bg-[#233f4a]">
                <span className="text-white font-mono text-2xl font-bold drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">{vitals.hr}</span>
             </div>
             <div className="flex-1 border-2 border-[#547983] rounded-lg flex items-center justify-center bg-[#233f4a]">
                <span className="text-white font-mono text-2xl font-bold drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">{vitals.bp}</span>
             </div>
             <div className="flex-1 border-2 border-[#547983] rounded-lg flex items-center justify-center bg-[#233f4a]">
                <span className="text-white font-mono text-2xl font-bold drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">{vitals.spo2}</span>
             </div>
             <div className="flex-1 border-2 border-[#547983] rounded-lg flex items-center justify-center bg-[#233f4a]">
                <span className="text-white font-mono text-2xl font-bold drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">{vitals.rr}</span>
             </div>
             <div className="flex-[0.8] border-2 border-[#547983] rounded-lg bg-[#233f4a]"></div>
          </div>
          
          {/* Dial / Knob */}
          <div className="absolute right-[-14px] top-[55%] w-8 h-12 bg-gradient-to-r from-[#2ab5a4] to-[#4ce5d4] rounded-l-md rounded-r-2xl shadow-[4px_0_10px_rgba(0,0,0,0.3)] border-y border-r border-[#1f8c7e]" />
        </div>
      </div>
    </div>
  );
}
