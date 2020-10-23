module.exports = {
    extends: "standard-with-typescript",
    parserOptions: {
        project: "./tsconfig.json"
    },
    rules: {
        indent: ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        semi: ["error", "always"],
        "@typescript-eslint/semi": ["error", "always"],
        quotes: ["error", "double"],
        "@typescript-eslint/quotes": ["error", "double"],
        "no-redeclare": ["error", { builtinGlobals: false }],
    }
};
