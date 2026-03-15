import { useEffect, useState } from "react";
import { Shield, MapPin, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP = "https://wa.me/5511992930589";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundPosition: 'center 30%', transform: `translateY(${offsetY}px)` }}
      />
      {/* Directional asymmetric overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.48)' }}
      />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 w-full h-[120px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-32 md:py-40 text-left max-w-[42%]">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 animate-[fade-in_0.8s_ease-out]" style={{ fontWeight: 300, letterSpacing: '0.04em' }}>
          Seus Direitos Trabalhistas,
          <br />
          <span className="text-primary">Defendidos com Firmeza</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-10 font-body animate-[fade-in_1s_ease-out]" style={{ fontWeight: 300 }}>
          Desde 1999, o escritório Duarte Reis representa trabalhadores em São Paulo com ética, estratégia e resultados comprovados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12 animate-[fade-in_1.2s_ease-out]">
          <a
            href={WHATSAPP}
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
          <span className="flex items-center gap-2" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}><Shield size={18} className="text-primary" /> +25 Anos de Experiência</span>
          <span className="flex items-center gap-2" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}><Monitor size={18} className="text-primary" /> Atendimento Online e Presencial</span>
          <span className="flex items-center gap-2" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}><MapPin size={18} className="text-primary" /> Mooca, São Paulo</span>
        </div>
      </div>
    </section>
  );
}
