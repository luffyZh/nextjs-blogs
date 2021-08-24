/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/rewrites',
        destination: '/list',
        permanent: true,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/rewrites',
        destination: '/list',
      }
    ]
  },
  webpack: (config, { dev }) => {
    // Replace React with Preact only in client production build
    if (!dev) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
}
