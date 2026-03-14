import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const articles = [
  {
    slug: "acidente-de-trabalho-entenda-seus-direitos",
    title: "Acidente de Trabalho: Entenda seus Direitos e Como Agir",
    category: "Direito Trabalhista",
    date: "Março 2025",
    summary: "Saiba o que fazer imediatamente após um acidente, quais documentos reunir e quais indenizações você pode ter direito.",
    content: [
      "Acidentes de trabalho são eventos que, infelizmente, ocorrem com mais frequência do que se imagina no Brasil. De acordo com dados do Observatório de Segurança e Saúde no Trabalho, o país registra centenas de milhares de notificações por ano.",
      "Se você sofreu um acidente de trabalho, é fundamental conhecer seus direitos. A legislação brasileira prevê uma série de proteções ao trabalhador acidentado, incluindo estabilidade no emprego, benefícios previdenciários e direito à indenização.",
      "O primeiro passo é comunicar imediatamente ao empregador e solicitar a emissão da CAT (Comunicação de Acidente de Trabalho). Este documento é essencial para garantir seus direitos junto ao INSS e na Justiça do Trabalho.",
      "O trabalhador acidentado tem direito a: auxílio-doença acidentário (B91), estabilidade de 12 meses após a alta médica, indenização por danos materiais, morais e estéticos, pensão vitalícia em caso de incapacidade permanente, e reembolso de despesas médicas.",
      "É importante reunir toda a documentação possível: laudos médicos, exames, fotos do local do acidente, testemunhos e qualquer comunicação com o empregador. Quanto mais provas, mais forte será o seu caso.",
      "Na Duarte Reis, contamos com mais de 25 anos de experiência em casos de acidente de trabalho. Nossa equipe analisa cada caso com profundidade e traça a melhor estratégia jurídica para garantir a reparação integral dos danos sofridos.",
    ],
  },
  {
    slug: "estabilidade-da-gestante-o-que-a-lei-garante",
    title: "Estabilidade da Gestante: O que a Lei Garante Mesmo Sem Comunicação ao Empregador",
    category: "Direito Trabalhista",
    date: "Fevereiro 2025",
    summary: "A estabilidade gestacional é um direito irrenunciável. Entenda como ela funciona e o que fazer se for violada.",
    content: [
      "A estabilidade da gestante é um dos direitos mais importantes garantidos pela Constituição Federal e pela CLT. Ela protege a trabalhadora contra demissão sem justa causa desde a confirmação da gravidez até cinco meses após o parto.",
      "Um aspecto fundamental que muitos desconhecem: a estabilidade é garantida mesmo que a gestante não tenha comunicado a gravidez ao empregador no momento da demissão. O Tribunal Superior do Trabalho (TST) tem entendimento consolidado nesse sentido.",
      "Se a trabalhadora foi demitida e só descobriu a gravidez depois, ou se não havia comunicado ao empregador, ela tem direito à reintegração ao emprego ou, caso a reintegração não seja viável, à indenização correspondente a todo o período de estabilidade.",
      "A indenização inclui: salários do período de estabilidade, 13º salário proporcional, férias proporcionais com 1/3, FGTS com multa de 40%, e demais benefícios que a trabalhadora teria direito durante o período.",
      "É fundamental agir rapidamente. Embora o direito exista, a busca pela reintegração ou indenização deve ser feita dentro dos prazos legais. Procure um advogado trabalhista assim que tomar conhecimento da situação.",
      "A Duarte Reis tem vasta experiência na defesa dos direitos das gestantes. Analisamos cada caso individualmente e buscamos a solução mais favorável, seja pela via judicial ou por acordo extrajudicial.",
    ],
  },
  {
    slug: "horas-extras-nao-pagas-como-calcular",
    title: "Horas Extras Não Pagas: Como Calcular e Quando Entrar com Ação",
    category: "Direito Trabalhista",
    date: "Janeiro 2025",
    summary: "Descubra como identificar se você tem valores a receber e qual o prazo para reivindicá-los na Justiça do Trabalho.",
    content: [
      "As horas extras não pagas representam uma das violações trabalhistas mais comuns no Brasil. Muitos trabalhadores sequer sabem que possuem valores expressivos a receber por horas trabalhadas além da jornada contratual.",
      "A CLT determina que a jornada normal de trabalho é de 8 horas diárias e 44 horas semanais. Todo trabalho excedente deve ser remunerado com acréscimo de, no mínimo, 50% sobre o valor da hora normal. Em domingos e feriados, o acréscimo é de 100%.",
      "Além das horas extras propriamente ditas, outros direitos frequentemente descumpridos incluem: intervalo intrajornada (mínimo de 1 hora para jornadas acima de 6 horas), intervalo interjornada (mínimo de 11 horas entre jornadas), adicional noturno (20% para trabalho entre 22h e 5h), e hora noturna reduzida (52 minutos e 30 segundos).",
      "As horas extras geram reflexos em diversas parcelas: 13º salário, férias com 1/3, FGTS, aviso prévio e descanso semanal remunerado. Por isso, o valor total a receber pode ser significativamente maior do que se imagina.",
      "O prazo para reclamar horas extras na Justiça do Trabalho é de 2 anos após o fim do contrato de trabalho, podendo ser cobradas as horas dos últimos 5 anos. Não deixe esse prazo passar.",
      "Na Duarte Reis, realizamos o levantamento detalhado de todas as horas extras devidas, calculamos os reflexos em todas as parcelas e atuamos judicialmente para garantir o pagamento integral com juros e correção monetária.",
    ],
  },
];

export default function Artigos() {
  return (
    <PageTransition>
      <Header />
      <main>
        <section className="bg-black pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">Artigos e Insights Jurídicos</h1>
            <div className="flex justify-center mb-6">
              <span className="block h-0.5 w-20 bg-primary" />
            </div>
            <p className="text-gray-300 text-lg font-body">Conhecimento a serviço dos seus direitos.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} delay={i * 150} />
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

function ArticleCard({ article, delay }: { article: typeof articles[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Link
      to={`/artigos/${article.slug}`}
      ref={ref as any}
      className={`group block bg-card border border-border rounded-lg overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Placeholder image */}
      <div className="h-48 bg-gradient-to-br from-black via-black/90 to-primary/20 flex items-center justify-center">
        <span className="font-heading text-primary/40 text-6xl">§</span>
      </div>
      <div className="p-6">
        <span className="inline-block bg-primary/10 text-primary text-xs font-body px-3 py-1 rounded-full mb-3">{article.category}</span>
        <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200 leading-tight">{article.title}</h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed mb-3 line-clamp-2">{article.summary}</p>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-xs font-body">{article.date}</span>
          <span className="text-primary text-sm font-body group-hover:underline">Ler mais →</span>
        </div>
      </div>
    </Link>
  );
}

export { articles };
