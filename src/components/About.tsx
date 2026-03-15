import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP = "https://wa.me/5511992930589";

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="sobre"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: '#111111',
        backgroundImage: [
          'radial-gradient(ellipse 50% 80% at 100% 50%, rgba(255,245,210,0.04) 0%, transparent 60%)',
          'radial-gradient(ellipse at 10% 20%, rgba(197,152,60,0.05) 0%, transparent 40%)',
        ].join(', '),
      }}
    >
      <div ref={ref} className={`container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="rounded-md overflow-hidden shadow-2xl">
          <img src="/about-bg-new.jpg" alt="Interior do escritório Duarte Reis" className="w-full h-[400px] object-cover object-center" loading="lazy" />
        </div>
        <div>
          <span className={`inline-block text-primary text-[11px] font-body tracking-[0.2em] uppercase origin-left transition-transform duration-500 ${isVisible ? "scale-x-100" : "scale-x-0"}`} style={{ fontWeight: 300 }}>● DESDE 1999</span>
          <h2 className="font-heading text-3xl md:text-4xl mt-3 mb-6 text-white" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>Tradição, Ética e Resultado</h2>
          <div className={`h-0.5 w-16 bg-gradient-to-r from-primary to-transparent mb-6 origin-left transition-transform duration-700 delay-150 ${isVisible ? "scale-x-100" : "scale-x-0"}`} />
          <div className="space-y-4 text-gray-300 font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
            <p>Desde 1999, a Duarte Reis Sociedade de Advogados, localizada no bairro da Mooca em São Paulo, atua com excelência e comprometimento no cenário jurídico, oferecendo soluções legais seguras e eficazes.</p>
            <p>Somos um escritório especializado em Direito do Trabalho, com forte atuação também em Direito do Consumidor, Direito de Família e Direito Civil. Formado por dois irmãos sócios, o escritório mantém um ambiente de confiança, transparência e atendimento personalizado.</p>
            <p>Cada cliente é acolhido com empatia e respeito — nossa missão é oferecer não apenas defesa jurídica, mas também tranquilidade em momentos decisivos.</p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-gold-dark transition-all duration-500 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Fale com um Advogado Agora
          </a>
        </div>
      </div>
    </section>
  );
}
