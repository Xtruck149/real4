import { PageHeader } from "@/components/PageHeader";
import { UnitBrowser } from "@/components/UnitBrowser";
import { copy, site } from "@/content/site";
import { units } from "@/content/units";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(copy.unitsLabel, `Les établissements du ${site.name} à Abobo et Yopougon : maternelle, primaire et collège.`, copy.unitsPath);

export default function UnitsPage() {
  return (
    <>
      <PageHeader eyebrow={site.name} title={copy.unitsLabel}>
        <p>{copy.unitsIntro}</p>
      </PageHeader>
      <div className="container-site">
        <UnitBrowser units={units} basePath={copy.unitsPath} groupLabel="Campus" kindLabel="Cycle" />
      </div>
    </>
  );
}
