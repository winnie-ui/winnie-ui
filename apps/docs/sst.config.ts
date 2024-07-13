/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "winnie-docs",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { cloudflare: true },
    };
  },
  async run() {
    new sst.aws.Astro("WinnieDocs", {
      domain: {
        name: "winnie-ui.com",
        dns: sst.cloudflare.dns(),
      },
    });
  },
});
