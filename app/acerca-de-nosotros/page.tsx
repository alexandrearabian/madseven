export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Acerca de Nosotros</h1>
        <p className="text-lg text-muted-foreground">
          En MadSeven, somos un equipo apasionado por la comunicación
          estratégica y la consultoría.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Nuestra Misión</h2>
          <p className="text-muted-foreground">
            Nuestra misión es transformar la manera en que las empresas se
            comunican y se relacionan con sus audiencias, proporcionando
            soluciones estratégicas que generan valor real y resultados
            medibles.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Nuestra Visión</h2>
          <p className="text-muted-foreground">
            Aspiramos a ser el referente en consultoría estratégica y
            comunicación, reconocidos por nuestra innovación, excelencia y
            compromiso con el éxito de nuestros clientes.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Nuestros Valores</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <h3 className="text-xl font-bold">Excelencia</h3>
            <p className="text-muted-foreground">
              Buscamos la excelencia en cada proyecto, entregando resultados que
              superan las expectativas.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <h3 className="text-xl font-bold">Innovación</h3>
            <p className="text-muted-foreground">
              Nos mantenemos a la vanguardia, implementando soluciones creativas
              y efectivas.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            <h3 className="text-xl font-bold">Compromiso</h3>
            <p className="text-muted-foreground">
              Trabajamos con dedicación y pasión, comprometidos con el éxito de
              nuestros clientes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
