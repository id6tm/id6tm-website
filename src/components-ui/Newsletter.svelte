<script lang="ts">
import { reporter, ValidationMessage } from "@felte/reporter-svelte";
import { validator } from "@felte/validator-zod";
import { cn } from "@utils/cn";
import { createForm } from "felte";
import { ShrimpIcon } from "phosphor-svelte";
import z from "zod";
import Button from "./Button.svelte";
import Input from "./Input.svelte";

const newsletterVariants = {
	NORMAL: "normal",
	BIG: "big",
} as const;
type NewsletterVariant =
	(typeof newsletterVariants)[keyof typeof newsletterVariants];

interface NewsletterProps {
	variant?: NewsletterVariant;
}

let {
	/**
	 * default - normal
	 */
	variant = newsletterVariants.NORMAL,
}: NewsletterProps = $props();

let isBig = $derived(variant === newsletterVariants.BIG);

const schema = z.object({
	email: z.email("Le format semble incorrect"),
});
const { form } = createForm<z.infer<typeof schema>>({
	onSubmit: (data) => {
		window.alert(JSON.stringify(data));
	},
	extend: [validator({ schema }), reporter],
});
</script>

<!-- hardcoded background style for now, custom dynamic background images later on -->
<section
	class="p-16"
	style="background: linear-gradient(180deg, #FFF 0%, #E9E8FF 100%);"
>
	<div class="flex flex-col gap-10">
		<div class={cn("flex flex-col items-center", isBig ? "gap-10" : "gap-6")}>
			<h2 class={isBig ? "text-h1" : "text-h2"}>Ne ratez plus aucun article</h2>
			<h3 class={isBig ? "text-h2-5" : "text-h3 tracking-[-0.48px]"}>
				Rejoignez notre newsletter
			</h3>
			<p class={isBig ? "text-t2" : "text-t3"}>
				Actualités des projets, futur de l’association, partage divers...
				recevez tous les mois l’information id6 !
			</p>
		</div>

		<form use:form class="flex justify-center gap-2">
			<fieldset name="email" class="relative">
				<Input
					type="email"
					name="email"
					placeholder="email@exemple.fr"
					aria-describedby="email-error"
				/>
				<ValidationMessage for="email" let:messages={message}>
					<span class="text-red/60 absolute top-11 text-sm" id="email-error"
						>{message}</span
					>
				</ValidationMessage>
			</fieldset>

			<Button
				type="submit"
				color="black"
				size={isBig ? "medium" : "small"}
				btnIcon={ShrimpIcon}
				>M'inscrire</Button
			>
		</form>
	</div>
</section>
