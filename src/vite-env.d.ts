/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PORT: number;
  readonly VITE_API_VERSION: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_MAPBOX_MODE_DISPLAY: string;
  readonly VITE_APP_MAPBOX_ACCESS_TOKEN: string;
  readonly VITE_APP_MAPBOX_ACCESS_STYLE_MAP: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
