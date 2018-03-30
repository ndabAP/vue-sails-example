/* eslint-disable no-undef */
workboxSW.precache([
  {
    'url': 'assets/js/8.js',
    'revision': '46ccd1303680ff9e27330c7a2d0c5373'
  },
  {
    'url': '/index.html',
    'revision': '59cdecbacf5ba216b45e68f4dd4f5fd3'
  },
  {
    'url': 'sw.js',
    'revision': '885bfeafeb656db669aa914f22209ee9'
  },
  {
    'url': 'workbox-sw.prod.v2.1.2.js',
    'revision': '685d1ceb6b9a9f94aacf71d6aeef8b51'
  }
])

self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('/get?page=1')) {
    event.respondWith(
      fetch('https://static.example.com/bar/style.css')
    )
  }
})
