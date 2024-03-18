import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textblock',
  title: 'Text Block',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Will define a heading, and will omit the heading if not filled in.'
    }),
    defineField({
      name: 'body',
      title: 'Text Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
