export default {
  name: 'poem',
  type: 'document',
  title: 'Poem',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'index',
      type: 'number',
      title: 'Index',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
  ],
}
