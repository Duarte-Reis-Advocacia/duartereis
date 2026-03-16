import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { WHATSAPP_URL } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Home", href: "/#inicio", type: "anchor" },
  { label: "Sobre", href: "/#sobre", type: "anchor" },
  {
    label: "Advogados",
    type: "dropdown",
    children: [
      { label: "Dr. Laefo Duarte", href: "/advogados/dr-laefo-duarte" },
      { label: "Dra. Cristiane Reis", href: "/advogados/dra-cristiane-reis" },
    ],
  },
  {
    label: "Áreas de Atuação",
    type: "dropdown",
    children: [
      { label: "Direito Trabalhista", href: "/areas-de-atuacao/direito-trabalhista" },
      { label: "Direito do Consumidor", href: "/areas-de-atuacao/direito-do-consumidor" },
      { label: "Direito de Família", href: "/areas-de-atuacao/direito-de-familia" },
      { label: "Contratos Empresariais", href: "/areas-de-atuacao/contratos-empresariais" },
    ],
  },
  { label: "Artigos", href: "/artigos", type: "link" },
  { label: "Contato", href: "/#contato", type: "anchor" },
];

function smoothScrollTo(hash: string) {
  const id = hash.replace("/#", "").replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const lastScroll = useRef(0);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();

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

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => smoothScrollTo(href), 100);
    } else {
      smoothScrollTo(href);
    }
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownEnter = (label: string) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-black shadow-lg" : "bg-black/95"}`}
      style={{ borderBottom: "1px solid #C5983C" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" onClick={() => handleAnchorClick("/#inicio")}>
          <img src="/logo.png" alt="Duarte Reis Advogados" className="h-14 md:h-20 w-auto" loading="lazy" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {NAV_ITEMS.map((item, idx) => (
            <div key={item.label} className="flex items-center">
              {idx > 0 && <span className="text-[#333] mx-3 select-none">|</span>}
              
              {item.type === "anchor" && (
                <button
                  onClick={() => handleAnchorClick(item.href!)}
                  className="text-[13px] text-gray-300 hover:text-primary transition-colors duration-200 font-body uppercase"
                  style={{ letterSpacing: '0.1em', fontWeight: 400 }}
                >
                  {item.label}
                </button>
              )}

              {item.type === "link" && (
                <Link
                  to={item.href!}
                  onClick={handleLinkClick}
                  className="text-[13px] text-gray-300 hover:text-primary transition-colors duration-200 font-body uppercase"
                  style={{ letterSpacing: '0.1em', fontWeight: 400 }}
                >
                  {item.label}
                </Link>
              )}

              {item.type === "dropdown" && (
                <div
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="text-[13px] text-gray-300 hover:text-primary transition-colors duration-200 font-body uppercase flex items-center gap-1"
                    style={{ letterSpacing: '0.1em', fontWeight: 400 }}
                  >
                    {item.label}
                    <ChevronDown size={12} className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  
                  <div className={`absolute top-full left-0 mt-2 min-w-[220px] bg-[#111111] border border-white/10 rounded shadow-xl transition-all duration-200 origin-top ${
                    openDropdown === item.label ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                  }`}>
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={handleLinkClick}
                        className="block px-5 py-3 text-[13px] text-gray-300 hover:text-white font-body transition-all duration-200 border-l-2 border-transparent hover:border-primary hover:bg-white/5"
                        style={{ letterSpacing: '0.08em' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <span className="text-[#333] mx-3 select-none">|</span>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-5 py-2 rounded text-[13px] font-semibold uppercase hover:bg-primary hover:text-black transition-all duration-200"
            style={{ letterSpacing: '0.08em', borderWidth: '1.5px' }}
          >
            Consulta pelo WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 bg-black border-l border-white/10 transition-transform duration-300 z-50 overflow-y-auto ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <nav className="py-4 px-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.type === "anchor" && (
                <button
                  onClick={() => handleAnchorClick(item.href!)}
                  className="block w-full text-left py-3 text-gray-300 hover:text-primary transition-colors border-b border-white/5 font-body text-sm uppercase"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {item.label}
                </button>
              )}
              {item.type === "link" && (
                <Link
                  to={item.href!}
                  onClick={handleLinkClick}
                  className="block py-3 text-gray-300 hover:text-primary transition-colors border-b border-white/5 font-body text-sm uppercase"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {item.label}
                </Link>
              )}
              {item.type === "dropdown" && (
                <>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full py-3 text-gray-300 hover:text-primary transition-colors border-b border-white/5 font-body text-sm uppercase"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="pl-4 border-l border-primary/30 ml-2 mb-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={handleLinkClick}
                          className="block py-2.5 text-gray-400 hover:text-primary transition-colors font-body text-xs"
                          style={{ letterSpacing: '0.08em' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 border border-primary text-primary text-center px-5 py-3 rounded font-semibold text-sm uppercase hover:bg-primary hover:text-black transition-all duration-200"
            style={{ letterSpacing: '0.08em', borderWidth: '1.5px' }}
          >
            Consulta pelo WhatsApp
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
