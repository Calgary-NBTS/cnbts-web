import { GrNavigate } from 'react-icons/gr';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navigationItem',
  title: 'Navication Item',
  type: 'object',
  icon: GrNavigate,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Navigation Text',
    }),
    defineField({
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Navigation Item URL',
    }),
  ],
});
