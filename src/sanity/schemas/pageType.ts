import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ 
            name: 'slug', 
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Page builder',
            of: [
                defineArrayMember({
                    name: 'hero',
                    type: 'hero'
                }),
                defineArrayMember({
                    name: 'textWithIllustration',
                    type: 'textWithIllustration',
                }),
                defineArrayMember({
                    name: 'gallery',
                    type: 'gallery',
                }),
                defineArrayMember({
                    name: 'textblock',
                    type: 'textblock',
                }),
                defineArrayMember({
                    name: 'form',
                    type: 'form',
                }),
                defineArrayMember({
                    name: 'video',
                    type: 'video',
                }),
                defineArrayMember({
                    name: 'callToAction',
                    type: 'reference',
                    to: [{ type: 'promotion' }],
                }),
            ],
        }),
    ],
});