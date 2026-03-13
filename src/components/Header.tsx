import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP = "https://wa.me/5511992930589";
const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Advogados", href: "#advogados" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setVisible(y < lastScroll.current || y < 80);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black/70 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio">
          <img src="/logo.jpeg" alt="Duarte Reis Advogados" className="h-10 md:h-14 w-auto" loading="lazy" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-body tracking-wide"
            >
              {n.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-gold-light transition-colors duration-200"
          >
            Falar com Advogado
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 pb-6 px-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-300 hover:text-primary transition-colors border-b border-white/5 font-body"
            >
              {n.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-primary text-primary-foreground text-center px-5 py-3 rounded font-semibold"
          >
            Falar com Advogado
          </a>
        </nav>
      )}
    </header>
  );
}
