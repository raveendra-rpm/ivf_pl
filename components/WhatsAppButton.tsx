"use client";

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "917311111362";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center drop-shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <img src="/whatsapp_icon.webp" alt="WhatsApp" className="w-16 h-16 md:w-[72px] md:h-[72px] object-contain" />
    </a>
  );
}
