"use client";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { Database, Check, ChevronRight, Upload, Sparkles, Binary } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden flex flex-col items-center">
      {/* Premium Atmospheric Background */}
      <div className="absolute inset-0 max-w-[100vw] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[500px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute h-px w-[800px] left-1/2 -translate-x-1/2 top-[35%] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Core Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center w-full max-w-4xl"
        >
          {/* Top Label */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-primary text-[11px] font-mono tracking-widest uppercase mb-10 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Autonomous Analytics Agent
          </div>

          {/* Oversized Serif Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] tracking-[-0.03em] mb-8 text-foreground font-light">
            Таблицы становятся <br />
            <span className="font-editorial text-muted-foreground italic mr-2">готовыми</span>
            <span className="font-editorial text-primary/90 text-glow italic">решениями.</span>
          </h1>

          {/* Refined Subheadline */}
          <p className="text-lg md:text-[21px] text-muted-foreground/90 max-w-[42rem] mx-auto mb-12 font-light leading-relaxed">
            Автономный агент для работы с данными. Загружаете Excel или CSV — система сама считывает схему, находит инсайты и формирует выводы.
            <span className="block mt-2 text-white/50 text-[17px]">Без SQL. Без дашбордов. Без боли.</span>
          </p>

          {/* Premium CTA Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Button size="lg" asChild className="relative group w-full sm:w-auto px-10 h-14 bg-white hover:bg-white text-black rounded-full overflow-hidden transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <Link href="#demo" className="flex items-center gap-2 text-[14px] font-medium tracking-wide">
                <span className="relative z-10">{siteData.hero.ctaPrimary}</span>
                <ChevronRight className="w-4 h-4 relative z-10 opacity-70 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              </Link>
            </Button>

            <Link
              href="#architecture"
              className="text-[14px] font-medium text-muted-foreground hover:text-white transition-colors flex items-center justify-center gap-2 group h-14 px-8 rounded-full border border-transparent hover:border-white/10 hover:bg-white/[0.03]"
            >
              {siteData.hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>

        {/* Cinematic Dashboard Floating Mockup - Elevated closer to text */}
        <motion.div
          className="w-full max-w-[1000px] mx-auto mt-20 relative z-10 hidden md:block perspective-[2000px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Mockup Container */}
          <div className="glass-premium rounded-2xl overflow-hidden relative border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-black/40 backdrop-blur-3xl before:absolute before:inset-0 before:ring-1 before:ring-white/5 before:rounded-2xl before:pointer-events-none group hover:border-white/20 transition-colors duration-700">

            {/* Glossy top overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

            {/* Application Header */}
            <div className="h-[52px] border-b border-white/[0.08] flex items-center px-4 justify-between bg-black/60 backdrop-blur-md relative z-20">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-white/[0.03] rounded-md border border-white/5">
                <Binary className="w-3.5 h-3.5 text-muted-foreground/50" />
                <span className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">System Ready</span>
              </div>
              <div className="flex items-center gap-2 pr-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                <span className="text-[10px] font-mono text-primary/70 uppercase">Agent Online</span>
              </div>
            </div>

            {/* Dashboard Content - The "Wow" Factor */}
            <div className="p-8 grid grid-cols-12 gap-6 relative z-10">

              {/* Massive Drag & Drop Action Zone */}
              <div className="col-span-8 flex flex-col">
                <div className="flex-1 relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent group/upload hover:border-primary/40 transition-colors duration-500 flex flex-col items-center justify-center p-12 cursor-pointer shadow-inner">
                  {/* Subtle Background Target */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover/upload:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10 w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.05)] group-hover/upload:shadow-[0_0_40px_rgba(16,185,129,0.2)] group-hover:upload:border-primary/50 transition-all duration-500 group-hover/upload:scale-110">
                    <Upload className="w-8 h-8 text-white/50 group-hover/upload:text-primary transition-colors" strokeWidth={1} />
                  </div>

                  <h3 className="text-xl font-light text-white mb-2 relative z-10 tracking-tight">Отправьте данные на анализ</h3>
                  <p className="text-sm text-muted-foreground/60 mb-8 max-w-[250px] text-center font-light relative z-10">
                    Перетащите ваш датасет сюда. Мы сами определим структуру.
                  </p>

                  {/* Format Pills */}
                  <div className="flex gap-3 relative z-10">
                    <div className="px-4 py-1.5 rounded-lg bg-black/50 border border-white/5 text-[10px] font-mono tracking-widest uppercase text-muted-foreground shadow-sm">.CSV</div>
                    <div className="px-4 py-1.5 rounded-lg bg-black/50 border border-white/5 text-[10px] font-mono tracking-widest uppercase text-muted-foreground shadow-sm">.XLSX</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Preview Panels */}
              <div className="col-span-4 flex flex-col gap-6">

                {/* Simulated Output Panel 1 */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="w-3.5 h-3.5 text-primary/70" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">Определение схемы</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "timestamp", type: "datetime" },
                      { name: "user_uuid", type: "string" },
                      { name: "total_revenue", type: "numeric" }
                    ].map((col, i) => (
                      <div key={i} className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-white/60">{col.name}</span>
                        <div className="flex-1 border-b border-dotted border-white/10 mx-2"></div>
                        <span className="text-primary/60">{col.type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Output Panel 2 */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 relative overflow-hidden flex-1 flex flex-col justify-between">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full"></div>
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">Анализ качества</span>
                  </div>
                  <div className="bg-black/50 border border-white/5 rounded-lg p-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Clean Score Rate</span>
                      <span className="text-sm text-primary font-mono">98.4%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1 mt-3 rounded-full overflow-hidden">
                      <div className="bg-primary w-[98.4%] h-full rounded-full"></div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
