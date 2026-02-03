import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus('https://sandbox.directus.io').with(rest());

