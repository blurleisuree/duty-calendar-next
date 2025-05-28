import './globals.css';

export const metadata = {
  title: 'DutyCalendar',
  description: 'Описание приложения',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
