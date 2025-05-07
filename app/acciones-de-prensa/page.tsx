import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PressActionsPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Acciones de Prensa</h1>
        <p className="text-lg text-muted-foreground">
          Descubre nuestras últimas acciones y cobertura mediática.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Últimas Noticias</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Lanzamiento de Nueva Estrategia</CardTitle>
              <CardDescription>15 de Marzo, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Presentamos nuestra nueva estrategia de comunicación digital que
                revolucionará la manera en que las empresas se conectan con sus
                audiencias.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conferencia de Prensa</CardTitle>
              <CardDescription>10 de Marzo, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Realizamos una exitosa conferencia de prensa donde presentamos
                nuestros resultados del último trimestre y nuestras proyecciones
                futuras.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Próximos Eventos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Workshop de Comunicación</CardTitle>
              <CardDescription>25 de Marzo, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Un workshop exclusivo donde compartiremos las mejores prácticas
                en comunicación estratégica y relaciones públicas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Networking Event</CardTitle>
              <CardDescription>30 de Marzo, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Únete a nuestro evento de networking donde conectaremos
                profesionales del sector y compartiremos experiencias exitosas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
