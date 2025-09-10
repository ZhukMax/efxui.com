/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Inter','Arial','Noto Sans','sans-serif'],
        mono: ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation Mono','monospace']
      },
      boxShadow: {
        'soft': '0 10px 30px -12px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}
