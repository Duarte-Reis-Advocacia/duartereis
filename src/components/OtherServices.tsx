import { Scale, Users, AlertCircle, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Scale, label: "Direito do Consumidor" },
  { icon: Users, label: "Direito de Família" },
  { icon: AlertCircle, label: "Reparação de Danos Materiais e Morais" },
  { icon: FileText, label: "Rescisão Indireta e Verbas Rescisórias" },
];

export default function OtherServices() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 bg-black border-t border-white/10">
      <div className={`container mx-auto px-4 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <h2 className="font-heading text-2xl md:text-3xl text-white mb-8">Atuamos Também em</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((s) => (
            <div key={s.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-gray-300 text-sm font-body hover:border-primary/40 transition-colors duration-200">
              <s.icon size={16} className="text-primary" />
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
