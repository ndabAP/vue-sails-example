importScripts("/precache-manifest.54b60bd188314b7a53ca8d52e8ac5dd5.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/* eslint-disable */
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('(.*)/api/(.*)$'),
  workbox.strategies.networkFirst()
)


