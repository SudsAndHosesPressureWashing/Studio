import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
        name: 'address',
        title: 'Company Address',
        type: 'string',
    }),
    defineField({
        name: 'phone',
        title: 'Company Phone Number',
        type: 'number',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'favicon',
        title: 'Favicon',
        type: 'image',
        description: 'The icon that shows up at the top left corner of the window when the page is open, or in the tab.'
    }),
    defineField({
      name: 'aboutUs',
      title: 'About Us',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo'
    },
    prepare(selection) {
  
      return {...selection}
    },
  },
})
