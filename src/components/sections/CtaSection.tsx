"use client";
import { siteData } from "@/data/site";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section id="cta" className="py-40 relative overflow-hidden bg-primary/5">
      <div className="absolute inset-0 max-w-[100vw] overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[200px] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05] mb-8 text-foreground">
            Превратите сырые таблицы <br/>
            в <span className="font-editorial text-primary/90 text-glow">реальные решения.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-14 max-w-2xl mx-auto font-light">
            {siteData.cta.description}
          </p>
          <Button size="lg" asChild className="h-16 px-12 text-[15px] bg-primary text-black hover:bg-white rounded-full font-medium transition-all duration-500 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
            <Link href="#demo">{siteData.cta.primaryBtn}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
