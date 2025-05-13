import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Contacto() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-8 pt-32 text-center px-2">
        <h1 className="text-6xl font-bold tracking-tighter md:text-8xl ">
          Contacta
          <span className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] bg-clip-text text-transparent">
            nos
          </span>
        </h1>
        <p className="max-w-[800px] text-md md:text-2xl leading-relaxed">
          Estamos acá para ayudarte a alcanzar tus objetivos. Contanos sobre tu
          proyecto y te responderemos a la brevedad.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Información de Contacto
              </CardTitle>
              <CardDescription className="text-lg">
                Estamos disponibles para responder tus consultas y coordinar una
                reunión.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Email</h3>

                <Link
                  href="mailto:info@madseven.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@madseven.com
                </Link>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Teléfono</h3>
                <Link
                  href={`tel:+34912345678`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 912 345 678
                </Link>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Ubicación</h3>
                <p className="text-muted-foreground">Madrid, España</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Envianos un Mensaje
              </CardTitle>
              <CardDescription className="text-lg">
                Completá el formulario y nos pondremos en contacto contigo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre completo"
                    className="bg-background/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-background/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    placeholder="Nombre de tu empresa"
                    className="bg-background/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto"
                    className="min-h-[150px] bg-background/40"
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4">
        <Card className="shadow-lg bg-background/40 border border-primary/40">
          <CardContent className="py-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">
                ¿Preferís agendar una reunión?
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Coordinemos una llamada para discutir tus necesidades y cómo
                podemos ayudarte a alcanzar tus objetivos.
              </p>
              <Button size="lg" className="h-12 px-8 text-lg">
                Agendar Reunión
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
