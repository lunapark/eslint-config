import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig(
    {
        languageOptions: {
            globals: {
                ...globals.browser
            }
        }
    }
);
