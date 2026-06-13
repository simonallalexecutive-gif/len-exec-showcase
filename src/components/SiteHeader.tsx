import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/activite", label: "Expertise" },
  { to: "/approche", label: "ADN" },
  { to: "/equipe", label: "Équipe" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });
  const isHome = pathname === "/" || pathname === "/index";
  const headerText = isHome ? "text-hero-gold" : "text-foreground";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${isHome ? "bg-gradient-to-b from-foreground/55 via-foreground/20 to-transparent" : "bg-gradient-to-b from-background/95 via-background/80 to-transparent"}`}>
      <div className="container-prose flex h-20 items-center justify-between">
        <Link
          to="/"
          className={headerText}
          style={{
            fontFamily: '"Copperplate", "Copperplate Gothic Light", serif',
            fontSize: "20px",
            letterSpacing: "2.1pt",
            textTransform: "uppercase",
          }}
          onClick={() => setOpen(false)}
        >
          SOA PARTNERS
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`${headerText} transition-colors hover:opacity-70`}
              style={{
                fontFamily: '"Copperplate", "Copperplate Gothic Light", serif',
                fontSize: "14px",
                letterSpacing: "normal",
                fontVariant: "normal",
                textTransform: "none",
              }}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={`relative z-10 flex h-11 w-11 items-center justify-center md:hidden ${headerText}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-background/15 bg-foreground/95 shadow-xl backdrop-blur-md md:hidden">
          <nav id="mobile-navigation" aria-label="Navigation principale" className="container-prose flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-background/10 py-4 text-hero-gold transition-opacity last:border-b-0 hover:opacity-70"
                style={{
                  fontFamily: '"Copperplate", "Copperplate Gothic Light", serif',
                  fontSize: "14px",
                  letterSpacing: "normal",
                  fontVariant: "normal",
                  textTransform: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}