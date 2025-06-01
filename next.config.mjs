const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/calendar',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
