module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    extend: {
      colors: {
        teal: '#1b5e5e',
        tealLight: '#2a7f7f',
        gold: '#f4d5a3',
        goldDark: '#d4a574',
        cream: '#f9f7f3',
        deepBlack: '#0b0b0b'
      },
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      }
    }
  },
  plugins: []
}
