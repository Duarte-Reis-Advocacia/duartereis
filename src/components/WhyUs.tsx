import { UserCheck, Monitor, Search, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";
import type { LucideIcon } from "lucide-react";

const benefits = [
  { icon: UserCheck, title: "Atendimento direto com os Proprietários", text: "Você sempre falará diretamente com Dr. Laefo ou Dra. Cristiane, sem intermediários." },
  { icon: Monitor, title: "Online ou Presencial", text: "Consultas por videoconferência ou em nosso escritório na Mooca com estacionamento no local." },
  { icon: Search, title: "Estratégia Individualizada", text: "Cada caso é analisado em profundidade antes de qualquer ação." },
  { icon: Trophy, title: "+25 Anos de Resultados", text: "Histórico sólido de êxito em processos trabalhistas em São Paulo." },
];

function BenefitCard({ icon: Icon, title, text, delay }: { icon: LucideIcon; title: string; text: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} style={{ transitionDelay: `${delay + 50}ms` }}>
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="font-heading text-lg mb-2 text-white" style={{ fontWeight: 500 }}>{title}</h3>
      <p className="text-gray-400 text-sm font-body" style={{ fontWeight: 300 }}>{text}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: '#0f0f0f',
        backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(197,152,60,0.04) 0%, transparent 60%)',
      }}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Por Que Nos Escolher" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} {...b} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
