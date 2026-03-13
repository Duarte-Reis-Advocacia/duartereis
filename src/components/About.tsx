import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP = "https://wa.me/5511992930589";

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div ref={ref} className={`container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img src="/about-bg.jpg" alt="Interior do escritório Duarte Reis" className="w-full h-[400px] object-cover" loading="lazy" />
        </div>
        <div>
          <span className="text-primary text-sm font-semibold tracking-widest font-body">● DESDE 1999</span>
          <h2 className="font-heading text-3xl md:text-4xl mt-3 mb-6 text-foreground">Tradição, Ética e Resultado</h2>
          <div className="h-0.5 w-16 bg-primary mb-6" />
          <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
            <p>Desde 1999, a Duarte Reis Sociedade de Advogados, localizada no bairro da Mooca em São Paulo, atua com excelência e comprometimento no cenário jurídico, oferecendo soluções legais seguras e eficazes.</p>
            <p>Somos um escritório especializado em Direito do Trabalho, com forte atuação também em Direito do Consumidor, Direito de Família e Direito Civil. Formado por dois irmãos sócios, o escritório mantém um ambiente de confiança, transparência e atendimento personalizado.</p>
            <p>Cada cliente é acolhido com empatia e respeito — nossa missão é oferecer não apenas defesa jurídica, mas também tranquilidade em momentos decisivos.</p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold hover:bg-gold-light transition-colors duration-200"
          >
            Fale com um Advogado Agora
          </a>
        </div>
      </div>
    </section>
  );
}
