const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  i18n: {
    locales: ['de', 'en', 'sq', 'mk'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  trailingSlash: true,
  webpack: (config) => {
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
})
