import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const sections = [
  {
    id: "identificacao",
    title: "1. Identificação",
    content: `Este site é de propriedade e operado pela Duarte Reis Sociedade de Advogados, inscrita no CNPJ sob nº [CNPJ], com sede na Av. Paes de Barros, 3399 - Conj. 23/24, Mooca, São Paulo/SP, CEP 03115-021, inscrita na OAB/SP.`,
  },
  {
    id: "objeto",
    title: "2. Objeto",
    content: `O presente site tem caráter exclusivamente informativo e institucional, destinado a apresentar os serviços e áreas de atuação do escritório Duarte Reis Sociedade de Advogados. O acesso ao site ou o envio de mensagens não configura relação advocatícia, que somente se estabelece mediante contrato formal de prestação de serviços jurídicos devidamente assinado pelas partes.`,
  },
  {
    id: "aceitacao",
    title: "3. Aceitação dos Termos",
    content: `Ao acessar e utilizar este site, o usuário declara que leu, compreendeu e concorda integralmente com os presentes Termos de Uso. A Duarte Reis Sociedade de Advogados reserva-se o direito de modificar estes termos a qualquer tempo, mediante publicação da versão atualizada nesta página. O uso continuado do site após eventuais alterações constitui aceitação dos novos termos.`,
  },
  {
    id: "propriedade-intelectual",
    title: "4. Propriedade Intelectual",
    content: `Todo o conteúdo deste site — incluindo, mas não se limitando a, textos, artigos, imagens, logotipos, marcas, layout, design, código-fonte, compilações de dados e software — é protegido pela legislação brasileira de propriedade intelectual (Lei 9.610/1998 — Lei de Direitos Autorais, e Lei 9.279/1996 — Lei de Propriedade Industrial). É vedada a reprodução, distribuição, modificação, exibição pública ou qualquer outra forma de utilização do conteúdo sem autorização prévia e expressa por escrito da Duarte Reis Sociedade de Advogados.`,
  },
  {
    id: "limitacao-responsabilidade",
    title: "5. Limitação de Responsabilidade",
    content: `As informações disponibilizadas neste site têm caráter meramente informativo e educacional, não constituindo aconselhamento jurídico, parecer ou opinião legal. A Duarte Reis Sociedade de Advogados não se responsabiliza por decisões tomadas com base exclusivamente nas informações aqui contidas. Cada caso possui particularidades que devem ser analisadas individualmente por profissional habilitado. O escritório não garante resultados em processos judiciais ou administrativos, em conformidade com o Código de Ética e Disciplina da OAB (Resolução nº 02/2015 do Conselho Federal da OAB).`,
  },
  {
    id: "vedacoes",
    title: "6. Vedações ao Usuário",
    content: `O usuário compromete-se a utilizar o site de forma lícita e ética, sendo-lhe vedado: (a) utilizar o site para fins ilícitos ou contrários à moral e aos bons costumes; (b) enviar conteúdo que seja difamatório, obsceno, fraudulento ou que viole direitos de terceiros; (c) realizar engenharia reversa, descompilar ou tentar acessar o código-fonte do site; (d) utilizar mecanismos automatizados (bots, scrapers, crawlers) para coletar dados do site sem autorização; (e) realizar spam ou envio de mensagens não solicitadas; (f) tentar acessar áreas restritas do site sem autorização.`,
  },
  {
    id: "links-externos",
    title: "7. Links Externos",
    content: `Este site pode conter links para sites de terceiros. A inclusão de tais links não implica endosso, patrocínio ou responsabilidade da Duarte Reis Sociedade de Advogados pelo conteúdo, políticas de privacidade ou práticas desses sites. O acesso a sites de terceiros é de inteira responsabilidade do usuário.`,
  },
  {
    id: "foro",
    title: "8. Foro",
    content: `Fica eleito o Foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer questões oriundas da utilização deste site e da interpretação dos presentes Termos de Uso, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`,
  },
  {
    id: "contato",
    title: "9. Contato",
    content: `Para dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso, entre em contato pelo e-mail: contato@duartereisadvogados.com.br.`,
  },
  {
    id: "vigencia",
    title: "10. Data de Vigência",
    content: `Estes Termos de Uso entram em vigor a partir de março de 2025 e permanecerão vigentes até que sejam substituídos por versão atualizada publicada neste site.`,
  },
];

export default function TermosDeUso() {
  return (
    <PageTransition>
      <Header />
      <main>
        <section className="bg-black pt-28 pb-12 md:pt-36 md:pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl md:text-4xl text-white mb-4">Termos de Uso</h1>
            <div className="flex justify-center">
              <span className="block h-0.5 w-16 bg-primary" />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[240px_1fr] gap-12 max-w-5xl mx-auto">
              {/* Sticky index */}
              <nav className="hidden lg:block">
                <div className="sticky top-24 space-y-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-muted-foreground font-body hover:text-primary transition-colors duration-200 py-1"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Content */}
              <div className="space-y-10">
                {sections.map((s) => (
                  <div key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="font-heading text-xl md:text-2xl text-foreground mb-4">{s.title}</h2>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
}
