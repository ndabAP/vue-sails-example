const browserWidth = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.documentElement.clientWidth
)

if (browserWidth >= 768) import('./bootstrap.desktop')
if (browserWidth < 768) import('./bootstrap.mobile')
