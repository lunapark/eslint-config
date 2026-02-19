# @luna-park/eslint-config

A comprehensive set of ESLint rules designed for Luna Park projects, providing consistency across TypeScript, Vue, and browser-based applications.

## Features

- **Standardized Rules**: Based on `@eslint/js` and `@stylistic/eslint-plugin`.
- **TypeScript Support**: Integration with `typescript-eslint` for robust typing.
- **Vue Integration**: Specialized rules for Vue components (extends TypeScript configuration).
- **Import Management**: Auto-sorting for imports and exports.
- **Key Sorting**: Enforces custom ordering for object keys and types.

## Installation

Install the package along with its peer dependencies:

```bash
npm install -D @luna-park/eslint-config eslint typescript typescript-eslint
```

Note: Ensure you have the necessary plugins installed if you are using specific configurations (e.g., `eslint-plugin-vue` for the Vue config).

## Usage

This package provides several entry points for different project types.

### TypeScript Configuration

Recommended for general TypeScript projects.

```javascript
// eslint.config.js
import lpConfigTs from "@luna-park/eslint-config/typescript";
import tseslint from "typescript-eslint";

export default tseslint.config(
    ...lpConfigTs
);
```

### Vue Configuration

Recommended for Vue.js projects. It includes browser globals and TypeScript rules.

```javascript
// eslint.config.js
import lpConfigVue from "@luna-park/eslint-config/vue";
import tseslint from "typescript-eslint";

export default tseslint.config(
    ...lpConfigVue
);
```

### Browser Configuration

Standalone browser configuration providing necessary globals.

```javascript
// eslint.config.js
import lpConfigBrowser from "@luna-park/eslint-config/browser";
import tseslint from "typescript-eslint";

export default tseslint.config(
    ...lpConfigBrowser
);
```
