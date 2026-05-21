import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — LENNON Executive" },
      {
        name: "description",
        content:
          "Contactez LENNON Executive pour un échange confidentiel autour d'une mission de recrutement ou d'une réflexion de carrière.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <section>
      <div className="container-prose grid gap-16 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
            Un échange
            <br />
            confidentiel.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Que vous soyez un cabinet, une direction juridique ou un praticien
            en réflexion sur votre trajectoire, nous accueillons chaque
            sollicitation avec la même discrétion.
          </p>

          <div className="mt-12 space-y-6 border-t border-border/60 pt-8">
            <div>
              <p className="eyebrow mb-2">Adresse</p>
              <p className="text-sm text-foreground/85">Paris, France</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Email</p>
              <a
                href="mailto:contact@lennon-executive.com"
                className="text-sm text-foreground underline-offset-8 hover:underline"
              >
                contact@lennon-executive.com
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(
                `Prise de contact — ${data.get("name") || ""}`,
              );
              const body = encodeURIComponent(
                `${data.get("message") || ""}\n\n— ${data.get("name") || ""}\n${data.get("email") || ""}`,
              );
              window.location.href = `mailto:contact@lennon-executive.com?subject=${subject}&body=${body}`;
            }}
          >
            {[
              { id: "name", label: "Nom", type: "text", required: true },
              { id: "email", label: "Email", type: "email", required: true },
              { id: "company", label: "Cabinet / Entreprise", type: "text", required: false },
            ].map((f) => (
              <div key={f.id} className="border-b border-border/60 pb-2">
                <label
                  htmlFor={f.id}
                  className="eyebrow mb-2 block"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.required}
                  className="w-full bg-transparent py-2 text-base text-foreground outline-none placeholder:text-muted-foreground/60"
                />
              </div>
            ))}

            <div className="border-b border-border/60 pb-2">
              <label htmlFor="message" className="eyebrow mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none bg-transparent py-2 text-base text-foreground outline-none placeholder:text-muted-foreground/60"
              />
            </div>

            <button
              type="submit"
              className="border border-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}