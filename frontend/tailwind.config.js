/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vehnicate': {
          'black': '#000000',
          'purple': '#32055C',
          'pink': '#BE326C',
        }
      },
      backgroundImage: {
        'vehnicate-gradient': 'linear-gradient(135deg, #32055C 0%, #BE326C 100%)',
        'vehnicate-gradient-reverse': 'linear-gradient(135deg, #BE326C 0%, #32055C 100%)',
        'vehnicate-full-gradient': 'linear-gradient(135deg, #000000 0%, #32055C 50%, #BE326C 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'alumni' : [ 'Alumni Sans Pinstripe', 'sans-serif'],
        'michroma': ["Michroma", 'sans-serif'],
        'ledger' : ["Ledger", 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float3D': 'float3D 6s ease-in-out infinite',
        'roadMove': 'roadMove 8s linear infinite',
        'dashMove': 'dashMove 2s linear infinite',
        'particleFloat': 'particleFloat 10s linear infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
      }
    },
  },
  plugins: [],
}
