/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // future: {
  //   webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
  //   // Looks like backward compatibility approach.
  // },
  // webpack(nextConfig) {
  //   nextConfig.resolve.fallback = {
  //     ...nextConfig.resolve.fallback, // if you miss it, all the other options in fallback, specified
  //     // by next.js will be dropped. Doesn't make much sense, but how it is
  //     fs: false, // the solution
  //   }
  //   return nextConfig
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-old.brawlify.com',
      },
    ],
  },
}

module.exports = nextConfig
