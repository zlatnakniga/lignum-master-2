// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    fontSize: {
      xs: ['12px', '20px'],
      sm: ['14px', '22px'],
      base: ['16px', '26px'],
      lg: ['18px', '28px'],
      xl: ['20px', '30px'],
      '2xl': ['24px', '32px'],
      '3xl': ['28px', '40px'],
      '4xl': ['40px', '54px'],
      '5xl': ['48px', '64px'],
      '6xl': ['60px', '79px'],
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-roboto_slab)', ...config.fontFamily.serif],
        sans: ['var(--font-mulish)', ...config.fontFamily.sans],
      },
      colors: {
        black: {
          ...config.colors.black,
          100: '#16161C',
        },
        gray: {
          ...config.colors.gray,
          100: '#F9F9F9',
          200: '#F4F4F4',
          300: '#C4C4C4',
          900: '#212121',
        },
        brown: {
          500: '#BEA77F',
          600: '#77643C',
        },
        blue: {
          ...config.colors.blue,
          800: '#3C3B48',
          900: '#252634',
        },
      },
      boxShadow: {
        card: ' 0px 10px 30px rgba(0, 0, 0, 0.1)',
        dark: '0px 4px 30px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
    // Flex Gap plugin
    require('./flexgap'),
  ],
}
