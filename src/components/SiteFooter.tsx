import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl tracking-[0.18em]">
            LENNON <span className="text-muted-foreground">EXECUTIVE</span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Conseil stratégique et chasse de têtes dédiés aux cabinets d'avocats
            et aux directions juridiques.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/activite" className="hover:text-foreground text-foreground/75">Activité</Link></li>
            <li><Link to="/approche" className="hover:text-foreground text-foreground/75">Notre approche</Link></li>
            <li><Link to="/equipe" className="hover:text-foreground text-foreground/75">Équipe</Link></li>
            <li><Link to="/contact" className="hover:text-foreground text-foreground/75">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Cabinet</p>
          <ul className="space-y-2 text-sm text-foreground/75">
            <li>Paris, France</li>
            <li>contact@lennon-executive.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} LENNON Executive. Tous droits réservés.</p>
          <p className="tracking-[0.18em] uppercase">Discretion · Excellence · Confiance</p>
        </div>
      </div>
    </footer>
  );
}