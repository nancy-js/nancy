/** @type {import('next').NextConfig} */
//  (https://raw.githubusercontent.com/cosmos/chain-registry
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/cosmos/chain-registry/**",
      },
    ],
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // experimental: {
  //   appDir: true,
  //   serverActions: true,
  // },
  // webpack: (config) => {
  //   if (config.name === 'server') config.optimization.concatenateModules = false
  //   return config
  // },
};

module.exports = nextConfig;
