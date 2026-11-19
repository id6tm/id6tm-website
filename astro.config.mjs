// @ts-check

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			name: "Space Grotesk",
			provider: fontProviders.google(),
			cssVariable: "--font-grotesk",
			weights: [300, 400, 600, 700],
		},
		{
			name: "Red Hat Text",
			provider: fontProviders.google(),
			cssVariable: "--font-redhat",
			weights: [300, 400, 600, 700],
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
		// @ts-expect-error
		plugins: [tailwindcss()],
	},
});
