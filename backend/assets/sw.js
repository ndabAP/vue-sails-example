importScripts("/precache-manifest.28eda1f90a81d9bfde2bfaf166d3f21f.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

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


