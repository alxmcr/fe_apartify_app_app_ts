/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PORT: number;
  readonly VITE_API_VERSION: string;
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string;
  }
}
