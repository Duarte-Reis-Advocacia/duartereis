import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const lawyers = [
  {
    name: "Dr. Laefo Duarte",
    role: "Sócio Fundador · Direito do Trabalho",
    initials: "LD",
    bio: "Advogado especialista em Direito do Trabalho. Sócio fundador com mais de 25 anos de atuação em defesa de trabalhadores e empresas. Atendimento estratégico e humanizado.",
  },
  {
    name: "Dra. Cristiane Reis",
    role: "Sócia · Trabalho, Família e Consumidor",
    initials: "CR",
    bio: "Advogada com vasta experiência em Direito do Trabalho, Família e Consumidor. Parceira de carreira e irmã, representa o compromisso familiar e ético que guia o escritório desde o início.",
  },
];

function LawyerCard({ name, role, initials, bio, delay }: typeof lawyers[0] & { delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`bg-black border border-white/10 rounded-lg p-8 md:p-10 text-center transition-all duration-700 hover:border-primary/40 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-6">
        <span className="font-heading text-2xl text-primary">{initials}</span>
      </div>
      <h3 className="font-heading text-xl text-white mb-1">{name}</h3>
      <p className="text-primary text-sm font-body mb-4">{role}</p>
      <p className="text-gray-400 text-sm font-body leading-relaxed">{bio}</p>
    </div>
  );
}

export default function Lawyers() {
  return (
    <section id="advogados" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading title="Nossos Advogados" light />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {lawyers.map((l, i) => (
            <LawyerCard key={l.name} {...l} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  );
}
