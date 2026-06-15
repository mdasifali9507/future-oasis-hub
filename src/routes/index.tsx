import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Truck, Factory, Leaf, Phone, CheckCircle2, ClipboardList, Settings2, FlaskConical, PackageCheck, BadgeCheck, Send, Award, Globe2 } from "lucide-react";
import heroImg from "@/assets/factory-hero.jpg";
import stretchImg from "@/assets/product-stretch.jpg";
import bubbleImg from "@/assets/product-bubble.jpg";
import coresImg from "@/assets/product-cores.jpg";
import tapeImg from "@/assets/product-tape.jpg";
import sustainableImg from "@/assets/product-sustainable.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PACKCORE — Industrial Packaging Solutions in Oman" },
      { name: "description", content: "PACKCORE by Future Business Oasis SPC manufactures adhesive tapes, stretch films, protective packaging & paper cores in Sohar, Oman. Trusted partner across the GCC." },
      { property: "og:title", content: "PACKCORE — Adhesive Tapes & Stretch Films in Oman" },
      { property: "og:description", content: "Stretch film, bubble film, paper cores & adhesive tapes — manufactured in Oman." },
    ],
  }),
  component: Home,
});

const products = [
  { name: "Adhesive Tapes", img: tapeImg, desc: "BOPP packing tape, masking tape, double-sided tissue tape, and printed branded tape — made for clean adhesion and long shelf life." },
  { name: "Stretch & Pallet Films", img: stretchImg, desc: "High-performance cast stretch film and machine pallet wrap from 12 to 40 microns. Engineered for load containment and reduced film consumption." },
  { name: "Protective Packaging", img: bubbleImg, desc: "Air bubble rolls and cushioning materials that absorb shock during handling and shipping — ideal for fragile and high-value goods." },
  { name: "Paper Cores & Tubes", img: coresImg, desc: "Spiral-wound paper cores and industrial tubes built to precise inner-diameter tolerances for film, tape, textile, and label converting." },
];

const heroSlides = [
  { img: tapeImg, eyebrow: "Adhesive Tapes", title: "Strong Bond. Clean Finish.", text: "BOPP packing, masking, double-sided & printed branded tapes." },
  { img: stretchImg, eyebrow: "Stretch & Pallet Films", title: "Load Stability You Can Trust", text: "Cast stretch film & machine wrap — 12 to 40 microns." },
  { img: bubbleImg, eyebrow: "Protective Packaging", title: "Cushioned for Every Journey", text: "Bubble rolls & protective wraps for fragile goods." },
  { img: heroImg, eyebrow: "Manufactured in Sohar, Oman", title: "Serving Oman & the GCC", text: "Modern facility. Reliable delivery. Bulk & export ready." },
];

const whyUs = [
  { icon: Factory, title: "Modern Production", text: "State-of-the-art machinery and large-scale manufacturing capacity." },
  { icon: ShieldCheck, title: "Reliable Quality", text: "Strict quality control on every roll, tube, and tape we ship." },
  { icon: Truck, title: "Fast Delivery", text: "Quick, dependable delivery across Oman and the GCC region." },
  { icon: Leaf, title: "Eco-Friendly", text: "Sustainable manufacturing and recyclable material options." },
];

const qualitySteps = [
  { icon: ClipboardList, title: "Order Receipt & Planning", text: "Every order is reviewed and scheduled into our production plan with confirmed specs." },
  { icon: Settings2, title: "Precision Machine Setup", text: "Lines are calibrated for the exact width, gauge, and length your order requires." },
  { icon: FlaskConical, title: "First-Article Sampling", text: "Samples are tested at the start of each run to confirm quality, dimensions, and finish." },
  { icon: PackageCheck, title: "In-Process Inspection", text: "Random rolls are pulled mid-run; packaging integrity is verified before sealing." },
  { icon: BadgeCheck, title: "Performance Guarantee", text: "Every dispatch carries our guarantee against the agreed specification." },
  { icon: Send, title: "On-Time Delivery", text: "Coordinated logistics across Oman and the GCC with full after-sales support." },
];

