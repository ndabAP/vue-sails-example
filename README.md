# Vue.js with Sails.js backend example project
This project is for those who are new to [single-page applications](https://en.wikipedia.org/wiki/Single-page_application) and want to learn through a real example.

## Getting started
### Prerequisites
I created a [Vagrant box](https://github.com/ndabAP/Vagrant-box-with-Sails.js-Vue.js-and-MongoDB) with MongoDB, Node.js, Sails.js and Vue.js. Or manually install Node.js and Sails.js.

#### Get Nodes.js
```bash
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
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

### Production
First, you have to build up your Vue.js components and merge them with Sails.js. This can be done with `cd frontend && npm run build`. Now do `cd ../backend && sails lift` and then open your browser and go to [localhost:1337](http://localhost:1337).

### Development
`cd backend && sails lift` and then `cd ../frontend && npm run dev`. After that open [localhost:8080](http://localhost:8080) in your browser.

## Components used
The following components are used in this project.

### [Sails.js](https://github.com/balderdashy/sails)
This is the backend and data provider.

### [Vue.js](https://github.com/vuejs/vue)
Handle frontend data with a [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel).

### [Vuex](https://github.com/vuejs/vuex)
A [state pattern](https://en.wikipedia.org/wiki/State_pattern).

### [Element](https://github.com/ElemeFE/element)
Frontend framework. The design part.

### [vue-resource](https://github.com/pagekit/vue-resource)
HTTP client for Vue.js.

### [vue-router](https://github.com/vuejs/vue-router)
Router for the frontend.

## To do
Cookies, password protection, tests, multilingualism, mobile version
