interface CloudflareEnv {
  ASSETS: Fetcher;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CloudflareEnv {}
  }
}