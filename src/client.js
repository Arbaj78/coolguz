// src/sanityClient.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '1maf89ly', // from sanity.io manage project
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})
