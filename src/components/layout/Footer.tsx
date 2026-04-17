import { siteData } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#050505] text-sm py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

          <div className="flex items-center">
            <div className="text-2xl font-light tracking-tight">
              Data<span className="font-editorial text-primary ml-1 italic">Agent.</span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-12 gap-y-4">
            {siteData.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12px] uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-24 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground/40">
          <div>&copy; {new Date().getFullYear()} {siteData.team.name}. All rights reserved.</div>
          <div>Designed for AICUP Competition.</div>
        </div>
      </div>
    </footer>
  );
}
