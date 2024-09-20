import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.jest } }
  },
  {
    plugins: {
      ['jest']: jestPlugin
    }
  },
  pluginJs.configs.recommended
];