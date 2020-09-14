module.exports = {
    "ignore": [
        "node_modules",
        "build"
    ],
    "presets": [
        "@babel/preset-typescript",
        "@babel/preset-env",
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
        ["babel-plugin-module-resolver", {
            "root": ["."],
            "extensions": [".js", ".ts", ".tsx", ".json"],
            "alias": {
                "src": ["./src/"],
                "server": ["./server/"]
            }
        }]
    ],
    "sourceMaps": "inline"
}
