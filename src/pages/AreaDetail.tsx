import { useParams, Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GradientDivider from "@/components/GradientDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP = "https://wa.me/5511992930589";

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
      { title: "Demissão Sem Justa Causa", text: "Orientação completa sobre direitos na rescisão, incluindo aviso prévio, multa do FGTS e seguro-desemprego." },
      { title: "Verbas Rescisórias", text: "Cálculo e cobrança de todas as verbas devidas: saldo de salário, férias proporcionais, 13º e demais parcelas." },
      { title: "FGTS e Irregularidades", text: "Verificação de depósitos do FGTS, cobrança de valores não recolhidos e multas aplicáveis." },
      { title: "Horas Extras Não Pagas", text: "Levantamento e cobrança judicial de horas extras, adicional noturno e intervalos suprimidos dos últimos 5 anos." },
      { title: "Adicional Noturno", text: "Garantia do pagamento correto do adicional de 20% para trabalho realizado entre 22h e 5h." },
      { title: "Assédio Moral e Sexual", text: "Defesa em casos de assédio no ambiente de trabalho com busca de indenização por danos morais." },
      { title: "Estabilidade da Gestante", text: "Proteção contra demissão ilegal da gestante desde a confirmação da gravidez até 5 meses após o parto." },
      { title: "Acidente de Trabalho", text: "Representação em casos de acidente e doença ocupacional, com busca de indenização integral e estabilidade." },
      { title: "Pejotização Irregular", text: "Reconhecimento de vínculo empregatício em contratos fraudulentos de PJ com características de emprego." },
      { title: "Rescisão Indireta", text: "Quando o empregador descumpre obrigações graves, o trabalhador pode pedir a rescisão com todos os direitos preservados." },
      { title: "Desvio e Acúmulo de Função", text: "Cobrança de diferenças salariais quando o trabalhador exerce funções além das contratadas." },
      { title: "Insalubridade e Periculosidade", text: "Garantia do pagamento de adicionais para trabalho em condições insalubres ou perigosas." },
    ],
    cta: "Você tem direitos trabalhistas a reivindicar? Nossa equipe está pronta para avaliar seu caso gratuitamente.",
  },
  "direito-do-consumidor": {
    title: "Direito do Consumidor",
    subtitle: "Defendendo seus Direitos com Firmeza",
    intro: "Atuamos na defesa dos consumidores contra práticas abusivas, garantindo que seus direitos previstos no Código de Defesa do Consumidor sejam integralmente respeitados.",
    topics: [
      { title: "Problemas com Produtos e Serviços", text: "Defeitos, vícios, descumprimento de garantia e falhas na prestação de serviços contratados." },
      { title: "Publicidade Enganosa", text: "Ações contra propagandas falsas ou misleading que induzem o consumidor ao erro na compra." },
      { title: "Contratos de Consumo", text: "Análise e contestação de cláusulas abusivas em contratos de adesão, financiamentos e planos de saúde." },
      { title: "Responsabilidade Civil", text: "Indenizações por danos causados por produtos ou serviços defeituosos, incluindo danos materiais e morais." },
      { title: "Direitos Digitais", text: "Proteção em compras online, assinaturas digitais, vazamento de dados e práticas abusivas no e-commerce." },
      { title: "Negativação Indevida", text: "Ações para retirada do nome de cadastros de inadimplentes e indenização por inclusão indevida." },
    ],
    cta: "Teve seus direitos de consumidor violados? Fale conosco e saiba como podemos ajudá-lo.",
  },
  "direito-de-familia": {
    title: "Direito de Família",
    subtitle: "Protegendo os Vínculos com Responsabilidade e Cuidado",
    intro: "Atuamos com sensibilidade e profissionalismo em questões familiares, buscando sempre soluções que preservem o bem-estar de todos os envolvidos, especialmente crianças e adolescentes.",
    topics: [
      { title: "Divórcio e União Estável", text: "Condução de processos de divórcio judicial e extrajudicial, dissolução de união estável e partilha de bens." },
      { title: "Guarda e Visitas", text: "Definição de guarda compartilhada ou unilateral, regulamentação de visitas e modificação de regime." },
      { title: "Pensão Alimentícia", text: "Fixação, revisão e execução de pensão alimentícia, garantindo o sustento adequado dos dependentes." },
      { title: "Adoção", text: "Assessoria completa no processo de adoção, desde a habilitação até a sentença judicial." },
      { title: "Planejamento Sucessório", text: "Organização patrimonial para transmissão de bens de forma segura, com testamentos e doações planejadas." },
      { title: "Violência Doméstica", text: "Representação em medidas protetivas de urgência e ações judiciais decorrentes de violência doméstica." },
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
        <section className="bg-black pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl md:text-5xl text-white mb-3">{area.title}</h1>
            <p className="text-primary text-lg font-body mb-6">{area.subtitle}</p>
            <div className="flex justify-center">
              <span className="block h-0.5 w-20 bg-primary" />
            </div>
          </div>
        </section>

        <GradientDivider variant="gold-accent" />

        {/* Content */}
        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 max-w-5xl">
            <IntroSection text={area.intro} />
            <TopicsGrid topics={area.topics} />
          </div>
        </section>

        <GradientDivider variant="gold-accent" />

        {/* CTA */}
        <section className="py-16 md:py-24" style={{ background: "linear-gradient(180deg, #000000 0%, #0d0800 40%, #000000 100%)" }}>
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">{area.cta}</h2>
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
      <p className="text-gray-300 font-body text-base leading-relaxed max-w-3xl mx-auto text-center">{text}</p>
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
          <h3 className="font-heading text-base text-primary mb-2">{title}</h3>
          <p className="text-gray-400 text-sm font-body leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
