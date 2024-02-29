import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Service Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }

    }),
    defineField({
      name: 'includeMobile',
      title: 'Include On Mobile Home Page',
      type: 'boolean',
      validation: (Rule) => Rule.required()

    }),
    defineField({
      name: 'includeDesktop',
      title: 'Include On Desktop Home Page',
      type: 'boolean',
      validation: (Rule) => Rule.required()

    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'The primary image that represents the service in the card and on the main page.',
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
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        rows: 2,
        validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
  }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type:'serviceStep'}
        ]
      }]
    }),
    defineField({
      name: 'left',
      title: 'Distance From Left Edge',
      type: 'string'
    }),
    defineField({
      name: 'top',
      title: 'Distance From Top Edge',
      type: 'string'
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
