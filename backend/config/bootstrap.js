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

const users = [{
  name: 'Joe',
  password: 'toasty'
}, {
  name: 'Anna',
  password: 'sunflower'
}, {
  name: 'Tom',
  password: 'jerry'
}]

const products = [{
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
}, {
  title: 'Watch',
  description: 'There is no better watch in this world. Just buy it.',
  price: 199.95,
  user: 1
}, {
  title: 'Laptop',
  description: 'This laptop lacks of nothing. You can do everything with it.',
  price: 700,
  user: 2
}, {
  title: 'Printer',
  description: 'You print so many things with this printer. Give it a try.',
  price: 395,
  user: 1
}, {
  title: 'Headphones',
  description: 'Feel the music with these headphones. Exclusive and special.',
  price: 100.95,
  user: 2
}, {
  title: 'House',
  description: 'Many rooms, many windows, one door. What more to say? It\'s a house.',
  price: 100000,
  user: 2
}, {
  title: 'Water',
  description: 'If you feel dry and not liquid you should buy this water instantly.',
  price: 0.95,
  user: 1
}]

module.exports.bootstrap = function(cb) {
  users.forEach(user => {

    User
      .findOne({
        name: user.name
      })
      .exec((error, potentialUser) => {
        if (error) sails.log.error(error)

        if (!potentialUser) {
          User
            .create({
              name: user.name,
              password: user.password
            })
            .exec((error, user) => {
              sails.log.info('Created fixture user', user)
            })
        }
      })
  })

  products.forEach(product => {
    Product
      .findOrCreate({
        title: product.title,
        description: product.description,
        price: product.price,
        user: product.user
      })
      .exec((error, product) => {
        if (error) sails.log.error(error)

        sails.log.info('Created fixture product', product)
      })
  })

  cb()
}
