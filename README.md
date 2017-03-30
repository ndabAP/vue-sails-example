# Vue.js with Sails.js backend example project
This project is for those who are new to [single-page applications](https://en.wikipedia.org/wiki/Single-page_application) and want to learn through a real example.

## Getting started
### Prerequisites
1. `curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -`
2. `sudo apt-get install -y nodejs`
3. `sudo npm install sails -g`
4. `cd public/frontend && npm install`
5. `cd ../backend && npm install`

### Production
First, you have to build up your Vue.js components and merge them with Sails.js. This can be done with `cd frontend && npm run build`. Now do `cd backend && sails lift` and then open your browser and go to [localhost:1337](http://localhost:1337).

### Development
`cd frontend && npm run dev` and then open [localhost:8080](http://localhost:8080) in your browser.

## Components used
The following components are used in this project:

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
Cookie sessions, password protection, tests, multilanguage, mobile version
