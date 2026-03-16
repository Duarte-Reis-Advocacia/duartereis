import { useParams, Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP = "https://wa.me/5511992930589";

const areaBgImages: Record<string, string> = {
  "direito-trabalhista": "/area-trabalhista.jpg",
  "direito-do-consumidor": "/area-consumidor.jpg",
  "direito-de-familia": "/area-familia.jpg",
  "reparacao-de-danos": "/area-danos.jpg",
  "contratos-empresariais": "/areas-bg.jpg",
};

interface AreaData {
  title: string;
  subtitle: string;
  intro: string;
  topics: { title: string; text: string }[];
  cta: string;
}

const areas: Record<string, AreaData> = {
  "direito-trabalhista": {
    title: "Advocacia Trabalhista",
    subtitle: "Segurança Jurídica para Trabalhadores e Empresas",
    intro: "O Direito do Trabalho é a área de maior especialização da Duarte Reis. Há mais de 25 anos defendemos os direitos dos trabalhadores com estratégia, ética e resultados comprovados.",
    topics: [
      { title: "Consultoria trabalhista preventiva", text: "Orientação estratégica para empresas e trabalhadores na prevenção de conflitos e passivos trabalhistas." },
      { title: "Defesa em reclamações trabalhistas", text: "Representação técnica e estratégica em todas as fases do processo trabalhista." },
      { title: "Rescisão indireta do contrato de trabalho", text: "Quando o empregador descumpre obrigações graves, o trabalhador pode pedir a rescisão com todos os direitos preservados." },
      { title: "Horas extras não pagas", text: "Levantamento e cobrança judicial de horas extras, adicional noturno e intervalos suprimidos." },
      { title: "Pagamento \"por fora\"", text: "Reconhecimento e integração de valores pagos informalmente para cálculo correto de verbas trabalhistas." },
      { title: "Adicional de insalubridade", text: "Garantia do pagamento de adicionais para trabalho em condições insalubres." },
      { title: "Adicional de periculosidade", text: "Garantia do pagamento de adicionais para trabalho em condições perigosas." },
      { title: "Acidente de trabalho", text: "Representação em casos de acidente e doença ocupacional, com busca de indenização integral e estabilidade." },
      { title: "Indenização por dano moral trabalhista", text: "Defesa em casos de assédio, humilhação e ofensas no ambiente de trabalho com busca de indenização." },
      { title: "Reconhecimento de vínculo empregatício", text: "Reconhecimento de vínculo em contratos fraudulentos de PJ ou informais com características de emprego." },
    ],
    cta: "Você tem direitos trabalhistas a reivindicar? Estamos prontos para avaliar seu caso.",
  },
  "direito-do-consumidor": {
    title: "Direito do Consumidor",
    subtitle: "Defendendo seus Direitos com Firmeza",
    intro: "Atuamos na defesa dos consumidores contra práticas abusivas, garantindo que seus direitos previstos no Código de Defesa do Consumidor sejam integralmente respeitados.",
    topics: [
      { title: "Orientação jurídica preventiva", text: "Assessoria para prevenir conflitos e proteger seus direitos antes que problemas se agravem." },
      { title: "Análise de relação de consumo", text: "Avaliação técnica da relação entre consumidor e fornecedor para identificar irregularidades." },
      { title: "PROCON", text: "Orientação e representação em procedimentos junto ao PROCON para resolução de conflitos." },
      { title: "Cobrança indevida", text: "Ações contra cobranças abusivas, duplicadas ou por serviços não contratados." },
      { title: "Negativação indevida", text: "Ações para retirada do nome de cadastros de inadimplentes e indenização por inclusão indevida." },
      { title: "Reparação de danos materiais", text: "Indenizações por prejuízos financeiros causados por produtos ou serviços defeituosos." },
      { title: "Reparação de danos morais", text: "Indenizações por ofensas à honra, imagem e dignidade do consumidor." },
      { title: "Fraude bancária", text: "Defesa contra fraudes em contas, cartões e operações bancárias indevidas." },
      { title: "Golpe do PIX", text: "Representação em casos de fraude envolvendo transferências PIX e recuperação de valores." },
      { title: "Bloqueio de contas", text: "Ações contra bloqueios indevidos de contas bancárias e retenção irregular de valores." },
      { title: "Problemas com bancos e plataformas digitais", text: "Defesa contra práticas abusivas de instituições financeiras e plataformas digitais." },
    ],
    cta: "Teve seus direitos de consumidor violados? Fale conosco e saiba como podemos ajudá-lo.",
  },
  "direito-de-familia": {
    title: "Direito de Família",
    subtitle: "Protegendo os Vínculos com Responsabilidade e Cuidado",
    intro: "Atuamos com sensibilidade e profissionalismo em questões familiares, buscando sempre soluções que preservem o bem-estar de todos os envolvidos, especialmente crianças e adolescentes.",
    topics: [
      { title: "Divórcio", text: "Condução de processos de divórcio judicial e extrajudicial com partilha de bens." },
      { title: "Pensão alimentícia", text: "Fixação, revisão e execução de pensão alimentícia, garantindo o sustento adequado dos dependentes." },
      { title: "Guarda de filhos", text: "Definição de guarda compartilhada ou unilateral com foco no melhor interesse da criança." },
      { title: "Regulamentação de visitas", text: "Estabelecimento de regime de convivência equilibrado entre pais e filhos." },
      { title: "Dissolução de união estável", text: "Condução de processos de dissolução de união estável com partilha patrimonial." },
      { title: "Inventário", text: "Assessoria completa em processos de inventário judicial e extrajudicial para transmissão de bens." },
    ],
    cta: "Precisa de orientação em questões familiares? Conte com nossa experiência e discrição.",
  },
  "reparacao-de-danos": {
    title: "Reparação de Danos Materiais e Morais",
    subtitle: "Defesa com Firmeza e Comprometimento",
    intro: "Atuamos na defesa de vítimas de danos, buscando a reparação integral pelos prejuízos sofridos, sejam eles materiais, morais ou estéticos.",
    topics: [
      { title: "Acidentes de Trânsito", text: "Representação de vítimas de acidentes automobilísticos para obtenção de indenização por danos materiais, morais e estéticos." },
      { title: "Negligência Médica", text: "Ações contra profissionais e instituições de saúde por erros médicos, diagnósticos equivocados e negligência." },
      { title: "Acidentes de Trabalho", text: "Indenizações por acidentes ocorridos no ambiente de trabalho ou em razão da atividade profissional." },
      { title: "Responsabilidade Civil", text: "Ações de reparação por danos causados por terceiros em diversas situações do cotidiano." },
      { title: "Danos Morais", text: "Indenizações por ofensas à honra, imagem, privacidade e dignidade da pessoa humana." },
      { title: "Violações de Direitos Humanos", text: "Representação em casos de violação de direitos fundamentais, discriminação e tratamento desumano." },
    ],
    cta: "Sofreu danos e precisa de reparação? Nossa equipe está pronta para defender seus direitos.",
  },
  "contratos-empresariais": {
    title: "Contratos Empresariais",
    subtitle: "Segurança Jurídica para o seu Negócio",
    intro: "Oferecemos assessoria especializada na elaboração, análise e revisão de contratos empresariais, garantindo segurança jurídica e proteção para as atividades do seu negócio.",
    topics: [
      { title: "Contratos comerciais", text: "Elaboração e revisão de contratos comerciais com cláusulas que protegem os interesses da empresa." },
      { title: "Contratos de prestação de serviços", text: "Assessoria na formalização de contratos de prestação de serviços com segurança jurídica." },
      { title: "Compra e venda de fundo de comércio", text: "Orientação jurídica completa em operações de compra e venda de estabelecimentos comerciais." },
      { title: "Contratos de locação comercial", text: "Elaboração e análise de contratos de locação comercial com proteção para locador e locatário." },
      { title: "Análise preventiva de riscos contratuais", text: "Avaliação técnica de contratos para identificação e mitigação de riscos jurídicos." },
    ],
    cta: "Precisa de assessoria em contratos empresariais? Fale conosco para proteger seu negócio.",
  },
};

export default function AreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? areas[slug] : null;

  if (!area) {
    return (
      <PageTransition>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20 bg-[#0a0a0a]">
          <div className="text-center">
            <h1 className="font-heading text-3xl mb-4 text-white">Área não encontrada</h1>
            <Link to="/areas-de-atuacao" className="text-primary hover:underline">Ver todas as áreas</Link>
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
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${areaBgImages[slug!] || "/areas-bg.jpg"}')` }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 100%)' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl text-white mb-3" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>{area.title}</h1>
            <p className="text-primary text-lg font-body mb-6" style={{ fontWeight: 300 }}>{area.subtitle}</p>
            <div className="flex justify-center">
              <span className="block h-0.5 w-20 bg-primary" />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 max-w-5xl">
            <IntroSection text={area.intro} />
            <TopicsGrid topics={area.topics} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28" style={{ background: "linear-gradient(180deg, #000000 0%, #0d0800 40%, #000000 100%)" }}>
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4" style={{ fontWeight: 300, letterSpacing: '0.06em' }}>{area.cta}</h2>
            <div className="flex justify-center mb-8">
              <span className="block h-0.5 w-16 bg-primary" />
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

function IntroSection({ text }: { text: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <p className="text-gray-300 font-body text-base leading-relaxed max-w-3xl mx-auto text-center" style={{ fontWeight: 300 }}>{text}</p>
    </div>
  );
}

function TopicsGrid({ topics }: { topics: { title: string; text: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {topics.map((topic, i) => (
        <TopicCard key={topic.title} {...topic} delay={i * 80} />
      ))}
    </div>
  );
}

function TopicCard({ title, text, delay }: { title: string; text: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`card-dark-glass p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <span className="w-0.5 h-full min-h-[40px] bg-primary shrink-0 rounded" />
        <div>
          <h3 className="font-heading text-base text-primary mb-2" style={{ fontWeight: 500 }}>{title}</h3>
          <p className="text-gray-400 text-sm font-body leading-relaxed" style={{ fontWeight: 300 }}>{text}</p>
        </div>
      </div>
    </div>
  );
}
