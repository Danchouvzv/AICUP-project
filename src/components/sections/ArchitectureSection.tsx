"use client";
import { siteData } from "@/data/site";
import { motion } from "motion/react";
import { Upload, FileType, ShieldAlert, GitBranch, Cpu, LineChart, CornerRightDown, ArrowRight } from "lucide-react";

export function ArchitectureSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "upload": return Upload;
      case "schema": return FileType;
      case "quality": return ShieldAlert;
      case "planner": return GitBranch;
      case "executor": return Cpu;
      case "insight": return LineChart;
      default: return Cpu;
    }
  };

  const inputNodes = siteData.architecture.nodes.slice(0, 2);
  const coreNodes = siteData.architecture.nodes.slice(2, 5);
  const outputNodes = siteData.architecture.nodes.slice(5, 6);

  return (
    <section id="architecture" className="py-32 relative overflow-hidden bg-[#020202] border-t border-white/[0.02]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.2em] text-primary mb-6 font-medium"
          >
            Оркестрация Системы
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.1] font-light mb-6"
          >
            Архитектура <span className="font-editorial text-muted-foreground italic">разума.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-muted-foreground font-light leading-relaxed"
          >
            Многошаговый пайплайн исполнения. Мы не грузим данные в случайные промпты — мы строим направленную цепочку обработки для 100% стабильности.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
          
          {/* Background Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40%] left-0 w-full h-px bg-white/5 -z-10">
             <div className="h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full animate-pulse opacity-50"></div>
          </div>

          {/* Stage 1: Input */}
          <div className="flex-1 flex flex-col gap-4 relative pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/5 pb-8 lg:pb-0">
            <h3 className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/50 mb-2 pl-2">1. Data Input</h3>
            {inputNodes.map((node, i) => {
              const Icon = getIcon(node.id);
              return (
                <motion.div key={node.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black border border-white/10 hover:border-primary/20 rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.02] flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={1.5} className="text-white/70" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-white/90">{node.label}</h4>
                    <p className="text-[12px] text-muted-foreground/70 mt-1 leading-snug">{node.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stage 2: Core */}
          <div className="flex-[1.5] flex flex-col gap-4 relative px-0 lg:px-8 border-b lg:border-b-0 lg:border-r border-white/5 pb-8 lg:pb-0">
            <h3 className="text-[10px] font-mono tracking-widest uppercase text-primary/70 mb-2 pl-2">2. Processing Core</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {coreNodes.map((node, i) => {
                const Icon = getIcon(node.id);
                // Make Executor span full width
                const isExecutor = node.id === 'executor';
                return (
                  <motion.div key={node.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + (i * 0.1) }} className={`bg-[#050505] border ${isExecutor ? 'border-primary/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]' : 'border-white/10 hover:border-primary/20'} rounded-xl p-5 flex flex-col ${isExecutor ? 'col-span-1 sm:col-span-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isExecutor ? 'bg-primary/10 text-primary' : 'bg-white/[0.02] text-white/70'}`}>
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-[14px] font-medium text-white/90">{node.label}</h4>
                    </div>
                    <p className="text-[12px] text-muted-foreground/70 leading-snug">{node.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Stage 3: Output */}
          <div className="flex-1 flex flex-col gap-4 relative pl-0 lg:pl-8 justify-center">
            <h3 className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/50 mb-2 pl-2">3. Output</h3>
            {outputNodes.map((node) => {
              const Icon = getIcon(node.id);
              return (
                <motion.div key={node.id} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="bg-black border border-white/10 hover:border-primary/20 rounded-xl p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.5} className="text-white/90" />
                  </div>
                  <h4 className="text-[15px] font-medium text-white mb-2">{node.label}</h4>
                  <p className="text-[13px] text-muted-foreground/70 leading-relaxed">{node.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
