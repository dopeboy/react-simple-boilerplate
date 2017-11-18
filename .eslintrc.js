module.exports = {
  "extends": "airbnb",
  "plugins": ["jest"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "env": {
    browser: true,
    "jest/globals": true
  },

};
