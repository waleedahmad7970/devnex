import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF7',
        surface: '#FFFFFF',
        'surface-2': '#F1F3F8',
        border: '#E4E8F1',
        foreground: '#0A1B3D',
        muted: '#5A6378',
        subtle: '#8A93A8',
        canvas: '#0A1B3D',
        'canvas-2': '#13264F',

        brand: {
          DEFAULT: '#1F6DFF',
          50: '#EAF1FF',
          100: '#D0DEFF',
          200: '#A6BFFF',
          300: '#7CA0FF',
          400: '#5285FF',
          500: '#1F6DFF',
          600: '#1559E0',
          700: '#0E45B5',
          800: '#0A3486',
          900: '#062358'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        'grid-pattern':
          "radial-gradient(circle at 1px 1px, rgba(10,27,61,0.06) 1px, transparent 0)",
        'grid-pattern-dark':
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
        'hero-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(31,109,255,0.14), transparent), radial-gradient(ellipse 60% 50% at 85% 30%, rgba(31,109,255,0.10), transparent)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-up-sm': 'fadeUpSm 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-pan': 'gradientPan 8s ease-in-out infinite',
        'float-slow': 'floatY 9s ease-in-out infinite',
        'float-slower': 'floatY 13s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 2.4s linear infinite'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        fadeUpSm: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' }
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' }
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(20px, -10px, 0) scale(1.05)' },
          '66%': { transform: 'translate3d(-15px, 12px, 0) scale(0.97)' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: []
};

export default config;
