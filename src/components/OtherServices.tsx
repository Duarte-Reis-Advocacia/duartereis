import { Scale, Users, AlertCircle, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const services = [
  { icon: Scale, label: "Direito do Consumidor", href: "/areas-de-atuacao/direito-do-consumidor" },
  { icon: Users, label: "Direito de Família", href: "/areas-de-atuacao/direito-de-familia" },
  { icon: AlertCircle, label: "Reparação de Danos Materiais e Morais", href: "/areas-de-atuacao/reparacao-de-danos" },
  { icon: FileText, label: "Contratos Empresariais", href: "/areas-de-atuacao/contratos-empresariais" },
];

export default function OtherServices() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: '#0a0a0a',
        backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(197,152,60,0.04) 0%, transparent 60%)',
        borderTop: "1px solid rgba(197, 152, 60, 0.15)",
        borderBottom: "1px solid rgba(197, 152, 60, 0.15)",
      }}
    >
      <div className={`container mx-auto px-4 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <h2 className="font-heading text-2xl md:text-3xl text-white mb-8" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>Atuamos Também em</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((s, i) => (
            <Link
              key={s.label}
              to={s.href}
              className={`card-dark-glass flex items-center gap-2 rounded-full px-5 py-2.5 text-gray-300 text-sm font-body transition-all duration-500 hover:text-primary ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 70}ms`, fontWeight: 300 }}
            >
              <s.icon size={14} className="text-primary" />
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
