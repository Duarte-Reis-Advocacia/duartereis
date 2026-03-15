import { Award, Monitor, Target, TrendingUp } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Award, value: 25, suffix: "+", label: "Anos de Experiência" },
  { icon: Monitor, value: 0, suffix: "", label: "Atendimento Online & Presencial" },
  { icon: Target, value: 0, suffix: "", label: "Estratégia Sob Medida" },
  { icon: TrendingUp, value: 0, suffix: "", label: "Histórico Comprovado" },
];

function StatCard({ icon: Icon, value, suffix, label, delay, isVisible }: {
  icon: typeof Award; value: number; suffix: string; label: string; delay: number; isVisible: boolean;
}) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div
      ref={ref}
      className={`flex items-center gap-3 rounded-[10px] px-6 py-4 backdrop-blur-sm transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(197, 152, 60, 0.18)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(197, 152, 60, 0.07)';
        e.currentTarget.style.borderColor = 'rgba(197, 152, 60, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
        e.currentTarget.style.borderColor = 'rgba(197, 152, 60, 0.18)';
      }}
    >
      <Icon size={24} className="text-primary shrink-0" />
      <div className="flex flex-col">
        {value > 0 && (
          <span className="text-primary text-xl font-heading" style={{ fontWeight: 500 }}>{count}{suffix}</span>
        )}
        <span className="text-white text-sm font-body" style={{ fontWeight: 400 }}>{label}</span>
      </div>
    </div>
  );
}

export default function CredentialsBar() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className="py-10 relative overflow-hidden"
      style={{
        background: '#0a0a0a',
        borderTop: '0.5px solid rgba(197, 152, 60, 0.35)',
      }}
    >
      <div className={`container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {items.map((item, idx) => (
          <StatCard key={item.label} {...item} delay={idx * 100} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}
