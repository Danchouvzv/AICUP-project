"use client";
import React, { useState } from "react";
import { siteData } from "@/data/site";
import { motion, AnimatePresence } from "motion/react";
import { Upload, FileSpreadsheet, CheckCircle2, AlertTriangle, Lightbulb, Download, ArrowRight, BarChart3, Database, FileType, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function ProductPreviewSection() {
  const [step, setStep] = useState(0);

  const startAnalysis = () => {
    setStep(1);
    const intervals = [
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 4000),
      setTimeout(() => setStep(4), 6000)
    ];
    return () => intervals.forEach(clearTimeout);
  };

  return (
    <section id="demo" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-light mb-4"
          >
            Среда <span className="font-editorial text-primary/90 text-glow">аналитики.</span>
          </motion.h2>
        </div>

        {/* Minimalist Premium Mockup */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="glass-premium rounded-xl border border-white/5 shadow-2xl overflow-hidden bg-black/60 backdrop-blur-3xl"
        >
          {/* Dynamic Header */}
          <div className="bg-black/90 border-b border-white/[0.05] py-3 px-5 flex items-center justify-between z-20 relative backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="flex gap-2 mr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              </div>
              {step > 0 && (
                <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-6">
                  <FileSpreadsheet className="text-primary w-4 h-4" />
                  <span className="text-[13px] font-medium tracking-wide text-white">{siteData.demo.fileName}</span>
                  <div className="h-4 w-px bg-white/10 mx-1"></div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">{siteData.demo.rowsCount} ROWS • {siteData.demo.colsCount} COLS</span>
                </div>
              )}
            </div>

            {step === 0 ? (
              <div className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase">
                Awaiting Dataset
              </div>
            ) : step === 1 ? (
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
                Scanning & Planning
              </div>
            ) : (
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <div className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </div>
                Analysis Complete
              </div>
            )}
          </div>

          <div className="relative min-h-[650px] flex flex-col w-full h-full">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex items-center justify-center p-8 bg-[#030303] w-full min-h-[650px]"
                >
                  <div className="max-w-xl w-full border-2 border-dashed border-white/10 rounded-2xl p-16 bg-white/[0.01] hover:bg-white/[0.02] hover:border-primary/30 transition-all cursor-pointer flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                      <Upload className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-light mb-4 tracking-tight text-white">Инициализация данных</h4>
                    <p className="text-[14px] text-muted-foreground/80 mb-10 text-center max-w-sm leading-relaxed">
                      Перетащите ваш датасет сюда. Автономный агент самостоятельно проведет очистку и сформирует инсайты.
                    </p>
                    <div className="flex gap-4 mb-10">
                      <span className="px-4 py-1.5 rounded-md bg-white/5 text-[11px] font-mono text-muted-foreground uppercase border border-white/10 shadow-sm">.CSV</span>
                      <span className="px-4 py-1.5 rounded-md bg-white/5 text-[11px] font-mono text-muted-foreground uppercase border border-white/10 shadow-sm">.XLSX</span>
                    </div>
                    <Button className="rounded-full bg-white text-black hover:bg-white/90 px-10 h-12 uppercase text-[11px] font-bold tracking-widest transition-all hover:scale-105" onClick={startAnalysis}>
                      Начать анализ
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center bg-[#030303] z-10 w-full min-h-[650px]"
                >
                   <div className="relative mb-8">
                     <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center">
                       <div className="w-24 h-24 rounded-full border-t-2 border-r-2 border-primary animate-spin"></div>
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center">
                       <Database className="w-8 h-8 text-primary/80" strokeWidth={1} />
                     </div>
                   </div>
                   <div className="text-xl font-light tracking-wide text-white mb-3">Анализ структуры и качества...</div>
                   <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.3em] opacity-60">Executing Python validation checks</div>
                </motion.div>
              )}

              {step > 1 && (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-1 grid grid-cols-1 lg:grid-cols-12 bg-[#050505] w-full h-full"
                >
                  {/* Left Column: Data Truth (Schema & Quality) */}
                  <div className="lg:col-span-3 border-r border-white/5 bg-[#030303] flex flex-col p-6 h-full text-foreground">
                    
                    {/* Schema Panel */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <FileType className="w-4 h-4 text-muted-foreground/60" />
                        <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Schema Detected</h3>
                      </div>
                      <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl">
                        <div className="space-y-3">
                          {siteData.demo.detectedColumns.map((col, idx) => (
                            <div key={idx} className="flex justify-between items-center text-[12px] font-mono group">
                              <span className="text-white/90">{col.name}</span>
                              <div className="flex-1 border-b-[1px] border-dotted border-white/10 mx-3 group-hover:border-white/30 transition-colors"></div>
                              <span className="text-primary/70 bg-primary/5 px-2 py-0.5 rounded text-[10px]">{col.type}</span>
                            </div>
                          ))}
                          <div className="text-[10px] text-muted-foreground/40 text-center mt-3 pt-3 border-t border-white/5">+ 10 additional columns</div>
                        </div>
                      </div>
                    </div>

                    {/* Data Quality Health Score */}
                    {step >= 2 && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-2 mb-4">
                          <ShieldAlert className="w-4 h-4 text-yellow-500/80" />
                          <h3 className="text-[10px] font-mono text-yellow-500/80 uppercase tracking-widest">Data Quality Report</h3>
                        </div>
                        
                        <div className="space-y-3">
                          {/* Missing Vals Block */}
                          <div className="p-4 bg-red-500/[0.03] border border-red-500/10 rounded-xl relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/40 group-hover:w-1.5 transition-all"></div>
                            <div className="flex justify-between items-start mb-1">
                              <div className="text-[10px] uppercase tracking-widest text-red-400">Missing Values</div>
                              <span className="text-2xl font-light text-red-400 leading-none">124</span>
                            </div>
                            <p className="text-[11px] text-red-400/60 font-light mt-2">Column `revenue` required imputation.</p>
                          </div>

                          {/* Anomalies Block */}
                          <div className="p-4 bg-yellow-500/[0.03] border border-yellow-500/10 rounded-xl relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500/40 group-hover:w-1.5 transition-all"></div>
                            <div className="flex justify-between items-start mb-1">
                              <div className="text-[10px] uppercase tracking-widest text-yellow-500">Outliers Found</div>
                              <span className="text-2xl font-light text-yellow-500 leading-none">5</span>
                            </div>
                            <p className="text-[11px] text-yellow-500/70 font-light mt-2">Isolated from baseline trend via Z-score.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Main Analysis Canvas */}
                  <div className="lg:col-span-9 p-6 lg:p-8 flex flex-col relative h-full">
                    {/* The Chart (Centerpiece) */}
                    {step >= 3 && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.8 }}
                        className="mb-8 p-6 bg-white/[0.01] border border-white/5 rounded-2xl shadow-lg relative"
                      >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="flex justify-between items-end mb-8 relative z-10">
                          <div>
                            <h3 className="text-lg font-light text-white mb-1">Фактическая выручка против ожидаемой</h3>
                            <p className="text-xs text-muted-foreground">Aggregated across Q3 2023</p>
                          </div>
                          <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase">
                            <div className="flex items-center gap-2 text-white/50"><div className="w-2 h-0.5 bg-white/20"></div> Baseline</div>
                            <div className="flex items-center gap-2 text-primary"><div className="w-2 h-2 rounded-full border border-primary bg-primary/20"></div> Actual Fact</div>
                          </div>
                        </div>

                        <div className="h-[280px] w-full relative z-10">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={siteData.demo.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                              <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                              <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                              <Tooltip 
                                cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} 
                                contentStyle={{ backgroundColor: '#000', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '13px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
                              />
                              <Line type="monotone" dataKey="expected" stroke="rgba(255, 255, 255, 0.15)" strokeDasharray="4 4" strokeWidth={2} dot={false} name="Expected" animationDuration={1500} />
                              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ fill: '#050505', stroke: '#10b981', strokeWidth: 2, r: 5 }} activeDot={{ r: 7, fill: "#10b981" }} name="Fact" animationDuration={2000} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </motion.div>
                    )}

                    {/* Executive Output (Insights & Recommendations) */}
                    {step >= 4 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 w-full"
                      >
                        {/* Insights List */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative group overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px]"></div>
                          <div className="flex items-center gap-3 mb-6 relative">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                              <BarChart3 className="w-4 h-4 text-white/70" />
                            </div>
                            <h3 className="text-sm tracking-wide text-white font-medium">Ключевые Инсайты</h3>
                          </div>
                          <ul className="space-y-4 relative">
                            {siteData.demo.insights.map((insight, i) => (
                              <li key={i} className="flex gap-4">
                                <span className="text-primary/50 text-[10px] font-mono mt-1 w-4 text-right">{(i+1).toString().padStart(2, '0')}</span>
                                <span className="text-sm text-muted-foreground font-light leading-relaxed">{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Recommendations & Export */}
                        <div className="flex flex-col gap-6">
                           <div className="bg-primary/[0.03] border border-primary/10 rounded-2xl p-6 md:p-8 flex-1 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-1000"></div>
                             <div className="flex items-center gap-3 mb-8 relative">
                               <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                 <Lightbulb className="w-4 h-4 text-primary" />
                               </div>
                               <h3 className="text-sm tracking-wide text-primary font-medium uppercase">Рекомендации</h3>
                             </div>
                             <ul className="space-y-4 relative">
                               {siteData.demo.recommendations.map((rec, i) => (
                                 <li key={i} className="flex items-start gap-4 bg-primary/[0.02] p-4 rounded-xl border border-primary/[0.05]">
                                   <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                                   <span className="text-[14px] text-foreground/90 font-light leading-relaxed break-words">{rec}</span>
                                 </li>
                               ))}
                             </ul>
                           </div>

                           {/* Premium Export CTA */}
                           <Button className="w-full h-14 bg-gradient-to-r from-primary to-emerald-400 hover:from-primary/90 hover:to-emerald-400/90 text-black rounded-xl text-[12px] font-bold tracking-[0.2em] uppercase shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all hover:scale-[1.02] flex items-center gap-3">
                             <Download className="w-4 h-4" />
                             Сгенерировать PDF-отчет
                           </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
