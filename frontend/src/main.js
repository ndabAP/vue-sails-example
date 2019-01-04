import * as Sentry from '@sentry/browser'

Sentry.init(
  {
    dsn: 'https://d7efb6056b3446049b11b61f8cec0a5b@sentry.io/1363502'
  }
)

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log(registration))
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
