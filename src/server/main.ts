import { setup } from "./setup";

export const port = 8080;
export const hostname = "localhost";
export const baseUrl = `${hostname}:${port}`;
export const isDev = process.env.NODE_ENV !== "production";

const api = (base: typeof setup) =>
  base
    .get("/", () => "Hello from Server")
    .get("/about", () => ({
      runtime: "bun",
      version: Bun.version,
    }));

const app = api(setup).listen({
  port,
  hostname,
});

export type App = typeof app;

console.log(`Server running at http${isDev ? "" : "s"}://${baseUrl}/api`);
