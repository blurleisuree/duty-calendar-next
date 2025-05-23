import { withUnoCSS } from 'unocss/vite';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Дополнительные настройки Next.js, если нужны
};

export default withUnoCSS(nextConfig);
