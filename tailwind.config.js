// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      bg: '405px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'main-blue': '#2F3061',
        'main-white': '#F7FFF7',
        'main-orange': '#FF9E0D',
      },
    },
  },
  plugins: [],
};
