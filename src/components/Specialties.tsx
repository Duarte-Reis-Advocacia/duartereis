import { useState } from "react";
import { ShieldCheck, Clock, Heart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

import { WHATSAPP_URL } from "@/lib/constants";

const cards = [
  {
    icon: ShieldCheck,
    title: "Acidente do Trabalho e Doença Ocupacional",
    text: "Se você sofreu um acidente no trabalho ou desenvolveu uma doença em razão das suas atividades profissionais, você tem direito à indenização, estabilidade e benefícios. A Duarte Reis atua para garantir que seus direitos sejam respeitados integralmente, incluindo danos materiais, morais e pensão vitalícia quando aplicável.",
    articleSlug: "/artigos/acidente-de-trabalho-entenda-seus-direitos",
  },
  {
    icon: Clock,
    title: "Horas Extras Não Pagas",
    text: "Seu empregador está deixando de pagar horas extras, adicional noturno, banco de horas manipulado ou intervalo suprimido? Você pode estar perdendo valores significativos. Nossa equipe calcula o que você tem a receber e atua judicialmente para resgatar esses direitos com juros e correção.",
    articleSlug: "/artigos/horas-extras-nao-pagas-como-calcular",
  },
  {
    icon: Heart,
    title: "Estabilidade da Gestante",
    text: "A lei garante que nenhuma gestante pode ser demitida sem justa causa desde a confirmação da gravidez até 5 meses após o parto. Se você foi dispensada nesse período, tem direito à reintegração ao emprego ou indenização completa. Não deixe esse direito passar.",
    articleSlug: "/artigos/estabilidade-da-gestante-o-que-a-lei-garante",
  },
];

function AccordionCard({ icon: Icon, title, text, articleSlug, delay, isOpen, onToggle }: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
  articleSlug: string;
  delay: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`card-dark-glass p-8 flex flex-col transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={onToggle}
        className="flex items-center gap-4 w-full text-left cursor-pointer"
      >
        <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} style={{ transitionDelay: `${delay + 50}ms` }}>
          <Icon size={22} className="text-primary" />
        </div>
        <h3 className="font-heading text-xl text-primary flex-1" style={{ fontWeight: 500 }}>{title}</h3>
        <ChevronDown
          size={20}
          className={`text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        <p className="text-gray-300 font-body text-sm leading-relaxed mt-6 mb-6" style={{ fontWeight: 300 }}>{text}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-gold-dark transition-colors duration-200"
          >
            Agende uma Consulta
          </a>
          <Link
            to={articleSlug}
            className="inline-flex items-center justify-center border border-primary text-primary px-6 py-3 rounded text-sm font-semibold hover:bg-primary hover:text-black transition-all duration-200"
          >
            Leia o artigo →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Specialties() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

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
        <SectionHeading title="Experiência na solução de conflitos trabalhistas" subtitle="Nossa atuação abrange as principais demandas do Direito do Trabalho, orientando e defendendo empresas e trabalhadores com estratégia e segurança jurídica." light />
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {cards.map((c, i) => (
            <AccordionCard
              key={c.title}
              {...c}
              delay={i * 120}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
