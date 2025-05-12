import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
        <p className="text-lg text-muted-foreground">
          En Mad Seven, combinamos la pasión por la comunicación con el poder de la tecnología para ofrecer soluciones integrales que potencian la presencia y el impacto de nuestros clientes. Nuestro equipo multidisciplinario trabaja en estrecha colaboración con cada cliente, desarrollando estrategias personalizadas que responden a sus objetivos y desafíos específicos.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Nuestra Misión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Impulsar el crecimiento de marcas y organizaciones mediante estrategias de comunicación integradas, soluciones digitales innovadoras y tecnología aplicada, generando conexiones auténticas y resultados medibles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nuestra Visión</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Ser la consultora de referencia para empresas que buscan transformar su comunicación y presencia digital, destacando por nuestra creatividad, enfoque estratégico y compromiso con la excelencia.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">Nuestros Valores</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Innovación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Apostamos por ideas frescas y soluciones creativas que marcan la diferencia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compromiso</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos involucramos profundamente en cada proyecto, trabajando como una extensión del equipo del cliente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transparencia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fomentamos relaciones basadas en la honestidad y la comunicación abierta.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Adaptabilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos ajustamos a las necesidades cambiantes del mercado y de nuestros clientes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Excelencia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Buscamos superar las expectativas, ofreciendo resultados de alta calidad.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
