"use client";
import * as React from "react";
import Link from "next/link";
import { siteData } from "@/data/site";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <>
      {/* Floating pill navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full max-w-5xl"
        >
          <motion.div
            animate={{
              backgroundColor: scrolled
                ? "rgba(5,5,5,0.85)"
                : "rgba(5,5,5,0.55)",
              borderColor: scrolled
                ? "rgba(255,255,255,0.10)"
                : "rgba(255,255,255,0.06)",
              boxShadow: scrolled
                ? "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset"
                : "0 4px 20px rgba(0,0,0,0.3)",
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-center justify-between h-[58px] px-4 rounded-2xl border backdrop-blur-2xl"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 select-none group flex-shrink-0"
            >
              <div className="relative w-7 h-7 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-shadow duration-300">
                <div className="w-2.5 h-2.5 bg-black rounded-sm" />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: "blur(6px)", zIndex: -1 }}
                />
              </div>
              <span className="text-[15px] font-semibold text-white tracking-tight leading-none">
                Data<span className="text-primary font-light italic ml-0.5">Agent</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {siteData.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setActiveItem(item.href)}
                  onMouseLeave={() => setActiveItem(null)}
                  className="relative px-4 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-200 rounded-xl group"
                >
                  {/* Hover pill bg */}
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-white/[0.06]"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{
                      opacity: activeItem === item.href ? 1 : 0,
                      scale: activeItem === item.href ? 1 : 0.92,
                    }}
                    transition={{ duration: 0.18 }}
                  />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Link
                href="#demo"
                className="group relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-black text-[13px] font-semibold overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_32px_rgba(16,185,129,0.5)] transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.25)_50%,transparent_60%)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Zap className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Демо</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Mobile dropdown — attached below pill */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 rounded-2xl border border-white/10 bg-[#050505]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                <div className="flex flex-col p-3 gap-1">
                  {siteData.navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-4 py-3 rounded-xl text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="h-px bg-white/[0.06] mx-2 my-1" />
                  <Link
                    href="#demo"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 mx-2 mb-1 py-3 rounded-xl bg-primary text-black text-[14px] font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <Zap className="w-4 h-4" />
                    Смотреть демо
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
    </>
  );
}
