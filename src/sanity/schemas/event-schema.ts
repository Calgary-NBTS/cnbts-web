import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    }),
    defineField({
      name: 'locationname',
      title: 'Location Name',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'time',
      title: 'Time Start',
      type: 'datetime',
    }),
    defineField({
      name: 'timeend',
      title: 'Time End',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
          // validation: rule => rule.required().warning('You need to have an alternative text for the image.')
        },
      ],
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      deprecated: {
        reason: 'Use the Title field instead for database naming consistency',
      },
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
          validation: (rule) =>
            rule
              .required()
              .min(1)
              .error('You need to have an alternative text for the image.'),
        },
      ],
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      name: 'name',
      date: 'time',
      image: 'image',
    },
    prepare(selection) {
      const { title, name, date, image } = selection;
      return {
        title: title || name,
        subtitle: new Date(date).toDateString(),
        media: image,
      };
    },
  },
  orderings: [
    {
      title: 'When Asc',
      name: 'whenAsc',
      by: [{ field: 'time', direction: 'asc' }],
    },
    {
      title: 'When Desc',
      name: 'whenDesc',
      by: [{ field: 'time', direction: 'desc' }],
    },
  ],
});
