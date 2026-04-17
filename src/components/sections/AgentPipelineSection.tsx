"use client";
import { siteData } from "@/data/site";
import { motion } from "motion/react";

export function AgentPipelineSection() {
  return (
    <section id="agent" className="py-32 relative bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.2em] text-primary mb-6 font-medium"
          >
            Интеллектуальный процесс
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Почему мы <span className="font-editorial text-muted-foreground">агент</span>, <br className="hidden md:block" />а не чат-бот
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed font-light mx-auto max-w-2xl"
          >
            {siteData.pipeline.description}
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
            {siteData.pipeline.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col relative group"
              >
                {/* Minimalist Top Indicator */}
                <div className="h-px w-full bg-white/10 mb-6 relative">
                  <div className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>

                <div className="font-editorial text-4xl text-white/20 group-hover:text-primary transition-colors duration-500 mb-6">
                  {step.id}
                </div>

                <h3 className="text-xl font-normal mb-3 text-foreground tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
