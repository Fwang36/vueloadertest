# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


1. npm install

2. Change dsn in Sentry.init() of src/main.js

3. Generate new loader script in your Settings > Projects > {Project Name} > Client Keys (DSN) > Configure > Javascript Loader Script

4. Replace line 6 with loader script in index.html

5. npm run build

6. npm run start