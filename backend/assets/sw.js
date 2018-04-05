importScripts("/precache-manifest.295be16aa48febb02f43295c48f2b884.js", "https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/* eslint-disable */
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('(.*)/api/(.*)$'),
  workbox.strategies.networkFirst()
)


