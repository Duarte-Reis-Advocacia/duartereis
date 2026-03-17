import { useScrollReveal } from "@/hooks/useScrollReveal";

import { WHATSAPP_URL } from "@/lib/constants";

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
      <div ref={ref} className={`container mx-auto px-4 max-w-3xl text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className={`inline-block text-primary text-[11px] font-body tracking-[0.2em] uppercase origin-left transition-transform duration-500 ${isVisible ? "scale-x-100" : "scale-x-0"}`} style={{ fontWeight: 300 }}>● DESDE 1999</span>
        <h2 className="font-heading text-3xl md:text-4xl mt-3 mb-6 text-white" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>Tradição, Ética e Resultado</h2>
        <div className={`h-0.5 w-16 bg-gradient-to-r from-primary to-transparent mb-6 mx-auto origin-center transition-transform duration-700 delay-150 ${isVisible ? "scale-x-100" : "scale-x-0"}`} />
        <p className="text-primary font-body text-lg mb-8" style={{ fontWeight: 400 }}>
          Desde 1999 — experiência, estratégia e confiança.
        </p>
        <div className="space-y-4 text-gray-300 font-body text-sm leading-relaxed text-left" style={{ fontWeight: 300 }}>
          <p>Localizada na Mooca, em São Paulo, a Duarte Reis Sociedade de Advogados atua há mais de duas décadas oferecendo assessoria jurídica segura e soluções eficientes para empresas e particulares.</p>
          <p>O escritório é conduzido pelos sócios Dra. Cristiane Reis, advogada com 27 anos de experiência, e Dr. Laefo Duarte Neto, com atuação baseada em seriedade, transparência e atendimento personalizado.</p>
          <p>Com forte atuação em Direito do Trabalho, o escritório também presta assessoria em contratos empresariais, Direito do Consumidor, Direito de Família e Direito Civil.</p>
          <p>A Dra. Cristiane Reis consolidou atuação de destaque no comércio varejista de São Paulo e interior, prestando assessoria jurídica para mais de 200 lojas, especialmente no setor de calçados, além de representar empresas em negociações sindicais na capital paulista.</p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-gold-dark transition-all duration-500 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Fale com um Advogado Agora
        </a>
      </div>
    </section>
  );
}
