import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP = "https://wa.me/5511992930589";

export default function CTAFinal() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="contato" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #000000 0%, #0d0800 40%, #000000 100%)" }}>
      <div ref={ref} className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          Seus Direitos Não Podem Esperar
        </h2>
        <div className="flex justify-center mb-6">
          <span className={`block h-0.5 bg-primary origin-left transition-transform duration-700 delay-300 ${isVisible ? "scale-x-100" : "scale-x-0"}`} style={{ width: "60px" }} />
        </div>
        <p className="text-gray-300 text-lg mb-10 font-body">
          Entre em contato agora e receba uma avaliação do seu caso.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded text-lg font-bold hover:bg-gold-dark transition-colors duration-200 shadow-lg shadow-primary/20"
        >
          <MessageCircle size={24} /> Falar pelo WhatsApp Agora
        </a>

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-400 text-sm font-body">
          <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> (11) 9 9293-0589</span>
          <span className="flex items-center gap-2"><Mail size={16} className="text-primary" /> contato@duartereisadvogados.com.br</span>
          <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Av. Paes de Barros, 3399 - Conj. 23/24, Mooca - São Paulo/SP</span>
        </div>
      </div>
    </section>
  );
}
