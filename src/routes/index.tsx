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

const copperplate = '"Copperplate", "Copperplate Gothic Light", serif';
const inter = '"Inter", system-ui, sans-serif';
const elegantSerif = '"Cormorant Garamond", "Didot", "Bodoni 72", serif';

function Index() {
  return (
    <>
      {/* Immersive hero with integrated text */}
      <section className="relative">
        <div className="relative min-h-[92vh] w-full overflow-hidden">
          <img
            src={hero}
            alt="Architecture institutionnelle d'un cabinet d'avocats"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "brightness(0.72) contrast(1.06) saturate(0.95)" }}
          />
          {/* Balanced premium fade — readable but not too dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />

          <div className="container-prose relative flex min-h-[92vh] flex-col justify-center pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="max-w-3xl text-white">
              <p
                className="text-[10px] uppercase text-white/85 md:text-[11px]"
                style={{
                  fontFamily: copperplate,
                  letterSpacing: "0.28em",
                }}
              >
                Cabinet spécialisé dans l'
                <em className="italic">Executive Search</em> dédiée aux
                professionnels du Droit
              </p>

              <h1
                className="mt-10 text-4xl leading-[1.1] text-white md:text-[3.6rem]"
                style={{
                  fontFamily: copperplate,
                  letterSpacing: "0.04em",
                  fontWeight: 300,
                  textShadow: "0 2px 24px rgba(0,0,0,0.45)",
                }}
              >
                Expertise.
                <br />
                Confidentialité.
                <br />
                <span className="text-white/90">Résultat.</span>
              </h1>

              <p
                className="mt-10 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
                style={{ fontFamily: inter }}
              >
                SOA Partners est un cabinet de conseil stratégique et de chasse
                de têtes dédié aux acteurs du droit : cabinets d'avocats et
                directions juridiques.
              </p>
              <p
                className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
                style={{ fontFamily: inter }}
              >
                Nous accompagnons les associés, dirigeants et experts dans les
                moments décisifs de leur trajectoire.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-8">
                <Link
                  to="/contact"
                  className="border border-white/90 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
                  style={{ fontFamily: copperplate }}
                >
                  Nous contacter
                </Link>
                <Link
                  to="/approche"
                  className="text-xs uppercase tracking-[0.22em] text-white/80 underline-offset-8 hover:text-white hover:underline"
                  style={{ fontFamily: copperplate }}
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
                  className="mt-6 text-[1.7rem] leading-tight text-foreground"
                  style={{
                    fontFamily: elegantSerif,
                    letterSpacing: "0.01em",
                    fontWeight: 500,
                  }}
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
