"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/page-transition";
import { AnimatedSection } from "@/components/animated-section";
import { CardItem } from "@/components/card-section";

export default function Blog() {
  const categories: CardItem[] = [
    {
      title: "Comunicación",
      description:
        "Estrategias y tendencias en comunicación corporativa, relaciones públicas y gestión de marca.",
      href: "/blog/categoria/comunicacion",
      buttonText: "Ver artículos",
      animationVariant: "fadeInUp",
      delay: 0.1,
    },
    {
      title: "Marketing Digital",
      description:
        "Insights sobre marketing digital, redes sociales, SEO y estrategias de contenido.",
      href: "/blog/categoria/marketing-digital",
      buttonText: "Ver artículos",
      animationVariant: "fadeInUp",
      delay: 0.2,
    },
    {
      title: "Tecnología",
      description:
        "Innovaciones tecnológicas, desarrollo web, aplicaciones y transformación digital.",
      href: "/blog/categoria/tecnologia",
      buttonText: "Ver artículos",
      animationVariant: "fadeInUp",
      delay: 0.3,
    },
  ];

  const featuredArticles: CardItem[] = [
    {
      title: "El Futuro de la Comunicación Digital",
      description:
        "Exploramos las tendencias emergentes en comunicación digital y cómo están transformando la manera en que las marcas se conectan con su audiencia.",
      href: "/blog/articulo/futuro-comunicacion-digital",
      buttonText: "Leer más",
      animationVariant: "fadeInLeft",
      delay: 0.1,
    },
    {
      title: "Inteligencia Artificial en Marketing",
      description:
        "Descubre cómo la IA está revolucionando las estrategias de marketing y qué significa esto para el futuro de la industria.",
      href: "/blog/articulo/ia-marketing",
      buttonText: "Leer más",
      animationVariant: "fadeInRight",
      delay: 0.2,
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
            Thinking
            <span className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] bg-clip-text text-transparent">
              {" "}
              Lab
            </span>
          </h1>
          <p className="max-w-[800px] text-xl sm:text-2xl leading-relaxed">
            Explora nuestro espacio de ideas donde compartimos artículos sobre
            tendencias en comunicación, marketing digital y tecnología. Nuestro
            objetivo es mantenerte informado y ofrecerte insights valiosos para
            tu negocio.
          </p>
        </AnimatedSection>

        {/* Modified CardSection Component */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((item, index) => (
              <AnimatedSection
                key={index}
                variant={item.animationVariant || "fadeIn"}
                delay={item.delay || 0}
                className="h-full"
              >
                <Card className="shadow-lg bg-background/80 border border-primary/40 h-full flex flex-col">
                  <CardContent className="pt-6 px-6 pb-4 flex-grow">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-12 px-8 bg-background/80 hover:bg-accent hover:border-primary transition-all"
                    >
                      {item.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Featured Articles - Modified Implementation */}
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeIn" className="mb-6">
            <h2 className="text-3xl font-bold text-center">
              Artículos Destacados
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((item, index) => (
              <AnimatedSection
                key={index}
                variant={item.animationVariant || "fadeIn"}
                delay={item.delay || 0}
                className="h-full"
              >
                <Card className="shadow-lg bg-background/80 border border-primary/40 h-full flex flex-col">
                  <CardContent className="pt-6 px-6 pb-4 flex-grow">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-12 px-8 bg-background/80 hover:bg-accent hover:border-primary transition-all"
                    >
                      {item.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <AnimatedSection variant="scaleUp" className="container mx-auto px-4">
          <Card className="shadow-lg bg-background/80 border border-primary/40">
            <CardContent className="py-16">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">
                  Suscribite a nuestro Newsletter
                </h2>
                <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                  Recibe nuestros artículos más recientes y mantente al día con
                  las últimas tendencias en comunicación y tecnología.
                </p>
                <Button size="lg" className="h-12 px-8 text-lg">
                  Suscribirse
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}
