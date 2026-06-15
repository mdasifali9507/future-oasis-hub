import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PACKCORE — Industrial Packaging in Oman" },
      { name: "description", content: "Contact PACKCORE / Future Business Oasis Company SPC in Sohar, Oman. Call +968 76364939 for industrial packaging quotes." },
      { property: "og:title", content: "Contact PACKCORE" },
      { property: "og:description", content: "Get in touch for quotes and orders." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const message = encodeURIComponent(
      `Hello PACKCORE,\n\nName: ${name}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:futurebusinessoasis@gmail.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${message}`;
    setTimeout(() => { setSubmitting(false); toast.success("Opening your email app to send the inquiry…"); }, 400);
  };

  return (
    <>
      <section className="border-b border-border bg-[image:var(--gradient-hero)] py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">Contact</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl text-white/85">We'd love to hear from you. Reach out for quotes, custom packaging, or partnership inquiries.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: Phone, title: "Phone", value: "+968 76364939", href: "tel:+96876364939" },
              { icon: Mail, title: "Email", value: "futurebusinessoasis@gmail.com", href: "mailto:futurebusinessoasis@gmail.com" },
              { icon: MapPin, title: "Address", value: "Lwy, Sohar, North Al Batinah Governorate, Sultanate of Oman" },
              { icon: Clock, title: "Working Hours", value: "Sat–Thu: 8 AM – 6 PM · Fri: Closed" },
            ].map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
                  {href ? (
                    <a href={href} className="mt-1 block font-medium hover:text-primary break-all">{value}</a>
                  ) : (
                    <div className="mt-1 font-medium">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill out the form and our team will get back to you shortly.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2"><Field label="Email" name="email" type="email" required /></div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea name="message" required rows={5} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Tell us what packaging you need…" />
              </div>
            </div>
            <button type="submit" disabled={submitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90 disabled:opacity-60 sm:w-auto">
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label} {required && <span className="text-destructive">*</span>}</label>
      <input type={type} name={name} required={required} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}
