import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "motion/react";

import {
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MadSeven",
  description: "Tu socio estratégico en comunicación y consultoría",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} md:mt-24 md:mx-16 mt-16 mx-4 overflow-x-hidden`}
      >
        <Navbar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <footer className="border-t mt-16">
          <div className="flex flex-col items-center gap-6 mt-8 py-8">
            <div className="flex gap-8">
              <Link
                href="https://instagram.com/madseven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/madseven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/company/madseven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:info@madseven.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} MadSeven. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#22d3ee1a_1px,transparent_2px)] bg-[size:48px] -z-50"></div>

        <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-black/80 via-transparent to-black/80 [background-repeat:no-repeat] -z-50"></div>
      </body>
    </html>
  );
}
