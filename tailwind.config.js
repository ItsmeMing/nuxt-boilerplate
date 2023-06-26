module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '450px', //mobile phone
        '3xl': '1921px', //fhd to 2k
        '4xl': '2561px' //2k to 4k
      }
    }
  },
  plugins: []
}
