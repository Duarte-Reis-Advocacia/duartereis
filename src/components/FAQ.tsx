import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Fui demitida grávida. Tenho direito à estabilidade?",
    a: "Sim. A lei garante estabilidade desde a confirmação da gravidez até 5 meses após o parto, independentemente do conhecimento do empregador. Se você foi demitida nesse período, tem direito à reintegração ou indenização integral.",
  },
  {
    q: "Meu empregador nunca pagou horas extras. Posso cobrar?",
    a: "Sim. É possível ingressar com ação trabalhista para reaver os valores não pagos dos últimos 5 anos, com acréscimo de 50% sobre cada hora (ou 100% em feriados), além de reflexos em 13º, férias e FGTS.",
  },
  {
    q: "O que caracteriza acidente do trabalho?",
    a: "Qualquer evento que ocorra em razão do exercício do trabalho, provocando lesão corporal ou perturbação funcional, pode ser caracterizado como acidente de trabalho. Isso inclui doenças ocupacionais desenvolvidas ao longo do tempo.",
  },
  {
    q: "Como funciona a consulta inicial?",
    a: "A consulta inicial é feita pelo WhatsApp ou presencialmente em nosso escritório na Mooca. Você descreve seu caso e um dos sócios avalia os próximos passos sem compromisso.",
  },
  {
    q: "Vocês atendem por honorários de sucesso?",
    a: "Em muitos casos trabalhistas, sim. Atendemos por honorários condicionados ao êxito, o que significa que você não paga se não ganhar. Consulte-nos para avaliar seu caso específico.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="faq"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: '#0a0a0a',
        backgroundImage: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(197,152,60,0.04) 0%, transparent 60%)',
      }}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title="Dúvidas Frequentes" light />
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className={`card-dark-glass rounded px-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <AccordionTrigger className="text-left font-body font-medium text-white hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-body text-sm leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
