import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroTexture from "@/assets/soa-landing-texture.jpg";

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

const copperplate = '"Copperplate", "Copperplate Gothic Light", serif';
const inter = '"Inter", system-ui, sans-serif';

function Index() {
  return (
    <>
      {/* Immersive opening inspired by the supplied art direction */}
      <section className="relative">
        <div className="relative min-h-[92vh] w-full overflow-hidden">
          <img
            src={heroTexture}
            alt="Texture abstraite aux nuances brunes et ambrées"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/15 via-transparent to-foreground/25" />

          <div className="container-prose relative flex min-h-[92vh] items-center justify-center pt-20">
            <h1
              className="text-center text-[clamp(2.15rem,7.6vw,5rem)] leading-none text-hero-gold"
              style={{
                fontFamily: copperplate,
                fontWeight: 300,
                letterSpacing: "0.015em",
              }}
            >
              SOA PARTNERS
            </h1>
          </div>
        </div>
      </section>

      {/* Introductory copy retained below the opening visual */}
      <section className="border-t border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="max-w-3xl text-foreground">
              <p
                className="text-[10px] uppercase text-foreground/80 md:text-[11px]"
                style={{
                  fontFamily: copperplate,
                  letterSpacing: "0.28em",
                }}
              >
                Cabinet spécialisé dans l'
                <em className="italic">Executive Search</em> dédiée aux
                professionnels du Droit
              </p>

              <h2
                className="mt-10 text-4xl leading-[1.1] text-foreground md:text-[3.6rem]"
                style={{
                  fontFamily: copperplate,
                  letterSpacing: "0.04em",
                  fontWeight: 300,
                }}
              >
                Expertise.
                <br />
                Confidentialité.
                <br />
                <span className="text-foreground/85">Résultat.</span>
              </h2>

              <p
                className="mt-10 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg"
                style={{ fontFamily: inter }}
              >
                SOA Partners est un cabinet de conseil stratégique et de chasse
                de têtes dédié aux acteurs du droit : cabinets d'avocats et
                directions juridiques.
              </p>
              <p
                className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
                style={{ fontFamily: inter }}
              >
                Nous accompagnons les associés, dirigeants et experts dans les
                moments décisifs de leur trajectoire.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-8">
                <Link
                  to="/contact"
                  className="border border-foreground bg-background/40 px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground backdrop-blur-sm transition-colors hover:bg-foreground hover:text-background"
                  style={{ fontFamily: copperplate }}
                >
                  Nous contacter
                </Link>
                <Link
                  to="/approche"
                  className="text-xs uppercase tracking-[0.22em] text-foreground/75 underline-offset-8 hover:text-foreground hover:underline"
                  style={{ fontFamily: copperplate }}
                >
                  Découvrir notre approche →
                </Link>
              </div>
            </div>
          </div>
      </section>

      {/* Statement */}
      <section className="border-t border-border/60">
        <div className="container-prose grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow" style={{ fontFamily: copperplate }}>Le cabinet</p>
          </div>
          <div className="md:col-span-8">
            <p
              className="text-3xl leading-snug text-foreground md:text-4xl"
              style={{ fontFamily: copperplate, letterSpacing: "0.02em" }}
            >
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
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: copperplate }}
                >
                  {p.n}
                </p>
                <h3
                  className="mt-6 text-2xl text-foreground"
                  style={{ fontFamily: copperplate, letterSpacing: "0.03em" }}
                >
                  {p.t}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: inter }}
                >
                  {p.d}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              to="/activite"
              className="text-xs uppercase tracking-[0.22em] text-foreground underline-offset-8 hover:underline"
              style={{ fontFamily: copperplate }}
            >
              Voir l'activité →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
