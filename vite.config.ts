import dts from "unplugin-dts/vite";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";

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
        },
        plugins: [
            dts()
        ]
    };

    return config;
});
