# Vue.js with Sails.js example project

<p align="center">
  <a href="https://github.com/standard/standard">
    <img src="https://cdn.rawgit.com/standard/standard/master/badge.svg" />
  </a>
</p>

This project is for those who are new to 
[single-page applications](https://en.wikipedia.org/wiki/Single-page_application) and want to learn through a real 
example. Besides that, it should cover most of the features from Sails.js and Vue.js, like a reference book. For a better understanding, you should be aware of [JavaScript ES6 features](http://es6-features.org) and also [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

To see this project in action, click [here](https://vue-sails-example.herokuapp.com/). **Warning**: Since free Heroku applications sleep after 30 minutes of inactivity (no web request occurred), the application may need to wake up first, which can take some seconds.

## Getting started

### Prerequisites

I created a [Vagrant box](https://github.com/ndabAP/Vagrant-box-with-Sails.js-Vue.js-and-MongoDB) with MongoDB, Node.js, 
Sails.js and Vue.js and also a 
[Docker file](https://github.com/ndabAP/Docker-image-with-Sails.js-vue-cli-Node.js-and-MongoDB). Or manually install 
Node.js and Sails.js.

#### Get Node.js

```bash
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

#### Get Sails.js

```bash
$ sudo npm install sails -g
```

#### Install modules

```bash
$ cd frontend && npm install
$ cd ../backend && npm install
```

### Development

`cd backend && sails lift` and then `cd ../frontend && npm run dev`. After that, open 
[localhost:8080](http://localhost:8080) in your browser. Make sure that you start both servers.

### Production

First, you have to build up your Vue.js components and merge them with Sails.js. This can be done with 
`cd frontend && npm run build`. Now do `cd ../backend && NODE_ENV=production node app.js` and then open your browser and go to 
[localhost:1337](http://localhost:1337).

## Commands

### Backend

#### Start

Run the Sails.js application in the current directory at [localhost:1337](http://localhost:1337).

```bash
$ sails lift
```

Start Sails.js if you didn't install it globally.

```bash
$ npm run dev
```

#### Run tests

Run all available tests like unit or functional tests.

```bash
$ npm run test
```

### Frontend

#### Start

Start the development server at [localhost:8080](http://localhost:8080).

```bash
$ npm run dev
```

#### Make production ready

Minfiy, uglify and merge the application with Sails.js.

```bash
$ npm run build
```

#### Run tests

Run all available tests like unit or functional tests.

```bash
$ npm run test
```

## Covered elements

This project should cover as many features as possible. It should be used as an example for newbies and also serve as 
a reference book. These notable elements are covered.

- Internationalization
- Unit and functional tests (frontend tests with Cypress.io)
- Dedicated mobile version
- Socket.IO usage
- Local storage plus cookie authentication
- User input validation

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

## Code style

This project fulfils the [JavaScript Standard Style](https://standardjs.com/).
