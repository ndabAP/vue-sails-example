# Contributing

This project should people give an introduction into single page-applications. Furthermore, it should be a reference 
book for all kinds of features from Sails.js and Vue.js. If you think an important feature is missing, I'm happy about a 
contribution. Just make sure you fulfill the following points.

## General

- Use [JavaScript Standard Style](https://standardjs.com/)
- Watch for a clean and readable code style. More [here](https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f)
- Avoid JavaScript before [ES6](http://es6-features.org/) wherever possible
- Run tests with `npm run test` against Vue.js and Sails.js before commiting
- Add appropriate tests when adding new features
- Ideally run `npm run build` if you change Vue.js related things

For Vue.js frontend tasks, consult the [Vue.js Component Style Guide](https://github.com/pablohpsilva/vuejs-component-style-guide).

## Commits

You must follow the given commit schema, which is similar to the Angular one. A linter should warn and prevent you from 
committing if you don't follow the rules.

```
type<scope>: message
```

Where `type` is one of the following:

```
'build',
'ci',
'chore',
'docs',
'feat',
'fix',
'perf',
'refactor',
'revert',
'style',
'test'
```

And `scope` is either `client` or `server`.