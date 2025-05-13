import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AcercaDeNosotros() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-8 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Acerca de
          <span className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] bg-clip-text text-transparent">
            {" "}
            Nosotros
          </span>
        </h1>
        <p className="max-w-[800px] text-xl sm:text-2xl leading-relaxed">
          Somos un equipo apasionado por la innovación y el impacto social,
          comprometidos con la excelencia y la transformación digital.
        </p>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4">
        <Card className="shadow-lg bg-background/40 border border-primary/40">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Nuestra Historia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundada con la visión de transformar la manera en que las empresas
              se conectan con su audiencia, Mad Seven nace de la pasión por la
              innovación y el impacto social. Nuestro equipo combina experiencia
              en comunicación, marketing y tecnología para crear soluciones que
              generan valor real.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A lo largo de los años, hemos evolucionado y crecido, pero nuestra
              misión sigue siendo la misma: empoderar a las organizaciones para
              que alcancen su máximo potencial a través de estrategias
              innovadoras y soluciones tecnológicas de vanguardia.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Our Values */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Valores
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Innovación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Buscamos constantemente nuevas formas de resolver desafíos y
                crear soluciones disruptivas.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Excelencia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos comprometemos con la calidad en cada proyecto y nos
                esforzamos por superar expectativas.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Impacto Social
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Creemos en el poder de la tecnología para generar cambios
                positivos en la sociedad.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="relative py-35 text-center">
        <p className="text-5xl font-bold italic">
          Construyendo el futuro digital con propósito y pasión.
        </p>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Liderazgo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Un equipo de líderes con visión estratégica y experiencia en
                transformación digital.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Expertos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Profesionales especializados en comunicación, marketing y
                desarrollo tecnológico.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Innovadores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Creativos y desarrolladores que impulsan la innovación y el
                cambio.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <Card className="shadow-lg bg-background/40 border border-primary/40">
          <CardContent className="py-16">
            <h2 className="text-3xl font-bold mb-6">
              ¿Quieres ser parte de nuestro equipo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Únete a nosotros en nuestra misión de transformar el futuro
              digital.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-lg">
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
