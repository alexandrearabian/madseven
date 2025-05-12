import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contacto() {
  return (
    <div className="flex flex-col gap-24 pt-32">
      {/* Header Section */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tighter mb-8">Contacto</h1>
        <p className="max-w-[800px] mx-auto text-xl text-muted-foreground leading-relaxed">
          Estamos aquí para ayudarte. Contáctanos para discutir cómo podemos impulsar tu proyecto.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Asunto del mensaje" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Tu mensaje"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Corrientes 1234<br />
                    Ciudad Autónoma de Buenos Aires<br />
                    Argentina
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    info@madseven.com
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">
                    +54 11 1234-5678
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Horario de Atención</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábados y Domingos: Cerrado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4">
        <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted/20">
          <CardContent className="p-0">
            <div className="aspect-[16/9] w-full bg-muted">
              {/* Add your map component or iframe here */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Mapa de ubicación
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
