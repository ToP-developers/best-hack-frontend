module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "env": {
        "es6": true,
        "browser": true
    },
    "rules": {
        "no-underscore-dangle": 0,
        "no-param-reassign": 0,
        "prefer-const": 0,
        "no-lonely-if": 0,
        "eol-last": 0,
        "class-methods-use-this": 0,
        "comma-dangle": [2, "never"],
        "no-console": 0,
        "no-extend-native": ["error", { "exceptions": ["Object"] }],
        "no-useless-escape": 0,
        "quotes": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "prefer-template": "error",
        "prefer-destructuring": 0,
        "object-shorthand": "error",
        "object-curly-spacing": 0,
        "max-len": 0,
        "indent": ["error", 4, {"FunctionDeclaration": {"body": 1, "parameters": 2}, "SwitchCase": 1}],
        "no-plusplus": 0,
        "no-unused-expressions": ["error", {"allowShortCircuit": true}],
        "no-shadow": 0,
        "no-extra-bind": 0,
        "no-useless-constructor": 0,
        "no-unused-vars": 0,
        "quote-props": 0,
        "arrow-body-style": 0,
        "padded-blocks": 0,
        "operator-assignment": 0,
        "object-curly-newline": 0,
        "global-require": 0,
        "import/prefer-default-export": 0,
        "no-use-before-define": 0,
        "keyword-spacing": 0,
        "arrow-parens": 0
    }
};