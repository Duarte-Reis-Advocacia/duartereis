import { Award, Monitor, Target, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Award, text: "+25 Anos de Experiência" },
  { icon: Monitor, text: "Atendimento Online & Presencial" },
  { icon: Target, text: "Estratégia Sob Medida" },
  { icon: TrendingUp, text: "Histórico Comprovado" },
];

export default function CredentialsBar() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="bg-black py-8 border-t border-white/10">
      <div className={`container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        {items.map((item) => (
          <div key={item.text} className="flex flex-col items-center text-center gap-2">
            <item.icon size={28} className="text-primary" />
            <span className="text-white text-sm font-body font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
