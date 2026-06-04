import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Popular IVF - Best IVF Treatment Center",
  description: "Popular IVF is one of the best IVF treatment centers providing world-class fertility treatments.",
  icons: {
    icon: '/popular_ivf_favicony.jpg',
  },
};

import AppointmentSidebar from "@/components/AppointmentSidebar";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        {children}
        <AppointmentSidebar />
        <div className="fixed bottom-2 right-4 z-[50] flex flex-col items-center gap-3 md:bottom-10 md:right-10 md:z-[99] md:gap-4">
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
