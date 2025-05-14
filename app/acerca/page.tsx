import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Acerca() {
  return (
    <div className="flex flex-col gap-24 pt-32">
      {/* Header Section */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          Acerca de Nosotros
        </h1>
        <p className="max-w-[800px] mx-auto text-xl text-muted-foreground leading-relaxed">
          Somos una agencia de comunicación y marketing digital que combina
          creatividad, estrategia y tecnología para impulsar el crecimiento de
          las marcas.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4">
        <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Nuestra Historia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundada con la visión de transformar la manera en que las empresas
              se comunican en el mundo digital, Mad Seven ha crecido hasta
              convertirse en un referente en el sector de la comunicación y el
              marketing digital.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro equipo combina experiencia en comunicación estratégica,
              marketing digital y desarrollo tecnológico para ofrecer soluciones
              integrales que generan resultados tangibles para nuestros
              clientes.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Valores
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Innovación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Buscamos constantemente nuevas formas de resolver desafíos y
                crear valor para nuestros clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Excelencia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos comprometemos a entregar resultados de la más alta calidad
                en cada proyecto.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Colaboración</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Trabajamos en equipo, tanto internamente como con nuestros
                clientes, para alcanzar objetivos comunes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Equipo de Comunicación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Expertos en estrategias de comunicación, relaciones públicas y
                gestión de medios.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Equipo Digital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Especialistas en marketing digital, redes sociales y análisis de
                datos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Equipo Técnico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Desarrolladores y diseñadores que crean soluciones tecnológicas
                innovadoras.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
          <CardContent className="py-16">
            <h2 className="text-3xl font-bold mb-6">
              ¿Quieres unirte a nuestro equipo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Estamos siempre buscando talento apasionado por la comunicación y
              la tecnología.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-lg">
              <Link href="/contacto">Trabaja con Nosotros</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
