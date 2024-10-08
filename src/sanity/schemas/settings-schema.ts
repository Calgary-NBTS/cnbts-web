import { CogIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sitesettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'domainname',
      title: 'Domain Name',
      type: 'string',
    }),
    defineField({
      name: 'bglight',
      title: 'Light Background Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    }),
    defineField({
      name: 'bgdark',
      title: 'Dark Background Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    }),
    // defineField({
    //     name: 'image',
    //     title: 'Image',
    //     type: 'image',
    //     options: { hotspot: true },
    //     fields: [
    //         {
    //             name: 'alt',
    //             title: 'Alt',
    //             type: 'string'
    //         }
    //     ]
    // }),
  ],
  icon: CogIcon,
});
