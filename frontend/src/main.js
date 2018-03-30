if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log(registration)
      registration.pushManager.subscribe({userVisibleOnly: true})
    })
    .catch(registrationError => console.log(registrationError))
  })
}

const browserWidth = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.documentElement.clientWidth
)

if (browserWidth >= 768) import('./bootstrap.desktop')
if (browserWidth < 768) import('./bootstrap.mobile')
