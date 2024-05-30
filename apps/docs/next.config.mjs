import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ["mdx", "ts", "tsx"],
  transpilePackages: ["@winnie-ui/tailwind", "@winnie-ui/css"],
};

export default withMDX(nextConfig);
