import type { StorybookConfig } from "@storybook/web-components-webpack5";

const config: StorybookConfig = {
  stories: ["../src/core/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: 'storybook-addon-swc',
      options: {
        enable: true,
        enableSwcLoader: true,
        enableSwcMinify: true,
        swcLoaderOptions: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
              decorators: true
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        }
      },
    }
  ],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: { },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
