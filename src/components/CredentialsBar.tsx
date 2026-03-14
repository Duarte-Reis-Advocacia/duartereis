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
      className="py-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #14100a 35%, #1a1208 50%, #14100a 65%, #0a0a0a 100%)",
        borderTop: "1px solid rgba(197, 152, 60, 0.25)",
        borderBottom: "1px solid rgba(197, 152, 60, 0.25)",
      }}
    >
      {/* Radial glow from above */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(197,152,60,0.08) 0%, transparent 60%)' }} />
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
