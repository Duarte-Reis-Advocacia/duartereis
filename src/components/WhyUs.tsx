import { UserCheck, Monitor, Search, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";
import type { LucideIcon } from "lucide-react";

const benefits = [
  { icon: UserCheck, title: "Atendimento Direto com os Sócios", text: "Você sempre falará diretamente com Dr. Laefo ou Dra. Cristiane, sem intermediários." },
  { icon: Monitor, title: "Online ou Presencial", text: "Consultas por videoconferência ou em nosso escritório na Mooca com estacionamento no local." },
  { icon: Search, title: "Estratégia Individualizada", text: "Cada caso é analisado em profundidade antes de qualquer ação." },
  { icon: Trophy, title: "+25 Anos de Resultados", text: "Histórico sólido de êxito em processos trabalhistas em São Paulo." },
];

function BenefitCard({ icon: Icon, title, text, delay }: { icon: LucideIcon; title: string; text: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Icon size={26} className="text-primary" />
      </div>
      <h3 className="font-heading text-lg mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm font-body">{text}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-[#111111]">
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
