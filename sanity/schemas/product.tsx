export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{
        name: 'Product image name',
        title: 'product image',
        type: 'image',
        options: {
          hotspot: true
        }
      }],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of Product',
    }, 
    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string'
    },
    {
      name: 'categories',
      title: 'Product Categories',
      type: 'reference',
      to: [{type: 'categories'}]
    }
  ]
}