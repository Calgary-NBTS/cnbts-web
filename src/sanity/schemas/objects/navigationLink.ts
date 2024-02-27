import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'navigation.link',
    type: 'object',
    title: 'Link',
    preview: {
      select: {
        title: 'title',
        targetTitle: 'target.title',
      },
      prepare: ({ title, targetTitle }) => ({
        title: title || targetTitle,
      }),
    },
    fields: [
      defineField({
        type: 'reference',
        name: 'target',
        title: 'Target article',
        to: [{ type: 'page' }],
        description: 'No target article turns the item into a subheading.',
        // _weak: true // enable if you don't want reference integrity checks  
      }),
      defineField({
        type: 'string',
        name: 'title',
        title: 'Title',
        description: 'Override title from the target article.',
      }),
      defineField({
        type: 'array',
        name: 'children',
        title: 'Children',
        of: [{ type: 'navigation.link' }],
      }),
    ],
  });