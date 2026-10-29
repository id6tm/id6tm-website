// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			name: "Space Grotesk",
			provider: fontProviders.google(), // ou fontProviders.google(), fontProviders.local(), etc.
			cssVariable: "--font-grotesk",
		},
		{
			name: "Red Hat Text",
			provider: fontProviders.google(), // ou fontProviders.google(), fontProviders.local(), etc.
			cssVariable: "--font-redhat",
		},
		{
			name: "Outfit",
			provider: fontProviders.google(), // ou fontProviders.google(), fontProviders.local(), etc.
			cssVariable: "--font-outfit",
		},
	],
	integrations: [svelte()],
	vite: {
		// @ts-ignore
		plugins: [tailwindcss()],
	},
});
