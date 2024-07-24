// env.ts
import { z } from "zod";

const envSchema = z.object({
  VITE_OPEN_WEATHER_API_KEY: z.string(),
});

const parsedEnv = envSchema.parse(import.meta.env);

export const env = {
  VITE_OPEN_WEATHER_API_KEY: parsedEnv.VITE_OPEN_WEATHER_API_KEY,
};

// The env.ts file is a schema that defines the structure of the environment variables and parses them using zod. It exports the parsed environment variables as a constant.
