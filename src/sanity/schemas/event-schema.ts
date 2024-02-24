import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'event',
    title: 'Events',
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
            options: { source: 'name' }
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string'
        }),
        defineField({
            name: 'time',
            title: 'Time Start',
            type: 'datetime'
        }),
        defineField({
            name: 'timeend',
            title: 'Time End',
            type: 'datetime'
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
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent'
        })
    ]
})

