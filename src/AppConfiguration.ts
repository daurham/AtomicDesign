import { writable, type Writable } from 'svelte/store';
import type { AppConfirguration } from "./lib/types";


// Define Applications Configurations
export const AppConfig: Writable<AppConfirguration> = writable({
  theme: "light",
});

