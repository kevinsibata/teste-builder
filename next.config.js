const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vitat.com.br",
        port: "",
        pathname: "/**",
      },
    ],
  },
});

module.exports = nextConfig;
