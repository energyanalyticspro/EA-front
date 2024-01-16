/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  disableExperimentalFeaturesWarning: true
};

module.exports = nextConfig;
