import { defineConfig, type UserConfig } from "vite";

import packageDefinition from "./package.json";

export default defineConfig(() => {
    const config: UserConfig = {
        build: {
            lib: {
                entry: {
                    browser: "src/browser.ts",
                    style: "src/style.ts",
                    typescript: "src/typescript.ts",
                    vue: "src/vue.ts"
                },
                formats: ["es"],
                name: "@luna-park/eslint-config"
            },
            rollupOptions: {
                external: [...Object.keys(packageDefinition.peerDependencies || {}), /^node:/]
            }
        }
    };

    return config;
});