function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <section className="relative">
        <h1 className="sr-only">PACKCORE — Industrial Packaging Manufacturer in Oman: Adhesive Tapes, Stretch Films, Bubble Wrap & Paper Cores</h1>
        <div className="relative h-[65vh] min-h-[440px] w-full overflow-hidden bg-slate-900">
          {heroSlides.map((s, i) => (
            <div key={s.eyebrow} className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`} aria-hidden={i !== slide}>
              <img src={s.img} alt={s.title} loading={i === 0 ? "eager" : "lazy"} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,30,70,0.85)] via-[rgba(0,30,70,0.45)] to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                  <div className="max-w-xl text-white">
                    <span className="inline-block rounded-full bg-[#0a66c2] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow">{s.eyebrow}</span>
                    <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight drop-shadow-lg sm:text-5xl">{s.title}</h2>
                    <p className="mt-3 text-base font-medium text-white/95 drop-shadow sm:text-lg">{s.text}</p>
                    <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0a66c2] shadow-lg hover:bg-sky-50">
                      Explore our products <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {heroSlides.map((s, i) => (
              <button key={i} onClick={() => setSlide(i)} aria-label={`Go to ${s.eyebrow} slide`} className={`h-2.5 rounded-full transition-all ${i === slide ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"}`} />
            ))}
          </div>
        </div>

        <div className="bg-sky-50 border-y border-sky-100">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm font-bold text-slate-900 sm:text-base">Your Reliable Partner for Adhesive Tapes, Stretch Films &amp; Packaging Material</p>
            <div className="flex gap-2">
              <a href="https://wa.link/n8i7zz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800">
                Get a Quote <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="tel:+96876364939" className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-900 hover:text-white">
                <Phone className="h-3.5 w-3.5" /> Call
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-y border-border bg-secondary/40 py-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary to-transparent" aria-hidden />
          <div className="group overflow-hidden">
            <div className="flex w-max gap-6 animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...products, ...products, ...products].map((p, i) => (
                <Link key={`${p.name}-${i}`} to="/products" className="flex w-64 shrink-0 items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40">
                  <img src={p.img} alt={p.name} width={64} height={64} loading="lazy" className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold">{p.name}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-wider opacity-80">View product →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Welcome to PACKCORE</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Future Business Oasis Company SPC</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">PACKCORE is the manufacturing arm of Future Business Oasis Company SPC, a professionally managed Omani enterprise (CR No. 1618196) producing industrial packaging from our facility in Sohar. We supply adhesive tapes, stretch films, protective packaging, and paper cores to manufacturers, logistics operators, FMCG brands, and exporters across the region.</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">With a no-compromise policy on quality and a focus on customer satisfaction, we offer a diverse product range — backed by modern machinery, rigorous quality control, and dependable delivery across Oman and the GCC.</p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">PACKCORE Range of Products</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A Complete Range for Every Packaging Need</h2>
            <p className="mt-4 text-muted-foreground">Multiple options across every vertical — built to spec, available in custom widths, gauges, lengths, and branded print.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.name} className="group overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <Link to="/products" className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:underline">
                    {`View ${p.name} details`} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-90">
              Discover Our Product Range <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Globe2 className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">PACKCORE as a Regional Supplier & Exporter</h2>
              <p className="mt-4 text-muted-foreground">Our products serve customers throughout Oman and the wider GCC — including the UAE, Saudi Arabia, Qatar, Bahrain, and Kuwait — with growing demand from East Africa and the Indian subcontinent. We offer competitive pricing on bulk and wholesale orders, with consolidated container shipments for export buyers.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {["Oman","UAE","Saudi Arabia","Qatar","Bahrain","Kuwait","Yemen","East Africa","Indian Subcontinent"].map((m) => (
                <div key={m} className="rounded-lg border border-border bg-card px-3 py-3 text-center font-semibold shadow-sm">{m}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Custom Branding</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Your Brand, Printed on Every Roll</h2>
            <p className="mt-4 text-muted-foreground">PACKCORE can take your packaging from generic to fully branded. Share your logo, artwork, tape type, and required quantity — we'll prepare proofs for your approval and move straight into production. We brand inner cores, outer cartons, and the printed surface of tapes and films.</p>
            <ul className="mt-6 space-y-3">
              {["Custom artwork & proofing service","Branded inner cores and outer cartons","Printed BOPP and stretch film options","Fast turnaround — approx. 2 weeks for new branding","Shorter lead times for repeat orders"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{t}</span></li>
              ))}
            </ul>
            <a href="https://wa.link/n8i7zz" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:opacity-90">
              Request Branding Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <img src={sustainableImg} alt="Sustainable kraft packaging" loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Factory className="h-6 w-6" /></div>
              <h3 className="mt-4 text-2xl font-bold">Manufacturing Excellence</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Our Sohar facility is equipped with modern slitting, rewinding, and converting machinery operated by a trained production team. Streamlined workflows and predictable lead times let us deliver consistent quality at competitive prices — whether you order a single pallet or a full container.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Our investment in eco-friendly material options reflects our commitment to reduce carbon footprint and serve customers looking for recyclable and biodegradable packaging.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Award className="h-6 w-6" /></div>
              <h3 className="mt-4 text-2xl font-bold">Quality You Can Trust</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Every product is tested for film gauge consistency, adhesion strength, tensile and compression performance, load stability, and environmental resistance before it leaves our facility.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Quality Management aligned to ISO 9001 principles","Documented batch traceability on every order","Health, safety & environmental compliance","Continuous improvement and customer focus"].map((t) => (
                  <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Our Quality Process</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built on Honesty, Integrity & Consistency</h2>
          <p className="mt-4 text-muted-foreground">From order receipt to delivery, our process is structured to ensure the highest customer satisfaction on every shipment.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualitySteps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <span className="absolute right-4 top-4 text-4xl font-extrabold text-primary/10">0{i + 1}</span>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Industries We Serve</h2>
            <p className="mt-3 text-sm text-muted-foreground">Trusted by manufacturers, exporters, and logistics teams across multiple sectors.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {["Manufacturing","FMCG & Retail","Food & Beverage","Logistics & Warehousing","Electronics & Appliances","Agriculture","E-commerce","Export Markets"].map((i) => (
              <div key={i} className="rounded-lg border border-border bg-card px-3 py-3 text-center font-semibold">{i}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-white" style={{ backgroundImage: `linear-gradient(135deg, rgba(0,49,99,0.95) 0%, rgba(10,102,194,0.95) 100%)` }}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to discuss your packaging requirement?</h2>
            <p className="mt-2 text-sm text-white/90">Talk to the PACKCORE team — we'll recommend the right product, gauge, and dimensions for your operation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+96876364939" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0a66c2] shadow-lg hover:bg-sky-50">
              <Phone className="h-4 w-4" /> Call +968 76364939
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-5 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#0a66c2]">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
