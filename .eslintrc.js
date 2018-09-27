module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions":
                    [
                        "ProfileCard.js",
                        "withApollo.js",
                        "_app.js",
                        "App.js",
                        "Routes.js",
                        "index.js",
                        ".jsx"
                    ]
            }
        ],
        "max-len": [1, 120, 2, { ignoreComments: true }],
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["to"]
        }]
    }
};