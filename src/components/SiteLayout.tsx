import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import officialLogo from "@/assets/official-logo.jpg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
  { to: "/guides/stretch-film-gauge-guide", label: "Guides" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img src={officialLogo} alt="PACKCORE logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="text-base font-extrabold tracking-tight">PACKCORE</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Future Business Oasis SPC</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground transition hover:text-primary" activeProps={{ className: "text-primary" }}>
                {n.label}
              </Link>
            ))}
            <a href="tel:+96876364939" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90">
              <Phone className="h-4 w-4" /> +968 76364939
            </a>
          </nav>
          <button className="rounded-md p-2 md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col px-4 py-3">
              {navItems.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-foreground" activeProps={{ className: "bg-secondary text-primary" }}>
                  {n.label}
                </Link>
              ))}
              <a href="tel:+96876364939" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
                <Phone className="h-4 w-4" /> +968 76364939
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={officialLogo} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
              <div>
                <div className="text-lg font-extrabold">PACKCORE</div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">A brand of Future Business Oasis Company SPC</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">Industrial packaging solutions built for strength, efficiency, and sustainability — serving Oman and the GCC.</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {navItems.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><a href="tel:+96876364939" className="hover:text-primary">+968 76364939</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><a href="mailto:futurebusinessoasis@gmail.com" className="hover:text-primary break-all">futurebusinessoasis@gmail.com</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Lwy, Sohar, North Al Batinah, Oman</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Future Business Oasis Company SPC · CR No. 1618196
        </div>
      </footer>

      <a href="https://wa.link/n8i7zz" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
