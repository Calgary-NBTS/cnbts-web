import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [{ type: 'navigation.section' }],
    }),
  ],
});
