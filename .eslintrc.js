module.exports = {
    "extends": [
      "wesbos"
    ],
    "rules": {
      "no-console": 1,
      "prefer-destructuring": 0,
      "react/destructuring-assignment": 0,
      "react/prop-types": 1,
      "prettier/prettier": [
        "error",
        {
          "trailingComma": "es5",
          "singleQuote": true,
          "printWidth": 120,
          "tabWidth": 2,
        }
      ]
    }
  };