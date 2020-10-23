// Ref
// https://prettier.io/docs/en/configuration.html
// https://prettier.io/docs/en/options.html

module.exports = {
    printWidth: 120, // default 80
    tabWidth: 4, // default 2
    useTabs: false, // default false
    semi: true, // default true
    singleQuote: false, // default false
    jsxSingleQuote: false, // default false
    trailingComma: "es5", // default "es5"
    bracketSpacing: true, // defaul true
    jsxBracketSameLine: false, // false
    arrowParens: "always", // default "always"
    rangeStart: 0, // default 0
    rangeEnd: Infinity, // default Infinity
    // "parser": "None",
    // "filepath": "None",
    requirePragma: false, // default false
    insertPragma: false, // default false
    proseWrap: "preserve", // default "preserve"
    htmlWhitespaceSensitivity: "css", // default "css"
    vueIndentScriptAndStyle: false, // default false
    endOfLine: "auto", // default "lf"
    // embeddedLanguageFormatting: "auto", // default "auto"
    overrides: [
        {
            files: ["Makefile", "*.Makefile", "legacy/**/*.Makefile"],
            options: {
                useTabs: true,
            },
        },
    ],
};
