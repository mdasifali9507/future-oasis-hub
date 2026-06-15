import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Award } from "lucide-react";
import heroImg from "@/assets/hero-packaging.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PACKCORE — Future Business Oasis Company SPC" },
      { name: "description", content: "Learn about Future Business Oasis Company SPC (PACKCORE) — a professionally managed packaging manufacturer in Sohar, Oman serving the GCC." },
      { property: "og:title", content: "About PACKCORE" },
      { property: "og:description", content: "A professionally managed packaging manufacturer serving Oman and the GCC." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Your Trusted Partner for Industrial Packaging Solutions
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5 text-base leading-relaxed text-foreground">
            <p><strong>Future Business Oasis Company SPC</strong> is a professionally managed packaging products manufacturer serving clients across Oman and the GCC. Our advanced production facility ensures high-performance packaging designed for protection, efficiency, and cost savings.</p>
            <p>Through our brand <strong>PACKCORE</strong>, we deliver a complete range of industrial packaging — stretch film, bubble film, adhesive tapes, and durable paper cores — designed to support logistics, warehousing, and manufacturing operations.</p>
            <p>Our mission is to deliver consistent, reliable, and affordable packaging materials that meet the demands of modern industries.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company Details</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div><dt className="text-muted-foreground">Brand</dt><dd className="font-medium">PACKCORE</dd></div>
              <div><dt className="text-muted-foreground">CR No.</dt><dd className="font-medium">1618196</dd></div>
              <div><dt className="text-muted-foreground">Location</dt><dd className="font-medium">Lwy, Sohar, North Al Batinah, Oman</dd></div>
              <div><dt className="text-muted-foreground">Working Hours</dt><dd className="font-medium">Sat–Thu: 8 AM – 6 PM</dd></div>
            </dl>
          </aside>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", text: "Deliver consistent, reliable, and affordable packaging materials that meet the demands of modern industries." },
            { icon: Eye, title: "Our Vision", text: "Become the leading industrial packaging brand in Oman and the GCC, known for quality and innovation." },
            { icon: Award, title: "Why We Stand Out", text: "Modern technology, custom dimensions, large-scale capacity, strict quality control, and dedicated support." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
