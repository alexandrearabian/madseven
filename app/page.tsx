import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col items-center justify-center gap-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          MadSeven
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Tu socio estratégico en comunicación y consultoría. Transformamos
          ideas en resultados.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/servicios">Nuestros Servicios</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-2 rounded-lg border p-6">
          <h3 className="text-xl font-bold">Consultoría Estratégica</h3>
          <p className="text-muted-foreground">
            Desarrollamos estrategias personalizadas para impulsar tu negocio al
            siguiente nivel.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border p-6">
          <h3 className="text-xl font-bold">Comunicación</h3>
          <p className="text-muted-foreground">
            Gestionamos tu presencia mediática y construimos relaciones con los
            medios.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border p-6">
          <h3 className="text-xl font-bold">Asesoramiento</h3>
          <p className="text-muted-foreground">
            Te acompañamos en cada paso con soluciones adaptadas a tus
            necesidades.
          </p>
        </div>
      </section>
    </div>
  );
}
