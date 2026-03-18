import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Eye, EyeOff, Pencil, Trash2, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";

type Article = Tables<"articles">;

export default function AdminArticles() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchArticles = async () => {
    const { data } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });
    setArticles(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchArticles(); }, []);

  const toggleStatus = async (article: Article) => {
    const newStatus = article.status === "publicado" ? "rascunho" : "publicado";
    await supabase.from("articles").update({ status: newStatus }).eq("id", article.id);
    toast({ title: newStatus === "publicado" ? "Artigo publicado" : "Artigo movido para rascunho" });
    fetchArticles();
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await supabase.from("articles").delete().eq("id", deleteId);
    setDeleteId(null);
    toast({ title: "Artigo excluído" });
    fetchArticles();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-black border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Duarte Reis" className="h-10" />
        <button onClick={handleSignOut} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-body transition-colors">
          <LogOut size={16} /> Sair
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/admin" className="inline-flex items-center gap-1 text-gray-400 hover:text-primary text-sm font-body mb-2 transition-colors">
              <ArrowLeft size={14} /> Painel
            </Link>
            <h1 className="font-heading text-2xl text-white">Artigos</h1>
          </div>
          <Link
            to="/admin/artigos/novo"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} /> Novo post
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-500 text-sm font-body">Carregando...</p>
        ) : articles.length === 0 ? (
          <p className="text-gray-500 text-sm font-body">Nenhum artigo encontrado.</p>
        ) : (
          <div className="space-y-3">
            {articles.map((article) => (
              <div key={article.id} className="card-dark-glass rounded-lg p-4 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-heading text-sm leading-tight truncate">{article.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span
                      className={`text-xs font-body px-2 py-0.5 rounded-full ${
                        article.status === "publicado"
                          ? "bg-green-600/20 text-green-400"
                          : "bg-white/10 text-gray-400"
                      }`}
                    >
                      {article.status === "publicado" ? "Publicado" : "Rascunho"}
                    </span>
                    <span className="text-gray-500 text-xs font-body">{article.category}</span>
                    <span className="text-gray-600 text-xs font-body">{formatDate(article.created_at)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => toggleStatus(article)}
                    title={article.status === "publicado" ? "Despublicar" : "Publicar"}
                    className="p-2 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    {article.status === "publicado" ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                  <Link
                    to={`/admin/artigos/${article.id}/editar`}
                    className="p-2 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    <Pencil size={16} />
                  </Link>
                  <button
                    onClick={() => setDeleteId(article.id)}
                    className="p-2 rounded hover:bg-white/10 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Delete confirmation modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="card-dark-glass rounded-lg p-6 max-w-sm w-full">
            <h3 className="font-heading text-lg text-white mb-2">Excluir artigo?</h3>
            <p className="text-gray-400 text-sm font-body mb-6">Esta ação não pode ser desfeita.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteId(null)} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
                Cancelar
              </button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
