import { futura } from '@/app/fonts/fonts';
import '@/styles/globals.css';

export const revalidate = 3600;

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: any };
}) {
  const currentLanguage = locale ? locale : 'uk';

  return (
    <html
      lang={currentLanguage}
      className={`${futura.variable} ${futura.className}`}
    >
      <head>
        <title>Company</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body className="bg-black-0">
        {children}
      </body>
    </html>
  );
}
