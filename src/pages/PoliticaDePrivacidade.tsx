import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const sections = [
  {
    id: "controlador",
    title: "1. Controlador dos Dados",
    content: `O controlador dos dados pessoais coletados por meio deste site é a Duarte Reis Sociedade de Advogados, com sede na Av. Paes de Barros, 3399 - Conj. 23/24, Mooca, São Paulo/SP, CEP 03115-021. O encarregado pelo tratamento de dados pessoais (DPO) pode ser contatado pelo e-mail: contato@duartereisadvogados.com.br.`,
  },
  {
    id: "dados-coletados",
    title: "2. Dados Coletados",
    content: `Coletamos as seguintes categorias de dados pessoais:

Dados fornecidos pelo usuário: nome, endereço de e-mail, número de telefone e demais informações voluntariamente fornecidas por meio de formulários de contato ou mensagens via WhatsApp.

Dados de navegação: endereço IP, tipo de navegador, sistema operacional, páginas visitadas, data e hora de acesso, cookies e tecnologias similares, conforme detalhado na seção específica de Cookies.`,
  },
  {
    id: "finalidade",
    title: "3. Finalidade do Tratamento",
    content: `Os dados pessoais coletados são tratados para as seguintes finalidades:

• Responder consultas e solicitações enviadas pelo usuário;
• Prestar informações sobre os serviços do escritório;
• Melhorar a experiência de navegação e a funcionalidade do site;
• Realizar análises estatísticas sobre o uso do site;
• Cumprir obrigações legais e regulatórias;
• Exercer direitos em processos judiciais, administrativos ou arbitrais;
• Prevenir fraudes e garantir a segurança do usuário e do site.`,
  },
  {
    id: "base-legal",
    title: "4. Base Legal para o Tratamento",
    content: `O tratamento de dados pessoais realizado pela Duarte Reis Sociedade de Advogados fundamenta-se nas seguintes bases legais previstas na Lei Geral de Proteção de Dados (Lei 13.709/2018):

• Consentimento do titular (Art. 7º, I, LGPD) — quando o usuário fornece voluntariamente seus dados por meio de formulários;
• Execução de contrato ou de procedimentos preliminares (Art. 7º, V, LGPD) — quando o tratamento é necessário para a prestação de serviços jurídicos;
• Legítimo interesse do controlador (Art. 7º, IX, LGPD) — para melhoria dos serviços, análise de tráfego e segurança do site;
• Cumprimento de obrigação legal ou regulatória (Art. 7º, II, LGPD) — quando exigido por lei ou determinação de autoridade competente.`,
  },
  {
    id: "compartilhamento",
    title: "5. Compartilhamento de Dados",
    content: `A Duarte Reis Sociedade de Advogados não vende, aluga ou comercializa dados pessoais de seus usuários. Os dados poderão ser compartilhados exclusivamente com:

• Prestadores de serviços essenciais ao funcionamento do site (hospedagem, análise de tráfego), sob contratos de confidencialidade e em conformidade com a LGPD;
• Autoridades judiciais, administrativas ou governamentais, quando exigido por lei ou ordem judicial;
• Profissionais e parceiros envolvidos na prestação dos serviços jurídicos contratados, mediante autorização do cliente.`,
  },
  {
    id: "cookies",
    title: "6. Cookies",
    content: `Este site utiliza cookies e tecnologias similares para melhorar a experiência de navegação. Os tipos de cookies utilizados são:

Cookies essenciais: necessários para o funcionamento básico do site, como navegação entre páginas e acesso a áreas seguras. Não podem ser desativados.

Cookies analíticos: utilizados para coletar informações sobre como os visitantes utilizam o site, como páginas mais visitadas e eventuais mensagens de erro. Essas informações são utilizadas exclusivamente para melhorar o funcionamento do site.

O usuário pode gerenciar as preferências de cookies diretamente nas configurações do seu navegador. A desativação de determinados cookies pode afetar a funcionalidade do site.`,
  },
  {
    id: "retencao",
    title: "7. Retenção de Dados",
    content: `Os dados pessoais serão retidos pelo período necessário ao cumprimento das finalidades para as quais foram coletados, observados os prazos legais de guarda estabelecidos pela legislação brasileira aplicável, incluindo, mas não se limitando à legislação tributária, trabalhista e civil.

Após o término do período de retenção, os dados serão eliminados de forma segura ou anonimizados, salvo quando houver obrigação legal de conservação.`,
  },
  {
    id: "direitos-titular",
    title: "8. Direitos do Titular",
    content: `Em conformidade com o Art. 18 da LGPD, o titular dos dados pessoais tem direito a:

1. Confirmação da existência de tratamento de dados pessoais;
2. Acesso aos dados pessoais tratados;
3. Correção de dados incompletos, inexatos ou desatualizados;
4. Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;
5. Portabilidade dos dados a outro fornecedor de serviço ou produto;
6. Eliminação dos dados pessoais tratados com consentimento do titular;
7. Informação sobre as entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;
8. Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;
9. Revogação do consentimento, nos termos do § 5º do Art. 8º da LGPD.

Para exercer qualquer desses direitos, o titular deve entrar em contato pelo e-mail: contato@duartereisadvogados.com.br. As solicitações serão atendidas no prazo de 15 (quinze) dias, conforme previsto na legislação.`,
  },
  {
    id: "transferencia-internacional",
    title: "9. Transferência Internacional de Dados",
    content: `A Duarte Reis Sociedade de Advogados não realiza transferência internacional de dados pessoais, salvo quando necessário para o cumprimento de obrigações legais ou com o consentimento específico do titular, sempre observando as garantias adequadas previstas na LGPD e regulamentações da Autoridade Nacional de Proteção de Dados (ANPD).`,
  },
  {
    id: "seguranca",
    title: "10. Segurança",
    content: `A Duarte Reis Sociedade de Advogados adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, destruição, perda, alteração, comunicação ou difusão indevida. Entre as medidas adotadas incluem-se: criptografia de dados em trânsito (SSL/TLS), controle de acesso restrito, backup regular e atualização contínua dos sistemas de segurança.`,
  },
  {
    id: "alteracoes",
    title: "11. Alterações nesta Política",
    content: `Esta Política de Privacidade poderá ser atualizada periodicamente para refletir mudanças nas práticas de tratamento de dados ou na legislação aplicável. As alterações serão publicadas nesta página com indicação da data de atualização. Recomendamos a consulta periódica desta página para ciência de eventuais modificações.`,
  },
  {
    id: "contato-dpo",
    title: "12. Canal de Contato / DPO",
    content: `Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados (DPO) pelo e-mail: contato@duartereisadvogados.com.br.

Caso o titular não esteja satisfeito com a resposta obtida, poderá apresentar reclamação perante a Autoridade Nacional de Proteção de Dados (ANPD).`,
  },
  {
    id: "vigencia",
    title: "13. Data de Vigência",
    content: `Esta Política de Privacidade entra em vigor a partir de março de 2025 e permanecerá vigente até que seja substituída por versão atualizada publicada neste site.`,
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <PageTransition>
      <Header />
      <main>
        <section className="bg-black pt-28 pb-12 md:pt-36 md:pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl md:text-4xl text-white mb-4">Política de Privacidade</h1>
            <div className="flex justify-center">
              <span className="block h-0.5 w-16 bg-primary" />
            </div>
          </div>
        </section>

        <div className="h-[60px]" style={{ background: "linear-gradient(to bottom, #000000, #fafafa)" }} />
        <section className="py-12 md:py-20 bg-[#fafafa]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[240px_1fr] gap-12 max-w-5xl mx-auto">
              {/* Sticky index */}
              <nav className="hidden lg:block">
                <div className="sticky top-24 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-500 font-body hover:text-primary transition-colors duration-200 py-1"
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
                    <h2 className="font-heading text-xl md:text-2xl text-gray-900 mb-4">{s.title}</h2>
                    <p className="text-gray-600 font-body text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="h-[60px]" style={{ background: "linear-gradient(to bottom, #fafafa, #000000)" }} />
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
}
