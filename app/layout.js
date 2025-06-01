import './globals.css';

export const metadata = {
  title: 'DutyCalendar',
  description: 'Приложение для управления дежурствами',
  manifest: '/manifest.json',
  keywords: ['приложение', 'DutyCalendar', 'Управление дежурствами', 'PWA'],
  authors: [{ name: 'blurleisure', url: 'https://github.com/blurleisuree' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleMobileWebAppCapable: 'yes',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  backgroundColor: '#ffffff',
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicons/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicons/pwa-512x512.pngg',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
