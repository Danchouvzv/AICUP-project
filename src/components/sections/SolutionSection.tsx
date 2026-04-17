"use client";
import { siteData } from "@/data/site";
import { motion } from "motion/react";
import { 
  FileSpreadsheet, 
  Search, 
  ShieldAlert, 
  LineChart, 
  BrainCircuit, 
  BarChart4, 
  MessageSquareText, 
  Lightbulb
} from "lucide-react";

const features = [
  {
    icon: <FileSpreadsheet className="w-5 h-5" />,
    title: "Загрузка Excel и CSV",
    description: "Мгновенно принимает и парсит любые объемы табличных данных без необходимости их предварительно форматировать."
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Распознавание структуры",
    description: "Автоматически определяет типы колонок, семантику данных и выстраивает внутреннюю схему таблицы."
  },
  {
    icon: <ShieldAlert className="w-5 h-5" />,
    title: "Поиск аномалий",
    description: "Находит пропущенные значения, дубликаты и выбросы, предотвращая ошибки в будущих расчетах."
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "Проверка качества",
    description: "Проводит полный Data Quality чекап данных перед тем, как применять к ним математические модели."
  },
  {
    icon: <BarChart4 className="w-5 h-5" />,
    title: "Выбор стратегии",
    description: "Подбирает оптимальный метод анализа и гипотезы исходя из специфики загруженного датасета."
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Метрики и графики",
    description: "Выполняет Python-код для точных расчетов и строит визуализации, готовые для презентации."
  },
  {
    icon: <MessageSquareText className="w-5 h-5" />,
    title: "Генерация инсайтов",
    description: "Переводит сложные графики в простой и понятный текст, объясняющий, что именно происходит."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Бизнес-рекомендации",
    description: "Предлагает конкретные действия и следующие шаги на основе подтвержденных инсайтов."
  }
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-32 relative bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.2em] text-primary mb-6 font-medium"
          >
            Не чат-бот, а автономный агент
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Вы загружаете файл. <br className="hidden md:block" />
            <span className="font-editorial text-muted-foreground">Агент делает остальное.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed font-light mx-auto max-w-2xl"
          >
            От сырой до готовых инсайтов — процесс полностью автоматизирован. 
            Система самостоятельно валидирует данные, пишет код и генерирует отчет.
          </motion.p>
        </div>

        {/* Workflow steps presentation */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-t border-white/5 py-8 opacity-80 mb-16">
            <div className="text-[10px] w-full text-center md:text-left text-muted-foreground/60 tracking-[0.3em] uppercase mb-4 md:mb-0">
              Multi-step workflow
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-2 md:gap-x-4 gap-y-2 text-xs md:text-sm text-foreground/80 font-mono tracking-widest uppercase">
              <span>Observe</span>
              <span className="text-primary/60">→</span>
              <span>Diagnose</span>
              <span className="text-primary/60">→</span>
              <span>Plan</span>
              <span className="text-primary/60">→</span>
              <span>Execute</span>
              <span className="text-primary/60">→</span>
              <span>Verify</span>
              <span className="text-primary/60">→</span>
              <span className="text-primary">Explain</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-premium p-8 rounded-2xl relative group hover:-translate-y-1 transition-transform duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 relative z-10 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-medium text-foreground tracking-tight mb-3 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-light leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
