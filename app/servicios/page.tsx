import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Servicios() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-8 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Nuestros
          <span className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] bg-clip-text text-transparent">
            {" "}
            Servicios
          </span>
        </h1>
        <p className="max-w-[800px] text-xl sm:text-2xl leading-relaxed">
          Ofrecemos soluciones integrales que combinan comunicación estratégica,
          marketing digital y desarrollo tecnológico para impulsar el
          crecimiento de tu marca.
        </p>
      </section>

      {/* Main Services */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12">
          {/* Comunicación Estratégica */}
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Comunicación Estratégica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desarrollamos estrategias de comunicación efectivas que conectan
                con tu audiencia y fortalecen tu posicionamiento en el mercado.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Estrategias de comunicación corporativa</li>
                <li>Relaciones públicas y gestión de medios</li>
                <li>Comunicación interna</li>
                <li>Gestión de crisis</li>
                <li>Desarrollo de contenido estratégico</li>
              </ul>
            </CardContent>
          </Card>

          {/* Marketing Digital */}
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Marketing Digital
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creamos campañas digitales que generan engagement y resultados
                medibles para tu negocio.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Estrategias de marketing digital</li>
                <li>Gestión de redes sociales</li>
                <li>Marketing de contenidos</li>
                <li>Email marketing</li>
                <li>Análisis y optimización de campañas</li>
              </ul>
            </CardContent>
          </Card>

          {/* Desarrollo Tecnológico */}
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Desarrollo Tecnológico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Implementamos soluciones tecnológicas innovadoras que potencian
                tu presencia digital y optimizan tus procesos.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Desarrollo web y aplicaciones</li>
                <li>E-commerce y marketplaces</li>
                <li>Automatización de procesos</li>
                <li>Integración de sistemas</li>
                <li>Consultoría tecnológica</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="relative py-35 text-center">
        <p className="text-5xl font-bold italic">
          Transformamos ideas en soluciones que generan impacto real.
        </p>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <Card className="shadow-lg bg-background/40 border border-primary/40">
          <CardContent className="py-16">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para impulsar tu marca?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Contáctanos para descubrir cómo podemos ayudarte a alcanzar tus
              objetivos.
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
