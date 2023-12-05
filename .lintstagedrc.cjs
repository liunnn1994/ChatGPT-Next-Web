module.exports = {
  "*.{md,yml,yaml}": ["prettier --write"],
  "*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,json,json5,vue}": [
    "prettier --write",
    "eslint --fix",
  ],
};
