"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageTransition } from "@/components/page-transition";
import { AnimatedSection } from "@/components/animated-section";
import { CardSection, CardItem } from "@/components/card-section";
import { motion } from "motion/react";

export default function Home() {
  const faqs = [
    {
      question: "¿Qué tipo de empresas trabajan con Mad Seven?",
      answer:
        "Trabajamos con empresas de diversos sectores que buscan mejorar su comunicación y presencia digital.",
    },
    {
      question: "¿Ofrecen servicios personalizados?",
      answer:
        "Sí, adaptamos nuestras soluciones a las necesidades específicas de cada cliente.",
    },
    {
      question: "¿Cómo puedo solicitar una propuesta?",
      answer:
        "Puedes contactarnos a través de nuestro formulario de contacto o enviarnos un email directamente. Nuestro equipo te responderá en un plazo máximo de 24 horas hábiles para coordinar una reunión y entender mejor tus necesidades.",
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
          className="relative flex flex-col items-center justify-center gap-8 pt-32 pb-20 text-center"
        >
          <motion.h1
            className="text-7xl font-bold tracking-tight md:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-[#9b9b9b] to-white bg-clip-text text-transparent">
              Mad
            </span>
            <span className="bg-gradient-to-r from-[#08e9ed] to-[#03625e] bg-clip-text text-transparent">
              Seven
            </span>
          </motion.h1>
          <motion.p
            className="max-w-[800px] text-md md:text-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            MadSeven es una consultora que fusiona comunicación estratégica,
            marketing digital y desarrollo tecnológico para impulsar marcas
            valientes. Combinamos creatividad, datos y tecnología para diseñar
            soluciones que conectan con las personas y generan impacto real.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row gap-8 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild className="h-12 px-8 hover:bg-accent">
              <Link href="/contacto">Contactanos</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 bg-background/80 hover:bg-accent hover:border-primary transition-all"
            >
              <Link href="/servicios">Nuestros Servicios</Link>
            </Button>
          </motion.div>
        </AnimatedSection>

        {/* Mission & Vision Section - Using CardSection component */}
        <CardSection
          items={missionVisionItems}
          columns={2}
          className="container mx-auto px-4"
          cardClassName="shadow-lg bg-background/80 border border-primary/40"
          contentClassName="text-lg text-muted-foreground leading-relaxed"
        />

        {/* Slogan Section */}
        <AnimatedSection
          variant="scaleUp"
          className="relative py-35 text-center"
        >
          <p className="text-5xl font-bold italic">
            Potenciamos marcas con ideas que conectan y tecnología que escala.
          </p>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection variant="fadeInUp" className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="font-medium hover:text-primary transition-colors focus:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}
