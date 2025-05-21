"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageTransition } from "@/components/page-transition";
import { AnimatedSection } from "@/components/animated-section";
import { motion } from "motion/react";
import { GradientText } from "@/components/gradient-text";

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

  const services = [
    {
      src: "/comunicacion.jpg",
      title: "Comunicación Estratégica",
      description:
        "Estrategias de comunicación efectivas para conectar con tu audiencia.",
    },
    {
      src: "/marketing.jpg",
      title: "Marketing Digital",
      description:
        "Campañas creativas para aumentar tu presencia online y convertir visitas en clientes.",
    },
    {
      src: "/software.jpg",
      title: "Desarrollo de Software",
      description:
        "Soluciones tecnológicas a medida para transformar y escalar tu negocio.",
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
            <GradientText variant="primary">MAD</GradientText>
            <GradientText variant="secondary">Seven</GradientText>
          </motion.h1>
          <motion.p
            className="max-w-[800px] text-md md:text-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Madseven es una consultora que fusiona comunicación estratégica,
            marketing digital y desarrollo tecnológico para impulsar marcas
            valientes.
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
              className="h-12 px-8 bg-background/80 hover:bg-accent/10 border dark:hover:border-primary hover:text-accent-foreground hover:border-primary transition-all"
            >
              <Link href="/servicios">Nuestros Servicios</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 bg-background/80 hover:bg-accent/10 border dark:hover:border-primary hover:text-accent-foreground hover:border-primary transition-all"
            >
              <Link href="https://madseven.es">🌎 MadSeven Travel</Link>
            </Button>
          </motion.div>
        </AnimatedSection>

        {/* Services Section with Images */}
        <AnimatedSection variant="fadeInUp" className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: [0.1, 0.8, 0.2, 1], // Custom cubic bezier for a smooth, slightly bouncy entrance
                  },
                }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link href="/servicios" className="w-full">
                  <div className="overflow-hidden rounded-xl shadow-lg relative group cursor-pointer">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <Image
                        src={service.src}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="object-cover w-full h-[250px] transition-all duration-300 group-hover:blur-sm"
                      />
                      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                        <p className="text-white text-center">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </Link>
                <h3 className="text-2xl font-medium mt-2">{service.title}</h3>
              </motion.div>
            ))}
          </div>
          {/* Slogan Section */}
          <AnimatedSection
            variant="scaleUp"
            className="relative py-35 text-center mt-16"
          >
            <p className="text-5xl font-bold italic text-foreground">
              Potenciamos marcas con ideas que conectan y tecnología que escala
            </p>
          </AnimatedSection>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection variant="fadeInUp" className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
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
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-xl hover:text-primary transition-colors focus:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg">
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
