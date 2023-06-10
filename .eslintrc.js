// eslint-disable-next-line no-undef
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    // 'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/valid-v-slot': 0
  }
}
