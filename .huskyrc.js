module.exports = {
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "post-commit": "git update-index -g"
    }
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "git add"]
  }
};
