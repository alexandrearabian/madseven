import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center gap-8 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Thinking
          <span className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] bg-clip-text text-transparent">
            {" "}
            Lab
          </span>
        </h1>
        <p className="max-w-[800px] text-xl sm:text-2xl leading-relaxed">
          Explora nuestro espacio de ideas donde compartimos artículos sobre
          tendencias en comunicación, marketing digital y tecnología. Nuestro
          objetivo es mantenerte informado y ofrecerte insights valiosos para tu
          negocio.
        </p>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Comunicación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Estrategias y tendencias en comunicación corporativa, relaciones
                públicas y gestión de marca.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/categoria/comunicacion">Ver artículos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Marketing Digital
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Insights sobre marketing digital, redes sociales, SEO y
                estrategias de contenido.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/categoria/marketing-digital">
                  Ver artículos
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Tecnología</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Innovaciones tecnológicas, desarrollo web, aplicaciones y
                transformación digital.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/categoria/tecnologia">Ver artículos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Artículos Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                El Futuro de la Comunicación Digital
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Exploramos las tendencias emergentes en comunicación digital y
                cómo están transformando la manera en que las marcas se conectan
                con su audiencia.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/articulo/futuro-comunicacion-digital">
                  Leer más
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-background/40 border border-primary/40">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Inteligencia Artificial en Marketing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Descubre cómo la IA está revolucionando las estrategias de
                marketing y qué significa esto para el futuro de la industria.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/blog/articulo/ia-marketing">Leer más</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4">
        <Card className="shadow-lg bg-background/40 border border-primary/40">
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
      </section>
    </div>
  );
}
