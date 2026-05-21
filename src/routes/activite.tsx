import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/activite")({
  component: ActivitePage,
  head: () => ({
    meta: [
      { title: "Activité — LENNON Executive" },
      {
        name: "description",
        content:
          "Chasse de têtes pour cabinets d'avocats, directions juridiques et conseil de carrière.",
      },
    ],
  }),
});

const tabs = [
  {
    id: "avocats",
    label: "Cabinets d'avocats",
    title: "Pour les cabinets d'avocats",
    body: [
      "Nous accompagnons les cabinets d'avocats — internationaux, indépendants et boutiques de spécialité — dans le recrutement de leurs associés, of counsels et collaborateurs seniors.",
      "Notre expertise couvre l'ensemble des practices stratégiques : M&A, Private Equity, Contentieux, Arbitrage international, Fiscal, Concurrence, Restructuring, Financement, Immobilier, Social et Compliance.",
      "Chaque mission donne lieu à une recherche approfondie, confidentielle et entièrement sur-mesure.",
    ],
    list: [
      "Associés equity & salaried",
      "Of counsels & senior counsels",
      "Collaborateurs seniors",
      "Équipes & lateral moves",
    ],
  },
  {
    id: "directions",
    label: "Directions juridiques",
    title: "Pour les directions juridiques",
    body: [
      "Nous identifions pour les groupes français et internationaux les profils juridiques d'excellence : General Counsels, directeurs juridiques régionaux, responsables de practice et experts thématiques.",
      "Notre connaissance fine des organisations nous permet de comprendre la culture, la gouvernance et les enjeux spécifiques de chaque direction juridique.",
    ],
    list: [
      "General Counsel & Group GC",
      "Directeurs juridiques régionaux",
      "Responsables de practice (M&A, Compliance, Contentieux, Social…)",
      "Experts seniors & Heads of",
    ],
  },
  {
    id: "conseil",
    label: "Conseil de carrière",
    title: "Conseil & gestion de carrière",
    body: [
      "Au-delà du recrutement, nous accompagnons les avocats et juristes dans la construction de leur trajectoire : choix d'un cabinet, transition vers une direction juridique, négociation d'une association, positionnement de marché.",
      "Ce conseil s'inscrit dans une relation de long terme, fondée sur la confidentialité, l'écoute et l'analyse objective du marché.",
    ],
    list: [
      "Cartographie du marché & positionnement",
      "Stratégie d'évolution",
      "Préparation aux processus & négociation",
      "Accompagnement post-intégration",
    ],
  },
] as const;

function ActivitePage() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("avocats");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <>
      <section className="border-b border-border/60">
        <div className="container-prose grid gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow">Activité</p>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
              Trois expertises,
              <br />
              une même exigence.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              LENNON Executive intervient sur trois terrains complémentaires,
              tous structurés autour d'une connaissance intime du marché juridique
              et d'une approche strictement confidentielle.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-prose py-20 md:py-28">
          {/* Tabs */}
          <div
            role="tablist"
            className="flex flex-wrap gap-x-10 gap-y-3 border-b border-border/60 pb-6"
          >
            {tabs.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className={`relative pb-2 text-xs uppercase tracking-[0.22em] transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                  {isActive && (
                    <span className="absolute -bottom-[25px] left-0 right-0 h-px bg-foreground" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-16 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                {current.title}
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
                {current.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="eyebrow mb-6">Périmètre</p>
              <ul className="divide-y divide-border/60 border-t border-b border-border/60">
                {current.list.map((item) => (
                  <li key={item} className="flex items-baseline gap-4 py-4">
                    <span className="font-serif text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}