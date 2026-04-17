"use client";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import Link from "next/link";
import { Database, Check, ChevronRight, Upload, Sparkles, Binary, FileSpreadsheet, Orbit, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden flex flex-col items-center">
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 max-w-[100vw] overflow-hidden pointer-events-none z-0 bg-[#020202]">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[20%] w-[50%] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[-10%] w-[40%] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020202] to-transparent z-10"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Creativity-focused Text Block */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="flex flex-col items-center text-center w-full max-w-5xl"
        >
          {/* Glowing Top Badge */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
            }}
            className="group relative inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-primary text-[11px] md:text-xs font-mono tracking-widest uppercase mb-12 overflow-hidden hover:border-primary/40 transition-colors cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Orbit className="w-4 h-4 animate-[spin_4s_linear_infinite]" />
            Искусственный Интеллект 3.0
          </motion.div>

          {/* Futuristic Headline */}
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight mb-8 text-foreground font-medium"
          >
            Данные читаются <br className="hidden md:block"/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-primary/60">
                как открытая книга
              </span>
              <motion.span 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                className="absolute bottom-1 left-0 h-[8px] bg-primary/30 z-0 rounded-full"
              ></motion.span>
            </span>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-lg md:text-[22px] text-muted-foreground/80 max-w-[48rem] mx-auto mb-14 font-light leading-relaxed"
          >
            Освободите до <span className="text-white font-medium">80% времени</span> ваших аналитиков. Загрузите сырой файл, и наш ИИ моментально найдет закономерности, построит связи и даст бизнесу готовые инсайты. 
          </motion.p>

          {/* Elevated Buttons */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Button size="lg" asChild className="relative group w-full sm:w-auto px-10 h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:-translate-y-1">
              <Link href="#demo" className="flex items-center gap-3 text-[15px] font-semibold tracking-wide">
                <span className="relative z-10">Начать Анализ</span>
                <Zap className="w-5 h-5 relative z-10 opacity-90 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_2.5s_linear_infinite] group-hover:animate-none"></div>
              </Link>
            </Button>

            <Link
              href="#architecture"
              className="text-[15px] font-medium text-white/70 hover:text-white transition-all flex items-center justify-center gap-3 group h-16 px-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] backdrop-blur-md"
            >
              Как это работает
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Creative Hover-Responsive 3D Interface */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="w-full max-w-[1050px] mx-auto mt-28 relative z-10 hidden md:block perspective-[2000px] transform-gpu"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating UI Elements out of the box */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-20 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center gap-4 z-20"
          >
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <FileSpreadsheet className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-white/50 font-mono">Q3_Revenue.csv</p>
              <p className="text-sm text-white font-medium">1.2M rows parsed</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 bottom-32 bg-black/60 backdrop-blur-xl border border-primary/20 p-5 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] z-20 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-xs font-bold text-primary uppercase tracking-wider">Insight Found</p>
            </div>
            <p className="text-sm text-white/90 font-light max-w-[200px]">Churn rate drops by 15% when users switch to annual billing.</p>
          </motion.div>

          {/* Main Dashboard Frame */}
          <div className="rounded-3xl overflow-hidden relative border border-white/15 shadow-[0_50px_100px_rgba(0,0,0,0.8)] bg-[#0A0A0A]/80 backdrop-blur-2xl">
            
            {/* Top Bar */}
            <div className="h-14 border-b border-white/10 flex items-center px-6 justify-between bg-white/[0.02]">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors"></div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 px-4 py-1.5 rounded-full border border-white/5">
                <Binary className="w-4 h-4 text-primary/70" />
                <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Analysis Kernel v2.0</span>
              </div>
              <div className="opacity-0 lg:opacity-100 flex items-center gap-2 pr-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-mono text-primary/70 uppercase">Online</span>
              </div>
            </div>

            {/* Application Sandbox Area */}
            <div className="p-10 grid grid-cols-12 gap-8 relative z-10 bg-gradient-to-br from-white/[0.01] to-black">
              
              {/* Left Code/Terminal Side */}
              <div className="col-span-5 flex flex-col gap-4">
                <div className="h-full bg-[#050505] rounded-xl border border-white/5 p-5 font-mono text-xs overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  
                  <div className="text-white/30 space-y-4">
                    <p className="flex gap-4">
                      <span className="text-primary/40">1</span>
                      <span className="text-white/60">agent <span className="text-purple-400">=</span> <span className="text-blue-400">new</span> DataAgent()</span>
                    </p>
                    <p className="flex gap-4">
                      <span className="text-primary/40">2</span>
                      <span className="text-white/60">agent.<span className="text-yellow-200">ingest</span>(<span className="text-green-300">&quot;data.csv&quot;</span>)</span>
                    </p>
                    <p className="flex gap-4">
                      <span className="text-primary/40">3</span>
                      <span className="text-gray-500 italic">{/* analyzing schema and types... */}</span>
                    </p>
                    <p className="flex gap-4">
                      <span className="text-primary/40">4</span>
                      <span className="text-white/60">schema <span className="text-purple-400">=</span> agent.<span className="text-yellow-200">predict_schema</span>()</span>
                    </p>
                    
                    {/* Typing effect simulation */}
                    <div className="mt-8 p-3 bg-primary/5 border border-primary/20 rounded bg-opacity-50">
                      <p className="text-primary flex items-center gap-2">
                        <Check className="w-3 h-3" />
                        <span className="animate-[pulse_2s_ease-in-out_infinite]">&gt; Schema detected perfectly.</span>
                      </p>
                      <p className="text-white/70 mt-2">&gt; Generating automatic visual reports...</p>
                      <p className="text-white/70 mt-1 flex items-center gap-2">
                        &gt; Rendering vectors <span className="w-2 h-4 bg-primary inline-block animate-[ping_1s_ease-in-out_infinite]"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Graphical Side */}
              <div className="col-span-7 flex flex-col gap-6">
                
                {/* Main Graph Box */}
                <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 relative group overflow-hidden">
                  {/* Subtle Glowing Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <h3 className="text-sm font-medium text-white/80">Revenue Forecast</h3>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">AI Predicted</span>
                  </div>
                  
                  {/* Faux Graph CSS Grid */}
                  <div className="h-32 flex items-end gap-3 w-full relative z-10">
                    {[30, 45, 25, 60, 75, 50, 85, 100].map((height, i) => (
                      <div key={i} className="flex-1 relative group/bar rounded-t-sm bg-white/10 hover:bg-primary/40 transition-all duration-300" style={{ height: `${height}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {height * 12}K
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row Stats */}
                <div className="grid grid-cols-2 gap-6 h-28">
                  <div className="bg-black/50 border border-white/5 rounded-xl p-5 flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest mb-2 font-mono">Dataset Quality</span>
                    <span className="text-2xl font-light text-white flex items-baseline gap-2">99.8<span className="text-sm text-primary">%</span></span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl p-5 flex flex-col justify-center cursor-pointer hover:border-primary/40 transition-colors">
                    <span className="text-primary/70 text-[10px] uppercase tracking-widest mb-2 font-mono">Operations</span>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-light text-white">Export Report</span>
                      <ChevronRight className="w-4 h-4 text-white/50" />
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
