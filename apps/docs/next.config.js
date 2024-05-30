const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ["mdx", "ts", "tsx"],
  transpilePackages: ["@winnie-ui/tailwind", "@winnie-ui/css"],
};

module.exports = withMDX(nextConfig);
