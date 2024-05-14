import { defineType, defineField } from "sanity";

export default defineType({
    name: 'resource',
    title: 'Resource',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            }
        }),
        defineField({
            name: 'categories',
            title: 'Resource Categories',
            type: 'array',
            of: [{ type: 'reference', to: {type: 'resource'}}]
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url'
        }),
        defineField({
            name: 'details',
            title: 'Details',
            type: 'blockContent'
          }),
    ]
})