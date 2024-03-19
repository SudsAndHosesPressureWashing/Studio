import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'beforeandafterimage',
  title: 'Before and After Image',
  type: 'document',
  fields: [
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ],
      validation: (Rule) => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'afterImage.caption',
      media: 'afterImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
