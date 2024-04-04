declare module "bun" {
  interface Env {
    SERVER_PORT: string;
    RUNTIME_ID: string;
  }
}
