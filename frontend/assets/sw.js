workboxSW.precache([
  {
    "url": "assets/js/0.fa2b5c04cdd82f9ece9e.js",
    "revision": "46ccd1303680ff9e27330c7a2d0c5373"
  },
  {
    "url": "assets/js/1.fdff118cce8b56515747.js",
    "revision": "76510740652feffa0462209643e9b071"
  },
  {
    "url": "assets/js/10.c1abd5ca7518510371c0.js",
    "revision": "f6f87ac67cd212a9290183cc5de1c040"
  },
  {
    "url": "assets/js/11.9d9622b585ce8c513503.js",
    "revision": "bf731a55219f540086dfb88d7e3c8dd1"
  },
  {
    "url": "assets/js/12.45604e4e43d2f40293e2.js",
    "revision": "1f46f0b5fa770096ea34a5c8d30e7870"
  },
  {
    "url": "assets/js/13.470d8522290baf1f84a8.js",
    "revision": "c144a44e2ee3b1cfe78026f426120596"
  },
  {
    "url": "assets/js/14.a8be98054aba97261bc4.js",
    "revision": "17aa404d7ae9adf7ecb76204620c79ae"
  },
  {
    "url": "assets/js/15.d6f53cc1cffcd21bf047.js",
    "revision": "fe2eb1fd4cae97277539473efa7c04e2"
  },
  {
    "url": "assets/js/16.1d6cb05b032896246bde.js",
    "revision": "3ac63e29a616e273742e41a312b014c7"
  },
  {
    "url": "assets/js/17.9ba61c4db855be8d30ec.js",
    "revision": "95c966209eb382bfef28d7ea09a82a33"
  },
  {
    "url": "assets/js/18.ad7b8a347eb4c766ec7f.js",
    "revision": "4dd67f92947527974652e291f8f64f6a"
  },
  {
    "url": "assets/js/19.74d2887b019b6c051dd3.js",
    "revision": "206b44f50058f21da6950d332e1a06ed"
  },
  {
    "url": "assets/js/20.2e36d6aa2aa5ff0ccf95.js",
    "revision": "a049a26647d5da8c5588f0685c9740b9"
  },
  {
    "url": "assets/js/3.ac789ca8e1ff4ce556ff.js",
    "revision": "6a472eb0a86e35ec76e3d588d1d9b6dd"
  },
  {
    "url": "assets/js/4.92abf3502479a0d610d9.js",
    "revision": "ad0bcf3e086c1228dbdb5099f76f3761"
  },
  {
    "url": "assets/js/5.9d14ddafdbba9a7d4d52.js",
    "revision": "3cb2c8ee3e03c6630a1c6141cef57b0b"
  },
  {
    "url": "assets/js/6.e7d2655eb36ddc7f6802.js",
    "revision": "f2746a944cbb39c3988c2fc92b3de93b"
  },
  {
    "url": "assets/js/7.fa8f2f2f69a5a764066a.js",
    "revision": "013b4e06b4773a6ebcf2a1d3341f06f2"
  },
  {
    "url": "assets/js/8.3e35b77feb37eb04ca06.js",
    "revision": "c7b9dd6cad02d3832e32216e8ce771f9"
  },
  {
    "url": "assets/js/9.0b9a8333641f37df9304.js",
    "revision": "5cda900f4366d68f35cb48dd16352a98"
  },
  {
    "url": "assets/js/app.a228cdc94e5d0b81b316.js",
    "revision": "ba23f95d27f466f5eb35586ae2acc8ba"
  },
  {
    "url": "assets/js/manifest.7c2f486311d7a24c5325.js",
    "revision": "21a9c7db1653374a970ba51a6370b64e"
  },
  {
    "url": "/index.html",
    "revision": "59cdecbacf5ba216b45e68f4dd4f5fd3"
  },
  {
    "url": "sw.js",
    "revision": "885bfeafeb656db669aa914f22209ee9"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
])

self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('/get')) {
    event.respondWith(
      fetch('https://static.example.com/bar/style.css')
    )
  }
})
