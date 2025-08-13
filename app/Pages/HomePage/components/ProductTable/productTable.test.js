import { expect, test } from 'vitest'
import { getFilteredProductData } from './productTable'

// Note that this relies on the data being static. If we were using an API, The function in question 
// would take an additional parameter for the data, and the usage here would read sample data for testing
test('Product Type Filter filters data', () => {
  expect(getFilteredProductData({productType: "Wine"})).toStrictEqual([
    {
      "index": 4,
      "isSale": false,
      "price": "$25.99",
      "productImage": "Product_5.jpeg",
      "productName": "Aquila Spark SauvB Bottle",
      "type": "Wine"
    },
    {
      "index": 5,
      "isSale": true,
      "price": "$29.99",
      "productImage": "Product_6.jpeg",
      "productName": "Bernadino Spumante Bottle",
      "type": "Wine"
    }
  ])
})

test('Product Name Filter filters data', () => {
  expect(getFilteredProductData({productName: "cr"})).toStrictEqual([
    {
      "index": 0,
      "isSale": false,
      "price": "$49.99",
      "productImage": "Product_1.jpeg",
      "productName": "Pure Blonde Crate",
      "type": "Beer"
    },
    {
      "index": 7,
      "isSale": false,
      "price": "$49.99",
      "productImage": "Product_8.jpeg",
      "productName": "Scrumpy RBerry 6x1.25L",
      "type": "Cider"
    }
  ])
})

test('Product Name and type Filters filters data simultaneously', () => {
  expect(getFilteredProductData({productType: "Beer", productName: "cr"})).toStrictEqual([
    {
      "index": 0,
      "isSale": false,
      "price": "$49.99",
      "productImage": "Product_1.jpeg",
      "productName": "Pure Blonde Crate",
      "type": "Beer"
    },
  ])
})