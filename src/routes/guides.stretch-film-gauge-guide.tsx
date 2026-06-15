import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/guides/stretch-film-gauge-guide")({
  head: () => ({
    meta: [
      { title: "Stretch Film Gauge Guide — How to Choose the Right Micron" },
      { name: "description", content: "Technical guide to choosing stretch film thickness (12–40 microns). Compare load weights, stability needs, and film gauge for pallets, exports, and warehouse use." },
      { property: "og:title", content: "Stretch Film Gauge Guide — How to Choose the Right Micron" },
      { property: "og:description", content: "Compare load weights vs stretch film thickness. Practical reference table for 12–40 micron stretch film from PACKCORE Oman." },
    ],
  }),
  component: GuidePage,
});

const gaugeData = [
  { micron: "12", loadWeight: "Up to 500 kg", stability: "Light, uniform loads", useCases: "Consumer goods, light cartons, retail pallets", stretchRatio: "150–200%", notes: "Most economical for light, stable pallet shapes." },
  { micron: "15", loadWeight: "500–800 kg", stability: "Medium, uniform loads", useCases: "Beverage cases, packaged food, standard warehouse pallets", stretchRatio: "200–250%", notes: "Industry sweet spot for balance of cost and hold." },
  { micron: "17", loadWeight: "800–1,200 kg", stability: "Medium–heavy, slightly irregular", useCases: "Industrial components, mixed cartons, export-ready pallets", stretchRatio: "250–300%", notes: "Recommended for export shipments where extra puncture resistance matters." },
  { micron: "20", loadWeight: "1,200–1,500 kg", stability: "Heavy or irregular loads", useCases: "Machinery parts, building materials, sharp-edged products", stretchRatio: "300%+", notes: "High puncture resistance; consider pre-stretch for film savings." },
  { micron: "23", loadWeight: "1,500–2,000 kg", stability: "Very heavy, unstable, or sharp-cornered", useCases: "Steel products, heavy drums, long-distance export", stretchRatio: "300%+", notes: "Use with automatic wrappers and roping for maximum containment." },
  { micron: "30", loadWeight: "2,000+ kg", stability: "Extreme / high-value loads", useCases: "Oversized machinery, high-value export, hazardous goods", stretchRatio: "200–250%", notes: "Often applied as banding or multiple wraps rather than full coverage." },
  { micron: "40", loadWeight: "Specialty / custom", stability: "Custom containment projects", useCases: "Agricultural bale wrap, specialty industrial bundling", stretchRatio: "150–200%", notes: "Blown film variant; more tear-resistant than cast equivalents." },
];

const tips = [
  "Always measure your average pallet weight before selecting a gauge.",
  "Irregular load shapes (cones, cylinders, overhangs) need thicker film or more wraps.",
  "Pre-stretch film can reduce gauge needs by 1–2 microns while maintaining hold force.",
  "For export, add 2–3 microns to your standard choice for extra puncture safety.",
  "Store stretch film away from heat and UV to preserve cling and stretch performance.",
];

function GuidePage() {
  return (
    <>
      <section className="border-b border-border bg-[image:var(--gradient-hero)] py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">Technical Guide</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Stretch Film Gauge Guide</h1>
          <p className="mt-4 max-w-2xl text-white/85">How to choose the right stretch film thickness (micron) for your load weight, shape, and shipping conditions. Based on PACKCORE&apos;s 12–40 micron cast film range.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Stretch film thickness — measured in microns (µm) or gauge — is the single most important variable in load containment. Too thin and the film tears or loses its hold; too thick and you waste material and cost. This guide maps real-world load profiles to the 12–40 micron range PACKCORE manufactures, so you can spec the right film on the first try.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Load Weight vs Film Thickness</h2>
        <p className="mt-2 text-muted-foreground">Match your typical pallet profile to the recommended micron range. All values are for cast stretch film with standard cling on one side.</p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border shadow-[var(--shadow-card)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Micron (µm)</th>
                <th className="px-4 py-3 font-semibold">Load Weight</th>
                <th className="px-4 py-3 font-semibold">Stability</th>
                <th className="px-4 py-3 font-semibold">Common Use Cases</th>
                <th className="px-4 py-3 font-semibold">Stretch Ratio</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {gaugeData.map((row, i) => (
                <tr key={row.micron} className={i % 2 === 1 ? "bg-secondary/30" : "bg-card"}>
                  <td className="px-4 py-3 font-bold text-primary">{row.micron} µm</td>
                  <td className="px-4 py-3">{row.loadWeight}</td>
                  <td className="px-4 py-3">{row.stability}</td>
                  <td className="px-4 py-3">{row.useCases}</td>
                  <td className="px-4 py-3">{row.stretchRatio}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Practical Selection Tips</h2>
          <ul className="mt-6 space-y-4">
            {tips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Core Size Matters Too</h2>
        <p className="mt-3 text-muted-foreground">Stretch film is wound on paper cores. A 3-inch (76 mm) core is standard for machine wrappers; 2-inch (50 mm) or 1.5-inch cores are common for hand rolls. PACKCORE supplies matching paper cores in custom lengths and wall thicknesses to fit your dispensing equipment.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Hand Wrap</div>
            <div className="mt-2 text-2xl font-extrabold">1.5″ – 2″ core</div>
            <p className="mt-2 text-sm text-muted-foreground">Lightweight rolls for manual dispensers. Ideal for low-volume or irregular pallet shapes.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Semi-Auto Machine</div>
            <div className="mt-2 text-2xl font-extrabold">3″ core</div>
            <p className="mt-2 text-sm text-muted-foreground">Standard machine core. Fits most turntable and rotary-arm wrappers. Best for 15–23 micron film.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Jumbo Machine Roll</div>
            <div className="mt-2 text-2xl font-extrabold">3″ core / 10+ kg</div>
            <p className="mt-2 text-sm text-muted-foreground">High-mileage rolls for fully automatic lines. Reduces changeover downtime on high-throughput floors.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Need Help Choosing the Right Gauge?</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Our team can audit your pallet profiles and recommend the optimal micron, width, and pre-stretch setting — then quote custom rolls manufactured in our Sohar facility.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.link/n8i7zz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]">
              <Phone className="h-4 w-4" /> Request a Quote on WhatsApp
            </a>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
