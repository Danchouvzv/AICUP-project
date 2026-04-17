"use client";
import * as React from "react";
import Link from "next/link";
import { siteData } from "@/data/site";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/[0.02] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center">
            <Link href="/" className="text-xl tracking-tight select-none font-medium flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-sm"></div>
              </div>
              <div>
                Data<span className="font-editorial text-primary ml-1 italic font-light tracking-wide">Agent.</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {siteData.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-wide font-normal text-muted-foreground hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#demo"
              className="text-[12px] tracking-widest uppercase font-medium text-primary hover:text-white border border-primary/20 bg-primary/5 hover:bg-primary/10 px-5 py-2 rounded-full transition-all"
            >
              Смотреть демо
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-white p-2">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col space-y-6 text-center">
              {siteData.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-light text-muted-foreground hover:text-primary tracking-tight"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#demo"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-editorial text-primary tracking-tight pt-4"
              >
                Смотреть демо
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
