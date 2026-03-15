import { ShieldCheck, Clock, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const WHATSAPP = "https://wa.me/5511992930589";

const cards = [
  {
    icon: ShieldCheck,
    title: "Acidente do Trabalho e Doença Ocupacional",
    text: "Se você sofreu um acidente no trabalho ou desenvolveu uma doença em razão das suas atividades profissionais, você tem direito à indenização, estabilidade e benefícios. A Duarte Reis atua para garantir que seus direitos sejam respeitados integralmente, incluindo danos materiais, morais e pensão vitalícia quando aplicável.",
  },
  {
    icon: Clock,
    title: "Horas Extras Não Pagas",
    text: "Seu empregador está deixando de pagar horas extras, adicional noturno, banco de horas manipulado ou intervalo suprimido? Você pode estar perdendo valores significativos. Nossa equipe calcula o que você tem a receber e atua judicialmente para resgatar esses direitos com juros e correção.",
  },
  {
    icon: Heart,
    title: "Estabilidade da Gestante",
    text: "A lei garante que nenhuma gestante pode ser demitida sem justa causa desde a confirmação da gravidez até 5 meses após o parto. Se você foi dispensada nesse período, tem direito à reintegração ao emprego ou indenização completa. Não deixe esse direito passar.",
  },
];

function Card({ icon: Icon, title, text, delay }: { icon: typeof ShieldCheck; title: string; text: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`card-dark-glass p-8 flex flex-col transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} style={{ transitionDelay: `${delay + 50}ms` }}>
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="font-heading text-xl text-primary mb-4" style={{ fontWeight: 500 }}>{title}</h3>
      <p className="text-gray-300 font-body text-sm leading-relaxed flex-1 mb-6" style={{ fontWeight: 300 }}>{text}</p>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-gold-dark transition-colors duration-200"
      >
        Quero Ser Avaliado
      </a>
    </div>
  );
}

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: '#0f0f0f',
        backgroundImage: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(197,152,60,0.06) 0%, transparent 70%)',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Defendemos Quem Mais Precisa" subtitle="Atuamos com foco em três frentes do Direito Trabalhista que mais impactam a vida dos trabalhadores." light />
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <Card key={c.title} {...c} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
