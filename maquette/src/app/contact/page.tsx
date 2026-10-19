import { FactBadge, FactText } from "@/components/FactBadge";
import { PageHeader } from "@/components/PageHeader";
import { InfoRequestForm } from "@/components/forms/InfoRequestForm";
import { campusOf, copy, site } from "@/content/site";
import { units } from "@/content/units";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact & itinéraires", `Contacts et itinéraires des établissements du ${site.name}.`, "/contact");

export default function ContactPage() {
  const groups = [...new Set(units.map((u) => u.group))];
  return (
    <>
      <PageHeader eyebrow="Contact" title="Nous joindre, venir nous voir">
        <p>Chaque établissement a ses propres coordonnées et son itinéraire, accessibles en un geste sur mobile.</p>
      </PageHeader>
      <div className="container-site space-y-10">
        {groups.map((g) => (
          <section key={g} aria-labelledby={`g-${g}`}>
            <h2 id={`g-${g}`} className="text-3xl">{campusOf(g)}</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {units
                .filter((u) => u.group === g)
                .map((u) => (
                  <li key={u.slug} className="card p-6">
                    <h3 className="text-xl">{u.name}</h3>
                    <dl className="mt-3 space-y-2 text-sm">
                      {u.address ? (
                        <div>
                          <dt className="sr-only">Adresse</dt>
                          <dd><FactText fact={u.address} /></dd>
                        </div>
                      ) : null}
                      {u.phone ? (
                        <div>
                          <dt className="sr-only">Téléphone</dt>
                          <dd><FactText fact={u.phone} /></dd>
                        </div>
                      ) : null}
                    </dl>
                    {u.mapsQuery ? (
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.mapsQuery)}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-4 min-h-11 text-sm">
                        Itinéraire<span className="sr-only"> vers {u.name} (nouvel onglet)</span>
                      </a>
                    ) : null}
                  </li>
                ))}
            </ul>
          </section>
        ))}

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <section aria-labelledby="general-title" className="card p-6">
            <h2 id="general-title" className="text-2xl">Accueil général</h2>
            <p className="mt-3"><FactText fact={site.contact.address} /></p>
            <h3 className="mt-6 text-lg">
              Horaires
              <FactBadge status={site.contact.hours.status} source={site.contact.hours.source} />
            </h3>
            <ul className="mt-1 text-muted">
              {site.contact.hours.rows.map((r) => (
                <li key={r.days}>{r.days} : {r.hours}</li>
              ))}
            </ul>
            <h3 className="mt-6 text-lg">Réseaux sociaux</h3>
            <ul className="mt-1 text-muted">
              {site.social.length === 0 ? <li>Liens officiels à confirmer avec l&apos;établissement.</li> : null}
              {site.social.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline">{s.network}</a>
                  <FactBadge status={s.status} source={s.source} />
                </li>
              ))}
            </ul>
          </section>
          <section aria-label="Formulaire de contact">
            <InfoRequestForm organisation={site.name} units={units.map((u) => ({ value: u.slug, label: u.name }))} unitLabel="Établissement concerné" profils={copy.profils} />
          </section>
        </div>
      </div>
    </>
  );
}
