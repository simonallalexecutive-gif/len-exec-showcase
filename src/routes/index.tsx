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
        <div className="container-prose pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-4xl">
            <p className="eyebrow">
              Cabinet spécialisé dans l'<em className="italic">Executive Search</em> dédiée aux professionnels du Droit
            </p>
            <h1 className="mt-10 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              Expertise.
              <br />
              Confidentialité.
              <br />
              <em className="not-italic text-accent">Résultat.</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Immersive feature image */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden md:h-[80vh]">
          <img
            src={hero}
            alt="Architecture institutionnelle d'un cabinet d'avocats"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-background/40" />
          <div className="container-prose relative flex h-full flex-col justify-end pb-12 md:pb-20">
            <div className="max-w-2xl">
              <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
                SOA Partners accompagne les associés, dirigeants et experts
                dans les moments décisifs de leur trajectoire.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <Link
                  to="/contact"
                  className="border border-foreground bg-background/70 px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground backdrop-blur-sm transition-colors hover:bg-foreground hover:text-background"
                >
                  Nous contacter
                </Link>
                <Link
                  to="/approche"
                  className="text-xs uppercase tracking-[0.22em] text-foreground/80 underline-offset-8 hover:text-foreground hover:underline"
                >
                  Découvrir notre approche →
                </Link>
              </div>
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
