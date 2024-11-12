/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "showcase",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { cloudflare: true },
    };
  },
  async run() {
    const isProduction = $app.stage === "production";

    const domain = isProduction
      ? {
          name: "showcase.winnie-ui.com",
          dns: sst.cloudflare.dns(),
        }
      : undefined;

    new sst.aws.StaticSite("WinnieShowcase", {
      domain,
      build: {
        command: "pnpm build",
        output: "dist",
      },
    });
  },
});
