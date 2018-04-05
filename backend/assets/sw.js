importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/assets/js/0.4a05744c38760e93bf24.js",
    "revision": "2fa84ba4c60be1f15a79f5e809dfaf7d"
  },
  {
    "url": "/assets/js/1.5ea5dfb53bdd715761a1.js",
    "revision": "a544f7caa4928105788ded389b330e82"
  },
  {
    "url": "/assets/js/10.45140535e142510f5aeb.js",
    "revision": "d142815493b5bae17a94009518ef42df"
  },
  {
    "url": "/assets/js/11.0b7a74d14f13be304024.js",
    "revision": "fbe1e56e6cdce483510b0a009abb242a"
  },
  {
    "url": "/assets/js/12.745b0227c4989c05ed14.js",
    "revision": "c51e7b69a1129e886761a1aaba34943a"
  },
  {
    "url": "/assets/js/13.f07ab379689a24fd635b.js",
    "revision": "26058c1cdb12ab39c7f3938aa030b3ea"
  },
  {
    "url": "/assets/js/14.b14d3b836e6e1c4fded2.js",
    "revision": "f3bb8decaeccba8f040eab897beafbdc"
  },
  {
    "url": "/assets/js/15.2ac608aced2769aec442.js",
    "revision": "5ac73c3fa41b07c3dba939ecfcf99544"
  },
  {
    "url": "/assets/js/16.4d27f1aa4665a735a5fa.js",
    "revision": "e8ec1d632f7b1c843f9f8f160fa072ec"
  },
  {
    "url": "/assets/js/17.67fabe495b9ad7d4e2da.js",
    "revision": "941a488d620ac55a18b233b1b00a3a0c"
  },
  {
    "url": "/assets/js/18.ff5a8cc7332ff032753c.js",
    "revision": "3926dc06345d954ac5b3e10c6bf7313e"
  },
  {
    "url": "/assets/js/19.74d2887b019b6c051dd3.js",
    "revision": "206b44f50058f21da6950d332e1a06ed"
  },
  {
    "url": "/assets/js/20.f6c089affba6e0dc4a05.js",
    "revision": "16be63933fec5684a0bc3e406cc07b3f"
  },
  {
    "url": "/assets/js/3.116a9e1e9a195a2894bd.js",
    "revision": "66d37073f33ab6a2d5c1371594fe7c08"
  },
  {
    "url": "/assets/js/4.8dc2a3aeebb8de91ab58.js",
    "revision": "c3e8a09575383f757927c3e39e9df33a"
  },
  {
    "url": "/assets/js/5.2fb8c0532f6199f8e988.js",
    "revision": "d280908bedfb0168b6b7d588d280d880"
  },
  {
    "url": "/assets/js/6.cb771e5f5946d1b73e5b.js",
    "revision": "a3f36bd5c4c8971af48619d4b3a40de2"
  },
  {
    "url": "/assets/js/7.a67959d7e8fb9a88a0b0.js",
    "revision": "c7729aa1320d95569bb189c1e784f845"
  },
  {
    "url": "/assets/js/8.133d4db534fa27eeac11.js",
    "revision": "21455666b0e83c567ded9f3609283ed6"
  },
  {
    "url": "/assets/js/9.ca18419b860389ed2473.js",
    "revision": "e8c6b4f1011bbf2aa6f97f22f5a9c9d6"
  },
  {
    "url": "/assets/js/app.3ff2c5afb2d4e7a2b08c.js",
    "revision": "588ac4aaf827e41d1056199111d16c02"
  },
  {
    "url": "/assets/js/manifest.eb34abe888bd6ec5ecb8.js",
    "revision": "a0364308a6949718d53db7ca0af021f3"
  },
  {
    "url": "/index.html",
    "revision": "5f0df43fb440f1ee2226bb48bd3dc318"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
