/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"GT Sectra Fine"', 'Palatino', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'primary-gradient': 'linear-gradient(to right, #376bab 60%, #d2292b)',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(120px, 1fr))',
      },
      animation: {
        gradient: 'gradient 8s linear ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #376bab 60%, #d2292b)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'display': 'inline-block'
        },
        '.btn-gradient': {
          'background-image': 'linear-gradient(to right, #376bab 60%, #d2292b)',
          'color': 'white',
          'position': 'relative',
          'overflow': 'hidden',
          'z-index': '1'
        },
        '.btn-gradient-hover': {
          'background-image': 'linear-gradient(to right, #376bab 60%, #d2292b)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent'
        }
      }
      addUtilities(newUtilities, ['hover', 'responsive']);
    }
  ],
};
