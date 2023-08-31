import localFont from 'next/font/local';

export const futura = localFont({
  variable: '--font-futura',
  src: [
    {
      path: './Futura/FuturaPT-Light.woff2',
      weight: '300',
      style: 'normal',
    }
  ],
});
