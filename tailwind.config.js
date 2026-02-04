/** @type {import('tailwind').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./admin/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-primary': '#00A859',
        'brand-secondary': '#00D177',
        'brand-accent': '#F43F5E',
        'brand-green': '#00A859', // Alias pour compatibilité
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // FIX: Add float and scan keyframes for animations used in the loading screen.
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-112px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}