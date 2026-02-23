import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import pluginImportX from "eslint-plugin-import-x";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    stylistic.configs.recommended,
    sortKeysCustomOrder.configs["flat/recommended"],
    pluginImportX.flatConfigs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.browser
            },
            parserOptions: {
                parser: tseslint.parser,
                sourceType: "module"
            }
        },
        plugins: {
            "@stylistic": stylistic,
            "simple-import-sort": simpleImportSort
        },
        rules: {
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/comma-dangle": ["off"],
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/indent-binary-ops": ["error", 4],
            "@stylistic/member-delimiter-style": ["error", {
                multiline: {
                    delimiter: "semi",
                    requireLast: true
                },
                multilineDetection: "brackets",
                singleline: {
                    delimiter: "semi",
                    requireLast: true
                }
            }],
            "@stylistic/multiline-ternary": ["error", "never"],
            "@stylistic/operator-linebreak": ["error", "after"],
            "@stylistic/quotes": ["error", "double", {
                allowTemplateLiterals: "avoidEscape",
                avoidEscape: true
            }],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/template-curly-spacing": ["error", "always"],
            "@typescript-eslint/array-type": ["error", {
                default: "generic"
            }],
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
            "array-bracket-spacing": ["error", "never"],
            "arrow-parens": ["error", "always"],
            "arrow-spacing": ["error"],
            "brace-style": ["error", "stroustrup"],
            "comma-dangle": ["error", "never"],
            "comma-spacing": ["error"],
            "eol-last": ["error", "always"],
            "eqeqeq": ["error", "always"],
            "import-x/no-named-as-default-member": ["off"],
            "indent": ["off"],
            "key-spacing": ["error"],
            "keyword-spacing": ["error"],
            "no-empty": ["error", { allowEmptyCatch: true }],
            "no-multi-spaces": ["error"],
            "object-curly-spacing": ["error", "always"],
            "prefer-template": ["error"],
            "simple-import-sort/exports": ["error"],
            "simple-import-sort/imports": ["error"],
            "sort-keys-custom-order/export-object-keys": ["error"],
            "sort-keys-custom-order/import-object-keys": ["error"],
            "sort-keys-custom-order/object-keys": ["error"],
            "sort-keys-custom-order/type-keys": ["error"],
            "space-in-parens": ["error", "never"],
            "space-infix-ops": ["error"]
        },
        settings: {
            "import-x/parsers": {
                "@typescript-eslint/parser": [".ts", ".tsx"]
            },
            "import-x/resolver": {
                typescript: "eslint-import-resolver-typescript"
            }
        }
    }
);
