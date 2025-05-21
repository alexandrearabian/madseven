"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { AnimatedSection } from "@/components/animated-section";
import { CardSection, CardItem } from "@/components/card-section";
import { GradientText } from "@/components/gradient-text";

export default function Servicios() {
  // Define service items for the CardSection component
  const serviceItems: CardItem[] = [
    {
      title: "Comunicación Estratégica",
      description: `Desarrollamos estrategias de comunicación efectivas que conectan con tu audiencia y fortalecen tu posicionamiento en el mercado.
      Ofrecemos estrategias de comunicación corporativa, relaciones públicas y gestión de medios, comunicación interna, gestión de crisis, y desarrollo de contenido estratégico.`,
      animationVariant: "fadeInUp",
      delay: 0.1,
      imageSrc: "/comunicacion.jpg",
      imageAlt: "Comunicación Estratégica",
      href: "/contacto",
      buttonText: "Contáctanos",
    },
    {
      title: "Marketing Digital",
      description: `Creamos campañas digitales que generan engagement y resultados medibles para tu negocio.
      Ofrecemos estrategias de marketing digital, gestión de redes sociales, marketing de contenidos, email marketing, y análisis y optimización de campañas.`,
      animationVariant: "fadeInUp",
      delay: 0.2,
      imageSrc: "/marketing.jpg",
      imageAlt: "Marketing Digital",
      href: "/contacto",
      buttonText: "Contáctanos",
    },
    {
      title: "Desarrollo Tecnológico",
      description: `Implementamos soluciones tecnológicas innovadoras que potencian tu presencia digital y optimizan tus procesos.
      Ofrecemos desarrollo web y aplicaciones, e-commerce y marketplaces, automatización de procesos, integración de sistemas, y consultoría tecnológica.`,
      animationVariant: "fadeInUp",
      delay: 0.3,
      imageSrc: "/software.jpg",
      imageAlt: "Desarrollo Tecnológico",
      href: "/contacto",
      buttonText: "Contáctanos",
    },
  ];

  return (
    <PageTransition>
      <div className="flex flex-col gap-24">
        {/* Hero Section */}
        <AnimatedSection
          variant="fadeIn"
          className="relative flex flex-col items-center justify-center gap-8 pt-32 text-center px-2"
        >
          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            <GradientText variant="primary"> Nuestros</GradientText>
            <GradientText variant="secondary"> Servicios</GradientText>
          </h1>
          <p className="max-w-[800px] text-xl sm:text-2xl leading-relaxed">
            Ofrecemos soluciones integrales que combinan comunicación
            estratégica, marketing digital y desarrollo tecnológico para
            impulsar el crecimiento de tu marca.
          </p>
        </AnimatedSection>

        {/* Main Services - Using CardSection component */}
        <CardSection
          items={serviceItems}
          columns={3}
          className="container mx-auto px-4 max-w-7xl"
          cardClassName="shadow-lg bg-background/80 border border-primary/40 h-full flex flex-col overflow-hidden max-w-sm mx-auto"
          contentClassName="space-y-6 flex-grow"
          gridClassName="grid gap-12"
        />

        {/* CTA Section */}
        <AnimatedSection
          variant="scaleUp"
          className="container mx-auto px-4 text-center"
        >
          <Card className="shadow-lg bg-background/80 border border-primary/40">
            <CardContent className="py-16">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listo para impulsar tu marca?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto">
                Contáctanos para descubrir cómo podemos ayudarte a alcanzar tus
                objetivos.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="h-12 px-8 text-lg">
                <Link href="/contacto">Contactanos</Link>
              </Button>
            </CardFooter>
          </Card>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}
