import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/activite", label: "Activité" },
  { to: "/approche", label: "Notre approche" },
  { to: "/equipe", label: "Équipe" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link
          to="/"
          className="text-black"
          style={{
            fontFamily: '"Copperplate", "Copperplate Gothic Light", serif',
            fontSize: "16px",
            letterSpacing: "1.7pt",
            textTransform: "uppercase",
          }}
          onClick={() => setOpen(false)}
        >
          LENNON EXECUTIVE
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-black transition-colors hover:opacity-70"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "12px",
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
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="container-prose flex flex-col py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-black"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "12px",
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