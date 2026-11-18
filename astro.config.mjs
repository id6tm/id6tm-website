// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			name: "Space Grotesk",
			provider: fontProviders.google(),
			cssVariable: "--font-grotesk",
		},
		{
			name: "Red Hat Text",
			provider: fontProviders.google(),
			cssVariable: "--font-redhat",
		},
		{
			name: "Outfit",
			provider: fontProviders.google(),
			cssVariable: "--font-outfit",
			weights: [300, 400, 600, 700],
		},
	],
	integrations: [svelte()],
	vite: {
		// @ts-ignore
		plugins: [tailwindcss()],
	},
});
