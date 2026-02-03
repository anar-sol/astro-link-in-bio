// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://anar-sol.github.io/",
  base: "astro-link-in-bio/"
});