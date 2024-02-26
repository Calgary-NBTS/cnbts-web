import { TextIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textblock',
  title: 'Text Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
        return {
            title: title || 'Untitled',
            subtitle: 'Text Block',
            media: TextIcon,
        }
    },
  },
})
