"use client";
import { siteData } from "@/data/site";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-32 md:py-48 relative bg-black border-t border-white/[0.02] overflow-hidden">
      
      {/* Deep ambient glow to give the section high visual energy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stronger, more dramatic Section Entrance */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary mb-6 font-semibold"
          >
            Бенчмарк
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-light mb-6"
          >
            Тотальное <span className="font-editorial text-muted-foreground italic">превосходство.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-muted-foreground font-light leading-relaxed text-[16px]"
          >
            Ультимативное сравнение автономного AI-пайплайна с классическими подходами. Больше фокуса, меньше рутины.
          </motion.p>
        </div>

        {/* Premium Unified System Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#030303] border border-white/[0.06] rounded-[2.5rem] p-6 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative group/container"
        >
          {/* Subtle internal depth layer for the Agent column */}
          <div className="absolute top-0 bottom-0 right-0 w-[35%] bg-gradient-to-r from-transparent via-primary/[0.015] to-primary/[0.03] pointer-events-none rounded-r-[2.5rem]"></div>
          <div className="absolute top-0 right-[10%] w-64 h-64 bg-primary/[0.08] blur-[100px] rounded-full pointer-events-none opacity-40 group-hover/container:opacity-100 transition-opacity duration-1000"></div>

          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="min-w-[850px] w-full relative z-10">
              
              {/* Premium Header Container */}
              <div className="grid grid-cols-[3fr_1.5fr_1.5fr_2.5fr] gap-6 border-b border-white/[0.08] pb-8 mb-6 items-end">
                 <div className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground/40 pl-6">
                   Критерий
                 </div>
                 <div className="text-[11px] font-mono tracking-widest uppercase text-white/20">
                   {siteData.comparison.columns[1]}
                 </div>
                 <div className="text-[11px] font-mono tracking-widest uppercase text-white/20">
                   {siteData.comparison.columns[2]}
                 </div>
                 <div className="pb-1">
                   <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-primary/30">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                     <span className="text-[11px] font-mono tracking-[0.15em] uppercase text-primary font-bold">
                       {siteData.comparison.columns[3]}
                     </span>
                   </div>
                 </div>
              </div>
              
              {/* Expressive Rows */}
              <div className="flex flex-col space-y-1">
                {siteData.comparison.rows.map((row, i) => (
                  <div 
                    key={i}
                    className="grid grid-cols-[3fr_1.5fr_1.5fr_2.5fr] gap-6 items-center p-4 pl-6 rounded-2xl border border-transparent hover:border-white/[0.04] hover:bg-white/[0.015] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                  >
                    <div className="font-light text-[15px] text-white/70 group-hover:text-white transition-colors">
                      {row.feature}
                    </div>
                    
                    {/* Deeply faded weak competitors */}
                    <div className="text-[13px] font-light text-white/20 group-hover:text-white/40 transition-colors h-full flex items-center">
                      {row.manual}
                    </div>
                    
                    <div className="text-[13px] font-light text-white/20 group-hover:text-white/40 transition-colors h-full flex items-center">
                      {row.bot}
                    </div>
                    
                    {/* Highly crisp product column */}
                    <div className="flex items-center gap-4 h-full relative">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-[15px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 leading-snug group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                        {row.agent}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
