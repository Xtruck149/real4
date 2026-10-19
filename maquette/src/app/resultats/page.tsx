import { PageHeader } from "@/components/PageHeader";
import { results } from "@/content/results";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Résultats aux examens", `Résultats du ${site.name} aux examens (CEPE, BEPC, BAC), par année et par établissement.`, "/resultats");

const rate = (a: number, c: number) => (c ? (a / c) * 100 : 0);
const pct = (v: number) => `${v.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`;

export default function ResultsPage() {
  const years = [...new Set(results.map((r) => r.year))].sort().reverse();
  const allDemo = results.every((r) => r.status === "demo");

  return (
    <>
      <PageHeader eyebrow="Excellence & réussite" title="Résultats aux examens">
        <p>Résultats présentés par année, examen et établissement. Le taux est calculé automatiquement à partir des admis et des présentés.</p>
        {allDemo ? (
          <p role="note" className="mt-3 rounded-xl border-2 border-highlight p-4 text-base text-ink">
            <strong>Chiffres de démonstration.</strong> Ils seront remplacés par les résultats officiels publiés par l&apos;établissement.
          </p>
        ) : null}
      </PageHeader>

      <div className="container-site space-y-14">
        {years.map((year) => {
          const rows = results.filter((r) => r.year === year);
          const exams = [...new Set(rows.map((r) => r.exam))];
          return (
            <section key={year} aria-labelledby={`y-${year}`}>
              <h2 id={`y-${year}`} className="text-3xl">Session {year}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {exams.map((exam) => {
                  const r = rows.filter((x) => x.exam === exam);
                  const a = r.reduce((s, x) => s + x.admitted, 0);
                  const c = r.reduce((s, x) => s + x.candidates, 0);
                  const v = rate(a, c);
                  return (
                    <li key={exam} className="card p-6">
                      <p className="text-sm font-bold uppercase tracking-widest text-muted">{exam} · tous campus</p>
                      <p className="mt-2 text-4xl font-bold text-accent">{pct(v)}</p>
                      <div className="mt-3 h-2 rounded-full bg-surface-2" aria-hidden="true">
                        <div className="h-2 rounded-full bg-accent" style={{ width: `${v}%` }} />
                      </div>
                      <p className="mt-2 text-sm text-muted">
                        {a} admis sur {c} présentés
                      </p>
                    </li>
                  );
                })}
              </ul>
              <ul className="mt-6 divide-y divide-line border-y border-line sm:hidden">
                {rows.map((r) => (
                  <li key={`${r.exam}-${r.unit}`} className="flex items-baseline justify-between gap-3 py-3">
                    <span>
                      <span className="font-semibold">{r.exam}</span> · {r.unit}
                      <span className="block text-sm text-muted">
                        {r.admitted} admis / {r.candidates} présentés
                      </span>
                    </span>
                    <span className="font-semibold">{pct(rate(r.admitted, r.candidates))}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 hidden overflow-x-auto sm:block">
                <table className="w-full min-w-[34rem] text-left">
                  <caption className="sr-only">Résultats détaillés de la session {year}</caption>
                  <thead>
                    <tr className="border-b-2 border-line text-sm text-muted">
                      <th scope="col" className="py-2 pr-4">Examen</th>
                      <th scope="col" className="py-2 pr-4">Établissement</th>
                      <th scope="col" className="py-2 pr-4 text-right">Admis</th>
                      <th scope="col" className="py-2 pr-4 text-right">Présentés</th>
                      <th scope="col" className="py-2 text-right">Taux</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={`${r.exam}-${r.unit}`} className="border-b border-line">
                        <th scope="row" className="py-3 pr-4 font-semibold">{r.exam}</th>
                        <td className="py-3 pr-4">{r.unit}</td>
                        <td className="py-3 pr-4 text-right">{r.admitted}</td>
                        <td className="py-3 pr-4 text-right">{r.candidates}</td>
                        <td className="py-3 text-right font-semibold">{pct(rate(r.admitted, r.candidates))}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
        <p className="text-sm text-muted">
          Aucune donnée nominative d&apos;élève n&apos;est publiée sur cette page. Un tableau d&apos;honneur éventuel n&apos;affichera que des
          élèves dont les parents ont donné leur accord écrit.
        </p>
      </div>
    </>
  );
}
