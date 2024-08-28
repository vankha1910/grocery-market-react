import { productImage1, productImage2, productImage3 } from '~/assets'
import { Product } from '~/types/product.type'

const productList: Product[] = [
  {
    id: 1,
    name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    brand: 'Lavazza',
    taste: 'Balanced & Fruity',
    discount: 10,
    tags: ['Light', 'Single Origins'],
    size: [
      {
        label: 'Standard: 10.93 oz (About 20 Cups)',
        value: 'Standard',
        quantity: 99,
        price: 120.05
      },
      {
        label: 'Large: 32 oz (About 60 cups)',
        value: 'Large',
        quantity: 99,
        price: 250.05
      }
    ],
    thumbImg: productImage1,
    rated: 4.2,
    grindType: [
      'Whole Bean',
      'Automatic Drip',
      'Pour Over',
      'Espresso',
      'French Press',
      'Cold Brew',
      'Aeropress',
      'Percolator',
      'Chemex',
      'Moka Pot',
      'Refillable Pods'
    ],
    description: `Gentle, refreshing, light - we'd be thrilled to drink this blend any time of year but it's truly perfect for the summer.`
  },
  {
    id: 2,
    name: 'Lavazza Coffee Blends - Try the Italian Espresso',
    brand: 'Welikecoffee',
    taste: 'Balanced & Fruity',
    tags: ['Light', 'Single Origins'],
    discount: 15,
    size: [
      {
        label: 'Standard: 10.93 oz (About 20 Cups)',
        value: 'Standard',
        quantity: 99,
        price: 120.05
      },
      {
        label: 'Large: 32 oz (About 60 cups)',
        value: 'Large',
        quantity: 99,
        price: 250.05
      }
    ],
    thumbImg: productImage2,
    rated: 4.2,
    grindType: [
      'Whole Bean',
      'Automatic Drip',
      'Pour Over',
      'Espresso',
      'French Press',
      'Cold Brew',
      'Aeropress',
      'Percolator',
      'Chemex',
      'Moka Pot',
      'Refillable Pods'
    ],
    description: `Gentle, refreshing, light - we'd be thrilled to drink this blend any time of year but it's truly perfect for the summer.`
  },
  // Add more products here!
  {
    id: 3,
    name: 'Decaf Coffee - French Vanilla Roast',
    brand: 'Death Wish Coffee',
    taste: 'Rich & Creamy',
    tags: ['Decaf', 'Flavored'],
    discount: 20,
    size: [
      {
        label: 'Standard: 12 oz',
        value: 'Standard',
        quantity: 50,
        price: 9.99
      },
      {
        label: 'Large: 24 oz',
        value: 'Large',
        quantity: 30,
        price: 17.99
      }
    ],
    thumbImg: productImage3, // Replace with your image path
    rated: 4.7,
    grindType: ['Whole Bean', 'Ground'],
    description: 'Enjoy the taste of delicious vanilla without the caffeine jitters. Perfect for any time of day.'
  },
  {
    id: 4,
    name: 'Lavazza Coffee Blends - Try the Italian Espresso',
    brand: 'Welikecoffee',
    taste: 'Balanced & Fruity',
    tags: ['Light', 'Single Origins'],
    discount: 30,
    size: [
      {
        label: 'Standard: 10.93 oz (About 20 Cups)',
        value: 'Standard',
        quantity: 99,
        price: 120.05
      },
      {
        label: 'Large: 32 oz (About 60 cups)',
        value: 'Large',
        quantity: 99,
        price: 250.05
      }
    ],
    thumbImg: productImage2, // Replace with your image path
    rated: 4.2,
    grindType: [
      'Whole Bean',
      'Automatic Drip',
      'Pour Over',
      'Espresso',
      'French Press',
      'Cold Brew',
      'Aeropress',
      'Percolator',
      'Chemex',
      'Moka Pot',
      'Refillable Pods'
    ],
    description:
      "Gentle, refreshing, light - we'd be thrilled to drink this blend any time of year but it's truly perfect for the summer."
  },
  {
    name: 'Decaf Coffee - French Vanilla Roast',
    brand: 'Death Wish Coffee',
    taste: 'Rich & Creamy',
    tags: ['Decaf', 'Flavored'],
    discount: 50,
    size: [
      {
        label: 'Standard: 12 oz',
        value: 'Standard',
        quantity: 50,
        price: 9.99
      },
      {
        label: 'Large: 24 oz',
        value: 'Large',
        quantity: 30,
        price: 17.99
      }
    ],
    thumbImg: productImage3, // Replace with your image path
    rated: 4.7,
    grindType: ['Whole Bean', 'Ground'],
    description: 'Enjoy the taste of delicious vanilla without the caffeine jitters. Perfect for any time of day.'
  },
  {
    id: 6,
    name: 'New Product Name',
    brand: 'New Brand Name',
    taste: 'New Taste Description',
    tags: ['New Tag 1', 'New Tag 2'],
    size: [
      {
        label: 'Standard Size Label',
        value: 'Standard Size Value',
        quantity: 99,
        price: 12.99
      },
      {
        label: 'Large Size Label',
        value: 'Large Size Value',
        quantity: 50,
        price: 24.99
      }
    ],
    thumbImg: 'newProductImageURL',
    rated: 4.5,
    grindType: ['Whole Bean', 'Ground'],
    description: 'New Product Description'
  }
]
export default productList
