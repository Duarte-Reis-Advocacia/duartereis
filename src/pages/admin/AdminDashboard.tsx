import { Link, useNavigate } from "react-router-dom";
import { FileText, PlusCircle, ArrowLeft, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-black border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Duarte Reis" className="h-10" />
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-body transition-colors"
        >
          <LogOut size={16} /> Sair
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-heading text-2xl text-white mb-8">Painel Administrativo</h1>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <Link to="/admin/artigos" className="card-dark-glass rounded-lg p-8 group hover:-translate-y-1 transition-transform duration-200">
            <FileText size={32} className="text-primary mb-4" />
            <h2 className="font-heading text-lg text-white mb-1">Artigos</h2>
            <p className="text-gray-400 text-sm font-body">Ver, criar e editar posts do blog</p>
          </Link>

          <Link to="/admin/artigos/novo" className="card-dark-glass rounded-lg p-8 group hover:-translate-y-1 transition-transform duration-200">
            <PlusCircle size={32} className="text-primary mb-4" />
            <h2 className="font-heading text-lg text-white mb-1">Novo artigo</h2>
            <p className="text-gray-400 text-sm font-body">Escrever e publicar um novo post</p>
          </Link>
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm font-body transition-colors">
          <ArrowLeft size={16} /> Voltar ao site
        </Link>
      </main>
    </div>
  );
}
