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
      name: 'mainBeforeAndAfter',
      title: 'Main Before and After Image',
      type: 'reference',
      to: {type: 'beforeandafterimage'},
    }),
    defineField({
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text',
        rows: 2,
        validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'servicesProvided',
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
            {type:'blockContent'},
            {type:'imagecluster'},
            {type:'beforeandafterimage'},
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
