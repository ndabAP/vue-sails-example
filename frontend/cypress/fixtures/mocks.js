import faker from 'faker'

export default (entity, limit, parameters) => {
  const entities = {
    products: limit => {
      let products = []
      for (let index = 0; index < limit; index++) {
        products.push({
          id: index,
          title: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          price: faker.commerce.price(),
          user: {
            id: index,
            name: faker.name.firstName()
          }
        })
      }

      return {
        products,
        amountOfProducts: parameters.amountOfProducts
      }
    },

    productsByUser: limit => {
      let products = []
      for (let index = 0; index < limit; index++) {
        products.push({
          id: index,
          title: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          price: faker.commerce.price(),
          user: index
        })
      }

      return products
    }
  }

  return entities[entity](limit)
}
