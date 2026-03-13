import { UserCheck, Monitor, Search, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const benefits = [
  { icon: UserCheck, title: "Atendimento Direto com os Sócios", text: "Você sempre falará diretamente com Dr. Laefo ou Dra. Cristiane, sem intermediários." },
  { icon: Monitor, title: "Online ou Presencial", text: "Consultas por videoconferência ou em nosso escritório na Mooca com estacionamento no local." },
  { icon: Search, title: "Estratégia Individualizada", text: "Cada caso é analisado em profundidade antes de qualquer ação." },
  { icon: Trophy, title: "+25 Anos de Resultados", text: "Histórico sólido de êxito em processos trabalhistas em São Paulo." },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading title="Por Que Nos Escolher" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => {
            const { ref, isVisible } = useScrollReveal();
            return (
              <div
                key={b.title}
                ref={ref}
                className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg mb-2 text-foreground">{b.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
