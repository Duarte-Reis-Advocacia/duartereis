import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GradientDivider from "@/components/GradientDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string | null;
  cover_image_url: string | null;
  created_at: string | null;
}

export default function Artigos() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("articles")
      .select("id, title, slug, category, summary, created_at")
      .eq("status", "publicado")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setArticles(data || []);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };

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

        <GradientDivider variant="gold-accent" />

        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            {loading ? (
              <p className="text-center text-gray-500 font-body">Carregando artigos...</p>
            ) : articles.length === 0 ? (
              <p className="text-center text-gray-500 font-body">Nenhum artigo publicado ainda.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {articles.map((article, i) => (
                  <ArticleCard key={article.id} article={article} delay={i * 150} formatDate={formatDate} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
}

function ArticleCard({ article, delay, formatDate }: { article: Article; delay: number; formatDate: (d: string | null) => string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <Link
      to={`/artigos/${article.slug}`}
      ref={ref as any}
      className={`group block card-dark-glass overflow-hidden transition-all duration-700 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-48 bg-gradient-to-br from-black via-[#111111] to-primary/20 flex items-center justify-center">
        <span className="font-heading text-primary/40 text-6xl">§</span>
      </div>
      <div className="p-6">
        <span className="inline-block bg-primary/10 text-primary text-xs font-body px-3 py-1 rounded-full mb-3">{article.category}</span>
        <h3 className="font-heading text-lg text-white mb-2 group-hover:text-primary transition-colors duration-200 leading-tight">{article.title}</h3>
        <p className="text-gray-400 text-sm font-body leading-relaxed mb-3 line-clamp-2">{article.summary}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs font-body">{formatDate(article.created_at)}</span>
          <span className="text-primary text-sm font-body group-hover:underline">Ler mais →</span>
        </div>
      </div>
    </Link>
  );
}
