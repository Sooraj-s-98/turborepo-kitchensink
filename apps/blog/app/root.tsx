import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles.css";
import { Analytics } from "@vercel/analytics/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Blog | Kitchen Sink",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        	<script id="cookieyes" type="text/javascript" src="https://scriptstaging.cookieyes.com/client_data/1127135118db88921490c6d2/script.js"></script>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
