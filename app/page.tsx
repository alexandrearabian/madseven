import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-8 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-[#9b9b9b] to-white bg-clip-text text-transparent">
            Mad
          </span>
          <span className="bg-gradient-to-r from-[#08e9ed] to-[#03625e] bg-clip-text text-transparent">
            Seven
          </span>
        </h1>
        <p className="max-w-[800px] text-xl  sm:text-2xl leading-relaxed">
          MadSeven es una consultora que fusiona comunicación estratégica,
          marketing digital y desarrollo tecnológico para impulsar marcas
          valientes. Combinamos creatividad, datos y tecnología para diseñar
          soluciones que conectan con las personas y generan impacto real.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <Button asChild size="lg" className="h-12 px-8 text-lg">
            <Link href="/contacto">Contactanos</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 text-lg hover:bg-accent transition-all"
          >
            <Link href="/servicios">Nuestros Servicios</Link>
          </Button>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <Card className="shadow-lg bg-background/40 border border-primary/40 ">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Impulsar el crecimiento de marcas y organizaciones mediante
                estrategias de comunicación integradas, soluciones digitales
                innovadoras y tecnología aplicada, generando conexiones
                auténticas y resultados medibles.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/40 shadow-lg bg-background/40">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser la consultora de referencia para empresas que buscan
                transformar su comunicación y presencia digital, destacando por
                nuestra creatividad, enfoque estratégico y compromiso con la
                excelencia.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Slogan Section */}
      <section className="relative py-35 text-center">
        <p className="text-5xl font-bold italic ">
          Potenciamos marcas con ideas que conectan y tecnología que escala.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-4 bg-background/40"
              >
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
