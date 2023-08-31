import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export async function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone();
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

  const pattern = new RegExp(
    `^(?!/(?:uk|en)(?:/|$))(.*)$`,
  );

  const isNotLocalePresent = pattern.test(url.pathname);
  if (isNotLocalePresent) {
    url.pathname = `/uk${url.pathname}`;
    return NextResponse.redirect(url);
  }
}
