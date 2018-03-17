workboxSW.precache([])

self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('/get')) {
    event.respondWith(
      fetch('https://static.example.com/bar/style.css')
    )
  }
})
