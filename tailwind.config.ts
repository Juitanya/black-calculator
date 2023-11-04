/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      borderRadius: {
        'semi-md': '4px',
      },
      colors: {
        primary: '#1BA7E1',
        success: '#19C788',
        warning: '#F5BF54',
        error: '#DE6B4F',
        secondary: '#6C6C6C',
        'field-gray': '#B5B5B5',
        'stroke-gray': '#E7E7E7',
        select: '#E7F4FC',
        'green-light': '#DFF1EB',
        'red-light': '#FCE6E1',
        'grey-light': '#F1F2F5',
        'warning-light': '#FFF4DE',
        'yellow-light': '#FFF4DE',
        stroke: '#EFF0F6',
        'order-closed': '#8C929E',
        'facebook-live': '#2669EA',
        disabled: '#C4C4C4',
        topic: '#F6F6F6',
        chat: '#E9E9F2',
      },
      animation: {
        fadeIn: 'fadeIn 3s',
        fadeOut: 'fadeOut 0.3s',
        right2: 'right2 5s',
      },
      screens: {
        xs: '375px',
        '2xs': '320px',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        right2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }),
    },
  },
  plugins: [],
}
