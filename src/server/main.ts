import { setup } from "./setup";

export const port = process.env.SERVER_PORT;
export const hostname = "localhost";
export const baseUrl = `${hostname}:${port}`;
export const isDev = process.env.NODE_ENV !== "production";

const routes = {
  home: "/",
  about: "/about",
  config: "/config",
};

const api = (base: typeof setup) =>
  base
    .get(routes.home, () => "Hello from Server")
    .get(routes.about, () => ({
      runtime: process.env.RUNTIME_ID,
      version: { bun: () => globalThis.Bun }[process.env.RUNTIME_ID as "bun"]()
        .version,
    }))
    .get(routes.config, () => Bun.file("package.json"));

const app = api(setup).listen({
  port,
  hostname,
});

export type App = typeof app;

console.log(`Server running at http${isDev ? "" : "s"}://${baseUrl}/api`);
