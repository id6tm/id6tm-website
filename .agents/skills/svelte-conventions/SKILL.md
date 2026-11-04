# Svelte 5 Patterns

- **State Ownership:** Keep state as local as possible. Use Stores only for shared data (e.g., Cart).
- **Derived State:** Use `$derived` for all computed values.
- **Side Effects:** Use `$effect` only for side-effects or external synchronizations.
- **Subscriptions:** Always use the `$` prefix for store subscriptions (e.g., `$cart`) to ensure automatic cleanup.
- **Binding:** Use `bind:value` for form fields to maintain seamless synchronization between input and local state.

# Component Architecture

- **Strict Typing:** All props MUST be defined in an interface/type _before_ the `$props()` declaration.
- **Immutable Props:** Wrap prop types in `Readonly` to ensure component purity.
- **Single Responsibility:** One component = one task. Split complex logic into sub-components or hooks.
- **Iteration:** All `{#each}` blocks MUST include a key.

# Styling & Imports

- **Tailwind First:** Use Tailwind classes for all styling.
- **Conditional Style** Use cn to apply conditional styling, except for dynamic styling like colors mappings (use inline style).
- **UI Library Support:** Use Bits UI (or similar) for complex components (Select, Dialog) while maintaining Tailwind for layout and spacing.
- **Import Style:** Prefer namespace imports over explicit imports as it is best supported by Astro.
