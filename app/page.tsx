import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-8 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Mad Seven
        </h1>
        <p className="max-w-[800px] text-xl  sm:text-2xl leading-relaxed">
          Mad Seven es una consultora que fusiona comunicación estratégica, marketing digital y desarrollo tecnológico para impulsar marcas valientes. Combinamos creatividad, datos y tecnología para diseñar soluciones que conectan con las personas y generan impacto real.
        </p>
        <div className="flex gap-6 mt-4">
          <Button  asChild size="lg" className="h-12 px-8 text-lg">
            <Link href="/contacto">Contactanos</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg">
            <Link href="/servicios">Nuestros Servicios</Link>
          </Button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Impulsar el crecimiento de marcas y organizaciones mediante estrategias de comunicación integradas, soluciones digitales innovadoras y tecnología aplicada, generando conexiones auténticas y resultados medibles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser la consultora de referencia para empresas que buscan transformar su comunicación y presencia digital, destacando por nuestra creatividad, enfoque estratégico y compromiso con la excelencia.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestros Valores</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Innovación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Apostamos por ideas frescas y soluciones creativas que marcan la diferencia.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Compromiso</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Nos involucramos profundamente en cada proyecto, trabajando como una extensión del equipo del cliente.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Transparencia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Fomentamos relaciones basadas en la honestidad y la comunicación abierta.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Adaptabilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Nos ajustamos a las necesidades cambiantes del mercado y de nuestros clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Excelencia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Buscamos superar las expectativas, ofreciendo resultados de alta calidad.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-4 relative">
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardContent className="pt-12 pb-12">
              <p className="text-3xl font-bold italic text-muted-foreground">
                &ldquo;Potenciamos marcas con ideas que conectan y tecnología que escala.&rdquo;
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
