import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Twitter, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Press", to: "/press" },
];

const supportLinks = [
  { label: "Help center", to: "/help" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
];

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/">
              <Logo />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Route safety, honest gear reviews, ride tracking and local cycling clubs in one calm
              place.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={cn(
                      "text-sm text-muted-foreground transition-colors hover:text-foreground",
                      isActive(item.to) && "text-foreground font-semibold",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Support
            </p>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={cn(
                      "text-sm text-muted-foreground transition-colors hover:text-foreground",
                      isActive(item.to) && "text-foreground font-semibold",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </p>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={cn(
                      "text-sm text-muted-foreground transition-colors hover:text-foreground",
                      isActive(item.to) && "text-foreground font-semibold",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Gearshift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
