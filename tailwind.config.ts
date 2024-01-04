import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/section/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInRight: {
          '0%': { 
            opacity: '0%',
            transform: "translateX(-3rem)"
          },
          '100%': { 
            opacity: '100%',
            transform: "translateX(0)"
          }
        },
        fadeIn: {
          '0%': { 
            opacity: '0%',
            visibility: 'hidden',
          },
          '100%': { 
            opacity: '100%',
            visibility: 'visible',
          }
        },
        fadeOut: {
          '0%': {
            opacity: '100%',
            visibility: 'visible',
          },
          '100%': { 
            opacity: '0%',
            visibility: 'hidden',
          }
        },
        fadePage: {
          '0%': {
            transform: "translateY(-3rem)",
            opacity: '0%',
          },
          '100%': { 
            opacity: '100%',
            transform: "translateY(0)",
          }
        },
      },
      animation: {
        'fade-in-right': 'fadeInRight 700ms ease-in-out',
        'fade-in': 'fadeIn 300ms ease-in-out',
        'fade-out': 'fadeOut 300ms ease-in-out forwards',
        'fade-page': 'fadePage 700ms ease-in-out',
      },
    },
  },
  plugins: [
  ],
}
export default config