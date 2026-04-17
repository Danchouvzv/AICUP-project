"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Hls from "hls.js";

export function CodeNestHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource("https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8");
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => console.error("Playback failed:", err));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Fallback for native HLS support (e.g., Safari)
      video.src = "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((err) => console.error("Playback failed:", err));
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070b0a] overflow-hidden text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. Background & Layout */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b0a] via-[#070b0a]/60 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#070b0a] to-transparent"></div>

        {/* Central Glow */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[400px] xl:w-[800px] xl:h-[400px] bg-[#125e5a] rounded-full mix-blend-screen opacity-70 pointer-events-none" style={{ filter: 'blur(25px)' }}></div>

        {/* Grid System */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[25%] w-px bg-white/10 pointer-events-none z-[1]"></div>
        <div className="hidden md:block absolute top-0 bottom-0 left-[50%] w-px bg-white/10 pointer-events-none z-[1]"></div>
        <div className="hidden md:block absolute top-0 bottom-0 left-[75%] w-px bg-white/10 pointer-events-none z-[1]"></div>
      </div>

      {/* 4. Global Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12">
        {/* Minimalist Logo */}
        <div className="text-2xl font-bold tracking-tight text-white flex gap-2 items-center">
            <span className="w-5 h-5 rounded-full bg-white"></span>
            CodeNest
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {['PROJECTS', 'BLOG', 'ABOUT', 'RESUME'].map((item) => (
            <a key={item} href="#" className="text-[16px] font-medium text-white/90 hover:text-[#5ed29c] transition-colors">{item}</a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-[#5ed29c] transition-colors" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-7 h-7" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#070b0a] flex flex-col justify-center items-center">
          <button className="absolute top-8 right-6 text-white hover:text-[#5ed29c]" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col gap-10 text-center">
            {['PROJECTS', 'BLOG', 'ABOUT', 'RESUME'].map((item) => (
              <a key={item} href="#" className="text-[28px] tracking-wide text-white/90 hover:text-[#5ed29c] transition-colors" onClick={() => setMobileMenuOpen(false)}>{item}</a>
            ))}
          </nav>
        </div>
      )}

      {/* Hero Content Area */}
      <main className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 md:px-6 w-full max-w-7xl mx-auto pt-24 pb-12">
        
        {/* 2. The Liquid Glass Card */}
        <div className="relative flex flex-col items-center justify-center -translate-y-[50px] mb-6">
          <div 
            className="w-[200px] h-[200px] flex flex-col items-center justify-center relative p-6 text-center rounded-[20px]"
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              backgroundBlendMode: 'luminosity',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Border Effect Mask Setup */}
            <div 
              className="absolute inset-0 rounded-[20px] pointer-events-none"
              style={{
                padding: '1.4px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.05) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            ></div>
            
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="text-[14px] text-white/60 font-mono tracking-[0.2em]">[ 2025 ]</span>
              <p className="text-[18px] text-white/90 leading-[1.1] font-light">
                Taught by <br/> <span className="italic tracking-wider text-xl" style={{ fontFamily: 'Instrument Serif, serif' }}>Industry</span><br/> Professionals
              </p>
              <span className="text-[11px] text-white/40 tracking-wider uppercase mt-1">High-end Curriculum</span>
            </div>
          </div>
        </div>

        {/* 3. Hero Content & Typography */}
        <div className="text-center flex flex-col items-center">
            <span className="text-[#5ed29c] font-bold text-[11px] tracking-widest uppercase mb-6 drop-shadow-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Career-Ready Curriculum
            </span>

            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold uppercase leading-[1.0] tracking-tight mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                LAUNCH YOUR CODING CAREER<span className="text-[#5ed29c]">.</span>
            </h1>

            <p className="text-[14px] text-white/70 max-w-[512px] text-center mb-12 leading-relaxed font-normal">
                Master in-demand coding skills with interactive lessons, real-world projects, and expert mentorship designed to land you a job in tech.
            </p>

            <button className="group flex items-center justify-center gap-2 bg-[#5ed29c] text-[#070b0a] font-bold uppercase rounded-full px-10 h-14 text-[14px] hover:bg-[#5ed29c]/90 transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_30px_rgba(94,210,156,0.3)]">
                Get Started
                <ArrowRight className="w-5 h-5 text-[#070b0a] transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </button>
        </div>

      </main>

    </div>
  );
}
