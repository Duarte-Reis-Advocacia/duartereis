import { Link } from "react-router-dom";
import { Scale, Users, AlertCircle, Briefcase } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GradientDivider from "@/components/GradientDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { LucideIcon } from "lucide-react";

const areas = [
  { icon: Briefcase, title: "Direito Trabalhista", desc: "Defesa completa dos direitos dos trabalhadores e assessoria empresarial.", href: "/areas-de-atuacao/direito-trabalhista" },
  { icon: Scale, title: "Direito do Consumidor", desc: "Proteção contra práticas abusivas e defesa dos seus direitos.", href: "/areas-de-atuacao/direito-do-consumidor" },
  { icon: Users, title: "Direito de Família", desc: "Atuação sensível em divórcio, guarda, pensão e planejamento sucessório.", href: "/areas-de-atuacao/direito-de-familia" },
  { icon: AlertCircle, title: "Reparação de Danos", desc: "Indenizações por danos materiais e morais com atuação firme.", href: "/areas-de-atuacao/reparacao-de-danos" },
];

function AreaCard({ icon: Icon, title, desc, href, delay }: { icon: LucideIcon; title: string; desc: string; href: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Link
      to={href}
      ref={ref as any}
      className={`block card-dark-glass p-8 text-center transition-all duration-700 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
        <Icon size={28} className="text-primary" />
      </div>
      <h3 className="font-heading text-xl text-primary mb-3">{title}</h3>
      <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">{desc}</p>
      <span className="text-primary text-sm font-body">Saiba mais →</span>
    </Link>
  );
}

export default function AreasDeAtuacao() {
  return (
    <PageTransition>
      <Header />
      <main>
        <section className="bg-black pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">Áreas de Atuação</h1>
            <div className="flex justify-center mb-6">
              <span className="block h-0.5 w-20 bg-primary" />
            </div>
            <p className="text-gray-300 text-lg font-body max-w-2xl mx-auto">
              Atuamos com excelência em diversas áreas do direito, sempre priorizando a defesa dos seus interesses.
            </p>
          </div>
        </section>

        <GradientDivider variant="gold-accent" />

        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {areas.map((a, i) => (
                <AreaCard key={a.title} {...a} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
}
