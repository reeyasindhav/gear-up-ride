import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type User = {
  name: string;
  email: string;
  initials: string;
  role: string;
  city: string;
};

type AuthState = {
  user: User | null;
  ready: boolean;
  signIn: (email: string, name?: string) => User;
  signUp: (name: string, email: string) => User;
  signOut: () => void;
};

const STORAGE_KEY = "gearshift.user";

const AuthContext = createContext<AuthState | null>(null);

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw) as User);
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, []);

  const persist = useCallback((next: User) => {
    setUser(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    return next;
  }, []);

  const signIn = useCallback(
    (email: string, name?: string) => {
      const derived = name?.trim() || email.split("@")[0]!.replace(/[._-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return persist({
        name: derived,
        email,
        initials: initialsOf(derived) || "GS",
        role: "Weekend explorer",
        city: "Portland, Oregon",
      });
    },
    [persist],
  );

  const signUp = useCallback((name: string, email: string) => signIn(email, name), [signIn]);

  const signOut = useCallback(() => {
    setUser(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<AuthState>(() => ({ user, ready, signIn, signUp, signOut }), [user, ready, signIn, signUp, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
