import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Prensa() {
  return (
    <div className="flex flex-col gap-24 pt-32">
      {/* Header Section */}
      <section className="relative flex flex-col items-center justify-center gap-8 pt-32 text-center px-2">
        <h1 className="text-6xl font-bold tracking-tighter md:text-8xl ">
          Acciones de Prensa
        </h1>
        <p className="max-w-[800px] mx-auto text-xl text-muted-foreground leading-relaxed">
          Descubre nuestras últimas apariciones en medios y comunicados de
          prensa que destacan nuestro trabajo y experiencia en el sector.
        </p>
      </section>

      {/* Press Timeline */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12">
          {/* Press Release 1 */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    Lanzamiento de Nueva Estrategia Digital
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    15 de Marzo, 2024
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#" className="text-sm">
                    Leer más
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Mad Seven presenta su nueva estrategia de transformación digital
                para empresas del sector tecnológico, enfocada en impulsar la
                innovación y el crecimiento sostenible.
              </p>
            </CardContent>
          </Card>

          {/* Press Release 2 */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    Alianza Estratégica con Líderes del Sector
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    1 de Marzo, 2024
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#" className="text-sm">
                    Leer más
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Mad Seven fortalece su posición en el mercado mediante alianzas
                estratégicas con empresas líderes en tecnología y comunicación.
              </p>
            </CardContent>
          </Card>

          {/* Press Release 3 */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    Reconocimiento a la Innovación
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    15 de Febrero, 2024
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#" className="text-sm">
                    Leer más
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Mad Seven recibe reconocimiento por su innovador enfoque en la
                integración de tecnologías emergentes en estrategias de
                comunicación.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="container mx-auto px-4">
        <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
          <CardContent className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Kit de Prensa</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Accede a nuestro kit de prensa para obtener recursos, logos y
              material multimedia para tus publicaciones.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-lg">
              <Link href="#">Descargar Kit de Prensa</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 text-center">
        <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
          <CardContent className="py-16">
            <h2 className="text-3xl font-bold mb-6">¿Eres periodista?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Contáctanos para solicitar entrevistas, información adicional o
              coordinar coberturas especiales.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-lg">
              <Link href="/contacto">Contactar Prensa</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
