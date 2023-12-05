import type { StorybookConfig } from "@storybook/web-components-webpack5";

const config: StorybookConfig = {
  stories: ["../src/core/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {
      builder: {
        useSWC: true
      }
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config, options) {
    const swcRule = config.module!.rules!.flatMap(rule => (<any>rule)?.use?.[0]?.options?.jsc).find(jsc => !!jsc);
    console.dir(swcRule);
    swcRule.parser = {
      ...swcRule.parser,
      decorators: true
    }

    return config;
  },
};
export default config;
