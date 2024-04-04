import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";

export const setup = new Elysia().use(cors()).use(
  staticPlugin({
    assets: `static`,
    prefix: "/",
  })
);
