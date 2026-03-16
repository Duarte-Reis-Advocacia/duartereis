import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
