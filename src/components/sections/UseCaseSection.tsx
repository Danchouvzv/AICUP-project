"use client";
import { siteData } from "@/data/site";
import { motion } from "motion/react";
import { FileSpreadsheet, CheckCircle2, Database, Zap } from "lucide-react";

export function UseCaseSection() {
  return (
    <section id="use-cases" className="py-32 md:py-48 relative bg-[#020202] border-t border-white/[0.02]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strong Section Entrance */}
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary mb-6 font-medium"
            >
              <div className="w-8 h-px bg-primary/50"></div>
              Аудитория и сценарии
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-light"
            >
              Агент для <span className="font-editorial text-muted-foreground italic">любой</span> индустрии.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-light leading-relaxed max-w-md pb-2 text-[15px]"
          >
            Мы убрали универсальные промпты. Вы просто загружаете специфические сырые данные, а агент адаптирует свой пайплайн для выдачи готового результата.
          </motion.p>
        </div>

        {/* Asymmetric Bento Box Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-32">
           {siteData.useCases.map((useCase, i) => {
             const isFeatured = i === 0;

             return (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                 className={`bg-[#050505] border border-white/[0.05] hover:border-white/10 transition-colors rounded-[2.5rem] p-8 lg:p-10 flex flex-col relative overflow-hidden group ${
                   isFeatured ? 'lg:col-span-8' : 'lg:col-span-4'
                 }`}
               >
                 {isFeatured && (
                   <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none"></div>
                 )}

                 {isFeatured ? (
                   /* FEATURED CARD LAYOUT */
                   <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center h-full relative z-10">
                     <div className="lg:col-span-2 flex flex-col justify-center">
                       <div className="inline-flex items-center px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-primary mb-8 w-max">
                         Featured Target
                       </div>
                       <h4 className="text-3xl lg:text-4xl font-light text-white tracking-tight mb-6 leading-tight">{useCase.title}</h4>
                       <p className="text-[15px] text-muted-foreground/80 leading-relaxed font-light">
                         Автоматизация исследовательских задач. Продукт самостоятельно чистит выборки и формулирует статистические гипотезы, экономя часы ручной работы.
                       </p>
                     </div>

                     <div className="lg:col-span-3 bg-[#020202] border border-white/[0.06] rounded-[2rem] p-6 lg:p-8 relative shadow-2xl overflow-hidden">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
                       
                       {/* Expansive Flow Visualization */}
                       <div className="space-y-5 relative z-10">
                         {/* Upload layer */}
                         <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                           <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                             <Database className="w-5 h-5 text-white/50" />
                           </div>
                           <div>
                             <div className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1.5">Source File</div>
                             <div className="text-[14px] text-white/80 font-light leading-snug">{useCase.upload}</div>
                           </div>
                         </div>

                         {/* Action Layer */}
                         <div className="flex items-center gap-4 bg-primary/[0.03] border border-primary/10 p-4 rounded-2xl md:ml-8 relative">
                           <div className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-[16px] h-px bg-primary/20 hidden md:block"></div>
                           <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 relative shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                             <div className="absolute inset-0 bg-primary/20 animate-ping rounded-xl opacity-20"></div>
                             <Zap className="w-5 h-5 text-primary" />
                           </div>
                           <div>
                             <div className="text-[10px] uppercase font-mono tracking-widest text-primary/60 mb-1.5">Agent Pipeline</div>
                             <div className="text-[14px] text-white/90 font-light leading-snug">{useCase.action}</div>
                           </div>
                         </div>

                         {/* Result Layer */}
                         <div className="flex items-start gap-4 bg-gradient-to-r from-primary/[0.08] to-primary/[0.02] border border-primary/20 p-5 rounded-2xl md:ml-16 transform transition duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] relative">
                           <div className="absolute -left-[33px] top-[26px] w-[32px] h-px bg-primary/30 hidden md:block"></div>
                           <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                             <CheckCircle2 className="w-6 h-6 text-black" strokeWidth={2.5}/>
                           </div>
                           <div className="mt-0.5">
                             <div className="text-[10px] uppercase font-mono tracking-widest text-primary mb-1.5 font-bold">Autonomous Result</div>
                             <div className="text-[15px] font-medium text-white tracking-wide leading-normal">{useCase.output}</div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 ) : (
                   /* STANDARD CARD LAYOUT */
                   <div className="flex flex-col h-full relative z-10">
                     <div className="mb-10">
                       <h4 className="text-2xl font-light text-white mb-2">{useCase.title}</h4>
                     </div>

                     {/* Compact Data Flow */}
                     <div className="flex flex-col mt-auto bg-[#020202] border border-white/[0.04] rounded-2xl p-5 relative group-hover:border-white/10 transition-colors">
                       
                       {/* Input */}
                       <div className="flex items-start gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                           <FileSpreadsheet className="w-4 h-4 text-white/40" />
                         </div>
                         <div>
                           <div className="text-[10px] uppercase font-mono tracking-widest text-white/30 mb-1">Input</div>
                           <div className="text-[13px] font-light text-white/70 leading-snug">{useCase.upload}</div>
                         </div>
                       </div>
                       
                       <div className="h-5 border-l border-white/10 ml-4 my-1 line-dashed"></div>

                       {/* Action */}
                       <div className="flex items-start gap-3">
                         <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                         </div>
                         <div>
                           <div className="text-[10px] uppercase font-mono tracking-widest text-primary/50 mb-1">Process</div>
                           <div className="text-[13px] font-light text-white/80 leading-snug">{useCase.action}</div>
                         </div>
                       </div>
                       
                       <div className="h-5 border-l border-white/10 ml-4 my-1 line-dashed"></div>

                       {/* Output */}
                       <div className="flex items-start gap-3 p-3 bg-primary/[0.04] border border-primary/10 rounded-xl group-hover:bg-primary/[0.06] transition-colors">
                         <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                           <CheckCircle2 className="w-3.5 h-3.5 text-primary" strokeWidth={2.5}/>
                         </div>
                         <div>
                           <div className="text-[10px] uppercase font-mono tracking-widest text-primary mb-1">Output</div>
                           <div className="text-[13px] font-medium text-white/95 leading-snug">{useCase.output}</div>
                         </div>
                       </div>
                     </div>
                   </div>
                 )}
               </motion.div>
             )
           })}
        </div>

        {/* Global Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden p-[1px]">
          {siteData.impact.map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 + i * 0.1 }}
                 className="bg-[#050505] p-10 text-center flex flex-col justify-center relative overflow-hidden group"
               >
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <div className="text-4xl md:text-5xl font-light text-white mb-3 tracking-tighter relative z-10">
                   {stat.value}
                 </div>
                 <div className="text-[10px] uppercase font-mono tracking-wider text-primary/60 relative z-10">
                   {stat.label}
                 </div>
               </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
