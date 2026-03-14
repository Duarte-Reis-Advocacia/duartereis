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
    <section
      ref={ref}
      className="py-8"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1208 50%, #0a0a0a 100%)",
        borderTop: "1px solid rgba(197, 152, 60, 0.2)",
        borderBottom: "1px solid rgba(197, 152, 60, 0.2)",
      }}
    >
      <div className={`container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        {items.map((item, idx) => (
          <div key={item.text} className="flex flex-col items-center text-center gap-2 relative">
            <item.icon size={28} className="text-primary" />
            <span className="text-white text-sm font-body font-medium">{item.text}</span>
            {idx < items.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-primary/20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
