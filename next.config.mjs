/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1:5500", "images.ctfassets.net", "randomuser.me"],
  },
  // images: {
  //     remotePatterns: [
  //       {
  //         protocol: 'http',
  //         hostname: '127.0.0.1',
  //         port: '5500',
  //         pathname: '/public/assets/**',
  //       },
  //     ],
  //   },
  // reactStrictMode: true,
};

export default nextConfig;
