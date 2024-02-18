import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceStep',
  title: 'Service Step',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
