# Subscription Matrix renderer

Renders a subscription matrix to a website using [Astro](https://astro.build/).

## Build

Replace [`plans.json`](./plans.json) with the plans to build.
The corresponding type can be found in [`plans.ts`](./src/types/plans.ts).
Example plans are already provided in the [plans](./plans.json)-file.

Then, run `npm run build`.
The built website can be found in the [`dist`-directory](./dist/).