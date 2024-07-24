// global.d.ts
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_OPEN_WEATHER_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
