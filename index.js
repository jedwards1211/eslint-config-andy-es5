module.exports = {
  "extends": [
    "eslint:recommended",
  ],
  "rules": {
    "comma-spacing": "error",
    "eol-last": "error",
    "indent": ["error", 2],
    "keyword-spacing": "error",
    "key-spacing": ["error", {
      "mode": "strict"
    }],
    "linebreak-style": "error",
    "no-console": "error",
    "no-unused-vars": ["error", {
      "args": "none", 
      "varsIgnorePattern": "React"
    }],
    "no-extra-semi": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-whitespace-before-property": "error",
    "padded-blocks": ["error", "never"],
    "semi": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", {
      "anonymous": "always", 
      "named": "never"
    }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", {"int32Hint": false}],
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false
    }]
  }
}

