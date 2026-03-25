import { useEffect, useRef } from "react";
import { Shield, MapPin, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  const heroBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const offset = lastScrollY * 0.4;
        if (heroBgRef.current) {
          heroBgRef.current.style.transform = `translateY(${offset}px) translateZ(0)`;
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax BG */}
      <div
        ref={heroBgRef}
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundPosition: 'center 30%', transform: 'translateY(0) translateZ(0)', willChange: 'transform' }}
      />
      {/* Directional asymmetric overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.48)' }}
      />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 w-full h-[120px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-40 text-left">
        <h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 animate-[fade-in_0.8s_ease-out] max-w-xl"
          style={{ fontWeight: 300, letterSpacing: '0.04em' }}
        >
          <span className="text-white">Experiência jurídica e atuação </span>
          <span style={{ color: '#C5983C' }}>estratégica há 27 anos</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 font-body animate-[fade-in_1s_ease-out]" style={{ fontWeight: 300 }}>
          Soluções seguras para empresas e trabalhadores em Direito do Trabalho, contratos empresariais, consumidor e família.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12 animate-[fade-in_1.2s_ease-out]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded font-semibold text-lg hover:bg-gold-light transition-colors duration-200"
            style={{ animation: 'subtle-pulse 2.8s ease-in-out infinite' }}
          >
            Consulta Gratuita pelo WhatsApp
          </a>
          <Link
            to="/artigos"
            className="bg-white text-black px-8 py-4 rounded font-semibold text-lg border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out"
            style={{ letterSpacing: '0.01em' }}
          >
            Leia Nossos Artigos
          </Link>
        </div>

        <div className="flex flex-wrap justify-start gap-6 md:gap-10 text-gray-300 text-sm font-body animate-[fade-in_1.4s_ease-out]" style={{ letterSpacing: '0.05em' }}>
          <span className="flex items-center gap-2" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}><span className="flex items-center gap-2" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}><Shield size={18} className="text-primary" /> +30 Anos de Experiência</span></span>
          <span className="flex items-center gap-2" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}><Monitor size={18} className="text-primary" /> Atendimento Online e Presencial</span>
          <span className="flex items-center gap-2" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}><MapPin size={18} className="text-primary" /> Mooca, São Paulo</span>
        </div>
      </div>
    </section>
  );
}
