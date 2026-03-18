import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GradientDivider from "@/components/GradientDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { WHATSAPP_URL } from "@/lib/constants";

interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string | null;
  content?: string | null;
  created_at: string | null;
}

export default function ArtigoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [otherArticles, setOtherArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .eq("status", "publicado")
      .maybeSingle()
      .then(({ data }) => {
        if (!data) {
          navigate("/artigos", { replace: true });
          return;
        }
        setArticle(data);
        setLoading(false);
      });

    supabase
      .from("articles")
      .select("id, title, slug, category, summary, created_at")
      .eq("status", "publicado")
      .neq("slug", slug)
      .order("created_at", { ascending: false })
      .limit(3)
      .then(({ data }) => {
        setOtherArticles(data || []);
      });
  }, [slug, navigate]);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  if (loading) {
    return (
      <PageTransition>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20 bg-[#0a0a0a]">
          <p className="text-gray-500 font-body">Carregando...</p>
        </div>
        <Footer />
      </PageTransition>
    );
  }

  if (!article) return null;

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
            <p className="text-gray-400 text-sm font-body">{formatDate(article.created_at)}</p>
          </div>
        </section>

        <GradientDivider variant="gold-accent" />

        <section className="py-16 md:py-24 bg-[#0a0a0a]">
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

function ArticleContent({ content }: { content: string | null }) {
  const { ref, isVisible } = useScrollReveal();
  if (!content) return null;

  return (
    <article ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="space-y-5 text-gray-300 font-body text-base leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </article>
  );
}

function Sidebar({ otherArticles }: { otherArticles: Article[] }) {
  return (
    <aside className="space-y-8">
      <div className="card-dark-glass rounded p-6 text-center">
        <h3 className="font-heading text-lg text-white mb-3">Precisa de Orientação?</h3>
        <p className="text-gray-400 text-sm font-body mb-4">Fale com um advogado especialista.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-gold-dark transition-colors duration-200"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>

      {otherArticles.length > 0 && (
        <div>
          <h3 className="font-heading text-lg mb-4 text-white">Outros Artigos</h3>
          <div className="space-y-3">
            {otherArticles.map((a) => (
              <Link key={a.slug} to={`/artigos/${a.slug}`} className="block p-3 rounded card-dark-glass">
                <span className="text-xs text-primary font-body">{a.category}</span>
                <h4 className="text-sm font-body text-gray-300 leading-tight mt-1">{a.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
