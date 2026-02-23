import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  admin: {
    useAsTitle: 'email',
  },

  auth: {
    useAPIKey: true, // ✅ THIS LINE ENABLES API TOKENS
  },

  fields: [
    // Email & password are handled automatically by Payload
  ],
}
