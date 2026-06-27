import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mega: ['Archivo Black', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      colors: {
        ink: '#0c0c10',
        'ink-alt': '#15151c',
        accent: '#dfff1c',
        accent2: '#ff3d6e',
        line: 'rgba(245,245,240,0.12)'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        digmark: {
          primary: '#dfff1c',
          secondary: '#ff3d6e',
          accent: '#1ce0ff',
          neutral: '#15151c',
          'base-100': '#0c0c10',
          'base-200': '#15151c',
          'base-content': '#f5f5f0',
          info: '#1ce0ff',
          success: '#1cffb0',
          warning: '#ff9a1c',
          error: '#ff3d6e'
        }
      }
    ],
    darkTheme: 'digmark'
  }
}
