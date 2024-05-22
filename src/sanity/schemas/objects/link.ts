import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }],
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLs for external link',
      type: 'url',
    }),
  ],
});
