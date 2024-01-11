module.exports = {
  endOfLine: "auto",
  bracketSameLine: false,
  embeddedLanguageFormatting: "auto",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: false,
  proseWrap: "preserve",
  quoteProps: "consistent",
  requirePragma: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  experimentalTernaries: true,
  bracketSpacing: true,
  semi: true,
  singleAttributePerLine: false,
  vueIndentScriptAndStyle: false,

  // Import sorting rules
  importOrder: [
    // Vue, React, Svelte, Qwik, Astro, Nuxt, Next, etc.
    "^react$", // React
    "^react-dom$", // React
    "^svelte$", // Svelte
    "^vue$", // Vue
    "^astro$", // Astro
    "^@builder-io/qwik$", // Qwik
    "^next$", // Next
    "^nuxt$", // Nuxt
    "",
    "^@core/(.*)$",
    "^@server/(.*)$",
    "^@client/(.*)$",
    "^@ui/(.*)$",
    "^@utils/(.*)$",
    "^@types/(.*)$",
    "",
    "<BUILTIN_MODULES>",
    "",
    "<TYPES>",
    "<TYPES>^[.]",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^(@/)(~/)(/.*)", // Absolute imports
    "^~/(.*)$", // Tilde imports
    "",
    "^[^./]", // Anything that does not start with a dot
    "^[./]", // Anything that starts with a dot
    "",
    "^(?!.*\\.css$).*\\./.*$",
    ".css$", // CSS imports
  ],
  // Since prettier 3.0, manually specifying plugins is required
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-curly",
    "prettier-plugin-jsdoc",
    "prettier-plugin-packagejson",
  ],
  // This plugin's options
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
