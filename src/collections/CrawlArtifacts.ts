import type { CollectionConfig } from 'payload'

export const CrawlArtifacts: CollectionConfig = {
  slug: 'crawlArtifacts',

  access: {
    create: () => true,
    read: () => true,
  },

  fields: [
    {
      name: 'sourceUrl',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'contentType',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
    {
      name: 'metadata',
      type: 'json',
    },
  ],
}
