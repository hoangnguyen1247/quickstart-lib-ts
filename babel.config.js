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
    "sourceMaps": "inline",
    "env": {
        "esm": {
            "presets": [ // order: last to first
                [
                    "@babel/env",
                    {
                        "loose": true,
                        "shippedProposals": true,
                        "modules": false,
                        "targets": {
                            "ie": 9
                        }
                    }
                ],
                "@babel/preset-typescript",
            ],
            "plugins": [ // order: first to last
                [ "@babel/plugin-transform-runtime", { "useESModules": true }]
            ]
        }
    }
};
