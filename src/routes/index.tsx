import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SOA Partners — Chasse de têtes pour le droit" },
      {
        name: "description",
        content:
          "Cabinet de conseil stratégique et de chasse de têtes premium dédié aux cabinets d'avocats et directions juridiques.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="container-prose grid gap-16 pt-24 pb-32 md:grid-cols-12 md:pt-32 md:pb-40">
          <div className="md:col-span-7">
            <p className="eyebrow">Executive Search · Legal</p>
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              Expertise.
              <br />
              Confidentialité.
              <br />
              <em className="not-italic text-accent">Résultat.</em>
            </h1>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              SOA Partners est un cabinet de conseil stratégique et de chasse
              de têtes dédié aux acteurs du droit : cabinets d'avocats et
              directions juridiques.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Nous accompagnons les associés, dirigeants et experts dans les
              moments décisifs de leur trajectoire.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link
                to="/contact"
                className="border border-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Nous contacter
              </Link>
              <Link
                to="/approche"
                className="text-xs uppercase tracking-[0.22em] text-foreground/70 underline-offset-8 hover:text-foreground hover:underline"
              >
                Découvrir notre approche →
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-border/60">
              <img
                src={hero}
                alt="Architecture institutionnelle d'un cabinet d'avocats"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-t border-border/60">
        <div className="container-prose grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow">Le cabinet</p>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-3xl leading-snug text-foreground md:text-4xl">
              Une approche confidentielle, exigeante et sur-mesure. Nous
              intervenons exclusivement auprès des acteurs du droit et plaçons
              la confiance, la discrétion et la justesse au cœur de chaque
              mission.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="border-t border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="grid gap-x-16 gap-y-16 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Cabinets d'avocats",
                d: "Recrutement d'associés, of counsels et collaborateurs seniors pour les cabinets internationaux et indépendants.",
              },
              {
                n: "02",
                t: "Directions juridiques",
                d: "Identification de General Counsels, responsables juridiques et experts pour les groupes français et internationaux.",
              },
              {
                n: "03",
                t: "Conseil de carrière",
                d: "Accompagnement personnalisé des avocats et juristes à chaque étape de leur trajectoire professionnelle.",
              },
            ].map((p) => (
              <div key={p.n} className="border-t border-foreground/80 pt-6">
                <p className="font-serif text-sm text-muted-foreground">{p.n}</p>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{p.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              to="/activite"
              className="text-xs uppercase tracking-[0.22em] text-foreground underline-offset-8 hover:underline"
            >
              Voir l'activité →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
