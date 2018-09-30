# Vue.js with Sails.js example project

This project is for those who are new to
[single-page applications](https://en.wikipedia.org/wiki/Single-page_application) and want to learn through a real
example. Besides that, it should cover most of the features from Sails.js and Vue.js, like a reference book. For a better understanding, you should be aware of [JavaScript ES6 features](http://es6-features.org) and also [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

To see this project in action, click [here](https://vue-sails-example.herokuapp.com/).

## Features

This project should cover as many features as possible. It should be used as an example for newbies and also serve as
a reference book. These notable elements are covered.

- Internationalization
- Unit and functional tests (frontend tests with Cypress.io)
- Dedicated mobile version
- Socket.IO usage
- Local storage plus cookie authentication
- User input validation
- Basic progressive web app support
- State persistence
- Natural language processing

## Installation

### Prerequisites

To get started, you need Node.js. It's also recommend to have Sails.js globally installed. If you don't want to have Sails.js globally installed just use `npm run dev`. Finally, install the Node.js modules.

#### Get Node.js

```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

#### Get Sails.js (optional)

```bash
$ sudo npm install sails -g
```

#### Install modules

```bash
$ cd frontend && npm install
$ cd ../backend && npm install
```

## Usage

### Development

`cd backend && sails lift` and then `cd ../frontend && npm run dev`. After that, open
[localhost:8080](http://localhost:8080) in your browser. Make sure that you start both servers simultaneously.

### Production

First, you have to build up your Vue.js components and merge them with Sails.js. This can be done with
`cd frontend && npm run build`. Now do `cd ../backend && NODE_ENV=production node app.js` and then open your browser and go to
[localhost:1337](http://localhost:1337).

## Commands

### Backend

For a complete list see `package.json`.

| Command             | Description                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------------|
| `npm run dev`       | Start Sails.js if you didn't install it globally                                                 |
| `npm run dev:watch` | Start Sails.js with watch mode if you didn't install it globally (this will delete new products)                                 |
| `npm run test`      | Run all available tests like unit or functional tests                                            |

### Frontend

For a complete list see `package.json`.

| Command                   | Description                                                                              |
|---------------------------|------------------------------------------------------------------------------------------|
| `npm run dev`             | Start the development server at [localhost:8080](http://localhost:8080)                  |
| `npm run build`           | Minfiy, uglify and merge the application with Sails.js                                   |
| `npm run test`            | Run all available tests like unit or functional tests                                    |

## Essential components used

The following components are used in this project. There are plenty more, though, check the `package.json` files.

### [Sails.js](https://github.com/balderdashy/sails)

This is the backend and data provider.

### [Vue.js](https://github.com/vuejs/vue)

Handle frontend data with a [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel).

### [Vuex](https://github.com/vuejs/vuex)

A [state pattern](https://en.wikipedia.org/wiki/State_pattern).

### [BootstrapVue](https://github.com/bootstrap-vue/bootstrap-vue)

Frontend framework. The design part.

### [vue-resource](https://github.com/pagekit/vue-resource)

HTTP client for Vue.js.

### [vue-router](https://github.com/vuejs/vue-router)

Router for the frontend.

## Starter template

If you want to start from scratch without any content take a look at the [starter template](https://github.com/steventhanna/vue-sails-template) made by [Steven Hanna](https://github.com/steventhanna). It uses the same setup as this example.

## Code style

This project fulfils the [JavaScript Standard Style](https://standardjs.com/).

## Author

[Julian Claus](https://www.julian-claus.de) and contributors.

## License

MIT
