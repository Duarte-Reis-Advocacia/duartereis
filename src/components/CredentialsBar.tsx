import { Award, Monitor, Target, TrendingUp } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function CounterItem({ icon: Icon, value, suffix, label, delay }: { icon: typeof Award; value: number; suffix: string; label: string; delay: number }) {
  const { ref, value: count, isVisible } = useCountUp(value);
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center gap-2 transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon size={28} className="text-primary" />
      <span className="text-primary text-2xl font-bold font-heading">{count}{suffix}</span>
      <span className="text-white text-sm font-body font-medium">{label}</span>
    </div>
  );
}

const items = [
  { icon: Award, value: 25, suffix: "+", label: "Anos de Experiência" },
  { icon: Monitor, value: 0, suffix: "", label: "Atendimento Online & Presencial" },
  { icon: Target, value: 0, suffix: "", label: "Estratégia Sob Medida" },
  { icon: TrendingUp, value: 0, suffix: "", label: "Histórico Comprovado" },
];

export default function CredentialsBar() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className="py-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #14100a 35%, #1a1208 50%, #14100a 65%, #0a0a0a 100%)",
        borderTop: "1px solid rgba(197, 152, 60, 0.25)",
        borderBottom: "1px solid rgba(197, 152, 60, 0.25)",
      }}
    >
      {/* Radial glow from above */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(197,152,60,0.08) 0%, transparent 60%)' }} />
      <div className={`container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {items.map((item, idx) =>
          item.value > 0 ? (
            <CounterItem key={item.label} icon={item.icon} value={item.value} suffix={item.suffix} label={item.label} delay={idx * 100} />
          ) : (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center gap-2 transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <item.icon size={28} className="text-primary" />
              <span className="text-white text-sm font-body font-medium">{item.label}</span>
            </div>
          )
        )}
        {/* Vertical separators */}
        {[1, 2, 3].map((i) => (
          <div
            key={`sep-${i}`}
            className="hidden md:block absolute top-1/2 -translate-y-1/2 h-12 w-px bg-primary/20"
            style={{ left: `${i * 25}%` }}
          />
        ))}
      </div>
    </section>
  );
}
