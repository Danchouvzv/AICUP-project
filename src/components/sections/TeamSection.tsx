"use client";
import { siteData } from "@/data/site";
import { motion } from "motion/react";
import { Shield } from "lucide-react";

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative border-t border-white/[0.02]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="inline-flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center mb-6">
             <Shield className="w-5 h-5 text-primary/60" strokeWidth={1} />
          </div>
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/50 mb-4 font-mono">
             Designed & Engineered by
          </h2>
          <p className="text-3xl font-editorial tracking-widest text-white/90">
            {siteData.team.name}
          </p>
          <p className="text-[13px] text-muted-foreground/60 font-light mt-4 max-w-sm">
            {siteData.team.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
