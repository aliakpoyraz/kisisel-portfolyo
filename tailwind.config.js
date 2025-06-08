/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-delayed': 'fade-in 1s ease-out 0.5s both',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-up-delayed': 'fade-in-up 0.5s ease-out 0.2s both',
        'slide-in': 'slide-in 1s ease-out',
        'width': 'width 2s ease-in-out infinite',
        'height': 'height 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'color-shift': 'color-shift 8s ease-in-out infinite',
        'text-swap': 'text-swap 6s ease-in-out infinite',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'width': {
          '0%, 100%': { width: '0' },
          '50%': { width: '100%' },
        },
        'height': {
          '0%, 100%': { height: '0' },
          '50%': { height: '100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(20px)' },
          '75%': { transform: 'translateY(-30px) translateX(10px)' },
        },
        'color-shift': {
          '0%, 100%': { color: '#238636' },
          '25%': { color: '#58a6ff' },
          '50%': { color: '#bc8cff' },
          '75%': { color: '#f97583' },
        },
        'text-swap': {
          '0%, 45%': { 
            content: '"Frontend Geliştirici"',
            opacity: '1'
          },
          '50%, 95%': { 
            content: '"Backend Geliştirici"',
            opacity: '1'
          },
          '48%, 52%': { 
            opacity: '0'
          },
          '98%, 100%': { 
            opacity: '0'
          }
        },
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            fontFamily: theme('fontFamily.sans').join(', '),
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              color: theme('colors.black'),
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              color: theme('colors.black'),
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              color: theme('colors.black'),
            },
            h4: {
              fontFamily: theme('fontFamily.sans').join(', '),
              color: theme('colors.black'),
            },
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            code: {
              color: theme('colors.secondary.600'),
              backgroundColor: theme('colors.slate.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              borderLeftColor: theme('colors.primary.500'),
            },
            maxWidth: '100%',
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.secondary.400'),
              backgroundColor: theme('colors.slate.800'),
            },
            blockquote: {
              borderLeftColor: theme('colors.primary.500'),
              color: theme('colors.slate.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};