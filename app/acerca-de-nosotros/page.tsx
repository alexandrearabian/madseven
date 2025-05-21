"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { AnimatedSection } from "@/components/animated-section";
import { CardSection, CardItem } from "@/components/card-section";
import { GradientText } from "@/components/gradient-text";

export default function AcercaDeNosotros() {
  // Define data arrays for consistent card sections
  const valuesItems: CardItem[] = [
    {
      title: "Innovación",
      description:
        "Buscamos constantemente nuevas formas de resolver desafíos y crear soluciones disruptivas.",
      animationVariant: "fadeInUp",
      delay: 0.1,
    },
    {
      title: "Excelencia",
      description:
        "Nos comprometemos con la calidad en cada proyecto y nos esforzamos por superar expectativas.",
      animationVariant: "fadeInUp",
      delay: 0.2,
    },
    {
      title: "Impacto Social",
      description:
        "Creemos en el poder de la tecnología para generar cambios positivos en la sociedad.",
      animationVariant: "fadeInUp",
      delay: 0.3,
    },
  ];

  const teamItems: CardItem[] = [
    {
      title: "Liderazgo",
      description:
        "Un equipo de líderes con visión estratégica y experiencia en transformación digital.",
      animationVariant: "fadeInLeft",
      delay: 0.1,
    },
    {
      title: "Expertos",
      description:
        "Profesionales especializados en comunicación, marketing y desarrollo tecnológico.",
      animationVariant: "fadeInUp",
      delay: 0.2,
    },
    {
      title: "Innovadores",
      description:
        "Creativos y desarrolladores que impulsan la innovación y el cambio.",
      animationVariant: "fadeInRight",
      delay: 0.3,
    },
  ];

  // Define mission and vision cards for CardSection
  const missionVisionItems: CardItem[] = [
    {
      title: "Misión",
      description:
        "Impulsar el crecimiento de marcas y organizaciones mediante estrategias de comunicación integradas, soluciones digitales innovadoras y tecnología aplicada, generando conexiones auténticas y resultados medibles.",
      animationVariant: "fadeInLeft",
      delay: 0.2,
    },
    {
      title: "Visión",
      description:
        "Ser la consultora de referencia para empresas que buscan transformar su comunicación y presencia digital, destacando por nuestra creatividad, enfoque estratégico y compromiso con la excelencia.",
      animationVariant: "fadeInRight",
      delay: 0.4,
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
          <h1 className="text-6xl font-bold tracking-tight md:text-8xl ">
            <GradientText variant="primary"> Acerca </GradientText>
            de
            <GradientText variant="secondary"> Nosotros</GradientText>
          </h1>
          <p className="max-w-[800px] text-xl sm:text-2xl leading-relaxed">
            Somos un equipo apasionado por la innovación y el impacto social,
            comprometidos con la excelencia y la transformación digital.
          </p>
        </AnimatedSection>

        {/* Mission & Vision Section - Using CardSection component */}
        <CardSection
          items={missionVisionItems}
          columns={2}
          className="container mx-auto px-4"
          cardClassName="shadow-lg bg-background/80 border border-primary/40"
          contentClassName="text-lg text-muted-foreground leading-relaxed"
        />

        {/* Our Story */}
        <AnimatedSection variant="fadeInUp" className="container mx-auto px-4">
          <Card className="shadow-lg bg-background/80 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Nuestra Historia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Llevamos 25 años asesorando a nuestros clientes en diferentes
                medios, con reconocimientos y premios a nivel nacional e
                internacional. Nuestro equipo combina experiencia en
                comunicación, marketing y tecnología para crear soluciones que
                generan valor real.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Our Values Section - Using CardSection component */}
        <CardSection
          title="Nuestros Valores"
          items={valuesItems}
          columns={3}
          sectionVariant="fadeIn"
        />

        {/* Slogan Section */}
        <AnimatedSection
          variant="scaleUp"
          className="relative py-35 text-center"
        >
          <p className="text-4xl font-bold italic">
            Construyendo el futuro digital con propósito y pasión
          </p>
        </AnimatedSection>

        {/* Team Section - Using CardSection component */}
        <CardSection
          title="Nuestro Equipo"
          items={teamItems}
          columns={3}
          sectionVariant="fadeIn"
        />

        {/* CTA Section */}
        <AnimatedSection
          variant="fadeInUp"
          delay={0.2}
          className="container mx-auto px-4 text-center"
        >
          <Card className="shadow-lg bg-background/80 border border-primary/40">
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
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}
