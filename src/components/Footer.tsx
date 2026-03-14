import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
];

const LEGAL = [
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-12" style={{ borderTop: "1px solid rgba(197, 152, 60, 0.2)" }}>
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <img src="/logo.jpeg" alt="Duarte Reis Advogados" className="h-12 w-auto mb-4" loading="lazy" />
          <p className="text-gray-500 text-sm font-body">Advocacia com propósito, tradição e resultado.</p>
        </div>
        <div className="relative">
          {/* Subtle gold divider on left for md+ */}
          <div className="hidden md:block absolute left-0 top-0 h-full w-px" style={{ background: "rgba(197, 152, 60, 0.1)" }} />
          <div className="md:pl-8">
            <h4 className="font-heading text-sm text-white mb-4 tracking-wider">LINKS RÁPIDOS</h4>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-gray-400 text-sm font-body hover:text-primary transition-colors duration-200">{n.label}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 mt-4 pt-4 border-t border-white/5">
              {LEGAL.map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="text-gray-400 text-sm font-body hover:text-primary transition-colors duration-200">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-0 top-0 h-full w-px" style={{ background: "rgba(197, 152, 60, 0.1)" }} />
          <div className="md:pl-8">
            <h4 className="font-heading text-sm text-white mb-4 tracking-wider">CONTATO</h4>
            <p className="text-gray-400 text-sm font-body mb-1">(11) 9 9293-0589</p>
            <p className="text-gray-400 text-sm font-body mb-1">contato@duartereisadvogados.com.br</p>
            <p className="text-gray-400 text-sm font-body mb-4">Av. Paes de Barros, 3399 - Conj. 23/24, Mooca - SP</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/10 transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/10 transition-colors duration-200">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 pt-6" style={{ borderTop: "1px solid #1a1a1a" }}>
        <p className="text-gray-600 text-xs text-center font-body">© 2025 Duarte Reis Sociedade de Advogados · Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
