import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ArticleForm() {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Direito Trabalhista");
  const [status, setStatus] = useState<"rascunho" | "publicado">("rascunho");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [slugManual, setSlugManual] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEditing) {
      supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single()
        .then(({ data }) => {
          if (data) {
            setTitle(data.title);
            setSlug(data.slug);
            setCategory(data.category);
            setStatus(data.status as "rascunho" | "publicado");
            setSummary(data.summary || "");
            setContent(data.content || "");
            setCoverImageUrl(data.cover_image_url || "");
            setSlugManual(true);
          }
        });
    }
  }, [id, isEditing]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slugManual) setSlug(generateSlug(val));
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "Imagem muito grande. Máximo 5MB.", variant: "destructive" });
      return;
    }

    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const fileName = `${Date.now()}-${slug || "artigo"}.${ext}`;

      const { data, error } = await supabase.storage
        .from("article-covers")
        .upload(fileName, file, { upsert: true });

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from("article-covers")
        .getPublicUrl(data.path);

      setCoverImageUrl(urlData.publicUrl);
      toast({ title: "Imagem enviada com sucesso!" });
    } catch {
      toast({ title: "Erro ao enviar imagem. Tente novamente.", variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveCover = () => setCoverImageUrl("");

  const handleSave = async (saveStatus: "rascunho" | "publicado") => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: "Título e slug são obrigatórios", variant: "destructive" });
      return;
    }

    setSaving(true);
    const payload = {
      title,
      slug,
      category,
      status: saveStatus,
      summary,
      content,
      cover_image_url: coverImageUrl || null,
    };

    const { error } = isEditing
      ? await supabase.from("articles").update(payload).eq("id", id)
      : await supabase.from("articles").insert(payload);

    setSaving(false);

    if (error) {
      toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
      return;
    }

    toast({ title: saveStatus === "publicado" ? "Artigo publicado!" : "Rascunho salvo!" });
    navigate("/admin/artigos");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-black border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Duarte Reis" className="h-10" />
        <button onClick={handleSignOut} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-body transition-colors">
          <LogOut size={16} /> Sair
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/admin/artigos" className="inline-flex items-center gap-1 text-gray-400 hover:text-primary text-sm font-body mb-2 transition-colors">
              <ArrowLeft size={14} /> Posts
            </Link>
            <h1 className="font-heading text-2xl text-white">{isEditing ? "Editar artigo" : "Novo artigo"}</h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleSave("rascunho")}
              disabled={saving}
              className="border border-primary/50 text-primary px-4 py-2 text-sm font-semibold rounded hover:bg-primary/10 transition-colors duration-200 disabled:opacity-50"
            >
              Rascunho
            </button>
            <button
              onClick={() => handleSave("publicado")}
              disabled={saving}
              className="bg-primary text-black font-semibold px-4 py-2 text-sm rounded hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50"
            >
              Publicar
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-white mb-1 font-body">Título *</label>
            <input
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white rounded px-4 py-2 focus:border-primary outline-none font-body text-sm"
              placeholder="Título do artigo"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1 font-body">Slug *</label>
            <input
              value={slug}
              onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }}
              className="w-full bg-white/5 border border-white/10 text-white rounded px-4 py-2 focus:border-primary outline-none font-body text-sm font-mono"
              placeholder="titulo-do-artigo"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1 font-body">Categoria</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white rounded px-4 py-2 focus:border-primary outline-none font-body text-sm"
            />
          </div>

          {/* Imagem de Capa */}
          <div>
            <label className="block text-sm text-white/70 mb-2 font-body">Imagem de Capa</label>
            {coverImageUrl ? (
              <div className="relative mb-3 w-full h-40 rounded overflow-hidden border border-white/10">
                <img
                  src={coverImageUrl}
                  alt="Capa do artigo"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={handleRemoveCover}
                  className="absolute top-2 right-2 bg-black/70 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                  title="Remover imagem"
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/30 rounded cursor-pointer hover:border-primary/60 transition-colors bg-white/5">
                <span className="text-white/50 text-sm font-body mb-1">
                  {uploading ? "Enviando..." : "📷 Clique para selecionar uma imagem"}
                </span>
                <span className="text-white/30 text-xs font-body">JPG, PNG ou WEBP — máx. 5MB</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={handleCoverUpload}
                  disabled={uploading}
                />
              </label>
            )}
          </div>

          <div>
            <label className="block text-sm text-white mb-2 font-body">Status</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-300 text-sm font-body cursor-pointer">
                <input type="radio" name="status" checked={status === "rascunho"} onChange={() => setStatus("rascunho")} className="accent-primary" />
                Rascunho
              </label>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-body cursor-pointer">
                <input type="radio" name="status" checked={status === "publicado"} onChange={() => setStatus("publicado")} className="accent-primary" />
                Publicado
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-white mb-1 font-body">Resumo</label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={3}
              className="w-full bg-white/5 border border-white/10 text-white rounded px-4 py-2 focus:border-primary outline-none font-body text-sm resize-y"
              placeholder="Breve resumo do artigo..."
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1 font-body">Conteúdo</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={16}
              className="w-full bg-white/5 border border-white/10 text-white rounded px-4 py-2 focus:border-primary outline-none font-body text-sm resize-y"
              placeholder="Texto completo do artigo..."
            />
          </div>
        </div>
      </main>
    </div>
  );
}
