import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

import browserConfig from "./browser.ts";
import typescriptConfig from "./typescript.ts";

export default tseslint.config(
    ...typescriptConfig,
    ...browserConfig,
    ...pluginVue.configs["flat/recommended"],
    {
        rules: {
            "vue/attributes-order": ["error", {
                alphabetical: true
            }],
            "vue/html-indent": ["error", 4],
            "vue/no-mutating-props": ["off"],
            "vue/no-v-html": ["off"],
            "vue/require-default-prop": ["off"]
        }
    }
);
