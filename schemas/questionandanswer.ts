import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'questionandanswer',
  title: 'Question And Answer',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
      validation: (Rule) => Rule.required()

    }),
  ],
  preview: {
    select: {
      title: 'question'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
