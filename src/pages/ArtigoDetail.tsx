import { useParams, Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { articles } from "./Artigos";

const WA_LINK = "https://wa.me/5511992930589";

export default function ArtigoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const otherArticles = articles.filter((a) => a.slug !== slug);

  if (!article) {
    return (
      <PageTransition>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-heading text-3xl mb-4">Artigo não encontrado</h1>
            <Link to="/artigos" className="text-primary hover:underline">Ver todos os artigos</Link>
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
        <section className="bg-black pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="inline-block bg-primary/10 text-primary text-xs font-body px-3 py-1 rounded-full mb-4">{article.category}</span>
            <h1 className="font-heading text-3xl md:text-4xl text-white mb-4 leading-tight">{article.title}</h1>
            <div className="flex justify-center mb-4">
              <span className="block h-0.5 w-16 bg-primary" />
            </div>
            <p className="text-gray-400 text-sm font-body">{article.date}</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-5xl mx-auto">
              <ArticleContent content={article.content} />
              <Sidebar otherArticles={otherArticles} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
}

function ArticleContent({ content }: { content: string[] }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <article ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="space-y-5 text-muted-foreground font-body text-base leading-relaxed">
        {content.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </article>
  );
}

function Sidebar({ otherArticles }: { otherArticles: typeof articles }) {
  return (
    <aside className="space-y-8">
      {/* CTA */}
      <div className="bg-black rounded-lg p-6 text-center">
        <h3 className="font-heading text-lg text-white mb-3">Precisa de Orientação?</h3>
        <p className="text-gray-400 text-sm font-body mb-4">Fale com um advogado especialista.</p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-gold-dark transition-colors duration-200"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>

      {/* Other articles */}
      {otherArticles.length > 0 && (
        <div>
          <h3 className="font-heading text-lg mb-4 text-foreground">Outros Artigos</h3>
          <div className="space-y-3">
            {otherArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/artigos/${a.slug}`}
                className="block p-3 rounded border border-border hover:border-primary/30 transition-colors duration-200"
              >
                <span className="text-xs text-primary font-body">{a.category}</span>
                <h4 className="text-sm font-body text-foreground leading-tight mt-1">{a.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

const WHATSAPP = "https://wa.me/5511992930589";
