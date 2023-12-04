module.exports = {
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,json,json5,yml,yaml,vue}': [
    'eslint --fix',
    'prettier . --write'
  ]
};
