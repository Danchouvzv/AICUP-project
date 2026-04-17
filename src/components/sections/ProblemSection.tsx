"use client";
import { siteData } from "@/data/site";
import { motion } from "motion/react";
import { AlertCircle, FileX2 } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 font-light">
                Ручной анализ — это <br/>
                <span className="font-editorial text-muted-foreground">долго и субъективно.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                {siteData.problem.description}
              </p>
            </motion.div>

            <div className="space-y-10">
              {siteData.problem.items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group border-l pl-6 border-white/10 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-normal mb-2 text-foreground/90 tracking-tight flex items-center gap-3">
                    <span className="text-xs font-mono text-primary/60 tracking-widest uppercase">/ 0{i + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-[15px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-full min-h-[400px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md relative"
            >
              {/* Messy Table Mockup */}
              <div className="glass-premium rounded-xl p-6 relative z-10 -rotate-2 transform hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <FileX2 className="w-4 h-4 text-red-400/80" />
                    <span className="text-xs font-mono tracking-wider text-muted-foreground">raw_data_final_v2.csv</span>
                  </div>
                  <AlertCircle className="w-4 h-4 text-yellow-500/80" />
                </div>
                
                <div className="space-y-3 font-mono text-[10px] text-muted-foreground/60 w-full overflow-hidden">
                  <div className="flex justify-between border-b border-white/5 pb-2 text-white/40">
                    <span className="w-1/4">Date</span>
                    <span className="w-1/4">Revenue</span>
                    <span className="w-1/4">Category</span>
                    <span className="w-1/4">Status</span>
                  </div>
                  {[
                    ['2023-01', '4500.00', 'Tech', 'Active'],
                    ['2023-02', 'NULL', 'Tech', 'Active'],
                    ['--/--', '3200.50', 'UNKNOWN', 'Pending'],
                    ['2023-04', '999999', 'Furniture', 'Active'],
                    ['2023-05', 'NaN', 'Tech', 'Canceled'],
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between py-1 ${i % 2 === 1 ? 'bg-white/[0.02]' : ''}`}>
                      <span className={`w-1/4 ${row[0] === '--/--' ? 'text-red-400/80' : ''}`}>{row[0]}</span>
                      <span className={`w-1/4 ${row[1] === 'NULL' || row[1] === 'NaN' || row[1] === '999999' ? 'text-red-400/80 bg-red-400/10 rounded px-1' : ''}`}>{row[1]}</span>
                      <span className={`w-1/4 ${row[2] === 'UNKNOWN' ? 'text-yellow-500/80' : ''}`}>{row[2]}</span>
                      <span className="w-1/4">{row[3]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blurred abstraction underneath indicating lost insights */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl -z-10 rounded-full"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
