import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { globals: globals.browser }
  },
  {
    plugins: {
      ['jest']: jestPlugin
    }
  },
  pluginJs.configs.recommended
];