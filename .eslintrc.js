module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prettier/prettier": "error",
      "react/prop-types": "off",
      "react/display-name": "off",
      "no-empty": "off",
      "prefer-rest-params": "off",
      "no-case-declarations": "off",
      "no-async-promise-executor": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-useless-escape": "off",
      "no-useless-catch": "off",
      "@typescript-eslint/no-var-requires": "off",
      "no-console": "warn",
      "sort-imports": [
        "warn",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true, // TODO: pick in future
          allowSeparatedGroups: false
        }
      ]
    },
    settings: {
      react: {
        version: "latest"
      }
    }
  };
  