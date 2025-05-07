import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";

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
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <Navbar />
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} MadSeven. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
