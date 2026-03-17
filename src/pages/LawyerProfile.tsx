import { useParams, Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, Check } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { WHATSAPP_URL } from "@/lib/constants";

const lawyers: Record<string, {
  name: string;
  subtitle: string;
  photo: string;
  bio: string[];
  formation: string[];
  badges: string[];
  highlights?: string[];
}> = {
  "dr-laefo-duarte": {
    name: "Dr. Laefo Duarte Neto",
    subtitle: "Advogado | Sócio Fundador",
    photo: "/laefo.jpg",
    bio: [
      "Há mais de vinte e cinco anos, o Dr. Laefo Duarte, sócio fundador da Duarte Reis Sociedade de Advogados, atua na condução de ações trabalhistas. Ao longo de sua trajetória, tem representado clientes em questões envolvendo relações de trabalho, conflitos contratuais e ações empresariais, além de demandas de consumo, inclusive contra instituições financeiras e plataformas digitais.",
      "Também presta assessoria jurídica a empresas de diferentes segmentos, especialmente do comércio varejista de calçados e móveis, além da indústria gráfica. Sua atuação em ações trabalhistas envolve questões frequentes como horas extras, pagamentos \"por fora\", acidentes de trabalho, adicionais de periculosidade e insalubridade, além de pedidos de indenização por danos morais.",
      "Com abordagem técnica e estratégica, o Dr. Laefo possui experiência na condução de negociações e na atuação perante tribunais, atuando em casos relacionados a relações de trabalho, contratos e direitos do consumidor.",
    ],
    formation: [
      "Graduado em Direito",
      "Pós-graduação em Direito do Consumidor",
      "Especialista em Direito e Processo do Trabalho",
    ],
    badges: ["Direito do Trabalho", "Contratos Empresariais", "Direito do Consumidor", "Assessoria Jurídica Empresarial"],
  },
  "dra-cristiane-reis": {
    name: "Dra. Cristiane Reis",
    subtitle: "Advogada | Sócia Fundadora | 27 anos de experiência",
    photo: "/cristiane.jpg",
    bio: [
      "A Dra. Cristiane Reis é advogada há 27 anos e sócia fundadora da Duarte Reis Sociedade de Advogados, com atuação consolidada no Direito Empresarial e no Direito do Trabalho.",
      "Reconhecida por sua atuação no comércio varejista de calçados, construiu sólida reputação ao longo de sua trajetória prestando assessoria jurídica para mais de 200 empresas na capital e no interior de São Paulo, além de representar empresas do setor em negociações sindicais na cidade de São Paulo.",
      "Seu trabalho é marcado pela prevenção de riscos trabalhistas, condução estratégica de negociações e defesa jurídica de empresas, sempre com foco na proteção do negócio e na segurança jurídica das atividades empresariais.",
      "Além do setor calçadista, também presta assessoria jurídica para empresas de diversos segmentos, incluindo redes de móveis planejados, gráficas e editoras, empresas de assistência técnica em telefonia, clínicas médicas e escritórios de contabilidade.",
      "Possui ampla experiência na análise e elaboração de contratos empresariais, incluindo compra e venda de fundo de comércio, contratos comerciais, locações comerciais e contratos digitais envolvendo uso de imagem e influenciadores.",
      "Seu escritório está localizado na Mooca, em São Paulo, atendendo empresas que buscam orientação jurídica preventiva, segurança jurídica e soluções eficientes para questões trabalhistas e empresariais.",
    ],
    formation: ["Graduada em Direito", "Pós-Graduada em Direito Trabalhista"],
    badges: ["Direito do Trabalho", "Direito Empresarial", "Contratos Empresariais", "Assessoria Jurídica Preventiva"],
    highlights: [
      "27 anos de advocacia",
      "Mais de 200 empresas atendidas",
      "Representação no setor calçadista em negociações sindicais",
      "Atuação consolidada no comércio varejista de SP e interior",
    ],
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
          <div className="absolute inset-0 bg-cover" style={{ backgroundImage: 'url("/office-bg.jpg")', backgroundPosition: 'center 30%' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.82) 100%)' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden ring-2 ring-primary/40">
              <img src={lawyer.photo} alt={lawyer.name} className="w-full h-full object-cover" style={{ objectPosition: slug === 'dr-laefo-duarte' ? 'center 15%' : 'center top' }} />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-3" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>{lawyer.name}</h1>
            <p className="text-primary text-lg font-body mb-6" style={{ fontWeight: 300 }}>{lawyer.subtitle}</p>
            <div className="flex justify-center mb-8">
              <span className="block h-0.5 w-20 bg-primary" />
            </div>
            <a
              href={WHATSAPP_URL}
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

        {/* Highlights (Cristiane only) */}
        {lawyer.highlights && (
          <section className="py-16 bg-[#0a0a0a]" style={{ borderTop: "1px solid rgba(197, 152, 60, 0.15)" }}>
            <div className="container mx-auto px-4 max-w-3xl">
              <HighlightsSection highlights={lawyer.highlights} />
            </div>
          </section>
        )}

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
              href={WHATSAPP_URL}
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

function HighlightsSection({ highlights }: { highlights: string[] }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h3 className="font-heading text-xl mb-6 text-white text-center" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>Destaques</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((h, i) => (
          <div key={i} className="card-dark-glass flex items-center gap-3 px-5 py-4 rounded">
            <Check size={18} className="text-primary shrink-0" />
            <span className="text-gray-300 font-body text-sm" style={{ fontWeight: 300 }}>{h}</span>
          </div>
        ))}
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
