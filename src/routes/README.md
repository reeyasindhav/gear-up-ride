# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
defines a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Project routes

| File                  | URL                                                 |
| --------------------- | --------------------------------------------------- |
| `index.tsx`           | `/`                                                 |
| `privacy.tsx`         | `/privacy`                                          |
| `terms.tsx`           | `/terms`                                            |
| `contact.tsx`         | `/contact`                                          |
| `press.tsx`           | `/press`                                            |
| `blog/$blogId.tsx`    | `/blog/:blogId`                                    |
| `blog.tsx`            | `/blog`                                             |
| `help.tsx`            | `/help`                                             |
| `about.tsx`           | `/about`                                            |
| `login.tsx`           | `/login`                                            |
| `signup.tsx`          | `/signup`                                           |
| `dashboard.tsx`       | `/dashboard`                                        |
| `routes/index.tsx`    | `/routes`                                           |
| `routes/$routeId.tsx` | `/routes/:routeId`                                  |
| `gear/index.tsx`      | `/gear`                                             |
| `gear/$gearId.tsx`    | `/gear/:gearId`                                     |
| `rides/index.tsx`     | `/rides`                                            |
| `community/index.tsx` | `/community`                                        |
| `profile/index.tsx`   | `/profile`                                          |
| `__root.tsx`          | app shell — wraps every page; preserve `<Outlet />` |

## Conventions

| File                     | URL                                                     |
| ------------------------ | ------------------------------------------------------- |
| `about.tsx`              | `/about`                                                |
| `users/index.tsx`        | `/users`                                                |
| `users/$id.tsx`          | `/users/:id` (dynamic — bare `$`, no curly braces)      |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment)                  |
| `files/$.tsx`            | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx`            | layout route (renders children via `<Outlet />`)        |
| `__root.tsx`             | app shell — wraps every page; preserve `<Outlet />`     |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.
