import { treaty } from "@elysiajs/eden";
import type { App } from "./main";

export function treatyClient() {
  return treaty<App>("localhost:8080");
}
