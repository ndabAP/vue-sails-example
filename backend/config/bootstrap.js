/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

const users = [
  {
    name: 'Joe',
    password: 'toasty' // toasty
  }, {
    name: 'Anna',
    password: 'sunflower' // sunflower
  }, {
    name: 'Tom',
    password: 'jerry' // jerry
  }
]

const products = [
  {
    title: 'Cell phone',
    description: 'Now with a cool touch display and many colors.',
    price: 199.95,
    user: 1
  }, {
    title: 'Television',
    description: 'This is a brand new television with remote control.',
    price: 499.99,
    user: 2
  }, {
    title: 'Keyboard',
    description: 'The coolest keyboard in the world. Just buy it.',
    price: 10.00,
    user: 2
  }, {
    title: 'Book',
    description: 'A entertaining, exciting book with many images.',
    price: 14.95,
    user: 3
  }, {
    title: 'Sword',
    description: 'Take your enemies apart with this lovely sword.',
    price: 300,
    user: 2
  }, {
    title: 'Mouse',
    description: 'This is the new generation mouse with multiple inputs.',
    price: 12.99,
    user: 3
  }
]

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  users.forEach(user => {
    User.findOrCreate({
      name: user.name,
      password: user.password
    }).exec((error, user) => {
      if (error) sails.log.error(new Error(error))

      sails.log.info('Created fixture user', user)
    })
  })

  products.forEach(product => {
    Product.findOrCreate({
      title: product.title,
      description: product.description,
      price: product.price,
      user: product.user
    }).exec((error, product) => {
      if (error) sails.log.error(new Error(error))

      sails.log.info('Created fixture product', product)
    })
  })

  cb()
}
