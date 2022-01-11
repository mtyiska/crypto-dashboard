module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.blue.600'),
          },
          img: {
            display: 'inline-block'
          },
          hr: {
            borderColor: theme('colors.gray.400'),
            marginTop: '2em',
            marginBottom: '2em',
          }
        }
      }
    }),
    extend: {
      colors: {
        'meetup-blue': '#00455D',
        'meetup-purple': '#1F24CC',
        'gray-750': '#3f495a',
        'gray-850': '#222733',
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828',
        'gray-900-discord': '#18191c',
        'gray-900-ben': '#212224',
        'gray-900-mike': '#22262A',
        'gray-800-mike': '#2F3136',
        'gray-700-mike': '#37383F',
        'gray-form-mike': '#313239',
        'gray-footer-mike': '#292A2E',
        'black-bb-mike': '#010100',
        'black-surface-mike': '#0F1625',
        'black-button-mike': '#70EDE7',
        'card-surface': '#272A38',
        'white-mike':'#FEFEFF'
      },
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '200': '50rem',
      },
      width: {
        '7/10': '70%',
        '3/10': '30%',
      },
      fontSize: {
        xxs: '0.5rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
      zIndex: {
        "-1": "-1",
      }
    },
    container: {
      padding: '1rem'
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      'source-sans-pro': [
        'Source Sans Pro',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
