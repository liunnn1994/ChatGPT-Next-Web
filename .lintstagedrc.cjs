module.exports = {
  "*.{md,yml,yaml,json,json5}": ["prettier --write"],
  "*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue}": ["prettier --write", "eslint --fix"],
};
