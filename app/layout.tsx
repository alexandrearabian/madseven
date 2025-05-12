import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Navbar />
          {children}
        <footer className="border-t">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} MadSeven. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
<div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#8841fc2e_1px,transparent_1px),linear-gradient(to_bottom,#8841fc2e_1px,transparent_1px)] bg-[size:24px_24px] -z-50"></div>
<div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-background via-background/0 to-background [background-repeat:no-repeat] -z-50"></div>


        </ThemeProvider>
      </body>
    </html>
  );
}
