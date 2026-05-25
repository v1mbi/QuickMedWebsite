export const blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog Post',
    fields: [
      { name: 'author', type: 'string' },
      { name: 'title', type: 'string' },
      { 
        name: 'blogImage', 
        type: 'image', 
        title: 'Blog Image',
        readOnly: false, 
        options: { hotspot: true }
      },
      { name: 'message', type: 'text' }
    ]
  }