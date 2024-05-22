import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navigation.section',
  type: 'object',
  title: 'Section',
  fields: [
    defineField({
      type: 'reference',
      name: 'target',
      title: 'Target article',
      to: [{ type: 'page' }],
      // _weak: true // enable if you don't want reference integrity checks
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [{ type: 'navigation.link' }],
    }),
  ],
});
