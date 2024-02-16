import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pronoun',
  title: 'Pronoun',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    })
  ],
})
