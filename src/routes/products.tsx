import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import stretchA from "@/assets/product-stretch.jpg";
import stretchB from "@/assets/product-stretch-2.jpg";
import stretchC from "@/assets/product-stretch-3.jpg";
import stretchD from "@/assets/product-stretch-4.jpg";
import bubbleImg from "@/assets/product-bubble.jpg";
import bubbleImg2 from "@/assets/product-bubble-2.jpg";
import bubbleImg3 from "@/assets/product-bubble-3.jpg";
import bubbleImg4 from "@/assets/product-bubble-4.jpg";
import coresImg from "@/assets/product-cores.jpg";
import coresImg2 from "@/assets/product-cores-2.jpg";
import coresImg3 from "@/assets/product-cores-3.jpg";
import coresImg4 from "@/assets/product-cores-4.jpg";
import tapeA from "@/assets/product-tape.jpg";
import tapeB from "@/assets/product-tape-2.jpg";
import tapeC from "@/assets/product-tape-3.jpg";
import tapeD from "@/assets/product-tape-4.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — PACKCORE Industrial Packaging" },
      { name: "description", content: "Stretch film, bubble film, paper cores, adhesive tapes, shrink film, foam rolls, strapping, and more — manufactured by PACKCORE in Oman." },
      { property: "og:title", content: "PACKCORE Products" },
      { property: "og:description", content: "Industrial packaging products manufactured in Oman." },
    ],
  }),
  component: Products,
});

const products = [
  {
    name: "Stretch Film",
    images: [stretchA, stretchB, stretchC, stretchD],
    intro: "Premium pallet-wrapping stretch film for maximum load stability.",
    features: ["High stretch ratio","Excellent puncture resistance","Clear visibility","Mini, manual, machine & jumbo rolls"],
    uses: ["Pallet wrapping","Export shipments","Logistics & warehousing"],
  },
  {
    name: "Bubble Film",
    images: [bubbleImg, bubbleImg2, bubbleImg3, bubbleImg4],
    intro: "Reliable air-bubble cushioning for sensitive and fragile items.",
    features: ["Lightweight protective cushioning","Moisture-resistant","Small, medium & large bubble sizes","Perforated or non-perforated"],
    uses: ["Electronics","Home appliances","Furniture & fragile cargo"],
  },
  {
    name: "Paper Cores & Tubes",
    images: [coresImg, coresImg2, coresImg3, coresImg4],
    intro: "High-strength paper cores for winding, packaging, and industrial use.",
    features: ["Custom diameters and lengths","Thick multi-layer walls","High compression strength","Smooth finishing"],
    uses: ["Stretch film winding","Tape manufacturing","Fabric & textile rolls","Printing & label industries"],
  },
  {
    name: "Adhesive Tapes",
    images: [tapeA, tapeB, tapeC, tapeD],
    intro: "Industrial-grade adhesive tapes for packaging, bundling, and sealing.",
    features: ["BOPP Packing Tape","Masking Tape","Double-Sided Tape","Duct Tape","Customized Printed Tape"],
    uses: ["Strong adhesion","Temperature resistance","Logo printing available","Silent-unwind options"],
  },
];

function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
        <img src={images[active]} alt={`${name} — view ${active + 1}`} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover transition" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {images.map((src, i) => (
          <button key={src} onClick={() => setActive(i)} aria-label={`Show ${name} image ${i + 1}`} className={`overflow-hidden rounded-lg border-2 transition ${i === active ? "border-primary" : "border-border hover:border-primary/40"}`}>
            <img src={src} alt="" loading="lazy" width={200} height={150} className="aspect-[4/3] w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return (
    <>
      <section className="border-b border-border bg-[image:var(--gradient-hero)] py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">Products</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">A Complete Range of Industrial Packaging</h1>
          <p className="mt-4 max-w-2xl text-white/85">From stretch film to adhesive tapes — built to perform in logistics, manufacturing, retail, and export operations.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="space-y-16">
          {products.map((p, idx) => (
            <article key={p.name} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <ProductGallery images={p.images} name={p.name} />
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{p.name}</h2>
                <p className="mt-3 text-muted-foreground">{p.intro}</p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Features</h3>
                    <ul className="mt-3 space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Applications</h3>
                    <ul className="mt-3 space-y-2">
                      {p.uses.map((u) => (
                        <li key={u} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{u}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Quality Assurance</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">We maintain strict quality standards through testing for film gauge consistency, adhesion strength, tensile & compression strength, load stability, and environmental resistance.</p>
          <a href="https://wa.link/n8i7zz" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]">
            <Phone className="h-4 w-4" /> Request a Quote on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
