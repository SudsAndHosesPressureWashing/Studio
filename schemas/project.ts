import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Project Slug',
      type: 'slug',
      validation: (Rule) => Rule.required()

    }),
    defineField({
      name: 'includeHomePage',
      title: 'Include On The Home Page',
      type: 'boolean'
    }),
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
    defineField({
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        rows: 2,
        validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'servicesProvides',
      title: 'Services Provided',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type:'service'},
          ]
        },
    ]
    }),
    defineField({
      name: 'section',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type:'textblock'},
            {type:'imagecluster'},
          ]
        },
        {type:'image'},
    ]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'afterImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
