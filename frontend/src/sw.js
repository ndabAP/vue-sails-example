/* eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

console.log('Service Worker initialized')

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.networkFirst()
)
