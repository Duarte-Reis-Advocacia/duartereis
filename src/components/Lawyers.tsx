import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";

const lawyers = [
  {
    name: "Dra. Cristiane Reis",
    role: "Trabalho, Família e Consumidor",
    photo: "/cristiane.jpg",
    bio: "Advogada com vasta experiência em Direito do Trabalho, Família e Consumidor. Representa o compromisso familiar e ético que guia o escritório desde o início.",
    href: "/advogados/dra-cristiane-reis",
  },
  {
    name: "Dr. Laefo Duarte",
    role: "Direito do Trabalho",
    photo: "/laefo.jpg",
    bio: "Advogado especialista em Direito do Trabalho com mais de 25 anos de atuação em defesa de trabalhadores e empresas. Atendimento estratégico e humanizado.",
    href: "/advogados/dr-laefo-duarte",
  },
];

function LawyerCard({ name, role, photo, bio, href, delay }: typeof lawyers[0] & { delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Link
      to={href}
      ref={ref as any}
      className={`block card-dark-glass p-8 md:p-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden ring-2 ring-primary/30">
        <img src={photo} alt={name} className="w-full h-full object-cover" style={{ objectPosition: photo === '/laefo.jpg' ? 'center 15%' : 'center top' }} />
      </div>
      <h3 className="font-heading text-xl text-white mb-1" style={{ fontWeight: 500 }}>{name}</h3>
      <p className="text-primary text-sm font-body mb-4">{role}</p>
      <p className="text-gray-400 text-sm font-body leading-relaxed" style={{ fontWeight: 300 }}>{bio}</p>
      <span className="inline-block mt-4 text-primary text-sm font-body hover:underline">Ver perfil →</span>
    </Link>
  );
}

export default function Lawyers() {
  return (
    <section
      id="advogados"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: '#0d0d0d',
        backgroundImage: [
          'radial-gradient(ellipse 30% 50% at 30% 60%, rgba(197,152,60,0.05) 0%, transparent 60%)',
          'radial-gradient(ellipse 30% 50% at 70% 60%, rgba(197,152,60,0.05) 0%, transparent 60%)',
        ].join(', '),
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
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
