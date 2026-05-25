import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'vnu5o15g', // Get this from sanity.io/manage
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-04-22',
});