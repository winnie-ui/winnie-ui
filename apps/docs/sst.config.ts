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
    const isProduction = $app.stage === "production";

    const domain = isProduction
      ? {
          name: "winnie-ui.com",
          dns: sst.cloudflare.dns(),
        }
      : undefined;

    new sst.aws.Astro("WinnieDocs", {
      domain,
    });
  },
});
