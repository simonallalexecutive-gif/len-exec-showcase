import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/approche")({
  component: ApprochePage,
  head: () => ({
    meta: [
      { title: "Notre approche — SOA Partners" },
      {
        name: "description",
        content:
          "Une méthodologie de recherche confidentielle, exigeante et sur-mesure pour les acteurs du droit.",
      },
    ],
  }),
});

const steps = [
  {
    id: "ecoute",
    label: "Écoute",
    title: "Comprendre avant de chercher",
    body: "Toute mission débute par un temps long d'écoute : enjeux stratégiques, culture, gouvernance, contexte d'équipe. Nous prenons la mesure de ce qui ne s'écrit pas dans une fiche de poste.",
  },
  {
    id: "cartographie",
    label: "Cartographie",
    title: "Une recherche systématique",
    body: "Nous établissons une cartographie exhaustive et confidentielle du marché cible. Aucun candidat n'est écarté sur la base d'un CV ; chaque profil est qualifié à l'aune des critères stratégiques convenus.",
  },
  {
    id: "approche",
    label: "Approche directe",
    title: "Discrète, personnelle, ciblée",
    body: "Nous approchons individuellement les profils retenus, dans le respect absolu de la confidentialité. La qualité de la conversation prime sur le volume de prises de contact.",
  },
  {
    id: "evaluation",
    label: "Évaluation",
    title: "Un jugement nuancé",
    body: "L'évaluation s'appuie sur des entretiens approfondis, la vérification des références et une analyse fine de la trajectoire. Nous remettons des notes circonstanciées, sans complaisance.",
  },
  {
    id: "accompagnement",
    label: "Accompagnement",
    title: "Au-delà du closing",
    body: "Nous accompagnons l'intégration et restons disponibles dans les mois qui suivent la prise de poste. Notre engagement ne s'arrête pas à la signature.",
  },
] as const;

const principles = [
  {
    n: "I.",
    t: "Confidentialité",
    d: "La discrétion est la condition première de la confiance que nous accordent nos clients et nos candidats.",
  },
  {
    n: "II.",
    t: "Sélectivité",
    d: "Nous limitons volontairement le nombre de missions menées en parallèle pour garantir un engagement total.",
  },
  {
    n: "III.",
    t: "Sur-mesure",
    d: "Chaque recherche est conçue spécifiquement ; aucun process standardisé, aucune base de candidats recyclée.",
  },
  {
    n: "IV.",
    t: "Éthique",
    d: "Nous refusons tout conflit d'intérêt et privilégions des relations construites sur la durée plutôt que sur l'opportunité.",
  },
];

function ApprochePage() {
  const [active, setActive] = useState<(typeof steps)[number]["id"]>("ecoute");
  const current = steps.find((s) => s.id === active)!;

  return (
    <>
      <section className="border-b border-border/60">
        <div className="container-prose grid gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="eyebrow">Notre approche</p>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
              L'exigence du temps juste,
              <br />
              au service de décisions structurantes.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Recruter un associé ou un General Counsel n'est pas un acte
              ordinaire : c'est un choix qui engage durablement la trajectoire
              d'une organisation. Notre méthodologie conjugue rigueur d'analyse,
              discrétion absolue et profondeur de jugement, pour faire émerger
              non pas le profil le plus visible, mais celui dont l'apport sera
              le plus juste et le plus durable.
            </p>
          </div>
        </div>
      </section>

      {/* Method tabs */}
      <section>
        <div className="container-prose py-20 md:py-28">
          <p className="eyebrow mb-10">Méthodologie</p>
          <div
            role="tablist"
            className="flex flex-wrap gap-x-10 gap-y-3 border-b border-border/60 pb-6"
          >
            {steps.map((s) => {
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(s.id)}
                  className={`relative pb-2 text-xs uppercase tracking-[0.22em] transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                  {isActive && (
                    <span className="absolute -bottom-[25px] left-0 right-0 h-px bg-foreground" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-16 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-serif text-6xl text-foreground/15">
                0{steps.findIndex((s) => s.id === active) + 1}
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                {current.title}
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {current.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border/60">
        <div className="container-prose py-24 md:py-32">
          <p className="eyebrow mb-12">Principes</p>
          <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.n} className="border-t border-foreground/80 pt-6">
                <p className="font-serif text-sm text-muted-foreground">{p.n}</p>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{p.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}