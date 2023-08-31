/** @type {import("tailwindcss").Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  // todo: will changed in tailwind v4+
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      careerPhotoSection: 'clamp(30px, 6.3vw, 120px)',
      sm: [
        '12px',
        {
          letterSpacing: '0.2em',
        },
      ],
      base: '16px',
      xl: [
        '18px',
        {
          lineHeight: '28px',
        },
      ],
      '2xl': [
        '24px',
        {
          lineHeight: '28px',
        },
      ],
      '3xl': '32px',
      mainHeaderMobile: [
        '40px',
        {
          lineHeight: '48px',
        },
      ],
      mainHeaderMiddle: [
        '68px',
        {
          lineHeight: 1,
        },
      ],
      mainHeader: [
        '96px',
        {
          lineHeight: 1,
        },
      ],
      sectionHeader: [
        '56px',
        {
          lineHeight: '64px',
        },
      ],
      pageHeading: [
        '200px',
        {
          lineHeight: '200px',
        },
      ],
    },
    extend: {
      backgroundPosition: {
        heroImagePosition: '15%',
      },
      screens: {
        // xs: '375px',
        xsCustom: '460px',
        // sm: '640px',
        // md: '768px',
        mdCustom: '934px',
        // lg: '976px',
        1010: '1010px',
        lgCustom: '1152px',
        // xl: '1440px',
        // '2xl': '1535px'
      },
      height: {
        screenSVH: '100svh',
      },
      borderRadius: {
        none: '0',
        4: '4px',
        8: '8px',
        40: '40px',
        circle: '50%',
        button: '64px',
        headerResponsive: '28px',
        header: '38px',
      },
      blur: {
        '3xl': '150px',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        card: '0px 20px 40px rgba(0, 0, 0, 0.09)',
        activeCard:
          '0px 100px 80px rgba(0, 0, 0, 0.14), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.10064), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.083455), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.07), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.056545), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0393604)',
        hoverBtn: '0px 0px 20px rgba(110, 237, 163, 0.64)',
        scrollDownBadge:
          'box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.17), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.122205), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.101338), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.085), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0686618), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0477948)',
      },

      dropShadow: {
        mainAnimatedImage: [
          '0px 5.7282209396362305px 2.2138051986694336px rgba(21, 7, 56, 0.06)',
          '0px 13.765710830688477px 5.32008171081543px rgba(21, 7, 56, 0.09)',
          '0px 25.919612884521484px 10.017241477966309px rgba(21, 7, 56, 0.11)',
          '0px 46.23616027832031px 17.869047164916992px rgba(21, 7, 56, 0.13)',
          '0px 86.47965240478516px 33.422088623046875px rgba(21, 7, 56, 0.16)',
          // '0px 207px 80px rgba(21, 7, 56, 0.22)',
        ],
      },
      /* Start text-shadow plugin */
      textShadow: {
        heroHeader:
          '0px 100px 80px rgba(18, 6, 36, 0.3), 0px 41.7776px 33.4221px rgba(18, 6, 36, 0.215656), 0px 22.3363px 17.869px rgba(18, 6, 36, 0.178832), 0px 12.5216px 10.0172px rgba(18, 6, 36, 0.15), 0px 6.6501px 5.32008px rgba(18, 6, 36, 0.121168), 0px 2.76726px 2.21381px rgba(18, 6, 36, 0.0843437)',
      },
      /* End text-shadow plugin */
      backgroundImage: {
        mainPageImg: "url('../../public/hero_background.jpeg')",
        mainPageBlurImg: "url('../../public/hero-blur_background.jpeg')",
        homeBackgroundGradient: `radial-gradient(at 40% 20%, hsla(11, 48%, 36%, 1) 0px, transparent 50%),
              radial-gradient(at 80% 0%, hsla(172, 48%, 36%, 1) 0px, transparent 50%), 
              radial-gradient(at 0% 50%, hsla(338, 48%, 36%, 1) 0px, transparent 50%), 
              radial-gradient(at 80% 50%, hsla(323, 48%, 36%, 1) 0px, transparent 50%), 
              radial-gradient(at 0% 100%, hsla(5, 48%, 36%, 1) 0px, transparent 50%), 
              radial-gradient(at 80% 100%, hsla(225, 48%, 36%, 1) 0px, transparent 50%), 
              radial-gradient(at 0% 0%, hsla(326, 48%, 36%, 1) 0px, transparent 50%)`,
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      colors: {
        transparent: 'transparent',
        primary: '#6EEDA3',
        primaryDisabled: 'rgba(110, 237, 163, 0.2)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        vacancyCardBg: 'rgba(255, 255, 255, 0.1)',
        greenLight: '#1C3D2A',
        dark: '#13291C', //button text
        disabledBtn: 'rgba(255, 255, 255, 0.2)',
        black: {
          0: '#000000',
          100: 'rgba(9, 5, 26, 1)',
        },
        select: 'rgba(255, 255, 255, 0.1)',
        purple: {
          300: '#6747E7',
          700: '#4B28CC',
        },
        red: '#FE0404',
        gray: {
          100: '#D9D9D9', // underline
        },
        green: '#255238',
        badge: {
          text: 'rgba(255, 255, 255, 0.5)',
          border: 'rgba(255, 255, 255, 0.2)',
        },
        header: {
          background: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.11)',
        },
        accordion: {
          underline: 'rgba(255, 255, 255, 0.1)',
        },
        page: {
          homeBackground: 'hsla(242, 100%, 9%, 1)',
          aboutPrim: '#1C3D2A',
          aboutSecond: '#112419',
          servicePrim: '#2B2443',
          serviceSecond: '#1A1629',
          careerPrim: '#501B0B',
          careerSecond: '#290E06',
          contactPrim: '#0D2D3F',
        },
      },
      fontWeight: {
        'weight-300': '300',
        'weight-400': '400',
        'weight-500': '500',
        'weight-550': '550',
        'weight-600': '600',
        'weight-700': '700',
        'weight-800': '800',
      },
      fontFamily: {
        // 'futura-300': 'Futura-Light',
        // 'futura-400': 'Futura-Book',
        // 'futura-500': 'Futura-Medium',
        // 'futura-550': 'Futura-Demi',
        // 'futura-600': 'Futura-Heavy',
        // 'futura-700': 'Futura-Bold',
        // 'futura-800': 'Futura-ExtraBold',
        futura: ['var(--font-futura)'],
      },
      keyframes: {
        expandAnimation: {
          '0%': {
            height: '0',
            opacity: '0',
          },
          '75%': {
            opacity: '0.2',
          },
          '100%': {
            height: '432px',
            opacity: '1',
          },
        },
        collapseAnimation: {
          '0%': {
            height: '432px',
            opacity: '1',
          },
          '40%': {
            opacity: '0.2',
          },
          '100%': {
            height: '0',
            opacity: '0',
          },
        },
        scaleInAnimation: {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        modalFadeInAnimation: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0.4',
          },
        },
        fadeInAnimation: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        rotateTextAnimation: {
          '0%': {
            transform: 'rotateZ(0)',
            'animation-timing-function': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          },
          '80%': {
            transform: 'rotateZ(-359.99deg)',
            'animation-timing-function': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          },
          '100%': {
            transform: 'rotateZ(-359.99deg)',
            'animation-timing-function': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          },
        },
        arrowAnimation: {
          '0%': {
            transform: 'translateY(-100%)',
            'animation-timing-function': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          },
          '33%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          },
          '66%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          },
          '100%': {
            transform: 'translateY(100%)',
            'animation-timing-function': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          },
        },
        blinking: {
          '0%': { opacity: 0 },
          '40%': { opacity: 0.4 },
          '60%': { opacity: 1 },
          '90%': { opacity: 0.4 },
          '100%': { opacity: 0.1 },
        },
        fallsFromUpside: {
          '0%': { transform: 'translate(55px, -150px)' },
        },
        fallsFromDownside: {
          '0%': { transform: 'translate(-55px, 150px)' },
        },
        moveBackgroundPosition: {
          '0%': {
            'background-position': '0% 0%',
          },
          '20%': {
            'background-position': '100% 100%',
          },
          '40%': {
            'background-position': '100% 0%',
          },
          '60%': {
            'background-position': '0% 100%',
          },
          '80%': {
            'background-position': '50% 50%',
          },
          '100%': {
            'background-position': '0% 0%',
          },
        },
      },
      animation: {
        expand: 'expandAnimation 0.15s forwards',
        collapse: 'collapseAnimation 0.15s forwards',
        scaleIn: 'scaleInAnimation 0.4s ease 0s forwards',
        modalFadeIn: 'modalFadeInAnimation 0.3s ease 0s forwards',
        fadeIn: 'fadeInAnimation 1s forwards',
        rotate: 'rotateTextAnimation 5s linear infinite',
        arrow: 'arrowAnimation 2s linear infinite',
        blinking: 'blinking 1.8s ease-in-out infinite',
        fallsFromUpside: 'fallsFromUpside 2s forwards',
        fallsFromDownside: 'fallsFromDownside 2s forwards',
        moveHomeGradient: 'moveBackgroundPosition 50s ease-in-out infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
