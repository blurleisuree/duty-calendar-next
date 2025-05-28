import { NextResponse } from 'next/server';

export function middleware(request) {
  // ...ваша логика или просто пропуск запроса...
  return NextResponse.next();
}