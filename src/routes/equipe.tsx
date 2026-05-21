import { createFileRoute, Link } from "@tanstack/react-router";
import simon from "@/assets/simon.jpg";
import olivia from "@/assets/olivia.jpg";

export const Route = createFileRoute("/equipe")({
  component: EquipePage,
  head: () => ({
    meta: [
      { title: "Équipe — LENNON Executive" },
      {
        name: "description",
        content:
          "Simon Allal et Olivia Altar, associés fondateurs de LENNON Executive.",
      },
    ],
  }),
});

const team = [
  {
    name: "Simon Allal",
    role: "Associé fondateur",
    image: simon,
    bio: [
      "Diplômé d'un LL.M. à l'Université Cardozo Law School de New York et du Master 2 Arbitrage et Commerce International de l'Université de Versailles Saint-Quentin (UVSQ), Simon a commencé sa carrière en cabinets d'avocats, en arbitrage international et contentieux.",
      "Il se passionne par la suite pour les enjeux liés au conseil et à la gestion de carrière des avocats et rejoint un cabinet de recrutement anglo-saxon réputé.",
      "Fort aujourd'hui d'une excellente connaissance du marché parisien, Simon accompagne les collaborateurs et associés à chaque étape dans leurs évolutions. Par son écoute, ses analyses et sa rigueur, il s'est forgé un réseau de confiance qu'il suit et entretient au long cours avec bienveillance et éthique.",
    ],
    credentials: [
      "LL.M., Cardozo Law School (New York)",
      "Master 2 Arbitrage & Commerce International (UVSQ)",
      "Ancien avocat — Arbitrage international & Contentieux",
      "Expertise approfondie du marché parisien",
    ],
  },
  {
    name: "Olivia Altar",
    role: "Associée fondatrice",
    image: olivia,
    bio: [
      "Avocate au Barreau de Paris, Olivia est titulaire d'un Master 2 en Droit International de l'Université Paris II Panthéon-Assas ainsi que d'une Maîtrise des Sciences de Gestion de l'Université Dauphine-PSL.",
      "Elle a débuté sa carrière chez White & Case LLP avant de se spécialiser dans le recrutement juridique. Elle a dirigé pendant près de dix ans la division Legal, Tax & Compliance d'un cabinet de recrutement international de premier plan à Paris.",
      "Installée à Rome en 2016, elle crée la practice Legal & Finance de Badenoch & Clark, où elle recrute notamment pour le compte de cabinets d'avocats et de directions juridiques et financières de groupes internationaux. Elle est également référencée en qualité d'Executive Search Partner recommandé par la Chambre de Commerce France-Italie.",
      "Forte de plus de 15 ans d'expérience en recrutement de profils à haut potentiel dans des environnements multiculturels, Olivia met son expertise au service d'un conseil sur mesure, exigeant et engagé. Elle est trilingue français, anglais et italien.",
    ],
    credentials: [
      "Avocate au Barreau de Paris",
      "Master 2 Droit International (Paris II Panthéon-Assas)",
      "Maîtrise Sciences de Gestion (Dauphine-PSL)",
      "Ancienne avocate — White & Case LLP",
      "15+ ans d'expérience en recrutement juridique international",
      "Trilingue : Français, Anglais, Italien",
    ],
  },
];

function EquipePage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="container-prose grid gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow">Équipe</p>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
              Deux trajectoires
              <br />
              au service d'une même conviction.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              LENNON Executive a été fondé par deux praticiens du droit devenus
              chasseurs de têtes. De cette double culture naît une compréhension
              fine du métier d'avocat et de juriste d'entreprise.
            </p>
          </div>
        </div>
      </section>

      {team.map((m, idx) => (
        <section
          key={m.name}
          className={idx > 0 ? "border-t border-border/60" : ""}
        >
          <div className="container-prose grid gap-16 py-24 md:grid-cols-12 md:py-32">
            <div
              className={`md:col-span-5 ${
                idx % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden border border-border/60">
                <img
                  src={m.image}
                  alt={m.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="eyebrow">{m.role}</p>
              <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
                {m.name}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                {m.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="mt-10 divide-y divide-border/60 border-t border-b border-border/60">
                {m.credentials.map((c) => (
                  <li key={c} className="flex items-baseline gap-4 py-3">
                    <span className="font-serif text-xs text-muted-foreground">·</span>
                    <span className="text-sm text-foreground/85">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border/60">
        <div className="container-prose flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
          <p className="font-serif text-2xl text-foreground md:text-3xl">
            Une mission à confier ? Un échange confidentiel ?
          </p>
          <Link
            to="/contact"
            className="border border-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Nous écrire
          </Link>
        </div>
      </section>
    </>
  );
}