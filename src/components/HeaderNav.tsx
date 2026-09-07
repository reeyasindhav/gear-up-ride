import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth";

interface HeaderNavProps {
  showAuth?: boolean;
}

export function HeaderNav({ showAuth = true }: HeaderNavProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 py-4 lg:px-10">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="ml-auto hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            to="/about"
            className={cn(
              "link-underline text-foreground/75 transition-colors hover:text-foreground",
              isActive("/about") && "text-foreground font-semibold",
            )}
          >
            Why Gearshift
          </Link>
          <Link
            to="/routes"
            className={cn(
              "link-underline text-foreground/75 transition-colors hover:text-foreground",
              isActive("/routes") && "text-foreground font-semibold",
            )}
          >
            Routes
          </Link>
          <Link
            to="/gear"
            className={cn(
              "link-underline text-foreground/75 transition-colors hover:text-foreground",
              isActive("/gear") && "text-foreground font-semibold",
            )}
          >
            Gear
          </Link>
          <Link
            to="/community"
            className={cn(
              "link-underline text-foreground/75 transition-colors hover:text-foreground",
              isActive("/community") && "text-foreground font-semibold",
            )}
          >
            Community
          </Link>
        </nav>
        {showAuth && (
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            {user ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Dashboard <ArrowRight className="size-4" />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Start riding
                  <ArrowRight className="size-4" />
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
