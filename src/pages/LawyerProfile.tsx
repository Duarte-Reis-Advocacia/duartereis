import { useParams, Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP = "https://wa.me/5511992930589";

const lawyers: Record<string, {
  name: string;
  subtitle: string;
  initials: string;
  bio: string[];
  formation: string[];
  badges: string[];
}> = {
  "dr-laefo-duarte": {
    name: "Dr. Laefo Duarte",
    subtitle: "Advogado Sócio Fundador",
    initials: "LD",
    bio: [
      "Por mais de vinte e cinco anos, o Dr. Laefo Duarte, sócio fundador da Duarte Reis Sociedade de Advogados, tem se dedicado à representação de clientes em disputas trabalhistas de alto risco e litígios complexos. Seu portfólio de clientes inclui profissionais seniores de serviços financeiros, executivos de empresas públicas e privadas, bem como advogados, médicos, contadores e acadêmicos de renomadas instituições globais.",
      "Com expertise em estratégias jurídicas inovadoras, o Dr. Laefo atua na defesa de disputas trabalhistas diversas, destacando-se no setor financeiro. Além disso, presta assessoria em litígios comerciais, questões salariais, formação de empresas, reestruturação patrimonial, planejamento sucessório, fusões e aquisições.",
      "Sua atuação resultou em acordos monetários relevantes e em decisões judiciais pioneiras que ampliaram as proteções trabalhistas em diversas áreas do direito. O Dr. Laefo é reconhecido por sua atuação perante tribunais e painéis de arbitragem em casos envolvendo discriminação no emprego, assédio, quebra de contrato e violações de cláusulas de não concorrência.",
    ],
    formation: ["Graduado em Direito", "Pós-Graduado em Direito Trabalhista"],
    badges: ["Direito do Trabalho", "Litígios Complexos", "Setor Financeiro", "Arbitragem", "Planejamento Sucessório", "Fusões e Aquisições"],
  },
  "dra-cristiane-reis": {
    name: "Dra. Cristiane Reis",
    subtitle: "Advogada Sócia Fundadora",
    initials: "CR",
    bio: [
      "Dra. Cristiane, sócia fundadora da Duarte Reis Sociedade de Advogados, possui vasta experiência de 25 anos atuando em casos complexos de múltiplas áreas do direito. Durante sua trajetória, representou funcionários e executivos em disputas trabalhistas contra algumas das maiores corporações do mundo.",
      "Com atuação constante em tribunais estaduais e federais, além de perante painéis de arbitragem, Dra. Cristiane tem lidado com questões como quebra de contrato, não pagamento de salários, compensação de bônus, discriminação no emprego, retaliação ilegal e denúncia de irregularidades.",
      "Seus clientes incluem executivos seniores, profissionais financeiros, de vendas, advogados, médicos e profissionais de organizações governamentais de destaque. Sua dedicação e expertise refletem-se na capacidade de defender os interesses de seus clientes de forma eficaz e estratégica, garantindo resultados positivos em casos complexos e desafiadores.",
    ],
    formation: ["Graduada em Direito", "Pós-Graduada em Direito Trabalhista"],
    badges: ["Direito do Trabalho", "Direito de Família", "Direito do Consumidor", "Arbitragem", "Discriminação no Emprego", "Litígios Corporativos"],
  },
};

export default function LawyerProfile() {
  const { slug } = useParams<{ slug: string }>();
  const lawyer = slug ? lawyers[slug] : null;

  if (!lawyer) {
    return (
      <PageTransition>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20 bg-[#0a0a0a]">
          <div className="text-center">
            <h1 className="font-heading text-3xl mb-4 text-white">Advogado não encontrado</h1>
            <Link to="/" className="text-primary hover:underline">Voltar à página inicial</Link>
          </div>
        </div>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/lawyer-bg.jpg')" }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 100%)' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-28 h-28 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-6">
              <span className="font-heading text-3xl text-primary">{lawyer.initials}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-3" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>{lawyer.name}</h1>
            <p className="text-primary text-lg font-body mb-6" style={{ fontWeight: 300 }}>{lawyer.subtitle}</p>
            <div className="flex justify-center mb-8">
              <span className="block h-0.5 w-20 bg-primary" />
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-primary hover:text-black transition-all duration-200"
              style={{ borderWidth: '1.5px' }}
            >
              <MessageCircle size={18} /> Agendar Consulta
            </a>
          </div>
        </section>

        {/* Bio */}
        <section className="py-20 md:py-28 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 max-w-3xl">
            <BiographySection lawyer={lawyer} />
          </div>
        </section>

        {/* Badges */}
        <section className="py-20 bg-[#111111]">
          <div className="container mx-auto px-4 max-w-3xl">
            <BadgesSection badges={lawyer.badges} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 md:py-28" style={{ background: "linear-gradient(180deg, #000000 0%, #0d0800 40%, #000000 100%)" }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>Fale com {lawyer.name.split(" ")[0]} {lawyer.name.split(" ")[1]}</h2>
            <div className="flex justify-center mb-6">
              <span className="block h-0.5 w-16 bg-primary" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-body mb-8" style={{ fontWeight: 300 }}>
              <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> (11) 9 9293-0589</span>
              <span className="flex items-center gap-2"><Mail size={16} className="text-primary" /> contato@duartereisadvogados.com.br</span>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded text-lg font-bold hover:bg-gold-dark transition-colors duration-200"
            >
              <MessageCircle size={22} /> Falar pelo WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
}

function BiographySection({ lawyer }: { lawyer: typeof lawyers[string] }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="font-heading text-2xl md:text-3xl mb-6 text-primary" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>Sobre {lawyer.name}</h2>
      <div className="h-0.5 w-16 bg-primary mb-8" />
      <div className="space-y-5 text-gray-300 font-body text-sm leading-relaxed" style={{ fontWeight: 300 }}>
        {lawyer.bio.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(197, 152, 60, 0.2)" }}>
        <h3 className="font-heading text-lg mb-3 text-white" style={{ fontWeight: 500 }}>Formação</h3>
        <ul className="space-y-1 text-gray-400 font-body text-sm" style={{ fontWeight: 300 }}>
          {lawyer.formation.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-0.5 h-4 bg-primary mt-0.5 shrink-0 rounded" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BadgesSection({ badges }: { badges: string[] }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="font-heading text-2xl mb-6 text-white text-center" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>Áreas de Especialização</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {badges.map((b) => (
          <span key={b} className="card-dark-glass text-primary rounded-full px-5 py-2 text-sm font-body" style={{ fontWeight: 400 }}>{b}</span>
        ))}
      </div>
    </div>
  );
}
