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
        {/* Minimal editorial hero text */}
        <div className="relative z-[2] mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-16 pt-8 text-center sm:px-6 lg:px-8">

          {/* Tiny eyebrow */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 font-mono text-[10px] uppercase text-white/25"
          >
            AI · Analytics · 2026
          </motion.p>

          {/* THE HOOK — 4 words, giant Playfair italic */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial select-none"
            style={{
              fontSize: "clamp(4.5rem, 14vw, 12rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              background: "linear-gradient(160deg, #ffffff 30%, rgba(255,255,255,0.45) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
          >
            Данные —{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #6ee7b7 60%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ясность.
            </span>
          </motion.h1>

          {/* One-liner caption */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 font-light text-white/40 sm:text-lg md:text-xl"
            style={{ letterSpacing: "0.01em" }}
          >
            Загрузите таблицу — получите инсайты.
          </motion.p>

          {/* Single CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <Button
              size="lg"
              asChild
              className="group relative h-14 overflow-hidden rounded-2xl px-10 text-[15px] font-semibold shadow-[0_0_48px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_72px_rgba(16,185,129,0.5)]"
            >
              <Link href="#demo" className="flex items-center gap-3">
                <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.22)_50%,transparent_60%)] transition-transform duration-600 group-hover:translate-x-full" />
                <span className="relative z-10">Начать анализ</span>
                <Zap className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </Link>
            </Button>
          </motion.div>
        </div>

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