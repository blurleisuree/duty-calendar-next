import unocss from '@unocss/webpack';

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(unocss());
    return config;
  },
};

export default nextConfig;