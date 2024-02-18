import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imagecluster',
  title: 'Image Cluster',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Will act as descriptive text just below the image or image cluster'
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {type:'image'}
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
