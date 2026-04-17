"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { WovenCanvas } from "@/components/ui/woven-light-hero";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Sparkles,
  FileSpreadsheet,
  Zap,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    damping: 25,
    stiffness: 160,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    damping: 25,
    stiffness: 160,
  });

  useEffect(() => {
    if (shouldReduceMotion) return;

    let frame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#050505] pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Background — interactive Three.js woven particle canvas */}
      <WovenCanvas />
      {/* Subtle grid & fade overlays on top of canvas */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative mb-12 inline-flex cursor-default items-center gap-3 overflow-hidden rounded-full border border-primary/25 bg-primary/[0.06] px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] text-primary backdrop-blur-md"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transition-transform duration-1000 group-hover:translate-x-full" />
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          AI Analytics · Autonomous Pipeline
        </motion.div>

        {/* Creative editorial headline block */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          className="mx-auto mb-10 max-w-5xl text-center"
        >
          {/* Overline label */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/30"
          >
            — следующее поколение аналитики —
          </motion.p>

          {/* Headline: mixed serif/sans editorial style */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } }}
            className="leading-[1] tracking-tight"
          >
            {/* Line 1: thin sans-serif */}
            <span className="block text-[2.6rem] font-light text-white/70 sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">
              Данные
            </span>
            {/* Line 2: giant Playfair italic — the centrepiece */}
            <span
              className="font-editorial block bg-gradient-to-br from-white via-white/95 to-white/55 bg-clip-text text-transparent"
              style={{ fontSize: "clamp(3.8rem, 11vw, 9.5rem)", lineHeight: 0.92 }}
            >
              говорят сами.
            </span>
            {/* Line 3: emerald accent word */}
            <span
              className="font-editorial mt-2 block bg-gradient-to-r from-primary via-emerald-300 to-primary/60 bg-clip-text text-transparent"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)", lineHeight: 1.1, textShadow: "none" }}
            >
              Слышьте их.
            </span>
          </motion.h1>

          {/* Decorative mono line */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 0.1 } } }}
            className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20"
          >
            Upload&nbsp;→&nbsp;Analyse&nbsp;→&nbsp;Decide
          </motion.p>
        </motion.div>

        {/* Floating data chips */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {[
            { label: "Аномалия −3σ", cls: "text-red-400 border-red-400/20 bg-red-500/5" },
            { label: "↑ Revenue +17%", cls: "text-primary border-primary/25 bg-primary/5" },
            { label: "Schema ✓ 14 cols", cls: "text-sky-400 border-sky-400/20 bg-sky-500/5" },
            { label: "842k rows", cls: "text-white/40 border-white/10 bg-white/[0.03]" },
            { label: "Insight #4 ready", cls: "text-yellow-400 border-yellow-400/20 bg-yellow-500/5" },
          ].map((chip) => (
            <motion.span
              key={chip.label}
              variants={{ hidden: { opacity: 0, scale: 0.75, y: 8 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] backdrop-blur-sm ${chip.cls}`}
            >
              {chip.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 max-w-2xl text-center text-base leading-[1.85] text-white/50 sm:text-lg md:text-[19px]"
        >
          Загрузите{" "}
          <span className="font-medium text-white/90">CSV или Excel</span>{" "}
          — система найдёт аномалии, зависимости и точки роста, превратив строки в{" "}
          <span className="font-medium text-primary">готовые инсайты</span> без единой строки кода.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            asChild
            className="group relative h-14 overflow-hidden rounded-2xl px-9 text-[15px] font-semibold shadow-[0_0_40px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_64px_rgba(16,185,129,0.45)]"
          >
            <Link href="#demo" className="flex items-center gap-2.5">
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.22)_50%,transparent_60%)] transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative z-10">Запустить анализ</span>
              <Zap className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </Button>

          <Link
            href="#architecture"
            className="group flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-9 text-[15px] font-medium text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            Как это работает
            <ChevronRight className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </Link>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mb-16 flex flex-wrap items-center justify-center gap-3 text-[13px] text-white/45"
        >
          {[
            { icon: ShieldCheck, label: "Без ручной рутины" },
            { icon: BrainCircuit, label: "AI-инсайты по данным" },
            { icon: TrendingUp, label: "Быстрее для бизнеса" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.025] px-4 py-2 backdrop-blur-md"
            >
              <item.icon className="h-3.5 w-3.5 text-primary" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Product preview */}
        <motion.div
          style={shouldReduceMotion ? undefined : { rotateX, rotateY }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 w-full max-w-6xl [perspective:2000px]"
        >
          {/* Floating cards */}
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-8 z-20 hidden rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-xl md:flex md:items-center md:gap-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
              <FileSpreadsheet className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-white/45">sales_export_q2.csv</p>
              <p className="text-sm font-medium text-white">842k rows processed</p>
            </div>
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-1 bottom-10 z-20 hidden max-w-[260px] rounded-2xl border border-primary/20 bg-black/60 p-4 shadow-[0_0_40px_rgba(16,185,129,0.12)] backdrop-blur-xl lg:block"
          >
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Insight
              </span>
            </div>
            <p className="text-sm leading-6 text-white/85">
              Клиенты с annual plan удерживаются на 17% лучше после 45-го дня.
            </p>
          </motion.div>

          {/* Frame */}
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0B0B]/85 shadow-[0_40px_120px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
            {/* Window top */}
            <div className="flex h-14 items-center justify-between border-b border-white/10 bg-white/[0.02] px-5">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/50">
                Analysis Engine
              </div>

              <div className="hidden items-center gap-2 md:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80">
                  Live
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="grid gap-6 p-4 md:grid-cols-12 md:p-8">
              {/* Left */}
              <div className="md:col-span-5">
                <div className="h-full rounded-2xl border border-white/8 bg-black/55 p-5 font-mono text-xs">
                  <div className="space-y-3 text-white/60">
                    <p className="flex gap-4">
                      <span className="text-primary/40">1</span>
                      <span>
                        upload(<span className="text-green-300">"sales_export_q2.csv"</span>)
                      </span>
                    </p>
                    <p className="flex gap-4">
                      <span className="text-primary/40">2</span>
                      <span>infer_schema()</span>
                    </p>
                    <p className="flex gap-4">
                      <span className="text-primary/40">3</span>
                      <span>detect_anomalies()</span>
                    </p>
                    <p className="flex gap-4">
                      <span className="text-primary/40">4</span>
                      <span>build_summary_for_team()</span>
                    </p>
                  </div>

                  <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-sm">Dataset validated</span>
                    </div>
                    <p className="mt-2 text-white/70">
                      14 columns mapped, 3 anomalies found, 2 key drivers detected.
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                        Quality
                      </p>
                      <p className="mt-2 text-2xl text-white">
                        99.4<span className="text-primary">%</span>
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                        Speed
                      </p>
                      <p className="mt-2 text-2xl text-white">
                        2.3<span className="text-primary"> min</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-4 md:col-span-7">
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white/85">Revenue trend by segment</h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">
                      predicted
                    </span>
                  </div>

                  <div className="flex h-44 items-end gap-3">
                    {[34, 48, 41, 62, 70, 58, 84, 96].map((height, index) => (
                      <div key={index} className="group relative flex-1">
                        <div
                          className="w-full rounded-t-xl bg-gradient-to-t from-primary/80 to-primary/25 transition-all duration-300 group-hover:from-primary group-hover:to-white/40"
                          style={{ height: `${height}%` }}
                        />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                          {height}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-black/45 p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                      Key finding
                    </p>
                    <p className="mt-3 text-base leading-7 text-white/85">
                      Сильнее всего на retention влияет переход на годовой план и первые 7 дней онбординга.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 to-transparent p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-primary/75">
                      Action
                    </p>
                    <p className="mt-3 text-base leading-7 text-white/90">
                      Перенести upsell annual plan в момент достижения первого результата пользователя.
                    </p>
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